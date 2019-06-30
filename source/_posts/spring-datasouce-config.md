---
title: 整合多数据源Neo连接池时遇见的问题以及方案与收获
date: 2019-06-30 18:49:41
comments: true
categories: Spring
---

整合多数据源时候，配置neo数据库连接池时候使用的Druid连接池，遇见的问题以及问题的解决方案与收获简单记录一下

### 方案1：

配置信息：

```xml
<bean name="neoDataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driver" value="org.neo4j.jdbc.bolt.BoltDrive"/>
        <property name="url" value="${neo.url}"/>
        <property name="username" value="${neo.username}"/>
        <property name="password" value="${neo.password}"/>
</bean>
```

错误信息：

```java
Caused by: java.lang.IllegalStateException: Cannot convert value of type [java.lang.String] to required type [java.sql.Driver] for property 'driver': no matching editors or conversion strategy found
	at org.springframework.beans.TypeConverterDelegate.convertIfNecessary(TypeConverterDelegate.java:302)
	at org.springframework.beans.AbstractNestablePropertyAccessor.convertIfNecessary(AbstractNestablePropertyAccessor.java:576)
	... 89 more
```

很明显，无法将String转为Driver类型，看一下DataSource才知道原来driver配置的是Driver类型的实例，而不是Driver class名字，解决方案有两种。先介绍第一种：

解决办法：

将Driver以bean的方式注册到spring容器中，之后配置ref引用该Driver实例即可。代码如下:

```xml
    // 将Driver注册到Spring容器
    <bean id="boltDriver" class="org.neo4j.jdbc.bolt.BoltDriver"></bean>
 
    //ref引用该实例即可。
    <bean name="neoDataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driver" ref="boltDriver"/>
        <property name="url" value="${neo.url}"/>
        <property name="username" value="${neo.username}"/>
        <property name="password" value="${neo.password}"/>
    </bean>
```

### 方案2：

方案1中的DataSource是配置Driver类型成员；因此可以找到配置DriverName的变量配置即可，发现存在driverClass，可以配置driverClass设置Neo的Driver驱动名字即可。但是配置之后变红：

![](./neo-datasouce-error.png)

通过对比url发现，属性名字是setXXX方法中的XXX，该set方法名字为setDriverClassName(此处稍微翻阅源码就可以得知，Bean属性注入是使用set方法，而不是反射Field注入)。因此配置信息如下：

```xml
    <bean name="neoDataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="org.neo4j.jdbc.bolt.BoltDrive"/>
        <property name="url" value="${neo.url}"/>
        <property name="username" value="${neo.username}"/>
        <property name="password" value="${neo.password}"/>
    </bean>
```



### 方案3：

使用Mybatis自带的DataSource：org.apache.ibatis.datasource.pooled.PooledDataSource，该类中的driver是一个String类型设置驱动名字的成员：参见org.apache.ibatis.datasource.pooled.PooledDataSource#setDriver方法。 

```xml
    <bean name="neoDataSource" class="com.alibaba.druid.pool.DruidDataSource">
        <property name="driverClassName" value="org.neo4j.jdbc.bolt.BoltDriver"/>
        <property name="url" value="${neo.url}"/>
        <property name="username" value="${neo.username}"/>
        <property name="password" value="${neo.password}"/>
    </bean>
```



### 总结：

 **收获1：**

 对于常见的数据库连接池，不同的实现有着细微的差别，例如对于阿里Druid数据库连接池，对于常用的数据库，我们可以不用设置driver或者driverClassName属性，数据库连接池会根据url自动识别Driver，识别Driver方法com.alibaba.druid.util.JdbcUtils#getDriverClassName ；源码如下:

```java
 
    public static String getDriverClassName(String rawUrl) throws SQLException {
        if (rawUrl.startsWith("jdbc:derby:")) {
            return "org.apache.derby.jdbc.EmbeddedDriver";
        } else if (rawUrl.startsWith("jdbc:mysql:")) {
            return MYSQL_DRIVER;
        } else if (rawUrl.startsWith("jdbc:log4jdbc:")) {
            return LOG4JDBC_DRIVER;
        } else if (rawUrl.startsWith("jdbc:mariadb:")) {
            return MARIADB_DRIVER;
        } else if (rawUrl.startsWith("jdbc:oracle:") //
                   || rawUrl.startsWith("JDBC:oracle:")) {
            return ORACLE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:alibaba:oracle:")) {
            return ALI_ORACLE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:microsoft:")) {
            return "com.microsoft.jdbc.sqlserver.SQLServerDriver";
        } else if (rawUrl.startsWith("jdbc:sqlserver:")) {
            return "com.microsoft.sqlserver.jdbc.SQLServerDriver";
        } else if (rawUrl.startsWith("jdbc:sybase:Tds:")) {
            return "com.sybase.jdbc2.jdbc.SybDriver";
        } else if (rawUrl.startsWith("jdbc:jtds:")) {
            return "net.sourceforge.jtds.jdbc.Driver";
        } else if (rawUrl.startsWith("jdbc:fake:") || rawUrl.startsWith("jdbc:mock:")) {
            return "com.alibaba.druid.mock.MockDriver";
        } else if (rawUrl.startsWith("jdbc:postgresql:")) {
            return POSTGRESQL_DRIVER;
        } else if (rawUrl.startsWith("jdbc:odps:")) {
            return ODPS_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hsqldb:")) {
            return "org.hsqldb.jdbcDriver";
        } else if (rawUrl.startsWith("jdbc:db2:")) {
            return DB2_DRIVER;
        } else if (rawUrl.startsWith("jdbc:sqlite:")) {
            return "org.sqlite.JDBC";
        } else if (rawUrl.startsWith("jdbc:ingres:")) {
            return "com.ingres.jdbc.IngresDriver";
        } else if (rawUrl.startsWith("jdbc:h2:")) {
            return H2_DRIVER;
        } else if (rawUrl.startsWith("jdbc:mckoi:")) {
            return "com.mckoi.JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:cloudscape:")) {
            return "COM.cloudscape.core.JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:informix-sqli:")) {
            return "com.informix.jdbc.IfxDriver";
        } else if (rawUrl.startsWith("jdbc:timesten:")) {
            return "com.timesten.jdbc.TimesTenDriver";
        } else if (rawUrl.startsWith("jdbc:as400:")) {
            return "com.ibm.as400.access.AS400JDBCDriver";
        } else if (rawUrl.startsWith("jdbc:sapdb:")) {
            return "com.sap.dbtech.jdbc.DriverSapDB";
        } else if (rawUrl.startsWith("jdbc:JSQLConnect:")) {
            return "com.jnetdirect.jsql.JSQLDriver";
        } else if (rawUrl.startsWith("jdbc:JTurbo:")) {
            return "com.newatlanta.jturbo.driver.Driver";
        } else if (rawUrl.startsWith("jdbc:firebirdsql:")) {
            return "org.firebirdsql.jdbc.FBDriver";
        } else if (rawUrl.startsWith("jdbc:interbase:")) {
            return "interbase.interclient.Driver";
        } else if (rawUrl.startsWith("jdbc:pointbase:")) {
            return "com.pointbase.jdbc.jdbcUniversalDriver";
        } else if (rawUrl.startsWith("jdbc:edbc:")) {
            return "ca.edbc.jdbc.EdbcDriver";
        } else if (rawUrl.startsWith("jdbc:mimer:multi1:")) {
            return "com.mimer.jdbc.Driver";
        } else if (rawUrl.startsWith("jdbc:dm:")) {
            return JdbcConstants.DM_DRIVER;
        } else if (rawUrl.startsWith("jdbc:kingbase:")) {
            return JdbcConstants.KINGBASE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hive:")) {
            return JdbcConstants.HIVE_DRIVER;
        } else if (rawUrl.startsWith("jdbc:hive2:")) {
            return JdbcConstants.HIVE_DRIVER;
        } else {
            throw new SQLException("unkow jdbc driver : " + rawUrl);
        }
    }
```

阿里巴巴数据库连接池对常见的数据库都可以识别，但是对于neo没有支持，因此就需要配置driver或者driverClassName。



**收获2：**

对于数据库连接池的一些属性配置信息名字不是固定的，这些属性名字不是DataSource规范中的，而是跟各个具体DataSource实现强相关，因此配置时候可以查看DataSource具体实现进行配置。