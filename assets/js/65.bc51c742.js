(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{420:function(s,t,a){"use strict";a.r(t);var e=a(45),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"按键持续时间最长的键"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#按键持续时间最长的键"}},[s._v("#")]),s._v(" 按键持续时间最长的键")]),s._v(" "),a("h2",{attrs:{id:"难度"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#难度"}},[s._v("#")]),s._v(" 难度")]),s._v(" "),a("p",[s._v("简单")]),s._v(" "),a("h2",{attrs:{id:"描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[s._v("#")]),s._v(" 描述")]),s._v(" "),a("p",[s._v("LeetCode 设计了一款新式键盘，正在测试其可用性。测试人员将会点击一系列键（总计 n 个），每次一个。")]),s._v(" "),a("p",[s._v("给你一个长度为 n 的字符串 keysPressed ，其中 keysPressed[i] 表示测试序列中第 i 个被按下的键。releaseTimes 是一个升序排列的列表，其中 releaseTimes[i] 表示松开第 i 个键的时间。字符串和数组的 下标都从 0 开始 。第 0 个键在时间为 0 时被按下，接下来每个键都 恰好 在前一个键松开时被按下。")]),s._v(" "),a("p",[s._v("测试人员想要找出按键 持续时间最长 的键。第 i 次按键的持续时间为 releaseTimes[i] - releaseTimes[i - 1] ，第 0 次按键的持续时间为 releaseTimes[0] 。")]),s._v(" "),a("p",[s._v("注意，测试期间，同一个键可以在不同时刻被多次按下，而每次的持续时间都可能不同。")]),s._v(" "),a("p",[s._v("请返回按键 持续时间最长 的键，如果有多个这样的键，则返回 按字母顺序排列最大 的那个键。")]),s._v(" "),a("h2",{attrs:{id:"示例"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[s._v("#")]),s._v(" 示例")]),s._v(" "),a("p",[s._v("示例 1：")]),s._v(" "),a("blockquote",[a("p",[s._v('输入：releaseTimes = [9,29,49,50], keysPressed = "cbcd"'),a("br"),s._v('\n输出："c"'),a("br"),s._v("\n解释：按键顺序和持续时间如下："),a("br"),s._v("\n按下 'c' ，持续时间 9（时间 0 按下，时间 9 松开）"),a("br"),s._v("\n按下 'b' ，持续时间 29 - 9 = 20（松开上一个键的时间 9 按下，时间 29 松开）"),a("br"),s._v("\n按下 'c' ，持续时间 49 - 29 = 20（松开上一个键的时间 29 按下，时间 49 松开）"),a("br"),s._v("\n按下 'd' ，持续时间 50 - 49 = 1（松开上一个键的时间 49 按下，时间 50 松开）"),a("br"),s._v("\n按键持续时间最长的键是 'b' 和 'c'（第二次按下时），持续时间都是 20"),a("br"),s._v("\n'c' 按字母顺序排列比 'b' 大，所以答案是 'c'")])]),s._v(" "),a("p",[s._v("示例 2：")]),s._v(" "),a("blockquote",[a("p",[s._v('输入：releaseTimes = [12,23,36,46,62], keysPressed = "spuda"'),a("br"),s._v('\n输出："a"'),a("br"),s._v("\n解释：按键顺序和持续时间如下："),a("br"),s._v("\n按下 's' ，持续时间 12"),a("br"),s._v("\n按下 'p' ，持续时间 23 - 12 = 11"),a("br"),s._v("\n按下 'u' ，持续时间 36 - 23 = 13"),a("br"),s._v("\n按下 'd' ，持续时间 46 - 36 = 10"),a("br"),s._v("\n按下 'a' ，持续时间 62 - 46 = 16"),a("br"),s._v("\n按键持续时间最长的键是 'a' ，持续时间 16")])]),s._v(" "),a("h2",{attrs:{id:"思路"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[s._v("#")]),s._v(" 思路")]),s._v(" "),a("p",[s._v("1、遍历"),a("br"),s._v("\n2、做差判断")]),s._v(" "),a("h2",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[s._v("#")]),s._v(" 实现")]),s._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("var")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[s._v("slowestKey")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("function")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[s._v("releaseTimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" keysPressed")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keysPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" maxValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" releaseTimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v(" releaseTimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("length"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v(" i"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("++")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("let")]),s._v(" cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" releaseTimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" releaseTimes"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("1")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n       \n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" maxValue"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            maxValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" cur"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keysPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n         "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("cur "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("===")]),s._v(" maxValue "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" keysPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            result "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" keysPressed"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("i"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("h2",{attrs:{id:"题源"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#题源"}},[s._v("#")]),s._v(" 题源")]),s._v(" "),a("p",[a("a",{attrs:{href:"https://leetcode-cn.com/problems/slowest-key/",target:"_blank",rel:"noopener noreferrer"}},[s._v("1629. 按键持续时间最长的键"),a("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);