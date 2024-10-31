import { set_sidebar } from "../utils/auto-gen-sidebar.mjs";	// 改成自己的路径
import { defineConfig } from 'vitepress'
export const sidebar = {
    // "/docs": [
    //     {
    //         text: '前端',
    //         collapsed: true,
    //         items: [
    //             {
    //                 text: '基础', collapsed: true, link: '/docs/前端/基础', items: [
    //                     { text: '前端开发', link: '/docs/前端/基础/前端开发' },
    //                     { text: 'HTML', link: '/docs/前端/基础/HTML' },
    //                     { text: 'CSS', link: '/docs/前端/基础/CSS' },
    //                     { text: 'JavaScript', link: '/docs/前端/基础/JavaScript' },
    //                     { text: 'TypeScript', link: '/docs/前端/基础/TypeScript' },
    //                 ]
    //             },
    //             {
    //                 text: '框架', collapsed: true, items: [
    //                     {
    //                         text: 'Vue', link: '/docs/前端/框架/Vue', collapsed: true, items: [
    //                             { text: 'Vue 概述', link: '/docs/前端/框架/Vue/概述.md' },
    //                             {
    //                                 text: 'Vue2', collapsed: true, link: '/docs/前端/框架/Vue/Vue2', items: [
    //                                     { text: 'Vue2 创建工程', link: '/docs/前端/框架/Vue/Vue2/创建工程.md' },
    //                                     {
    //                                         text: 'Vue2 核心', collapsed: true, link: '/docs/前端/框架/Vue/Vue2/核心', items: [
    //                                             { text: '内置指令', link: '/docs/前端/框架/Vue/Vue2/核心/内置指令.md' },
    //                                             { text: '事件处理', link: '/docs/前端/框架/Vue/Vue2/核心/事件处理.md' },
    //                                             { text: '计算属性', link: '/docs/前端/框架/Vue/Vue2/核心/计算属性.md' },
    //                                             { text: '数据绑定', link: '/docs/前端/框架/Vue/Vue2/核心/数据绑定.md' },
    //                                             { text: '条件渲染', link: '/docs/前端/框架/Vue/Vue2/核心/条件渲染.md' },
    //                                             { text: '列表渲染', link: '/docs/前端/框架/Vue/Vue2/核心/列表渲染.md' },
    //                                             { text: '生命周期', link: '/docs/前端/框架/Vue/Vue2/核心/生命周期.md' },
    //                                             { text: 'vue_config.js 配置', link: '/docs/前端/框架/Vue/Vue2/核心/配置.md' },
    //                                         ]
    //                                     },
    //                                     { text: 'Vue2 组件化', link: '/docs/前端/框架/Vue/Vue2/组件化' },
    //                                 ]
    //                             },
    //                             {
    //                                 text: 'Vue3', collapsed: true, link: '/docs/前端/框架/Vue/Vue3', items: [
    //                                     { text: 'Vue3 概述', link: '/docs/前端/框架/Vue/Vue3/概述.md' },
    //                                     { text: 'Vue3 基本操作', link: '/docs/前端/框架/Vue/Vue3/基本操作.md' },
    //                                     { text: 'Vue3 核心语法', link: '/docs/前端/框架/Vue/Vue3/核心语法.md' },
    //                                     { text: 'Vue3 路由', link: '/docs/前端/框架/Vue/Vue3/路由.md' },
    //                                     { text: 'Vue3 Pinia', link: '/docs/前端/框架/Vue/Vue3/Pinia.md' },
    //                                     { text: 'Vue3 组件通信', link: '/docs/前端/框架/Vue/Vue3/组件通信.md' },
    //                                     { text: 'Vue3 新组件', link: '/docs/前端/框架/Vue/Vue3/新组件.md' },
    //                                     {
    //                                         text: '拓展', collapsed: true, items: [
    //                                             { text: 'Vue3 常见问题', link: '/docs/前端/框架/Vue/Vue3/拓展/常见问题.md' },
    //                                         ]
    //                                     },
    //                                 ]
    //                             },
    //                         ]
    //                     },
    //                     { text: 'React', link: '/docs/前端/框架/React', collapsed: true },
    //                     {
    //                         text: 'Uniapp', link: '/docs/前端/框架/Uniapp', collapsed: true, items: [
    //                             {
    //                                 text: '组件库', collapsed: true, items: [
    //                                     { text: 'Wot Design Uni', link: '/docs/前端/框架/Uniapp/组件库/WotDesignUni.md' },
    //                                 ]
    //                             }
    //                         ]
    //                     },
    //                     {
    //                         text: 'Electron', link: '/docs/前端/框架/Electron', collapsed: true, items: [
    //                             { text: 'Electron 概述', link: '/docs/前端/框架/Electron/概述.md' },
    //                             { text: 'Electron 搭建环境', link: '/docs/前端/框架/Electron/搭建环境.md' },
    //                             { text: 'Electron 配置', link: '/docs/前端/框架/Electron/配置.md' },
    //                             { text: 'Electron 进程', link: '/docs/前端/框架/Electron/进程.md' },
    //                             { text: 'Electron Preload脚本', link: '/docs/前端/框架/Electron/预加载脚本.md' },
    //                             { text: 'Electron 进程通信IPC', link: '/docs/前端/框架/Electron/IPC.md' },
    //                             { text: 'Electron 打包应用', link: '/docs/前端/框架/Electron/打包应用.md' },
    //                             { text: 'Electron 构建工具', link: '/docs/前端/框架/Electron/构建工具.md' },
    //                             { text: '拓展', collapsed: true, items: [{ text: 'Electron+Vue3项目打包', link: '/docs/前端/框架/Electron/拓展/vue打包.md' }] }
    //                         ]
    //                     },
    //                 ]
    //             },
    //             {
    //                 text: '工具', collapsed: true, items: [
    //                     { text: 'IDE', collapsed: true, items: set_sidebar("/docs/前端/工具/IDE") },
    //                 ]
    //             },
    //             { text: '其他', collapsed: true, items: set_sidebar("/docs/前端/其他") }
    //         ]
    //     },
    //     {
    //         text: '后端',
    //         collapsed: true,
    //         items: [
    //             { text: 'Go', collapsed: true, items: set_sidebar("/docs/后端/Go") },
    //             {
    //                 text: 'Java', collapsed: true, link: '/docs/后端/Java', items: [
    //                     { text: 'JavaSE', link: '/docs/后端/Java/JavaSE' },
    //                     { text: 'JavaWeb', link: '/docs/后端/Java/JavaWeb' },
    //                     { text: 'JDBC', link: '/docs/后端/Java/JDBC' },
    //                     {
    //                         text: 'Java框架', collapsed: true, link: '/docs/后端/Java/Java框架',
    //                         items: [
    //                             { text: '框架基本概念', link: '/docs/后端/Java/Java框架/框架基本概念.md' },
    //                             { text: 'Spring', link: '/docs/后端/Java/Java框架/Spring' },
    //                             { text: 'SpringBoot', link: '/docs/后端/Java/Java框架/SpringBoot' },
    //                             { text: 'Spring Cloud', link: '/docs/后端/Java/Java框架/SpringCloud' },
    //                             { text: 'MyBatis', link: '/docs/后端/Java/Java框架/MyBatis' },
    //                             { text: 'MyBatis Plus', link: '/docs/后端/Java/Java框架/MyBatisPlus' },
    //                             { text: 'Sa-token', link: '/docs/后端/Java/Java框架/Sa-token' },
    //                         ]
    //                     },
    //                     {
    //                         text: '消息队列MQ',
    //                         collapsed: true,
    //                         items: [
    //                             { text: '消息队列MQ 概述', link: '/docs/后端/Java/消息队列MQ/概述.md' },
    //                             { text: 'Kafka', link: '/docs/后端/Java/消息队列MQ/Kafka/概述.md' },
    //                             { text: 'RabbitMQ', link: '/docs/后端/Java/消息队列MQ/RabbitMQ/概述.md' },
    //                             { text: 'RocketMQ', link: '/docs/后端/Java/消息队列MQ/RocketMQ/概述.md' },
    //                         ]
    //                     },
    //                     {
    //                         text: '工具',
    //                         collapsed: true,
    //                         items: [
    //                             {
    //                                 text: 'IDE',
    //                                 collapsed: true,
    //                                 items: [
    //                                     { text: 'IDEA', link: '/docs/后端/Java/工具/IDE/IDEA/概述.md' },
    //                                 ]
    //                             },
    //                             {
    //                                 text: '版本控制',
    //                                 collapsed: true,
    //                                 items: [
    //                                     { text: '版本控制 概述', link: '/docs/后端/Java/工具/版本控制/概述.md' },
    //                                     { text: 'Git', link: '/docs/后端/Java/工具/版本控制/Git/概述.md' },
    //                                     { text: 'SVN', link: '/docs/后端/Java/工具/版本控制/SVN/概述.md' },
    //                                 ]
    //                             },
    //                             {
    //                                 text: '持续集成工具',
    //                                 collapsed: true,
    //                                 items: [
    //                                     { text: 'Jenkins', link: '/docs/后端/Java/工具/持续集成工具/Jenkins/概述.md' },
    //                                 ]
    //                             },
    //                             {
    //                                 text: '构建依赖管理工具',
    //                                 collapsed: true,
    //                                 items: [
    //                                     { text: 'Maven', link: '/docs/后端/Java/工具/构建依赖管理工具/Maven/概述.md' },
    //                                 ]
    //                             },
    //                         ]
    //                     },
    //                     { text: '算法' },
    //                     { text: '其他' },
    //                 ]
    //             },
    //             { text: 'Python', collapsed: true, items: set_sidebar("/docs/后端/Python") },

    //         ]
    //     },
    //     {
    //         text: '数据库',
    //         collapsed: true,
    //         items: set_sidebar("/docs/数据库")
    //     },
    //     {
    //         text: '其他',
    //         collapsed: true,
    //         items: set_sidebar("/docs/其他")
    //     },
    // ],
    // "/project": [
    //     {
    //         text: '通用权限项目',
    //         collapsed: true,
    //         items: [
    //             {
    //                 text: '通用权限项目(一)', collapsed: true, link: '/project/通用权限项目/通用权限项目(一)/index', items: [
    //                     { text: '项目介绍', link: '/project/通用权限项目/通用权限项目(一)/项目介绍' },
    //                     { text: '项目搭建', link: '/project/通用权限项目/通用权限项目(一)/项目搭建' },
    //                     { text: '角色管理模块', link: '/project/通用权限项目/通用权限项目(一)/角色管理模块' },
    //                 ]
    //             },
    //             { text: '通用权限项目(二)', link: '/project/通用权限项目/通用权限项目(二)/index' },
    //         ]
    //     },
    // ],
    // "/docs/前端": [
    //     {
    //         text: '基础', collapsed: true, link: '/docs/前端/基础', items: [
    //             { text: '前端开发', link: '/docs/前端/基础/前端开发' },
    //             { text: 'HTML', link: '/docs/前端/基础/HTML' },
    //             { text: 'CSS', link: '/docs/前端/基础/CSS' },
    //             { text: 'JavaScript', link: '/docs/前端/基础/JavaScript' },
    //             { text: 'TypeScript', link: '/docs/前端/基础/TypeScript' },
    //         ]
    //     },
    //     {
    //         text: '框架', collapsed: true, items: [
    //             {
    //                 text: 'Vue', link: '/docs/前端/框架/Vue', collapsed: true, items: [
    //                     { text: 'Vue 概述', link: '/docs/前端/框架/Vue/概述.md' },
    //                     {
    //                         text: 'Vue2', collapsed: true, link: '/docs/前端/框架/Vue/Vue2', items: [
    //                             { text: 'Vue2 创建工程', link: '/docs/前端/框架/Vue/Vue2/创建工程.md' },
    //                             {
    //                                 text: 'Vue2 核心', collapsed: true, link: '/docs/前端/框架/Vue/Vue2/核心', items: [
    //                                     { text: '内置指令', link: '/docs/前端/框架/Vue/Vue2/核心/内置指令.md' },
    //                                     { text: '事件处理', link: '/docs/前端/框架/Vue/Vue2/核心/事件处理.md' },
    //                                     { text: '计算属性', link: '/docs/前端/框架/Vue/Vue2/核心/计算属性.md' },
    //                                     { text: '数据绑定', link: '/docs/前端/框架/Vue/Vue2/核心/数据绑定.md' },
    //                                     { text: '条件渲染', link: '/docs/前端/框架/Vue/Vue2/核心/条件渲染.md' },
    //                                     { text: '列表渲染', link: '/docs/前端/框架/Vue/Vue2/核心/列表渲染.md' },
    //                                     { text: '生命周期', link: '/docs/前端/框架/Vue/Vue2/核心/生命周期.md' },
    //                                     { text: 'vue_config.js 配置', link: '/docs/前端/框架/Vue/Vue2/核心/配置.md' },
    //                                 ]
    //                             },
    //                             { text: 'Vue2 组件化', link: '/docs/前端/框架/Vue/Vue2/组件化' },
    //                         ]
    //                     },
    //                     {
    //                         text: 'Vue3', collapsed: true, link: '/docs/前端/框架/Vue/Vue3', items: [
    //                             { text: 'Vue3 概述', link: '/docs/前端/框架/Vue/Vue3/概述.md' },
    //                             { text: 'Vue3 基本操作', link: '/docs/前端/框架/Vue/Vue3/基本操作.md' },
    //                             { text: 'Vue3 核心语法', link: '/docs/前端/框架/Vue/Vue3/核心语法.md' },
    //                             { text: 'Vue3 路由', link: '/docs/前端/框架/Vue/Vue3/路由.md' },
    //                             { text: 'Vue3 Pinia', link: '/docs/前端/框架/Vue/Vue3/Pinia.md' },
    //                             { text: 'Vue3 组件通信', link: '/docs/前端/框架/Vue/Vue3/组件通信.md' },
    //                             { text: 'Vue3 新组件', link: '/docs/前端/框架/Vue/Vue3/新组件.md' },
    //                             {
    //                                 text: '拓展', collapsed: true, items: [
    //                                     { text: 'Vue3 常见问题', link: '/docs/前端/框架/Vue/Vue3/拓展/常见问题.md' },
    //                                 ]
    //                             },
    //                         ]
    //                     },
    //                 ]
    //             },
    //             { text: 'React', link: '/docs/前端/框架/React', collapsed: true },
    //             {
    //                 text: 'Uniapp', link: '/docs/前端/框架/Uniapp', collapsed: true, items: [
    //                     {
    //                         text: '组件库', collapsed: true, items: [
    //                             { text: 'Wot Design Uni', link: '/docs/前端/框架/Uniapp/组件库/WotDesignUni.md' },
    //                         ]
    //                     }
    //                 ]
    //             },
    //             {
    //                 text: 'Electron', link: '/docs/前端/框架/Electron', collapsed: true, items: [
    //                     { text: 'Electron 概述', link: '/docs/前端/框架/Electron/概述.md' },
    //                     { text: 'Electron 搭建环境', link: '/docs/前端/框架/Electron/搭建环境.md' },
    //                     { text: 'Electron 配置', link: '/docs/前端/框架/Electron/配置.md' },
    //                     { text: 'Electron 进程', link: '/docs/前端/框架/Electron/进程.md' },
    //                     { text: 'Electron Preload脚本', link: '/docs/前端/框架/Electron/预加载脚本.md' },
    //                     { text: 'Electron 进程通信IPC', link: '/docs/前端/框架/Electron/IPC.md' },
    //                     { text: 'Electron 打包应用', link: '/docs/前端/框架/Electron/打包应用.md' },
    //                     { text: 'Electron 构建工具', link: '/docs/前端/框架/Electron/构建工具.md' },
    //                     { text: '拓展', collapsed: true, items: [{ text: 'Electron+Vue3项目打包', link: '/docs/前端/框架/Electron/拓展/vue打包.md' }] }
    //                 ]
    //             },
    //         ]
    //     },
    //     {
    //         text: '工具', collapsed: true, items: [
    //             { text: 'IDE', collapsed: true, items: set_sidebar("/docs/前端/工具/IDE") },
    //         ]
    //     },
    //     { text: '其他', collapsed: true, items: set_sidebar("/docs/前端/其他") }
    // ],
    // "/docs/后端/Java": [
    //     { text: 'JavaSE', link: '/docs/后端/Java/JavaSE' },
    //     { text: 'JavaWeb', link: '/docs/后端/Java/JavaWeb' },
    //     { text: 'JDBC', link: '/docs/后端/Java/JDBC' },
    //     {
    //         text: 'Java框架', collapsed: true, link: '/docs/后端/Java/Java框架',
    //         items: [
    //             { text: '框架基本概念', link: '/docs/后端/Java/Java框架/框架基本概念.md' },
    //             { text: 'Spring', link: '/docs/后端/Java/Java框架/Spring' },
    //             { text: 'SpringBoot', link: '/docs/后端/Java/Java框架/SpringBoot' },
    //             { text: 'Spring Cloud', link: '/docs/后端/Java/Java框架/SpringCloud' },
    //             { text: 'MyBatis', link: '/docs/后端/Java/Java框架/MyBatis' },
    //             { text: 'MyBatis Plus', link: '/docs/后端/Java/Java框架/MyBatisPlus' },
    //             { text: 'Sa-token', link: '/docs/后端/Java/Java框架/Sa-token' },
    //         ]
    //     },
    //     {
    //         text: '消息队列MQ',
    //         collapsed: true,
    //         items: [
    //             { text: '消息队列MQ 概述', link: '/docs/后端/Java/消息队列MQ/概述.md' },
    //             { text: 'Kafka', link: '/docs/后端/Java/消息队列MQ/Kafka/概述.md' },
    //             { text: 'RabbitMQ', link: '/docs/后端/Java/消息队列MQ/RabbitMQ/概述.md' },
    //             { text: 'RocketMQ', link: '/docs/后端/Java/消息队列MQ/RocketMQ/概述.md' },
    //         ]
    //     },
    //     {
    //         text: '工具',
    //         collapsed: true,
    //         items: [
    //             {
    //                 text: 'IDE',
    //                 collapsed: true,
    //                 items: [
    //                     { text: 'IDEA', link: '/docs/后端/Java/工具/IDE/IDEA/概述.md' },
    //                 ]
    //             },
    //             {
    //                 text: '版本控制',
    //                 collapsed: true,
    //                 items: [
    //                     { text: '版本控制 概述', link: '/docs/后端/Java/工具/版本控制/概述.md' },
    //                     { text: 'Git', link: '/docs/后端/Java/工具/版本控制/Git/概述.md' },
    //                     { text: 'SVN', link: '/docs/后端/Java/工具/版本控制/SVN/概述.md' },
    //                 ]
    //             },
    //             {
    //                 text: '持续集成工具',
    //                 collapsed: true,
    //                 items: [
    //                     { text: 'Jenkins', link: '/docs/后端/Java/工具/持续集成工具/Jenkins/概述.md' },
    //                 ]
    //             },
    //             {
    //                 text: '构建依赖管理工具',
    //                 collapsed: true,
    //                 items: [
    //                     { text: 'Maven', link: '/docs/后端/Java/工具/构建依赖管理工具/Maven/概述.md' },
    //                 ]
    //             },
    //         ]
    //     },
    //     { text: '算法' },
    //     { text: '其他' },
    // ],

    //前端
    "/docs/Frontend/Basic": [
        {
            text: '基础',
            collapsed: true,
            link: '/docs/Frontend/Basic/index.md',
            items: [
                { text: '前端开发', link: '/docs/Frontend/Basic/FrontendDevelop.md' },
                { text: 'HTML', link: '/docs/Frontend/Basic/HTML/index.md' },
                {
                    text: 'CSS', link: '/docs/Frontend/Basic/CSS/index.md', collapsed: true, items: [
                        { text: 'flax 弹性布局', link: '/docs/Frontend/Basic/CSS/flex.md' },
                        {
                            text: '拓展', collapsed: true, items: [
                                { text: 'Sass', link: '/docs/Frontend/Basic/CSS/Sass.md' },
                            ]
                        }
                    ]
                },
                {
                    text: 'JavaScript', link: '/docs/Frontend/Basic/JavaScript/index.md', collapsed: true, items: [
                        { text: 'JavaScript 数据类型', link: '/docs/Frontend/Basic/JavaScript/DataType.md' },
                        { text: 'JavaScript 模块化', link: '/docs/Frontend/Basic/JavaScript/Modularization.md' },
                        {
                            text: '拓展', collapsed: true, items: [
                                { text: '简写技巧', link: '/docs/Frontend/Basic/JavaScript/Skills.md' },
                            ]
                        }
                    ]
                },
                {
                    text: 'TypeScript', link: '/docs/Frontend/Basic/TypeScript/index.md', collapsed: true, items: [
                        { text: 'TypeScript 概述', link: '/docs/Frontend/Basic/TypeScript/Overview.md' },
                        { text: 'TypeScript 编译', link: '/docs/Frontend/Basic/TypeScript/Compile.md' },
                        { text: 'TypeScript 基本使用', link: '/docs/Frontend/Basic/TypeScript/BasicUse.md' },
                        { text: 'TypeScript 基本类型', link: '/docs/Frontend/Basic/TypeScript/BasicType.md' },
                        { text: 'TypeScript 内置函数', link: '/docs/Frontend/Basic/TypeScript/BuiltinFunction.md' },
                        { text: 'TypeScript 类型别名', link: '/docs/Frontend/Basic/TypeScript/TypeAlias.md' },
                        { text: 'TypeScript 面向对象', link: '/docs/Frontend/Basic/TypeScript/ObjectOriented.md' },
                    ]
                },
                {
                    text: '构建工具', link: '/docs/Frontend/Basic/BuildTool/index.md', collapsed: true, items: [
                        { text: 'Vite', link: '/docs/Frontend/Basic/BuildTool/Vite.md' },
                    ]
                },
                {
                    text: 'Ajax', link: '/docs/Frontend/Basic/AJAX/index.md', collapsed: true, items: [
                        { text: 'axios', link: '/docs/Frontend/Basic/AJAX/axios.md' },
                    ]
                },
                {
                    text: 'ECMAScript', link: '/docs/Frontend/Basic/ECMAScript/index.md', collapsed: true, items: [
                        { text: 'ECMAScript5', link: '/docs/Frontend/Basic/ECMAScript/ECMAScript5.md' },
                        { text: 'ECMAScript6', link: '/docs/Frontend/Basic/ECMAScript/ECMAScript6.md' },
                    ]
                },
                {
                    text: 'Node.js', link: '/docs/Frontend/Basic/NodeJs/index.md', collapsed: true, items: [
                        { text: 'Node.js 概述', link: '/docs/Frontend/Basic/NodeJs/Overview.md' },
                        { text: 'Node.js 安装', link: '/docs/Frontend/Basic/NodeJs/Install.md' },
                        { text: 'Node.js Buffer', link: '/docs/Frontend/Basic/NodeJs/Buffer.md' },
                        {
                            text: 'Node.js 包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/index.md', collapsed: true,
                            items: [
                                { text: 'npm包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/npm.md' },
                                { text: 'cnpm包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/cnpm.md' },
                                { text: 'yarn包管理工具', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/yarn.md' },
                                {
                                    text: '拓展', collapsed: true, items: [
                                        { text: 'npm和yarn选择', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/npm&yarn.md' },
                                        { text: '管理发布包', link: '/docs/Frontend/Basic/NodeJs/PackageManagementTool/ManageReleasePackages.md' },
                                    ]
                                }
                            ]
                        },
                        { text: 'NVM管理版本工具', link: '/docs/Frontend/Basic/NodeJs/NVM.md' },

                        {
                            text: '模块', collapsed: true, items: [
                                { text: '模块化', link: '/docs/Frontend/Basic/NodeJs/Modules/index.md' },
                                { text: 'fs 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/fs.md' },
                                { text: 'path 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/path.md' },
                                { text: 'http 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/http.md' },
                                { text: 'url 模块', link: '/docs/Frontend/Basic/NodeJs/Modules/url.md' },
                            ]
                        },
                        {
                            text: '框架', collapsed: true, items: [
                                {
                                    text: 'Express 框架', link: '/docs/Frontend/Basic/NodeJs/Frame/express/index.md', collapsed: true,
                                    items: [
                                        { text: 'Express 基础操作', link: '/docs/Frontend/Basic/NodeJs/Frame/express/BasicOperations.md' },
                                        { text: 'Express 中间件', link: '/docs/Frontend/Basic/NodeJs/Frame/express/Middleware.md' },
                                        { text: 'Express Router', link: '/docs/Frontend/Basic/NodeJs/Frame/express/Router.md' },
                                        { text: 'EJS 模板引擎', link: '/docs/Frontend/Basic/NodeJs/Frame/express/EJS.md' },
                                    ]
                                },
                            ]
                        },
                        {
                            text: '整合', collapsed: true, items: [
                                { text: '整合 MongoDB' },
                            ]
                        },
                    ]
                },
            ]
        },
    ],
    "/docs/Frontend/Frame": [
        {
            text: '框架',
            collapsed: true,
            link: '/docs/Frontend/Frame/index.md',
            items: [
                {
                    text: 'Electron', link: '/docs/Frontend/Frame/Electron/index.md', collapsed: true,
                    items: [
                        { text: 'Electron 概述', link: '/docs/Frontend/Frame/Electron/Overview.md' },
                        { text: 'Electron 搭建环境', link: '/docs/Frontend/Frame/Electron/BuildEnvironment.md' },
                        { text: 'Electron 配置', link: '/docs/Frontend/Frame/Electron/Configuration.md' },
                        { text: 'Electron 进程', link: '/docs/Frontend/Frame/Electron/Process.md' },
                        { text: 'Electron Preload 脚本', link: '/docs/Frontend/Frame/Electron/Preload.md' },
                        { text: 'Electron 进程通信 IPC', link: '/docs/Frontend/Frame/Electron/IPC.md' },
                        { text: 'Electron 打包应用', link: '/docs/Frontend/Frame/Electron/PackageApplications.md' },
                        { text: 'Electron 构建工具', link: '/docs/Frontend/Frame/Electron/BuildingTools.md' },
                        {
                            text: '拓展', collapsed: true, items: [
                                { text: 'Electron+Vue3项目打包', link: '/docs/Frontend/Frame/Electron/VuePackaging.md' },
                            ]
                        },
                    ]
                },
                { text: 'React', link: '/docs/Frontend/Frame/React/index.md' },
                { text: 'Uniapp', link: '/docs/Frontend/Frame/Uniapp/index.md' },
                {
                    text: 'Vue', link: '/docs/Frontend/Frame/Vue/index.md', collapsed: true,
                    items: [
                        {
                            text: 'Vue2', link: '/docs/Frontend/Frame/Vue/Vue2/index.md', collapsed: true,
                            items: [
                                { text: 'Vue2 创建工程', link: '/docs/Frontend/Frame/Vue/Vue2/CreateProject.md' },
                                {
                                    text: 'Vue2 核心', link: '/docs/Frontend/Frame/Vue/Vue2/Core/index.md', collapsed: true,
                                    items: [
                                        { text: '内置指令', link: '/docs/Frontend/Frame/Vue/Vue2/Core/BuiltinCommands.md' },
                                        { text: '事件处理', link: '/docs/Frontend/Frame/Vue/Vue2/Core/EventHandling.md' },
                                        { text: '计算属性', link: '/docs/Frontend/Frame/Vue/Vue2/Core/watch.md' },
                                        { text: '类和样式绑定' },
                                        { text: '侦听属性' },
                                        { text: '数据绑定', link: '/docs/Frontend/Frame/Vue/Vue2/Core/DataBinding.md' },
                                        { text: '条件渲染', link: '/docs/Frontend/Frame/Vue/Vue2/Core/ConditionalRendering.md' },
                                        { text: '列表渲染', link: '/docs/Frontend/Frame/Vue/Vue2/Core/ListRendering.md' },
                                        { text: '列表过滤' },
                                        { text: '其他指令' },
                                        { text: '自定义指令' },
                                        { text: '响应式与数据劫持' },
                                        { text: '生命周期', link: '/docs/Frontend/Frame/Vue/Vue2/Core/Lifecycle.md' },
                                        { text: 'vue_config.js 配置', link: '/docs/Frontend/Frame/Vue/Vue2/Core/Configuration.md' },
                                    ]
                                },
                                { text: 'Vue2 组件化', link: '/docs/Frontend/Frame/Vue/Vue2/Componentization/index.md' },
                                { text: 'Vue2 vue-resource' },
                                { text: 'Vue2 Vuex' },
                                { text: 'Vue2 路由' },
                            ]
                        },
                        {
                            text: 'Vue3', link: '/docs/Frontend/Frame/Vue/Vue3/index.md', collapsed: true, items: [
                                { text: 'Vue3 概述', link: '/docs/Frontend/Frame/Vue/Vue3/Overview.md' },
                                { text: 'Vue3 创建工程', link: '/docs/Frontend/Frame/Vue/Vue3/CreateProject.md' },
                                { text: 'Vue3 基本操作', link: '/docs/Frontend/Frame/Vue/Vue3/BasicOperations.md' },
                                { text: 'Vue3 核心语法', link: '/docs/Frontend/Frame/Vue/Vue3/CoreGrammar.md' },
                                { text: 'Vue3 路由', link: '/docs/Frontend/Frame/Vue/Vue3/Router.md' },
                                { text: 'Vue3 Pinia', link: '/docs/Frontend/Frame/Vue/Vue3/Pinia.md' },
                                { text: 'Vue3 组件通信', link: '/docs/Frontend/Frame/Vue/Vue3/ComponentCommunication.md' },
                                { text: 'Vue3 其它 API', link: '/docs/Frontend/Frame/Vue/Vue3/OtherAPIs.md' },
                                { text: 'Vue3 新组件', link: '/docs/Frontend/Frame/Vue/Vue3/NewComponent.md' },
                                {
                                    text: '拓展', collapsed: true, items: [
                                        { text: 'Vue3 常见问题', link: '/docs/Frontend/Frame/Vue/Vue3/Errors.md' },
                                    ]
                                },
                            ]
                        },
                    ]
                },
            ]
        }
    ],
    "/docs/Frontend/Tools": [
        {
            text: '工具',
            collapsed: true,
            link: '/docs/Frontend/Tools/index.md',
            items: [
                {
                    text: 'IDE', link: '/docs/Frontend/Tools/IDE/index.md', collapsed: true, items: [
                        {
                            text: 'VSCode', link: '/docs/Frontend/Tools/IDE/VSCode/index.md', collapsed: true,
                            items: [
                                { text: '基础操作', link: '/docs/Frontend/Tools/IDE/VSCode/BasicOperation.md' },
                                {
                                    text: '插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/index.md', collapsed: true, items: [
                                        { text: '插件安装', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Install.md' },
                                        { text: 'Vue 插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Vue.md' },
                                        { text: 'Element 插件', link: '/docs/Frontend/Tools/IDE/VSCode/Plugins/Element.md' },
                                    ]
                                },
                            ]
                        },
                        { text: 'WebStorm', link: '/docs/Frontend/Tools/IDE/WebStorm/index.md' },
                    ]
                },
            ]
        }
    ],
    "/docs/Frontend/Others": [
        {
            text: '其他',
            collapsed: true,
            link: '/docs/Frontend/Others/index.md',
            items: [
                { text: 'HTTP 协议', link: '/docs/Frontend/Others/HTTP.md' },
                { text: '跨域', link: '/docs/Frontend/Others/Cross/index.md' },
                {
                    text: '组件库', link: '/docs/Frontend/Others/ComponentLibrary/index.md', collapsed: true,
                    items: [
                        { text: 'Ant Design', link: '/docs/Frontend/Others/ComponentLibrary/AntDesign.md' },
                        { text: 'ArcoDesign', link: '/docs/Frontend/Others/ComponentLibrary/ArcoDesign.md' },
                        { text: 'ElementUI', link: '/docs/Frontend/Others/ComponentLibrary/ElementUI.md' },
                        { text: 'ElementPlus', link: '/docs/Frontend/Others/ComponentLibrary/ElementPlus.md' },
                        { text: 'OpenTiny', link: '/docs/Frontend/Others/ComponentLibrary/OpenTiny.md' },
                        {
                            text: '移动端组件库', collapsed: true, items: [
                                { text: 'Varlet', link: '/docs/Frontend/Others/ComponentLibrary/Mobile/Varlet.md' },
                            ]
                        },
                        {
                            text: 'Uniapp组件库', collapsed: true, items: [
                                { text: 'Wot Design Uni', link: '/docs/Frontend/Others/ComponentLibrary/Uniapp/WotDesignUni.md' },
                            ]
                        },
                    ]
                },
                {
                    text: '小程序', link: '/docs/Frontend/Others/Wxmin/index.md', collapsed: true, items: [
                        { text: '微信原生语法', link: '/docs/Frontend/Others/Wxmin/NativeGrammar.md' },
                        { text: 'Uniapp', link: '/docs/Frontend/Others/Wxmin/UniApp.md' },
                    ]
                },
                {
                    text: '库', link: '/docs/Frontend/Others/Library/index.md', collapsed: true, items: [
                        { text: '前端拖拽库 pragmatic-drag-and-drop', link: '/docs/Frontend/Others/Library/pragmatic-drag-and-drop.md' },
                    ]
                },
                {
                    text: '模板', link: '/docs/Frontend/Others/Template/index.md', collapsed: true, items: [
                        { text: '中后台管理系统框架',items:[
                            { text: 'vue-element-admin', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-element-admin.md' },
                            { text: 'vue-admin-template', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-admin-template.md' },
                            { text: 'vue-bag-admin', link: '/docs/Frontend/Others/Template/ManagementSystem/vue-bag-admin.md' },
                            { text: 'Pure Admin', link: '/docs/Frontend/Others/Template/ManagementSystem/PureAdmin.md' },
                            { text: 'Fantastic admin', link: '/docs/Frontend/Others/Template/ManagementSystem/Fantasticadmin.md' },
                            
                        ] },
                    ]
                },
            ]
        }
    ],
    //后端
    "/docs/Backend/Go": [
        {
            text: 'Go',
            collapsed: true,
            link: '/docs/Backend/Go/index.md',
            items: set_sidebar("/docs/Backend/Go")
        }
    ],
    "/docs/Backend/Java": [
        {
            text: 'Java',
            collapsed: true,
            link: '/docs/Backend/Java/index.md',
            items: [
                { text: 'JavaSE', link: '/docs/Backend/Java/JavaSE/index.md' },
                { text: 'JavaWeb', link: '/docs/Backend/Java/JavaWeb/index.md' },
                { text: 'JDBC', link: '/docs/Backend/Java/JDBC/index.md' },
                { text: 'Java 框架', link: '/docs/Backend/Java/JavaFrame/index.md' },
                { text: '消息队列MQ', link: '/docs/Backend/Java/MQ/index.md' },
                { text: '工具', link: '/docs/Backend/Java/Tools/index.md' },
                { text: '其他', link: '/docs/Backend/Java/Others/index.md' },
            ]
        }
    ],

    "/docs/Backend/Python": [
        {
            text: 'Python',
            collapsed: true,
            link: '/docs/Backend/Python/index.md',
            items: set_sidebar("/docs/Backend/Python")
        }
    ],

    //运维
    "/docs/Ops/VM": [
        {
            text: '虚拟机',
            collapsed: true,
            link: '/docs/Ops/VM/index.md',
            items: [
                { text: 'VMware', link: '/docs/Ops/VM/VMware.md' },
                { text: 'Vagrant', link: '/docs/Ops/VM/Vagrant.md' },
            ]
        }
    ],
    "/docs/Ops/Linux": [
        {
            text: 'Linux',
            collapsed: true,
            link: '/docs/Ops/Linux/index.md',
            items: [
                { text: 'Linux 概述', link: '/docs/Ops/Linux/Overview.md' },
                { text: 'Linux 虚拟机安装', link: '/docs/Ops/VM/index.md' },
                { text: 'Linux 磁盘管理', link: '/docs/Ops/Linux/Disk.md' },
                { text: 'Linux 系统命令', link: '/docs/Ops/Linux/SystemCommand.md' },
                { text: 'Linux 用户管理', link: '/docs/Ops/Linux/Users.md' },
                { text: 'Linux 文件管理与操作', link: '/docs/Ops/Linux/File.md' },
                { text: 'Linux 软件安装', link: '/docs/Ops/Linux/SoftwareInstall.md' },
                { text: 'Linux shell编程', link: '/docs/Ops/Linux/shell.md' },
                {
                    text: '拓展', collapsed: true, items: [
                        { text: 'GCC', link: '/docs/Ops/Linux/GCC.md' },
                        { text: '安装FTP', link: '/docs/Ops/Linux/FTP.md' },
                        { text: '将Web应用部署到阿里云', link: '/docs/Ops/Linux/DeployAlibaba.md' },
                    ]
                },
            ]
        }
    ],
    "/docs/Ops/Nginx": [
        {
            text: 'Nginx',
            collapsed: true,
            link: '/docs/Ops/Nginx/index.md',
            items: [
                { text: 'Nginx 概述', link: '/docs/Ops/Nginx/Overview.md' },
                { text: 'Nginx 安装', link: '/docs/Ops/Nginx/Install/index.md' },
                { text: 'Nginx 基础使用', link: '/docs/Ops/Nginx/BasicUsage.md' },
            ]
        }
    ],
    "/docs/Ops/Docker": [
        {
            text: 'Docker',
            collapsed: true,
            link: '/docs/Ops/Docker/index.md',
            items: [
                { text: 'Docker 概述', link: '/docs/Ops/Docker/Overview.md' },
                { text: 'Docker 容器与沙盒', link: '/docs/Ops/Docker/ContainersSandboxes.md' },
                {
                    text: 'Docker 安装与卸载',
                    link: '/docs/Ops/Docker/InstallUninstall/index.md',
                    collapsed: true,
                    items: [
                        { text: 'Windows 安装', link: '/docs/Ops/Docker/InstallUninstall/WindowsInstall.md' },
                        { text: 'MacOS 安装', link: '/docs/Ops/Docker/InstallUninstall/MacOSInstall.md' },
                        { text: 'Linux 安装', link: '/docs/Ops/Docker/InstallUninstall/LinuxInstall.md' },
                        { text: 'Windows 卸载', link: '/docs/Ops/Docker/InstallUninstall/WindowsUninstall.md' },
                        { text: 'MacOS 卸载', link: '/docs/Ops/Docker/InstallUninstall/MacOSUninstall.md' },
                        { text: 'Linux 卸载', link: '/docs/Ops/Docker/InstallUninstall/LinuxUninstall.md' },
                    ]
                },
                { text: 'Docker 进程命令', link: '/docs/Ops/Docker/ProcessCommand.md' },
                { text: 'Docker 镜像', link: '/docs/Ops/Docker/Images.md' },
                { text: 'Docker 容器', link: '/docs/Ops/Docker/Containers.md' },
                { text: 'Docker 数据卷', link: '/docs/Ops/Docker/Volumes.md' },
                { text: 'Dockerfile', link: '/docs/Ops/Docker/Dockerfile.md' },
                { text: 'Docker 网络', link: '/docs/Ops/Docker/Network.md' },
                { text: 'Docker Component', link: '/docs/Ops/Docker/DockerComponent.md' },
                { text: 'Docker 其他操作' },
                { text: 'Docker 管理平台' },
                { text: 'Docker 监控平台', link: '/docs/Ops/Docker/CIG.md' },
                {
                    text: '拓展', collapsed: true, items: [
                        { text: 'Docker 镜像To阿里云', link: '/docs/Ops/Docker/DockerToAli.md' },
                        { text: 'Docker 常见错误', link: '/docs/Ops/Docker/Errors.md' },
                    ]
                },
            ]
        }
    ],
    "/docs/Ops/Kubernetes": [
        {
            text: 'Kubernetes',
            collapsed: true,
            link: '/docs/Ops/Kubernetes/index.md',
            items: [
                { text: 'Kubernetes 概述', link: '/docs/Ops/Kubernetes/Overview.md' },
            ]
        }
    ],
    "/docs/Ops/Tools": [
        {
            text: '工具',
            collapsed: true,
            link: '/docs/Ops/Tools/index.md',
            items: [
                { text: 'Xshell', link: '/docs/Ops/Tools/Xshell.md' },
                { text: 'Xftp', link: '/docs/Ops/Tools/Xftp.md' },
            ]
        }
    ],
    "/docs/Ops/Others": [
        {
            text: '其他',
            collapsed: true,
            link: '/docs/Ops/Others/index.md',
            items: set_sidebar("/docs/Ops/Others")
        }
    ],

    //其他
    "/docs/Others": set_sidebar("/docs/Others"),
}