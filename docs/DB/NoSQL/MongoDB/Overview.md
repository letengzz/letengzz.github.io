# MongoDB 概述


MongoDB 是在2007年由DoubleClick公司的几位核心成员开发出的一款开源、高性能、无模式的分布式文档数据库，由C++语言编写。目的是为了解决数据大量增长的时候系统的可扩展性和敏捷性，是NoSQL数据库产品中的一种。是最像关系型数据库（MySQL）的非关系型数据库。

在MongoDB中数据主要的组织结构就是**数据库、集合和文档**，文档存储在集合当中，集合存储在数据库中。

它支持的数据结构非常松散，是一种类似于 JSON 的格式叫BSON (Binary JSON)，所以它既可以存储比较复杂的数据类型，又相当的灵活。

MongoDB中每一条数据记录就是一个文档，它是一个由字段和值对 (field:value) 组成的数据结构。MongoDB文档类似于JSON对象，即一个文档认为就是一个对象。字段的数据类型是字符型，它的值除了使用基本的一些类型外，还可以包括其他文档、普通数组和文档数组。

![img](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409252346684.png)

理解MongoDB中的概念：

| RDBMS              | MongoDB                                                    |
| ------------------ | ---------------------------------------------------------- |
| database 数据库    | database 数据库                                            |
| table 表格         | collection 集合                                            |
| row 行             | document 文档                                              |
| column 列          | field 字段                                                 |
| table joins 表连接 | MongoDB不支持嵌入文档，MongoDB通过嵌入式文档来替代多表连接 |
| primary key 主键   | primary key 主键，MongoDB自动将_id字段设置为主键           |
| index 索引         | index 索引                                                 |

## 业务应用场景

传统的关系型数据库(如MySQL)，在数据操作的"三高"需求以及应对Web2.0的网站需求面前，显得力不从心。
解释："三高"需求：

- High performance -对数据库高并发读写的需求。
- Huge Storage -对海量数据的高效率存储和访问的需求。
- High Scalability && High Availability-对数据库的高可扩展性和高可用性的需求。

**而MongoDB可应对"三高"需求**，具体的应用场景：

1. 社交场景，使用 MongoDB 存储存储用户信息，以及用户发表的朋友圈信息，通过地理位置索引实现附近的人、地点等功能。
2. 游戏场景，使用 MongoDB 存储游戏用户信息，用户的装备、积分等直接以内嵌文档的形式存储，方便查询、高效率存储和访问。
3. 物流场景，使用 MongoDB 存储订单信息，订单状态在运送过程中会不断更新，以 MongoDB 内嵌数组的形式来存储，一次查询就能将订单所有的变更读取出来。
4. 物联网场景，使用 MongoDB 存储所有接入的智能设备信息，以及设备汇报的日志信息，并对这些信息进行多维度的分析。
5. 视频直播，使用 MongoDB 存储用户信息、点赞互动信息等。

这些应用场景中，数据操作方面的共同特点是：

1. 数据量大
2. 写入操作频繁（读写都很频繁）
3. 价值较低的数据，对事务性要求不高

对于这样的数据，更适合使用MongoDB来实现数据的存储。

**什么时候选择MongoDB**：

在架构选型上，除了上述的三个特点外，如果你还犹豫是否要选择它？可以考虑以下的一些问题：

- 应用不需要事务及复杂 join 支持
- 新应用，需求会变，数据模型无法确定，想快速迭代开发
- 应用需要2000-3000以上的读写QPS（更高也可以）
- 应用需要TB甚至 PB 级别数据存储
- 应用发展迅速，需要能快速水平扩展
- 应用要求存储的数据不丢失
- 应用需要99.999%高可用
- 应用需要大量的地理位置查询、文本查询

如果上述有1 个符合，可以考虑 MongoDB，2 个及以上的符合，选择 MongoDB 绝不会后悔。

**适合场景**：

- MongoDB不需要去明确指定一张表的具体结构，对字段的管理非常灵活，有很强的可扩展性。
- 支持高并发、高可用、高可扩展性，自带数据压缩功能，支持海量数据的高效存储和访问。
- 支持基本的CRUD、数据聚合、文本搜索和地理空间查询功能。

**不适用场合**：

- 高度事务性系统：例如银行系统。传统的关系型数据库目前还是更适用于需要大量原子性复杂事务的应用程序。
- 传统的商业智能应用：针对特定问题的BI数据库会对产生高度优化的查询方式。对于此类应用，数据仓库可能是更合适的选择。

如果用MySQL呢？相对MySQL，可以以更低的成本解决问题（包括学习、开发、运维等成本）

## 体系结构

MySQL和MongoDB对比：

![image-20240418155854409.png](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409291621393.png)
![image-20240418155912238.png](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409291621624.png)

## 数据模型

MongoDB的最小存储单位就是文档(document)对象。文档(document)对象对应于关系型数据库的行。数据在MongoDB中以BSON（Binary-JSON）文档的格式存储在磁盘上。

BSON（Binary Serialized Document Format）是一种类json的一种二进制形式的存储格式，简称Binary JSON。BSON和JSON一样，支持
内嵌的文档对象和数组对象，但是BSON有JSON没有的一些数据类型，如Date和BinData类型。

BSON采用了类似于 C 语言结构体的名称、对表示方法，支持内嵌的文档对象和数组对象，具有轻量性、可遍历性、高效性的三个特点，可以有效描述非结构化数据和结构化数据。这种格式的优点是灵活性高，但它的缺点是空间利用率不是很理想。

Bson中，除了基本的JSON类型：string,integer,boolean,double,null,array和object，mongo还使用了特殊的数据类型。这些类型包括date,object id,binary data,regular expression 和code。每一个驱动都以特定语言的方式实现了这些类型，查看你的驱动的文档来获取详细信息。

BSON数据类型参考列表：

![image](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202409291621207.png)

提示：
shell默认使用64 位浮点型数值。`{"x"：3.14}或{"x"：3}`。对于整型值，可以使用`NumberInt（4 字节符号整数）`或`NumberLong（8 字节符号整数）`，`{"x":NumberInt("3")}{"x":NumberLong("3")}`

## 特点

MongoDB主要有如下特点：

1. 高性能：

   MongoDB提供高性能的数据持久性。特别是,对嵌入式数据模型的支持减少了数据库系统上的I/O活动。

   索引支持更快的查询，并且可以包含来自嵌入式文档和数组的键。（文本索引解决搜索的需求、TTL索引解决历史数据自动过期的需求、地理位置索引可用于构建各种 O2O 应用）
   mmapv1、wiredtiger、mongorocks（rocksdb）、in-memory 等多引擎支持满足各种场景需求。
   Gridfs解决文件存储的需求。

2. 高可用性：
   MongoDB的复制工具称为副本集（replica set），它可提供自动故障转移和数据冗余。

3. 高扩展性：
   MongoDB提供了水平可扩展性作为其核心功能的一部分。
   分片将数据分布在一组集群的机器上。（海量数据存储，服务能力水平扩展）
   从3.4开始，MongoDB支持基于片键创建数据区域。在一个平衡的集群中，MongoDB将一个区域所覆盖的读写只定向到该区域内的那些片。

4. 丰富的查询支持：
   MongoDB支持丰富的查询语言，支持读和写操作(CRUD)，比如数据聚合、文本搜索和地理空间查询等。

5. 其他特点：如无模式（动态模式）、灵活的文档模型