"use strict";(self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[]).push([[152],{2152:function(e,t,a){a.r(t),a.d(t,{default:function(){return I}});var n=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},l=[],s=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{router:"","default-active":e.$route.path,collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.menuData,(function(a){return t("div",{key:a.path},[a.children?t("el-submenu",{attrs:{index:a.path+""}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${a.meta.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(e.isCollapse?"":a.meta.title))])]),e._l(a.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:a.path+""},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.meta.title))])],1)}))],2):t("el-menu-item",{attrs:{index:a.path+""},on:{click:function(t){return e.clickMenu(a)}}},[t("i",{class:`el-icon-${a.meta.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(a.meta.title))])])],1)}))],2)},o=[],r={data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){console.log(e),this.$store.commit("selectMenu",e)}},computed:{isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(localStorage.getItem("menuData"))||this.$store.state.tab.menuData}}},i=r,c=a(1001),u=(0,c.Z)(i,s,o,!1,null,"e8653390",null),m=u.exports,d=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"left"},[t("i",{class:[e.isCollapse?"el-icon-s-unfold":"el-icon-s-fold"],on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.breadcrumbList,(function(a){return t("el-breadcrumb-item",{key:a.path,attrs:{to:{path:a.path}}},[e._v(" "+e._s(a.title)+" ")])})),1)],1),t("div",{staticClass:"right"},[t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:a(4353),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)])},h=[],p=(a(560),a(3822)),f={name:"MallView",data(){return{breadcrumbList:[]}},created(){this.caleBreadcrumb()},watch:{$route:{immediate:!0,handler(){this.caleBreadcrumb()}}},methods:{handleMenu(){this.$store.commit("collapseMenu")},caleBreadcrumb(){const e=[];this.$route.matched.forEach((t=>{t.meta.title&&t.path&&e.push({path:t.path,title:t.meta.title})})),this.breadcrumbList=e},handleCommand(e){"logout"===e&&(localStorage.removeItem("token"),localStorage.removeItem("menuData"),this.$router.push("/login"))}},computed:{...(0,p.rn)({isCollapse:e=>e.tab.isCollapse})}},g=f,_=(0,c.Z)(g,d,h,!1,null,"ceec2fe2",null),b=_.exports,v=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tag"},e._l(e.tags,(function(a,n){return t("el-tag",{key:a.path,attrs:{closable:"home"!==a.name,effect:e.$route.name===a.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changePage(a)},close:function(t){return e.closePage(a,n)}}},[e._v(" "+e._s(a.meta.title)+" ")])})),1)},C=[],k={data(){return{}},computed:{...(0,p.rn)({tags:e=>e.tab.selectMenuList})},methods:{changePage(e){this.$router.push(e.path)},...(0,p.OI)(["closeTag"]),closePage(e,t){this.closeTag(e);const a=this.tags.length;e.name===this.$route.name&&(t===a?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},$=k,w=(0,c.Z)($,v,C,!1,null,"7b8abae0",null),x=w.exports,M={name:"MainView",data(){return{}},components:{CommonAside:m,CommonHeader:b,CommonTag:x}},D=M,y=(0,c.Z)(D,n,l,!1,null,"f71d2b80",null),I=y.exports},4353:function(e,t,a){e.exports=a.p+"img/user.bad65e06.png"}}]);
//# sourceMappingURL=152.a1d01b36.js.map