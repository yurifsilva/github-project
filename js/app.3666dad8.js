(function(e){function t(t){for(var n,a,u=t[0],i=t[1],c=t[2],l=0,p=[];l<u.length;l++)a=u[l],s[a]&&p.push(s[a][0]),s[a]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(p.length)p.shift()();return o.push.apply(o,c||[]),r()}function r(){for(var e,t=0;t<o.length;t++){for(var r=o[t],n=!0,a=1;a<r.length;a++){var u=r[a];0!==s[u]&&(n=!1)}n&&(o.splice(t--,1),e=i(i.s=r[0]))}return e}var n={},a={app:0},s={app:0},o=[];function u(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-292d93e0":"8e8397b0","chunk-326743f8":"b6654632"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,i),r.l=!0,r.exports}i.e=function(e){var t=[],r={"chunk-292d93e0":1,"chunk-326743f8":1};a[e]?t.push(a[e]):0!==a[e]&&r[e]&&t.push(a[e]=new Promise(function(t,r){for(var n="css/"+({}[e]||e)+"."+{"chunk-292d93e0":"ead51e2b","chunk-326743f8":"928e5cc6"}[e]+".css",s=i.p+n,o=document.getElementsByTagName("link"),u=0;u<o.length;u++){var c=o[u],l=c.getAttribute("data-href")||c.getAttribute("href");if("stylesheet"===c.rel&&(l===n||l===s))return t()}var p=document.getElementsByTagName("style");for(u=0;u<p.length;u++){c=p[u],l=c.getAttribute("data-href");if(l===n||l===s)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=n,delete a[e],d.parentNode.removeChild(d),r(o)},d.href=s;var f=document.getElementsByTagName("head")[0];f.appendChild(d)}).then(function(){a[e]=0}));var n=s[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise(function(t,r){n=s[e]=[t,r]});t.push(n[2]=o);var c,l=document.createElement("script");l.charset="utf-8",l.timeout=120,i.nc&&l.setAttribute("nonce",i.nc),l.src=u(e),c=function(t){l.onerror=l.onload=null,clearTimeout(p);var r=s[e];if(0!==r){if(r){var n=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src,o=new Error("Loading chunk "+e+" failed.\n("+n+": "+a+")");o.type=n,o.request=a,r[1](o)}s[e]=void 0}};var p=setTimeout(function(){c({type:"timeout",target:l})},12e4);l.onerror=l.onload=c,document.head.appendChild(l)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,r){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(i.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(r,n,function(t){return e[t]}.bind(null,n));return r},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/github-project/",i.oe=function(e){throw console.error(e),e};var c=window["webpackJsonp"]=window["webpackJsonp"]||[],l=c.push.bind(c);c.push=t,c=c.slice();for(var p=0;p<c.length;p++)t(c[p]);var d=l;o.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"028a":function(e,t,r){},"10ba":function(e,t,r){"use strict";var n=r("67cd"),a=r.n(n);a.a},"1eec":function(e,t,r){"use strict";var n=r("54a1"),a=r.n(n);a.a},"49be":function(e,t,r){"use strict";r("96cf");var n=r("3b8d"),a=r("bc3a"),s=r.n(a);function o(e){return u.apply(this,arguments)}function u(){return u=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r,n,a,o=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return r=o.length>1&&void 0!==o[1]?o[1]:1,n=o.length>2&&void 0!==o[2]?o[2]:20,e.prev=2,e.next=5,s.a.get("https://api.github.com/users/".concat(t,"/repos?page=").concat(r,"&per_page=").concat(n));case 5:return a=e.sent,e.abrupt("return",a.data);case 9:throw e.prev=9,e.t0=e["catch"](2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}},e,null,[[2,9]])})),u.apply(this,arguments)}function i(e,t){return c.apply(this,arguments)}function c(){return c=Object(n["a"])(regeneratorRuntime.mark(function e(t,r){var n,a,o,u=arguments;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return n=u.length>2&&void 0!==u[2]?u[2]:1,a=u.length>3&&void 0!==u[3]?u[3]:10,e.prev=2,e.next=5,s.a.get("https://api.github.com/repos/".concat(r,"/").concat(t,"/commits?page=").concat(n,"&per_page=").concat(a));case 5:return o=e.sent,e.abrupt("return",o.data);case 9:throw e.prev=9,e.t0=e["catch"](2),console.error(e.t0),e.t0;case 13:case"end":return e.stop()}},e,null,[[2,9]])})),c.apply(this,arguments)}function l(e){return p.apply(this,arguments)}function p(){return p=Object(n["a"])(regeneratorRuntime.mark(function e(t){var r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s.a.get("https://api.github.com/users/".concat(t));case 3:return r=e.sent,e.abrupt("return",r.data);case 7:throw e.prev=7,e.t0=e["catch"](0),console.error(e.t0),e.t0;case 11:case"end":return e.stop()}},e,null,[[0,7]])})),p.apply(this,arguments)}t["a"]={getRepositoriesByName:o,getCommitsByName:i,getUserByName:l}},"54a1":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("cadf"),r("551c"),r("f751"),r("097d");var n=r("2b0e"),a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{attrs:{id:"app"}},[r("router-view")],1)},s=[],o=(r("ebcb"),r("2877")),u={},i=Object(o["a"])(u,a,s,!1,null,null,null),c=i.exports,l=r("8c4f"),p=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"home"},[r("div",{staticClass:"add-user"},[r("v-text-field",{attrs:{outline:"",disabled:e.IsLoadingUser,label:"New User","error-messages":e.error},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addUser(t)}},model:{value:e.UserInput,callback:function(t){e.UserInput=t},expression:"UserInput"}}),r("v-btn",{attrs:{round:"",color:"orange",loading:e.IsLoadingUser,dark:""},on:{click:e.addUser}},[e._v("Add")])],1),r("div",{staticClass:"users"},e._l(e.UsersLocal,function(e){return r("user-card",{key:e.id,attrs:{User:e}})}),1)])},d=[],f=(r("96cf"),r("3b8d")),h=r("cebc"),m=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("router-link",{staticClass:"user-card",attrs:{tag:"div",to:{name:"Repositories",params:{User:e.User.login}}}},[r("img",{staticClass:"avatar",attrs:{src:e.Avatar,alt:""}}),r("span",{staticClass:"name"},[e._v(e._s(e.User.name))]),r("div",{staticClass:"login"},[r("img",{attrs:{src:"/img/github.png",alt:""}}),e._v("\n    "+e._s(e.User.login)+"\n  ")])])},v=[],g={name:"UserCard",data:function(){return{AvatarDefault:"/img/sem-foto.jpg"}},computed:{Avatar:function(){return this.User.avatar_url?this.User.avatar_url:this.AvatarDefault}},props:{User:{type:Object,required:!0}}},b=g,U=(r("10ba"),Object(o["a"])(b,m,v,!1,null,"7672464a",null)),y=U.exports,w=r("49be"),k=r("db3b"),_=r.n(k),x=r("5d92"),O=r.n(x),j=r("2f62"),I=r("2ef0"),C={name:"home",data:function(){return{UsersLocal:[],UserInput:null,IsLoadingUser:!1,error:""}},computed:Object(h["a"])({},Object(j["c"])({Users:"github/Users"})),created:function(){this.UsersLocal=this.Users,0==this.UsersLocal.length&&(this.UserInput="yurifsilva",this.addUser(),this.UserInput="yyx990803",this.addUser())},methods:Object(h["a"])({},Object(j["b"])({updateUsers:"github/updateUsers"}),{addUser:function(){var e=Object(f["a"])(regeneratorRuntime.mark(function e(){var t,r;return regeneratorRuntime.wrap(function(e){while(1)switch(e.prev=e.next){case 0:if(this.UserInput&&""!=this.UserInput){e.next=2;break}return e.abrupt("return");case 2:if(t=Object(I["findIndex"])(this.UsersLocal,["login",this.UserInput]),!(t>0)){e.next=6;break}return this.error="User already added",e.abrupt("return");case 6:return e.prev=6,this.IsLoadingUser=!0,e.next=10,w["a"].getUserByName(this.UserInput);case 10:r=e.sent,this.UsersLocal.push(r),this.updateUsers(this.UsersLocal),this.UserInput=null,this.error="",e.next=21;break;case 17:e.prev=17,e.t0=e["catch"](6),this.error="User not found",console.error(e.t0);case 21:return e.prev=21,this.IsLoadingUser=!1,e.finish(21);case 24:case"end":return e.stop()}},e,this,[[6,17,21,24]])}));function t(){return e.apply(this,arguments)}return t}()}),components:{UserCard:y,VTextField:_.a,VBtn:O.a}},E=C,S=(r("1eec"),Object(o["a"])(E,p,d,!1,null,"6170824d",null)),L=S.exports;n["default"].use(l["a"]);var R=new l["a"]({mode:"history",base:"/github-project/",routes:[{path:"/",name:"Home",component:L},{path:"/repositories/:User",name:"Repositories",component:function(){return r.e("chunk-292d93e0").then(r.bind(null,"0d99"))}},{path:"/repositories/:User/:Name/commits",name:"Commits",component:function(){return r.e("chunk-326743f8").then(r.bind(null,"3604"))}}]});function A(e,t){var r=e.commit;r("UPDATE_USERS",t)}var T={updateUsers:A},P=function(e){return e.Users},N={Users:P},B=function(e,t){e.Users=t},D=function(e,t){e.Repositories=t},M=function(e,t){e.Commits=t},$={UPDATE_USERS:B,UPDATE_REPOSITORIES:D,UPDATE_COMMITS:M},q={Users:[]},F={name:"github",namespaced:!0,state:q,actions:T,getters:N,mutations:$};n["default"].use(j["a"]);var H=new j["a"].Store({modules:{github:F}}),J=r("e166"),V=r.n(J);n["default"].use(V.a);var K=r("ce5b"),z=r.n(K);r("bf40"),r("da64");n["default"].use(z.a),n["default"].config.productionTip=!1,new n["default"]({router:R,store:H,render:function(e){return e(c)}}).$mount("#app")},"67cd":function(e,t,r){},ebcb:function(e,t,r){"use strict";var n=r("028a"),a=r.n(n);a.a}});
//# sourceMappingURL=app.3666dad8.js.map