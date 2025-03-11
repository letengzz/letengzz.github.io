# XXL-JOB

xxl-job就是一个中心化管理系统，系统主要通过MySQL管理各种定时任务信息，当到了定时任务的触发时间，就把任务信息从数据库中拉进内存，对任务执行器发起调度请求。

- gitee 地址 https://gitee.com/xuxueli0323/xxl-job?_from=gitee_search

- github 地址：https://github.com/xuxueli/xxl-job

- 文档地址：https://www.xuxueli.com/xxl-job/

下载xxl-job源代码：

```shell
git  clone https://gitee.com/xuxueli0323/xxl-job.git
```

**源代码模块**：

- xxl-job-admin：调度中心
  作用：统一管理任务调度平台上调度任务，负责触发调度执行，并且提供任务管理平台
- xxl-job-core：公共依赖
- xxl-job-executor-samples：执行器Sample示例， 执行器就是业务系统，定时任务要做什么功能。

**运行过程**：xxl-job-admin创建任务的执行时间，时间到了，向xxl-job-executor-samples发起一个调用，执行xxl-job-executor-samples中的某个方法，任务开始执行了。

- 启动xxl-job-admin工程。若无定制化开发，直接启动即可。
- 在xxl-job-excutor中需要引入xxl-job-core依赖，实现定时任务的业务代码，配置xxl-job-admin的地址，主动向xxl-job-admin注册，并建立通讯连接。

## 操作步骤

**初始化数据库**：创建的数据库名称：xxl-job，执行  /xxl-job/doc/db/tables_xxl_job.sql 
