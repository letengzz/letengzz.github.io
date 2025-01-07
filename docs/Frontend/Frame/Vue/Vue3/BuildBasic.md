# Vue3 搭建基础环境

由于vite脚手架要禁止*.cjs 和 eslint版本升级废弃rc配置文件， 故重新搭建。

核心采用antfu大神预设配置 替代prettier和eslint设置，保留stylelint原因是暂时antfu不支持。

## 前置条件

###  node版本

node 最好>20 因为eslint9的需要 本次项目node为20.10.0

![image-20250107150058871](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20250107150058871.png)

###  vscode 插件

vscode 插件 eslint prettier stylelint unocss vue-official postcss

![image-20240828103527225](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828103527225.png)

![image-20240828103542672](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828103542672.png)

![image-20240828103556492](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828103556492.png)

![image-20240828103620621](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828103620621.png)

![image-20240828103706879](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828103706879.png)

![image-20240828140147090](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240828140147090.png)

### git

安装官方git 用代码仓库管理

```shell
git init
```

## 创建项目

使用官方命令创建项目，然后清空项目

```shell
npm create vue
```

![image-20250107154112524](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20250107154112524.png)

## .vscode 配置文件  

> 用于保存带代码格式化

生成.vscode/setting.json 修改：

```json
{
  "typescript.tsdk": "./node_modules/typescript/lib",
  // "npm.packageManager": "pnpm",
  // "editor.formatOnSave": true,
  "editor.tabSize": 2,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  // 保存文件缓慢时，可以考虑开启以下 3 行配置。
  "vue.server.maxOldSpaceSize": 4096,
  "vue.server.hybridMode": true,
  "typescript.tsserver.maxTsServerMemory": 4096,
  "files.eol": "\n",
  "editor.guides.bracketPairs": true,
  "editor.bracketPairColorization.enabled": true,
  "vue.inlayHints.missingProps": true,
  "vue.autoInsert.dotValue": true,
  "explorer.copyRelativePathSeparator": "/",
  "search.exclude": {
    "**/node_modules": true,
    "**/*.log": true,
    "**/*.log*": true,
    "**/bower_components": true,
    "**/dist": true,
    "**/elehukouben": true,
    "**/.git": true,
    "**/.gitignore": true,
    "**/.svn": true,
    "**/.DS_Store": true,
    "**/.idea": true,
    "**/.vscode": false,
    "**/pnpm i.lock": true,
    "**/tmp": true,
    "out": true,
    "dist": true,
    "node_modules": true,
    "CHANGELOG.md": true,
    "examples": true,
    "res": true,
    "screenshots": true,
    "pnpm i-error.log": true,
    "**/.pnpm i": true
  },
  "files.exclude": {
    "**/.cache": true,
    "**/.editorconfig": true,
    "**/.eslintcache": true,
    "**/bower_components": true,
    "**/.idea": true,
    "**/tmp": true,
    "**/.git": true,
    "**/.svn": true,
    "**/.hg": true,
    "**/CVS": true,
    "**/.DS_Store": true
  },
  "files.watcherExclude": {
    "**/.git/objects/**": true,
    "**/.git/subtree-cache/**": true,
    "**/.vscode/**": true,
    "**/node_modules/**": true,
    "**/tmp/**": true,
    "**/bower_components/**": true,
    "**/dist/**": true,
    "**/pnpm i.lock": true
  },
  "eslint.useFlatConfig": true,
  "stylelint.enable": true,
  "stylelint.validate": ["css", "less", "postcss", "scss", "vue", "sass"],
  "path-intellisense.mappings": {
    "@/": "${workspaceRoot}/src"
  },
  "i18n-ally.localesPaths": ["src/locales/lang"],
  "i18n-ally.keystyle": "nested",
  "i18n-ally.sortKeys": true,
  "i18n-ally.namespace": true,
  "i18n-ally.pathMatcher": "{locale}/{namespaces}.{ext}",
  "i18n-ally.enabledParsers": ["json"],
  "i18n-ally.sourceLanguage": "en",
  "i18n-ally.displayLanguage": "zh-CN",
  "i18n-ally.enabledFrameworks": ["vue", "react"],
  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": "explicit",
    "source.organizeImports": "never",
    "source.fixAll.stylelint": "explicit"
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off", "fixable": true },
    { "rule": "format/*", "severity": "off", "fixable": true },
    { "rule": "*-indent", "severity": "off", "fixable": true },
    { "rule": "*-spacing", "severity": "off", "fixable": true },
    { "rule": "*-spaces", "severity": "off", "fixable": true },
    { "rule": "*-order", "severity": "off", "fixable": true },
    { "rule": "*-dangle", "severity": "off", "fixable": true },
    { "rule": "*-newline", "severity": "off", "fixable": true },
    { "rule": "*quotes", "severity": "off", "fixable": true },
    { "rule": "*semi", "severity": "off", "fixable": true }
  ],
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml",
    "toml",
    "xml",
    "gql",
    "graphql",
    "astro",
    "css",
    "less",
    "scss",
    "pcss",
    "postcss"
  ]
}
```

## 使用styleLint

### 依赖包 

>  "less": "^4.2.0", 
>
>  "postcss": "^8.4.41",
>
>  "postcss-html": "^1.7.0",
>
>  "postcss-less": "^6.0.0",
>
>  "postcss-scss": "^4.0.9",
>
>  "sass": "^1.77.8", 
>
>  "stylelint": "^16.8.2",
>
>  "stylelint-config-recess-order": "^5.1.0",
>
>  "stylelint-config-standard": "^36.0.1",

### 安装

```shell
# 选择sass 可以选择不安装包含less相关 反之亦然
npm i less sass postcss postcss-html postcss-less postcss-scss sass stylelint stylelint-config-recess-order stylelint-config-standard -D
```

### 配置文件

> stylelint.config.mjs
>

```js
/** @type {import('stylelint').Config} */
export default {
  // stylelint-config-standard 基础配置
  // stylelint-config-recess-order 样式顺序
  extends: ['stylelint-config-standard', 'stylelint-config-recess-order'],
  // 不同文件类型用不同解析器 
  overrides: [
    {
      files: ['**/*.(css|html|vue)'],
      customSyntax: 'postcss-html',
    },
    // 选less可以注释scss 
    {
      files: ['*.less', '**/*.less'],
      customSyntax: 'postcss-less',
    },
    // 选sass可以注释上面的less
    {
      files: ['*.scss', '**/*.scss'],
      customSyntax: 'postcss-scss',
      rule: {
        'scss/percent-placeholder-pattern': null,
        'scss/at-mixin-pattern': null,
      },
    },
  ],
  rules: {
    // 'prettier/prettier': true,
    'media-feature-range-notation': null,
    'selector-not-notation': null,
    'import-notation': null,
    'function-no-unknown': null,
    'selector-class-pattern': null,
    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: ['global', 'deep'],
      },
    ],
    'selector-pseudo-element-no-unknown': [
      true,
      {
        ignorePseudoElements: ['v-deep',':deep'],
      },
    ],
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
          'function',
          'if',
          'each',
          'include',
          'mixin',
          'extend',
          'use',
        ],
      },
    ],
    'no-empty-source': null,
    'named-grid-areas-no-invalid': null,
    'no-descending-specificity': null,
    'font-family-no-missing-generic-family-keyword': null,
    'rule-empty-line-before': [
      'always',
      {
        ignore: ['after-comment', 'first-nested'],
      },
    ],
    'unit-no-unknown': [true, { ignoreUnits: ['rpx'] }],
    'order/order': [
      [
        'dollar-variables',
        'custom-properties',
        'at-rules',
        'declarations',
        {
          type: 'at-rule',
          name: 'supports',
        },
        {
          type: 'at-rule',
          name: 'media',
        },
        'rules',
      ],
      { severity: 'error' },
    ],
  },
  ignoreFiles: ['**/*.js', '**/*.jsx', '**/*.tsx', '**/*.ts'],
}

```

 ### 新增脚本 

> package.json
>

```js
{
    "scripts": {
        // ...
        "lint:stylelint": "stylelint  \"**/*.{css,scss,less,vue,html}\" --fix"
    }
}
```


### 忽略文件 

> .stylelintignore
>

```js
/dist/*
/public/*
```

## 采用antfu 组合prettier&eslint

配置网站：https://github.com/antfu/eslint-config/tree/feat/support-eslint-9?tab=readme-ov-file 

先选一个unocss 免得后续再去安装unocss的@unocss/eslint-plugin

### 命令行界面 (CLI) 安装

空格选择 回车下一步

```js
npx @antfu/eslint-config@latest
```

![image-20250107173615864](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20250107173615864.png)

### 安装依赖包

>  "@antfu/eslint-config": "^2.27.3",
>
>  "eslint": "^9.9.1",
>
>  "eslint-plugin-format": "^0.1.2",
>
>  "@unocss/eslint-plugin": "^0.62.3",

```js
npm i
```

 ### 配置文件

修改生成配置文件eslint.config.js为eslint.config.mjs 用于eslint规则校验

> eslint.config.mjs
>

```js
import antfu from '@antfu/eslint-config'

export default antfu({
    // @stylistic/eslint-plugin-plus
    stylistic: true,
    // eslint-plugin-format
    formatters: true,
    // unocss 检测&格式化 暂时注释 等配置了unocss再开放为true
    // unocss: true,
    // vue的eslint配置
    vue: true,
    // 保存删除未引入的代码
    // isInEditor: false,
    // 9x版本 忽略文件这种配置方式 废弃掉eslintignore
    ignores: [
        '*.sh',
        'node_modules',
        '*.md',
        '*.woff',
        '*.ttf',
        '.idea',
        '/public',
        '/docs',
        '.husky',
        '.local',
        '/bin',
        'Dockerfile',
    ],
})
```

### 新增脚本

> package.json
>

```js
{
    "scripts": {
       // ...
      "lint": "eslint .",
      "lint:fix": "eslint . --fix"
    }
  }
```

## 代码提交检查

Husky + Lint-staged + Commitlint + Commitizen + cz-git  来配置 Git 提交代码规范。

> 核心内容是配置 Husky 的 pre-commit 和 commit-msg 两个钩子:
>
> pre-commit：Husky + Lint-staged 整合实现 Git 提交前代码规范检测/格式化 (前提：ESlint + Prettier + Stylelint 代码统一规范)；
>
> commit-msg: Husky + Commitlint + Commitizen + cz-git 整合实现生成规范化且高度自定义的 Git commit message。

### husky  

Husky 是 Git 钩子工具，可以设置在 git 各个阶段（`pre-commit`、`commit-msg` 等）触发。

官网https://typicode.github.io/husky 推荐安装指令

1. 前提条件 项目有.git 如果没有需要生成 有git的话不需要这一步

  ```shell
  git init
  ```

2. 自动配置husky

  ```shell
  npx husky-init
  ```

  ![image-20250107210102300](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20250107210102300.png)

3. 3 安装husky 执行 `npm i`

  ```js
  npm i
  ```

  ![image-20250107210141221](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20250107210141221.png)

### Lint-staged 增量检测提交代码

lint-staged 是一个在 git add 到暂存区的文件运行 linters (ESLint/Prettier/StyleLint) 的工具，避免在 git commit 提交时在整个项目执行。

1. 安装：

  ```js
  npm i lint-staged -D
  ```

2. 新建lint-staged.config.mjs 配置文件

  > lint-staged.config.mjs

  ```js
  /**  @type {import('lint-staged').Config} */
  export default {
    '*.{js,jsx,ts,tsx}': ['eslint --fix'],
    '*.json': ['eslint --fix'],
    '*.vue': ['eslint --fix'],
    '*.{scss,less,styl,html}': ['stylelint --fix --allow-empty-input'],
    '*.md': ['prettier --write'],
  }
  ```

3. 添加指令

  > package.json

  ```json
  "scripts": {
    // ...
    "lint:lint-staged": "lint-staged"
  },
  ```

4. 文件`.husky/pre-commit`**修改提交前钩子命令** 

  npx命令会自动执行安装过的 lint-staged插件，从而执行lint-staged.config.mjs配置文件

  ```js
  #!/usr/bin/env sh
  . "$(dirname -- "$0")/_/husky.sh"
  
  npm run lint:lint-staged --allow-empty
  ```

  ![image-20240207143016869](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240207143016869.png)

### Commitlint 

Commitlint 检查您的提交消息是否符合 Conventional commit format。 

Commitlint 官网：https://commitlint.js.org/)

1. 安装：

  ```js
  npm i @commitlint/cli @commitlint/config-conventional -D
  ```

2. 根目录创建 `commitlint.config.mjs` 配置文件：

  > commitlint.config.mjs

  ```js
  /** @type {import("@commitlint/types").UserConfig} */
  export default {
    ignores: [commit => commit.includes('init')],
    extends: ['@commitlint/config-conventional'],
    rules: {
      'body-leading-blank': [2, 'always'],
      'footer-leading-blank': [1, 'always'],
      'header-max-length': [2, 'always', 108],
      'subject-empty': [2, 'never'],
      'type-empty': [2, 'never'],
      'subject-case': [0],
      'type-enum': [
        2,
        'always',
        [
          'feat', // 新增功能
          'fix', // 修复缺陷
          'docs', // 文档变更
          'style', // 代码格式（不影响功能，例如空格、分号等格式修正）
          'refactor', // 代码重构（不包括 bug 修复、功能新增）
          'perf', // 性能优化
          'test', // 添加疏漏测试或已有测试改动
          'build', // 构建流程、外部依赖变更（如升级 npm 包、修改 webpack 配置等）
          'ci', // 修改 CI 配置、脚本
          'revert', // 回滚 commit
          'chore', // 对构建过程或辅助工具和库的更改（不影响源文件、测试用例）
        ],
      ],
    },
  }
  ```

3. 执行下面命令生成 `commint-msg` 钩子用于 git 提交信息校验

  ```js
  npx husky add .husky/commit-msg "npx --no -- commitlint --edit $1"
  ```

  ![image-20240207142542813](https://cdn.jsdelivr.net/gh/LetengZzz/img@main/image-20240207142542813.png)

