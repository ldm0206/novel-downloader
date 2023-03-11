// ==UserScript==
// @name           小说下载器
// @description    一个可扩展的通用型小说下载器。
// @version        5.0.816
// @author         bgme
// @supportURL     https://github.com/404-novel-project/novel-downloader
// @exclude        *://www.jjwxc.net/onebook.php?novelid=*&chapterid=*
// @exclude        *://m.yuzhaige.cc/tag/*/
// @exclude        *://m.yuzhaige.cc/sort/*/
// @exclude        *://m.yuzhaige.cc/top/*/
// @exclude        *://m.yuzhaige.cc/full/*/
// @exclude        *://m.yuzhaige.cc/book/*/
// @exclude        *://m.yushuge123.com/tag/*/
// @exclude        *://m.yushuge123.com/sort/*/
// @exclude        *://m.yushuge123.com/top/*/
// @exclude        *://m.yushuge123.com/full/*/
// @exclude        *://m.yushuge123.com/book/*/
// @exclude        *://m.haitangtxt.net/tag/*/
// @exclude        *://m.haitangtxt.net/sort/*/
// @exclude        *://m.haitangtxt.net/top/*/
// @exclude        *://m.haitangtxt.net/full/*/
// @exclude        *://m.haitangtxt.net/book/*/
// @exclude        *://www.linovel.net/book/*/*.html
// @exclude        *://www.qimao.com/shuku/*-*/
// @exclude        *://www.trxs.cc/tongren/*/*.html
// @exclude        *://www.trxs.me/tongren/*/*.html
// @exclude        *://www.trxs123.com/tongren/*/*.html
// @exclude        *://www.jpxs123.com/*/*/*.html
// @exclude        *://www.tongrenquan.org/tongren/*/*.html
// @exclude        *://www.tongrenquan.me/tongren/*/*.html
// @exclude        *://trxs.cc/tongren/*/*.html
// @exclude        *://trxs.me/tongren/*/*.html
// @exclude        *://trxs123.com/tongren/*/*.html
// @exclude        *://jpxs123.com/*/*/*.html
// @exclude        *://tongrenquan.org/tongren/*/*.html
// @exclude        *://tongrenquan.me/tongren/*/*.html
// @exclude        *://www.25zw.org/lastupdate/
// @exclude        *://www.25zw.org/postdate/
// @exclude        *://www.25zw.org/monthvisit/
// @exclude        *://www.25zw.org/goodnum/
// @exclude        *://www.25zw.org/goodnew/
// @exclude        *://dijiuben.com/*_*/*.html
// @exclude        *://ncode.syosetu.com/*/*/
// @exclude        *://novel18.syosetu.com/*/*/
// @exclude        *://manhua.dmzj.com/
// @exclude        *://houhuayuan.vip/
// @exclude        *://book.sfacg.com/Novel/*/*/*/
// @exclude        *://www.alphapolis.co.jp/novel/*/*/episode/*
// @exclude        *://novelup.plus/story/*/*
// @exclude        *://www.linovelib.com/novel/*/*.html
// @exclude        *://w.linovelib.com/novel/*/*.html
// @match          *://book.sfacg.com/Novel/*/MainIndex/
// @match          *://book.sfacg.com/Novel/*/
// @match          *://m.sfacg.com/b/*/
// @match          *://book.qidian.com/info/*
// @match          *://www.jjwxc.net/onebook.php?novelid=*
// @match          *://www.gongzicp.com/novel-*.html
// @match          *://m.gongzicp.com/novel-*.html
// @match          *://book.zongheng.com/showchapter/*.html
// @match          *://book.zongheng.com/book/*.html
// @match          *://huayu.zongheng.com/showchapter/*.html
// @match          *://huayu.zongheng.com/book/*.html
// @match          *://www.linovel.net/book/*.html
// @match          *://www.17k.com/list/*.html
// @match          *://www.17k.com/book/*.html
// @match          *://www.shuhai.com/book/*.htm
// @match          *://mm.shuhai.com/book/*.htm
// @match          *://www.tadu.com/book/*
// @match          *://www.qimao.com/shuku/*/
// @match          *://sosad.fun/threads/*/profile*
// @match          *://wenzhan.org/threads/*/profile*
// @match          *://sosadfun.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://xn--pxtr7m.com/threads/*/profile*
// @match          *://xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://xn--pxtr7m.net/threads/*/profile*
// @match          *://sosadfun.link/threads/*/profile*
// @match          *://www.sosad.fun/threads/*/profile*
// @match          *://www.wenzhan.org/threads/*/profile*
// @match          *://www.sosadfun.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.com/threads/*/profile*
// @match          *://www.xn--pxtr7m.com/threads/*/profile*
// @match          *://www.xn--pxtr7m5ny.net/threads/*/profile*
// @match          *://www.xn--pxtr7m.net/threads/*/profile*
// @match          *://www.sosadfun.link/threads/*/profile*
// @match          *://www.uukanshu.com/b/*/
// @match          *://www.yiruan.la/article/*.html
// @match          *://www.ishuquge.org/txt/*/index.html
// @match          *://wap.ishuquge.org/s/*.html
// @match          *://wap.ishuquge.org/d/*.html
// @match          *://www.xkzw.org/xkzw*/
// @match          *://www.lewenn.net/lw*/
// @match          *://www.266ks.com/book/*/
// @match          *://www.266ks.com/book/*/index*.html
// @match          *://www.hetushu.com/book/*/index.html
// @match          *://hetushu.com/book/*/index.html
// @match          *://www.gashuw.com/biquge_*/
// @match          *://www.1pwx.com/*.htm
// @match          *://www.81book.com/book/*/
// @match          *://www.81zw.com/book/*/
// @match          *://m.yushuge123.com/*/*/
// @match          *://www.wanben.info/*/
// @match          *://m.wanben.info/*/
// @match          *://www.idejian.com/book/*/
// @match          *://www.wenku8.net/novel/*/*/index.htm
// @match          *://www.wenku8.net/book/*.htm
// @match          *://www.dmzj.com/info/*.html
// @match          *://manhua.dmzj.com/*
// @match          *://www.westnovel.com/*/*/
// @match          *://www.mht99.com/*/
// @match          *://www.banzhuer.org/*_*/
// @match          *://www.xbiquge.so/book/*/
// @match          *://www.007zw.com/shuzhai/*/
// @match          *://www.linovelib.com/novel/*/catalog
// @match          *://www.linovelib.com/novel/*.html
// @match          *://w.linovelib.com/novel/*.html
// @match          *://www.luoqiuzw.com/book/*/
// @match          *://www.yibige.cc/*/
// @match          *://www.fushuwang.org/*/*/*/*.html
// @match          *://www.fushuwang.org/*/*/*/*.html?*
// @match          *://www.fushuwang.org/*/*/*.html
// @match          *://www.fushuwang.org/*/*/*.html?*
// @match          *://www.soxscc.net/*/
// @match          *://www.soxscc.org/*/
// @match          *://www.soxs.cc/*/
// @match          *://www.soxscc.cc/*/
// @match          *://www.soshuwu.com/*/
// @match          *://www.soxscc.net/book/*.html
// @match          *://www.soxscc.org/book/*.html
// @match          *://www.soxs.cc/book/*.html
// @match          *://www.soxscc.cc/book/*.html
// @match          *://www.soshuwu.com/book/*.html
// @match          *://www.shubaowa.org/*_*/
// @match          *://www.fuguoduxs.com/*_*/
// @match          *://www.630shu.net/shu/*.html
// @match          *://www.trxs.cc/tongren/*.html
// @match          *://www.trxs.me/tongren/*.html
// @match          *://www.trxs123.com/tongren/*.html
// @match          *://www.jpxs123.com/*/*.html
// @match          *://www.tongrenquan.org/tongren/*.html
// @match          *://www.tongrenquan.me/tongren/*.html
// @match          *://trxs.cc/tongren/*.html
// @match          *://trxs.me/tongren/*.html
// @match          *://trxs123.com/tongren/*.html
// @match          *://jpxs123.com/*/*.html
// @match          *://tongrenquan.org/tongren/*.html
// @match          *://tongrenquan.me/tongren/*.html
// @match          *://www.256wenku.com/read/*/index.html
// @match          *://www.256wenku.com/read/*/
// @match          *://www.biquge66.com/biquge*/
// @match          *://*.lofter.com/
// @match          *://*.lofter.com/?page=*
// @match          *://www.shubl.com/book/book_detail/*
// @match          *://m.haitangtxt.net/*/*/
// @match          *://ebook.longmabook.com/*
// @match          *://www.longmabookcn.com/*
// @match          *://ebook.lmbooks.com/*
// @match          *://www.lmebooks.com/*
// @match          *://www.haitbook.com/*
// @match          *://www.htwhbook.com/*
// @match          *://www.myhtebook.com/*
// @match          *://www.lovehtbooks.com/*
// @match          *://www.myhtebooks.com/*
// @match          *://www.myhtlmebook.com/*
// @match          *://jp.myhtebook.com/*
// @match          *://jp.myhtlmebook.com/*
// @match          *://ebook.urhtbooks.com/*
// @match          *://www.urhtbooks.com/*
// @match          *://www.newhtbook.com/*
// @match          *://www.lvhtebook.com/*
// @match          *://jp.lvhtebook.com/*
// @match          *://www.htlvbooks.com/*
// @match          *://dijiuben.com/*_*
// @match          *://www.biquzw.la/*_*/
// @match          *://www.25zw.org/*/
// @match          *://www.tycqzw.com/*_*/
// @match          *://www.kanunu8.com/*
// @match          *://www.ciyuanji.com/bookDetails/*
// @match          *://ciyuanji.com/bookDetails/*
// @match          *://m.wanben.org/*/
// @match          *://www.wanben.org/*/
// @match          *://www.ranwen.la/files/article/*/*/
// @match          *://www.wangshuge.la/books/*/*/
// @match          *://m.baihexs.com/info-*/
// @match          *://www.quanshuzhai.com/book/*.html
// @match          *://masiro.me/admin/novelView?novel_id=*
// @match          *://www.pixiv.net/novel/show.php?*
// @match          *://www.pixiv.net/novel/series/*
// @match          *://kakuyomu.jp/works/*
// @match          *://ncode.syosetu.com/*/
// @match          *://ncode.syosetu.com/*
// @match          *://novel18.syosetu.com/*/
// @match          *://novel18.syosetu.com/*
// @match          *://syosetu.org/novel/*/
// @match          *://houhuayuan.vip/*
// @match          *://zhaoze.vip/*/
// @match          *://www.myrics.com/novels/*
// @match          *://m.lvsewx.com/ebook/*.html
// @match          *://www.lvsewx.com/ebook/*.html
// @match          *://www.shencou.com/books/read_*.html
// @match          *://www.tianyabooks.com/*/*/
// @match          *://www.aixiaxs.net/*/*/
// @match          *://jingcaiyuedu6.com/novel/*.html
// @match          *://www.hanwujinian.com/book/*
// @match          *://manga.bilibili.com/detail/mc*
// @match          *://www.aixdzs.com/novel/*
// @match          *://www.cool18.com/bbs4/index.php?*
// @match          *://www.b5200.net/*_*/
// @match          *://www.yqxsge.cc/html/*/*/index.html
// @match          *://www.18kanshu.com/*/*/info.html
// @match          *://www.18kanshu.com/module/novel/info.php?*
// @match          *://www.bixia3.com/txt/*/
// @match          *://www.xiaoshuowu.com/html/*/*/
// @match          *://www.xrzww.com/bookdetail/*
// @match          *://colorful-fantasybooks.com/module/novel/info.php?*
// @match          *://www.dizishu.com/*/*/
// @match          *://www.ibiquge.la/*/*/
// @match          *://www.akatsuki-novels.com/stories/index/novel_id~*
// @match          *://www.alphapolis.co.jp/novel/*/*
// @match          *://novelup.plus/story/*
// @match          *://www.69shu.com/txt/*.htm
// @match          *://new-read.readmoo.com/mooreader/*
// @match          *://www.iqingguo.com/book/detail/?id=*
// @match          *://www.ywggzy.com/bxwx/*/
// @match          *://www.ptwxz.net/*/
// @match          *://www.ptwxz.net/list/*/
// @match          *://www.mbtxt.la/go/*/
// @match          *://m.kuangguwenhua.com/bqg/*/
// @match          *://m.kuangguwenhua.com/bqg/11365/index_*.html
// @match          *://www.xyb3.net/5200/*/
// @match          *://hongxiuzhao.me/*.html
// @match          *://www.mijiashe.com/*/
// @match          *://www.duread8.com/book/*
// @compatible     Firefox 100+
// @compatible     Chrome 85+
// @compatible     Edge 85+
// @compatible     Opera 71+
// @compatible     Safari 13.1+
// @connect        self
// @connect        qidian.com
// @connect        yuewen.com
// @connect        kuangxiangit.com
// @connect        sinaimg.cn
// @connect        jjwxc.net
// @connect        gashuw.com
// @connect        qpic.cn
// @connect        zongheng.com
// @connect        17k.com
// @connect        uukanshu.com
// @connect        aliyuncs.com
// @connect        cdn.bcebos.com
// @connect        rs.sfacg.com
// @connect        shuhai.com
// @connect        ch-intel.com
// @connect        huluxia.com
// @connect        linovel.net
// @connect        ax1x.com
// @connect        tadu.com
// @connect        zhangyue01.com
// @connect        cdn.wtzw.com
// @connect        wenku8.com
// @connect        dmzj.com
// @connect        007zw.com
// @connect        hongyeshuzhai.com
// @connect        linovelib.com
// @connect        soxscc.net
// @connect        soxscc.org
// @connect        soxs.cc
// @connect        soxscc.cc
// @connect        soshuwu.com
// @connect        idejian.com
// @connect        postimg.cc
// @connect        lofter.com
// @connect        lf127.net
// @connect        126.net
// @connect        shubl.com
// @connect        loli.net
// @connect        alicdn.com
// @connect        toutiaoimg.com
// @connect        imgdb.cn
// @connect        meego.cn
// @connect        poco.cn
// @connect        dijiuzww.com
// @connect        dijiushu.net
// @connect        25zw.com
// @connect        sina.com.cn
// @connect        ciyuanji.com
// @connect        wanben.org
// @connect        baihexs.com
// @connect        masiro.me
// @connect        pximg.net
// @connect        mitemin.net
// @connect        myrics.com
// @connect        jingcaiyuedu6.com
// @connect        aixdzs.com
// @connect        b5200.net
// @connect        xrzww.com
// @connect        akatsuki-novels.com
// @connect        alphapolis.co.jp
// @connect        cdn.shucdn.com
// @connect        readmoo.com
// @connect        qingoo.cn
// @connect        sundung.com
// @connect        duread8.com
// @connect        *
// @description:en An scalable universal novel downloader.
// @description:ja スケーラブルなユニバーサル小説ダウンローダー。
// @downloadURL    https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.user.js
// @grant          unsafeWindow
// @grant          GM_info
// @grant          GM_xmlhttpRequest
// @grant          GM_setValue
// @grant          GM_getValue
// @grant          GM_deleteValue
// @grant          GM.info
// @grant          GM.xmlHttpRequest
// @grant          GM.setValue
// @grant          GM.getValue
// @grant          GM.deleteValue
// @homepageURL    https://github.com/404-novel-project/novel-downloader
// @icon           https://cdn.jsdelivr.net/gh/404-novel-project/novel-downloader/assets/icon.png
// @incompatible   Internet Explorer
// @license        AGPL-3.0-or-later
// @name:en        novel-downloader
// @name:ja        小説ダウンローダー
// @namespace      https://blog.bgme.me
// @noframes
// @require        https://unpkg.com/crypto-js@4.1.1/crypto-js.js#sha512-NQVmLzNy4Lr5QTrmXvq/WzTMUnRHmv7nyIT/M6LyGPBS+TIeRxZ+YQaqWxjpRpvRMQSuYPQURZz/+pLi81xXeA==
// @require        https://unpkg.com/fflate@0.7.4/umd/index.js#sha512-j3RSYniik9MPzPj4jENl0Q6Um2f3OHPK/KQP7SEh8RL/gyAGSj/PaiyUPrgY88TA5COsEx8D34hkc3vNVCFaSw==
// @require        https://unpkg.com/nunjucks@3.2.3/browser/nunjucks.min.js#sha512-Uj8C5szr1tnKPNZb6ps5gFYtTGskzsUCiwY35QP/s2JIExZl7iYNletcmOJ8D6ocuaMRi9JGVrWRePaX9raujA==
// @require        https://unpkg.com/vue@3.2.47/dist/vue.global.prod.js#sha512-GBVIWsyfp4G1USUI5RMOWK0h3Z47VIF/9Ek/og00XZ2O3DTQauGlHA88kM9SJWOxpNEvKMkLkOhM6gqFGaeEeg==
// @run-at         document-start
// @updateURL      https://github.com/yingziwu/novel-downloader/raw/gh-pages/bundle.meta.js
// ==/UserScript==
