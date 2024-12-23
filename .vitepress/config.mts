import { defineConfig } from 'vitepress'
import { sidebar } from "./sidebar.ts";	// 改成自己的路径

export default defineConfig({
  title: "Hjc的个人文档",
  titleTemplate: ":title - Hjc",
  ignoreDeadLinks: [
    // ignore exact url "/playground"
    '/playground',
    // ignore all localhost links
    /^https?:\/\/localhost/,
    // ignore all links include "/repl/""
    /\/repl\//,
    // custom function, ignore all links include "ignore"
    (url) => {
      return url.toLowerCase().includes('ignore')
    }
  ],
  description: "Hjc",
  // base: `/docs-website/`,
  head: [['link', { rel: 'icon', href: `/logo.svg` }]],
  lang: 'zh-CN',
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg", // 配置logo位置，public目录
    outline: [2, 6],
    outlineTitle: '目录',
    // 设置搜索框的样式
    search: {
      provider: "local",
      options: {
        translations: {
          button: {
            buttonText: "搜索文档",
            buttonAriaLabel: "搜索文档",
          },
          modal: {
            noResultsText: "无法找到相关结果",
            resetButtonTitle: "清除查询条件",
            footer: {
              selectText: "选择",
              navigateText: "切换",
            },
          },
        },
      },
    },
    // search: {
    //   provider: 'local'
    // },
    nav: [
      { text: '首页', link: '/' },
      {
        text: '前端', items: [
          { text: '基础', link: '/docs/Frontend/Basic' },
          { text: '框架', link: '/docs/Frontend/Frame' },
          { text: '工具', link: '/docs/Frontend/Tools' },
          { text: '其他', link: '/docs/Frontend/Others' }
        ]
      },
      {
        text: '后端', items: [
          { text: 'Go', link: '/docs/Backend/Go' },
          { text: 'Java', link: '/docs/Backend/Java' },
          { text: 'Python', link: '/docs/Backend/Python' },]
      },
      {
        text: '数据库',
        items: [
          { text: 'MySQL', link: '/docs/数据库/MySQL' },
          { text: 'Redis', link: '/docs/数据库/Redis' },
          { text: 'ELK', link: '/docs/数据库/ELK' },
          { text: 'MongoDB', link: '/docs/数据库/MongoDB' },
          { text: '人大金仓', link: '/docs/数据库/人大金仓' },
        ]
      },
      {
        text: '运维', items: [
          { text: '虚拟机', link: '/docs/Ops/VM' },
          { text: 'Linux', link: '/docs/Ops/Linux' },
          { text: 'Nginx', link: '/docs/Ops/Nginx' },
          { text: 'Docker', link: '/docs/Ops/Docker' },
          { text: 'Kubernetes', link: '/docs/Ops/Kubernetes' },
          { text: '工具', link: '/docs/Ops/Tools' },
          { text: '其他', link: '/docs/Ops/Others' },
        ]
      },
      { text: '项目', link: '/project' },
      { text: '其他', link: '/docs/Others' },
    ],
    sidebar: sidebar,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/letengzz' }
    ],
    footer: {
      message: '开发者笔记仓库',
      copyright: 'Copyright © 2024 Hjc'
    },
    docFooter: {
      prev: false,
      next: false
    },
  }
})
