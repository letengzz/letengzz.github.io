# 池化技术

在平常的编码中，通常会将一些对象保存起来，这主要考虑的是对象的创建成本。

比如像线程资源、数据库连接资源或者 TCP 连接等，这类对象的初始化通常要花费比较长的时间，如果频繁地申请和销毁，就会耗费大量的系统资源，造成不必要的性能损失。

并且这些对象都有一个显著的特征，就是通过轻量级的重置工作，可以循环、重复地使用。

这个时候，就可以使用一个虚拟的池子，将这些资源保存起来，当使用的时候，就从池子里快速获取一个即可。

在 Java 中，池化技术应用非常广泛，常见的就有数据库连接池、线程池等。

总体来说，当遇到下面的场景，就可以考虑使用池化来增加系统性能：

- 对象的创建或者销毁，需要耗费较多的系统资源
- 对象的创建或者销毁，耗时长，需要繁杂的操作和较长时间的等待
- 对象创建后，通过一些状态重置，可被反复使用

将对象池化之后，只是开启了第一步优化。要想达到最优性能，就不得不调整池的一些关键参数，合理的池大小加上合理的超时时间，就可以让池发挥更大的价值。和缓存的命中率类似，对池的监控也是非常重要的。

- [公用池化包 Commons Pool 2](CommonsPool2/index.md)

**数据库连接池**：

- [HikariCP](DbConnectionPool/HikariCP/index.md)
- [Druid](DbConnectionPool/Druid/index.md)