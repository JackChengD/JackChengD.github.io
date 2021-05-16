(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{397:function(t,a,s){"use strict";s.r(a);var n=s(45),r=Object(n.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"二叉搜索树的最近公共祖先"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#二叉搜索树的最近公共祖先"}},[t._v("#")]),t._v(" 二叉搜索树的最近公共祖先")]),t._v(" "),s("h2",{attrs:{id:"难度"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#难度"}},[t._v("#")]),t._v(" 难度")]),t._v(" "),s("p",[t._v("简单")]),t._v(" "),s("h2",{attrs:{id:"描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#描述"}},[t._v("#")]),t._v(" 描述")]),t._v(" "),s("p",[t._v("给定一个二叉搜索树, 找到该树中两个指定节点的最近公共祖先。"),s("br"),t._v("\n百度百科中最近公共祖先的定义为：“对于有根树 T 的两个结点 p、q，最近公共祖先表示为一个结点 x，满足 x 是 p、q 的祖先且 x 的深度尽可能大（一个节点也可以是它自己的祖先）。”")]),t._v(" "),s("h2",{attrs:{id:"示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),s("p",[t._v("示例 1：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 8\n输出: 6\n解释: 节点 2 和节点 8 的最近公共祖先是 6。")])]),t._v(" "),s("p",[t._v("示例 2：")]),t._v(" "),s("blockquote",[s("p",[t._v("输入: root = [6,2,8,0,4,7,9,null,null,3,5], p = 2, q = 4\n输出: 2\n解释: 节点 2 和节点 4 的最近公共祖先是 2, 因为根据定义最近公共祖先节点可以为节点本身。")])]),t._v(" "),s("h2",{attrs:{id:"思路"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#思路"}},[t._v("#")]),t._v(" 思路")]),t._v(" "),s("p",[t._v("因为是二叉搜索树，所以根会大于左子树，小于右子树。"),s("br"),t._v("\n利用这个特性做判断，如果节点都大于root，那就去右边找；如果节点都小于root，那就去左边找，一小一大了就说明是最近公共祖先节点了。")]),t._v(" "),s("h2",{attrs:{id:"实现"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),s("div",{staticClass:"language-js extra-class"},[s("pre",{pre:!0,attrs:{class:"language-js"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("lowestCommonAncestor")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("right"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("val"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("lowestCommonAncestor")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("left"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" q"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" root"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),s("h2",{attrs:{id:"题源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#题源"}},[t._v("#")]),t._v(" 题源")]),t._v(" "),s("p",[s("a",{attrs:{href:"https://leetcode-cn.com/problems/lowest-common-ancestor-of-a-binary-search-tree/",target:"_blank",rel:"noopener noreferrer"}},[t._v("235. 二叉搜索树的最近公共祖先"),s("OutboundLink")],1)])])}),[],!1,null,null,null);a.default=r.exports}}]);