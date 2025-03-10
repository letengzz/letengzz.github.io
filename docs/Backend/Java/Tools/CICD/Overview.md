# 基本概念

## 持续部署

开发过程中进行单元测试能够通过，但是部署到服务器上运行出现问题。仅仅单元测试还不够，各个模块都必须能够在服务器上运行。

持续部署的关注点在于项目功能**部署至服务器后可以运行**，为下一步测试环节或最终用户正式使用做好准备。

## 持续集成

各个小组分别负责各个具体模块开发，本模块**独立测试**虽然**能够通过**，但是上线前夕将所有模块整合到一起**集成测试**却发现**很多问题**，想要解决就需要把很多代码返工重写而且仍然有可能有问题，但现在时间很可能不够了。

经常性、频繁的把所有模块集成在一起进行测试，有问题尽早发现，这就是持续集成。

持续集成的关注点在于尽早发现项目整体运行问题，尽早解决。

## 持续交付

项目的各个升级版本之间间隔时间太长，对用户反馈感知迟钝，无法精确改善用户体验，用户流失严重。

用**小版本**不断进行**快速迭代**，不断收集用户反馈信息，用最快的速度改进优化。

持续交付的关注点在于研发团队的最新代码能够尽快让最终用户体验到。

## 优点

1. **降低风险**：一天中进行多次的集成，并做了相应的测试，这样有利于检查缺陷，了解软件的健康状况，减少假定。

2. **减少重复过程**：产生重复过程有两个方面的原因，一个是编译、测试、打包、部署等等固定操作都必须要做，无法省略任何一个环节；另一个是一个缺陷如果没有及时发现，有可能导致后续代码的开发方向是错误的，要修复问题需要重新编写受影响的所有代码。

   而使用 Jenkins 等持续集成工具既可以把构建环节从手动完成转换为自动化完成，又可以通过增加集成频次尽早发现缺陷避免方向性错误。

3. **任何时间、任何地点生成可部署的软件**：持续集成可以让您在任何时间发布可以部署的软件。从外界来看，这是持续集成最明显的好处，我们可以对改进软件品质和减少风险说起来滔滔不绝，但对于客户来说，可以部署的软件产品是最实际的资产。利用持续集成，您可以经常对源代码进行一些小改动，并将这些改动和其他的代码进行集成。如果出现问题，项目成员马上就会被通知到，问题会第一时间被修复。不采用持续集成的情况下，这些问题有可能到交付前的集成测试的时候才发现，有可能会导致延迟发布产品，而在急于修复这些缺陷的时候又有可能引入新的缺陷，最终可能导致项目失败。
4. **增强项目的可见性**：持续集成让我们能够注意到趋势并进行有效的决策。如果没有真实或最新的数据提供支持，项目就会遇到麻烦，每个人都会提出他最好的猜测。通常，项目成员通过手工收集这些信息，增加了负担，也很耗时。持续集成可以带来两点积极效果：
   1. 有效决策：持续集成系统为项目构建状态和品质指标提供了及时的信息，有些持续集成系统可以报告功能完成度和缺陷率。
   2. 注意到趋势：由于经常集成，我们可以看到一些趋势，如构建成功或失败、总体品质以及其它的项目信息。
5. **建立团队对开发产品的信心**：持续集成可以建立开发团队对开发产品的信心，因为他们清楚的知道每一次构建的结果，他们知道他们对软件的改动造成了哪些影响，结果怎么样。
