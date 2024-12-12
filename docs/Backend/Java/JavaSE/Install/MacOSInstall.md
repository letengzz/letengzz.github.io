# MacOS 安装

双击下载好的.dmg文件进入默认安装程序

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/84fdf0b0f00a736f8996b6ff8536c1ab.png#pic_center)

打开终端输入命令：Java -version查看是否安装成功

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/9174698e1124d3ab59722927ea2bbc19.png#pic_center)

安装好后可配置环境变量

终端输入 open -t ~/.bash_profile打开配置文件

按i输入添加环境变量：

```java
export JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk17.0.5.jdk/Contents/Home
export CLASSPAHT=.:$JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar
export PATH=$PATH:JAVA_HOME/bin
123
```

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/81768cb1a6ae77b952ef70a9c39dea76.png#pic_center)

注：博主电脑自带有jdk且版本与目前讲的不同，朋友你按照目前讲的版本复制粘贴即可无需与图片一致

输入source ~/.bash_profile让配置生效

![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/55ff17c9b6254ddc6f49c41465f4e9c5.png#pic_center)

输入echo $JAVA_HOME查看是否打印出java路径![在这里插入图片描述](https://i-blog.csdnimg.cn/blog_migrate/054c590bb7cb221a1f3b210e1f8eb7cf.png#pic_center)

JAVA_HOME=/Library/Java/JavaVirtualMachines/jdk1.8.0_171.jdk/Contents/Home 就是所有Mac 默认java路径，所有mac都一样只是版本号jdk1.8.0_171.jdk不同。
