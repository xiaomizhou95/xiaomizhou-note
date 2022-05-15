(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{432:function(a,t,s){"use strict";s.r(t);var e=s(62),n=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"mysql视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql视图"}},[a._v("#")]),a._v(" MySQL视图")]),a._v(" "),s("h3",{attrs:{id:"_1-视图概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-视图概述"}},[a._v("#")]),a._v(" 1. 视图概述")]),a._v(" "),s("p",[a._v("视图(View)是一种虚拟存在的表。视图并不在数据库中实际存在，行和列数据来自定义视图的查询中使用的表，并且是在使用视图时动态生成的。通俗的讲，视图就是一条SELECT语句执行后返回的结果集。所以我们在创建视图的时候，主要的工作就落在创建这条SQL查询语句上。")]),a._v(" "),s("p",[a._v("视图相对于其他普通的表的优势主要包括以下几项：")]),a._v(" "),s("ul",[s("li",[a._v("简单：使用视图的用户完全不需要关心后面对应的表的结构、关联条件和筛选条件，对用户来说已经是过滤好的复合条件的结果集")]),a._v(" "),s("li",[a._v("安全：使用视图的用户只能访问他们被允许查询的结果集，对表的权限管理并不能限制到某个行某个列，但是通过视图就可以简单的实现。")]),a._v(" "),s("li",[a._v("数据独立：一旦视图的结构确定了，可以屏蔽结构变化对用户的影响，源表增加列对视图没有影响；源表修改列名，则可以通过修改视图来解决，不会造成对访问者的影响。")])]),a._v(" "),s("h3",{attrs:{id:"_2-创建或者修改视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-创建或者修改视图"}},[a._v("#")]),a._v(" 2. 创建或者修改视图")]),a._v(" "),s("p",[a._v("创建视图的语法为：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("CREATE [OR REPLACE(替换)] [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]\n\nVIEW view_name [(colum_name)]\n\nAS select_statement\n[WITH [CASCADED | LOCAL] CHECK OPTION]\n")])])]),s("p",[a._v("修改视图的语法为：")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("ALTER [ALGORITHM = {UNDEFINED | MERGE | TEMPTABLE}]\n\nVIEW view_name [(colum_name)]\n\nAS select_statement\n\n[WITH [CASCADED | LOCAL] CHECK OPTION]\n")])])]),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("选项：\n  WITH [CASCADED | LOCAL] CHECK OPTION 决定了是否允许更新数据使记录不再满足视图的条件。\n  \n  LOCAL：只要满足本视图的条件就可以更新\n  CASCADED：必须满足所有针对该视图的所有视图的条件才可更新。 --默认值\n")])])]),s("h3",{attrs:{id:"_3-查看视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-查看视图"}},[a._v("#")]),a._v(" 3. 查看视图")]),a._v(" "),s("p",[a._v("从MySQL 5.1版本开始，SHOW TABLES命令不仅会显示表的名字，也会显示视图的名字。")]),a._v(" "),s("h3",{attrs:{id:"_4-删除视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-删除视图"}},[a._v("#")]),a._v(" 4. 删除视图")]),a._v(" "),s("div",{staticClass:"language-mysql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("DROP VIEW [IF EXISTS] view_name[, view_name] ...[RESTRICT | CASCADE]\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);