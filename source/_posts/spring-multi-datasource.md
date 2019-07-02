---
title: 借助Spring框架实现多数据源进行动态路由数据源进行数据查询
date: 2019-06-29 23:32:35
categories: Spring
---

- 场景

  业务需要，不同类型数据分布在不同集群以提高查询性能，为此系统存在多个数据源。数据源实现方式如下。
<!-- more -->
  
  
- 解决方案  
  
  **方案1 ：**
  
   静态配置多个数据源，按需使用，不具备动态调整能力。示例代码：

2. ```xml
   <?xml version="1.0" encoding="UTF-8"?>
   <beans xmlns="http://www.springframework.org/schema/beans"
          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
          xmlns:context="http://www.springframework.org/schema/context"
          xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
        http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
    
       <context:component-scan base-package="com.javartisan.data.*"/>
       <context:property-placeholder location="classpath:config/env.properties" ignore-unresolvable="true"/>
       <!-- 配置数据源1“ -->
       <bean name="dataSource" class="com.alibaba.druid.pool.DruidDataSource"
             init-method="init" destroy-method="close">
           <property name="url" value="${mysql.url}"/>
           <property name="username" value="${mysql.username}"/>
           <property name="password" value="${mysql.password}"/>
           <property name="initialSize" value="1"/>
           <property name="maxActive" value="5"/>
           <property name="minIdle" value="0"/>
       </bean>
       <!-- 数据源1的SessionFactory -->
       <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
           <property name="dataSource" ref="dataSource"/>
           <property name="configLocation" value="classpath:config/mybatis-config.xml"/>
           <property name="mapperLocations">
               <list>
                   <value>classpath:com/javartisan/data/day/report/mapper/*.xml</value>
               </list>
           </property>
       </bean>
        <!-- 数据源1的MapperScannerConfigurer -->
       <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
           <property name="basePackage" value="com.javartisan.data.day.report.mapper"/>
           <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
       </bean>
    
    
       <!--数据源2：Spark DataSource -->
       <bean name="sparkDataSource" class="com.alibaba.druid.pool.DruidDataSource"
             init-method="init" destroy-method="close">
           <property name="url" value="${spark.mysql.url}"/>
           <property name="username" value="${spark.mysql.username}"/>
           <property name="password" value="${spark.mysql.password}"/>
           <property name="initialSize" value="1"/>
           <property name="maxActive" value="5"/>
           <property name="minIdle" value="0"/>
           <property name="maxWait" value="60000"/>
           <property name="validationQuery" value="${validationQuery}"/>
           <property name="testOnBorrow" value="false"/>
           <property name="testOnReturn" value="false"/>
           <property name="testWhileIdle" value="true"/>
           <property name="timeBetweenEvictionRunsMillis" value="60000"/>
           <property name="minEvictableIdleTimeMillis" value="25200000"/>
           <property name="removeAbandoned" value="true"/>
           <property name="removeAbandonedTimeout" value="1800"/>
           <property name="logAbandoned" value="true"/>
           <property name="filters" value="mergeStat"/>
       </bean>
    
       <!-- 数据源2的SessionFactory -->
       <bean id="sparkSqlSessionFactory" class="org.mybatis.spring.">
           <property name="dataSource" ref="sparkDataSource"/>
           <property name="configLocation" value="classpath:config/mybatis-config.xml"/>
           <property name="mapperLocations">
               <list>
                   <value>classpath:com/javartisan/data/week/report/mapper/*.xml</value>
               </list>
           </property>
       </bean>
    
         <!-- 数据源2的MapperScannerConfigurer -->    
       <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
           <property name="basePackage" value="com.javartisan.data.week.report.mapper"/>
           <property name="sqlSessionFactoryBeanName" value="sparkSqlSessionFactory"/>
       </bean>
   </beans>
   ```

   主要是根据Mapper的文件包路径区分数据源,Mapper包路径如下：com.javartisan.data.day.report.mapper与com.javartisan.data.week.report.mapper; 分别表示日报与周报的数据源（业务原因，日报与周报的数据源分布在两个不同MYSQL环境，因此需要多数据源）；这种多数据源就是根据Mapper文件的静态分布规则进行构建的多数据源。



​		**方案2：**

​		Aop实现的多数据源，在查询期间根据数据分布规则进行动态选择dataSource进行查询。具体细节如下：
​		这种实现是根据业务显示情况有关，业务数据根据Hash值进行分布式存储，因此在业务实现时候，我们根据   		规则自行实现了一套数据库连接池；在基于自行实现连接池之上，我们结合Aop拦截查询语句（定义数据源注		解），根据规则得到数据源所在的某个节点，然后在连接池中拿到指定节点的Connection进行查询。虽然比		方案1优雅并且拓展性好，但是代码相对比较复杂，维护成本高。最好的方案还是借力而行！借力而行就是使		用Spring框架支持的组件拓展，那就是如下方案3。

​		

​		**方案3：**

​		AbstractRoutingDataSource多数据源的拓展类,AbstractRoutingDataSource是Spring为了多数据源拓展开放		的抽象类；继承结构：

​		![](./mds.png)

​		Spring一个具体实现：IsolationLevelDataSourceRouter，基于事务的隔离级别选择DataSource；原理其实很简单，启动时候将一些DataSource以key/value形似存储到Map<数据源规则的Key，DataSource>，然后获取DataSource时候按照规则的Key获取即可。也就是父类中的抽象方法；关键抽象方法：

```java
	/**
	 * Determine the current lookup key. This will typically be
	 * implemented to check a thread-bound transaction context.
	 * <p>Allows for arbitrary keys. The returned key needs
	 * to match the stored lookup key type, as resolved by the
	 * {@link #resolveSpecifiedLookupKey} method.
	 */
	protected abstract Object determineCurrentLookupKey();
```

这个方法的实现时候，可以将我们的一些规则借助线程局部变量传入到其中进行一些规则计算，便于选择合适的数据源。首先简单描述一下业务场景：起初，系统的所有数据都是在MySQL中，因此不存在多数据源问题，但是后来由于架构改造；变化为如下：在原有的MYSQL关系数据源之外，又添加了一种是图数据库Neo，将原来存储在MySQL中的账户数据改造存储到图数据库中；这也就是所谓的变为两种数据源；由于数据源的变化，下游查询就会引起变化，而我的需求是这样：每天需要根据MySQL中的业务数据计算业务相关指标同时还要计算一些账户指标，例如每天新注册用户数等。因此就需要在原有基础之上进行扩展，因此改用Spring支持的多数据源。实例代码如下；数据源路由器：

```java
public class DataMillDataSourceRouter extends AbstractRoutingDataSource {
 
    @Override
    protected Object determineCurrentLookupKey() {
        String dataSourceType = MDC.get(DataSourceTypes.NEO.type);
        if (Objects.equals(dataSourceType, DataSourceTypes.NEO.type)) {
            // NEO DATASOURCE
            return DataSourceTypes.NEO.type;
        }
        return DataSourceTypes.MYSQL.type;
    }
}
```

数据源类型枚举值：

```java
public enum DataSourceTypes {
 
    NEO("NEO"), MYSQL("MYSQL");
 
    public final String type;
 
    private DataSourceTypes(String type) {
        this.type = type;
    }
}
```

NEO数据源注解（默认没有注解则数据源为MySQL,也可以借助路由器指定默认数据源）：

```java
@Target(ElementType.METHOD)
@Retention(RetentionPolicy.RUNTIME)
@Documented
public @interface NeoDataSource {
 
}
```

进行数据源选择的切面类：

```java
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.Signature;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.slf4j.MDC;
import org.springframework.context.annotation.EnableAspectJAutoProxy;
import org.springframework.stereotype.Component;
 
import java.util.Arrays;
 
@Aspect
@Component
//@EnableAspectJAutoProxy 与<aop:aspectj-autoproxy/>配置二选一即可
public class NeoDataSourceApect {
 
    public static Logger LOGGER = LoggerFactory.getLogger(NeoDataSourceApect.class);
 
    @Around(value = "@annotation(com.javartisan.data.day.report.multi.datasource.annotation.NeoDataSource)")
    public Object process(ProceedingJoinPoint pjp) throws Throwable {
 
        String args = Arrays.toString(pjp.getArgs());
        Signature methodName = pjp.getSignature();
        LOGGER.info("methodName = {} and args = {} start proceed !", methodName.getName(), args);
        MDC.put(DataSourceTypes.NEO.type, DataSourceTypes.NEO.type);
        Object returnValue = pjp.proceed();
        LOGGER.info("methodName = {} and args = {}  and returnValue ={} proceed finished !", methodName.getName(), args, returnValue);
        MDC.remove(DataSourceTypes.NEO.type);
        return returnValue;
    }
 
}
```

备注：<u>只要方法存在NeoDataSource注解就会被拦截添加一个线程局部变量到MDC中，MDC是slf4j中的一个工具类，也可以自行实现一个ThreadLocal工具。</u>



Spring配置文件：

```xml
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xmlns:aop="http://www.springframework.org/schema/aop"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
       http://www.springframework.org/schema/beans/spring-beans.xsd
       http://www.springframework.org/schema/context
       http://www.springframework.org/schema/context/spring-context.xsd
       http://www.springframework.org/schema/aop
       http://www.springframework.org/schema/aop/spring-aop-3.1.xsd">
    <context:annotation-config/>
    <context:component-scan base-package="com.javartisan.data.*"/>
    <aop:aspectj-autoproxy/>
    <!-- 通过import方式将配置放到子文件中 -->
    <import resource="spring-mybatis.xml"/>
</beans>
```

子配置文件：

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xmlns:context="http://www.springframework.org/schema/context"
       xsi:schemaLocation="http://www.springframework.org/schema/beans
    http://www.springframework.org/schema/beans/spring-beans-3.0.xsd
     http://www.springframework.org/schema/context http://www.springframework.org/schema/context/spring-context.xsd">
 
 
    <context:property-placeholder location="classpath:config/env.properties" ignore-unresolvable="true"/>
    <!-- 配置数据源 -->
    <bean name="mysqlDataSource" class="com.alibaba.druid.pool.DruidDataSource"
          init-method="init" destroy-method="close">
        <property name="url" value="${mysql.url}"/>
        <property name="username" value="${mysql.username}"/>
        <property name="password" value="${mysql.password}"/>
        <property name="initialSize" value="1"/>
        <property name="maxActive" value="5"/>
        <property name="minIdle" value="0"/>
        <property name="maxWait" value="60000"/>
    </bean>
 
    <bean id="dataSource" class="com.javartisan.datamill.day.report.multi.datasource.router.DataMillDataSourceRouter">
        <property name="targetDataSources">
            <map>
                <entry key="MYSQL" value-ref="mysqlDataSource"/>
                <entry key="NEO" value-ref="neoDataSource"/>
            </map>
        </property>
    </bean>
 
 
    <bean id="sqlSessionFactory" class="org.mybatis.spring.SqlSessionFactoryBean">
        <property name="dataSource" ref="dataSource"/>
        <property name="configLocation" value="classpath:config/mybatis-config.xml"/>
        <property name="mapperLocations">
            <list>
                <value>classpath:com/javartisan/datamill/day/report/mapper/*.xml</value>
            </list>
        </property>
    </bean>
    <bean class="org.mybatis.spring.mapper.MapperScannerConfigurer">
        <property name="basePackage" value="com.javartisan.datamill.day.report.mapper"/>
        <property name="sqlSessionFactoryBeanName" value="sqlSessionFactory"/>
    </bean>
 
    <!--NEO4J DataSource-->
    <bean name="neoDataSource" class="org.apache.ibatis.datasource.pooled.PooledDataSource">
        <property name="driver" value="org.neo4j.javartisanbc.bolt.BoltDriver"/>
        <property name="url" value="${neo.url}"/>
        <property name="username" value="${neo.username}"/>
        <property name="password" value="${neo.password}"/>
    </bean>
</beans>
```

到此就完成了多数据源的配置，接下来看一下Service实现：

```java
public class DataComputeService{
 
    /**
     * 
     * 查询Neo数据源方法，使用注解即可
     * @return
     */
    @Override
    @NeoDataSource
    public Integer getAllOpenAccountCount(String startDate) {
            // 伪代码，表达清楚含义即可
            return  mapper.someMethod(startDate);
    }
 
    /**
     * 
     * 查询MYSQL数据源
     * @return
     */
    @Override
    public Integer getMysqlIndex(String startDate) {
            // 伪代码，表达清楚含义即可
            return  mapper.someMethod(startDate);
    }
 
}
```

Service实现如上即可，这样就完成了多数据源的配置；这种方式对新引入的数据源的拓展性比较好，代码也比较清晰简单易于理解与维护。



**注意：**

当我们在一个Service内部内嵌套调用同类的其他Neo数据源方法需要使用：

```java
((DataComputeService) AopContext.currentProxy()).someMethod（）
```

此时需要在修改Aspectj配置：

```xml
 <aop:aspectj-autoproxy expose-proxy="true"/>
```

expose-proxy是为了将代理类暴露到当前线程局部变量中，这样就可以通过线程局部变量获取代理类了。