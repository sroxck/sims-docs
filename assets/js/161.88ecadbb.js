(window.webpackJsonp=window.webpackJsonp||[]).push([[161],{601:function(t,e,v){"use strict";v.r(e);var r=v(23),_=Object(r.a)({},(function(){var t=this,e=t.$createElement,v=t._self._c||e;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h2",{attrs:{id:"http"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#http"}},[t._v("#")]),t._v(" HTTP")]),t._v(" "),v("p",[t._v("hyper text transfer protocol 超文本传输协议")]),t._v(" "),v("ul",[v("li",[t._v("传输协议: 定义了客户端和服务器端通信时发送数据的格式")]),t._v(" "),v("li",[t._v("特点: 基于TCP/IP协议,默认端口80,基于请求响应模型,一次请求对应一次响应,无状态的(每次请求之间相互独立)")])]),t._v(" "),v("h2",{attrs:{id:"request-对象"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#request-对象"}},[t._v("#")]),t._v(" Request 对象")]),t._v(" "),v("blockquote",[v("p",[t._v("Request和Response对象是由服务器Tomcat创建的,Request用于获取请求消息,Response用于设置响应消息")])]),t._v(" "),v("p",[t._v("Request继承结构\nServletRequest(接口)--(继承)HttpServletRequest(接口)--(实现)org.apache.catalina.connector.RequestFacade(类)")]),t._v(" "),v("h3",{attrs:{id:"request-获取请求消息数据"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#request-获取请求消息数据"}},[t._v("#")]),t._v(" Request 获取请求消息数据")]),t._v(" "),v("blockquote",[v("p",[t._v("URL 统一资源定位符\nURI 统一资源标识符")])]),t._v(" "),v("ol",[v("li",[t._v("获取请求行数据")])]),t._v(" "),v("ul",[v("li",[t._v("GET /demo/text?name=11 HTTP/1.1")]),t._v(" "),v("li",[t._v("获取请求方式 GET\n"),v("ul",[v("li",[t._v("String getMethod()")])])]),t._v(" "),v("li",[v("strong",[t._v("获取虚拟目录 /demo")]),t._v(" "),v("ul",[v("li",[t._v("String getContextPath()")])])]),t._v(" "),v("li",[t._v("获取Servlet路径 /text\n"),v("ul",[v("li",[t._v("String getServletPath()")])])]),t._v(" "),v("li",[t._v("获取GET方式的请求参数: name=11\n"),v("ul",[v("li",[t._v("String getQueryString()")])])]),t._v(" "),v("li",[v("strong",[t._v("获取请求URI: /demo/text")]),t._v(" "),v("ul",[v("li",[t._v("String getRequestURI()")])])]),t._v(" "),v("li",[t._v("获取请求URL: http://localhost/demo/text\n"),v("ul",[v("li",[t._v("String getRequestURL()")])])]),t._v(" "),v("li",[t._v("获取协议版本: HTTP/1.1\n"),v("ul",[v("li",[t._v("String getProtocol()")])])]),t._v(" "),v("li",[t._v("获取客户机IP地址\n"),v("ul",[v("li",[t._v("String getRemoteAddr()")])])])]),t._v(" "),v("ol",{attrs:{start:"2"}},[v("li",[t._v("获取请求头数据")])]),t._v(" "),v("ul",[v("li",[t._v("通过请求头的名称获取请求头的值\n"),v("ul",[v("li",[t._v("String getHeader(String name)")])])]),t._v(" "),v("li",[t._v("获取所有的请求头名称\n"),v("ul",[v("li",[v("code",[t._v("Enumeration<String>getHeaderNames")])]),t._v(" "),v("li",[t._v("Enumeration 类似迭代器的接口")])])])]),t._v(" "),v("ol",{attrs:{start:"3"}},[v("li",[t._v("获取请求体数据")])]),t._v(" "),v("blockquote",[v("p",[t._v("只有post请求方式才有请求体, 封装了post请求的请求参数\n步骤:")])]),t._v(" "),v("ol",[v("li",[t._v("获取流对象")])]),t._v(" "),v("div",{staticClass:"language- extra-class"},[v("pre",[v("code",[t._v("- getReader: 获取字符输入流,操作字符\n- getInputStream: 获取字节输入流,操作所有类型数据\n")])])]),v("ol",{attrs:{start:"2"}},[v("li",[v("p",[t._v("从流对象中拿数据")])]),t._v(" "),v("li",[v("p",[t._v("获取请求参数通用方法")])])]),t._v(" "),v("ul",[v("li",[t._v("String getParameter (String name) 根据参数名称获取参数值")]),t._v(" "),v("li",[t._v("String [] getParameterValue (String name) 根据参数名称获取参数值的数组")]),t._v(" "),v("li",[v("code",[t._v("Enumeration<String>")]),t._v(" getParameterNames () 获取所有请求参数的名字")]),t._v(" "),v("li",[v("code",[t._v("Map<String,String[]>")]),t._v(" getParameterMap () 获取所有请求参数的Map集合")])]),t._v(" "),v("blockquote",[v("p",[t._v('中文乱码问题: 设置流的字符集,request.setCharacterEncoding("utf-8")')])]),t._v(" "),v("ol",{attrs:{start:"5"}},[v("li",[t._v("请求转发:一种在服务器内部的资源跳转方式\n步骤:")]),t._v(" "),v("li",[t._v("通过request对象获取请求转发器对象")]),t._v(" "),v("li",[t._v("共享数据")]),t._v(" "),v("li",[t._v("获取ServletContext")])])])}),[],!1,null,null,null);e.default=_.exports}}]);