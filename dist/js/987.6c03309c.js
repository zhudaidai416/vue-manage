"use strict";(self["webpackChunkvue_manage"]=self["webpackChunkvue_manage"]||[]).push([[987],{3987:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}});var a=function(){var e=this,t=e._self._c;return t("div",[t("el-container",[t("el-aside",{attrs:{width:"auto"}},[t("common-aside")],1),t("el-container",[t("el-header",[t("common-header")],1),t("common-tag"),t("el-main",[t("router-view")],1)],1)],1)],1)},l=[],s=function(){var e=this,t=e._self._c;return t("el-menu",{staticClass:"el-menu-vertical-demo",attrs:{"default-active":e.$route.name,collapse:e.isCollapse,"background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b"},on:{open:e.handleOpen,close:e.handleClose}},[t("h3",[e._v(e._s(e.isCollapse?"后台":"通用后台管理系统"))]),e._l(e.noChildren,(function(n){return t("el-menu-item",{key:n.name,attrs:{index:n.name},on:{click:function(t){return e.clickMenu(n)}}},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])])})),e._l(e.hasChildren,(function(n){return t("el-submenu",{key:n.label,attrs:{index:n.label}},[t("template",{slot:"title"},[t("i",{class:`el-icon-${n.icon}`}),t("span",{attrs:{slot:"title"},slot:"title"},[e._v(e._s(n.label))])]),e._l(n.children,(function(a){return t("el-menu-item-group",{key:a.path},[t("el-menu-item",{attrs:{index:n.path},on:{click:function(t){return e.clickMenu(a)}}},[e._v(e._s(a.label))])],1)}))],2)}))],2)},o=[],r=(n(560),{data(){return{}},methods:{handleOpen(e,t){console.log(e,t)},handleClose(e,t){console.log(e,t)},clickMenu(e){this.$route.path===e.path||"/home"===this.$route.path&&"/"===e.path||this.$router.push(e.path),this.$store.commit("selectMenu",e)}},computed:{noChildren(){return this.menuData.filter((e=>!e.children))},hasChildren(){return this.menuData.filter((e=>e.children))},isCollapse(){return this.$store.state.tab.isCollapse},menuData(){return JSON.parse(localStorage.getItem("menuData"))||this.$store.state.tab.menuData}}}),i=r,u=n(1001),c=(0,u.Z)(i,s,o,!1,null,"79639c79",null),m=c.exports,h=function(){var e=this,t=e._self._c;return t("div",{staticClass:"header"},[t("div",{staticClass:"left"},[t("el-button",{attrs:{icon:"el-icon-menu",size:"mini"},on:{click:e.handleMenu}}),t("el-breadcrumb",{attrs:{separator:"/"}},e._l(e.tags,(function(n){return t("el-breadcrumb-item",{key:n.path,style:{"--menu-color":n.name===e.$route.name?"#fff":"#666"},attrs:{to:{path:n.path}}},[e._v(" "+e._s(n.label)+" ")])})),1)],1),t("div",{staticClass:"right"},[t("el-dropdown",{on:{command:e.handleCommand}},[t("span",{staticClass:"el-dropdown-link"},[t("img",{staticClass:"user",attrs:{src:n(4353),alt:""}})]),t("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[t("el-dropdown-item",[e._v("个人中心")]),t("el-dropdown-item",{attrs:{command:"logout"}},[e._v("退出")])],1)],1)],1)])},d=[],p=n(3822),f={name:"MallView",data(){return{}},methods:{handleMenu(){this.$store.commit("collapseMenu")},handleCommand(e){"logout"===e&&(localStorage.removeItem("token"),localStorage.removeItem("menuData"),this.$router.push("/login"))}},computed:{...(0,p.rn)({tags:e=>e.tab.selectMenuList})}},g=f,_=(0,u.Z)(g,h,d,!1,null,"707871be",null),v=_.exports,b=function(){var e=this,t=e._self._c;return t("div",{staticClass:"tag"},e._l(e.tags,(function(n,a){return t("el-tag",{key:n.path,attrs:{closable:"home"!==n.name,effect:e.$route.name===n.name?"dark":"plain",size:"small"},on:{click:function(t){return e.changePage(n)},close:function(t){return e.closePage(n,a)}}},[e._v(" "+e._s(n.label)+" ")])})),1)},C=[],k={data(){return{}},computed:{...(0,p.rn)({tags:e=>e.tab.selectMenuList})},methods:{changePage(e){this.$router.push(e.path)},...(0,p.OI)(["closeTag"]),closePage(e,t){this.closeTag(e);const n=this.tags.length;e.name===this.$route.name&&(t===n?this.$router.push({name:this.tags[t-1].name}):this.$router.push({name:this.tags[t].name}))}}},$=k,w=(0,u.Z)($,b,C,!1,null,"4de14d84",null),M=w.exports,x={name:"MainView",data(){return{}},components:{CommonAside:m,CommonHeader:v,CommonTag:M}},y=x,D=(0,u.Z)(y,a,l,!1,null,"3eff9be5",null),I=D.exports},4353:function(e,t,n){e.exports=n.p+"img/user.bad65e06.png"}}]);
//# sourceMappingURL=987.6c03309c.js.map