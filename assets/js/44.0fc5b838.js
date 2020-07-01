(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{497:function(t,_,e){"use strict";e.r(_);var v=e(14),s=Object(v.a)({},(function(){var t=this,_=t.$createElement,e=t._self._c||_;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"mysql-锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mysql-锁"}},[t._v("#")]),t._v(" Mysql 锁")]),t._v(" "),e("h2",{attrs:{id:"乐观锁和悲观锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#乐观锁和悲观锁"}},[t._v("#")]),t._v(" 乐观锁和悲观锁")]),t._v(" "),e("p",[t._v("确保在多个事务同时存取数据库中同一数据时不破坏事务的隔离性和统一性以及数据库的统一性，"),e("strong",[t._v("乐观锁和悲观锁是并发控制主要采用的技术手段。")])]),t._v(" "),e("ul",[e("li",[e("strong",[e("code",[t._v("悲观锁")])]),t._v(" - 假定会发生并发冲突，屏蔽一切可能违反数据完整性的操作\n"),e("ul",[e("li",[t._v("在查询完数据的时候就把事务锁起来，直到提交事务（"),e("code",[t._v("COMMIT")]),t._v("）")]),t._v(" "),e("li",[t._v("实现方式："),e("strong",[t._v("使用数据库中的锁机制")]),t._v("。")])])]),t._v(" "),e("li",[e("strong",[e("code",[t._v("乐观锁")])]),t._v(" - 假设不会发生并发冲突，只在提交操作时检查是否违反数据完整性。\n"),e("ul",[e("li",[t._v("在修改数据的时候把事务锁起来，通过 version 的方式来进行锁定")]),t._v(" "),e("li",[t._v("实现方式："),e("strong",[t._v("使用 version 版本或者时间戳")]),t._v("。")])])])]),t._v(" "),e("h2",{attrs:{id:"锁粒度"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#锁粒度"}},[t._v("#")]),t._v(" 锁粒度")]),t._v(" "),e("p",[t._v("从数据库的锁粒度来看，MySQL 中提供了两种封锁粒度：行级锁和表级锁。")]),t._v(" "),e("ul",[e("li",[e("strong",[t._v("表级锁（table lock）")]),t._v(" - 锁定整张表。用户对表进行写操作前，需要先获得写锁，这会阻塞其他用户对该表的所有读写操作。只有没有写锁时，其他用户才能获得读锁，读锁之间不会相互阻塞。")]),t._v(" "),e("li",[e("strong",[t._v("行级锁（row lock）")]),t._v(" - 锁定指定的行记录。这样其它进程还是可以对同一个表中的其它记录进行操作。")])]),t._v(" "),e("p",[t._v("应该尽量只锁定需要修改的那部分数据，而不是所有的资源。"),e("strong",[t._v("锁定的数据量越少，锁竞争的发生频率就越小，系统的并发程度就越高")]),t._v("。但是加锁需要消耗资源，锁的各种操作（包括获取锁、释放锁、以及检查锁状态）都会增加系统开销。因此"),e("strong",[t._v("锁粒度越小，系统开销就越大")]),t._v("。")]),t._v(" "),e("p",[t._v("在选择锁粒度时，需要在锁开销和并发程度之间做一个权衡。")]),t._v(" "),e("p",[t._v("在 "),e("code",[t._v("InnoDB")]),t._v(" 中，"),e("strong",[t._v("行锁是通过给索引上的索引项加锁来实现的")]),t._v("。"),e("strong",[t._v("如果没有索引，"),e("code",[t._v("InnoDB")]),t._v(" 将会通过隐藏的聚簇索引来对记录加锁")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"读写锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#读写锁"}},[t._v("#")]),t._v(" 读写锁")]),t._v(" "),e("ul",[e("li",[t._v("独享锁（Exclusive），简写为 X 锁，又称写锁。使用方式："),e("code",[t._v("SELECT ... FOR UPDATE;")])]),t._v(" "),e("li",[t._v("共享锁（Shared），简写为 S 锁，又称读锁。使用方式："),e("code",[t._v("SELECT ... LOCK IN SHARE MODE;")])])]),t._v(" "),e("p",[t._v("写锁和读锁的关系，简言之："),e("strong",[t._v("独享锁存在，其他事务就不能做任何操作")]),t._v("。")]),t._v(" "),e("p",[e("strong",[e("code",[t._v("InnoDB")]),t._v(" 下的行锁、间隙锁、next-key 锁统统属于独享锁")]),t._v("。")]),t._v(" "),e("h2",{attrs:{id:"意向锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#意向锁"}},[t._v("#")]),t._v(" 意向锁")]),t._v(" "),e("p",[e("strong",[t._v("当存在表级锁和行级锁的情况下，必须先申请意向锁（表级锁，但不是真的加锁），再获取行级锁")]),t._v("。使用意向锁（Intention Locks）可以更容易地支持多粒度封锁。")]),t._v(" "),e("p",[e("strong",[t._v("意向锁是 "),e("code",[t._v("InnoDB")]),t._v(" 自动加的，不需要用户干预")]),t._v("。")]),t._v(" "),e("p",[t._v("在存在行级锁和表级锁的情况下，事务 T 想要对表 A 加 X 锁，就需要先检测是否有其它事务对表 A 或者表 A 中的任意一行加了锁，那么就需要对表 A 的每一行都检测一次，这是非常耗时的。")]),t._v(" "),e("p",[t._v("意向锁规定：")]),t._v(" "),e("ul",[e("li",[t._v("IX/IS 是表锁；")]),t._v(" "),e("li",[t._v("X/S 是行锁。")]),t._v(" "),e("li",[t._v("一个事务在获得某个数据行的 S 锁之前，必须先获得表的 IS 锁或者更强的锁；")]),t._v(" "),e("li",[t._v("一个事务在获得某个数据行的 X 锁之前，必须先获得表的 IX 锁。")])]),t._v(" "),e("p",[t._v("通过引入意向锁，事务 T 想要对表 A 加 X 锁，只需要先检测是否有其它事务对表 A 加了 X/IX/S/IS 锁，如果加了就表示有其它事务正在使用这个表或者表中某一行的锁，因此事务 T 加 X 锁失败。")]),t._v(" "),e("p",[t._v("各种锁的兼容关系如下：")]),t._v(" "),e("table",[e("thead",[e("tr",[e("th",{staticStyle:{"text-align":"center"}},[t._v("-")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("IX")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("th",{staticStyle:{"text-align":"center"}},[t._v("IS")])])]),t._v(" "),e("tbody",[e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("X")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IX")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("S")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])]),t._v(" "),e("tr",[e("td",{staticStyle:{"text-align":"center"}},[t._v("IS")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("❌")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")]),t._v(" "),e("td",{staticStyle:{"text-align":"center"}},[t._v("✔️")])])])]),t._v(" "),e("p",[t._v("解释如下：")]),t._v(" "),e("ul",[e("li",[t._v("任意 IS/IX 锁之间都是兼容的，因为它们只表示想要对表加锁，而不是真正加锁；")]),t._v(" "),e("li",[t._v("这里兼容关系针对的是表级锁，而表级的 IX 锁和行级的 X 锁兼容，两个事务可以对两个数据行加 X 锁。（事务 T1 想要对数据行 R1 加 X 锁，事务 T2 想要对同一个表的数据行 R2 加 X 锁，两个事务都需要对该表加 IX 锁，但是 IX 锁是兼容的，并且 IX 锁与行级的 X 锁也是兼容的，因此两个事务都能加锁成功，对同一个表中的两个数据行做修改。）")])]),t._v(" "),e("h2",{attrs:{id:"mvcc"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#mvcc"}},[t._v("#")]),t._v(" MVCC")]),t._v(" "),e("p",[t._v("不仅是 Mysql，包括 Oracle、PostgreSQL 等其他数据库都实现了各自的 MVCC，实现机制没有统一标准。")]),t._v(" "),e("p",[t._v("多版本并发控制（Multi-Version Concurrency Control, MVCC）可以视为行级锁的一个变种。它在很多情况下都避免了加锁操作，因此开销更低。")]),t._v(" "),e("p",[t._v("MVCC 是 "),e("code",[t._v("InnoDB")]),t._v(" 存储引擎实现隔离级别的一种具体方式，"),e("strong",[t._v("用于实现提交读和可重复读这两种隔离级别")]),t._v("。而未提交读隔离级别总是读取最新的数据行，要求很低，无需使用 MVCC。可串行化隔离级别需要对所有读取的行都加锁，单纯使用 MVCC 无法实现。")]),t._v(" "),e("h3",{attrs:{id:"基本思想"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#基本思想"}},[t._v("#")]),t._v(" 基本思想")]),t._v(" "),e("p",[t._v("加锁能解决多个事务同时执行时出现的并发一致性问题。在实际场景中读操作往往多于写操作，因此又引入了读写锁来避免不必要的加锁操作，例如读和读没有互斥关系。读写锁中读和写操作仍然是互斥的。")]),t._v(" "),e("p",[t._v("MVCC 的思想是：")]),t._v(" "),e("ul",[e("li",[t._v("保存数据在某个时间点的快照。"),e("strong",[t._v("写操作（DELETE、INSERT、UPDATE）更新最新的版本快照，而读操作去读旧版本快照，没有互斥关系")]),t._v("，这一点和 "),e("code",[t._v("CopyOnWrite")]),t._v(" 类似。")]),t._v(" "),e("li",[t._v("脏读和不可重复读最根本的原因是"),e("strong",[t._v("事务读取到其它事务未提交的修改")]),t._v("。在事务进行读取操作时，为了解决脏读和不可重复读问题，"),e("strong",[t._v("MVCC 规定只能读取已经提交的快照")]),t._v("。当然一个事务可以读取自身未提交的快照，这不算是脏读。")])]),t._v(" "),e("h3",{attrs:{id:"版本号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#版本号"}},[t._v("#")]),t._v(" 版本号")]),t._v(" "),e("p",[t._v("InnoDB 的 MVCC 实现是：在每行记录后面保存两个隐藏列，一个列保存行的创建时间，另一个列保存行的过期时间（这里的时间是指系统版本号）。每开始一个新事务，系统版本号会自动递增，事务开始时刻的系统版本号会作为事务的版本号，用来和查询到的每行记录的版本号进行比较。")]),t._v(" "),e("ul",[e("li",[t._v("系统版本号 "),e("code",[t._v("SYS_ID")]),t._v("：是一个递增的数字，每开始一个新的事务，系统版本号就会自动递增。")]),t._v(" "),e("li",[t._v("事务版本号 "),e("code",[t._v("TRX_ID")]),t._v(" ：事务开始时的系统版本号。")])]),t._v(" "),e("h3",{attrs:{id:"undo-日志"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#undo-日志"}},[t._v("#")]),t._v(" Undo 日志")]),t._v(" "),e("p",[t._v("MVCC 的多版本指的是多个版本的快照，快照存储在 Undo 日志中，该日志通过回滚指针 ROLL_PTR 把一个数据行的所有快照连接起来。")]),t._v(" "),e("p",[t._v("例如在 MySQL 创建一个表 t，包含主键 id 和一个字段 x。我们先插入一个数据行，然后对该数据行执行两次更新操作。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INTO")]),t._v(" t"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("VALUES")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"a"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"b"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" t "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SET")]),t._v(" x"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c"')]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" id"),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("因为没有使用 "),e("code",[t._v("START TRANSACTION")]),t._v(" 将上面的操作当成一个事务来执行，根据 MySQL 的 "),e("code",[t._v("AUTOCOMMIT")]),t._v(" 机制，每个操作都会被当成一个事务来执行，所以上面的操作总共涉及到三个事务。快照中除了记录事务版本号 TRX_ID 和操作之外，还记录了一个 bit 的 DEL 字段，用于标记是否被删除。")]),t._v(" "),e("p",[e("code",[t._v("INSERT")]),t._v("、"),e("code",[t._v("UPDATE")]),t._v("、"),e("code",[t._v("DELETE")]),t._v(" 操作会创建一个日志，并将事务版本号 "),e("code",[t._v("TRX_ID")]),t._v(" 写入。"),e("code",[t._v("DELETE")]),t._v(" 可以看成是一个特殊的 "),e("code",[t._v("UPDATE")]),t._v("，还会额外将 DEL 字段设置为 1。")]),t._v(" "),e("h3",{attrs:{id:"readview"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#readview"}},[t._v("#")]),t._v(" ReadView")]),t._v(" "),e("p",[t._v("MVCC 维护了一个 "),e("code",[t._v("ReadView")]),t._v(" 结构，主要包含了当前系统未提交的事务列表 "),e("code",[t._v("TRX_IDs {TRX_ID_1, TRX_ID_2, ...}")]),t._v("，还有该列表的最小值 "),e("code",[t._v("TRX_ID_MIN")]),t._v(" 和 "),e("code",[t._v("TRX_ID_MAX")]),t._v("。")]),t._v(" "),e("p",[t._v("在进行 "),e("code",[t._v("SELECT")]),t._v(" 操作时，根据数据行快照的 "),e("code",[t._v("TRX_ID")]),t._v(" 与 "),e("code",[t._v("TRX_ID_MIN")]),t._v(" 和 "),e("code",[t._v("TRX_ID_MAX")]),t._v(" 之间的关系，从而判断数据行快照是否可以使用：")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("TRX_ID")]),t._v(" < "),e("code",[t._v("TRX_ID_MIN")]),t._v("，表示该数据行快照时在当前所有未提交事务之前进行更改的，因此可以使用。")]),t._v(" "),e("li",[e("code",[t._v("TRX_ID")]),t._v(" > "),e("code",[t._v("TRX_ID_MAX")]),t._v("，表示该数据行快照是在事务启动之后被更改的，因此不可使用。")]),t._v(" "),e("li",[e("code",[t._v("TRX_ID_MIN")]),t._v(" <= "),e("code",[t._v("TRX_ID")]),t._v(" <= "),e("code",[t._v("TRX_ID_MAX")]),t._v("，需要根据隔离级别再进行判断：\n"),e("ul",[e("li",[t._v("提交读：如果 "),e("code",[t._v("TRX_ID")]),t._v(" 在 "),e("code",[t._v("TRX_IDs")]),t._v(" 列表中，表示该数据行快照对应的事务还未提交，则该快照不可使用。否则表示已经提交，可以使用。")]),t._v(" "),e("li",[t._v("可重复读：都不可以使用。因为如果可以使用的话，那么其它事务也可以读到这个数据行快照并进行修改，那么当前事务再去读这个数据行得到的值就会发生改变，也就是出现了不可重复读问题。")])])])]),t._v(" "),e("p",[t._v("在数据行快照不可使用的情况下，需要沿着 Undo Log 的回滚指针 ROLL_PTR 找到下一个快照，再进行上面的判断。")]),t._v(" "),e("h3",{attrs:{id:"快照读与当前读"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#快照读与当前读"}},[t._v("#")]),t._v(" 快照读与当前读")]),t._v(" "),e("p",[t._v("快照读")]),t._v(" "),e("p",[t._v("MVCC 的 SELECT 操作是快照中的数据，不需要进行加锁操作。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("当前读")]),t._v(" "),e("p",[t._v("MVCC 其它会对数据库进行修改的操作（INSERT、UPDATE、DELETE）需要进行加锁操作，从而读取最新的数据。可以看到 MVCC 并不是完全不用加锁，而只是避免了 SELECT 的加锁操作。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("INSERT")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DELETE")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("p",[t._v("在进行 SELECT 操作时，可以强制指定进行加锁操作。以下第一个语句需要加 S 锁，第二个需要加 X 锁。")]),t._v(" "),e("div",{staticClass:"language-sql extra-class"},[e("pre",{pre:!0,attrs:{class:"language-sql"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" ? "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("lock")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("in")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("share")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("mode")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" ? "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("for")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),e("h2",{attrs:{id:"next-key-锁"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#next-key-锁"}},[t._v("#")]),t._v(" Next-key 锁")]),t._v(" "),e("p",[t._v("Next-Key 锁是 MySQL 的 "),e("code",[t._v("InnoDB")]),t._v(" 存储引擎的一种锁实现。")]),t._v(" "),e("p",[t._v("MVCC 不能解决幻读问题，"),e("strong",[t._v("Next-Key 锁就是为了解决幻读问题")]),t._v("。在可重复读（"),e("code",[t._v("REPEATABLE READ")]),t._v("）隔离级别下，使用 "),e("strong",[t._v("MVCC + Next-Key 锁")]),t._v(" 可以解决幻读问题。")]),t._v(" "),e("p",[t._v("另外，根据针对 SQL 语句检索条件的不同，加锁又有以下三种情形需要我们掌握。")]),t._v(" "),e("ul",[e("li",[e("code",[t._v("Record Lock")]),t._v(" - "),e("strong",[t._v("行锁对索引项加锁，若没有索引则使用表锁")]),t._v("。")]),t._v(" "),e("li",[e("code",[t._v("Gap Lock")]),t._v(" - 对索引项之间的间隙加锁。锁定索引之间的间隙，但是不包含索引本身。例如当一个事务执行以下语句，其它事务就不能在 t.c 中插入 15。"),e("code",[t._v("SELECT c FROM t WHERE c BETWEEN 10 and 20 FOR UPDATE;")])]),t._v(" "),e("li",[e("code",[t._v("Next-key lock")]),t._v(" -它是 "),e("code",[t._v("Record Lock")]),t._v(" 和 "),e("code",[t._v("Gap Lock")]),t._v(" 的结合，不仅锁定一个记录上的索引，也锁定索引之间的间隙。它锁定一个前开后闭区间。")])]),t._v(" "),e("p",[t._v("索引分为主键索引和非主键索引两种，如果一条 SQL 语句操作了主键索引，MySQL 就会锁定这条主键索引；如果一条语句操作了非主键索引，MySQL 会先锁定该非主键索引，再锁定相关的主键索引。在 "),e("code",[t._v("UPDATE")]),t._v("、"),e("code",[t._v("DELETE")]),t._v(" 操作时，MySQL 不仅锁定 "),e("code",[t._v("WHERE")]),t._v(" 条件扫描过的所有索引记录，而且会锁定相邻的键值，即所谓的 "),e("code",[t._v("next-key lock")]),t._v("。")]),t._v(" "),e("p",[t._v("当两个事务同时执行，一个锁住了主键索引，在等待其他相关索引。另一个锁定了非主键索引，在等待主键索引。这样就会发生死锁。发生死锁后，"),e("code",[t._v("InnoDB")]),t._v(" 一般都可以检测到，并使一个事务释放锁回退，另一个获取锁完成事务。")]),t._v(" "),e("h2",{attrs:{id:"参考资料"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#参考资料"}},[t._v("#")]),t._v(" 参考资料")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://book.douban.com/subject/23008813/",target:"_blank",rel:"noopener noreferrer"}},[t._v("《高性能 MySQL》"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/CyC2018/Interview-Notebook/blob/master/notes/%E6%95%B0%E6%8D%AE%E5%BA%93%E7%B3%BB%E7%BB%9F%E5%8E%9F%E7%90%86.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库系统原理"),e("OutboundLink")],1)]),t._v(" "),e("li",[e("a",{attrs:{href:"https://juejin.im/post/5b55b842f265da0f9e589e79",target:"_blank",rel:"noopener noreferrer"}},[t._v("数据库两大神器【索引和锁】"),e("OutboundLink")],1)])])])}),[],!1,null,null,null);_.default=s.exports}}]);