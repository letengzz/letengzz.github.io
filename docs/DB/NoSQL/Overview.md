# NoSQL 概述

NoSQL (non-relational，Not Only SQL)非关系数据库，随着互联网Web2.0网站的兴起，传统的关系型数据库已经显得力不从心了，出现了很多难以克服的问题，而非关系型的数据库则由于其本身的特点得到了非常迅速的发展。NoSQL数据库的产生就是为了解决大规模数据集合多重数据种类带来的挑战，特别是大数据应用难题。

## 键值存储数据库

Key-Value键值对类型的数据库，典型代表就是Redis

## 列存储数据库

关系型数据库是典型的行存储数据库。其存在的问题是，按行存储的数据在物理层面占用的是连续存储空间，不适合海量数据存储。而按照列存储则可实现分布式存储，适合海量存储。典型代表是HBase

## 文档型数据库

其是NoSQL与关系型数据库的结合，最像关系型数据库的NoSQL。典型代表是MongoDB

## 图形(Graph)数据库

用于存放一个节点关系的数据库。例如描述不同人间的关系。典型代表是Neo4J