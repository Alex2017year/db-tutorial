# Redis 实战

<!-- TOC depthFrom:2 depthTo:3 -->

- [一、应用场景](#一应用场景)
  - [缓存](#缓存)
  - [布隆过滤器](#布隆过滤器)
  - [分布式锁](#分布式锁)
- [参考资料](#参考资料)

<!-- /TOC -->

## 一、应用场景

Redis 可以应用于很多场景，这里列举几个经典的应用场景。

### 缓存

缓存是 Redis 最常见的应用场景。

Redis 有多种数据类型，以及丰富的操作命令，并且有着高性能、高可用的特性，非常适合用于分布式缓存。

> 缓存应用的基本原理，请参考 [**缓存基本原理**](https://github.com/dunwu/blog/blob/master/source/_posts/theory/cache-theory.md) 第四 ~ 第六节内容。

### BitMap 和 BloomFilter

Redis 除了 5 种基本数据类型外，还支持 BitMap 和 BloomFilter（即布隆过滤器，可以通过 Redis Module 支持）。

BitMap 和 BloomFilter 都可以用于解决缓存穿透问题。要点在于：过滤一些不可能存在的数据。

> 什么是缓存穿透，可以参考：[**缓存基本原理**](https://github.com/dunwu/blog/blob/master/source/_posts/theory/cache-theory.md)

小数据量可以用 BitMap，大数据量可以用布隆过滤器。

### 分布式锁

使用 Redis 作为分布式锁，基本要点如下：

- **互斥性** - 使用 `setnx` 抢占锁。
- **避免永远不释放锁** - 使用 `expire` 加一个过期时间，避免一直不释放锁，导致阻塞。
- **原子性** - setnx 和 expire 必须合并为一个原子指令，避免 setnx 后，机器崩溃，没来得及设置 expire，从而导致锁永不释放。

> 更多分布式锁的实现方式及细节，请参考：[分布式锁基本原理](https://github.com/dunwu/blog/blob/master/source/_posts/theory/distributed-lock-theory.md)

## 二、技巧

根据 Redis 的特性，在实际应用中，存在一些应用小技巧。

### keys 和 scan

使用 `keys` 指令可以扫出指定模式的 key 列表。

如果这个 redis 正在给线上的业务提供服务，那使用 `keys` 指令会有什么问题？

首先，Redis 是单线程的。`keys` 指令会导致线程阻塞一段时间，线上服务会停顿，直到指令执行完毕，服务才能恢复。

这个时候可以使用 `scan` 指令，`scan` 指令可以无阻塞的提取出指定模式的 key 列表，但是会有一定的重复概率，在客户端做一次去重就可以了，但是整体所花费的时间会比直接用 `keys` 指令长。

不过，增量式迭代命令也不是没有缺点的： 举个例子， 使用 `SMEMBERS` 命令可以返回集合键当前包含的所有元素， 但是对于 `SCAN` 这类增量式迭代命令来说， 因为在对键进行增量式迭代的过程中， 键可能会被修改， 所以增量式迭代命令只能对被返回的元素提供有限的保证 。

## 参考资料

- **官网**
  - [Redis 官网](https://redis.io/)
  - [Redis github](https://github.com/antirez/redis)
  - [Redis 官方文档中文版](http://redis.cn/)
- **书籍**
  - [《Redis 实战》](https://item.jd.com/11791607.html)
  - [《Redis 设计与实现》](https://item.jd.com/11486101.html)
- **教程**
  - [Redis 命令参考](http://redisdoc.com/)
- **文章**
  - [《我们一起进大厂》系列- Redis 基础](https://juejin.im/post/5db66ed9e51d452a2f15d833)
