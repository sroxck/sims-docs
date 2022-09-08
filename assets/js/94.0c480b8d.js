(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{531:function(t,a,r){"use strict";r.r(a);var e=r(23),s=Object(e.a)({},(function(){var t=this,a=t.$createElement,r=t._self._c||a;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("h1",{attrs:{id:""}},[r("a",{staticClass:"header-anchor",attrs:{href:"#"}},[t._v("#")])]),t._v(" "),r("p",[t._v("java中所有字符串字面量都是String类的对象,就算没有new都是,所有双引号字符串都是\n在java中,字符串内容永不可变,所以字符串可以共享使用\n字符串是常量")]),t._v(" "),r("p",[t._v("字符串相当于是"),r("code",[t._v("char[]")]),t._v("字符数组,但是底层原理是"),r("code",[t._v("byte[]")]),t._v("字节数组")]),t._v(" "),r("p",[t._v("创建字符串的常见3+1种方式")]),t._v(" "),r("h2",{attrs:{id:"三种构造方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三种构造方法"}},[t._v("#")]),t._v(" 三种构造方法")]),t._v(" "),r("p",[t._v("public String(); 创建一个空白字符串,不包含任何内容\npublic String(char[] array); 根据字符数组的内容,来创建指定内容的字符串\npublic String(byte[] array); 根据字节数组的内容,来创建指定内容的字符串")]),t._v(" "),r("h2",{attrs:{id:"一种直接创建"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一种直接创建"}},[t._v("#")]),t._v(" 一种直接创建")]),t._v(" "),r("p",[t._v('"String" 即字面量方式,也照样是字符串类创建的字符串对象')]),t._v(" "),r("h2",{attrs:{id:"字符串的常量池"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串的常量池"}},[t._v("#")]),t._v(" 字符串的常量池")]),t._v(" "),r("p",[t._v("程序中直接写上的双引号字符串就在字符串常量池中")]),t._v(" "),r("p",[t._v("对于基本类型来说 == 是进行值的比较\n对于引用类型来说 == 是进行地址值的比较\n堆内存中有一个字符串常量池 (jdk1.7)")]),t._v(" "),r("h2",{attrs:{id:"字符串中的常用方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串中的常用方法"}},[t._v("#")]),t._v(" 字符串中的常用方法")]),t._v(" "),r("p",[t._v("== 是进行对象的地址值比较,如果确实需要字符串内容比较,可以使用两个方法")]),t._v(" "),r("h3",{attrs:{id:"字符串比较方法"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串比较方法"}},[t._v("#")]),t._v(" 字符串比较方法")]),t._v(" "),r("h4",{attrs:{id:"publi-boolean-equals-object-obj-字符串比较-参数可以是任何对象-只有参数是一个字符串并且内容相同才会是true-否则是false"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#publi-boolean-equals-object-obj-字符串比较-参数可以是任何对象-只有参数是一个字符串并且内容相同才会是true-否则是false"}},[t._v("#")]),t._v(" publi boolean equals(Object obj)字符串比较,参数可以是任何对象,只有参数是一个字符串并且内容相同才会是true,否则是false")]),t._v(" "),r("p",[t._v("::: 注意事项")]),t._v(" "),r("ol",[r("li",[t._v("任何对象都能用Object进行接收")]),t._v(" "),r("li",[t._v("equals方法具有对称性,a.equals(b)和b.equals(a)相同")]),t._v(" "),r("li",[t._v('如果比较双方一个常量一个变量,推荐把常量字符串写在前面\n推荐: "abc".equals(b)\n不推荐: b.equals("abc")\n原因:防止空指针异常')])]),t._v(" "),r("blockquote",[r("p",[t._v("调用方法之前 .方法之前的值是null 就会发生空指针异常\n:::")])]),t._v(" "),r("h4",{attrs:{id:"public-boolean-equalsignorecase-string-str-忽略大小写-进行字符串比较"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#public-boolean-equalsignorecase-string-str-忽略大小写-进行字符串比较"}},[t._v("#")]),t._v(" public boolean equalsIgnoreCase(String str): 忽略大小写,进行字符串比较")]),t._v(" "),r("h3",{attrs:{id:"获取长度-length"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获取长度-length"}},[t._v("#")]),t._v(" 获取长度 length()")]),t._v(" "),r("p",[t._v("public int length(); 获取字符串长度")]),t._v(" "),r("h3",{attrs:{id:"字符串拼接-concat-string-str"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串拼接-concat-string-str"}},[t._v("#")]),t._v(" 字符串拼接 concat(String str)")]),t._v(" "),r("p",[t._v("public String concat(String str); 将当前字符串和参数字符串拼接成返回值新字符串")]),t._v(" "),r("h3",{attrs:{id:"根据索引查找单个字符-charat-int-index"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根据索引查找单个字符-charat-int-index"}},[t._v("#")]),t._v(" 根据索引查找单个字符 charAt(int index)")]),t._v(" "),r("p",[t._v("public String charAt(int index); 获取指定索引位置的单个字符")]),t._v(" "),r("h3",{attrs:{id:"根据字符串查找索引-indexof-string-str"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#根据字符串查找索引-indexof-string-str"}},[t._v("#")]),t._v(" 根据字符串查找索引 indexOf(String str)")]),t._v(" "),r("p",[t._v("public String indexOf(String str); 查找参数字符串在本字符串中首次出现的索引位置,如果没有返回-1值")]),t._v(" "),r("h3",{attrs:{id:"截取字符串"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#截取字符串"}},[t._v("#")]),t._v(" 截取字符串")]),t._v(" "),r("p",[t._v("public String substring(int index) 截取从参数位置一直到字符串末尾,返回新字符串\n重载方法:\npublic String substring(int begin,int end) 截取从参数begin开始到end结束,返回新字符串(左闭右开区间)")]),t._v(" "),r("h3",{attrs:{id:"字符串转换字符数组"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串转换字符数组"}},[t._v("#")]),t._v(" 字符串转换字符数组")]),t._v(" "),r("p",[t._v("public char[] toCharArray():将当前字符串拆分成字符数组作为返回值")]),t._v(" "),r("h3",{attrs:{id:"获得当前字符串底层的字节数据"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#获得当前字符串底层的字节数据"}},[t._v("#")]),t._v(" 获得当前字符串底层的字节数据")]),t._v(" "),r("p",[t._v("public byte[] getBytes():获得当前字符串底层的字节数据")]),t._v(" "),r("h3",{attrs:{id:"字符串替换"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串替换"}},[t._v("#")]),t._v(" 字符串替换")]),t._v(" "),r("p",[t._v("public String replace(CharSequence OldString,CharSequence NewString): 将所有出现的老字符串,替换成新字符串,返回替换好的新字符串")]),t._v(" "),r("blockquote",[r("p",[t._v("CharSequence: 接口,可以接收一个字符串")])]),t._v(" "),r("h3",{attrs:{id:"字符串分割"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#字符串分割"}},[t._v("#")]),t._v(" 字符串分割")]),t._v(" "),r("p",[t._v("public String[] split(String regex):按照参数的规则,将字符串进行分割,返回一个String类型数组")])])}),[],!1,null,null,null);a.default=s.exports}}]);