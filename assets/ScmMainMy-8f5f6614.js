import{_ as k,b as _,s as h,r as g,o as d,c,a,e as s,w as b,t as p,i as I,v as w,p as y,j as C}from"./index-1947abeb.js";const T=""+new URL("../unlogin_icon.png",import.meta.url).href;const x={data(){return{user:{avatar:"",defaultAvatar:"https://t7.baidu.com/it/u=2268267538,364165622&fm=193&f=GIF",nickname:"",username:"",sign:"",isLogin:!1},signInfo:{showCenter:!1,editable:!1},uploadImgUrl:[],uploadFiles:n=>{console.log("file = "+n),n.status="uploading",n.message="上传中...",_.upLoadFiles([n.file]).then(m=>{let l=m.data;n.status=l.code,l.code===1?(n.message="上传成功",n.file=l.data[0],_.updateUserInfo(null,l.data[0]).then(o=>{l.code!==1?h("上传头像失败！"):this.refreshUserInfo()})):n.message=l.message}).catch(m=>{console.log("err = "+m)})}}},methods:{goTo(n){this.$router.push(n)},changeSign(){this.signInfo.editable=!1,_.updateUserInfo(this.user.sign,null).then(n=>{n.data.code===1&&h("修改成功")})},refreshUserInfo(){_.userInfoInMy().then(n=>{if(n.data.code===1){let e=n.data.data;this.user.sign=e.sign,this.user.avatar=e.avatar,this.user.nickname=e.nickName,this.user.username=e.userName,this.user.isLogin=!0}else this.user.isLogin=!1})}},mounted(){this.refreshUserInfo()}},u=n=>(y("data-v-abf02ea3"),n=n(),C(),n),S={class:"user-box"},U={class:"user-info"},L={key:0,class:"info"},M=["src"],F={class:"user-desc"},N={key:0},B={class:"name"},V={key:1},A=u(()=>s("span",{class:"name"},"个性签名：",-1)),D={key:1,class:"login_div"},P=u(()=>s("img",{class:"unlogin_img",src:T},null,-1)),j={class:"user-list"},E=u(()=>s("span",null,"商品发布",-1)),G=u(()=>s("span",null,"商品管理",-1)),R=u(()=>s("span",null,"分享有礼",-1)),q=u(()=>s("span",null,"个人设置",-1)),z=u(()=>s("span",null,"关于我们",-1));function H(n,e,m,l,o,i){const f=g("s-header"),v=g("van-uploader"),r=g("van-icon");return d(),c("div",S,[a(f,{name:"我的",showLeftIcon:!1}),s("div",U,[this.user.isLogin?(d(),c("div",L,[a(v,{"after-read":o.uploadFiles},{default:b(()=>[s("img",{src:o.user.avatar||o.user.defaultAvatar},null,8,M)]),_:1},8,["after-read"]),s("div",F,[s("span",null,"用户昵称："+p(o.user.nickname),1),s("span",null,"登录账号："+p(o.user.username),1),s("div",null,[o.signInfo.editable?(d(),c("div",V,[A,I(s("input",{style:{"background-color":"#646566"},"onUpdate:modelValue":e[1]||(e[1]=t=>o.user.sign=t),maxlength:"20"},null,512),[[w,o.user.sign]]),a(r,{name:"checked",onClick:i.changeSign},null,8,["onClick"])])):(d(),c("div",N,[s("span",B,"个性签名："+p(o.user.sign),1),a(r,{name:"edit",onClick:e[0]||(e[0]=t=>o.signInfo.editable=!0)})]))])])])):(d(),c("div",D,[P,s("div",null,[s("button",{onClick:e[2]||(e[2]=t=>i.goTo("/login"))},"登 录"),s("button",{onClick:e[3]||(e[3]=t=>i.goTo("/login"))},"注 册")])]))]),s("ul",j,[s("li",{class:"van-hairline--bottom",onClick:e[4]||(e[4]=t=>i.goTo("/add-sku"))},[E,a(r,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:e[5]||(e[5]=t=>i.goTo("/manage-sku"))},[G,a(r,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:e[6]||(e[6]=t=>i.goTo("/share-app",{from:"mine"}))},[R,a(r,{name:"arrow"})]),s("li",{onClick:e[7]||(e[7]=t=>i.goTo("/my-setting"))},[q,a(r,{name:"arrow"})]),s("li",{onClick:e[8]||(e[8]=t=>i.goTo("/my_about"))},[z,a(r,{name:"arrow"})])])])}const K=k(x,[["render",H],["__scopeId","data-v-abf02ea3"]]);export{K as default};
