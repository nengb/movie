(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"05d9":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("386d");var a=i(n("75fc"));n("ac6a"),n("28a5"),n("96cf");var o=i(n("3b8d")),r=i(n("cebc")),s=i(n("85d8")),c=i(n("3184")),l=i(n("fabf")),u=i(n("ec4e")),d=i(n("e62e")),f=i(n("1ca0")),p=n("2f62"),h=(i(n("de7a")),s.default.ip,s.default.httpAddress,s.default.socketAddress,s.default.imgAddress,s.default.getHrefNew,s.default.getQueryString,s.default.getRandom),v=getApp(),b=v.globalData,m=(b.cf,b.version,{computed:(0,r.default)({},(0,p.mapState)(["user","searchHistory","version","vipList"])),components:{uniPopup:l.default,uniNoticeBar:u.default,uniSearchBar:d.default,uniLoadMore:f.default},data:function(){return{bannerList:[],navList:[{name:"高评分电影",pageSize:20,page:1,total:0,start:0,url:"top250",loadState:"more"},{name:"新电影",pageSize:20,page:1,total:0,start:0,url:"new_movies",loadState:"more"},{name:"本周口碑榜",pageSize:20,page:1,total:0,start:0,url:"weekly",loadState:"more"},{name:"北美票房榜",pageSize:20,page:1,total:0,start:0,url:"us_box",loadState:"more"},{name:"即将上映",pageSize:20,page:1,total:0,start:0,url:"coming_soon",loadState:"more"},{name:"热映",pageSize:20,page:1,total:0,start:0,url:"in_theaters",loadState:"more"}],navIndex:0,movieList:{},in_theaters:[],vipUrl:"",search:"",searchMaskState:!1}},methods:{goToManage:function(){uni.navigateTo({url:"/pages/manage/index"})},goTo:function(t){console.log(t),uni.navigateTo({url:"/pages/movie/index?id="+t})},goTohelp:function(){uni.navigateTo({url:"/pages/help/index"})},searchs:function(t){uni.navigateTo({url:"/pages/searchMovie/index?searchValue="+t.value})},searchFocus:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("searchFocus"),console.log(e),this.searchMaskState=!0;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),searchBlur:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("searchBlur"),console.log(e),this.searchMaskState=!1;case 3:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),changeNavIndex:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:this.navIndex=e,this.loadMoreData();case 2:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),filterLeShiCl:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=e.split('<a href="'),e.shift(),e.pop(),e=e.map(function(t){try{t=t.split(".html")[0]+".html"}catch(t){}return t}),e=e.join(",");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),filterAiqiyiCl:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:e=e.split('href="'),e.shift(),e=e.filter(function(t){return 0==t.indexOf("http")}),e=e.map(function(t){try{t=t.split(".html")[0]+".html"}catch(t){}return t}),e=e.join(",");case 5:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}(),loadMoreData:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){var e,n,i,o,r,s,l,u,d,f,p,v;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:if(e=this.navIndex,n=this.navList[e],"loading"!=n.loadState){t.next=4;break}return t.abrupt("return");case 4:if(this.navList[e].loadState="loading",this.movieList[e]||(this.movieList[e]=[]),i=n.pageSize,o=n.page,r=n.total,s=n.start,l=n.url,n.start=i*o,this.navList[e].start=n.start,!(n.start>=r&&r>0)){t.next=12;break}return this.navList[e].loadState="noMore",t.abrupt("return",!1);case 12:return{count:i,start:s},t.next=15,c.default[l]({count:i,start:s});case 15:if(u=t.sent,u&&u.subjects&&u.subjects.length>0&&("weekly"!=l&&"us_box"!=l||(console.log("测试"),d=[],u.subjects.forEach(function(t){d.push(t.subject)}),u.subjects=d),console.log("result.total"),console.log(u.total),u.total&&u.total>0?this.navList[e].total=u.total:(console.log("初始化"),this.navList[e].total=1,this.navList[e].start=1),this.navList[e].page++,this.movieList[e]=[].concat((0,a.default)(this.movieList[e]),(0,a.default)(u.subjects)),0==this.bannerList.length))for(f=0;f<5;f++)p=h(0,u.subjects.length-1),console.log("random",p),v=u.subjects[p],this.bannerList.push({img:v.images.large,id:v.id,title:v.title});return this.navList[e].loadState="more",t.abrupt("return",!0);case 19:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),openPopup:function(){this.$refs.popup.open()},closePopup:function(){this.vipUrl="",this.$refs.popup.close()},setVipUrl:function(t){this.vipUrl=t.target.value},getVipUrl:function(){this.copyLink(this.vipUrl)},copyLink:function(t){var e=h(0,this.vipList.length-1),n=this.vipList[e]+t;uni.setClipboardData({data:n,success:function(){uni.showModal({content:"观看链接复制成功,打开浏览器访问即可观看",showCancel:!1}),console.log("success")}})},searchMovie:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(e){var n,i;return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return n=e.target.value,console.log("333e"),console.log(e),t.next=5,c.default.search({q:n});case 5:i=t.sent,console.log("result"),console.log(i);case 8:case"end":return t.stop()}},t,this)}));function e(e){return t.apply(this,arguments)}return e}()},onLoad:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:console.log("result"),this.loadMoreData();case 2:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onShow:function(){},onReady:function(){},onHide:function(){},onUnload:function(){},onResize:function(){},onPullDownRefresh:function(){var t=(0,o.default)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){while(1)switch(t.prev=t.next){case 0:return this.page=0,this.movieList={},this.navList=[{name:"高评分电影",pageSize:20,page:1,total:0,start:0,url:"top250",loadState:"more"},{name:"新电影",pageSize:20,page:1,total:0,start:0,url:"new_movies",loadState:"more"},{name:"本周口碑榜",pageSize:20,page:1,total:0,start:0,url:"weekly",loadState:"more"},{name:"北美票房榜",pageSize:20,page:1,total:0,start:0,url:"us_box",loadState:"more"},{name:"即将上映",pageSize:20,page:1,total:0,start:0,url:"coming_soon",loadState:"more"},{name:"热映",pageSize:20,page:1,total:0,start:0,url:"in_theaters",loadState:"more"}],t.next=5,this.loadMoreData();case 5:uni.stopPullDownRefresh();case 6:case"end":return t.stop()}},t,this)}));function e(){return t.apply(this,arguments)}return e}(),onReachBottom:function(){this.loadMoreData()},onTabItemTap:function(t,e,n){},onShareAppMessage:function(){return console.log("111111111111"),{title:"点击这里免费看所有电影电视剧哦",path:"/pages/index/index",imageUrl:"cloud://online-8p7is.6f6e-online-8p7is-1301036972/share1.jpg"}},onPageScroll:function(t){},onNavigationBarButtonTap:function(t){},onBackPress:function(t){},onNavigationBarSearchInputChanged:function(){},onNavigationBarSearchInputConfirmed:function(){},onNavigationBarSearchInputClicked:function(){}});e.default=m},"0cc4":function(t,e,n){"use strict";n.r(e);var i=n("3187"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"2d92":function(t,e,n){"use strict";var i={"uni-icons":n("18f5").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.show?n("v-uni-view",{staticClass:"uni-noticebar",style:{backgroundColor:t.backgroundColor},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}},[!0===t.showClose||"true"===t.showClose?n("uni-icons",{staticClass:"uni-noticebar-close",attrs:{type:"closefill",color:t.color,size:"12"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.close.apply(void 0,arguments)}}}):t._e(),!0===t.showIcon||"true"===t.showIcon?n("uni-icons",{staticClass:"uni-noticebar-icon",attrs:{type:"sound",color:t.color,size:"14"}}):t._e(),n("v-uni-view",{ref:"textBox",staticClass:"uni-noticebar__content-wrapper",class:{"uni-noticebar__content-wrapper--scrollable":t.scrollable,"uni-noticebar__content-wrapper--single":!t.scrollable&&(t.single||t.moreText)}},[n("v-uni-view",{staticClass:"uni-noticebar__content",class:{"uni-noticebar__content--scrollable":t.scrollable,"uni-noticebar__content--single":!t.scrollable&&(t.single||t.moreText)},attrs:{id:t.elIdBox}},[n("v-uni-text",{ref:"animationEle",staticClass:"uni-noticebar__content-text",class:{"uni-noticebar__content-text--scrollable":t.scrollable,"uni-noticebar__content-text--single":!t.scrollable&&(t.single||t.moreText)},style:{color:t.color,width:t.wrapWidth+"px",animationDuration:t.animationDuration,"-webkit-animationDuration":t.animationDuration,animationPlayState:t.webviewHide?"paused":t.animationPlayState,"-webkit-animationPlayState":t.webviewHide?"paused":t.animationPlayState,animationDelay:t.animationDelay,"-webkit-animationDelay":t.animationDelay},attrs:{id:t.elId}},[t._v(t._s(t.text))])],1)],1),!0===t.showGetMore||"true"===t.showGetMore?n("v-uni-view",{staticClass:"uni-noticebar__more",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.clickMore.apply(void 0,arguments)}}},[t.moreText?n("v-uni-text",{staticClass:"uni-noticebar__more-text",style:{color:t.moreColor}},[t._v(t._s(t.moreText))]):t._e(),n("uni-icons",{attrs:{type:"arrowright",color:t.moreColor,size:"14"}})],1):t._e()],1):t._e()},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},3187:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac6a"),n("5df3");var a=i(n("795b"));n("6b54"),n("c5f6");var o=i(n("18f5")),r={name:"UniNoticeBar",components:{uniIcons:o.default},props:{text:{type:String,default:""},moreText:{type:String,default:""},backgroundColor:{type:String,default:"#fffbe8"},speed:{type:Number,default:100},color:{type:String,default:"#de8c17"},moreColor:{type:String,default:"#999999"},single:{type:[Boolean,String],default:!1},scrollable:{type:[Boolean,String],default:!1},showIcon:{type:[Boolean,String],default:!1},showGetMore:{type:[Boolean,String],default:!1},showClose:{type:[Boolean,String],default:!1}},data:function(){var t="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36)),e="Uni_".concat(Math.ceil(1e6*Math.random()).toString(36));return{textWidth:0,boxWidth:0,wrapWidth:"",webviewHide:!1,elId:t,elIdBox:e,show:!0,animationDuration:"none",animationPlayState:"paused",animationDelay:"0s"}},mounted:function(){var t=this;this.$nextTick(function(){t.initSize()})},methods:{initSize:function(){var t=this;if(this.scrollable){var e=[],n=new a.default(function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elId)).boundingClientRect().exec(function(n){t.textWidth=n[0].width,e()})}),i=new a.default(function(e,n){uni.createSelectorQuery().in(t).select("#".concat(t.elIdBox)).boundingClientRect().exec(function(n){t.boxWidth=n[0].width,e()})});e.push(n),e.push(i),a.default.all(e).then(function(){t.animationDuration="".concat(t.textWidth/t.speed,"s"),t.animationDelay="-".concat(t.boxWidth/t.speed,"s"),setTimeout(function(){t.animationPlayState="running"},1e3)})}},loopAnimation:function(){},clickMore:function(){this.$emit("getmore")},close:function(){this.show=!1,this.$emit("close")},onClick:function(){this.$emit("click")}}};e.default=r},"40ef":function(t,e,n){var i=n("7fd6");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("59842d02",i,!0,{sourceMap:!1,shadowMode:!1})},"42ed":function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=i(n("5721")),o={name:"UniPopup",components:{uniTransition:a.default},props:{animation:{type:Boolean,default:!0},type:{type:String,default:"center"},maskClick:{type:Boolean,default:!0}},data:function(){return{duration:300,ani:[],showPopup:!1,showTrans:!1,maskClass:{position:"fixed",bottom:0,top:0,left:0,right:0,backgroundColor:"rgba(0, 0, 0, 0.4)"},transClass:{position:"fixed",left:0,right:0}}},watch:{type:{handler:function(t){switch(this.type){case"top":this.ani=["slide-top"],this.transClass={position:"fixed",left:0,right:0};break;case"bottom":this.ani=["slide-bottom"],this.transClass={position:"fixed",left:0,right:0,bottom:0};break;case"center":this.ani=["zoom-out","fade"],this.transClass={position:"fixed",display:"flex",flexDirection:"column",bottom:0,left:0,right:0,top:0,justifyContent:"center",alignItems:"center"};break}},immediate:!0}},created:function(){this.animation?this.duration=300:this.duration=0},methods:{clear:function(t){t.stopPropagation()},open:function(){var t=this;this.showPopup=!0,this.$nextTick(function(){clearTimeout(t.timer),t.timer=setTimeout(function(){t.showTrans=!0},50)}),this.$emit("change",{show:!0})},close:function(t){var e=this;this.showTrans=!1,this.$nextTick(function(){clearTimeout(e.timer),e.timer=setTimeout(function(){e.$emit("change",{show:!1}),e.showPopup=!1},300)})},onTap:function(){this.maskClick&&this.close()}}};e.default=o},"45ed":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".index[data-v-48f6f2a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;padding-bottom:150px}.index .manageBtn[data-v-48f6f2a6]{position:fixed;bottom:%?300?%;left:0}.index .search[data-v-48f6f2a6]{position:relative}.index .search .searchMask[data-v-48f6f2a6]{position:absolute;background-color:#fff;top:%?100?%;width:%?700?%;min-height:%?300?%;left:50%;margin-left:%?-350?%;z-index:999 ;border-radius:%?20?%;padding:%?20?%;box-sizing:border-box}.index .search .searchMask .searchHistoryItem[data-v-48f6f2a6]{padding:%?20?% %?20?%;border-bottom:1px solid #ebebeb}.index .navbar[data-v-48f6f2a6]{display:-webkit-box;display:-webkit-flex;display:flex;position:absolute;left:0;top:0;z-index:500;width:100%;height:50px;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;text-align:center;color:#a8a8a8;font-size:15px;box-sizing:border-box;background-color:#fff;border-bottom:%?1?% solid #dfdfdf}.index .navbar-item[data-v-48f6f2a6]{-webkit-box-flex:1;-webkit-flex:1;flex:1;padding:%?26?% 0}.index .navbar-item-active[data-v-48f6f2a6]{-webkit-transition:all .3s;transition:all .3s;border-bottom:%?10?% solid #494949;color:#494949}.index .movie-content-wrapper[data-v-48f6f2a6]{padding-top:50px}.index .help[data-v-48f6f2a6]{font-size:%?24?%;width:%?42?%;height:%?490?%;background-color:#ff6738;color:#fff;margin:%?50?% auto;padding:%?10?%;line-height:%?34?%}.index .popup[data-v-48f6f2a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;position:relative;background:#fff;min-width:%?500?%;min-height:%?500?%;overflow:hidden;border-radius:%?20?%;padding:%?50?%}.index .popup .closePopup[data-v-48f6f2a6]{position:absolute;top:%?-6?%;right:%?30?%;font-size:%?67?%;color:#000;font-weight:700}.index .popup .title[data-v-48f6f2a6]{font-size:%?40?%}.index .popup .tips[data-v-48f6f2a6]{font-size:%?28?%;color:#999}.index .popup .vipUrl[data-v-48f6f2a6]{padding-left:%?60?%;height:%?100?%;line-height:%?100?%;width:100%;margin:%?50?% 0 %?100?%;border:1px solid #efefef}.index .popup .getVipUrl[data-v-48f6f2a6]{background-color:#ff6738;height:%?100?%;line-height:%?100?%}.index .openPopup[data-v-48f6f2a6]{background-color:#ff6738;width:%?330?%;height:%?100?%;line-height:%?100?%;position:fixed;bottom:%?100?%;left:50%;margin-left:%?-165?%}.index .banner .swiper-img[data-v-48f6f2a6]{height:100%}.index .navList[data-v-48f6f2a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;white-space:nowrap;width:100% ;height:%?70?%;line-height:%?70?%}.index .navList .navItem[data-v-48f6f2a6]{padding:0 %?20?%;font-size:14px;text-align:center;display:inline-block}.index .navList .navActive[data-v-48f6f2a6]{font-weight:700;font-size:18px}.index .navList .navActive uni-text[data-v-48f6f2a6]{width:20px;border-bottom:4px solid #ff6738}.index .movieList[data-v-48f6f2a6]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-justify-content:space-around;justify-content:space-around;-webkit-flex-wrap:wrap ;flex-wrap:wrap\n}.index .movieList .item[data-v-48f6f2a6]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;width:%?220?%;position:relative}.index .movieList .item .img[data-v-48f6f2a6]{width:100%;height:%?280?%}.index .movieList .item .text[data-v-48f6f2a6]{font-size:%?24?%;text-align:center}.index .movieList .item .mask[data-v-48f6f2a6]{position:absolute;top:0;right:0;background-color:rgba(0,0,0,.5);color:#fff;width:%?75?%;height:%?40?%;font-size:%?24?%;text-align:center}",""])},"48da":function(t,e,n){"use strict";var i=n("6d24"),a=n.n(i);a.a},5721:function(t,e,n){"use strict";n.r(e);var i=n("c5e1"),a=n("6fb5");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("48da");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"059eeaec",null,!1,i["a"],r);e["default"]=c.exports},"5b60":function(t,e,n){"use strict";n.r(e);var i=n("42ed"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"5df3":function(t,e,n){"use strict";var i=n("02f4")(!0);n("01f9")(String,"String",function(t){this._t=String(t),this._i=0},function(){var t,e=this._t,n=this._i;return n>=e.length?{value:void 0,done:!0}:(t=i(e,n),this._i+=t.length,{value:t,done:!1})})},"64ab":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-noticebar[data-v-4b1c7643]{display:-webkit-box;display:-webkit-flex;display:flex;width:100%;box-sizing:border-box;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding:6px 12px;margin-bottom:10px}.uni-noticebar-close[data-v-4b1c7643]{margin-right:5px}.uni-noticebar-icon[data-v-4b1c7643]{margin-right:5px}.uni-noticebar__content-wrapper[data-v-4b1c7643]{-webkit-box-flex:1;-webkit-flex:1;flex:1;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;overflow:hidden}.uni-noticebar__content-wrapper--single[data-v-4b1c7643]{line-height:18px}.uni-noticebar__content-wrapper--scrollable[data-v-4b1c7643],.uni-noticebar__content-wrapper--single[data-v-4b1c7643]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row}.uni-noticebar__content-wrapper--scrollable[data-v-4b1c7643]{position:relative;height:18px}.uni-noticebar__content--scrollable[data-v-4b1c7643]{-webkit-box-flex:1;-webkit-flex:1;flex:1;display:block;overflow:hidden}.uni-noticebar__content--single[data-v-4b1c7643]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-flex:0;-webkit-flex:none;flex:none;width:100%;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center}.uni-noticebar__content-text[data-v-4b1c7643]{font-size:14px;line-height:18px;word-break:break-all}.uni-noticebar__content-text--single[data-v-4b1c7643]{display:block;width:100%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.uni-noticebar__content-text--scrollable[data-v-4b1c7643]{position:absolute;display:block;height:18px;line-height:18px;white-space:nowrap;padding-left:100%;-webkit-animation:notice-data-v-4b1c7643 10s 0s linear infinite both;animation:notice-data-v-4b1c7643 10s 0s linear infinite both;-webkit-animation-play-state:paused;animation-play-state:paused}.uni-noticebar__more[data-v-4b1c7643]{display:-webkit-inline-box;display:-webkit-inline-flex;display:inline-flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;flex-direction:row;-webkit-flex-wrap:nowrap;flex-wrap:nowrap;-webkit-box-align:center;-webkit-align-items:center;align-items:center;padding-left:5px}.uni-noticebar__more-text[data-v-4b1c7643]{font-size:14px}@-webkit-keyframes notice-data-v-4b1c7643{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}@keyframes notice-data-v-4b1c7643{to{-webkit-transform:translate3d(-100%,0,0);transform:translate3d(-100%,0,0)}}',""])},"6a54":function(t,e,n){"use strict";var i=n("40ef"),a=n.n(i);a.a},"6d24":function(t,e,n){var i=n("8a68");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("40e6c880",i,!0,{sourceMap:!1,shadowMode:!1})},"6fb5":function(t,e,n){"use strict";n.r(e);var i=n("a8cf"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},"7fd6":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,'@charset "UTF-8";\n/**\r\n * 这里是uni-app内置的常用样式变量\r\n *\r\n * uni-app 官方扩展插件及插件市场（https://ext.dcloud.net.cn）上很多三方插件均使用了这些样式变量\r\n * 如果你是插件开发者，建议你使用scss预处理，并在插件代码中直接使用这些变量（无需 import 这个文件），方便用户通过搭积木的方式开发整体风格一致的App\r\n *\r\n */\n/**\r\n * 如果你是App开发者（插件使用者），你可以通过修改这些变量来定制自己的插件主题，实现自定义主题功能\r\n *\r\n * 如果你的项目同样使用了scss预处理，你也可以直接在你的 scss 代码中使用如下变量，同时无需 import 这个文件\r\n */\n/* 颜色变量 */\n/* 行为相关颜色 */\n/* 文字基本颜色 */\n/* 背景颜色 */\n/* 边框颜色 */\n/* 尺寸变量 */\n/* 文字尺寸 */\n/* 图片尺寸 */\n/* Border Radius */\n/* 水平间距 */\n/* 垂直间距 */\n/* 透明度 */\n/* 文章场景相关 */.uni-popup[data-v-04312c73]{position:fixed;top:var(--window-top);bottom:0;left:0;right:0;z-index:99}.uni-popup__mask[data-v-04312c73]{position:absolute;top:0;bottom:0;left:0;right:0;background-color:rgba(0,0,0,.4);opacity:0}.mask-ani[data-v-04312c73]{-webkit-transition-property:opacity;transition-property:opacity;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-mask[data-v-04312c73]{opacity:1}.uni-bottom-mask[data-v-04312c73]{opacity:1}.uni-center-mask[data-v-04312c73]{opacity:1}.uni-popup__wrapper[data-v-04312c73]{display:block;position:absolute}.top[data-v-04312c73]{top:0;left:0;right:0;-webkit-transform:translateY(-500px);transform:translateY(-500px)}.bottom[data-v-04312c73]{bottom:0;left:0;right:0;-webkit-transform:translateY(500px);transform:translateY(500px)}.center[data-v-04312c73]{display:-webkit-box;display:-webkit-flex;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;flex-direction:column;bottom:0;left:0;right:0;top:0;-webkit-box-pack:center;-webkit-justify-content:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;align-items:center;-webkit-transform:scale(1.2);transform:scale(1.2);opacity:0}.uni-popup__wrapper-box[data-v-04312c73]{display:block;position:relative}.content-ani[data-v-04312c73]{-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform;-webkit-transition-duration:.2s;transition-duration:.2s}.uni-top-content[data-v-04312c73]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-bottom-content[data-v-04312c73]{-webkit-transform:translateY(0);transform:translateY(0)}.uni-center-content[data-v-04312c73]{-webkit-transform:scale(1);transform:scale(1);opacity:1}',""])},"80ef":function(t,e,n){"use strict";var i={"uni-search-bar":n("e62e").default,"uni-popup":n("fabf").default,"uni-load-more":n("1ca0").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"index"},[n("v-uni-button",{staticClass:"suggest",attrs:{type:"primary"}}),n("v-uni-view",{staticClass:"search"},[t.version?t._e():n("uni-search-bar",{attrs:{radius:100,placeholder:"今天的你想看?"},on:{confirm:function(e){arguments[0]=e=t.$handleEvent(e),t.searchs.apply(void 0,arguments)},focus:function(e){arguments[0]=e=t.$handleEvent(e),t.searchFocus.apply(void 0,arguments)},blur:function(e){arguments[0]=e=t.$handleEvent(e),t.searchBlur.apply(void 0,arguments)}}}),t.searchHistory.length>0?n("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:t.searchMaskState,expression:"searchMaskState"}],staticClass:"searchMask"},t._l(t.searchHistory,function(e,i){return n("v-uni-view",{key:i,staticClass:"searchHistoryItem",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.searchs({value:e})}}},[t._v(t._s(e))])}),1):t._e()],1),t.version?t._e():n("uni-popup",{ref:"popup",attrs:{type:"center"}},[n("v-uni-view",{staticClass:"popup"},[n("v-uni-view",{staticClass:"closePopup",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.closePopup.apply(void 0,arguments)}}},[t._v("x")]),n("v-uni-view",{staticClass:"title"},[t._v("输入vip电影链接")]),n("v-uni-view",{staticClass:"tips"},[t._v("如爱奇艺，腾讯，优酷等vip电影链接（还能去广告哦）")]),n("v-uni-input",{staticClass:"vipUrl",attrs:{value:t.vipUrl,type:"text",maxlength:"-1",placeholder:"输入vip电影链接"},on:{blur:function(e){arguments[0]=e=t.$handleEvent(e),t.setVipUrl.apply(void 0,arguments)}}}),n("v-uni-button",{staticClass:"getVipUrl",attrs:{type:"primary",size:"mini"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.getVipUrl.apply(void 0,arguments)}}},[t._v("免费获取在线观看链接")])],1)],1),n("v-uni-view",{staticClass:"banner"},[n("v-uni-view",{staticClass:"uni-padding-wrap"},[n("v-uni-view",{staticClass:"page-section swiper"},[n("v-uni-view",{staticClass:"page-section-spacing"},[n("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":!0,autoplay:!1,interval:2e3,duration:500}},t._l(t.bannerList,function(e,i){return n("v-uni-swiper-item",{key:i,on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goTo(e.id)}}},[n("v-uni-image",{staticClass:"swiper-img",attrs:{src:e.img,mode:"aspectFill","lazy-load":!0}})],1)}),1)],1)],1)],1)],1),n("v-uni-scroll-view",{staticClass:"navList",attrs:{"scroll-left":0,"scroll-x":"true"}},t._l(t.navList,function(e,i){return n("v-uni-view",{key:i,class:{navItem:!0,navActive:t.navIndex==i},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.changeNavIndex(i)}}},[n("v-uni-text",[t._v(t._s(e.name))])],1)}),1),n("v-uni-view",{staticClass:"movieList"},t._l(t.movieList[t.navIndex],function(e,i){return t.movieList[t.navIndex]?n("v-uni-view",{key:i,staticClass:"item",on:{click:function(n){arguments[0]=n=t.$handleEvent(n),t.goTo(e.id)}}},[n("v-uni-image",{staticClass:"img",attrs:{src:e.images.small,mode:"aspectFill","lazy-load":!0}}),n("v-uni-text",{staticClass:"text"},[t._v(t._s(e.title))]),e.rating.average>0?n("v-uni-view",{staticClass:"mask"},[t._v(t._s(e.rating.average||0)+"分")]):t._e()],1):t._e()}),1),n("uni-load-more",{attrs:{status:t.navList[t.navIndex].loadState}}),t.user&&5==t.user.sex?n("v-uni-button",{staticClass:"manageBtn",attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.goToManage.apply(void 0,arguments)}}},[t._v("后台管理")]):t._e()],1)},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},"8a68":function(t,e,n){e=t.exports=n("2350")(!1),e.push([t.i,".uni-transition[data-v-059eeaec]{-webkit-transition-timing-function:ease;transition-timing-function:ease;-webkit-transition-duration:.3s;transition-duration:.3s;-webkit-transition-property:opacity,-webkit-transform;transition-property:opacity,-webkit-transform;transition-property:transform,opacity;transition-property:transform,opacity,-webkit-transform}.fade-in[data-v-059eeaec]{opacity:0}.fade-active[data-v-059eeaec]{opacity:1}.slide-top-in[data-v-059eeaec]{\n\t/* transition-property: transform, opacity; */-webkit-transform:translateY(-100%);transform:translateY(-100%)}.slide-top-active[data-v-059eeaec]{-webkit-transform:translateY(0);transform:translateY(0)\n\t/* opacity: 1; */}.slide-right-in[data-v-059eeaec]{-webkit-transform:translateX(100%);transform:translateX(100%)}.slide-right-active[data-v-059eeaec]{-webkit-transform:translateX(0);transform:translateX(0)}.slide-bottom-in[data-v-059eeaec]{-webkit-transform:translateY(100%);transform:translateY(100%)}.slide-bottom-active[data-v-059eeaec]{-webkit-transform:translateY(0);transform:translateY(0)}.slide-left-in[data-v-059eeaec]{-webkit-transform:translateX(-100%);transform:translateX(-100%)}.slide-left-active[data-v-059eeaec]{-webkit-transform:translateX(0);transform:translateX(0);opacity:1}.zoom-in-in[data-v-059eeaec]{-webkit-transform:scale(.8);transform:scale(.8)}.zoom-out-active[data-v-059eeaec]{-webkit-transform:scale(1);transform:scale(1)}.zoom-out-in[data-v-059eeaec]{-webkit-transform:scale(1.2);transform:scale(1.2)}",""])},a8cf:function(t,e,n){"use strict";var i=n("288e");Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("a481"),n("ac6a");var a=i(n("cebc"));n("c5f6");var o={name:"uniTransition",props:{show:{type:Boolean,default:!1},modeClass:{type:Array,default:function(){return[]}},duration:{type:Number,default:300},styles:{type:Object,default:function(){return{}}}},data:function(){return{isShow:!1,transform:"",ani:{in:"",active:""}}},watch:{show:{handler:function(t){t?this.open():this.close()},immediate:!0}},computed:{stylesObject:function(){var t=(0,a.default)({},this.styles,{"transition-duration":this.duration/1e3+"s"}),e="";for(var n in t){var i=this.toLine(n);e+=i+":"+t[n]+";"}return e}},created:function(){},methods:{change:function(){this.$emit("click",{detail:this.isShow})},open:function(){var t=this;for(var e in clearTimeout(this.timer),this.isShow=!0,this.transform="",this.ani.in="",this.getTranfrom(!1))"opacity"===e?this.ani.in="fade-in":this.transform+="".concat(this.getTranfrom(!1)[e]," ");this.$nextTick(function(){setTimeout(function(){t._animation(!0)},50)})},close:function(t){clearTimeout(this.timer),this._animation(!1)},_animation:function(t){var e=this,n=this.getTranfrom(t);for(var i in this.transform="",n)"opacity"===i?this.ani.in="fade-".concat(t?"out":"in"):this.transform+="".concat(n[i]," ");this.timer=setTimeout(function(){t||(e.isShow=!1),e.$emit("change",{detail:e.isShow})},this.duration)},getTranfrom:function(t){var e={transform:""};return this.modeClass.forEach(function(n){switch(n){case"fade":e.opacity=t?1:0;break;case"slide-top":e.transform+="translateY(".concat(t?"0":"-100%",") ");break;case"slide-right":e.transform+="translateX(".concat(t?"0":"100%",") ");break;case"slide-bottom":e.transform+="translateY(".concat(t?"0":"100%",") ");break;case"slide-left":e.transform+="translateX(".concat(t?"0":"-100%",") ");break;case"zoom-in":e.transform+="scale(".concat(t?1:.8,") ");break;case"zoom-out":e.transform+="scale(".concat(t?1:1.2,") ");break}}),e},_modeClassArr:function(t){var e=this.modeClass;if("string"!==typeof e){var n="";return e.forEach(function(e){n+=e+"-"+t+","}),n.substr(0,n.length-1)}return e+"-"+t},toLine:function(t){return t.replace(/([A-Z])/g,"-$1").toLowerCase()}}};e.default=o},aae0:function(t,e,n){"use strict";n.r(e);var i=n("05d9"),a=n.n(i);for(var o in i)"default"!==o&&function(t){n.d(e,t,function(){return i[t]})}(o);e["default"]=a.a},b1ac:function(t,e,n){"use strict";var i={"uni-transition":n("5721").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showPopup?n("v-uni-view",{staticClass:"uni-popup",on:{touchmove:function(e){e.stopPropagation(),e.preventDefault(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[n("uni-transition",{attrs:{"mode-class":["fade"],styles:t.maskClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}}),n("uni-transition",{attrs:{"mode-class":t.ani,styles:t.transClass,duration:t.duration,show:t.showTrans},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onTap.apply(void 0,arguments)}}},[n("v-uni-view",{staticClass:"uni-popup__wrapper-box",on:{click:function(e){e.stopPropagation(),arguments[0]=e=t.$handleEvent(e),t.clear.apply(void 0,arguments)}}},[t._t("default")],2)],1)],1):t._e()},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},c5e1:function(t,e,n){"use strict";var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.isShow?n("v-uni-view",{ref:"ani",staticClass:"uni-transition",class:[t.ani.in],style:"transform:"+t.transform+";"+t.stylesObject,on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},[t._t("default")],2):t._e()},o=[];n.d(e,"b",function(){return a}),n.d(e,"c",function(){return o}),n.d(e,"a",function(){return i})},d102:function(t,e,n){"use strict";var i=n("ebfb"),a=n.n(i);a.a},dba4:function(t,e,n){var i=n("64ab");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("6b0e404a",i,!0,{sourceMap:!1,shadowMode:!1})},e27b:function(t,e,n){"use strict";var i=n("dba4"),a=n.n(i);a.a},ebfb:function(t,e,n){var i=n("45ed");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var a=n("4f06").default;a("7ce73055",i,!0,{sourceMap:!1,shadowMode:!1})},ec4e:function(t,e,n){"use strict";n.r(e);var i=n("2d92"),a=n("0cc4");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("e27b");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"4b1c7643",null,!1,i["a"],r);e["default"]=c.exports},fa1d:function(t,e,n){"use strict";n.r(e);var i=n("80ef"),a=n("aae0");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("d102");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"48f6f2a6",null,!1,i["a"],r);e["default"]=c.exports},fabf:function(t,e,n){"use strict";n.r(e);var i=n("b1ac"),a=n("5b60");for(var o in a)"default"!==o&&function(t){n.d(e,t,function(){return a[t]})}(o);n("6a54");var r,s=n("f0c5"),c=Object(s["a"])(a["default"],i["b"],i["c"],!1,null,"04312c73",null,!1,i["a"],r);e["default"]=c.exports}}]);