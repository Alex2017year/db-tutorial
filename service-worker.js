/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "68857b1f2e8ef06f8660b2daa9f4d449"
  },
  {
    "url": "assets/css/0.styles.9890eb14.css",
    "revision": "d7eda5c67288211cd9a12522a63f14d8"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.d6c4ab98.js",
    "revision": "0e2b4786c12291d3b039cfd434e18a1a"
  },
  {
    "url": "assets/js/11.bcdc854a.js",
    "revision": "b53508e623c95cbd3bd7d7966fa2e3d3"
  },
  {
    "url": "assets/js/12.b1c5ccd6.js",
    "revision": "07f5858099b919edc70786e85773031f"
  },
  {
    "url": "assets/js/13.0231d26c.js",
    "revision": "bfb24878f6bfe2cd7b6a2f9ca3eea31e"
  },
  {
    "url": "assets/js/14.1353e10c.js",
    "revision": "1cf1a67c065ee03a0ba714a516a5fa20"
  },
  {
    "url": "assets/js/15.77beb8c8.js",
    "revision": "78ba6dd96b5abd8daaf8831525a71564"
  },
  {
    "url": "assets/js/16.95cb18f5.js",
    "revision": "e836a83a99c0f1e908bacfc2efbf2196"
  },
  {
    "url": "assets/js/17.391d32ef.js",
    "revision": "0520ef034c5d696426cd69a4e290ff9c"
  },
  {
    "url": "assets/js/18.962a1d95.js",
    "revision": "d9f97db71a7b112028265d88d3498011"
  },
  {
    "url": "assets/js/19.4fe1aa3c.js",
    "revision": "b8952d0946c4944521631d24e44f841a"
  },
  {
    "url": "assets/js/20.fd0add2b.js",
    "revision": "76b029da2ff7ebc7dbd173a9a2d35373"
  },
  {
    "url": "assets/js/21.9c5de472.js",
    "revision": "404860157c6f28a417d163f428731301"
  },
  {
    "url": "assets/js/22.58cf4ab2.js",
    "revision": "46d71c4ad03532fb860e76c1d65c2545"
  },
  {
    "url": "assets/js/23.4e1a22c2.js",
    "revision": "fda85d1793c00b136644c969a87f8336"
  },
  {
    "url": "assets/js/24.cc3769c6.js",
    "revision": "f383a31eb978fd64aafcb97d75378dc3"
  },
  {
    "url": "assets/js/25.e2074f54.js",
    "revision": "dab6e9e80d2bab1b21296df210e4b820"
  },
  {
    "url": "assets/js/26.befb3037.js",
    "revision": "7e4b58b303e3d0e82d24ddc8b83ac1c3"
  },
  {
    "url": "assets/js/27.b4d75a01.js",
    "revision": "4c62e6392af00c43c51ac7bf623883aa"
  },
  {
    "url": "assets/js/28.3f95cfb3.js",
    "revision": "06e4166776cda951c956aebae8f6094d"
  },
  {
    "url": "assets/js/29.8f97f10b.js",
    "revision": "beef6cd0232183b145325e2b355d2133"
  },
  {
    "url": "assets/js/30.39d20b2c.js",
    "revision": "58d5f8b74c1529565e84ceafb5741a81"
  },
  {
    "url": "assets/js/31.fc2f71e8.js",
    "revision": "5ca04e5d9df6305ea2a823b1de14e062"
  },
  {
    "url": "assets/js/32.04c7c31e.js",
    "revision": "c45900e14afaaa886895d6e01b921c3f"
  },
  {
    "url": "assets/js/33.d8a98227.js",
    "revision": "3433713e98d35dd79094344a414c7c61"
  },
  {
    "url": "assets/js/34.f3f76f91.js",
    "revision": "b317b753a01292082910d7dd563702e1"
  },
  {
    "url": "assets/js/35.9e1d9fd5.js",
    "revision": "543cc8caa12ad7a7d5405a812a7d78e6"
  },
  {
    "url": "assets/js/36.8223f208.js",
    "revision": "02873233dee816f7a80efc6052f42a21"
  },
  {
    "url": "assets/js/37.2e5375d8.js",
    "revision": "b850013afad6835c722677df51a74aba"
  },
  {
    "url": "assets/js/38.0873d536.js",
    "revision": "f70a72df3e82d4f73e9ed2890d8db8c2"
  },
  {
    "url": "assets/js/39.0daadf13.js",
    "revision": "376345cd7ed6bb4b7037e83a903a4c3f"
  },
  {
    "url": "assets/js/4.988cd28a.js",
    "revision": "08613a548c66ed1199b0466608447ab9"
  },
  {
    "url": "assets/js/40.9dff4cfb.js",
    "revision": "157ceeb5747fa43c7277f2027fddbe00"
  },
  {
    "url": "assets/js/41.f8b293a9.js",
    "revision": "06cd5d6e6506d4c422ff0575b2490556"
  },
  {
    "url": "assets/js/42.550ed28e.js",
    "revision": "3675993a30e222c058ecf9e7b8a95b16"
  },
  {
    "url": "assets/js/43.622c2625.js",
    "revision": "809510f0b4d3f51585cb1cb4da8ed205"
  },
  {
    "url": "assets/js/44.0fc5b838.js",
    "revision": "01d04f305c99e083e2fb0ad1a1e7a1b3"
  },
  {
    "url": "assets/js/45.5a4964c8.js",
    "revision": "039341f66150f6fa6b8b35dae17429ec"
  },
  {
    "url": "assets/js/46.c49dba33.js",
    "revision": "1e9ddf4f3a3fefd1c7b8bd1f336323ef"
  },
  {
    "url": "assets/js/47.53ce644b.js",
    "revision": "968cc9cee82abcdf77dccc1e743c47ce"
  },
  {
    "url": "assets/js/48.83d4e4ce.js",
    "revision": "cc21b603ab5140b589a9e04b17d360da"
  },
  {
    "url": "assets/js/49.36414ad9.js",
    "revision": "5afe7d954094b4d01af35ce7f4ad0a23"
  },
  {
    "url": "assets/js/5.97e60065.js",
    "revision": "977df4254a571ea54595bc5067f5ad49"
  },
  {
    "url": "assets/js/50.1394d06e.js",
    "revision": "995afac9bcd43b0b8fe3e8e54fae8b8d"
  },
  {
    "url": "assets/js/51.0fea6988.js",
    "revision": "f1af9adc0678183b5c33b5d1778fc49e"
  },
  {
    "url": "assets/js/52.f10ee7c4.js",
    "revision": "f7d7243f88b192289117d67cda8b8f3e"
  },
  {
    "url": "assets/js/53.f598ca7d.js",
    "revision": "fd43324b9412b7c4eda3589e45b53e72"
  },
  {
    "url": "assets/js/54.6408c8d2.js",
    "revision": "4b5c24f6c1a38c2f81dca63e393189d3"
  },
  {
    "url": "assets/js/6.0b3ccab2.js",
    "revision": "e9a28630c20f87f72dfa0946b487799c"
  },
  {
    "url": "assets/js/7.ac8df731.js",
    "revision": "6eaf4ff355d9d47917138cff30c028f7"
  },
  {
    "url": "assets/js/8.df37c1ad.js",
    "revision": "a60f9660d9baecdd62d49ad2092fda1e"
  },
  {
    "url": "assets/js/9.0382c4b4.js",
    "revision": "53ff7f65bffde5b479377802b58be1bd"
  },
  {
    "url": "assets/js/app.1637c1a8.js",
    "revision": "b4cfbf8e9aa7e3d44f60cf892e7d363b"
  },
  {
    "url": "assets/js/vendors~flowchart.8982e116.js",
    "revision": "bc7fea975a76ce449937af951712aec5"
  },
  {
    "url": "assets/js/vendors~notification.f509967c.js",
    "revision": "d6ac604e967948462bdb489a24fe79b5"
  },
  {
    "url": "images/dunwu-logo-100.png",
    "revision": "724d2445b33014d7c1ad9401d24a7571"
  },
  {
    "url": "images/dunwu-logo-200.png",
    "revision": "0a7effb33a04226ed0b9b6e68cbf694d"
  },
  {
    "url": "images/dunwu-logo-50.png",
    "revision": "9ada5bdcd34ac9c06dcd682b70a9016b"
  },
  {
    "url": "images/dunwu-logo.png",
    "revision": "f85f8cd2ab66992bc87b0bb314fdcf59"
  },
  {
    "url": "index.html",
    "revision": "dd19859f4b071e04da3a2479b3566359"
  },
  {
    "url": "middleware/flyway.html",
    "revision": "9152b476000ac73e51d55258f2480bd5"
  },
  {
    "url": "middleware/shardingsphere.html",
    "revision": "14b056c82db9ea2d5557fe23149613c8"
  },
  {
    "url": "nosql/cassandra.html",
    "revision": "41e1a5216f12a3546700c7b53e9ea85d"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats-ops.html",
    "revision": "c4d30d5ce07439f011a23063efaf53b5"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-beats.html",
    "revision": "27babfd95c3f8e1811792600cd3eb2dc"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana-ops.html",
    "revision": "f4ead74eb4aa630b2cc5810f759f4873"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-kibana.html",
    "revision": "bd011fe00abd9afb8fc7442e429ab86a"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash-ops.html",
    "revision": "493b39149c72d627784bb4fdd22da118"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-logstash.html",
    "revision": "2bc6e837e64c091047de3c06ba58ac23"
  },
  {
    "url": "nosql/elasticsearch/elastic/elastic-quickstart.html",
    "revision": "5d623282e9e9f8224cd926175c4b6263"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-api.html",
    "revision": "17f016708834b16f6c86f68a7c37829d"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-interview.html",
    "revision": "2e4eb374f3440e150ebc45f854247814"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-ops.html",
    "revision": "91ddcfb85c527458900adfa93a8d86ec"
  },
  {
    "url": "nosql/elasticsearch/elasticsearch-quickstart.html",
    "revision": "921cca5e32d0000112d1c0368fec9ae4"
  },
  {
    "url": "nosql/elasticsearch/index.html",
    "revision": "37e0a96a20576b8c1e0e2a1ac2f78a34"
  },
  {
    "url": "nosql/hbase.html",
    "revision": "93ef39b11ccd67520c9c08ab40818ba0"
  },
  {
    "url": "nosql/index.html",
    "revision": "043c2de49727fe0d6e8be534f18b028f"
  },
  {
    "url": "nosql/mongodb/mongodb-ops.html",
    "revision": "9154e35419a5c56589147da09d241486"
  },
  {
    "url": "nosql/nosql-selection.html",
    "revision": "4e30f1a81e0cee3e98ea2f361e157d71"
  },
  {
    "url": "nosql/redis/index.html",
    "revision": "b9d8d810e9809022199455f673725192"
  },
  {
    "url": "nosql/redis/redis-action.html",
    "revision": "8c7d79b89b054c141a42e5b2106c7b38"
  },
  {
    "url": "nosql/redis/redis-cluster.html",
    "revision": "e9cc905911dcd091de9573446493b0c4"
  },
  {
    "url": "nosql/redis/redis-datatype.html",
    "revision": "6b819f4a16c5f00805941568951eeb13"
  },
  {
    "url": "nosql/redis/redis-interview.html",
    "revision": "36d3b95310615126492a86fe66d9c42b"
  },
  {
    "url": "nosql/redis/redis-ops.html",
    "revision": "39f8d933740e6f7904bc8e96ca224e90"
  },
  {
    "url": "nosql/redis/redis-persistence.html",
    "revision": "030920f6d2f5ad0c66cacbbf5eb8ec01"
  },
  {
    "url": "nosql/redis/redis-pub-sub.html",
    "revision": "2c479d7d2a073cff589097ef2f63c970"
  },
  {
    "url": "nosql/redis/redis-quickstart.html",
    "revision": "1a1d638fe19822996f660b17f8316750"
  },
  {
    "url": "nosql/redis/redis-replication.html",
    "revision": "068cdd4042ff8a2f2f4693fd95494d1b"
  },
  {
    "url": "nosql/redis/redis-sentinel.html",
    "revision": "05e97a7dd4c38a45ffba80e3ef98bdb1"
  },
  {
    "url": "sql/h2.html",
    "revision": "01c7c92cca346000bf649a4c8bfebe3a"
  },
  {
    "url": "sql/index.html",
    "revision": "27342951dc65078a3fea404ddacc72ba"
  },
  {
    "url": "sql/mysql/index.html",
    "revision": "6eb6193eb12c8ff705d482facbc3ec52"
  },
  {
    "url": "sql/mysql/mysql-config.html",
    "revision": "25f9d208455c4b6be604fa7e5a23d337"
  },
  {
    "url": "sql/mysql/mysql-index.html",
    "revision": "bc609503f882b76fb0b493cfdaa0e0a8"
  },
  {
    "url": "sql/mysql/mysql-lock.html",
    "revision": "87a6d0e5f9d4168bf987f6c5b9f30446"
  },
  {
    "url": "sql/mysql/mysql-ops.html",
    "revision": "c1ce0e49ea621a1774c1533761d1ca04"
  },
  {
    "url": "sql/mysql/mysql-optimization.html",
    "revision": "551b97b0df46420e45b2910ad120dee5"
  },
  {
    "url": "sql/mysql/mysql-quickstart.html",
    "revision": "4481c0437b8d9baaaa1488c8981fc8f3"
  },
  {
    "url": "sql/mysql/mysql-theory.html",
    "revision": "b4c90393fb2c3459dd4eb0dda616dd10"
  },
  {
    "url": "sql/mysql/mysql-transaction.html",
    "revision": "7f693000802e68b384beee6eff18108b"
  },
  {
    "url": "sql/postgresql.html",
    "revision": "f031bf1923cd89c92654c80e4a004e13"
  },
  {
    "url": "sql/sql-cheat-sheet.html",
    "revision": "effe9a3123d07806ac23eba27e0cce93"
  },
  {
    "url": "sql/sql-interview.html",
    "revision": "7ea5052b06d2de2815665a0aedc08d09"
  },
  {
    "url": "sql/sqlite.html",
    "revision": "b4495e9d6dc789bf29de95f1a335f544"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
