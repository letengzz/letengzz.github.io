# CSS 变量

复杂的网站都会有大量的CSS代码，通常也会有许多重复的值。

在构建大型站点时，通常会面对可维护性的挑战。在这些网页中，所使用的CSS的数量非常庞大的，并且在许多场合大量的信息会重复使用。例如，在网页中维护一个配色方案时，不论是调整某个颜色或完全修改整个配色，都会成为一个复杂的问题，不容出错，而单纯查找替换是远远不够的。

CSS使用变量的好处：

- 减少样式代码的重复性
- 增加样式代码的扩展性
- 提高样式代码的灵活性
- 增多一种CSS与JS的通讯方式

## 声明变量

CSS变量又称为CSS自定义属性，声明一个自定义属性，属性名需要在变量名称前加两个中横线`--`前缀，属性值则可以是任何有效的CSS值如color，margin，width和font-size。和其他属性一样，自定义属性也是写在规则集之内的：

```css
body{
    --bg-color: #000000;
    --color: #FF6600;
}
```

规则集所指定的选择器定义了自定义属性的可见作用域。通常的最佳实践是定义在根伪类 `:root` 下，这样就可以在HTML文档的任何地方访问到它。

在 `:root` 中声明相当于全局属性，`:root`选择器是一个伪类，匹配文档的根元素，所有主流浏览器均支持 `:root`

```css
// 局部声明
body {
    --foo: #ededed;
    --bar: #f7f7f7;
}

// 全局声明
:root{
    --foo: #ededed;
    --bar: #f7f7f7;
}
```

## 使用变量

使用CSS内置函数 `var()`来读取变量。

`var()` 函数用于插入自定义的属性值，如果一个属性值在多处被使用，想要在p、h1、h2中样式使用 `--bg-color`可以使用 `var()`函数

```css
/* 不使用CSS变量 */
h1{
    background-color: red;
}
.content{
    background-color: red;
}

/* 使用CSS变量 */
:root {
    --bg-color: red;
}
h1 {
    background-color: var(--bg-color);
}
.content {
    background-color: var(--bg-color);
}
```

## 命名规则

CSS变量允许数字开头：

```css
:root {
    --1: red;
}
div {
    background-color: var(--1);
}
```

但是CSS变量有自己的规则：

- 不能包含`$`、`[`、`^`、`(`、`%`等字符

- 普通字符局限在只要是数字[0-9]、字母[a-z，A-Z]、下划线`_`和短横线 `-`这些组合

- 声明变量对大小写敏感 (colors和 Colors表示两个不同的变量)

- 无论是变量的定义和使用只能在声明块`{}`里面

- 变量值只能用作属性值，不能用作属性名

  ```css
  .foo {
    --side: margin-top;
    /* 无效 */
    var(--side): 20px;
  }
  ```





