# Mysql 索引

索引是提高 MySQL 查询性能的一个重要途径，但过多的索引可能会导致过高的磁盘使用率以及过高的内存占用，从而影响应用程序的整体性能。应当尽量避免事后才想起添加索引，因为事后可能需要监控大量的 SQL 才能定位到问题所在，而且添加索引的时间肯定是远大于初始添加索引所需要的时间，可见索引的添加也是非常有技术含量的。

接下来将向你展示一系列创建高性能索引的策略，以及每条策略其背后的工作原理。但在此之前，先了解与索引相关的一些算法和数据结构，将有助于更好的理解后文的内容。

## 一、索引简介

***索引优化应该是查询性能优化的最有效手段***。

### 索引的优缺点

B+ 树索引，按照顺序存储数据，所以 Mysql 可以用来做 ORDER BY 和 GROUP BY 操作。因为数据是有序的，所以 B+ 树也就会将相关的列值都存储在一起。最后，因为索引中存储了实际的列值，所以某些查询只使用索引就能够完成全部查询。

✔ 索引的优点：

- 索引大大减少了服务器需要扫描的数据量，从而加快检索速度。
- 支持行级锁的数据库，如 InnoDB 会在访问行的时候加锁。使用索引可以减少访问的行数，从而减少锁的竞争，提高并发。
- 索引可以帮助服务器避免排序和临时表。
- 索引可以将随机 I/O 变为顺序 I/O。
- 唯一索引可以确保每一行数据的唯一性，通过使用索引，可以在查询的过程中使用优化隐藏器，提高系统的性能。

❌ 索引的缺点：

- 创建和维护索引要耗费时间，这会随着数据量的增加而增加。
- **索引需要占用额外的物理空间**，除了数据表占数据空间之外，每一个索引还要占一定的物理空间，如果要建立组合索引那么需要的空间就会更大。
- 写操作（`INSERT`/`UPDATE`/`DELETE`）时很可能需要更新索引，导致数据库的写操作性能降低。

### 何时使用索引

> 索引能够轻易将查询性能提升几个数量级。

✔ 什么情况**适用**索引：

- 表经常进行 `SELECT` 操作；
- 表的数据量比较大；
- 列名经常出现在 `WHERE` 或连接（`JOIN`）条件中

❌ 什么情况**不适用**索引：

- **频繁写操作**（ `INSERT`/`UPDATE`/`DELETE` ）- 需要更新索引空间；
- **非常小的表** - 对于非常小的表，大部分情况下简单的全表扫描更高效。
- 列名不经常出现在 `WHERE` 或连接（`JOIN`）条件中 - 索引就会经常不命中，没有意义，还增加空间开销。
- 对于特大型表，建立和使用索引的代价将随之增长。可以考虑使用分区技术或 Nosql。

## 二、索引的类型

主流的关系型数据库一般都支持以下索引类型：

从逻辑类型上划分（即一般创建表时设置的索引类型

#### 普通索引（`INDEX`）

普通索引：最基本的索引，没有任何限制。

```sql
CREATE TABLE `table` (
    ...
    INDEX index_name (title(length))
)
```

#### 唯一索引（`UNIQUE`）

唯一索引：索引列的值必须唯一，但允许有空值。如果是组合索引，则列值的组合必须唯一。

```sql
CREATE TABLE `table` (
    ...
    UNIQUE indexName (title(length))
)
```

#### 主键索引（`PRIMARY`）

主键索引：一种特殊的唯一索引，一个表只能有一个主键，不允许有空值。一般是在建表的时候同时创建主键索引。

```sql
CREATE TABLE `table` (
    `id` int(11) NOT NULL AUTO_INCREMENT,
    ...
    PRIMARY KEY (`id`)
)
```

#### 组合索引

组合索引：多个字段上创建的索引，只有在查询条件中使用了创建索引时的第一个字段，索引才会被使用。使用组合索引时遵循最左前缀集合。

```sql
CREATE TABLE `table` (
    ...
    INDEX index_name (title(length), title(length), ...)
)
```

#### 全文索引

全文索引：主要用来查找文本中的关键字，而不是直接与索引中的值相比较。

全文索引跟其它索引大不相同，它更像是一个搜索引擎，而不是简单的 WHERE 语句的参数匹配。全文索引配合 `match against` 操作使用，而不是一般的 WHERE 语句加 LIKE。它可以在 `CREATE TABLE`，`ALTER TABLE` ，`CREATE INDEX` 使用，不过目前只有 `char`、`varchar`，`text` 列上可以创建全文索引。值得一提的是，在数据量较大时候，现将数据放入一个没有全局索引的表中，然后再用 `CREATE INDEX` 创建全文索引，要比先为一张表建立全文索引然后再将数据写入的速度快很多。

```sql
CREATE TABLE `table` (
    `content` text CHARACTER NULL,
    ...
    FULLTEXT (content)
)
```

## 三、索引的数据结构

### B 树索引

通常我们所说的索引是指`B-Tree`索引，它是目前关系型数据库中查找数据最为常用和有效的索引，大多数存储引擎都支持这种索引。使用`B-Tree`这个术语，是因为 MySQL 在`CREATE TABLE`或其它语句中使用了这个关键字，但实际上不同的存储引擎可能使用不同的数据结构，比如 InnoDB 就是使用的`B+Tree`。

`B+Tree`中的 B 是指`balance`，意为平衡。需要注意的是，B+树索引并不能找到一个给定键值的具体行，它找到的只是被查找数据行所在的页，接着数据库会把页读入到内存，再在内存中进行查找，最后得到要查找的数据。

#### 二叉查找树

在介绍`B+Tree`前，先了解一下二叉查找树，它是一种经典的数据结构，其左子树的值总是小于根的值，右子树的值总是大于根的值，如下图 ①。如果要在这课树中查找值为 5 的记录，其大致流程：先找到根，其值为 6，大于 5，所以查找左子树，找到 3，而 5 大于 3，接着找 3 的右子树，总共找了 3 次。同样的方法，如果查找值为 8 的记录，也需要查找 3 次。所以二叉查找树的平均查找次数为 $$(3 + 3 + 3 + 2 + 2 + 1) / 6 = 2.3$$ 次，而顺序查找的话，查找值为 2 的记录，仅需要 1 次，但查找值为 8 的记录则需要 6 次，所以顺序查找的平均查找次数为：$$(1 + 2 + 3 + 4 + 5 + 6) / 6 = 3.3$$ 次，因此大多数情况下二叉查找树的平均查找速度比顺序查找要快。

![img](https:////upload-images.jianshu.io/upload_images/175724-272c1245eba594f5.png?imageMogr2/auto-orient/strip|imageView2/2/w/618/format/webp)

#### 平衡二叉树

由于二叉查找树可以任意构造，同样的值，可以构造出如图 ② 的二叉查找树，显然这棵二叉树的查询效率和顺序查找差不多。若想二叉查找数的查询性能最高，需要这棵二叉查找树是平衡的，也即平衡二叉树（AVL 树）。

平衡二叉树首先需要符合二叉查找树的定义，其次必须满足任何节点的两个子树的高度差不能大于 1。显然图 ② 不满足平衡二叉树的定义，而图 ① 是一课平衡二叉树。平衡二叉树的查找性能是比较高的（性能最好的是最优二叉树），查询性能越好，维护的成本就越大。比如图 ① 的平衡二叉树，当用户需要插入一个新的值 9 的节点时，就需要做出如下变动。

![img](https:////upload-images.jianshu.io/upload_images/175724-c806af2d9defcbab.png?imageMogr2/auto-orient/strip|imageView2/2/w/538/format/webp)

##### 平衡二叉树旋转

通过一次左旋操作就将插入后的树重新变为平衡二叉树是最简单的情况了，实际应用场景中可能需要旋转多次。至此我们可以考虑一个问题，平衡二叉树的查找效率还不错，实现也非常简单，相应的维护成本还能接受，为什么 MySQL 索引不直接使用平衡二叉树？

随着数据库中数据的增加，索引本身大小随之增加，不可能全部存储在内存中，因此索引往往以索引文件的形式存储的磁盘上。这样的话，索引查找过程中就要产生磁盘 I/O 消耗，相对于内存存取，I/O 存取的消耗要高几个数量级。可以想象一下一棵几百万节点的二叉树的深度是多少？如果将这么大深度的一颗二叉树放磁盘上，每读取一个节点，需要一次磁盘的 I/O 读取，整个查找的耗时显然是不能够接受的。那么如何减少查找过程中的 I/O 存取次数？

一种行之有效的解决方法是减少树的深度，将二叉树变为 m 叉树（多路搜索树），而`B+Tree`就是一种多路搜索树。理解`B+Tree`时，只需要理解其最重要的两个特征即可：第一，所有的关键字（可以理解为数据）都存储在叶子节点（`Leaf Page`），非叶子节点（`Index Page`）并不存储真正的数据，所有记录节点都是按键值大小顺序存放在同一层叶子节点上。其次，所有的叶子节点由指针连接。如下图为高度为 2 的简化了的`B+Tree`。

![img](https:////upload-images.jianshu.io/upload_images/175724-52306456815a0919.png?imageMogr2/auto-orient/strip|imageView2/2/w/993/format/webp)

#### B+ 树

##### B+ 树特性

B+ 树索引适用于全键值、键值范围和键前缀查找，其中键前缀查找只适用于最左前缀查找。

InnoDB 的 B+Tree 索引分为主索引和辅助索引。

主索引的叶子节点 data 域记录着完整的数据记录，这种索引方式被称为聚簇索引。因为无法把数据行存放在两个不同的地方，所以一个表只能有一个聚簇索引。

<div align="center">
<img src="http://upload-images.jianshu.io/upload_images/3101171-28ea7c1487bd12bb.png"/>
</div>

辅助索引的叶子节点的 data 域记录着主键的值，因此在使用辅助索引进行查找时，需要先查找到主键值，然后再到主索引中进行查找。

<div align="center">
<img src="http://upload-images.jianshu.io/upload_images/3101171-96c6c85468df0f89.png"/>
</div>

定义一条数据记录为一个二元组 [key, data]，B-Tree 是满足下列条件的数据结构：

- 所有叶节点具有相同的深度，也就是说 B-Tree 是平衡的；
- 一个节点中的 key 从左到右非递减排列；
- 如果某个指针的左右相邻 key 分别是 keyi 和 keyi+1，且不为 null，则该指针指向节点的所有 key 大于等于 keyi 且小于等于 keyi+1。

##### B+ 树原理

> B+ 树查找算法：首先在根节点进行二分查找，如果找到则返回对应节点的 data，否则在相应区间的指针指向的节点递归进行查找。
>
> 由于插入删除新的数据记录会破坏 B-Tree 的性质，因此在插入删除时，需要对树进行一个分裂、合并、旋转等操作以保持 B-Tree 性质。

MySQL 将每个节点的大小设置为一个页的整数倍（原因下文会介绍），也就是在节点空间大小一定的情况下，每个节点可以存储更多的内结点，这样每个结点能索引的范围更大更精确。所有的叶子节点使用指针链接的好处是可以进行区间访问，比如上图中，如果查找大于 20 而小于 30 的记录，只需要找到节点 20，就可以遍历指针依次找到 25、30。如果没有链接指针的话，就无法进行区间查找。这也是 MySQL 使用`B+Tree`作为索引存储结构的重要原因。

MySQL 为何将节点大小设置为页的整数倍，这就需要理解磁盘的存储原理。磁盘本身存取就比主存慢很多，在加上机械运动损耗（特别是普通的机械硬盘），磁盘的存取速度往往是主存的几百万分之一，为了尽量减少磁盘 I/O，磁盘往往不是严格按需读取，而是每次都会预读，即使只需要一个字节，磁盘也会从这个位置开始，顺序向后读取一定长度的数据放入内存，预读的长度一般为页的整数倍。

> 页是计算机管理存储器的逻辑块，硬件及 OS 往往将主存和磁盘存储区分割为连续的大小相等的块，每个存储块称为一页（许多 OS 中，页的大小通常为 4K）。主存和磁盘以页为单位交换数据。当程序要读取的数据不在主存中时，会触发一个缺页异常，此时系统会向磁盘发出读盘信号，磁盘会找到数据的起始位置并向后连续读取一页或几页载入内存中，然后一起返回，程序继续运行。

MySQL 巧妙利用了磁盘预读原理，将一个节点的大小设为等于一个页，这样每个节点只需要一次 I/O 就可以完全载入。为了达到这个目的，每次新建节点时，直接申请一个页的空间，这样就保证一个节点物理上也存储在一个页里，加之计算机存储分配都是按页对齐的，就实现了读取一个节点只需一次 I/O。假设`B+Tree`的高度为 h，一次检索最多需要`h-1`次 I/O（根节点常驻内存），复杂度 $$O(h) = O(logmN)$$。实际应用场景中，M 通常较大，常常超过 100，因此树的高度一般都比较小，通常不超过 3。

最后简单了解下`B+Tree`节点的操作，在整体上对索引的维护有一个大概的了解，虽然索引可以大大提高查询效率，但维护索引仍要花费很大的代价，因此合理的创建索引也就尤为重要。

仍以上面的树为例，我们假设每个节点只能存储 4 个内节点。首先要插入第一个节点 28，如下图所示。

![img](https:////upload-images.jianshu.io/upload_images/175724-a862bb909a8ed6a0.png?imageMogr2/auto-orient/strip|imageView2/2/w/950/format/webp)

（1）leaf page 和 index page 都没有满

接着插入下一个节点 70，在 Index Page 中查询后得知应该插入到 50 - 70 之间的叶子节点，但叶子节点已满，这时候就需要进行也分裂的操作，当前的叶子节点起点为 50，所以根据中间值来拆分叶子节点，如下图所示。

![img](https:////upload-images.jianshu.io/upload_images/175724-ce47c776928bc6b8.png?imageMogr2/auto-orient/strip|imageView2/2/w/928/format/webp)

（2）Leaf Page 拆分

最后插入一个节点 95，这时候 Index Page 和 Leaf Page 都满了，就需要做两次拆分，如下图所示。

![img](https:////upload-images.jianshu.io/upload_images/175724-33cee181795b3dcc.png?imageMogr2/auto-orient/strip|imageView2/2/w/909/format/webp)

（3）Leaf Page 与 Index Page 拆分

拆分后最终形成了这样一颗树。

![img](https:////upload-images.jianshu.io/upload_images/175724-5289c6ec5d11216e.png?imageMogr2/auto-orient/strip|imageView2/2/w/986/format/webp)

（4）最终树

`B+Tree`为了保持平衡，对于新插入的值需要做大量的拆分页操作，而页的拆分需要 I/O 操作，为了尽可能的减少页的拆分操作，`B+Tree`也提供了类似于平衡二叉树的旋转功能。当 Leaf Page 已满但其左右兄弟节点没有满的情况下，`B+Tree`并不急于去做拆分操作，而是将记录移到当前所在页的兄弟节点上。通常情况下，左兄弟会被先检查用来做旋转操作。就比如上面第二个示例，当插入 70 的时候，并不会去做页拆分，而是左旋操作。

![img](https:////upload-images.jianshu.io/upload_images/175724-bafd2fbc93cf45ae.png?imageMogr2/auto-orient/strip|imageView2/2/w/739/format/webp)

（5）左旋操作

通过旋转操作可以最大限度的减少页分裂，从而减少索引维护过程中的磁盘的 I/O 操作，也提高索引维护效率。需要注意的是，删除节点跟插入节点类似，仍然需要旋转和拆分操作，这里就不再说明。

通过上文，相信你对`B+Tree`的数据结构已经有了大致的了解，但 MySQL 中索引是如何组织数据的存储呢？以一个简单的示例来说明，假如有如下数据表：

```sql
CREATE TABLE People(
    last_name varchar(50) not null,
    first_name varchar(50) not null,
    dob date not null,
    gender enum(`m`,`f`) not null,
    key(last_name,first_name,dob)
);
```

对于表中每一行数据，索引中包含了 last_name、first_name、dob 列的值，下图展示了索引是如何组织数据存储的。

![img](https:////upload-images.jianshu.io/upload_images/175724-3ba760afbae4a52d.png?imageMogr2/auto-orient/strip|imageView2/2/w/1006/format/webp)

可以看到，索引首先根据第一个字段来排列顺序，当名字相同时，则根据第三个字段，即出生日期来排序，正是因为这个原因，才有了索引的“最左原则”。

### 哈希索引

> Hash 索引只有精确匹配索引所有列的查询才有效。

对于每一行数据，对所有的索引列计算一个 `hashcode`。哈希索引将所有的 `hashcode` 存储在索引中，同时在 Hash 表中保存指向每个数据行的指针。

哈希结构索引的优点：

- 因为索引数据结构紧凑，所以查询速度非常快。

哈希结构索引的缺点：

- 哈希索引数据不是按照索引值顺序存储的，所以无法用于排序。
- 哈希索引不支持部分索引匹配查找。如，在数据列 (A,B) 上建立哈希索引，如果查询只有数据列 A，无法使用该索引。
- 哈希索引只支持等值比较查询，不支持任何范围查询，如 WHERE price > 100。
- 哈希索引有可能出现哈希冲突，出现哈希冲突时，必须遍历链表中所有的行指针，逐行比较，直到找到符合条件的行。

### 全文索引

MyISAM 存储引擎支持全文索引，用于查找文本中的关键词，而不是直接比较是否相等。查找条件使用 MATCH AGAINST，而不是普通的 WHERE。

全文索引一般使用倒排索引实现，它记录着关键词到其所在文档的映射。

InnoDB 存储引擎在 MySQL 5.6.4 版本中也开始支持全文索引。

### 空间数据索引

MyISAM 存储引擎支持空间数据索引（R-Tree），可以用于地理数据存储。空间数据索引会从所有维度来索引数据，可以有效地使用任意维度来进行组合查询。

必须使用 GIS 相关的函数来维护数据。

## 四、聚簇索引

聚簇索引不是一种单独的索引类型，而是一种数据存储方式。聚簇表示数据行和相邻的键紧凑地存储在一起。具体细节依赖于实现方式。如 **InnoDB 的聚簇索引实际是在同一个结构中保存了 B 树的索引和数据行**。

**聚簇表示数据行和相邻的键值紧凑地存储在一起，因为数据紧凑，所以访问快**。因为无法同时把数据行存放在两个不同的地方，所以**一个表只能有一个聚簇索引**。

若没有定义主键，InnoDB 会隐式定义一个主键来作为聚簇索引。

- **聚集索引**(`Clustered`)：表中各行的物理顺序与键值的逻辑（索引）顺序相同，每个表只能有一个。
- **非聚集索引**(`Non-clustered`)：非聚集索引指定表的逻辑顺序，也可以视为二级索引。数据存储在一个位置，索引存储在另一个位置，索引中包含指向数据存储位置的指针。可以有多个，小于 249 个。

![img](http://dunwu.test.upcdn.net/snap/20200304235424.jpg)

如上图所示，InnoDB 的聚簇索引，其叶子节点包含了行的全部数据，而非叶子节点则包含了索引列。

如果没有定义主键，InnoDB 会选择一个唯一的非空索引代替。如果没有这样的索引，InnoDB 会隐式定义一个主键来作为聚簇索引。

## 五、索引的策略

### 索引基本原则

- 索引不是越多越好，不要为所有列都创建索引。
- 要尽量避免冗余和重复索引。
- 要考虑删除未使用的索引。
- 尽量的扩展索引，不要新建索引。
- 频繁作为 `WHERE` 过滤条件的列应该考虑添加索引。

### 独立的列

**“独立的列” 是指索引列不能是表达式的一部分，也不能是函数的参数**。

如果查询中的列不是独立的列，则数据库不会使用索引。

❌ 错误示例：

```sql
SELECT actor_id FROM actor WHERE actor_id + 1 = 5;
SELECT ... WHERE TO_DAYS(current_date) - TO_DAYS(date_col) <= 10;
```

### 前缀索引

有时候需要索引很长的字符列，这会让索引变得大且慢。

解决方法是：可以索引开始的部分字符，这样可以大大节约索引空间，从而提高索引效率。但这样也会降低索引的选择性。

**索引的选择性**是指：不重复的索引值和数据表记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，查询效率也越高。

对于 `BLOB`/`TEXT`/`VARCHAR` 这种文本类型的列，必须使用前缀索引，因为数据库往往不允许索引这些列的完整长度。

要选择足够长的前缀以保证较高的选择性，同时又不能太长（节约空间）。

❌ 低效示例：

```sql
SELECT COUNT(*) AS cnt, city FROM sakila.city_demo
GROUP BY city ORDER BY cnt DESC LIMIT 10;
```

✔ 高效示例：

```sql
SELECT COUNT(*) AS cnt, LEFT(city, 3) AS pref FROM sakila.city_demo
GROUP BY city ORDER BY cnt DESC LIMIT 10;
```

### 覆盖索引

索引包含所有需要查询的字段的值。

具有以下优点：

- 因为索引条目通常远小于数据行的大小，所以若只读取索引，能大大减少数据访问量。
- 一些存储引擎（例如 MyISAM）在内存中只缓存索引，而数据依赖于操作系统来缓存。因此，只访问索引可以不使用系统调用（通常比较费时）。
- 对于 InnoDB 引擎，若辅助索引能够覆盖查询，则无需访问主索引。

### 使用索引来排序

Mysql 有两种方式可以生成排序结果：通过排序操作；或者按索引顺序扫描。

**索引最好既满足排序，又用于查找行**。这样，就可以使用索引来对结果排序。

### 最左前缀匹配原则

MySQL 会一直向右匹配直到遇到范围查询 `(>,<,BETWEEN,LIKE)` 就停止匹配。

- 索引可以简单如一个列(a)，也可以复杂如多个列(a, b, c, d)，即**联合索引**。
- 如果是联合索引，那么 key 也由多个列组成，同时，索引只能用于查找 key 是否**存在（相等）**，遇到范围查询(>、<、between、like 左匹配)等就**不能进一步匹配**了，后续退化为线性查找。
- 因此，**列的排列顺序决定了可命中索引的列数**。

**不要为每个列都创建独立索引**。

**将选择性高的列或基数大的列优先排在多列索引最前列**。但有时，也需要考虑 `WHERE` 子句中的排序、分组和范围条件等因素，这些因素也会对查询性能造成较大影响。

例如：`a = 1 and b = 2 and c > 3 and d = 4`，如果建立（a,b,c,d）顺序的索引，d 是用不到索引的，如果建立(a,b,d,c)的索引则都可以用到，a,b,d 的顺序可以任意调整。

让选择性最强的索引列放在前面，索引的选择性是指：不重复的索引值和记录总数的比值。最大值为 1，此时每个记录都有唯一的索引与其对应。选择性越高，查询效率也越高。

例如下面显示的结果中 customer_id 的选择性比 staff_id 更高，因此最好把 customer_id 列放在多列索引的前面。

```sql
SELECT COUNT(DISTINCT staff_id)/COUNT(*) AS staff_id_selectivity,
COUNT(DISTINCT customer_id)/COUNT(*) AS customer_id_selectivity,
COUNT(*)
FROM payment;
```

```batch
   staff_id_selectivity: 0.0001
customer_id_selectivity: 0.0373
               COUNT(*): 16049
```

### = 和 in 可以乱序

**不需要考虑 `=`、`IN` 等的顺序**，Mysql 会自动优化这些条件的顺序，以匹配尽可能多的索引列。

例子：如有索引(a, b, c, d)，查询条件 c > 3 and b = 2 and a = 1 and d < 4 与 a = 1 and c > 3 and b = 2 and d < 4 等顺序都是可以的，MySQL 会自动优化为 a = 1 and b = 2 and c > 3 and d < 4，依次命中 a、b、c。

## 参考资料

- [《高性能 MySQL》](https://book.douban.com/subject/23008813/)
- [数据库两大神器【索引和锁】](https://juejin.im/post/5b55b842f265da0f9e589e79)
- [MySQL 索引背后的数据结构及算法原理](http://blog.codinglabs.org/articles/theory-of-mysql-index.html)
