webpackJsonp([53],{"/7A/":function(e,t){},"6k2e":function(e,t,n){"use strict";function a(e){n("k0ph")}function r(e){n("prwc")}function i(e){n("I/0a")}Object.defineProperty(t,"__esModule",{value:!0});var o=n("Dd8w"),s=n.n(o),c=n("NYxO"),u=n("ivlf"),l={created:function(){this.getBreadcrumb()},data:function(){return{levelList:null}},watch:{$route:function(){this.getBreadcrumb()}},methods:{generateTitle:u.a,getBreadcrumb:function(){var e=this.$route.matched.filter(function(e){return e.name}),t=e[0];t&&"dashboard"!==t.name&&(e=[{path:"/dashboard",name:"dashboard"}].concat(e)),this.levelList=e}}},d=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-breadcrumb",{staticClass:"app-breadcrumb",attrs:{separator:"/"}},[n("transition-group",{attrs:{name:"breadcrumb"}},e._l(e.levelList,function(t,a){return t.name?n("el-breadcrumb-item",{key:t.path},["noredirect"===t.redirect||a==e.levelList.length-1?n("span",{staticClass:"no-redirect"},[e._v("\n        "+e._s(e.generateTitle(t.name))+"\n      ")]):n("router-link",{attrs:{to:t.redirect||t.path}},[n("i",{directives:[{name:"show",rawName:"v-show",value:"dashboard"==t.name,expression:"item.name == 'dashboard'"}],staticClass:"fa fa-home"}),e._v("\n        "+e._s(e.generateTitle(t.name))+"\n      ")])],1):e._e()}))],1)},p=[],h={render:d,staticRenderFns:p},m=h,f=n("VU/8"),v=a,g=f(l,m,!1,v,"data-v-70b51a72",null),w=g.exports,k={name:"hamburger",props:{isActive:{type:Boolean,default:!1},toggleClick:{type:Function,default:null}}},y=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("svg",{staticClass:"wscn-icon hamburger",class:{"is-active":e.isActive},attrs:{t:"1492500959545",viewBox:"0 0 1024 1024",version:"1.1",xmlns:"http://www.w3.org/2000/svg","p-id":"1691","xmlns:xlink":"http://www.w3.org/1999/xlink",width:"64",height:"64"},on:{click:e.toggleClick}},[n("path",{attrs:{d:"M966.8023 568.849776 57.196677 568.849776c-31.397081 0-56.850799-25.452695-56.850799-56.850799l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 543.397081 998.200404 568.849776 966.8023 568.849776z","p-id":"1692"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 881.527125 57.196677 881.527125c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.849776 56.850799-56.849776l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.849776l0 0C1023.653099 856.07443 998.200404 881.527125 966.8023 881.527125z","p-id":"1693"}}),e._v(" "),n("path",{attrs:{d:"M966.8023 256.17345 57.196677 256.17345c-31.397081 0-56.850799-25.452695-56.850799-56.849776l0 0c0-31.397081 25.452695-56.850799 56.850799-56.850799l909.605623 0c31.397081 0 56.849776 25.452695 56.849776 56.850799l0 0C1023.653099 230.720755 998.200404 256.17345 966.8023 256.17345z","p-id":"1694"}})])])},b=[],_={render:y,staticRenderFns:b},S=_,E=n("VU/8"),T=r,M=E(k,S,!1,T,"data-v-3ffa8678",null),x=M.exports,C={components:{Breadcrumb:w,Hamburger:x},data:function(){return{}},computed:s()({},Object(c.b)(["sidebar","username","language"])),methods:{toggleSideBar:function(){this.$store.dispatch("toggleSideBar")},handleSetLanguage:function(e){this.$i18n.locale=e,this.$store.dispatch("setLanguage",e),this.$message({message:"switch language success",type:"success"})},logout:function(){this.$store.dispatch("LogOut").then(function(){location.reload()})}}},V=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[n("hamburger",{staticClass:"hamburger-container",attrs:{toggleClick:e.toggleSideBar,isActive:e.sidebar.opened}}),e._v(" "),n("breadcrumb",{staticClass:"breadcrumb-container"}),e._v(" "),n("div",{staticClass:"right-menu"},[n("el-dropdown",{staticClass:"international",on:{command:e.handleSetLanguage}},[n("div",[n("i",{staticClass:"fa fa-globe fa-2x",staticStyle:{"margin-top":"15px"}})]),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",{attrs:{command:"zh",disabled:"zh"===e.language}},[e._v("中文")]),e._v(" "),n("el-dropdown-item",{attrs:{command:"en",disabled:"en"===e.language}},[e._v("English")])],1)],1),e._v(" "),n("el-dropdown",{staticClass:"avatar-container right-menu-item"},[n("div",{staticClass:"avatar-wrapper"},[n("el-button",{attrs:{type:"success",round:"",size:"mini"}},[e._v(e._s(e.username))]),e._v(" "),n("i",{staticClass:"el-icon-caret-bottom"})],1),e._v(" "),n("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[n("router-link",{attrs:{to:"/"}},[n("el-dropdown-item",[n("i",{staticClass:"fa fa-home"}),e._v("\n            Home\n          ")])],1),e._v(" "),n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:e.logout}},[n("i",{staticClass:"fa fa-power-off"}),e._v("\n            Logout\n          ")])])],1)],1)],1)],1)},O=[],I={render:V,staticRenderFns:O},R=I,P=n("VU/8"),j=i,D=P(C,R,!1,j,"data-v-07c7148e",null);t.default=D.exports},A66B:function(e,t,n){e.exports=function(e){return function(){return n("Opzk")("./"+e+".vue")}}},AkUR:function(e,t,n){"use strict";function a(e){n("TI3O")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("6k2e"),i=n("WTox"),o=n("Vg/Y"),s=n("BoPo"),c={name:"layout",components:{Navbar:r.default,Sidebar:i.default,AppMain:s.default,TagsView:o.default},computed:{sidebar:function(){return this.$store.state.app.sidebar}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"app-wrapper",class:{hideSidebar:!e.sidebar.opened}},[n("sidebar",{staticClass:"sidebar-container"}),e._v(" "),n("div",{staticClass:"main-container"},[n("navbar"),e._v(" "),n("tags-view"),e._v(" "),n("app-main")],1)],1)},l=[],d={render:u,staticRenderFns:l},p=d,h=n("VU/8"),m=a,f=h(c,p,!1,m,"data-v-289ec47c",null);t.default=f.exports},BoPo:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={name:"AppMain",computed:{cachedViews:function(){return this.$store.state.app.cachedViews}}},r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("section",{staticClass:"app-main",staticStyle:{"min-height":"100%"}},[n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("keep-alive",{attrs:{include:e.cachedViews}},[n("router-view")],1)],1)],1)},i=[],o={render:r,staticRenderFns:i},s=o,c=n("VU/8"),u=c(a,s,!1,null,null,null);t.default=u.exports},D4uH:function(e,t,n){"use strict";function a(){return"fa-"+(s++).toString(16)}function r(e){n("cJIv")}var i={},o={name:"icon",props:{name:{type:String,validator:function(e){return e?e in i||(console.warn('Invalid prop: prop "name" is referring to an unregistered icon "'+e+'".\nPlesase make sure you have imported this icon before using it.'),!1):(console.warn('Invalid prop: prop "name" is required.'),!1)}},scale:[Number,String],spin:Boolean,inverse:Boolean,pulse:Boolean,flip:{validator:function(e){return"horizontal"===e||"vertical"===e}},label:String},data:function(){return{x:!1,y:!1,childrenWidth:0,childrenHeight:0,outerScale:1}},computed:{normalizedScale:function(){var e=this.scale;return e=void 0===e?1:Number(e),isNaN(e)||e<=0?(console.warn('Invalid prop: prop "scale" should be a number over 0.',this),this.outerScale):e*this.outerScale},klass:function(){return{"fa-icon":!0,"fa-spin":this.spin,"fa-flip-horizontal":"horizontal"===this.flip,"fa-flip-vertical":"vertical"===this.flip,"fa-inverse":this.inverse,"fa-pulse":this.pulse}},icon:function(){return this.name?i[this.name]:null},box:function(){return this.icon?"0 0 "+this.icon.width+" "+this.icon.height:"0 0 "+this.width+" "+this.height},ratio:function(){if(!this.icon)return 1;var e=this.icon,t=e.width,n=e.height;return Math.max(t,n)/16},width:function(){return this.childrenWidth||this.icon&&this.icon.width/this.ratio*this.normalizedScale||0},height:function(){return this.childrenHeight||this.icon&&this.icon.height/this.ratio*this.normalizedScale||0},style:function(){return 1!==this.normalizedScale&&{fontSize:this.normalizedScale+"em"}},raw:function(){if(!this.icon||!this.icon.raw)return null;var e=this.icon.raw,t={};return e=e.replace(/\s(?:xml:)?id=["']?([^"')\s]+)/g,function(e,n){var r=a();return t[n]=r,' id="'+r+'"'}),e=e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g,function(e,n,a,r){var i=n||r;return i&&t[i]?"#"+t[i]:e}),e}},mounted:function(){var e=this;if(!this.icon){this.$children.forEach(function(t){t.outerScale=e.normalizedScale});var t=0,n=0;this.$children.forEach(function(e){t=Math.max(t,e.width),n=Math.max(n,e.height)}),this.childrenWidth=t,this.childrenHeight=n,this.$children.forEach(function(e){e.x=(t-e.width)/2,e.y=(n-e.height)/2})}},register:function(e){for(var t in e){var n=e[t];n.paths||(n.paths=[]),n.d&&n.paths.push({d:n.d}),n.polygons||(n.polygons=[]),n.points&&n.polygons.push({points:n.points}),i[t]=n}},icons:i},s=870711,c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{class:e.klass,style:e.style,attrs:{version:"1.1",role:e.label?"img":"presentation","aria-label":e.label,x:e.x,y:e.y,width:e.width,height:e.height,viewBox:e.box}},[e._t("default",[e.icon&&e.icon.paths?e._l(e.icon.paths,function(t,a){return n("path",e._b({key:"path-"+a},"path",t,!1))}):e._e(),e._v(" "),e.icon&&e.icon.polygons?e._l(e.icon.polygons,function(t,a){return n("polygon",e._b({key:"polygon-"+a},"polygon",t,!1))}):e._e(),e._v("\b\n    "),e.icon&&e.icon.raw?[n("g",{domProps:{innerHTML:e._s(e.raw)}})]:e._e()])],2)},u=[],l={render:c,staticRenderFns:u},d=l,p=n("VU/8"),h=r,m=p(o,d,!1,h,null,null);t.a=m.exports},EG2h:function(e,t){Array.prototype.indexItem=function(e){for(var t=0;t<this.length;t++)if(this[t]===e)return t;return-1},Array.prototype.remove=function(e){var t=this.indexItem(e);t>-1&&this.splice(t,1)}},Faza:function(e,t){},"Fm+0":function(e,t){},"I/0a":function(e,t){},IcnI:function(e,t,n){"use strict";function a(e){return Object(_.a)({url:E.a.login,method:"post",data:e})}function r(){return Object(_.a)({url:E.a.logout,method:"get"})}function i(e){var t={username:e};return Object(_.a)({url:E.a.users,method:"get",params:t})}function o(e,t){return!t.authority||void 0!==e[t.authority]&&e[t.authority]}function s(e,t){return e.filter(function(e){return!!o(t,e)&&(e.children&&e.children.length&&(e.children=s(e.children,t)),!0)})}var c=n("7+uW"),u=n("NYxO"),l=n("Gu7T"),d=n.n(l),p=n("//Fk"),h=n.n(p),m=n("BO1k"),f=n.n(m),v=n("d7EF"),g=n.n(v),w=n("lbHh"),k=n.n(w),y={state:{sidebar:{opened:!+k.a.get("sidebarStatus")},language:k.a.get("language")||"zh",visitedViews:[],cachedViews:[]},mutations:{TOGGLE_SIDEBAR:function(e){e.sidebar.opened?k.a.set("sidebarStatus",1):k.a.set("sidebarStatus",0),e.sidebar.opened=!e.sidebar.opened},SET_LANGUAGE:function(e,t){e.language=t,k.a.set("language",t)},ADD_VISITED_VIEWS:function(e,t){e.visitedViews.some(function(e){return e.path===t.path})||(e.visitedViews.push({name:t.name,hidden:t.hidden,path:t.path}),t.meta.noCache||e.cachedViews.push(t.name))},DEL_VISITED_VIEWS:function(e,t){var n=!0,a=!1,r=void 0;try{for(var i,o=f()(e.visitedViews.entries());!(n=(i=o.next()).done);n=!0){var s=i.value,c=g()(s,2),u=c[0];if(c[1].path===t.path){e.visitedViews.splice(u,1);break}}}catch(e){a=!0,r=e}finally{try{!n&&o.return&&o.return()}finally{if(a)throw r}}var l=!0,d=!1,p=void 0;try{for(var h,m=f()(e.cachedViews);!(l=(h=m.next()).done);l=!0){var v=h.value;if(v===t.name){var w=e.cachedViews.indexOf(v);e.cachedViews.splice(w,1);break}}}catch(e){d=!0,p=e}finally{try{!l&&m.return&&m.return()}finally{if(d)throw p}}}},actions:{toggleSideBar:function(e){(0,e.commit)("TOGGLE_SIDEBAR")},setLanguage:function(e,t){(0,e.commit)("SET_LANGUAGE",t)},addVisitedViews:function(e,t){(0,e.commit)("ADD_VISITED_VIEWS",t)},delVisitedViews:function(e,t){var n=e.commit,a=e.state;return new h.a(function(e){n("DEL_VISITED_VIEWS",t),e([].concat(d()(a.visitedViews)))})}}},b=y,_=n("vLgD"),S=n("QmSG"),E=n.n(S),T=n("zp1X"),M={state:{token:localStorage.getItem("token"),username:localStorage.getItem("username"),groups:[],menus:void 0,eleemnts:void 0,permissionMenus:void 0,role:""},mutations:{SET_TOKEN:function(e,t){e.token=t},SET_USERNAME:function(e,t){e.username=t},SET_GROUPS:function(e,t){e.groups=t},SET_ROLE:function(e,t){e.role=t},SET_MENUS:function(e,t){e.menus=t},SET_ELEMENTS:function(e,t){e.elements=t},SET_PERMISSION_MENUS:function(e,t){e.permissionMenus=t}},actions:{Login:function(e,t){var n=e.commit;return new h.a(function(e,r){a(t).then(function(a){n("SET_TOKEN",a.data.token),n("SET_USERNAME",t.username),localStorage.setItem("username",t.username),localStorage.setItem("token",a.data.token),n("SET_MENUS",void 0),n("SET_ELEMENTS",void 0),e()}).catch(function(e){r(e)})})},GetUserInfo:function(e){var t=e.commit,n=e.state;return new h.a(function(e,a){Object(T.b)(n.username).then(function(n){var a=n.data,r=a.groups;t("SET_GROUPS",r),localStorage.setItem("groups",r),r.indexOf(S.super_group)>=0?t("SET_ROLE","super"):t("SET_ROLE","user");var i={},o=!0,s=!1,c=void 0;try{for(var u,l=f()(a.menus);!(o=(u=l.next()).done);o=!0){i[u.value]=!0}}catch(e){s=!0,c=e}finally{try{!o&&l.return&&l.return()}finally{if(s)throw c}}t("SET_MENUS",i);var d={},p=!0,h=!1,m=void 0;try{for(var v,g=f()(a.elements);!(p=(v=g.next()).done);p=!0){d[v.value]=!0}}catch(e){h=!0,m=e}finally{try{!p&&g.return&&g.return()}finally{if(h)throw m}}t("SET_ELEMENTS",d),e(n)}).catch(function(e){console.log(e),a(e)})})},LogOut:function(e){var t=e.commit,n=e.state;return new h.a(function(e,a){r(n.token).then(function(){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()}).catch(function(e){a(e)})})},FedLogOut:function(e){var t=e.commit;return new h.a(function(e){t("SET_TOKEN",""),localStorage.removeItem("token"),t("SET_GROUPS",[]),localStorage.setItem("groups",[]),t("SET_MENUS",void 0),t("SET_ROLE",""),t("SET_ELEMENTS",void 0),t("SET_PERMISSION_MENUS",void 0),e()})},ChangeRole:function(e,t){var n=e.commit,a=e.state;return new h.a(function(e){n("SET_TOKEN",t),localStorage.setItem("groups",t),i(a.username).then(function(t){var a=t.data.results[0];n("SET_GROUPS",a.groups),localStorage.setItem("groups",a.groups),e()})})}}},x=M,C=n("YaEn"),V={state:{routers:C.b,addRouters:[]},mutations:{SET_ROUTERS:function(e,t){e.addRouters=t,e.routers=C.b.concat(t)}},actions:{GenerateRoutes:function(e,t){var n=e.commit,a=t.role,r=t.menus;return new h.a(function(e){var t=void 0;"super"===a?(n("SET_ROUTERS",t),t=C.a.concat(C.d)):t=s(C.a,r).concat(C.d),n("SET_ROUTERS",t),e()})}}},O=V,I={sidebar:function(e){return e.app.sidebar},language:function(e){return e.app.language},visitedViews:function(e){return e.app.visitedViews},cachedViews:function(e){return e.app.cachedViews},token:function(e){return e.user.token},username:function(e){return e.user.username},groups:function(e){return e.user.groups},role:function(e){return e.user.role},menus:function(e){return e.user.menus},elements:function(e){return e.user.elements},permission_routers:function(e){return e.permission.routers},addRouters:function(e){return e.permission.addRouters},permissionMenus:function(e){return e.user.permissionMenus}},R=I;c.default.use(u.a);var P=new u.a.Store({modules:{app:b,user:x,permission:O},getters:R});t.a=P},NHnr:function(e,t,n){"use strict";function a(e){n("/7A/")}function r(e,t){return 1===e?e+t:e+t+"s"}function i(e){var t=Date.now()/1e3-Number(e);return t<3600?r(~~(t/60)," minute"):t<86400?r(~~(t/3600)," hour"):r(~~(t/86400)," day")}function o(e,t){if(0===arguments.length)return null;10===(e+"").length&&(e=1e3*+e);var n=t||"{y}-{m}-{d} {h}:{i}:{s}",a=void 0;a="object"===(void 0===e?"undefined":W()(e))?e:new Date(parseInt(e));var r={y:a.getFullYear(),m:a.getMonth()+1,d:a.getDate(),h:a.getHours(),i:a.getMinutes(),s:a.getSeconds(),a:a.getDay()};return n.replace(/{(y|m|d|h|i|s|a)+}/g,function(e,t){var n=r[t];return"a"===t?["一","二","三","四","五","六","日"][n-1]:(e.length>0&&n<10&&(n="0"+n),n||0)})}function s(e,t){var n=new Date(e),a=Date.now(),r=(a-n)/1e3;return r<30?"刚刚":r<3600?Math.ceil(r/60)+"分钟前":r<86400?Math.ceil(r/3600)+"小时前":r<172800?"1天前":t?o(e,t):n.getMonth()+1+"月"+n.getDate()+"日"+n.getHours()+"时"+n.getMinutes()+"分"}function c(e,t){for(var n=[{value:1e18,symbol:"E"},{value:1e15,symbol:"P"},{value:1e12,symbol:"T"},{value:1e9,symbol:"G"},{value:1e6,symbol:"M"},{value:1e3,symbol:"k"}],a=0;a<n.length;a++)if(e>=n[a].value)return(e/n[a].value+.1).toFixed(t).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n[a].symbol;return e.toString()}function u(e){var t=document.createElement("div");return t.innerHTML=e,t.textContent||t.innerText}function l(e){return(+e||0).toString().replace(/^-?\d+/g,function(e){return e.replace(/(?=(?!\b)(\d{3})+$)/g,",")})}function d(e){if(void 0!==e){var t=e.split("T");return t[0]+" "+t[1].split(".")[0]}}function p(e,t){return e.indexOf("admin")>=0||(!t||e.some(function(e){return t.indexOf(e)>=0}))}Object.defineProperty(t,"__esModule",{value:!0});var h={};n.d(h,"timeAgo",function(){return i}),n.d(h,"parseTime",function(){return o}),n.d(h,"formatTime",function(){return s}),n.d(h,"nFormatter",function(){return c}),n.d(h,"html2Text",function(){return u}),n.d(h,"toThousandslsFilter",function(){return l}),n.d(h,"parseDate",function(){return d});var m=n("fZjL"),f=n.n(m),v=n("7+uW"),g=n("zL8q"),w=n.n(g),k=(n("tvR6"),n("Dd8w")),y=n.n(k),b=n("TXmL"),_=n("lbHh"),S=n.n(_),E=n("wUZ8"),T=n.n(E),M=n("Vi3T"),x=n.n(M),C={route:{dashboard:"Dashboard",Dashboard:"Dashboard",userManager:"userManager",userlist:"userlist",grouplist:"grouplist",rolelist:"rolelist",ticketManager:"ticketManager",workticketlist:"workticketlist",tickettypelist:"tickettypelist",toolManager:"toolManager",upload:"upload",test:"test",addworkticket:"addworkticket",editworkticket:"editworkticket",menuManager:"menuManager",menulist:"menulist",menuperm:"menuperm",deployManager:"deployManager",threepayManager:"threepayManager",platform:"Platform",merchant:"Merchant",paychannel:"Paychannel",paychannelname:"PaychannelName",sendmessage:"sendMessage",wikiManager:"wikiManager",wikilist:"wikilist",wikiadmin:"wikiadmin",addwiki:"addwiki",editwiki:"editwiki",viewwiki:"viewwiki",hostManager:"hostManager",hosts:"hosts",idcs:"idcs",jobManager:"jobManager",jobs:"jobs",dropzone:"Dropzone",sticky:"Sticky",countTo:"CountTo",componentMixin:"Mixin",backToTop:"BackToTop",charts:"Charts",keyboardChart:"Keyboard Chart",lineChart:"Line chart",mixChart:"Mix Chart"}},V={route:{dashboard:"首页",Dashboard:"Dashboard",userManager:"用户管理",userlist:"用户列表",grouplist:"用户组列表",rolelist:"角色列表",ticketManager:"工单系统",workticketlist:"工单列表",tickettypelist:"工单类型",toolManager:"工具管理",upload:"上传管理",test:"测试",addworkticket:"新建工单",editworkticket:"编辑工单",menuManager:"菜单管理",menulist:"菜单列表",menuperm:"菜单权限",deployManager:"发布管理",threepayManager:"第三支付对接",platform:"第三支付平台",merchant:"第三支付商户",paychannel:"支付通道列表",paychannelname:"通道类型",sendmessage:"消息列表",wikiManager:"文档系统",wikilist:"文档中心",wikiadmin:"文档管理",addwiki:"添加文档",editwiki:"编辑文档",viewwiki:"查看文档",hostManager:"主机管理",hosts:"主机列表",idcs:"机房列表",jobManager:"发布管理",jobs:"项目列表",dropzone:"Dropzone",sticky:"Sticky",countTo:"CountTo",componentMixin:"小组件",backToTop:"返回顶部",charts:"图表",keyboardChart:"键盘图表",lineChart:"折线图",mixChart:"混合图表"}};v.default.use(b.a);var O={en:y()({},C,T.a),zh:y()({},V,x.a)},I=new b.a({locale:S.a.get("language")||"zh",messages:O}),R=I,P={name:"APP"},j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},D=[],$={render:j,staticRenderFns:D},L=$,U=n("VU/8"),N=a,z=U(P,L,!1,N,null,null),A=z.exports,F=n("YaEn"),B=n("IcnI"),G=n("pFYg"),W=n.n(G),H=n("Y81h"),Y=n.n(H),K=(n("UVIz"),["/login"]);F.c.beforeEach(function(e,t,n){Y.a.start(),localStorage.getItem("token")?"/login"===e.path?(n({path:"/"}),Y.a.done()):0===B.a.getters.role.length?B.a.dispatch("GetUserInfo").then(function(t){var a=B.a.getters.role,r=B.a.getters.menus;B.a.dispatch("GenerateRoutes",{role:a,menus:r}).then(function(){F.c.addRoutes(B.a.getters.addRouters),n(y()({},e,{replace:!0}))})}).catch(function(){B.a.dispatch("FedLogOut").then(function(){g.Message.error("验证失败,请重新登录"),console.log("not found groups"),n({path:"/login"})})}):p(B.a.getters.groups,e.meta.group)?n():(n({path:"/403",query:{noGoBack:!0}}),Y.a.done()):(console.log("haven't token"),-1!==K.indexOf(e.path)?n():(n({path:"/login",query:{redirect:e.fullPath}}),Y.a.done()))}),F.c.afterEach(function(){Y.a.done()});var Q=(n("EG2h"),n("D/PP"),n("D4uH")),X=(n("e0XP"),n("OS1Z")),q=n.n(X);n("pw1w");v.default.use(w.a,{i18n:function(e,t){return R.t(e,t)}}),v.default.component("icon",Q.a),v.default.use(q.a),f()(h).forEach(function(e){v.default.filter(e,h[e])}),v.default.config.productionTip=!1,new v.default({el:"#app",router:F.c,store:B.a,i18n:R,template:"<App/>",components:{App:A}})},OPpm:function(e,t){},Opzk:function(e,t,n){function a(e){var t=r[e];return t?Promise.all(t.slice(1).map(n.e)).then(function(){return n(t[0])}):Promise.reject(new Error("Cannot find module '"+e+"'."))}var r={"./components/addgroup.vue":["zsKB",0],"./components/avatarUpload.vue":["czzu",5],"./components/editgroup.vue":["4lE6",0],"./components/hosttransfer.vue":["8TIX",0,32],"./dashboard/components/BarChart.vue":["tRpm",1,0,51],"./dashboard/components/LineChart.vue":["M8F6",1,0,50],"./dashboard/components/PanelGroup.vue":["Nck9",17],"./dashboard/components/PieChart.vue":["w1Ih",1,0,49],"./dashboard/components/RaddarChart.vue":["7IYo",1,0,48],"./dashboard/index.vue":["ARoL",1,0,3],"./errorPage/403.vue":["6XGN",16],"./errorPage/404.vue":["AejC",12],"./hosts/components/addhost.vue":["3jMH",0,47],"./hosts/components/addidc.vue":["LK+4",46],"./hosts/components/edithost.vue":["EeTk",0,45],"./hosts/components/editidc.vue":["hfX5",44],"./hosts/hosts.vue":["QT8Y",0,11],"./hosts/idcs.vue":["9eVK",0,10],"./jobs/components/addhost.vue":["xDGD",0,43],"./jobs/components/addidc.vue":["LMQ6",42],"./jobs/components/edithost.vue":["D72+",0,41],"./jobs/components/editidc.vue":["tFOC",40],"./jobs/jobs.vue":["RmA3",18],"./layout/Layout.vue":["AkUR"],"./layout/components/AppMain.vue":["BoPo"],"./layout/components/Navbar.vue":["6k2e"],"./layout/components/Sidebar/SidebarItem.vue":["tlvQ"],"./layout/components/Sidebar/index.vue":["WTox"],"./layout/components/TagsView.vue":["Vg/Y"],"./login/index.vue":["T+/8",31],"./menus/menuperm.vue":["4ZiJ",0,2],"./menus/menus.vue":["V309",15],"./threepays/components/addMerchant.vue":["b11G",0,39],"./threepays/components/addPaychannel.vue":["DQwc",0,38],"./threepays/components/editMerchant.vue":["KF07",0,37],"./threepays/components/editPaychannel.vue":["VPNs",0,36],"./threepays/merchant.vue":["0epf",0,9],"./threepays/paychannel.vue":["xYlS",0,8],"./threepays/paychannelname.vue":["rpgY",0,30],"./threepays/platform.vue":["y6sr",0,29],"./tools/sendmessage.vue":["gBUW",0,28],"./tools/test.vue":["z8an",35],"./tools/upload.vue":["6ohx",0,14],"./users/adduser.vue":["vadm",0,27],"./users/edituser.vue":["r1eV",0,26],"./users/roles.vue":["U+3Q",0,25],"./users/usergroups.vue":["URAK",0,7],"./users/users.vue":["Vt6Z",0,4],"./users/viewgroup.vue":["Aw+z",0,24],"./wikis/components/addwiki.vue":["3qKL",0,34],"./wikis/components/editwiki.vue":["5cvz",0,33],"./wikis/components/viewwiki.vue":["eNlX",0,23],"./wikis/wikiadmin.vue":["bkNQ",0,22],"./wikis/wikilist.vue":["fkPN",0,21],"./worktickets/components/addworkticket.vue":["Guws",0,20],"./worktickets/components/editworkticket.vue":["/pPl",0,13],"./worktickets/tickettype.vue":["rySo",0,19],"./worktickets/workticket.vue":["CH+q",0,6]};a.keys=function(){return Object.keys(r)},a.id="Opzk",e.exports=a},QmSG:function(e,t,n){var a=void 0,r="https:"===window.location.protocol?"wss":"ws";a={apiUrl:"",super_group:"OMS_Super_Admin",wsurl:r+"://oms.tb-gaming.local/ws"};var i=a.apiUrl;e.exports={apiUrl:a.apiUrl,ws_url:a.wsurl,super_group:a.super_group,LIMIT:10,uploads:i+"/api/upload/",uploadurl:"https://httpbin.org/post",login:i+"/api/api-token-auth/",logout:i+"/api/api-auth/logout/",changePassword:i+"/api/changepasswd/",hosts:i+"/api/hosts/",idcs:i+"/api/idcs/",users:i+"/api/users/",groups:i+"/api/groups/",roles:i+"/api/roles/",worktickers:i+"/api/worktickers/",ticketcomments:i+"/api/ticketcomments/",ticketenclosures:i+"/api/ticketenclosures/",tickettypes:i+"/api/tickettypes/",platforms:i+"/api/platforms/",merchants:i+"/api/merchants/",threepayenclosures:i+"/api/threepayenclosures/",paychannels:i+"/api/paychannels/",paychannelnames:i+"/api/paychannelnames/",threepaycomments:i+"/api/threepaycomments/",usermenuperms:i+"/api/usermenuperms/",routerinfo:i+"/api/routers/",firstmenus:i+"/api/firstmenus/",secondmenus:i+"/api/secondmenus/",menumetas:i+"/api/menumetas/",sendmail:i+"/api/sendmail/",sendmessage:i+"/api/sendmessage/",wikis:i+"/api/wikis/",jobs:i+"/api/jobs/",deployenvs:i+"/api/deployenvs/",deployjobs:i+"/api/deployjobs/"}},TI3O:function(e,t){},UVIz:function(e,t){},"Vg/Y":function(e,t,n){"use strict";function a(e){n("k1KJ")}function r(e){n("iB30"),n("Faza")}Object.defineProperty(t,"__esModule",{value:!0});var i=n("BO1k"),o=n.n(i),s={name:"scrollPane",data:function(){return{left:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetWidth,a=this.$refs.scrollWrapper,r=a.offsetWidth;e.wheelDelta>0?this.left=Math.min(0,this.left+e.wheelDelta):n-15<r?this.left<-(r-n+15)?this.left=this.left:this.left=Math.max(this.left+e.wheelDelta,n-r-15):this.left=0},moveToTarget:function(e){var t=this.$refs.scrollContainer,n=t.offsetWidth,a=e.offsetLeft,r=e.offsetWidth;a<-this.left?this.left=15-a:a+15>-this.left&&a+r<-this.left+n-15||(this.left=-(a-(n-r)+15))}}},c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{left:e.left+"px"}},[e._t("default")],2)])},u=[],l={render:c,staticRenderFns:u},d=l,p=n("VU/8"),h=a,m=p(s,d,!1,h,"data-v-7ce31019",null),f=m.exports,v=n("ivlf"),g={components:{ScrollPane:f},computed:{visitedViews:function(){return this.$store.state.app.visitedViews}},mounted:function(){this.addViewTags()},methods:{generateTitle:v.a,closeViewTags:function(e,t){var n=this;this.$store.dispatch("delVisitedViews",e).then(function(t){if(n.isActive(e)){var a=t.slice(-1)[0];a?n.$router.push(a.path):n.$router.push("/")}}),t.preventDefault()},generateRoute:function(){return!!this.$route.name&&this.$route},addViewTags:function(){var e=this.generateRoute();if(!e)return!1;this.$store.dispatch("addVisitedViews",e)},isActive:function(e){return e.path===this.$route.path||e.name===this.$route.name},moveToCurrentTag:function(){var e=this,t=this.$refs.tag;this.$nextTick(function(){var n=!0,a=!1,r=void 0;try{for(var i,s=o()(t);!(n=(i=s.next()).done);n=!0){var c=i.value;if(c.to===e.$route.path){e.$refs.scrollPane.moveToTarget(c.$el);break}}}catch(e){a=!0,r=e}finally{try{!n&&s.return&&s.return()}finally{if(a)throw r}}})}},watch:{$route:function(){this.addViewTags(),this.moveToCurrentTag()}}},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-pane",{ref:"scrollPane",staticClass:"tags-view-container"},e._l(Array.from(e.visitedViews),function(t){return n("router-link",{key:t.path,ref:"tag",refInFor:!0,staticClass:"tags-view-item",class:e.isActive(t)?"active":"",attrs:{to:t.path}},[e._v("\n    "+e._s(e.generateTitle(t.name))+"\n    "),n("span",{staticClass:"el-icon-close",on:{click:function(n){e.closeViewTags(t,n)}}})])}))},k=[],y={render:w,staticRenderFns:k},b=y,_=n("VU/8"),S=r,E=_(g,b,!1,S,"data-v-d4ad1cea",null);t.default=E.exports},WTox:function(e,t,n){"use strict";function a(e){n("OPpm")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("Dd8w"),i=n.n(r),o=n("NYxO"),s=n("tlvQ"),c={name:"scrollBar",data:function(){return{top:0}},methods:{handleScroll:function(e){e.preventDefault();var t=this.$refs.scrollContainer,n=t.offsetHeight,a=this.$refs.scrollWrapper,r=a.offsetHeight;e.wheelDelta>0?this.top=Math.min(0,this.top+e.wheelDelta):n-15<r?this.top<-(r-n+15)?this.top=this.top:this.top=Math.max(this.top+e.wheelDelta,n-r-15):this.top=0}}},u=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{ref:"scrollContainer",staticClass:"scroll-container",on:{mousewheel:e.handleScroll}},[n("div",{ref:"scrollWrapper",staticClass:"scroll-wrapper",style:{top:e.top+"px"}},[e._t("default")],2)])},l=[],d={render:u,staticRenderFns:l},p=d,h=n("VU/8"),m=a,f=h(c,p,!1,m,"data-v-46ac4d68",null),v=f.exports,g={components:{SidebarItem:s.default,ScrollBar:v},computed:i()({},Object(o.b)(["permission_routers","sidebar"]),{isCollapse:function(){return!this.sidebar.opened}})},w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("scroll-bar",[n("el-menu",{attrs:{mode:"vertical","default-active":e.$route.path,collapse:e.isCollapse,"background-color":"#304156","text-color":"#fff","active-text-color":"#409EFF","unique-opened":!0}},[n("sidebar-item",{attrs:{routes:e.permission_routers}})],1)],1)},k=[],y={render:w,staticRenderFns:k},b=y,_=n("VU/8"),S=_(g,b,!1,null,null,null);t.default=S.exports},YaEn:function(e,t,n){"use strict";n.d(t,"b",function(){return s}),n.d(t,"a",function(){return c}),n.d(t,"d",function(){return u});var a=n("7+uW"),r=n("/ocq"),i=n("AkUR"),o=n("A66B");a.default.use(r.a);var s=[{path:"/login",component:o("login/index"),hidden:!0},{path:"/404",component:o("errorPage/404"),hidden:!0},{path:"/403",component:o("errorPage/403"),hidden:!0},{path:"",component:i.default,icon:"dashboard",redirect:"dashboard",children:[{path:"dashboard",component:o("dashboard/index"),name:"dashboard",icon:"dashboard",meta:{noCache:!0}}]},{name:"wikiManager",path:"/wikis",component:i.default,icon:"paper-plane",redirect:"noredirect",authority:"文档系统",children:[{path:"wikiadmin",component:o("wikis/wikiadmin"),name:"wikiadmin",authority:"文档管理"},{path:"addwiki",hidden:!0,component:o("wikis/components/addwiki"),name:"addwiki",authority:"添加文档"},{path:"editwiki/:wikiid",hidden:!0,component:o("wikis/components/editwiki"),name:"editwiki",authority:"编辑文档"},{path:"viewwiki/:wikiid",hidden:!0,component:o("wikis/components/viewwiki"),name:"viewwiki",authority:"查看文档"},{path:"wikilist",component:o("wikis/wikilist"),name:"wikilist",authority:"文档中心"}]}];t.c=new r.a({scrollBehavior:function(){return{y:0}},routes:s});var c=[{name:"ticketManager",path:"/worktickets",component:i.default,icon:"leaf",redirect:"workticket",authority:"工单系统",children:[{path:"workticket",component:o("worktickets/workticket"),name:"workticketlist",authority:"工单列表"},{path:"tickettype",component:o("worktickets/tickettype"),name:"tickettypelist",authority:"工单类型"},{path:"addworkticket",hidden:!0,component:o("worktickets/components/addworkticket"),name:"addworkticket",authority:"添加工单",meta:{hidden:!0}},{path:"editworkticket/:ticketid",hidden:!0,component:o("worktickets/components/editworkticket"),name:"editworkticket",authority:"编辑工单"}]},{name:"threepayManager",path:"/threepays",component:i.default,icon:"bitcoin",redirect:"threepay",authority:"第三支付对接",children:[{path:"paychannel",component:o("threepays/paychannel"),name:"paychannel",authority:"支付通道列表"},{path:"paychannelname",component:o("threepays/paychannelname"),name:"paychannelname",authority:"通道类型"}]},{name:"userManager",path:"/users",component:i.default,icon:"user",redirect:"users",authority:"用户管理",children:[{path:"users",component:o("users/users"),name:"userlist",authority:"用户列表"},{path:"usergroups",component:o("users/usergroups"),name:"grouplist",authority:"用户组列表"},{path:"roles",component:o("users/roles"),name:"rolelist",authority:"角色列表"}]},{name:"menuManager",path:"/menus",component:i.default,icon:"fire",redirect:"menus",authority:"菜单管理",children:[{path:"menus",component:o("menus/menus"),name:"menulist",authority:"菜单列表"},{path:"menuperm",component:o("menus/menuperm"),name:"menuperm",authority:"菜单权限"}]},{name:"hostManager",path:"/hosts",component:i.default,icon:"desktop",redirect:"hosts",authority:"主机管理",children:[{path:"hosts",component:o("hosts/hosts"),name:"hosts",authority:"主机列表"},{path:"idcs",component:o("hosts/idcs"),name:"idcs",authority:"机房列表"}]},{name:"jobManager",path:"/jobs",component:i.default,icon:"tasks",redirect:"jobs",authority:"发布管理",children:[{path:"jobs",component:o("jobs/jobs"),name:"jobs",authority:"项目列表"}]},{name:"toolManager",path:"/tools",component:i.default,icon:"cogs",redirect:"upload",authority:"工具管理",children:[{path:"upload",component:o("tools/upload"),name:"upload",authority:"上传列表"},{path:"sendmessage",component:o("tools/sendmessage"),name:"sendmessage",authority:"消息列表"},{path:"test",component:o("tools/test"),name:"test",authority:"测试页面"}]}],u=[{path:"*",redirect:"/404",hidden:!0}]},cJIv:function(e,t){},e0XP:function(e,t){},iB30:function(e,t){},ivlf:function(e,t,n){"use strict";function a(e){return this.$t("route."+e)}t.a=a},k0ph:function(e,t){},k1KJ:function(e,t){},prwc:function(e,t){},pw1w:function(e,t){},tlvQ:function(e,t,n){"use strict";function a(e){n("Fm+0")}Object.defineProperty(t,"__esModule",{value:!0});var r=n("ivlf"),i={name:"SidebarItem",props:{routes:{type:Array}},data:function(){return{iconsize:1.4}},methods:{generateTitle:r.a}},o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"menu-wrapper"},[e._l(e.routes,function(t){return!t.hidden&&t.children.length>0?[1!==t.children.length||t.children[0].children||"dashboard"!=t.children[0].icon?n("el-submenu",{key:t.name,attrs:{index:t.name||t.path}},[n("template",{slot:"title"},[t.icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.icon,scale:e.iconsize}}):e._e(),e._v(" "),t&&t.name?n("span",[e._v(e._s(e.generateTitle(t.name)))]):e._e()],1),e._v(" "),e._l(t.children,function(a){return a.hidden?e._e():[a.children&&a.children.length>0?n("sidebar-item",{key:a.path,staticClass:"nest-menu",attrs:{routes:[a]}}):n("router-link",{key:a.name,attrs:{to:t.path+"/"+a.path}},[n("el-menu-item",{attrs:{index:t.path+"/"+a.path}},[n("icon",{staticClass:"child-icon",attrs:{name:"dot-circle-o",scale:"1"}}),e._v(" "),a&&a.name?n("span",[e._v(e._s(e.generateTitle(a.name)))]):e._e()],1)],1)]})],2):n("router-link",{key:t.children[0].name,attrs:{to:t.path+"/"+t.children[0].path}},[n("el-menu-item",{staticClass:"submenu-title-noDropdown",attrs:{index:t.path+"/"+t.children[0].path}},[t.children[0].icon?n("icon",{staticClass:"wscn-icon",attrs:{name:t.children[0].icon,scale:e.iconsize}}):e._e(),e._v(" "),t.children[0]&&t.children[0].name?n("span",[e._v(e._s(e.generateTitle(t.children[0].name)))]):e._e()],1)],1)]:e._e()})],2)},s=[],c={render:o,staticRenderFns:s},u=c,l=n("VU/8"),d=a,p=l(i,u,!1,d,"data-v-b53f4f74",null);t.default=p.exports},tvR6:function(e,t){},vLgD:function(e,t,n){"use strict";var a=n("//Fk"),r=n.n(a),i=n("mtWM"),o=n.n(i),s=n("zL8q"),c=(n.n(s),n("IcnI"));o.a.defaults.xsrfCookieName="csrftoken",o.a.defaults.xsrfHeaderName="X-CSRFToken";var u=o.a.create({baseURL:"http://oms.tb-gaming.local",timeout:8e3});u.interceptors.request.use(function(e){if(c.a.getters.token){var t=c.a.getters.token;e.headers.Authorization="token "+t,e.headers["X-CSRFToken"]=t}return e.headers["Content-Type"]="application/json;charset=utf-8",e},function(e){console.log(e),r.a.reject(e)}),u.interceptors.response.use(function(e){return e},function(e){return console.log("err"+e),Object(s.Message)({message:e.message,type:"error",duration:5e3}),r.a.reject(e)}),t.a=u},zp1X:function(e,t,n){"use strict";function a(e){return Object(s.a)({url:u.a.usermenuperms,method:"post",data:e})}function r(e,t){return Object(s.a)({url:u.a.usermenuperms,method:"get",params:e})}function i(e,t){return Object(s.a)({url:u.a.usermenuperms+e+"/",method:"put",data:t})}function o(e){return Object(s.a)({url:u.a.routerinfo+e,method:"get"})}t.c=a,t.a=r,t.d=i,t.b=o;var s=n("vLgD"),c=n("QmSG"),u=n.n(c)}},["NHnr"]);