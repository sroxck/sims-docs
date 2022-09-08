(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{566:function(s,a,t){"use strict";t.r(a);var n=t(23),e=Object(n.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"内部类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#内部类"}},[s._v("#")]),s._v(" 内部类")]),s._v(" "),t("p",[s._v("一个类内部包含另一个类")]),s._v(" "),t("h2",{attrs:{id:"成员内部类的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#成员内部类的定义"}},[s._v("#")]),s._v(" 成员内部类的定义")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Outer")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//外部类")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Inner")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//内部类")]),s._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br")])]),t("p",[s._v("注意: 内部类用外部类,可以随意访问,外用内,需要借助内部类对象")]),s._v(" "),t("p",[s._v("如何使用成员内部类? 两种方式")]),s._v(" "),t("ol",[t("li",[s._v("间接方法:在外部类的方法中,使用内部类,然后main调用外部类的方法")]),s._v(" "),t("li",[s._v("直接方法:外部类名称.内部类名称 = new 外部类名称().new 内部类名称();")])]),s._v(" "),t("blockquote",[t("p",[s._v("内部类访问外部类的变量 外部类名称.this.变量名")])]),s._v(" "),t("h2",{attrs:{id:"局部内部类的定义"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部内部类的定义"}},[s._v("#")]),s._v(" 局部内部类的定义")]),s._v(" "),t("p",[s._v("如果一个类是定义在一个方法内部的.name这就是一个局部内部类\n局部: 只有当前所属的方法才能使用它,出了这个方法外面就不能用了")]),s._v(" "),t("p",[s._v("定义格式:")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("修饰符 "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" 外部类名称 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    修饰符 返回值类型 外部类方法名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("参数列表"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" 局部内部类名称 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("//.....")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n\n类的权限修饰符"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v("\n        \n定义一个类的时候"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("权限修饰符规则"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v(" 外部类"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v(" 成员内部类"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("protected")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("/")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("private")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v(" 局部内部类"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(":")]),s._v(" 什么都不能写"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("和默认"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("default")]),s._v("不一样\n\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br"),t("span",{staticClass:"line-number"},[s._v("12")]),t("br"),t("span",{staticClass:"line-number"},[s._v("13")]),t("br"),t("span",{staticClass:"line-number"},[s._v("14")]),t("br"),t("span",{staticClass:"line-number"},[s._v("15")]),t("br")])]),t("h2",{attrs:{id:"局部内部类的final问题"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#局部内部类的final问题"}},[s._v("#")]),s._v(" 局部内部类的final问题")]),s._v(" "),t("p",[s._v("局部内部类,如果希望访问所在方法的局部变量,那么这个局部变量必须是"),t("code",[s._v("有效final的")]),s._v("\n局部内部类,如果访问所在方法的局部变量,能保证变量不会被改变,是可以不写final的")]),s._v(" "),t("p",[s._v("原因:")]),s._v(" "),t("ol",[t("li",[s._v("new出来的对象在堆内存中")]),s._v(" "),t("li",[s._v("局部变量是跟着方法走的,在栈内存中")]),s._v(" "),t("li",[s._v("方法运行结束之后.立刻出栈,局部变量会立刻消失")]),s._v(" "),t("li",[s._v("new出来的对象,会在堆当中持续存在,直到垃圾回收")])]),s._v(" "),t("h1",{attrs:{id:"匿名内部类-重点"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名内部类-重点"}},[s._v("#")]),s._v(" 匿名内部类(重点)")]),s._v(" "),t("blockquote",[t("p",[s._v("如果接口的实现类,或者父类的子类,只需要使用唯一的一次,那么这种情况下,就可以省略掉该类的定义,而改为使用匿名内部类")])]),s._v(" "),t("h2",{attrs:{id:"匿名内部类的定义格式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名内部类的定义格式"}},[s._v("#")]),s._v(" 匿名内部类的定义格式")]),s._v(" "),t("div",{staticClass:"language-java line-numbers-mode"},[t("pre",{pre:!0,attrs:{class:"language-java"}},[t("code",[s._v("接口名称 对象名 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" 接口名称"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 覆盖重写,接口中所有抽象方法")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 使用匿名内部类")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyInterFace")]),s._v(" obj "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("new")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("MyInterFace")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token annotation punctuation"}},[s._v("@Override")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("public")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("void")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("method")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("// 匿名内部类实现了方法")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),t("div",{staticClass:"line-numbers-wrapper"},[t("span",{staticClass:"line-number"},[s._v("1")]),t("br"),t("span",{staticClass:"line-number"},[s._v("2")]),t("br"),t("span",{staticClass:"line-number"},[s._v("3")]),t("br"),t("span",{staticClass:"line-number"},[s._v("4")]),t("br"),t("span",{staticClass:"line-number"},[s._v("5")]),t("br"),t("span",{staticClass:"line-number"},[s._v("6")]),t("br"),t("span",{staticClass:"line-number"},[s._v("7")]),t("br"),t("span",{staticClass:"line-number"},[s._v("8")]),t("br"),t("span",{staticClass:"line-number"},[s._v("9")]),t("br"),t("span",{staticClass:"line-number"},[s._v("10")]),t("br"),t("span",{staticClass:"line-number"},[s._v("11")]),t("br")])]),t("h2",{attrs:{id:"匿名内部类的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#匿名内部类的注意事项"}},[s._v("#")]),s._v(" 匿名内部类的注意事项")]),s._v(" "),t("p",[s._v('对格式"new 接口名称(){...}"进行解析:')]),s._v(" "),t("ol",[t("li",[s._v("new 代表创建对象的动作")]),s._v(" "),t("li",[s._v("接口名称就是匿名内部类需要实现哪个接口")]),s._v(" "),t("li",[s._v("{...}这才是匿名内部类的内容")])]),s._v(" "),t("p",[s._v("另外注意内容")]),s._v(" "),t("ol",[t("li",[s._v("匿名内部类在创建对象的时候,只能使用唯一的一次")])]),s._v(" "),t("blockquote",[t("p",[s._v("如果希望多次创建对象,而且类的内容一样的话,那么就必须单独定义实现类")])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[s._v("匿名对象是在调用方法的时候,只能调用唯一一次,如果希望同一个对象调用多个方法,必须给匿名对象起名字")]),s._v(" "),t("li",[s._v("匿名内部类是省略了实现类或者是子类,但是匿名对象是省略了对象名称\n"),t("code",[s._v("强调:")]),s._v(" 匿名内部类和匿名对象不是一回事!")])])])}),[],!1,null,null,null);a.default=e.exports}}]);