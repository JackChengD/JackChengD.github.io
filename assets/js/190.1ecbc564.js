(window.webpackJsonp=window.webpackJsonp||[]).push([[190],{543:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"仅仅反转字母"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#仅仅反转字母"}},[t._v("#")]),t._v(" 仅仅反转字母")]),t._v(" "),a("h2",{attrs:{id:"难度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#难度"}},[t._v("#")]),t._v(" 难度")]),t._v(" "),a("p",[t._v("简单")]),t._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),a("p",[t._v("给你一个字符串 s ，根据下述规则反转字符串：")]),t._v(" "),a("p",[t._v("所有非英文字母保留在原有位置。"),a("br"),t._v("\n所有英文字母（小写或大写）位置反转。"),a("br"),t._v("\n返回反转后的 s 。")]),t._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),a("p",[t._v("示例 1：")]),t._v(" "),a("blockquote",[a("p",[t._v('输入：s = "ab-cd"'),a("br"),t._v('\n输出："dc-ba"')])]),t._v(" "),a("p",[t._v("示例 2：")]),t._v(" "),a("blockquote",[a("p",[t._v('输入：s = "ab-cd"'),a("br"),t._v('\n输出："dc-ba"')])]),t._v(" "),a("p",[t._v("示例 3：")]),t._v(" "),a("blockquote",[a("p",[t._v('输入：s = "Test1ng-Leet=code-Q!"'),a("br"),t._v('\n输出："Qedo1ct-eeLg=ntse-T!"')])]),t._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),a("p",[t._v("1、找到左边需要交换的元素"),a("br"),t._v("\n2、找到右边需要交换的元素"),a("br"),t._v("\n3、交换即可")]),t._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("reverseOnlyLetters")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("s")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("length "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" reg "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token regex"}},[a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token regex-source language-regex"}},[t._v("^[a-zA-Z]+$")]),a("span",{pre:!0,attrs:{class:"token regex-delimiter"}},[t._v("/")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" arr "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" s"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("split")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("while")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" right "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("reg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("test")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("left "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">=")]),t._v(" right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("break")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("right"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("left"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n        left"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n        right"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("--")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" arr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("join")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("''")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h2",{attrs:{id:"题源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题源"}},[t._v("#")]),t._v(" 题源")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/reverse-only-letters/",target:"_blank",rel:"noopener noreferrer"}},[t._v("917. 仅仅反转字母"),a("OutboundLink")],1)])])}),[],!1,null,null,null);s.default=r.exports}}]);