export const NoRelational = [
    {
        text: '非关系型数据库',
        link: '/docs/DB/NoRelational/index.md',
        items: [
            {
                text: 'Elastic Stack', link: '/docs/DB/NoRelational/ELK/index.md', collapsed: true, items: [
                    {
                        text: 'Elasticsearch', link: '/docs/DB/NoRelational/ELK/Elasticsearch/index.md', collapsed: true, items: [
                            { text: 'Elasticsearch 概述', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Overview.md' },
                            { text: 'Elasticsearch 核心概念', link: '/docs/DB/NoRelational/ELK/Elasticsearch/CoreConcept.md' },
                            { text: 'Elasticsearch 安装', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Install/index.md' },
                            { text: 'Elasticsearch 基础使用', link: '/docs/DB/NoRelational/ELK/Elasticsearch/BasicOperation.md' },
                            { text: 'Elasticsearch 分词器', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Tokenizer/index.md' },
                            { text: 'Elasticsearch 可视化工具', link: '/docs/DB/NoRelational/ELK/Elasticsearch/VisualTool/index.md' },
                            { text: 'Elasticsearch Java操作', link: '/docs/DB/NoRelational/ELK/Elasticsearch/Java/index.md' },
                        ]
                    },
                    {
                        text: 'Kibana', collapsed: true, items: [
                            { text: 'Kibana 安装', link: '/docs/DB/NoRelational/ELK/Kibana/Install/index.md' },
                        ]
                    },
                    {
                        text: '插件', collapsed: true, items: [
                            { text: 'fscrawler 文档爬虫', link: '/docs/DB/NoRelational/ELK/Kibana/Install/index.md' },
                        ]
                    },
                ]
            },
        ]
    }
]

export const Relational = []