(window.webpackJsonp=window.webpackJsonp||[]).push([[186],{621:function(n,a,s){"use strict";s.r(a);var e=s(23),t=Object(e.a)({},(function(){var n=this,a=n.$createElement,s=n._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[s("h1",{attrs:{id:"mock-js"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-js"}},[n._v("#")]),n._v(" mock.js")]),n._v(" "),s("p",[n._v("语法规范:")]),n._v(" "),s("p",[n._v("Mock.js 的语法规范包括两部分：")]),n._v(" "),s("ul",[s("li",[n._v("数据模板定义规范（Data Template Definition，DTD）")]),n._v(" "),s("li",[n._v("数据占位符定义规范（Data Placeholder Definition，DPD）")])]),n._v(" "),s("h3",{attrs:{id:"数据模板定义规范-dtd"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据模板定义规范-dtd"}},[n._v("#")]),n._v(" 数据模板定义规范 DTD")]),n._v(" "),s("p",[n._v("数据模板中的每个属性由 3 部分构成：属性名、生成规则、属性值")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("// 属性名   name\n\n// 生成规则 rule\n\n// 属性值   value\n\n'name|rule': value\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br")])]),s("ul",[s("li",[n._v("属性名 和 生成规则 之间用竖线 | 分隔。")]),n._v(" "),s("li",[n._v("生成规则 是可选的。")]),n._v(" "),s("li",[n._v("生成规则 有 7 种格式 .\n"),s("ul",[s("li",[n._v("'name|min-max': value")]),n._v(" "),s("li",[n._v("'name|count': value")]),n._v(" "),s("li",[n._v("'name|min-max.dmin-dmax': value")]),n._v(" "),s("li",[n._v("'name|min-max.dcount': value")]),n._v(" "),s("li",[n._v("'name|count.dmin-dmax': value")]),n._v(" "),s("li",[n._v("'name|count.dcount': value")]),n._v(" "),s("li",[n._v("'name|+step': value")])])]),n._v(" "),s("li",[n._v("生成规则 的 含义 需要依赖 属性值的类型 才能确定")]),n._v(" "),s("li",[n._v("属性值 中可以含有 @占位符。")]),n._v(" "),s("li",[n._v("属性值 还指定了最终值的初始值和类型。\n生成规则和示例：")])]),n._v(" "),s("ol",[s("li",[n._v("属性值是字符串 String\n'name|min-max': string")])]),n._v(" "),s("p",[n._v("通过重复 string 生成一个字符串，重复次数大于等于 min，小于等于 max。")]),n._v(" "),s("p",[n._v("'name|count': string")]),n._v(" "),s("p",[n._v("通过重复 string 生成一个字符串，重复次数等于 count。")]),n._v(" "),s("ol",{attrs:{start:"2"}},[s("li",[n._v("属性值是数字 Number\n'name|+1': number")])]),n._v(" "),s("p",[n._v("属性值自动加 1，初始值为 number。")]),n._v(" "),s("p",[n._v("'name|min-max': number")]),n._v(" "),s("p",[n._v("生成一个大于等于 min、小于等于 max 的整数，属性值 number 只是用来确定类型。")]),n._v(" "),s("p",[n._v("'name|min-max.dmin-dmax': number")]),n._v(" "),s("p",[n._v("生成一个浮点数，整数部分大于等于 min、小于等于 max，小数部分保留 dmin 到 dmax 位。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v("Mock.mock({\n    'number1|1-100.1-10': 1,\n    'number2|123.1-10': 1,\n    'number3|123.3': 1,\n    'number4|123.10': 1.123\n})\n// =>\n{\n    \"number1\": 12.92,\n    \"number2\": 123.51,\n    \"number3\": 123.777,\n    \"number4\": 123.1231091814\n}\n")])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br")])]),s("ol",{attrs:{start:"3"}},[s("li",[n._v("属性值是布尔型 Boolean\n'name|1': boolean")])]),n._v(" "),s("p",[n._v("随机生成一个布尔值，值为 true 的概率是 1/2，值为 false 的概率同样是 1/2。")]),n._v(" "),s("p",[n._v("'name|min-max': value")]),n._v(" "),s("p",[n._v("随机生成一个布尔值，值为 value 的概率是 min / (min + max)，值为 !value 的概率是 max / (min + max)。")]),n._v(" "),s("ol",{attrs:{start:"4"}},[s("li",[n._v("属性值是对象 Object\n'name|count': object")])]),n._v(" "),s("p",[n._v("从属性值 object 中随机选取 count 个属性。")]),n._v(" "),s("p",[n._v("'name|min-max': object")]),n._v(" "),s("p",[n._v("从属性值 object 中随机选取 min 到 max 个属性。")]),n._v(" "),s("ol",{attrs:{start:"5"}},[s("li",[n._v("属性值是数组 Array\n'name|1': array")])]),n._v(" "),s("p",[n._v("从属性值 array 中随机选取 1 个元素，作为最终值。")]),n._v(" "),s("p",[n._v("'name|+1': array")]),n._v(" "),s("p",[n._v("从属性值 array 中顺序选取 1 个元素，作为最终值。")]),n._v(" "),s("p",[n._v("'name|min-max': array")]),n._v(" "),s("p",[n._v("通过重复属性值 array 生成一个新数组，重复次数大于等于 min，小于等于 max。")]),n._v(" "),s("p",[n._v("'name|count': array")]),n._v(" "),s("p",[n._v("通过重复属性值 array 生成一个新数组，重复次数为 count。")]),n._v(" "),s("ol",{attrs:{start:"6"}},[s("li",[n._v("属性值是函数 Function\n'name': function")])]),n._v(" "),s("p",[n._v("执行函数 function，取其返回值作为最终的属性值，函数的上下文为属性 'name' 所在的对象。")]),n._v(" "),s("ol",{attrs:{start:"7"}},[s("li",[n._v("属性值是正则表达式 RegExp\n'name': regexp")])]),n._v(" "),s("p",[n._v("根据正则表达式 regexp 反向生成可以匹配它的字符串。用于生成自定义格式的字符串。")]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('Mock.mock({\n    \'regexp1\': /[a-z][A-Z][0-9]/,\n    \'regexp2\': /\\w\\W\\s\\S\\d\\D/,\n    \'regexp3\': /\\d{5,10}/\n})\n// =>\n{\n    "regexp1": "pJ7",\n    "regexp2": "F)\\fp1G",\n    "regexp3": "561659409"\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br")])]),s("p",[n._v("数据占位符定义规范 DPD\n占位符 只是在属性值字符串中占个位置，并不出现在最终的属性值中。")]),n._v(" "),s("p",[n._v("占位符 的格式为：")]),n._v(" "),s("p",[n._v("@占位符\n@占位符(参数 [, 参数])\n注意：")]),n._v(" "),s("ul",[s("li",[n._v("用 @ 来标识其后的字符串是 占位符。")]),n._v(" "),s("li",[n._v("占位符 引用的是 Mock.Random 中的方法。")]),n._v(" "),s("li",[n._v("通过 Mock.Random.extend() 来扩展自定义占位符。")]),n._v(" "),s("li",[n._v("占位符 也可以引用 数据模板 中的属性。")]),n._v(" "),s("li",[n._v("占位符 会优先引用 数据模板 中的属性。")]),n._v(" "),s("li",[n._v("占位符 支持 相对路径 和 绝对路径。")])]),n._v(" "),s("div",{staticClass:"language- line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[n._v('Mock.mock({\n    name: {\n        first: \'@FIRST\',\n        middle: \'@FIRST\',\n        last: \'@LAST\',\n        full: \'@first @middle @last\'\n    }\n})\n// =>\n{\n    "name": {\n        "first": "Charles",\n        "middle": "Brenda",\n        "last": "Lopez",\n        "full": "Charles Brenda Lopez"\n    }\n}\n')])]),n._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[n._v("1")]),s("br"),s("span",{staticClass:"line-number"},[n._v("2")]),s("br"),s("span",{staticClass:"line-number"},[n._v("3")]),s("br"),s("span",{staticClass:"line-number"},[n._v("4")]),s("br"),s("span",{staticClass:"line-number"},[n._v("5")]),s("br"),s("span",{staticClass:"line-number"},[n._v("6")]),s("br"),s("span",{staticClass:"line-number"},[n._v("7")]),s("br"),s("span",{staticClass:"line-number"},[n._v("8")]),s("br"),s("span",{staticClass:"line-number"},[n._v("9")]),s("br"),s("span",{staticClass:"line-number"},[n._v("10")]),s("br"),s("span",{staticClass:"line-number"},[n._v("11")]),s("br"),s("span",{staticClass:"line-number"},[n._v("12")]),s("br"),s("span",{staticClass:"line-number"},[n._v("13")]),s("br"),s("span",{staticClass:"line-number"},[n._v("14")]),s("br"),s("span",{staticClass:"line-number"},[n._v("15")]),s("br"),s("span",{staticClass:"line-number"},[n._v("16")]),s("br"),s("span",{staticClass:"line-number"},[n._v("17")]),s("br")])]),s("h3",{attrs:{id:"mock-mock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mock-mock"}},[n._v("#")]),n._v(" Mock.mock()")]),n._v(" "),s("p",[n._v("Mock.mock( template )")]),n._v(" "),s("p",[n._v("根据数据模板生成模拟数据。")]),n._v(" "),s("p",[n._v("Mock.mock( rurl, template )")]),n._v(" "),s("p",[n._v("记录数据模板。当拦截到匹配 rurl 的 Ajax 请求时，将根据数据模板 template 生成模拟数据，并作为响应数据返回。")])])}),[],!1,null,null,null);a.default=t.exports}}]);