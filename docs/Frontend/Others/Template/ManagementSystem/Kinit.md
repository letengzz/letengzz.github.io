# Kinit

Kinit 是一套全部开源的快速开发平台，毫无保留给个人及企业免费使用。

- 后端采用现代、快速（高性能） FastAPI 异步框架 + 自动生成交互式API文档 + （强制类型约束）Pydantic + （高效率）SQLAlchemy 2.0；
- PC端采用 vue-element-plus-admin 、Vue3、Element Plus、TypeScript等主流技术开发；
- 移动端采用 uni-app，Vue2，uView 2为主要技术开发；
- 后端加入 Typer 命令行应用，简单化数据初始化，数据表模型迁移等操作；
- 后端新加入根据配置的 ORM 模型，自动生成 CRUD 代码；
- 定时任务功能，采用 APScheduler 定时任务框架 + Redis  消息队列 + MongoDB 持久存储；
- 权限认证使用（哈希）密码和 JWT Bearer 令牌的 OAuth2，支持多终端认证系统。
- 支持加载动态权限菜单，多方式轻松权限控制，按钮级别权限控制。
- 已加入常见的 MySQL + MongoDB + Redis  数据库异步操作。
- 支持 docker-compose 部署方式
- 开箱即用的中后台解决方案，可以用来作为新项目的启动模版，也可用于学习参考。并且时刻关注着最新技术动向，尽可能的第一时间更新。
- 与 vue-element-plus-admin 前端框架时刻保持同步更新。

PC端演示地址：https://kinit.ktianc.top

管理员账户：

- 账号：15020221010
- 密码：kinit2022

测试账户：

- 账号：15020240125
- 密码：test

**接口 CURD 代码自动生成**：

1. 目前只支持生成接口代码
2. 目前只支持使用脚本方式运行，后续会更新到页面操作
3. 代码是根据手动配置的 ORM 模型来生成的，支持参数同步，比如默认值，是否为空...

脚本文件地址：`scripts/crud_generate/main.py`

该功能首先需要手动创建出 ORM 模型，然后会根据 ORM 模型依次创建代码，包括如下代码：

1. schema 序列化代码：schema 文件名称会使用设置的 en_name 名称，如果文件已经存在会先执行删除，再创建。

   schema 代码内容生成完成后，同时会将新创建的 class 在 `__init__.py` 文件中导入。

2. dal 数据操作代码：dal 文件名称会使用默认的 `crud.py` 文件名称，目前不支持自定义。

   如果 dal 文件已经存在，并且已经有代码内容，那么会将新的模型 dal class 追加到文件最后，并会合并文件内导入的 module。

3. param 请求参数代码：param 文件名取名方式与 schema 一致。

   会创建出默认最简的 param class。

4. view 视图代码：view 文件名称同样会使用默认的 `view.py` 文件名称，目前不支持自定义。

   如果 view 文件已经存在，与 dal 执行操作一致。

脚本中目前有两个方法：

```python
if __name__ == '__main__':
    from apps.vadmin.auth.models import VadminUser

    crud = CrudGenerate(VadminUser, "用户", "user")
    # 只打印代码，不执行创建写入
    crud.generate_codes()
    # 创建并写入代码
    crud.main()
```

目前不会去检测已有的代码，比如 `UserDal` 已经存在，还是会继续添加的。

B站 视频演示：https://www.bilibili.com/video/BV19e411a7zP/

**源码地址**：

- gitee地址(主推)：https://gitee.com/ktianc/kinit
- github地址：https://github.com/vvandk/kinit

**PC端内置功能**：

- 菜单管理：配置系统菜单，操作权限，按钮权限标识、后端接口权限等。
- 部门管理：支持无限层级部门配置。
- 角色管理：角色菜单权限，角色部门权限分配。
- 用户管理：用户是系统操作者，该功能主要完成系统用户配置。
- 个人主页：配置用户个人信息，密码修改等。
- 字典管理：对系统中经常使用的一些较为固定的数据进行维护。
- 文件上传：对接阿里云OSS与本地存储。
- 登录认证：目前支持用户使用手机号+密码登录方式，手机验证码登录方式。
- 系统配置：对本系统环境信息进行动态配置。
- 用户分布：接入高德地图显示各地区用户分布情况
- 数据概览：提供两种数据统计展示模板，更直观的查看数据统计情况
- 智慧大屏：大屏展示`办公室空气质量实时检测`数据分析
- 登录日志：用户登录日志记录和查询。
- 操作日志：系统用户每次操作功能时的详细记录。
- 接口文档：提供自动生成的交互式 API 文档，与 ReDoc 文档
- 导入导出：灵活支持数据导入导出功能
- 已加入常见的`Redis`、`MySQL`、`MongoDB`数据库异步操作。
- 命令行操作：新加入 `Typer` 命令行应用，简单化数据初始化，数据表模型迁移。
- 定时任务：在线操作（添加、修改、删除)任务调度包含查看任务执行结果日志。

**移动端内置功能**：

- 登录认证：支持用户使用手机号+密码方式登录，微信手机号一键登录方式。

  说明：新建用户密码默认为手机号后六位；

  说明：用户在第一次登录时，必须修改当前用户密码。

- 导航栏：首页、我的、工作台

- 我的基础功能：编辑资料、头像修改、密码修改、常见问题、关于我们等

**后端技术**：

- Python3：熟悉 python3 基础语法
- FastAPI - 熟悉后台接口 Web 框架
- SQLAlchemy 2.0 - 数据数据库操作
- Typer - 熟悉命令行工具的使用
- MySQL 和 MongoDB 和 Redis  - 熟悉数据存储数据库
- iP查询接口文档：IP查询第三方服务，有1000次的免费次数

**PC端**：

- node 和 git - 项目开发环境
- Vite - 熟悉 vite 特性
- Vue3 - 熟悉 Vue 基础语法
- TypeScript - 熟悉 `TypeScript` 基本语法
- Es6+ - 熟悉 es6 基本语法
- Vue-Router-Next - 熟悉 vue-router 基本使用
- Element-Plus - element-plus 基本使用
- vue3-json-viewer：简单易用的json内容展示组件,适配vue3和vite。
- 高德地图API (amap.com)：地图 JSAPI 2.0 是高德开放平台免费提供的第四代 Web 地图渲染引擎。

**移动端**：

- uni-app - 熟悉 uni-app 基本语法
- Vue2 - 熟悉 Vue 基础语法
- uView UI 2：uView UI 组件的基本使用
- uni-read-pages ：自动读取 `pages.json` 所有配置。
- uni-simple-router ：在uni-app中使用vue-router的方式进行跳转路由，路由拦截。

**定时任务**：

- Python3 -熟悉 python3 基础语法
- APScheduler - 熟悉定时任务框架
- MongoDB 和 Redis  - 熟悉数据存储数据库

**安装和使用**：

```shell
git clone https://gitee.com/ktianc/kinit.git
```

**后端**：

1. 安装依赖：

   ```shell
   cd kinit-api
   
   pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
   ```

2. 修改项目环境配置：

   修改 `application/settings.py` 文件

   ```python
   # 安全警告: 不要在生产中打开调试运行!
   DEBUG = True # 如果当前为开发环境则改为 True，如果为生产环境则改为 False
   ```

3. 修改项目数据库配置信息：

   在 `application/config` 目录中

   ```python
   # Mysql 数据库配置项
   # 连接引擎官方文档：https://www.osgeo.cn/sqlalchemy/core/engines.html
   # 数据库链接配置说明：mysql+asyncmy://数据库用户名:数据库密码@数据库地址:数据库端口/数据库名称
   
   SQLALCHEMY_DATABASE_URL = "mysql+asyncmy://数据库用户名:数据库密码@数据库地址:数据库端口/数据库名称"
   SQLALCHEMY_DATABASE_TYPE = "mysql"
   
   
   # Redis 数据库配置
   REDIS_DB_ENABLE = True
   REDIS_DB_URL = "redis://:密码@地址:端口/数据库"
   
   # MongoDB 数据库配置
   MONGO_DB_ENABLE = True
   MONGO_DB_NAME = "数据库名称"
   MONGO_DB_URL = f"mongodb://用户名:密码@地址:端口/?authSource={MONGO_DB_NAME}"
   
   # 阿里云对象存储OSS配置
   # 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
   # yourEndpoint填写Bucket所在地域对应的Endpoint。以华东1（杭州）为例，
   # Endpoint填写为https://oss-cn-hangzhou.aliyuncs.com。
   #  *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
   #  *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
   #  *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
   #  *  [endpoint] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
   ALIYUN_OSS = {
       "accessKeyId": "accessKeyId",
       "accessKeySecret": "accessKeySecret",
       "endpoint": "endpoint",
       "bucket": "bucket",
       "baseUrl": "baseUrl"
   }
   
   # 获取IP地址归属地
   # 文档：https://user.ip138.com/ip/doc
   IP_PARSE_ENABLE = True
   IP_PARSE_TOKEN = "IP_PARSE_TOKEN"
   ```

4. - development.py：开发环境
   - production.py：生产环境

5. 并在`alembic.ini`文件中配置数据库信息，用于数据库映射：

   ```python
   # mysql+pymysql://数据库用户名:数据库密码@数据库地址:数据库端口/数据库名称
   
   [dev]
   # 开发环境
   version_locations = %(here)s/alembic/versions_dev
   sqlalchemy.url = mysql+pymysql://root:123456@127.0.0.1/kinit
   
   
   [pro]
   # 生产环境
   version_locations = %(here)s/alembic/versions_pro
   sqlalchemy.url = mysql+pymysql://root:123456@127.0.0.1/kinit
   ```

6. 创建数据库：

   ```sql
   mysql> create database kinit;             # 创建数据库
   mysql> use kinit;                         # 使用已创建的数据库 
   mysql> set names utf8;                    # 设置编码
   ```

7. 初始化数据库数据：

   ```shell
   # 项目根目录下执行，需提前创建好数据库
   # 会自动将模型迁移到数据库，并生成初始化数据
   # 执行前请确认执行的环境与settings.py文件中配置的DEBUG一致
   
   # （生产环境）
   python3 main.py init
   
   # （开发环境）
   python3 main.py init --env dev
   ```

8. 修改项目基本配置信息

   修改数据库表 - vadmin_system_settings 中的关键信息

   ```shell
   # 阿里云短信配置
   sms_access_key
   sms_access_key_secret
   sms_sign_name_1
   sms_template_code_1
   sms_sign_name_2
   sms_template_code_2
   
   # 高德地图配置
   map_key
   
   # 微信小程序配置
   wx_server_app_id
   wx_server_app_secret
   
   # 邮箱配置
   email_access
   email_password
   email_server
   email_port
   ```

9. 启动：

   ```shell
   # 进入项目根目录下执行
   python3 main.py run
   ```

**PC端**：

1. 安装依赖：

   ```shell
   cd kinit-admin
   
   pnpm install
   ```

2. 运行：

   ```shell
   pnpm run dev
   ```

3. 打包：

   ```shell
   pnpm run build:pro
   ```

**定时任务**：

1. 安装依赖：

   ```shell
   # 安装依赖库
   pip3 install -r requirements.txt -i https://mirrors.aliyun.com/pypi/simple/
   
   # 第三方源：
   1. 阿里源：https://mirrors.aliyun.com/pypi/simple/
   ```

2. 修改项目数据库配置信息：在 `application/config` 目录中

   ```shell
   # MongoDB 数据库配置
   # 与接口是同一个数据库
   MONGO_DB_NAME = "数据库名称"
   MONGO_DB_URL = f"mongodb://用户名:密码@地址:端口/?authSource={MONGO_DB_NAME}"
   
   
   # Redis 数据库配置
   # 与接口是同一个数据库
   REDIS_DB_URL = "redis://:密码@地址:端口/数据库名称"
   ```

   - development.py：开发环境
   - production.py：生产环境

4. 启动：

   ```shell
   python3 main.py
   ```

**访问项目**：

- 访问地址：http://localhost:5000 (默认为此地址，如有修改请按照配置文件)
- 账号：`15020221010` 密码：`kinit2022`
- 接口地址：http://localhost:9000/docs (默认为此地址，如有修改请按照配置文件)

**Docker Compose 生产环境部署**：

- 准备工作

  1. 获取代码

     ```
     git clone https://gitee.com/ktianc/kinit.git
     ```


  2. 修改项目环境配置：

     - 修改 API 端：文件路径为：`kinit-api/application/settings.py`

       ```python
       # 安全警告: 不要在生产中打开调试运行!
       DEBUG = False # 生产环境应该改为 False
       ```

     - 修改定时任务端：文件路径为：`kinit-task/application/settings.py`

       ```python
       # 安全警告: 不要在生产中打开调试运行!
       DEBUG = False # 生产环境应该改为 False
       ```

3. （**如果没有安装数据库则不需要这一操作**）如果已有 Mysql 或者 Redis 或者 MongoDB 数据库，请执行以下操作：请先在对应数据库中创建用户名以及数据库，并修改以下数据库连接改为已有的数据库连接

   1. 修改 API 端配置文件：文件路径为：`kinit-api/application/config/production.py`

      ```python
      # Mysql 数据库配置项
      # 连接引擎官方文档：https://www.osgeo.cn/sqlalchemy/core/engines.html
      # 数据库连接配置说明：mysql+asyncmy://数据库用户名:数据库密码@数据库地址:数据库端口/数据库名称
      SQLALCHEMY_DATABASE_URL = "mysql+asyncmy://root:123456@177.8.0.7:3306/kinit"
      
      # Redis 数据库配置
      # 格式："redis://:密码@地址:端口/数据库名称"
      REDIS_DB_ENABLE = True
      REDIS_DB_URL = "redis://:123456@177.8.0.5:6379/1"
      
      # MongoDB 数据库配置
      # 格式：mongodb://用户名:密码@地址:端口/?authSource=数据库名称
      MONGO_DB_ENABLE = True
      MONGO_DB_NAME = "kinit"
      MONGO_DB_URL = f"mongodb://kinit:123456@177.8.0.6:27017/?authSource={MONGO_DB_NAME}"
      ```

   2. 修改定时任务配置文件：文件路径为：`kinit-task/application/config/production.py`

      ```python
      # Redis 数据库配置
      # 与接口是同一个数据库
      # 格式："redis://:密码@地址:端口/数据库名称"
      REDIS_DB_ENABLE = True
      REDIS_DB_URL = "redis://:123456@177.8.0.5:6379/1"
      
      # MongoDB 数据库配置
      # 与接口是同一个数据库
      # 格式：mongodb://用户名:密码@地址:端口/?authSource=数据库名称
      MONGO_DB_ENABLE = True
      MONGO_DB_NAME = "kinit"
      MONGO_DB_URL = f"mongodb://kinit:123456@177.8.0.6:27017/?authSource={MONGO_DB_NAME}"
      ```

   3. 将已有的数据库在 `docker-compose.yml` 文件中注释

4. 配置阿里云 OSS 与 IP 解析接口地址 (可选)：文件路径：`kinit-api/application/config/production.py`

   ```python
   # 阿里云对象存储OSS配置
   # 阿里云账号AccessKey拥有所有API的访问权限，风险很高。强烈建议您创建并使用RAM用户进行API访问或日常运维，请登录RAM控制台创建RAM用户。
   # yourEndpoint填写Bucket所在地域对应的Endpoint。以华东1（杭州）为例，
   # Endpoint填写为https://oss-cn-hangzhou.aliyuncs.com。
   #  *  [accessKeyId] {String}：通过阿里云控制台创建的AccessKey。
   #  *  [accessKeySecret] {String}：通过阿里云控制台创建的AccessSecret。
   #  *  [bucket] {String}：通过控制台或PutBucket创建的bucket。
   #  *  [endpoint] {String}：bucket所在的区域， 默认oss-cn-hangzhou。
   ALIYUN_OSS = {
       "accessKeyId": "accessKeyId",
       "accessKeySecret": "accessKeySecret",
       "endpoint": "endpoint",
       "bucket": "bucket",
       "baseUrl": "baseUrl"
   }
   
   # 获取IP地址归属地
   # 文档：https://user.ip138.com/ip/doc
   IP_PARSE_ENABLE = False
   IP_PARSE_TOKEN = "IP_PARSE_TOKEN"
   ```

5. 前端项目打包：

   ```shell
   cd kinit-admin
   
   # 安装依赖包
   pnpm install
   
   # 打包
   pnpm run build:pro
   ```

**启动并初始化项目**：

```shell
# 启动并创建所有容器
docker-compose up -d

# 初始化数据
docker-compose exec kinit-api python3 main.py init

# 重启所有容器
docker-compose restart


# 其他命令：

# 停止所有容器
docker-compose down

# 查看所有容器状态
docker-compose ps -a
```

**访问项目**：

- 访问地址：http://localhost (默认为此地址，如有修改请按照配置文件)
- 账号：`15020221010` 密码：`kinit2022`
- 接口地址：http://localhost:9000/docs (默认为此地址，如有修改请按照配置文件)

**浏览器支持**：本地开发推荐使用 `Chrome 80+` 浏览器，支持现代浏览器, 不支持 IE

| IE          | Edge            | Firefox         | Chrome          | Safari          |
| :---------- | :-------------- | :-------------- | :-------------- | :-------------- |
| not support | last 2 versions | last 2 versions | last 2 versions | last 2 versions |

**PC端演示图**：

![img](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254297.png)![image-20241121225156993](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254058.png)![image-20241121225213701](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254208.png)![image-20241121225238067](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254447.png)![image-20241121225257428](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254773.png)![image-20241121225324245](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254314.png)![image-20241121225345780](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212255442.png)![image-20241121225358586](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254021.png)![image-20241121225410110](https://cdn.jsdelivr.net/gh/letengzz/tc2/img202411212254663.png)
