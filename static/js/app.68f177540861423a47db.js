webpackJsonp([1,0],[function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=o(30),n=i(s);o(74);var a=o(73),d=i(a),c=o(12),r=i(c),l=o(104),p=i(l),u=o(105),v=i(u),m=o(101),f=i(m),h=o(99),b=i(h),_=o(100),w=i(_),g=o(102),x=i(g),y=o(103),S=i(y),k=o(94),M=i(k),T=o(96),$=i(T),E=o(75),C=i(E),I=o(13),R=i(I);window.FastClick=d["default"],r["default"].use(p["default"]),r["default"].use(v["default"]),window.Swiper=C["default"],(0,n["default"])(R["default"]).forEach(function(e){return r["default"].filter(e,R["default"][e])});var H=r["default"].extend({}),B=new v["default"];B.map({"/":{component:f["default"],subRoutes:{"/":{component:M["default"]},"/theme/:id":{name:"theme",component:$["default"]}}},"/detail/:id":{name:"detail",component:w["default"]},"/comments":{component:b["default"]},"/recommenders":{component:x["default"]},"/section":{component:S["default"]}}),B.start(H,"#app")},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}var s=o(12),n=i(s);e.exports=function(e){n["default"].http.options.headers={"Content-Type":"application/x-www-form-urlencoded;charset=UTF-8;"},n["default"].http.options.emulateJSON=!0,n["default"].http({url:e.url,method:e.method,data:e.data||{}}).then(function(t){var o=t.data;e.callback(o)},function(e){})}},,,,,,function(e,t,o){var i,s;o(70),i=o(18),s=o(88),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},,,,function(e,t,o){var i,s;o(69),i=o(15),s=o(87),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},,function(e,t){"use strict";t.replaceUrl=function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},t.subStr=function(e,t){return e?t<0?e.substr(e.length+t):e.substr(0,t):""},t.formatTime=function(e,t){if(!e)return"";var o=parseInt(e);10===o.toString().length&&(o*=1e3),!t&&(t="yyyy-MM-dd");var i=new Date(o),s={"M+":i.getMonth()+1,"d+":i.getDate(),"h+":i.getHours(),"m+":i.getMinutes(),"s+":i.getSeconds(),"q+":Math.floor((i.getMonth()+3)/3),S:i.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(i.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in s)new RegExp("("+n+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?s[n]:("00"+s[n]).substr((""+s[n]).length)));return t},t.toK=function(e){if(e>999){var t=e/1e3+"";return t.substring(0,t.length-2)+"K"}return e},t.dateTime=function(e){var t="yyyyMMdd",o=new Date,i={"M+":o.getMonth()+1,"d+":o.getDate(),"h+":o.getHours(),"m+":o.getMinutes(),"s+":o.getSeconds(),"q+":Math.floor((o.getMonth()+3)/3),S:o.getMilliseconds()};/(y+)/.test(t)&&(t=t.replace(RegExp.$1,(o.getFullYear()+"").substr(4-RegExp.$1.length)));for(var s in i)new RegExp("("+s+")").test(t)&&(t=t.replace(RegExp.$1,1===RegExp.$1.length?i[s]:("00"+i[s]).substr((""+i[s]).length)));var n=e.slice(0,4),a=e.slice(4,6),d=e.slice(6,8),c=[n,a,d],r=c.join("/"),l=new Date(r).getDay(),p=["星期日","星期一","星期二","星期三","星期四","星期五","星期六"][l],u=c.join("");return u===t?"今日热闻":a+"月"+d+"日 "+p}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["item"],data:function(){return{}},attached:function(){},methods:{}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["title"],data:function(){return{}},attached:function(){},methods:{goBack:function(){window.history.back()}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["content"],data:function(){return{msg:"hello vue"}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["popularity","comments","showShare"],data:function(){return{collection:!1}},ready:function(){},methods:{goBack:function(){window.history.back()},share:function(){document.body.style.overflow="hidden",this.showShare=!this.showShare},showCollection:function(){this.collection=!this.collection}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["item"],data:function(){return{id:this.item.id}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(98),d=i(a),c=o(7),r=i(c);t["default"]={components:{slider:d["default"],listComp:r["default"]},data:function(){return{topStories:[],allStories:[],date:"",loading:!1}},ready:function(){this.getLatest()},route:{data:function(e){var t=this;t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.scrollTop}),window.addEventListener("scroll",t.getScrollList,!1),e.next()},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollList,!1),window.sessionStorage.scrollTop=window.document.body.scrollTop,e.next()}},methods:{getLatest:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/news/latest",method:"GET",callback:function(t){e.$set("topStories",t.top_stories),e.allStories.push(t),e.$set("date",t.date),e.loading=!1}})},getNews:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/news/before/"+e.date,method:"GET",callback:function(t){e.allStories.push(t),e.$set("date",t.date),e.loading=!1}})},getScrollList:function(){var e=this;console.log("offsetHeight: "+window.document.body.offsetHeight),console.log("scrollTop: "+window.document.body.scrollTop),console.log("scrollHeight: "+window.document.body.scrollHeight),window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getNews()},replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["showSidebar","title","iconDisplay"],data:function(){return{}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},showBar:function(){document.body.style.overflow="hidden",this.showSidebar=!this.showSidebar}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(7),d=i(a);t["default"]={components:{listComp:d["default"]},data:function(){return{editors:[],allStories:[],loading:!1,background:"",description:"",name:"",image_source:"",id:""}},ready:function(){this.getTheme()},route:{data:function(e){var t=this;console.log(e),"detail"!==e.from.name&&(t.getTheme(),t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.scrollTop}),window.addEventListener("scroll",t.getScrollTheme,!1),e.next())},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollTheme,!1),window.sessionStorage.scrollTop=window.document.body.scrollTop,e.next()}},methods:{getTheme:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/theme/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("allStories",t.stories),e.$set("background",t.background),e.$set("description",t.description),e.$set("name",t.name),e.$set("image_source",t.image_source),e.$set("id",e.allStories[e.allStories.length-1].id),e.loading=!1,console.log(e.allStories)}})},getThemeBefore:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/theme/"+e.$route.params.id+"/before/"+e.id,method:"GET",callback:function(t){e.$set("allStories",e.allStories.concat(t.stories)),e.$set("id",e.allStories[e.allStories.length-1].id),e.loading=!1,console.log(e.allStories)}})},getScrollTheme:function(){var e=this;console.log("offsetHeight: "+window.document.body.offsetHeight),console.log("scrollTop: "+window.document.body.scrollTop),console.log("scrollHeight: "+window.document.body.scrollHeight),window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getThemeBefore()},replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s);t["default"]={props:["showSidebar"],data:function(){return{list:[]}},ready:function(){this.getList(),new window.Swiper(".sidebar-container",{direction:"vertical",slidesPerView:"auto",mousewheelControl:!0,freeMode:!0})},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},getList:function(){var e=this;(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/themes",method:"GET",callback:function(t){e.$set("list",t.others)}})},hiddenBar:function(){document.body.style.overflow="auto",window.document.querySelector("html").style.overflow="auto",this.showSidebar=!this.showSidebar}}}},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t["default"]={props:["top_stories"],data:function(){return{}},ready:function(){new window.Swiper(".swiper-container",{pagination:".swiper-pagination",paginationClickable:!0,spaceBetween:0,centeredSlides:!0,autoplay:4e3,autoplayDisableOnInteraction:!1,observer:!0,lazyLoading:!0,resistanceRatio:0})},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(91),n=i(s),a=o(1),d=i(a);t["default"]={components:{commentsComp:n["default"]},data:function(){return{longComments:[],shortComments:[],detailId:"",extra:{},showReply:!1,loading:!1,id:""}},attached:function(){},route:{activate:function(e){var t=this;t.detailId=window.sessionStorage.detailId,t.extra=JSON.parse(window.sessionStorage.extra),t.getLongComments(),t.$nextTick(function(){window.document.body.scrollTop=0}),window.addEventListener("scroll",t.getScrollData,!1),e.next()},deactivate:function(e){var t=this;this.shortComments=[],this.longComments=[],window.removeEventListener("scroll",t.getScrollData,!1),e.next()}},methods:{goBack:function(){window.history.back()},getLongComments:function(){var e=this;e.loading=!0,(0,d["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/story/"+e.detailId+"/long-comments",method:"GET",callback:function(t){e.$set("longComments",t.comments),e.loading=!1}})},getShortComments:function(){var e=this;e.loading=!0,window.document.getElementById("short-comments-top").scrollTop=0,(0,d["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/story/"+e.detailId+"/short-comments",method:"GET",callback:function(t){e.$set("shortComments",t.comments),e.$set("id",e.shortComments[e.shortComments.length-1].id),e.loading=!1}})},getScrollData:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getShortCommentsNext()},getShortCommentsNext:function(){var e=this;e.loading=!0,(0,d["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/story/"+e.detailId+"/short-comments/before/"+e.id,method:"GET",callback:function(t){e.$set("shortComments",e.shortComments.concat(t.comments)),e.$set("id",e.shortComments[e.shortComments.length-1].id),e.loading=!1}})},show:function(){document.body.style.overflow="hidden",this.showReply=!this.showReply},hidden:function(){document.body.style.overflow="auto",this.showReply=!this.showReply}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(29),n=i(s),a=o(1),d=i(a),c=o(92),r=i(c),l=o(93),p=i(l);t["default"]={components:{detailContent:r["default"],detailHeader:p["default"]},data:function(){return{body:"",image:"",title:"",imageSource:"",section:{},thumbnail:"",extra:{},showShare:!1,recommenders:[]}},ready:function(){},route:{activate:function(e){var t=this;"/"===e.from.path?(window.sessionStorage.sectionScrollTop=0,window.sessionStorage.ifSectionReq=!0):window.sessionStorage.ifSectionReq=!1,t.getDetails(),t.getExtra(),t.$nextTick(function(){window.document.body.scrollTop=0}),e.next()},deactivate:function(e){var t=this;window.sessionStorage.detailId=t.$route.params.id,window.sessionStorage.extra=(0,n["default"])(t.extra),window.sessionStorage.sectionId=(0,n["default"])(t.section.id),t.init(),e.next()}},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},getDetails:function(){var e=this;e.loading=!0,(0,d["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/news/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("body",t.body),e.$set("image",t.image),e.$set("title",t.title),e.$set("imageSource",t.image_source),t.recommenders&&e.$set("recommenders",t.recommenders),t.section&&(e.$set("section",t.section),e.$set("thumbnail",t.section.thumbnail)),e.loading=!1}})},init:function(){var e=this;e.body="",e.image="",e.title="",e.imageSource="",e.section="",e.thumbnail="",e.extra={popularity:"···",comments:"···"},e.recommenders=[]},getExtra:function(){var e=this;(0,d["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/story-extra/"+e.$route.params.id,method:"GET",callback:function(t){e.$set("extra",t)}})},hiddenShare:function(){document.body.style.overflow="auto",this.showShare=!this.showShare}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(97),n=i(s),a=o(95),d=i(a);t["default"]={components:{sideBar:n["default"],listHeader:d["default"]},data:function(){return{loading:!1,showSidebar:!1}},attached:function(){},methods:{replace:function(e){return e.replace(/http\w{0,1}:\/\/p/g,"https://images.weserv.nl/?url=p")},showBar:function(){window.document.body.style.overflow="hidden",window.document.querySelector("html").style.overflow="hidden",this.showSidebar=!this.showSidebar},hiddenBar:function(){window.document.body.style.overflow="auto",window.document.querySelector("html").style.overflow="auto",this.showSidebar=!this.showSidebar}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(11),d=i(a);t["default"]={components:{commonHeader:d["default"]},data:function(){return{detailId:"",recommenders:[]}},attached:function(){},route:{activate:function(e){var t=this;t.detailId=window.sessionStorage.detailId,t.getRecommender(),t.$nextTick(function(){window.document.body.scrollTop=0}),e.next()},deactivate:function(e){this.recommenders=[],e.next()}},methods:{goBack:function(){window.history.back()},getRecommender:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/story/"+e.detailId+"/recommenders",method:"GET",callback:function(t){e.$set("recommenders",t.items[0].recommenders),e.loading=!1}})}}}},function(e,t,o){"use strict";function i(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),n=i(s),a=o(7),d=i(a),c=o(11),r=i(c);t["default"]={components:{listComp:d["default"],commonHeader:r["default"]},data:function(){return{stories:[],timestamp:"",name:"",sectionId:""}},route:{data:function(e){var t=this;t.sectionId=window.sessionStorage.sectionId,"true"===window.sessionStorage.ifSectionReq&&t.getLatest(),t.$nextTick(function(){window.document.body.scrollTop=window.sessionStorage.sectionScrollTop}),window.addEventListener("scroll",t.getScrollData,!1),e.next()},deactivate:function(e){var t=this;window.removeEventListener("scroll",t.getScrollData,!1),window.sessionStorage.sectionScrollTop=window.document.body.scrollTop,e.next()}},methods:{getLatest:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/3/section/"+e.sectionId,method:"GET",callback:function(t){e.stories.concat(t.stories),e.$set("stories",t.stories),e.$set("timestamp",t.timestamp),e.$set("name",t.name),e.loading=!1}})},getScrollData:function(){var e=this;window.document.body.offsetHeight+window.document.body.scrollTop+100>window.document.body.scrollHeight&&!e.loading&&e.getSection()},getSection:function(){var e=this;e.loading=!0,(0,n["default"])({url:"http://api.yatessss.com:8888/news-at/api/4/section/"+e.sectionId+"/before/"+e.timestamp,method:"GET",callback:function(t){e.$set("stories",e.stories.concat(t.stories)),e.$set("timestamp",t.timestamp),e.loading=!1}})}}}},,,,,,,,,,,,,,,,,,,,,,,,,,,,,,function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},function(e,t){},,,,function(e,t){e.exports=' <div class=detail-content v-html="content | replaceUrl" v-cloak></div> '},function(e,t){e.exports=" <div class=slider> <div class=swiper-container> <div class=swiper-wrapper> <div v-for=\"item in top_stories\" class=swiper-slide :style=\"{ backgroundImage: 'url(' + replace(item.image) + ')' }\" v-link=\"{name: 'detail', params: { id: item.id }}\"> <div class=swiper-mask></div> <h1 class=slider-title>{{item.title}}</h1> </div> </div> <div class=swiper-pagination></div> </div> </div> "},function(e,t){e.exports=" <div class=main-list id=foo> <list-header :show-sidebar.sync=showSidebar :title=\"'首页'\" :icon-display=true> </list-header> <side-bar :show-sidebar.sync=showSidebar> </side-bar> <div v-if=showSidebar class=sidebar-mask @click=hiddenBar></div> <router-view></router-view> </div> "},function(e,t){e.exports=' <slider :top_stories=topStories v-cloak="" _v-053d28e9=""></slider> <div class=list-box v-for="item in allStories" _v-053d28e9=""> <ul _v-053d28e9=""> <h2 class=title _v-053d28e9="">{{item.date | dateTime}}</h2> <list-comp v-for="subItem in item.stories" :item=subItem _v-053d28e9=""></list-comp> </ul> </div> '},function(e,t){e.exports=' <div _v-074642c8=""> <div class=comments-header _v-074642c8=""> <div class=header-icon @click=goBack _v-074642c8=""><i class=iconfont _v-074642c8=""></i></div> <div class=header-cont _v-074642c8=""><p _v-074642c8=""><span _v-074642c8="">{{extra.comments}}</span> 条点评</p></div> <div class=header-icon _v-074642c8=""><i class=iconfont _v-074642c8=""></i><span _v-074642c8="">{{popularity}}</span></div> </div> <ul class=long-comments _v-074642c8=""> <li class=long-comments-nav _v-074642c8=""><span _v-074642c8="">{{extra.long_comments}}</span> 条长评</li> <div v-if="extra.long_comments === 0" class=no-comments _v-074642c8=""> <div class=no-comments-icon _v-074642c8=""> <i class=iconfont _v-074642c8=""></i> <p _v-074642c8="">深度长评虚位以待</p> </div> </div> <comments-comp @click=show v-for="item in longComments" :item=item _v-074642c8=""></comments-comp> </ul> <ul class=short-comments id=short-comments-top _v-074642c8=""> <li class=short-comments-nav @click=getShortComments _v-074642c8=""><span _v-074642c8="">{{extra.short_comments}}</span> 条短评 <i class="iconfont down" _v-074642c8=""></i></li> <comments-comp @click=show v-for="item in shortComments" :item=item _v-074642c8=""></comments-comp> </ul> <div v-if=showReply class=mask @click=hidden _v-074642c8=""> <div class=reply-box @click.stop="" _v-074642c8=""> <p _v-074642c8="">赞同</p> <p _v-074642c8="">举报</p> <p _v-074642c8="">复制</p> <p _v-074642c8="">回复</p> </div> </div> </div> '},function(e,t){e.exports=' <div class=sidebar-box :class="{\'show-sidebar\':showSidebar}" _v-1644fd56=""> <div class="sidebar-container swiper-container-vertical swiper-container-free-mode" _v-1644fd56=""> <div class=swiper-wrapper style="transition-duration: 0ms; transform: translate3d(0px, -26.8382px, 0px)" _v-1644fd56=""> <div class="swiper-slide swiper-slide-active" _v-1644fd56=""> <div class=sidebar-header _v-1644fd56=""> <div class=user _v-1644fd56=""> <img src=http://7xqch8.com1.z0.glb.clouddn.com/%E5%A4%B4%E5%83%8F4bed2e738bd4b31ca1ce4d1787d6277f9f2ff8a8.jpg alt="" _v-1644fd56=""> <p _v-1644fd56="">用户名字</p> </div> <div class=function _v-1644fd56=""> <div class=function-sub _v-1644fd56=""> <i class=iconfont _v-1644fd56=""></i> <p _v-1644fd56="">我的收藏</p> </div> <div class=function-sub _v-1644fd56=""> <i class=iconfont _v-1644fd56=""></i> <p _v-1644fd56="">离线下载</p> </div> </div> </div> <div class=sidebar-list _v-1644fd56=""> <p v-link="{path: \'/\'}" class=sidebar-list-first @click=hiddenBar _v-1644fd56=""><i class=iconfont _v-1644fd56=""></i>首页</p> <ul class=sidebar-list-ul _v-1644fd56=""> <li class=sidebar-list-li v-for="item in list" @click=hiddenBar v-link="{name: \'theme\', params: { id: item.id }}" _v-1644fd56=""> <p _v-1644fd56="">{{item.name}}</p> <div _v-1644fd56="">+</div> </li> </ul> </div> </div> </div> </div> </div> '},function(e,t){e.exports=' <div _v-1ce7db1e=""> <common-header :title="\'推荐者\'" _v-1ce7db1e=""></common-header> <ul _v-1ce7db1e=""> <p class=title _v-1ce7db1e="">本文推荐者</p> <li v-for="item in recommenders" _v-1ce7db1e=""> <a :href="\'http://www.zhihu.com/people/\' + item.zhihu_url_token" _v-1ce7db1e=""> <div class=img-box _v-1ce7db1e=""> <img :src="item.avatar | replaceUrl" alt="" _v-1ce7db1e=""> </div> <div class=info _v-1ce7db1e=""> <p class=name _v-1ce7db1e="">{{item.name}}</p> <p class=bio _v-1ce7db1e="">{{item.bio}}</p> </div> </a> </li> </ul> </div> '},function(e,t){e.exports=' <div class=list-header _v-1e52b242=""> <div class=header-icon @click=goBack _v-1e52b242=""><i class=iconfont _v-1e52b242=""></i></div> <div class=header-cont _v-1e52b242=""></div> <div class=header-icon @click=share _v-1e52b242=""><i class=iconfont _v-1e52b242=""></i></div> <div class=header-icon @click=showCollection _v-1e52b242=""><i :class="{\'collection\': collection}" class=iconfont _v-1e52b242=""></i></div> <div class=header-icon v-link="{ path: \'/comments\'}" _v-1e52b242=""><i class=iconfont _v-1e52b242=""></i><span _v-1e52b242="">{{comments}}</span></div> <div class=header-icon _v-1e52b242=""><i class=iconfont _v-1e52b242=""></i><span _v-1e52b242="">{{popularity | toK}}</span></div> </div> '},function(e,t){e.exports=' <div _v-28c68ced=""> <common-header :title=name _v-28c68ced=""></common-header> <ul class=list _v-28c68ced=""> <list-comp v-for="item in stories" :item=item _v-28c68ced=""> </list-comp> </ul> </div> '},function(e,t){e.exports=' <div _v-2dbb6679=""> <detail-header :popularity=extra.popularity :comments=extra.comments :show-share.sync=showShare _v-2dbb6679=""></detail-header> <div class=detail-main-box _v-2dbb6679=""> <div v-if=image class="detail-img-box margin-top" :style="{ backgroundImage: \'url(\' + replace(image) + \')\' }" _v-2dbb6679=""> <div class=detail-mask _v-2dbb6679=""></div> <h1 class=detail-title _v-2dbb6679="">{{title}}</h1> <p class=detail-image-source _v-2dbb6679="">{{imageSource}}</p> </div> <div v-link="{path: \'/recommenders\' }" v-if="recommenders.length > 0" class=recommenders-box _v-2dbb6679=""> <p _v-2dbb6679="">推荐者</p> <div class=recommenders-item v-for="item in recommenders" _v-2dbb6679=""> <img :src="item.avatar | replaceUrl" alt="" _v-2dbb6679=""> </div> </div> <detail-content v-if=body :content=body _v-2dbb6679=""> </detail-content> <div v-if=section.name class=section-box v-link="{path: \'/section\'}" _v-2dbb6679=""> <div class=section-btn _v-2dbb6679=""> <img :src="thumbnail | replaceUrl" alt="" _v-2dbb6679=""> <p _v-2dbb6679="">本文来自: {{section.name}} · 合集</p> <div class=arrow _v-2dbb6679=""></div> </div> </div> </div> <div v-if=showShare class=mask @click=hiddenShare _v-2dbb6679=""> <div class=share-box @click.stop="" _v-2dbb6679=""> <p class=share-title _v-2dbb6679="">分享</p> <div class=share-content _v-2dbb6679=""> <div class=child _v-2dbb6679=""><div class="icon color-red" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">新浪微博</p></div> <div class=child _v-2dbb6679=""><div class="icon color-green-1" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">微信</p></div> <div class=child _v-2dbb6679=""><div class="icon color-green-2" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">微信朋友圈</p></div> <div class=child _v-2dbb6679=""><div class="icon color-yellow" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">QQ空间</p></div> <div class=child _v-2dbb6679=""><div class="icon color-blue-1" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">推特</p></div> <div class=child _v-2dbb6679=""><div class="icon color-blue-2" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">QQ</p></div> <div class=child _v-2dbb6679=""><div class="icon color-green-3" _v-2dbb6679=""><i class=iconfont _v-2dbb6679=""></i></div><p _v-2dbb6679="">豆瓣</p></div> </div> </div> </div> </div> '},function(e,t){e.exports=' <div class="detail-img-box margin-top" :style="{ backgroundImage: \'url(\' + replace(background) + \')\' }" _v-2e7aaf1e=""> <div class=detail-mask _v-2e7aaf1e=""></div> <h1 class=detail-title _v-2e7aaf1e="">{{description}}</h1> <p class=detail-image-source _v-2e7aaf1e="">{{imageSource}}</p> </div> <div class=list-box _v-2e7aaf1e=""> <ul _v-2e7aaf1e=""> <list-comp v-for="item in allStories" :item=item _v-2e7aaf1e=""></list-comp> </ul> </div> '},function(e,t){e.exports=' <div class=common-header _v-65367c68=""> <div class=header-icon @click=goBack _v-65367c68=""><i class=iconfont _v-65367c68=""></i></div> <div class=header-cont _v-65367c68=""><p _v-65367c68="">{{title}}</p></div> </div> '},function(e,t){e.exports=' <li v-link="{name: \'detail\', params: { id: id }}" class=list-detail-box v-cloak="" _v-bcda38d2=""> <div class=list-content-box _v-bcda38d2=""> <p _v-bcda38d2="">{{item.title}}</p> <p class=time v-if=item.display_date _v-bcda38d2="">{{item.display_date}}</p> </div> <div v-if=item.images class=list-img-box _v-bcda38d2=""> <img :src="item.images[0] | replaceUrl" alt="" _v-bcda38d2=""> <p v-if=item.multipic class=tip _v-bcda38d2=""><i class=iconfont _v-bcda38d2=""></i>多图</p> </div> </li> '},function(e,t){e.exports=' <li class=comment-li _v-da3242fe=""> <div class=img-box _v-da3242fe=""> <img :src="item.avatar | replaceUrl" alt="" _v-da3242fe=""> </div> <div class=comment-content _v-da3242fe=""> <div class=content-header _v-da3242fe=""> <div class=author _v-da3242fe=""> {{item.author}} </div> <div class=likes _v-da3242fe=""> <i class=iconfont _v-da3242fe=""></i> {{item.likes}} </div> </div> <div class=content-main _v-da3242fe=""> <p _v-da3242fe="">{{item.content}}</p> <p class=reply v-if=item.reply_to _v-da3242fe=""> //{{item.reply_to.author}}: <span _v-da3242fe=""> {{item.reply_to.content}}</span> </p> </div> <div class=content-time _v-da3242fe=""> {{item.time | formatTime "MM-dd hh:mm"}} </div> </div> </li> '},function(e,t){e.exports=' <div class=list-header _v-f156e7d6=""> <div class=header-icon @click=showBar _v-f156e7d6=""><i class=iconfont _v-f156e7d6=""></i></div> <div class=header-cont _v-f156e7d6=""><p _v-f156e7d6="">{{title}}</p></div> <div class=header-icon v-show=iconDisplay _v-f156e7d6=""><i class=iconfont _v-f156e7d6=""></i></div> <div class=header-icon v-show=iconDisplay _v-f156e7d6=""><i class=iconfont _v-f156e7d6=""></i></div> </div> '},function(e,t,o){var i,s;o(71),i=o(14),s=o(89),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(58),i=o(16),s=o(76),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(65),i=o(17),s=o(83),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(61),i=o(19),s=o(79),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(72),i=o(20),s=o(90),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(68),i=o(21),s=o(86),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(63),i=o(22),s=o(81),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(59),i=o(23),s=o(77),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(62),i=o(24),s=o(80),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(67),i=o(25),s=o(85),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(60),i=o(26),s=o(78),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(64),i=o(27),s=o(82),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)},function(e,t,o){var i,s;o(66),i=o(28),s=o(84),e.exports=i||{},e.exports.__esModule&&(e.exports=e.exports["default"]),s&&(("function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports).template=s)}]);
//# sourceMappingURL=app.68f177540861423a47db.js.map