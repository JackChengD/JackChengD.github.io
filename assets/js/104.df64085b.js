(window.webpackJsonp=window.webpackJsonp||[]).push([[104],{459:function(a,t,s){"use strict";s.r(t);var r=s(45),n=Object(r.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"求根节点到叶节点数字之和"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#求根节点到叶节点数字之和"}},[a._v("#")]),a._v(" 求根节点到叶节点数字之和")]),a._v(" "),s("h2",{attrs:{id:"难度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#难度"}},[a._v("#")]),a._v(" 难度")]),a._v(" "),s("p",[a._v("简单")]),a._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[a._v("#")]),a._v(" 描述")]),a._v(" "),s("p",[a._v("给你两个字符串 a 和 b，请返回 这两个字符串中 最长的特殊序列  的长度。如果不存在，则返回 -1 。")]),a._v(" "),s("p",[a._v("「最长特殊序列」 定义如下：该序列为 某字符串独有的最长子序列（即不能是其他字符串的子序列） 。")]),a._v(" "),s("p",[a._v("字符串 s 的子序列是在从 s 中删除任意数量的字符后可以获得的字符串。")]),a._v(" "),s("p",[a._v('例如，"abc" 是 "aebdc" 的子序列，因为删除 "aebdc" 中斜体加粗的字符可以得到 "abc" 。 "aebdc" 的子序列还包括 "aebdc" 、 "aeb" 和 "" (空字符串)。')]),a._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[a._v("#")]),a._v(" 示例")]),a._v(" "),s("p",[a._v("示例 1：")]),a._v(" "),s("blockquote",[s("p",[a._v('输入: a = "aba", b = "cdc"'),s("br"),a._v("\n输出: 3"),s("br"),a._v('\n解释: 最长特殊序列可为 "aba" (或 "cdc")，两者均为自身的子序列且不是对方的子序列。')])]),a._v(" "),s("p",[a._v("示例 2：")]),a._v(" "),s("blockquote",[s("p",[a._v('输入：a = "aaa", b = "bbb"'),s("br"),a._v("\n输出：3"),s("br"),a._v('\n解释: 最长特殊序列是 "aaa" 和 "bbb" 。')])]),a._v(" "),s("p",[a._v("示例 3：")]),a._v(" "),s("blockquote",[s("p",[a._v('输入：a = "aaa", b = "aaa"'),s("br"),a._v("\n输出：-1"),s("br"),a._v("\n解释: 字符串 a 的每个子序列也是字符串 b 的每个子序列。同样，字符串 b 的每个子序列也是字符串 a 的子序列。")])]),a._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[a._v("#")]),a._v(" 思路")]),a._v(" "),s("p",[a._v("某字符串独有的最长子序列（即不能是其他字符串的子序列）,如果两个字符不等就取大的字符串长度，相等则为-1；")]),a._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[a._v("#")]),a._v(" 实现")]),a._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("var")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[a._v("findLUSlength")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("function")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("return")]),a._v(" a "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("!==")]),a._v(" b "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("?")]),a._v(" Math"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("max")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("a"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" b"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("length"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v("\n")])])]),s("h2",{attrs:{id:"题源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题源"}},[a._v("#")]),a._v(" 题源")]),a._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/longest-uncommon-subsequence-i/",target:"_blank",rel:"noopener noreferrer"}},[a._v("521. 最长特殊序列 Ⅰ"),s("OutboundLink")],1)])])}),[],!1,null,null,null);t.default=n.exports}}]);