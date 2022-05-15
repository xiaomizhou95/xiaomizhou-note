(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{434:function(s,e,t){"use strict";t.r(e);var a=t(62),l=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h3",{attrs:{id:"redis数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#redis数据类型"}},[s._v("#")]),s._v(" Redis数据类型")]),s._v(" "),t("h4",{attrs:{id:"_1-redis适用场景"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-redis适用场景"}},[s._v("#")]),s._v(" "),t("strong",[s._v("1. Redis适用场景")])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("作为缓存使用")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("原始业务功能设计，比如秒杀、双十一活动")])]),s._v(" "),t("li",[t("p",[s._v("运营平台监控到的突发高频访问数据，比如突发的热点事件")])]),s._v(" "),t("li",[t("p",[s._v("高频、复杂的统计数据，比如在线人数、投票")])])])]),s._v(" "),t("li",[t("p",[s._v("系统功能优化或升级")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("单服务升级集群")])]),s._v(" "),t("li",[t("p",[s._v("Session管理")])]),s._v(" "),t("li",[t("p",[s._v("Token管理")])])])])]),s._v(" "),t("h4",{attrs:{id:"_2-redis数据类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-redis数据类型"}},[s._v("#")]),s._v(" 2. "),t("strong",[s._v("redis数据类型")])]),s._v(" "),t("ol",[t("li",[t("p",[s._v("string")])]),s._v(" "),t("li",[t("p",[s._v("hash")])]),s._v(" "),t("li",[t("p",[s._v("list")])]),s._v(" "),t("li",[t("p",[s._v("set")])]),s._v(" "),t("li",[t("p",[s._v("sorted_set")])])]),s._v(" "),t("h4",{attrs:{id:"_3-string类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-string类型"}},[s._v("#")]),s._v(" 3. string类型")]),s._v(" "),t("ol",[t("li",[t("strong",[s._v("string类型基本介绍")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("存储的数据：单个数据，最简单的数据存储类型，也是常用的数据存储类型")])]),s._v(" "),t("li",[t("p",[s._v("存储数据的格式：一个存储空间保存一个数据")])]),s._v(" "),t("li",[t("p",[s._v("存储内容：通常使用字符串，如果字符串以整数的形式展示，可以作为数据操作使用")])])]),s._v(" "),t("ol",{attrs:{start:"2"}},[t("li",[t("strong",[s._v("string类型数据的基本操作")])])]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加、修改数据    "),t("code",[s._v("set key value")])])]),s._v(" "),t("li",[t("p",[s._v("获取数据   "),t("code",[s._v("get key")])])]),s._v(" "),t("li",[t("p",[s._v("删除数据   "),t("code",[s._v("del key")])])]),s._v(" "),t("li",[t("p",[s._v("添加、修改多个数据   "),t("code",[s._v("mset key1 value1 key2 value2 ...")])])]),s._v(" "),t("li",[t("p",[s._v("获取多个数据   "),t("code",[s._v("get key1 key2 ...")])])]),s._v(" "),t("li",[t("p",[s._v("获取数据字符个数   "),t("code",[s._v("strlen key")])])]),s._v(" "),t("li",[t("p",[s._v("追加信息到原始信息尾部   "),t("code",[s._v("append key value")])])])]),s._v(" "),t("ol",{attrs:{start:"3"}},[t("li",[t("strong",[s._v("string类型数据的扩展操作")])])]),s._v(" "),t("ul",[t("li",[s._v("设置数值增加指定范围的值")])]),s._v(" "),t("div",{staticClass:"language-PowerShell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加1")]),s._v("\nincr key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 增加指定的值")]),s._v("\nincrby key "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[increment]")]),s._v("\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 可以操作浮点值")]),s._v("\nincrbyfloat key "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("[increment]")]),s._v("\n")])])]),t("ul",[t("li",[s._v("设置数值数据减少指定范围的值")])]),s._v(" "),t("div",{staticClass:"language-PowerShell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减少1")]),s._v("\ndecr key\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 减少指定的值")]),s._v("\ndecrby key increment\n")])])]),t("ul",[t("li",[t("p",[s._v("string做为数值操作")]),s._v(" "),t("ol",[t("li",[t("p",[s._v("string在redi内部存储默认就是一个字符串，当遇到增减类操作incr或者decr时会自动转成数值型进行计算。")])]),s._v(" "),t("li",[t("p",[s._v("redis所有的操作都是原子性的，采用单线程处理所有业务。命令是一个一个执行的，因此无需考虑并发带来的影响")])]),s._v(" "),t("li",[t("p",[s._v("注意：按数值进行操作的数据，如果原始数据不能转成数值或超越了redis数值上限范围，将报错。最大值 9223372036854775807")])])])]),s._v(" "),t("li",[t("p",[s._v("设置数据具有指定的生命周期")])])]),s._v(" "),t("div",{staticClass:"language-PowerShell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-powershell"}},[t("code",[s._v("setex key seconds value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 秒\n\npsetex key milliseconds value "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("--")]),s._v(" 毫秒\n")])])]),t("ol",[t("li",[s._v("string类型数据操作的注意事项")])]),s._v(" "),t("ul",[t("li",[s._v("数据最大存储量：512MB")])]),s._v(" "),t("h4",{attrs:{id:"_4-hash类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-hash类型"}},[s._v("#")]),s._v(" 4.Hash类型")]),s._v(" "),t("ol",[t("li",[t("h6",{attrs:{id:"hash类型介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash类型介绍"}},[s._v("#")]),s._v(" hash类型介绍")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("对一系列存储的数据进行编组，方便管理，典型应用 存储对象信息")])]),s._v(" "),t("li",[t("p",[s._v("一个存储空间保存多个键值对数据")])]),s._v(" "),t("li",[t("p",[s._v("hash类型：底层使用哈希表结构实现数据存储")])]),s._v(" "),t("li",[t("p",[s._v("hash存储结构优化：当field较少时用类数组结构，当field较多时用HashMap结构")])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"hash类型数据的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash类型数据的基本操作"}},[s._v("#")]),s._v(" hash类型数据的基本操作")]),s._v(" "),t("ul",[t("li",[s._v("添加、修改数据\t"),t("code",[s._v("hset key field value")])]),s._v(" "),t("li",[s._v("获取数据   "),t("code",[s._v("hget key field")]),s._v(" "),t("code",[s._v("hgetall key")])]),s._v(" "),t("li",[s._v("删除数据   "),t("code",[s._v("hdel key field1 [field2]")])]),s._v(" "),t("li",[s._v("添加、修改多个数据 "),t("code",[s._v("hmset key field1 value1 field2 value2 ...")])]),s._v(" "),t("li",[s._v("获取多个数据   "),t("code",[s._v("hmget key field1 field2 ...")])]),s._v(" "),t("li",[s._v("获取哈希表中字段的数量   "),t("code",[s._v("hlen key")])]),s._v(" "),t("li",[s._v("获取哈希表中是否存在指定的字段   "),t("code",[s._v("hexists key field")])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"hash类型数据的扩展操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash类型数据的扩展操作"}},[s._v("#")]),s._v(" hash类型数据的扩展操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("获取哈希表中所有的字段名或字段值")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hkeys key\nhvals key\n")])])])]),s._v(" "),t("li",[t("p",[s._v("设置指定字段的数值数据增加指定范围的值")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("hincrby key field increment\n\nhincrbyfloat key field increment\n")])])])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"hash类型数据操作的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#hash类型数据操作的注意事项"}},[s._v("#")]),s._v(" hash类型数据操作的注意事项")]),s._v(" "),t("ul",[t("li",[s._v("hash类型下的value只能存储字符串，不允许存储其他数据类型，不存在嵌套现象，如果数据未获取到，对应的值为 nil")]),s._v(" "),t("li",[s._v("每个hash可以存储 "),t("code",[s._v("2^32 -1")]),s._v(" 个键值对")]),s._v(" "),t("li",[s._v("hash类型十分贴近对象的数据存储方式，并且可以灵活添加删除对象属性。但hash设计的初衷不是为了存储大量对象而设计的，切记不可滥用，更不可以将hash作为对象列表使用")]),s._v(" "),t("li",[t("code",[s._v("hgetall")]),s._v(" 操作可以获取全部属性，如果内部field过多，遍历整体数据库效率就会很低，有可能成为数据访问的瓶颈。")])])])]),s._v(" "),t("h4",{attrs:{id:"_5-list类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_5-list类型"}},[s._v("#")]),s._v(" 5. list类型")]),s._v(" "),t("ol",[t("li",[t("h6",{attrs:{id:"list类型简单介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list类型简单介绍"}},[s._v("#")]),s._v(" list类型简单介绍")]),s._v(" "),t("ul",[t("li",[s._v("数据存储需求：存储多个数据，并对数据进入存储空间的顺序进行区分")]),s._v(" "),t("li",[s._v("存储结构：一个存储空间保存多个数据，且通过数据可以体现进入顺序")]),s._v(" "),t("li",[s._v("list类型：保存多个数据，底层使用双向链表存储结构实现")])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"list类型基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list类型基本操作"}},[s._v("#")]),s._v(" list类型基本操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加、修改数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-- 从链表左边插入\nlpush key value1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n\n-- 从链表右边插入\nrpush key value1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("value2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n")])])])]),s._v(" "),t("li",[t("p",[s._v("获取数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-- 查询从start-stop的数据\nlrange key start stop\n\n-- 查询当前index的数据\nlindex key index\n\n-- 获取当前key的list长度\nllen key\n")])])])]),s._v(" "),t("li",[t("p",[s._v("获取并移除数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-- 从左边弹出数据\nlpop key\n\n-- 从右边弹出数据\nrpop key\n")])])])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"list-类型数据扩展操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-类型数据扩展操作"}},[s._v("#")]),s._v(" list 类型数据扩展操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("规定时间内获取并移除数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("blpop key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n\nbrpop key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("timeout")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("移除指定数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("lrem key count value\n")])])])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"list-类型数据操作注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#list-类型数据操作注意事项"}},[s._v("#")]),s._v(" list 类型数据操作注意事项")]),s._v(" "),t("ul",[t("li",[s._v("list 中保存的数据都是string类型的，数据总量是有限的，最多"),t("code",[s._v("2^32-1")]),s._v("个元素")]),s._v(" "),t("li",[s._v("list 具有索引的概念，但是操作数据时通常以队列的形式进行入队出队操作，或以栈的形式进行入栈出栈操作")]),s._v(" "),t("li",[s._v("获取全部数据操作结束索引设置为-1")]),s._v(" "),t("li",[s._v("list 可以对数据进行分页操作，通常第一页的信息来自于list，第2页及更多的信息通过数据库的形式加载。")])])])]),s._v(" "),t("h4",{attrs:{id:"_6-set-类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-set-类型"}},[s._v("#")]),s._v(" 6. set 类型")]),s._v(" "),t("ol",[t("li",[t("h6",{attrs:{id:"set-类型基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-类型基本介绍"}},[s._v("#")]),s._v(" set 类型基本介绍")]),s._v(" "),t("ul",[t("li",[s._v("存储需求：存储大量的数据，在查询方面提供更改的效率")]),s._v(" "),t("li",[s._v("存储结构，能够确保大量的数据，高效的内部存储机制，便于查询")]),s._v(" "),t("li",[s._v("set类型：与hash存储结构完全相同，仅存储键，不存储值，并且值是不允许重复的")])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"set-类型数据的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-类型数据的基本操作"}},[s._v("#")]),s._v(" set 类型数据的基本操作")]),s._v(" "),t("ul",[t("li",[s._v("添加数据   "),t("code",[s._v("sadd key member1 [member2]")])]),s._v(" "),t("li",[s._v("获取全部数据   "),t("code",[s._v("smembers key")])]),s._v(" "),t("li",[s._v("删除数据   "),t("code",[s._v("srem key member1 [member2]")])]),s._v(" "),t("li",[s._v("获取集合数据总量   "),t("code",[s._v("scard key")])]),s._v(" "),t("li",[s._v("判断集合中是否包含指定数据   "),t("code",[s._v("sismember key member")])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"set-类型数据的扩展操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-类型数据的扩展操作"}},[s._v("#")]),s._v(" set 类型数据的扩展操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("随机获取集合中指定数量的数据   "),t("code",[s._v("srandmember key [count]")])])]),s._v(" "),t("li",[t("p",[s._v("随机获取集合中的某个数据并将该数据移除集合   "),t("code",[s._v("spop key")])])]),s._v(" "),t("li",[t("p",[t("strong",[s._v("Tips:redis 应用于随机推荐类信息检索，例如热点歌单推荐，热点新闻推荐，热卖旅游线路，应有APP推荐等")])])]),s._v(" "),t("li",[t("p",[s._v("求两个集合的交、并、差集")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-- 交集\nsinter key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n-- 并集\nsunion key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n-- 差集\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("sdiff")]),s._v(" key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("求两个集合的交、并、差集并存储到指定集合中")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("sinterstore destination key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsunionstore destination key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\nsdiffstore destination key1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("key2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("将指定数据从原始集合中移动到目标集合中")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("smove "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" destination member\n")])])])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"set-类型数据操作的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#set-类型数据操作的注意事项"}},[s._v("#")]),s._v(" set 类型数据操作的注意事项")]),s._v(" "),t("ul",[t("li",[s._v("set 类型不允许数据重复，如果添加的数据在set中已经存在，将只保留一份")]),s._v(" "),t("li",[s._v("set 虽然与hash的存储结构相同，但是无法启用hash中存储值的空间")])])])]),s._v(" "),t("h4",{attrs:{id:"_6-sorted-set-类型"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_6-sorted-set-类型"}},[s._v("#")]),s._v(" 6. sorted_set 类型")]),s._v(" "),t("ol",[t("li",[t("h6",{attrs:{id:"sorted-set-基本介绍"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set-基本介绍"}},[s._v("#")]),s._v(" sorted_set 基本介绍")]),s._v(" "),t("ul",[t("li",[s._v("数据排序有利于数据的有效展示，需要提供提供一种可以根据自身特征进行排序的方式")]),s._v(" "),t("li",[s._v("在set的存储结构上添加可排序字段")])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"sorted-set-类型数据的基本操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set-类型数据的基本操作"}},[s._v("#")]),s._v(" sorted_set 类型数据的基本操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("添加数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("zadd key score1 member1 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("score2 member2"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("获取全部数据")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("-- 加上 withscores 带上分数\n\n-- 由小到大\nzrange key start stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WITHSCORES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n\n-- 由大到小\nzrevrange key start stop "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("WITHSCORES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])])]),s._v(" "),t("li",[t("p",[s._v("删除数据")]),s._v(" "),t("div",{staticClass:"language-she extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zrem key member [member...]\n")])])])]),s._v(" "),t("li",[t("p",[s._v("按条件获取数据")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zrangebyscore key min max [WITHSCORES] [LIMIT]\n\nzrevrangescore key max min [WITHSCORES] [LIMIT]\n")])])])]),s._v(" "),t("li",[t("p",[s._v("按条件删除数据")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zremrangebyrank key start stop\n\nzremrangebyscore key min max\n")])])])]),s._v(" "),t("li",[t("p",[s._v("获取集合数据总量")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zcard key\n\nzcount key min max\n")])])])]),s._v(" "),t("li",[t("p",[s._v("集合交、并操作")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zinterstore destination numkeys key [key ...] [AGGREGATE SUM|MIN|MAX]\n\nzunionstore destination numkeys key [key ...] [AGGREGATE SUM|MIN|MAX]\n")])])])])]),s._v(" "),t("p",[t("font",{attrs:{color:"#0099ff"}},[s._v("注意：")])],1),s._v(" "),t("ul",[t("li",[t("p",[t("font",{attrs:{color:"#0099ff"}},[s._v("min与max用于限定搜索查询的条件")])],1)]),s._v(" "),t("li",[t("p",[t("font",{attrs:{color:"#0099ff"}},[s._v("start与stop用于限定查询范围，作用于索引，表示开始和结束索引")])],1)]),s._v(" "),t("li",[t("p",[t("font",{attrs:{color:"#0099ff"}},[s._v("offset与count用于限定查询范围，作用于查询结果，表示开始位置和数据总量")])],1)])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"sorted-set-类型数据的扩展操作"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set-类型数据的扩展操作"}},[s._v("#")]),s._v(" sorted_set 类型数据的扩展操作")]),s._v(" "),t("ul",[t("li",[t("p",[s._v("获取数据对应的索引")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zrank key member\n\nzrevrank key member\n")])])])]),s._v(" "),t("li",[t("p",[s._v("score 值获取与修改")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("zscore key member\n\nzincrby key increment member\n")])])])])])]),s._v(" "),t("li",[t("h6",{attrs:{id:"sorted-set-类型数据操作的注意事项"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#sorted-set-类型数据操作的注意事项"}},[s._v("#")]),s._v(" sorted_set 类型数据操作的注意事项")]),s._v(" "),t("ul",[t("li",[s._v("score 保存的数据存储空间是64位，如果是整数范围是-9007199254740992~9007199254740992")]),s._v(" "),t("li",[s._v("score 保存的数据也可以是一个双精度的double值，基于双精度浮点数的特征，可能会丢失精度，使用时要慎重")]),s._v(" "),t("li",[s._v("sorted_set 底层存储还是基于set 结构的，因此数据不能重复，如果重复添加相同的数据，score值将被反复覆盖，保留最后一次修改的结果")])])])])])}),[],!1,null,null,null);e.default=l.exports}}]);