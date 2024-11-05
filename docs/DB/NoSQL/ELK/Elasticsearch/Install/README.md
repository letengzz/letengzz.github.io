# Elasticsearch 安装

- [Windows 安装](Windows/README.md)
- Linux 安装
- MacOS 安装
- [Docker 安装](Docker/README.md)
- [生产集群配置](Prod/README.md)

#### install elasticsearch

```
docker run -d --name elasticsearch --restart=always -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.12.1
```

#### install kibana

--like : 建立两个容器之间的关联, kibana 关联到 es
汉化的kibana

```
docker run -d --name kibana --restart=always --link elasticsearch:elasticsearch -e "I18N_LOCALE=zh-CN" -p 5601:5601 kibana:7.12.1
```

非汉化

```
docker run -d --name kibana --restart=always --link elasticsearch:elasticsearch -p 5601:5601 kibana:7.12.1
```

访问路径：192.168.10.190:5601

## Windows

#### install elasticsearch

```
docker run -d --name elasticsearch -p 9200:9200 -p 9300:9300 -e "discovery.type=single-node" elasticsearch:7.12.1
```

#### install kibana

--like : 建立两个容器之间的关联, kibana 关联到 es
汉化的kibana

```
docker run -d --name kibana --restart=always --link elasticsearch:elasticsearch -e "I18N_LOCALE=zh-CN" -p 5601:5601 kibana:7.12.1
```

```
docker run -d --name kibana --restart=always --link elasticsearch:elasticsearch -p 5601:5601 kibana:7.12.1
```

访问路径：192.168.10.190:5601
