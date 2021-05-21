(function(e){function t(t){for(var c,n,r=t[0],l=t[1],i=t[2],d=0,u=[];d<r.length;d++)n=r[d],Object.prototype.hasOwnProperty.call(s,n)&&s[n]&&u.push(s[n][0]),s[n]=0;for(c in l)Object.prototype.hasOwnProperty.call(l,c)&&(e[c]=l[c]);b&&b(t);while(u.length)u.shift()();return o.push.apply(o,i||[]),a()}function a(){for(var e,t=0;t<o.length;t++){for(var a=o[t],c=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(c=!1)}c&&(o.splice(t--,1),e=l(l.s=a[0]))}return e}var c={},n={app:0},s={app:0},o=[];function r(e){return l.p+"js/"+({}[e]||e)+"."+{"chunk-0c326440":"10d7f19c","chunk-2d0c19e3":"54b005f3","chunk-2d2261b5":"2df03df2","chunk-a3c88996":"bae71ac8","chunk-f83216a8":"41a95cd4"}[e]+".js"}function l(t){if(c[t])return c[t].exports;var a=c[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.e=function(e){var t=[],a={"chunk-0c326440":1,"chunk-a3c88996":1,"chunk-f83216a8":1};n[e]?t.push(n[e]):0!==n[e]&&a[e]&&t.push(n[e]=new Promise((function(t,a){for(var c="css/"+({}[e]||e)+"."+{"chunk-0c326440":"ef08765d","chunk-2d0c19e3":"31d6cfe0","chunk-2d2261b5":"31d6cfe0","chunk-a3c88996":"77320a37","chunk-f83216a8":"e2710e3c"}[e]+".css",s=l.p+c,o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var i=o[r],d=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(d===c||d===s))return t()}var u=document.getElementsByTagName("style");for(r=0;r<u.length;r++){i=u[r],d=i.getAttribute("data-href");if(d===c||d===s)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var c=t&&t.target&&t.target.src||s,o=new Error("Loading CSS chunk "+e+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete n[e],b.parentNode.removeChild(b),a(o)},b.href=s;var p=document.getElementsByTagName("head")[0];p.appendChild(b)})).then((function(){n[e]=0})));var c=s[e];if(0!==c)if(c)t.push(c[2]);else{var o=new Promise((function(t,a){c=s[e]=[t,a]}));t.push(c[2]=o);var i,d=document.createElement("script");d.charset="utf-8",d.timeout=120,l.nc&&d.setAttribute("nonce",l.nc),d.src=r(e);var u=new Error;i=function(t){d.onerror=d.onload=null,clearTimeout(b);var a=s[e];if(0!==a){if(a){var c=t&&("load"===t.type?"missing":t.type),n=t&&t.target&&t.target.src;u.message="Loading chunk "+e+" failed.\n("+c+": "+n+")",u.name="ChunkLoadError",u.type=c,u.request=n,a[1](u)}s[e]=void 0}};var b=setTimeout((function(){i({type:"timeout",target:d})}),12e4);d.onerror=d.onload=i,document.head.appendChild(d)}return Promise.all(t)},l.m=e,l.c=c,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var c in e)l.d(a,c,function(t){return e[t]}.bind(null,c));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/",l.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],d=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var b=d;o.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"024e":function(e,t,a){"use strict";a("6c8c")},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var c=a("bc3a"),n=a.n(c);const s=window.location.origin.includes("localhost")?"https://localhost:5001":"",o=n.a.create({baseURL:s,timeout:8e3}),r=function(e){o.defaults.headers.authorization=e}},"3a94":function(e,t,a){"use strict";a("d649")},"3c6e":function(e,t,a){"use strict";a("5a5a")},"41cb":function(e,t,a){"use strict";var c=a("6c02"),n=a("8816");function s(e){return()=>a("a2f9")(`./${e}.vue`)}const o=[{path:"/",name:"Home",component:s("HomePage")},{path:"/about",name:"About",component:s("AboutPage")},{path:"/account",name:"Account",component:s("AccountPage"),beforeEnter:n["a"]},{path:"/profiles/:id",name:"Profile",component:s("ProfilePage")},{path:"/vaults/:id",name:"Vault",component:s("VaultPage")}],r=Object(c["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(c["b"])(),routes:o});t["a"]=r},"4d0e":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-6013f93e");Object(c["t"])("data-v-6013f93e");const s={class:"vault"},o={class:"card-body"},r={class:"card-title"},l={class:"modal fade",id:"bear2",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i={class:"modal-dialog",role:"document"},d={class:"modal-content"},u={class:"modal-header"},b={class:"modal-title",id:"exampleModalLabel"},p=Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")],-1),g={class:"modal-body card-columns"},O={class:"modal-footer"},m=Object(c["g"])("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton1","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Delete Keep ",-1),v={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton1"};Object(c["r"])();const j=n((e,t,a,j,f,h)=>{const y=Object(c["x"])("router-link"),w=Object(c["x"])("keep");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",s,[Object(c["g"])("div",{class:"card",style:{width:"18rem"},onClick:t[1]||(t[1]=e=>j.getKeepsByVaultId(a.vault.id))},[Object(c["g"])(y,{to:{name:"Vault",params:{id:a.vault.id}}},{default:n(()=>[Object(c["g"])("div",o,[Object(c["g"])("h5",r,Object(c["z"])(a.vault.name),1)])]),_:1},8,["to"])])]),Object(c["g"])("div",l,[Object(c["g"])("div",i,[Object(c["g"])("div",d,[Object(c["g"])("div",u,[Object(c["g"])("h5",b,Object(c["z"])(j.state.activeVault.name),1),p]),Object(c["g"])("div",g,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(j.state.keeps,e=>(Object(c["q"])(),Object(c["d"])(w,{key:e.id,keep:e},null,8,["keep"]))),128))]),Object(c["g"])("div",O,[Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal",onClick:t[2]||(t[2]=e=>j.deleteVault(j.state.activeVault.id))}," Delete "),m,Object(c["g"])("div",v,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(j.state.keeps,e=>(Object(c["q"])(),Object(c["d"])("div",{class:"dropdown-item text-primary",href:"#",key:e.id,keeps:e,onClick:t=>j.deleteVaultKeep(e.vaultKeepId)},Object(c["z"])(e.name),9,["keeps","onClick"]))),128))])])])])])],64)});var f=a("7567"),h=a("d10d"),y=a("83fc"),w={name:"Vault",props:{vault:{type:Object,default:()=>new f["a"]}},setup(e){const t=Object(c["u"])({activeVault:Object(c["b"])(()=>y["a"].activeVault),keeps:Object(c["b"])(()=>y["a"].keeps),vaultkeeps:Object(c["b"])(()=>y["a"].vaultkeeps)});return{getVaultById(){y["a"].activeVault={},h["a"].getKeepById(e.vault.id)},getKeepsByVaultId(e){h["a"].getVaultById(e),h["a"].getKeepsByVaultId(e)},deleteVaultKeep(e){h["a"].deleteVaultKeep(e)},deleteVault(e){h["a"].deleteVault(e),h["a"].getVaultsByAccount()},state:t}},components:{}};a("3c6e");w.render=j,w.__scopeId="data-v-6013f93e";t["default"]=w},"56d7":function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["g"])("footer",null,[Object(c["g"])("div",{class:"bg-dark text-light text-center p-4"}," Made with much Pain and Tears by Jordan ")],-1);function s(e,t,a,s,o,r){const l=Object(c["x"])("Navbar"),i=Object(c["x"])("router-view"),d=Object(c["x"])("KeepCreate"),u=Object(c["x"])("VaultCreate");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("header",null,[Object(c["g"])(l)]),Object(c["g"])("main",null,[Object(c["g"])(i)]),n,Object(c["g"])(d),Object(c["g"])(u)],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(c["b"])(()=>o["a"])}}};a("024e");r.render=s;var l=r;function i(e){const t=a("ccc2");t.keys().forEach(a=>{const c=t(a),n=c.default||c,s=n.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(s,n)})}var d=a("41cb"),u=a("4989"),b=a.n(u),p=a("1157"),g=a.n(p),O=a("f0bd");const m=Object(c["c"])(l);i(m),m.use(d["a"],b.a,g.a,O["default"]).mount("#app")},"5a5a":function(e,t,a){},6551:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));class c{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.creatorId=e.creatorId||"test creatorId",this.name=e.name||"b",this.description=e.description,this.img=e.img,this.views=e.views,this.shares=e.shares,this.keeps=e.keeps,this.vaultKeepId=e.vaultKeepId||"c"}}},"6c8c":function(e,t,a){},"6c96":function(e,t,a){"use strict";a.d(t,"a",(function(){return l}));var c=a("83fc"),n=a("2b20"),s=a("6551"),o=a("8a4e");class r{async getKeeps(){const e=await n["a"].get("api/keeps");c["a"].keeps=e.data.map(e=>new s["a"](e)),c["a"].pkeeps=e.data.map(e=>new s["a"](e))}async getKeepById(e){const t=await n["a"].get("api/keeps/"+e);c["a"].activeKeep=new s["a"](t.data),o["a"].log(t.data)}async createKeep(e){try{await n["a"].post("api/keeps",e),this.getKeeps(),this.getKeepsByAccountId()}catch(t){o["a"].error(t),this.getKeeps()}}async deleteKeep(e){try{await n["a"].delete("api/keeps/"+e),this.getKeeps(),this.getKeepsByAccountId()}catch(t){o["a"].error(t)}}async getKeepsByAccountId(){try{const e=await n["a"].get("account/keeps");return c["a"].userKeeps=e.data.map(e=>new s["a"](e)),o["a"].log(e.data),e}catch(e){o["a"].log(e)}}}const l=new r},7567:function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));class c{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.creatorId=e.creatorId||"test creatorId",this.name=e.name||"b",this.description=e.description,this.isPrivate=e.isPrivate}}},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return n}));var c=a("7a23");const n=Object(c["u"])({user:{},account:{},vaults:[],keeps:[],activeVault:{},activeKeep:{},activeProfile:{},pkeeps:[],userVaults:[],userKeeps:[],vaultkeeps:[]})},"8a4e":function(e,t,a){"use strict";function c(e,t){window.location.origin.includes("localhost")&&console[e](...t)}a.d(t,"a",(function(){return n}));const n={log(){c("log",arguments)},error(){c("error",arguments)},warn(){c("warn",arguments)},assert(){c("assert",arguments)},trace(){c("trace",arguments)}}},"9d8d":function(e,t,a){"use strict";a.r(t);var c=a("7a23"),n=a("c974"),s=a.n(n);const o=Object(c["G"])("data-v-5ccb1d12");Object(c["t"])("data-v-5ccb1d12");const r={class:"navbar navbar-expand-lg navbar-dark bg-dark"},l=Object(c["g"])("div",{class:"d-flex flex-column align-items-center"},[Object(c["g"])("img",{alt:"logo",src:s.a,height:"45"})],-1),i=Object(c["g"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(c["g"])("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarText"},u={class:"navbar-nav mr-auto"},b={class:"nav-item"},p=Object(c["f"])(" Home "),g={class:"nav-item"},O=Object(c["f"])(" About "),m={class:"navbar-text"},v={key:1,class:"dropdown"},j={class:"mx-3"},f=Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(c["r"])();const h=o((e,t,a,n,s,h)=>{const y=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])("nav",r,[Object(c["g"])(y,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:o(()=>[l]),_:1}),i,Object(c["g"])("div",d,[Object(c["g"])("ul",u,[Object(c["g"])("li",b,[Object(c["g"])(y,{to:{name:"Home"},class:"nav-link"},{default:o(()=>[p]),_:1})]),Object(c["g"])("li",g,[Object(c["g"])(y,{to:{name:"About"},class:"nav-link"},{default:o(()=>[O]),_:1})])]),Object(c["g"])("span",m,[n.user.isAuthenticated?(Object(c["q"])(),Object(c["d"])("div",v,[Object(c["g"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>n.state.dropOpen=!n.state.dropOpen)},[Object(c["g"])("img",{src:n.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(c["g"])("span",j,Object(c["z"])(n.user.name),1)]),Object(c["g"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:n.state.dropOpen}],onClick:t[4]||(t[4]=e=>n.state.dropOpen=!1)},[Object(c["g"])(y,{to:{name:"Account"}},{default:o(()=>[f]),_:1}),Object(c["g"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>n.logout&&n.logout(...e))}," logout ")],2)])):(Object(c["q"])(),Object(c["d"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>n.login&&n.login(...e))}," Login "))])])])});var y=a("8816"),w=a("83fc");const k="jordangwilkerson.us.auth0.com",K="1OvN8Gqsx337JS9yDZrzQz4tSKHVMYGr",V="https://keepr.com";var x=a("41cb"),I=a("2b20"),C=a("8a4e");class A{async getAccount(){try{const e=await I["a"].get("/account");w["a"].account=e.data}catch(e){C["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const B=new A;var P=a("d10d"),_=a("6c96");const E=Object(y["b"])({domain:k,clientId:K,audience:V,onRedirectCallback:e=>{x["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});E.on(E.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(I["b"])(E.bearer),w["a"].user=E.user,await B.getAccount(),await P["a"].getVaultsByAccount(),await _["a"].getKeepsByAccountId()}));var T={name:"Navbar",setup(){const e=Object(c["u"])({dropOpen:!1});return{state:e,user:Object(c["b"])(()=>w["a"].user),async login(){E.loginWithPopup()},async logout(){await E.logout({returnTo:window.location.origin})}}}};a("3a94");T.render=h,T.__scopeId="data-v-5ccb1d12";t["default"]=T},a2f9:function(e,t,a){var c={"./AboutPage.vue":["478b","chunk-2d0c19e3"],"./AccountPage.vue":["e542","chunk-f83216a8"],"./HomePage.vue":["78a7","chunk-a3c88996"],"./ProfilePage.vue":["1a3e","chunk-0c326440"],"./VaultPage.vue":["e6f4","chunk-2d2261b5"]};function n(e){if(!a.o(c,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=c[e],n=t[0];return a.e(t[1]).then((function(){return a(n)}))}n.keys=function(){return Object.keys(c)},n.id="a2f9",e.exports=n},be0a:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-817bd8a6");Object(c["t"])("data-v-817bd8a6");const s={class:"VaultCreate"},o={class:"modal fade",id:"createModalVault",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},r={class:"modal-dialog",role:"document"},l={class:"modal-content"},i=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title"}," Create Vault "),Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),d={class:"modal-body"},u={class:"form-group"},b={class:"modal-footer"},p=Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1);Object(c["r"])();const g=n((e,t,a,n,g,O)=>(Object(c["q"])(),Object(c["d"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("div",l,[i,Object(c["g"])("div",d,[Object(c["g"])("form",{class:"form-inline",onSubmit:t[4]||(t[4]=Object(c["F"])((...e)=>n.createVault&&n.createVault(...e),["prevent"]))},[Object(c["g"])("div",u,[Object(c["E"])(Object(c["g"])("input",{type:"text",name:"name",id:"name",class:"form-control",placeholder:"Enter vault Name","aria-describedby":"helpId","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.newVault.name=e)},null,512),[[c["C"],n.state.newVault.name]]),Object(c["E"])(Object(c["g"])("input",{type:"text",name:"description",id:"description",class:"form-control",placeholder:"Enter Description of Vault","aria-describedby":"helpId","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.newVault.description=e)},null,512),[[c["C"],n.state.newVault.description]]),Object(c["E"])(Object(c["g"])("input",{type:"checkbox","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.newVault.isPrivate=e)},null,512),[[c["B"],n.state.newVault.isPrivate]])])],32)]),Object(c["g"])("div",b,[p,Object(c["g"])("button",{class:"btn btn-success",onClick:t[5]||(t[5]=(...e)=>n.createVault&&n.createVault(...e))}," Create ")])])])])])));var O=a("d10d"),m=a("8a4e"),v=a("1157"),j=a.n(v),f={name:"VaultCreate",setup(){const e=Object(c["u"])({newVault:{}});return{state:e,async createVault(){try{await O["a"].createVault(e.newVault),e.newVault={},j()("#createModalVault").modal("hide")}catch(t){m["a"].log(t)}}}},components:{}};f.render=g,f.__scopeId="data-v-817bd8a6";t["default"]=f},c87e:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-aca871e4");Object(c["t"])("data-v-aca871e4");const s={class:"pkeep"},o={class:"card bg-dark text-white"},r={class:"card-text",style:{position:"absolute",bottom:"0"}},l={class:"modal fade",id:"bear1",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i={class:"modal-dialog modal-xl container-fluid",role:"document"},d={class:"modal-content"},u={class:"modal-body row"},b={class:"col-6"},p={class:"col-6"},g=Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")],-1),O={class:"row justify-content-center"},m=Object(c["g"])("i",{class:"fa fa-lock fa-2x","aria-hidden":"true"},null,-1),v=Object(c["g"])("i",{class:"fa fa-eye fa-sx ml-2","aria-hidden":"true"},null,-1),j=Object(c["f"])(" 0 "),f={class:"row"},h={class:"row"},y={class:"row"},w={class:"dropdown"},k=Object(c["g"])("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add To Vault ",-1),K={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},V=Object(c["g"])("i",{class:"fa fa-user-circle-o fa-2x","aria-hidden":"true",style:{position:"absolute",bottom:"0",right:"0"}},null,-1);Object(c["r"])();const x=n((e,t,a,x,I,C)=>{const A=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("img",{class:"card-img",src:a.pkeep.img,alt:"Card image"},null,8,["src"]),Object(c["g"])("div",{class:"card-img-overlay","data-toggle":"modal","data-target":"#bear1",onClick:t[1]||(t[1]=(...e)=>x.getKeepById&&x.getKeepById(...e))},[Object(c["g"])("h3",r,Object(c["z"])(a.pkeep.name),1)])])]),Object(c["g"])("div",l,[Object(c["g"])("div",i,[Object(c["g"])("div",d,[Object(c["g"])("div",u,[Object(c["g"])("div",b,[Object(c["g"])("img",{class:"card-img",src:x.state.activeKeep.img,alt:"Card image"},null,8,["src"])]),Object(c["g"])("div",p,[g,Object(c["g"])("div",O,[m,Object(c["f"])(" "+Object(c["z"])(x.state.activeKeep.keeps)+" ",1),v,j]),Object(c["g"])("div",f,Object(c["z"])(x.state.activeKeep.name),1),Object(c["g"])("div",h,Object(c["z"])(x.state.activeKeep.description),1),Object(c["g"])("div",y,[Object(c["g"])("div",w,[k,Object(c["g"])("div",K,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(x.state.userVaults,e=>(Object(c["q"])(),Object(c["d"])("div",{class:"dropdown-item text-primary",href:"#",key:e.id,"user-vaults":e,onClick:t=>x.createVaultKeep(e.id)},Object(c["z"])(e.name),9,["user-vaults","onClick"]))),128))])]),x.state.activeKeep.creatorId==x.state.account.id?(Object(c["q"])(),Object(c["d"])("i",{key:0,class:"fa fa-trash-o","aria-hidden":"true",onClick:t[2]||(t[2]=(...e)=>x.deleteKeep&&x.deleteKeep(...e))})):Object(c["e"])("",!0),Object(c["g"])(A,{to:{name:"Profile",params:{id:x.state.activeKeep.creatorId}},class:"nav-link","data-dismiss":"modal"},{default:n(()=>[V]),_:1},8,["to"])])])])])])])],64)});class I{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.creatorId=e.creatorId||"test creatorId",this.name=e.name||"b",this.description=e.description,this.img=e.img,this.views=e.views,this.shares=e.shares,this.keeps=e.keeps,this.vaultKeepId=e.vaultKeepId||"c"}}var C=a("83fc"),A=a("6c96"),B=a("d10d"),P=a("1157"),_=a.n(P),E={name:"Pkeep",props:{pkeep:{type:Object,default:()=>new I}},setup(e){const t=Object(c["u"])({pkeep:Object(c["b"])(()=>C["a"].pkeeps),activeKeep:Object(c["b"])(()=>C["a"].activeKeep),account:Object(c["b"])(()=>C["a"].account),userVaults:Object(c["b"])(()=>C["a"].userVaults),newVault:{}});return{state:t,getKeepById(){C["a"].activeKeep={},A["a"].getKeepById(e.pkeep.id)},createVaultKeep(e){t.activeKeep.keeps++,t.newVault.keepId=t.activeKeep.id,t.newVault.vaultId=e,B["a"].createVaultKeep(t.newVault),t.newVault={}},deleteKeep(){window.confirm("Are You sure")&&(A["a"].deleteKeep(t.activeKeep.id),_()("#bear1").modal("hide"))}}},components:{}};E.render=x,E.__scopeId="data-v-aca871e4";t["default"]=E},c974:function(e,t,a){e.exports=a.p+"img/cw-logo.5a19e7f9.png"},ccc2:function(e,t,a){var c={"./keep.vue":"ffa0","./keepcreate.vue":"f672","./navbar.vue":"9d8d","./pkeep.vue":"c87e","./vault.vue":"4d0e","./vaultcreate.vue":"be0a"};function n(e){var t=s(e);return a(t)}function s(e){if(!a.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}n.keys=function(){return Object.keys(c)},n.resolve=s,e.exports=n,n.id="ccc2"},d10d:function(e,t,a){"use strict";a.d(t,"a",(function(){return d}));var c=a("83fc"),n=a("2b20"),s=a("7567"),o=a("8a4e");class r{constructor(e={}){this.id=e.id||e._id||"placeholder id",this.creatorId=e.creatorId||"test creatorId",this.name=e.name||"b",this.email=e.email,this.picture=e.picture}}var l=a("6551");class i{async getVaults(){const e=await n["a"].get("api/vaults");c["a"].vaults=e.data.map(e=>new s["a"](e))}async getVaultById(e){const t=await n["a"].get(`api/vaults/${e}/yeah`);c["a"].activeVault=new s["a"](t.data),o["a"].log(t.status)}async createVault(e){try{await n["a"].post("api/vaults",e),this.getVaults(),this.getVaultsByAccount()}catch(t){o["a"].error(t),this.getVaults()}}async deleteVault(e){try{await n["a"].delete("api/vaults/"+e),this.getVaultsByAccount(),this.getVaults()}catch(t){o["a"].error(t)}}async getVaultsByProfileId(e){try{const t=await n["a"].get("api/profiles/"+e+"/vaults");c["a"].vaults=t.data.map(e=>new s["a"](e)),o["a"].log(t.data)}catch(t){}}async getProfileById(e){const t=await n["a"].get("api/profiles/"+e);c["a"].activeProfile=new r(t.data)}async getKeepsByProfileId(e){const t=await n["a"].get("api/profiles/"+e+"/keeps");c["a"].pkeeps=t.data.map(e=>new l["a"](e)),o["a"].log(t.data)}async getVaultsByAccount(){const e=await n["a"].get("account/vaults");c["a"].userVaults=e.data.map(e=>new s["a"](e))}async createVaultKeep(e){const t=await n["a"].post("api/vaultkeeps",e);return o["a"].log(t.data),t}async getKeepsByVaultId(e){const t=await n["a"].get("api/vaults/"+e+"/keeps");return c["a"].keeps=t.data.map(e=>new l["a"](e)),o["a"].log(t.data),t}async deleteVaultKeep(e,t){const a=await n["a"].delete("api/vaultkeeps/"+e);return this.getKeepsByVaultId(t),a}}const d=new i},d649:function(e,t,a){},f672:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-7869d736");Object(c["t"])("data-v-7869d736");const s={class:"KeepCreate"},o={class:"modal fade",id:"createModal",tabindex:"-1",role:"dialog","aria-labelledby":"modelTitleId","aria-hidden":"true"},r={class:"modal-dialog",role:"document"},l={class:"modal-content"},i=Object(c["g"])("div",{class:"modal-header"},[Object(c["g"])("h5",{class:"modal-title"}," Create Keep "),Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")])],-1),d={class:"modal-body"},u={class:"form-group"},b={class:"modal-footer"},p=Object(c["g"])("button",{type:"button",class:"btn btn-secondary","data-dismiss":"modal"}," Close ",-1);Object(c["r"])();const g=n((e,t,a,n,g,O)=>(Object(c["q"])(),Object(c["d"])("div",s,[Object(c["g"])("div",o,[Object(c["g"])("div",r,[Object(c["g"])("div",l,[i,Object(c["g"])("div",d,[Object(c["g"])("form",{class:"form-inline",onSubmit:t[4]||(t[4]=Object(c["F"])((...e)=>n.createKeep&&n.createKeep(...e),["prevent"]))},[Object(c["g"])("div",u,[Object(c["E"])(Object(c["g"])("input",{type:"text",name:"name",id:"name",class:"form-control",placeholder:"Enter keep Name","aria-describedby":"helpId","onUpdate:modelValue":t[1]||(t[1]=e=>n.state.newKeep.name=e)},null,512),[[c["C"],n.state.newKeep.name]]),Object(c["E"])(Object(c["g"])("input",{type:"text",name:"description",id:"description",class:"form-control",placeholder:"Enter Description of Keep","aria-describedby":"helpId","onUpdate:modelValue":t[2]||(t[2]=e=>n.state.newKeep.description=e)},null,512),[[c["C"],n.state.newKeep.description]]),Object(c["E"])(Object(c["g"])("input",{type:"text",name:"img",id:"img",class:"form-control",placeholder:"Enter Image of Keep","aria-describedby":"helpId","onUpdate:modelValue":t[3]||(t[3]=e=>n.state.newKeep.img=e)},null,512),[[c["C"],n.state.newKeep.img]])])],32)]),Object(c["g"])("div",b,[p,Object(c["g"])("button",{class:"btn btn-success",onClick:t[5]||(t[5]=(...e)=>n.createKeep&&n.createKeep(...e))}," Create ")])])])])])));var O=a("6c96"),m=a("8a4e"),v=a("1157"),j=a.n(v),f={name:"KeepCreate",setup(){const e=Object(c["u"])({newKeep:{}});return{state:e,async createKeep(){try{await O["a"].createKeep(e.newKeep),e.newKeep={},j()("#createModal").modal("hide")}catch(t){m["a"].log(t)}}}},components:{}};f.render=g,f.__scopeId="data-v-7869d736";t["default"]=f},ffa0:function(e,t,a){"use strict";a.r(t);var c=a("7a23");const n=Object(c["G"])("data-v-edbe2ca8");Object(c["t"])("data-v-edbe2ca8");const s={class:"card bg-dark text-white"},o={class:"card-text",style:{position:"absolute",bottom:"0"}},r=Object(c["g"])("i",{class:"fa fa-user-circle-o","aria-hidden":"true",style:{position:"absolute",bottom:"0",right:"0"}},null,-1),l={class:"modal fade",id:"bear",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalLabel","aria-hidden":"true"},i={class:"modal-dialog modal-xl container-fluid",role:"document"},d={class:"modal-content"},u={class:"modal-body row"},b={class:"col-6"},p={class:"col-6"},g=Object(c["g"])("button",{type:"button",class:"close","data-dismiss":"modal","aria-label":"Close"},[Object(c["g"])("span",{"aria-hidden":"true"},"×")],-1),O={class:"row justify-content-center"},m=Object(c["g"])("i",{class:"fa fa-lock fa-2x","aria-hidden":"true"},null,-1),v=Object(c["g"])("i",{class:"fa fa-eye fa-sx ml-2","aria-hidden":"true"},null,-1),j=Object(c["f"])(" 0 "),f={class:"row"},h={class:"row"},y={class:"row"},w={class:"dropdown"},k=Object(c["g"])("button",{class:"btn btn-secondary dropdown-toggle",type:"button",id:"dropdownMenuButton","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}," Add To Vault ",-1),K={class:"dropdown-menu","aria-labelledby":"dropdownMenuButton"},V=Object(c["g"])("i",{class:"fa fa-user-circle-o fa-2x","aria-hidden":"true",style:{position:"absolute",bottom:"0",right:"0"}},null,-1);Object(c["r"])();const x=n((e,t,a,x,I,C)=>{const A=Object(c["x"])("router-link");return Object(c["q"])(),Object(c["d"])(c["a"],null,[Object(c["g"])("div",s,[Object(c["g"])("img",{class:"card-img",src:a.keep.img,alt:"Card image"},null,8,["src"]),Object(c["g"])("div",{class:"card-img-overlay","data-toggle":"modal","data-target":"#bear",onClick:t[1]||(t[1]=(...e)=>x.getKeepById&&x.getKeepById(...e))},[Object(c["g"])("h3",o,Object(c["z"])(a.keep.name),1),Object(c["g"])("p",null,[Object(c["g"])(A,{to:{name:"Profile",params:{id:a.keep.creatorId}},class:"nav-link","data-toggle":"modal","data-target":"#bear"},{default:n(()=>[r]),_:1},8,["to"])])])]),Object(c["g"])("div",l,[Object(c["g"])("div",i,[Object(c["g"])("div",d,[Object(c["g"])("div",u,[Object(c["g"])("div",b,[Object(c["g"])("img",{class:"card-img",src:x.state.activeKeep.img,alt:"Card image"},null,8,["src"])]),Object(c["g"])("div",p,[g,Object(c["g"])("div",O,[m,Object(c["f"])(" "+Object(c["z"])(x.state.activeKeep.keeps)+" ",1),v,j]),Object(c["g"])("div",f,Object(c["z"])(x.state.activeKeep.name),1),Object(c["g"])("div",h,Object(c["z"])(x.state.activeKeep.description),1),Object(c["g"])("div",y,[Object(c["g"])("div",w,[k,Object(c["g"])("div",K,[(Object(c["q"])(!0),Object(c["d"])(c["a"],null,Object(c["w"])(x.state.userVaults,e=>(Object(c["q"])(),Object(c["d"])("div",{class:"dropdown-item text-primary",href:"#",key:e.id,"user-vaults":e,onClick:t=>x.createVaultKeep(e.id)},Object(c["z"])(e.name),9,["user-vaults","onClick"]))),128))])]),x.state.activeKeep.creatorId==x.state.account.id?(Object(c["q"])(),Object(c["d"])("i",{key:0,class:"fa fa-trash-o","aria-hidden":"true",onClick:t[2]||(t[2]=(...e)=>x.deleteKeep&&x.deleteKeep(...e))})):Object(c["e"])("",!0),Object(c["g"])(A,{to:{name:"Profile",params:{id:x.state.activeKeep.creatorId}},class:"nav-link","data-dismiss":"modal"},{default:n(()=>[V]),_:1},8,["to"])])])])])])])],64)});var I=a("6551"),C=a("7567"),A=a("83fc"),B=a("6c96"),P=a("1157"),_=a.n(P),E=a("8a4e"),T=a("d10d"),q={name:"Keep",props:{keep:{type:Object,default:()=>new I["a"]},userVault:{type:Object,default:()=>new C["a"]}},setup(e){const t=Object(c["u"])({account:Object(c["b"])(()=>A["a"].account),keep:Object(c["b"])(()=>A["a"].keeps),activeKeep:Object(c["b"])(()=>A["a"].activeKeep),userVaults:Object(c["b"])(()=>A["a"].userVaults),newVault:{}});return{state:t,deleteKeep(){window.confirm("Are You sure")&&(B["a"].deleteKeep(t.activeKeep.id),_()("#bear").modal("hide"))},getKeepById(){A["a"].activeKeep={},B["a"].getKeepById(e.keep.id)},log(){E["a"].log("hi")},createVaultKeep(e){t.activeKeep.keeps++,t.newVault.keepId=t.activeKeep.id,t.newVault.vaultId=e,T["a"].createVaultKeep(t.newVault),t.newVault={}}}},components:{}};q.render=x,q.__scopeId="data-v-edbe2ca8";t["default"]=q}});