---
title: Java枚举类型在RPC调用时由于版本不一致遇见的问题
date: 2019-06-30 16:52:09
categories: Java
---



### 枚举值在RPC调用时反序列化与序列化的值不一致



- **场景**

  一次业务联调测试时候发现，客户端以RPC方式调用服务提供方执行作业，作业类型存在多种，作业类型的区分使用的是Java枚举类表示，在每次调用服务接口时候传入枚举值以表示要执行的作业类型。

  

- **问题发现**
  

进行联调测试时候发现每次客户端传入的类型与服务提供方真实执行的作业类型不匹配，便开始进行寻找原因！当时怀疑是服务提供方的业务代码判断逻辑存在问题，经过查看服务提供方代码发现并没有问题。可能的猜想并没有解决问题，因此只能进行Debug寻找原因。将服务提供方代码Clone下来在本地的测试RPC环境进行调试，调试发现在服务提供方反序列化之后枚举值就是错误的，因此可以将问题锁定在枚举值类的序列化上。因此只好跟踪序列化与反序列化参数代码，序列化代码：

  ```java
      public void writeEnum(Enum<?> value) {
          if (value == null) {
              // null
              this.writeNull();
          } else {
              String strVal = null;
              if (this.writeEnumUsingName && !this.writeEnumUsingToString) {
                  // 判断是否是根据名字序列化
                  strVal = value.name();
              } else if (this.writeEnumUsingToString) {
                  // 是否使用tostring序列化枚举值
                  strVal = value.toString();
              }
  
              if (strVal != null) {
                  // 不为空，则可能是根据名字或者toString的方式序列化
                  char quote = this.isEnabled(SerializerFeature.UseSingleQuotes) ? 39 : 34;
                  this.write(quote);
                  this.write(strVal);
                  this.write(quote);
              } else {
                  // 根据ordinal值序列化(ordinal：序列数)
                  this.writeInt(value.ordinal());
              }
  
          }
      }
  ```

  *跟进java.lang.Enum#ordinal方法发现原来是JDK提供的方法，文档描述如下：*

  ```java
  Returns the ordinal of this enumeration constant (its position in its enum declaration, where the initial constant is assigned an ordinal of zero). Most programmers will have no use for this method. It is designed for use by sophisticated enum-based data structures, such as java.util.EnumSet and java.util.EnumMap.
  ```

  *返回枚举值的的序数，也就是声明时候的位置序号，序号从0开始计数。大多数程序员不会使用这个方法，此方法的设计主要是为了那些基于枚举的复杂数据类型，例如：EnumSet与EnumMap。*

  

  到序列化代码this.writeInt(value.ordinal()),此时就可以明白了，RPC调用参数序列化枚举值是根据枚举值的序号进行序列化的（**注意：**序列化机制是跟序列化框架强相关的，一定要根据自己的序列化框架进行实际分析问题）。此时客户端序列化已经完成，接下来便开始Debug服务提供方的代码，经过Debug发现服务提供方法的枚举值数组中的size与客户端不一致，经过对比源码发现：       ![](./enum_code.png)  

  客户端与服务端的类库版本不一致，而又由于枚举值序列化与反序列化是按照ordinal值进行的，因此便可以确定问题产生原因了，通过重新发布类库此问题得以解决！

  



###  枚举值中ordinal的用法

- Java**枚举类型中存在的方法**

  ![](./enum_method.png)

- **ordinal值的用法**

  通过JDK文档，可以发现ordinal主要是为了基于枚举的复杂数据结构使用，在JDK中有EnumSet与EnumMap。

  **EnumSet：**

  是JDK的一个工具类，主要用于枚举值的Set相关操作，例如：

  ```java
  import java.util.EnumMap;
  import java.util.EnumSet;
  
  public enum JobType {
      SPARK_JOB, HADOOP_JOB, FLINK_JOB;
  }
  
  enum JobType2 {
      SPARK_JOB, HADOOP_JOB, FLINK_JOB;;
  }
  
  class Boot {
      public static void main(String[] args) {
          // 将指定类型枚举值的所有值存初始化到EnumSet中
          EnumSet es = EnumSet.allOf(JobType.class);
          System.out.println(es.contains(JobType.SPARK_JOB));
          System.out.println(es.contains(JobType2.SPARK_JOB));
      }
  }
  ```

  EnumSet是一个抽象类，是不支持自定义实现的（内部有一个默认权限的addAll方法无法重写），JDK提供的方法已经可以满足我们的需要了。

  **EnumMap:**

  是枚举值有关Map的操作，实例代码:

  ```java
public enum JobType {
      SPARK_JOB, HADOOP_JOB, FLINK_JOB;
  }
  
  enum JobType2 {
      SPARK_JOB, HADOOP_JOB, FLINK_JOB;;
  }
  
  class Boot {
      public static void main(String[] args) {
          //构造器参数是一个泛型参数，表示该EnumMap的key只能是JobType2枚举类型
          EnumMap  em = new EnumMap(JobType2.class);
          em.put(JobType2.SPARK_JOB, new Object());
          // 报错
          em.put(JobType.SPARK_JOB, new Object());
          System.out.println(em);
      }
  }
  ```
  
  







**注意：**

上面只是针具具体某一个序列化框架而言，具体问题一定要具体分析！