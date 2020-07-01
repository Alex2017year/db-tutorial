(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{491:function(t,e,_){"use strict";_.r(e);var v=_(14),n=Object(v.a)({},(function(){var t=this,e=t.$createElement,_=t._self._c||e;return _("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[_("h1",{attrs:{id:"redis-哨兵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#redis-哨兵"}},[t._v("#")]),t._v(" Redis 哨兵")]),t._v(" "),_("p",[t._v("Redis 哨兵（Sentinel）是 Redis 的"),_("strong",[t._v("高可用性")]),t._v("（Hight Availability）解决方案：由一个或多个 Sentinel 实例组成的 Sentinel 系统可以监视任意多个主服务器，以及这些主服务器的所有从服务器，并在被监视的主服务器进入下线状态时，自动将下线主服务器的某个从服务器升级为新的主服务器，然后由新的主服务器代替已下线的主服务器继续处理命令请求。")]),t._v(" "),_("p",[_("strong",[t._v("Sentinel 本质上是一个运行在特殊状模式下的 Redis 服务器")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200131135847.png",alt:"img"}})]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E4%B8%80%E5%93%A8%E5%85%B5%E7%AE%80%E4%BB%8B"}},[t._v("一、哨兵简介")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%8C%E5%90%AF%E5%8A%A8%E5%93%A8%E5%85%B5"}},[t._v("二、启动哨兵")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%89%E7%9B%91%E6%8E%A7"}},[t._v("三、监控")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E6%A3%80%E6%B5%8B%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%8A%B6%E6%80%81"}},[t._v("检测服务器状态")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E8%8E%B7%E5%8F%96%E6%9C%8D%E5%8A%A1%E5%99%A8%E4%BF%A1%E6%81%AF"}},[t._v("获取服务器信息")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%9B%9B%E9%80%9A%E7%9F%A5"}},[t._v("四、通知")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"#%E5%90%91%E6%9C%8D%E5%8A%A1%E5%99%A8%E5%8F%91%E9%80%81%E6%B6%88%E6%81%AF"}},[t._v("向服务器发送消息")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E6%8E%A5%E6%94%B6%E6%9C%8D%E5%8A%A1%E5%99%A8%E7%9A%84%E6%B6%88%E6%81%AF"}},[t._v("接收服务器的消息")])])])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%BA%94%E9%80%89%E4%B8%BE-leader"}},[t._v("五、选举 Leader")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%85%AD%E6%95%85%E9%9A%9C%E8%BD%AC%E7%A7%BB"}},[t._v("六、故障转移")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E4%B8%83%E8%A6%81%E7%82%B9%E6%80%BB%E7%BB%93"}},[t._v("七、要点总结")])]),t._v(" "),_("li",[_("a",{attrs:{href:"#%E5%8F%82%E8%80%83%E8%B5%84%E6%96%99"}},[t._v("参考资料")])])]),t._v(" "),_("h2",{attrs:{id:"一、哨兵简介"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#一、哨兵简介"}},[t._v("#")]),t._v(" 一、哨兵简介")]),t._v(" "),_("p",[t._v("Sentinel 的主要功能如下：")]),t._v(" "),_("ul",[_("li",[_("strong",[_("code",[t._v("监控（Monitoring）")])]),t._v(" - Sentinel 不断检查主从服务器是否正常在工作。")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("通知（Notification）")])]),t._v(" - Sentinel 可以通过一个 api 来通知系统管理员或者另外的应用程序，被监控的 Redis 实例有一些问题。")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("自动故障转移（Automatic Failover）")])]),t._v(" - 如果一个主服务器下线，Sentinel 会开始自动故障转移：把一个从节点提升为主节点，并重新配置其他的从节点使用新的主节点，使用 Redis 服务的应用程序在连接的时候也被通知新的地址。")]),t._v(" "),_("li",[_("strong",[_("code",[t._v("配置提供者（Configuration provider）")])]),t._v(" - Sentinel 给客户端的服务发现提供来源：对于一个给定的服务，客户端连接到 Sentinels 来寻找当前主节点的地址。当故障转移发生的时候，Sentinel 将报告新的地址。")])]),t._v(" "),_("h2",{attrs:{id:"二、启动哨兵"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#二、启动哨兵"}},[t._v("#")]),t._v(" 二、启动哨兵")]),t._v(" "),_("p",[t._v("启动一个 Sentinel 可以使用下面任意一条命令，两条命令效果完全相同。")]),t._v(" "),_("div",{staticClass:"language-shell extra-class"},[_("pre",{pre:!0,attrs:{class:"language-shell"}},[_("code",[t._v("redis-sentinel /path/to/sentinel.conf\nredis-server /path/to/sentinel.conf --sentinel\n")])])]),_("p",[t._v("当一个 Sentinel 启动时，它需要执行以下步骤：")]),t._v(" "),_("ol",[_("li",[t._v("初始化服务器。")]),t._v(" "),_("li",[t._v("将普通 Redis 服务器使用的代码替换成 Sentinel 专用代码。")]),t._v(" "),_("li",[t._v("初始化 Sentinel 状态。")]),t._v(" "),_("li",[t._v("根据给定的配置文件， 初始化 Sentinel 的监视主服务器列表。")]),t._v(" "),_("li",[t._v("创建连向主服务器的网络连接。")])]),t._v(" "),_("p",[_("strong",[t._v("Sentinel 本质上是一个运行在特殊状模式下的 Redis 服务器")]),t._v("。")]),t._v(" "),_("p",[t._v("Sentinel 模式下 Redis 服务器主要功能的使用情况：")]),t._v(" "),_("table",[_("thead",[_("tr",[_("th",{staticStyle:{"text-align":"left"}},[t._v("功能")]),t._v(" "),_("th",{staticStyle:{"text-align":"left"}},[t._v("使用情况")])])]),t._v(" "),_("tbody",[_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("数据库和键值对方面的命令， 比如 SET 、 DEL 、 FLUSHDB 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("不使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("事务命令， 比如 MULTI 和 WATCH 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("不使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("脚本命令，比如 EVAL 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("不使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("RDB 持久化命令， 比如 SAVE 和 BGSAVE 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("不使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("AOF 持久化命令， 比如 BGREWRITEAOF 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("不使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("复制命令，比如 SLAVEOF 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Sentinel 内部可以使用，但客户端不可以使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("发布与订阅命令， 比如 PUBLISH 和 SUBSCRIBE 。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("SUBSCRIBE 、 PSUBSCRIBE 、 UNSUBSCRIBE PUNSUBSCRIBE 四个命令在 Sentinel 内部和客户端都可以使用， 但 PUBLISH 命令只能在 Sentinel 内部使用。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("文件事件处理器（负责发送命令请求、处理命令回复）。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Sentinel 内部使用， 但关联的文件事件处理器和普通 Redis 服务器不同。")])]),t._v(" "),_("tr",[_("td",{staticStyle:{"text-align":"left"}},[t._v("时间事件处理器（负责执行 "),_("code",[t._v("serverCron")]),t._v(" 函数）。")]),t._v(" "),_("td",{staticStyle:{"text-align":"left"}},[t._v("Sentinel 内部使用， 时间事件的处理器仍然是 "),_("code",[t._v("serverCron")]),t._v(" 函数， "),_("code",[t._v("serverCron")]),t._v(" 函数会调用 "),_("code",[t._v("sentinel.c/sentinelTimer")]),t._v(" 函数， 后者包含了 Sentinel 要执行的所有操作。")])])])]),t._v(" "),_("h2",{attrs:{id:"三、监控"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#三、监控"}},[t._v("#")]),t._v(" 三、监控")]),t._v(" "),_("h3",{attrs:{id:"检测服务器状态"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#检测服务器状态"}},[t._v("#")]),t._v(" 检测服务器状态")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Sentinel 向 Redis 服务器发送 "),_("code",[t._v("PING")]),t._v(" 命令，检查其状态")]),t._v("。")])]),t._v(" "),_("p",[t._v("默认情况下，"),_("strong",[t._v("每个")]),t._v(" "),_("code",[t._v("Sentinel")]),t._v(" 节点会以 "),_("strong",[t._v("每秒一次")]),t._v(" 的频率对 "),_("code",[t._v("Redis")]),t._v(" 节点和 "),_("strong",[t._v("其它")]),t._v(" 的 "),_("code",[t._v("Sentinel")]),t._v(" 节点发送 "),_("code",[t._v("PING")]),t._v(" 命令，并通过节点的 "),_("strong",[t._v("回复")]),t._v(" 来判断节点是否在线。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("主观下线")])])]),t._v(" "),_("p",[_("strong",[t._v("主观下线")]),t._v(" 适用于所有 "),_("strong",[t._v("主节点")]),t._v(" 和 "),_("strong",[t._v("从节点")]),t._v("。如果在 "),_("code",[t._v("down-after-milliseconds")]),t._v(" 毫秒内，"),_("code",[t._v("Sentinel")]),t._v(" 没有收到 "),_("strong",[t._v("目标节点")]),t._v(" 的有效回复，则会判定 "),_("strong",[t._v("该节点")]),t._v(" 为 "),_("strong",[t._v("主观下线")]),t._v("。")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("客观下线")])])]),t._v(" "),_("p",[_("strong",[t._v("客观下线")]),t._v(" 只适用于 "),_("strong",[t._v("主节点")]),t._v("。如果 "),_("strong",[t._v("主节点")]),t._v(" 出现故障，"),_("code",[t._v("Sentinel")]),t._v(" 节点会通过 "),_("code",[t._v("sentinel is-master-down-by-addr")]),t._v(" 命令，向其它 "),_("code",[t._v("Sentinel")]),t._v(" 节点询问对该节点的 "),_("strong",[t._v("状态判断")]),t._v("。如果超过 `` 个数的节点判定 "),_("strong",[t._v("主节点")]),t._v(" 不可达，则该 "),_("code",[t._v("Sentinel")]),t._v(" 节点会判断 "),_("strong",[t._v("主节点")]),t._v(" 为 "),_("strong",[t._v("客观下线")]),t._v("。")]),t._v(" "),_("h3",{attrs:{id:"获取服务器信息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#获取服务器信息"}},[t._v("#")]),t._v(" 获取服务器信息")]),t._v(" "),_("blockquote",[_("p",[_("strong",[t._v("Sentinel 向主服务器发送 "),_("code",[t._v("INFO")]),t._v(" 命令，获取主服务器及它的从服务器信息")]),t._v("。")])]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("获取主服务器信息")]),t._v(" - Sentinel 默认会以每十秒一次的频率，通过命令连接向被监视的主服务器发送 "),_("code",[t._v("INFO")]),t._v(" 命令，并通过分析 "),_("code",[t._v("INFO")]),t._v(" 命令的回复来获取主服务器的当前信息。")]),t._v(" "),_("li",[_("strong",[t._v("获取从服务器信息")]),t._v(" - 当 Sentinel 发现主服务器有新的从服务器出现时，Sentinel 除了会为这个新的从服务器创建相应的实例结构之外，Sentinel 还会创建连接到从服务器的命令连接和订阅连接。")])]),t._v(" "),_("h2",{attrs:{id:"四、通知"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#四、通知"}},[t._v("#")]),t._v(" 四、通知")]),t._v(" "),_("p",[t._v("对于每个与 Sentinel 连接的服务器，Sentinel 既会向服务器的 "),_("code",[t._v("__sentinel__:hello")]),t._v(" 频道发送消息，也会订阅服务器的 "),_("code",[t._v("__sentinel__:hello")]),t._v(" 频道的消息。")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200131153842.png",alt:"img"}})]),t._v(" "),_("h3",{attrs:{id:"向服务器发送消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#向服务器发送消息"}},[t._v("#")]),t._v(" 向服务器发送消息")]),t._v(" "),_("p",[t._v("在默认情况下，Sentinel 会以每两秒一次的频率，通过命令向所有被监视的主服务器和从服务器发送以下格式的命令。")]),t._v(" "),_("div",{staticClass:"language- extra-class"},[_("pre",{pre:!0,attrs:{class:"language-text"}},[_("code",[t._v('PUBLISH __sentinel__:hello "<s_ip>,<s_port>,<s_runid>,<s_epoch>,<m_name>,<m_ip>,<m_port>,<m_epoch>"\n')])])]),_("p",[t._v("这条命令向服务器的 "),_("code",[t._v("__sentinel__:hello")]),t._v(" 频道发送一条消息。")]),t._v(" "),_("h3",{attrs:{id:"接收服务器的消息"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#接收服务器的消息"}},[t._v("#")]),t._v(" 接收服务器的消息")]),t._v(" "),_("p",[t._v("当 Sentinel 与一个主服务器或从服务器建立起订阅连接后，Sentinel 就会通过订阅连接，向服务器发送以下命令："),_("code",[t._v("SUBSCRIBE __sentinel__:hello")]),t._v("。")]),t._v(" "),_("p",[t._v("Sentinel 对 "),_("code",[t._v("__sentinel__:hello")]),t._v(" 频道的订阅会一直持续到 Sentinel 与服务器断开连接为止。")]),t._v(" "),_("h2",{attrs:{id:"五、选举-leader"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#五、选举-leader"}},[t._v("#")]),t._v(" 五、选举 Leader")]),t._v(" "),_("blockquote",[_("p",[t._v("Redis Sentinel 系统选举 Leader 的算法是 "),_("a",{attrs:{href:"https://ramcloud.atlassian.net/wiki/download/attachments/6586375/raft.pdf",target:"_blank",rel:"noopener noreferrer"}},[t._v("Raft"),_("OutboundLink")],1),t._v(" 的实现。")]),t._v(" "),_("p",[t._v("Raft 是一种共识性算法，想了解其原理，可以参考 "),_("a",{attrs:{href:"https://github.com/dunwu/blog/blob/master/source/_posts/theory/raft.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析共识性算法 Raft"),_("OutboundLink")],1),t._v("。")])]),t._v(" "),_("p",[t._v("当一个主服务器被判断为客观下线时，监视这个下线主服务器的各个 Sentinel 会进行协商，选举出一个领头的 Sentinel，并由领头 Sentinel 对下线主服务器执行故障转移操作。")]),t._v(" "),_("p",[t._v("所有在线 Sentinel 都有资格被选为 Leader。")]),t._v(" "),_("p",[t._v("每个 "),_("code",[t._v("Sentinel")]),t._v(" 节点都需要 "),_("strong",[t._v("定期执行")]),t._v(" 以下任务：")]),t._v(" "),_("p",[t._v("（1）每个 "),_("code",[t._v("Sentinel")]),t._v(" 以 "),_("strong",[t._v("每秒钟")]),t._v(" 一次的频率，向它所知的 "),_("strong",[t._v("主服务器")]),t._v("、"),_("strong",[t._v("从服务器")]),t._v(" 以及其他 "),_("code",[t._v("Sentinel")]),t._v(" "),_("strong",[t._v("实例")]),t._v(" 发送一个 "),_("code",[t._v("PING")]),t._v(" 命令。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce61df44c4d?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（2）如果一个 "),_("strong",[t._v("实例")]),t._v("（"),_("code",[t._v("instance")]),t._v("）距离 "),_("strong",[t._v("最后一次")]),t._v(" 有效回复 "),_("code",[t._v("PING")]),t._v(" 命令的时间超过 "),_("code",[t._v("down-after-milliseconds")]),t._v(" 所指定的值，那么这个实例会被 "),_("code",[t._v("Sentinel")]),t._v(" 标记为 "),_("strong",[t._v("主观下线")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce61dc739de?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（3）如果一个 "),_("strong",[t._v("主服务器")]),t._v(" 被标记为 "),_("strong",[t._v("主观下线")]),t._v("，那么正在 "),_("strong",[t._v("监视")]),t._v(" 这个 "),_("strong",[t._v("主服务器")]),t._v(" 的所有 "),_("code",[t._v("Sentinel")]),t._v(" 节点，要以 "),_("strong",[t._v("每秒一次")]),t._v(" 的频率确认 "),_("strong",[t._v("主服务器")]),t._v(" 的确进入了 "),_("strong",[t._v("主观下线")]),t._v(" 状态。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce647a39535?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（4）如果一个 "),_("strong",[t._v("主服务器")]),t._v(" 被标记为 "),_("strong",[t._v("主观下线")]),t._v("，并且有 "),_("strong",[t._v("足够数量")]),t._v(" 的 "),_("code",[t._v("Sentinel")]),t._v("（至少要达到 "),_("strong",[t._v("配置文件")]),t._v(" 指定的数量）在指定的 "),_("strong",[t._v("时间范围")]),t._v(" 内同意这一判断，那么这个 "),_("strong",[t._v("主服务器")]),t._v(" 被标记为 "),_("strong",[t._v("客观下线")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce647c2583e?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（5）在一般情况下， 每个 "),_("code",[t._v("Sentinel")]),t._v(" 会以每 "),_("code",[t._v("10")]),t._v(" 秒一次的频率，向它已知的所有 "),_("strong",[t._v("主服务器")]),t._v(" 和 "),_("strong",[t._v("从服务器")]),t._v(" 发送 "),_("code",[t._v("INFO")]),t._v(" 命令。当一个 "),_("strong",[t._v("主服务器")]),t._v(" 被 "),_("code",[t._v("Sentinel")]),t._v(" 标记为 "),_("strong",[t._v("客观下线")]),t._v(" 时，"),_("code",[t._v("Sentinel")]),t._v(" 向 "),_("strong",[t._v("下线主服务器")]),t._v(" 的所有 "),_("strong",[t._v("从服务器")]),t._v(" 发送 "),_("code",[t._v("INFO")]),t._v(" 命令的频率，会从 "),_("code",[t._v("10")]),t._v(" 秒一次改为 "),_("strong",[t._v("每秒一次")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce6738a30db?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（6）"),_("code",[t._v("Sentinel")]),t._v(" 和其他 "),_("code",[t._v("Sentinel")]),t._v(" 协商 "),_("strong",[t._v("主节点")]),t._v(" 的状态，如果 "),_("strong",[t._v("主节点")]),t._v(" 处于 "),_("code",[t._v("SDOWN")]),t._v(" 状态，则投票自动选出新的 "),_("strong",[t._v("主节点")]),t._v("。将剩余的 "),_("strong",[t._v("从节点")]),t._v(" 指向 "),_("strong",[t._v("新的主节点")]),t._v(" 进行 "),_("strong",[t._v("数据复制")]),t._v("。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce676a95a54?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("p",[t._v("（7）当没有足够数量的 "),_("code",[t._v("Sentinel")]),t._v(" 同意 "),_("strong",[t._v("主服务器")]),t._v(" 下线时， "),_("strong",[t._v("主服务器")]),t._v(" 的 "),_("strong",[t._v("客观下线状态")]),t._v(" 就会被移除。当 "),_("strong",[t._v("主服务器")]),t._v(" 重新向 "),_("code",[t._v("Sentinel")]),t._v(" 的 "),_("code",[t._v("PING")]),t._v(" 命令返回 "),_("strong",[t._v("有效回复")]),t._v(" 时，"),_("strong",[t._v("主服务器")]),t._v(" 的 "),_("strong",[t._v("主观下线状态")]),t._v(" 就会被移除。")]),t._v(" "),_("p",[_("img",{attrs:{src:"https://user-gold-cdn.xitu.io/2018/8/22/16560ce6759c1cb3?imageView2/0/w/1280/h/960/format/webp/ignore-error/1",alt:"img"}})]),t._v(" "),_("blockquote",[_("p",[t._v("注意：一个有效的 "),_("code",[t._v("PING")]),t._v(" 回复可以是："),_("code",[t._v("+PONG")]),t._v("、"),_("code",[t._v("-LOADING")]),t._v(" 或者 "),_("code",[t._v("-MASTERDOWN")]),t._v("。如果 "),_("strong",[t._v("服务器")]),t._v(" 返回除以上三种回复之外的其他回复，又或者在 "),_("strong",[t._v("指定时间")]),t._v(" 内没有回复 "),_("code",[t._v("PING")]),t._v(" 命令， 那么 "),_("code",[t._v("Sentinel")]),t._v(" 认为服务器返回的回复 "),_("strong",[t._v("无效")]),t._v("（"),_("code",[t._v("non-valid")]),t._v("）。")])]),t._v(" "),_("h2",{attrs:{id:"六、故障转移"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#六、故障转移"}},[t._v("#")]),t._v(" 六、故障转移")]),t._v(" "),_("p",[t._v("在选举产生出 Sentinel Leader 后，Sentinel Leader 将对已下线的主服务器执行故障转移操作。操作含以下三个步骤：")]),t._v(" "),_("ol",[_("li",[t._v("选出新的主服务器")]),t._v(" "),_("li",[t._v("修改从服务器的复制目标")]),t._v(" "),_("li",[t._v("将旧的主服务器变为从服务器")])]),t._v(" "),_("h2",{attrs:{id:"七、要点总结"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#七、要点总结"}},[t._v("#")]),t._v(" 七、要点总结")]),t._v(" "),_("p",[_("img",{attrs:{src:"http://dunwu.test.upcdn.net/snap/20200224221812.png",alt:"img"}})]),t._v(" "),_("h2",{attrs:{id:"参考资料"}},[_("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),_("ul",[_("li",[_("strong",[t._v("官网")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://redis.io/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 官网"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://github.com/antirez/redis",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis github"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"http://redis.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 官方文档中文版"),_("OutboundLink")],1)])])]),t._v(" "),_("li",[_("strong",[t._v("书籍")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"https://item.jd.com/11791607.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Redis 实战》"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://item.jd.com/11486101.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("《Redis 设计与实现》"),_("OutboundLink")],1)])])]),t._v(" "),_("li",[_("strong",[t._v("教程")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://redisdoc.com/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Redis 命令参考"),_("OutboundLink")],1)])])]),t._v(" "),_("li",[_("strong",[t._v("文章")]),t._v(" "),_("ul",[_("li",[_("a",{attrs:{href:"http://www.web-lovers.com/redis-source-sentinel.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("渐进式解析 Redis 源码 - 哨兵 sentinel"),_("OutboundLink")],1)]),t._v(" "),_("li",[_("a",{attrs:{href:"https://juejin.im/post/5b7d226a6fb9a01a1e01ff64",target:"_blank",rel:"noopener noreferrer"}},[t._v("深入剖析 Redis 系列(二) - Redis 哨兵模式与高可用集群"),_("OutboundLink")],1)])])])])])}),[],!1,null,null,null);e.default=n.exports}}]);