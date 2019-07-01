---
title: Clickhouse中的arrayjoin函数
date: 2019-07-01 19:59:36
categories: Clickhouse
---



通常SQL函数都是对一些rows进行一些map操作或者聚合操作，这些操作并不会导致行数的增加；然而arrayjoin是将一些rows转化为更多的rows，是一个扩增的过程。[官方文档描述](https://clickhouse.yandex/docs/en/query_language/functions/array_join/)：The 'arrayJoin' function takes each row and generates a set of rows (unfold).

- 示例1：

```sql

SELECT arrayJoin([1, 2, 3]) AS dst, 'Hello Clickhouse' as name

```

查询结果：

| dst  | name |
| :--: | :----------------: |
|  1   |  Hello Clickhouse  |
|  2   |  Hello Clickhouse  |
|  3   |  Hello Clickhouse  |

由于name是一个常量，arrayjoin数组长度为3，因此扩增为3行。



- 示例2：

```sql

SELECT arrayJoin([1, 2]) AS src,  arrayJoin([3, 4]) AS dst

```

查询结果：

| src  | dst  |
| :--: | :--: |
|  1   |  3   |
|  1   |  4   |
|  2   |  3   |
|  2   |  4   |

这其实就是一个笛卡尔积的计算过程。