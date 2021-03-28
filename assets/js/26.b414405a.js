(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{381:function(t,s,a){"use strict";a.r(s);var n=a(45),r=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"重构手法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#重构手法"}},[t._v("#")]),t._v(" 重构手法")]),t._v(" "),a("h2",{attrs:{id:"提炼函数-extract-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#提炼函数-extract-function"}},[t._v("#")]),t._v(" 提炼函数(Extract Function)")]),t._v(" "),a("p",[t._v("曾用名：提炼函数"),a("br"),t._v("\n反向重构：内联函数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printOwing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("invoice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printBanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outstanding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateOutstanding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// print details")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("name：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("invoice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customer"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("amount：")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("outstanding"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printOwing")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("invoice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printBanner")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" outstanding "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("calculateOutstanding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("outstanding"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("printDetails")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("outstanding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("name:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("invoice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("customer"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      console"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("log")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("amount:")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("outstanding"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token template-punctuation string"}},[t._v("`")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("1、函数过长；"),a("br"),t._v("\n2、代码类似；"),a("br"),t._v("\n3、明确代码用意。")]),t._v(" "),a("h3",{attrs:{id:"做法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("1、创建一个新函数（以它“做什么”来命名，而不是以它“怎么做”命名）；"),a("br"),t._v("\n2、将待提炼的代码从源函数复制到新建的目标函数中；"),a("br"),t._v("\n3、仔细检查提炼出的代码，看看其中是否引用了作用域限于源函数、在提炼出的新函数中访问不到的变量。若是，以参数的形式将它们传递给新函数；"),a("br"),t._v("\n4、所有变量都处理完之后，编译；"),a("br"),t._v("\n5、在源函数中，将被提炼代码段替换为对目标函数的调用；"),a("br"),t._v("\n6、测试；"),a("br"),t._v("\n7、查看其他代码是否有与被提炼的代码段相同或相似之处。如果有，考虑使用"),a("a",{attrs:{href:"#%E4%BB%A5%E5%87%BD%E6%95%B0%E8%B0%83%E7%94%A8%E5%8F%96%E4%BB%A3%E5%86%85%E8%81%94%E4%BB%A3%E7%A0%81-replace-inline-code-with-function-call"}},[t._v("以函数调用取代内联代码")]),t._v("。")]),t._v(" "),a("h2",{attrs:{id:"以函数调用取代内联代码-replace-inline-code-with-function-call"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#以函数调用取代内联代码-replace-inline-code-with-function-call"}},[t._v("#")]),t._v(" 以函数调用取代内联代码(Replace Inline Code with Function Call)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" appliesToMass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("false")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" s "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("of")]),t._v(" states"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("s "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("===")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" appliesToMass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  appliesToMass "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" status"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("includes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"MA"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机-2"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("1、善用函数可以将相关的行为打包起来；"),a("br"),t._v("\n2、配合一些库函数使用，会使本手法效果更佳。")]),t._v(" "),a("h3",{attrs:{id:"做法-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法-2"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("1、将内联代码替代为对一个既有函数的调用；"),a("br"),t._v("\n2、测试。")]),t._v(" "),a("h2",{attrs:{id:"查询取代临时变量-replace-temp-with-query"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查询取代临时变量-replace-temp-with-query"}},[t._v("#")]),t._v(" 查询取代临时变量(Replace Temp with Query)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_itemPrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("price")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  \n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("basePrice")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_quantity "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("_itemPrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("discountFactor")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("var")]),t._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.98")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" discountFactor "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("-=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0.03")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" discountFactor"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机-3"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("1、避免在多个函数中重复编写计算逻辑；"),a("br"),t._v("\n2、处理某些类型的临时变量；那些只被计算一次且之后不再被修改的变量。")]),t._v(" "),a("h3",{attrs:{id:"做法-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法-3"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("1、检查变量在使用前是否已经完全计算完毕，检查计算它的那段代码是否每次都能得到一样的值；"),a("br"),t._v("\n2、如果变量目前不是只读的，但是可以改造成只读变量，那就先改造它；"),a("br"),t._v("\n3、测试；"),a("br"),t._v("\n4、将为变量赋值的代码段提炼成函数；")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果变量和函数不能使用同样的名字，那么先为函数取个临时的名字。"),a("br"),t._v("\n确保待提炼函数没有副作用。若有，先应用"),a("a",{attrs:{href:"#%E5%B0%86%E6%9F%A5%E8%AF%A2%E5%87%BD%E6%95%B0%E5%92%8C%E4%BF%AE%E6%94%B9%E5%87%BD%E6%95%B0%E5%88%86%E7%A6%BBseparate-query-from-modifier"}},[t._v("将查询函数和修改函数分离")]),t._v("手法隔离副作用。")])]),t._v(" "),a("p",[t._v("5、测试；"),a("br"),t._v("\n6、应用"),a("a",{attrs:{href:"#%E5%86%85%E8%81%94%E5%8F%98%E9%87%8Finline-variable"}},[t._v("内联变量")]),t._v("手法移除临时变量。")]),t._v(" "),a("h2",{attrs:{id:"将查询函数和修改函数分离-separate-query-from-modifier"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#将查询函数和修改函数分离-separate-query-from-modifier"}},[t._v("#")]),t._v(" 将查询函数和修改函数分离(Separate Query from Modifier)")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTotalOutstandingAndSendBill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" result "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invoices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" each"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" result"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("totalOutstanding")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("invoices"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("reduce")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" each")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" each"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("amount "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" total"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sendBill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    emailGateway"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("send")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("formatBill")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("customer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机-4"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("“既有返回值又有副作用”的函数，试着将查询动作从修改动作中分离出来。")]),t._v(" "),a("h3",{attrs:{id:"做法-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法-4"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("1、复制整个函数，将其作为一个查询来命名；")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果想不出好名字，可以看看函数返回的是什么。查询的结果会被填入一个变量，这个变量的名字应该能对函数如何命名有所启发。")])]),t._v(" "),a("p",[t._v("2、新建的查询函数中去掉所有造成副作用的语句；"),a("br"),t._v("\n3、执行静态见检查；"),a("br"),t._v("\n4、查找所有调用原函数的地方。如果调用处用到了该函数的返回值，就将其改为调用新建的查询函数，并在下面马上再调用一次原函数。每次修改之后都要测试；"),a("br"),t._v("\n5、从原函数中去掉返回值；"),a("br"),t._v("\n6、测试。"),a("br"),t._v("\n完成重构之后，查询函数与原函数之间常会有重复代码，可以做必要的清理。")]),t._v(" "),a("h2",{attrs:{id:"内联变量-inline-variable"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内联变量-inline-variable"}},[t._v("#")]),t._v(" 内联变量(Inline Variable)")]),t._v(" "),a("p",[t._v("曾用名：内联临时变量"),a("br"),t._v("\n反向重构：提炼变量")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("let")]),t._v(" basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" anOrder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" anOrder"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("basePrice "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1000")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机-5"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("1、变量名字并不比表达式本身更具有表现力；"),a("br"),t._v("\n2、变量可能会妨碍重构附近的代码。")]),t._v(" "),a("h3",{attrs:{id:"做法-5"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法-5"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("1、检查确认变量赋值语句的右侧表达式没有副作用；"),a("br"),t._v("\n2、如果变量没有被声明为不可修改，先将其变为不可修改，并执行测试；")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("这是为了确保该变量只被赋值一次。")])]),t._v(" "),a("p",[t._v("3、找到第一处使用该变量的地方，将其替换为直接使用赋值语句的右侧表达式；"),a("br"),t._v("\n4、测试；"),a("br"),t._v("\n5、重复前面两部，逐一替换其他使用该变量的地方；"),a("br"),t._v("\n6、删除该变量的声明点和赋值语句；"),a("br"),t._v("\n7、测试。")]),t._v(" "),a("h2",{attrs:{id:"改变函数声明-change-function-declaration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#改变函数声明-change-function-declaration"}},[t._v("#")]),t._v(" 改变函数声明(Change Function Declaration)")]),t._v(" "),a("p",[t._v("别名：函数改名、修改签名"),a("br"),t._v("\n曾用名：函数改名、添加参数、移除参数")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("=>")]),t._v(" "),a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[t._v("  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("circumference")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("radius")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("...")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h3",{attrs:{id:"动机-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动机-6"}},[t._v("#")]),t._v(" 动机")]),t._v(" "),a("p",[t._v("1、有更好的函数名字；")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("一个好名字能让我们一眼看出函数的用途，而不必查看其实现代码。")])]),t._v(" "),a("p",[t._v("2、改变参数列表，使函数的应用范围增加。")]),t._v(" "),a("h3",{attrs:{id:"做法-6"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#做法-6"}},[t._v("#")]),t._v(" 做法")]),t._v(" "),a("p",[t._v("简单的做法："),a("br"),t._v("\n1、如果想要移除一个参数，需要先确定函数体内没有使用该参数；"),a("br"),t._v("\n2、修改函数声明，使其成为你期望的状态；"),a("br"),t._v("\n3、找出所有使用旧的函数声明的地方，将它们改为使用新得函数声明；"),a("br"),t._v("\n4、测试。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("最好能把大的修改拆成小的步骤，所以如果你既想修改函数名，又想添加参数，最好分成两步来做。（并且，不论何时，如果遇到了麻烦，请撤销修改，并改用迁移式做法，）")])]),t._v(" "),a("p",[t._v("迁移式做法："),a("br"),t._v("\n1、如果有必要的话，先对函数内部加以重构，使后面的提炼步骤易于开展；"),a("br"),t._v("\n2、使用"),a("a",{attrs:{href:"#%E6%8F%90%E7%82%BC%E5%87%BD%E6%95%B0extract-function"}},[t._v("提炼函数")]),t._v("将函数提炼成一个新函数。")]),t._v(" "),a("div",{staticClass:"custom-block tip"},[a("p",{staticClass:"custom-block-title"},[t._v("TIP")]),t._v(" "),a("p",[t._v("如果你打算沿用旧函数的名字，可以先给新函数起一个易于搜索 的临时名字。")])]),t._v(" "),a("p",[t._v("3、如果提炼出的函数需要新增参数，用前面的简单做法添加即可；"),a("br"),t._v("\n4、测试；"),a("br"),t._v("\n5、对旧函数使用"),a("a",{attrs:{href:"#%E5%86%85%E8%81%94%E5%87%BD%E6%95%B0inline-function"}},[t._v("内联函数")]),t._v("；"),a("br"),t._v("\n6、如果新函数用了临时的名字，再次使用"),a("a",{attrs:{href:"#%E6%94%B9%E5%8F%98%E5%87%BD%E6%95%B0%E5%A3%B0%E6%98%8Echange-function-declaration"}},[t._v("改变函数声明")]),t._v("将其改回原来的名字；"),a("br"),t._v("\n7、测试。")]),t._v(" "),a("h2",{attrs:{id:"内联函数-inline-function"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#内联函数-inline-function"}},[t._v("#")]),t._v(" 内联函数(Inline Function)")])])}),[],!1,null,null,null);s.default=r.exports}}]);