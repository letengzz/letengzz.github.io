# Jenkins 概述

Jenkins涉及到云原生开发、测试开发、敏捷开发、运维开发等方面。运用好Jenkins，只需要提交代码到代码服务器上跑一下定时任务通过Maven来自动化构建项目，同时发送到测试服务器上自动化的运行起来。

## 历史

2009 年，甲骨文收购了 Sun 并继承了 Hudson 代

码库。在 2011 年年初，甲骨文和开源社区之间的关系破裂，该项目被分成两个独立的项目：

- Jenkins：由大部分原始开发人员组成

- Hudson：由甲骨文公司继续管理

所以 Jenkins 和 Hudson 是两款非常相似的产品

## 技术组合

Jenkins 可以整合 GitHub 或 Subversion

Husband 也可以整合 GitHub 或 Subversion

## 开发流程

开发人员通过IDE来编写并在本机构建运行测试，之后将代码放到代码托管服务器，多个程序员使用代码托管服务器组成团队开发，之后由管理员来进行手动集成构建测试到测试服务器。但是这种方式会导致人为的瑕疵和漏洞保证不了构建的成功或不能保证冲突的解决。使用Jenkins做持续集成、持续构建、持续测试等有效的减少工作负担、自动化、及时性。当Jenkins构建成功时，会跑测试用例，当测试用例没问题，将自动构建好的Jar/War发送到目标服务器上，当构建失败时，会发送报告。

![image-20240331004810492](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202403310048473.png)