import{_ as k,b as _,s as p,r as g,o as u,c,a as t,d as s,w as b,t as h,h as I,v as y,p as w,i as C}from"./index-1670978e.js";const T={data(){return{user:{avatar:"",defaultAvatar:"https://t7.baidu.com/it/u=2268267538,364165622&fm=193&f=GIF",nickname:"",username:"",sign:"",isLogin:!1},signInfo:{showCenter:!1,editable:!1},uploadImgUrl:[],uploadFiles:n=>{console.log("file = "+n),n.status="uploading",n.message="上传中...",_.upLoadFiles([n.file]).then(m=>{let i=m.data;n.status=i.code,i.code===1?(n.message="上传成功",n.file=i.data[0],_.updateUserInfo(null,i.data[0]).then(o=>{i.code!==1?p("上传头像失败！"):this.refreshUserInfo()})):n.message=i.message}).catch(m=>{console.log("err = "+m)})}}},methods:{goTo(n){this.$router.push(n)},changeAvatar(){alert("点击头像")},changeSign(){this.signInfo.editable=!1,_.updateUserInfo(this.user.sign,null).then(n=>{n.data.code===1&&p("修改成功")})},refreshUserInfo(){_.userInfoInMy().then(n=>{if(n.data.code===1){let e=n.data.data;this.user.sign=e.sign,this.user.avatar=e.avatar,this.user.nickname=e.nickName,this.user.username=e.userName,this.user.isLogin=!0}else this.user.isLogin=!1})}},mounted(){this.refreshUserInfo()}},d=n=>(w("data-v-bb3f25c8"),n=n(),C(),n),x={class:"user-box"},S={class:"user-info"},U={key:0,class:"info"},L=["src"],M={class:"user-desc"},F={key:0},N={class:"name"},A={key:1},B=d(()=>s("span",{class:"name"},"个性签名：",-1)),V={key:1,class:"login_div"},D={class:"user-list"},P=d(()=>s("span",null,"商品发布",-1)),E=d(()=>s("span",null,"商品管理",-1)),G=d(()=>s("span",null,"分享有礼",-1)),j=d(()=>s("span",null,"个人设置",-1)),q=d(()=>s("span",null,"关于我们",-1));function z(n,e,m,i,o,l){const f=g("s-header"),v=g("van-uploader"),r=g("van-icon");return u(),c("div",x,[t(f,{name:"我的",showLeftIcon:!1}),s("div",S,[this.user.isLogin?(u(),c("div",U,[t(v,{"after-read":o.uploadFiles},{default:b(()=>[s("img",{src:o.user.avatar||o.user.defaultAvatar},null,8,L)]),_:1},8,["after-read"]),s("div",M,[s("span",null,"用户昵称："+h(o.user.nickname),1),s("span",null,"登录账号："+h(o.user.username),1),s("div",null,[o.signInfo.editable?(u(),c("div",A,[B,I(s("input",{style:{"background-color":"#646566"},"onUpdate:modelValue":e[1]||(e[1]=a=>o.user.sign=a),maxlength:"20"},null,512),[[y,o.user.sign]]),t(r,{name:"checked",onClick:l.changeSign},null,8,["onClick"])])):(u(),c("div",F,[s("span",N,"个性签名："+h(o.user.sign),1),t(r,{name:"edit",onClick:e[0]||(e[0]=a=>o.signInfo.editable=!0)})]))])])])):(u(),c("div",V,[s("div",null,[s("button",{onClick:e[2]||(e[2]=a=>l.goTo("/login"))},"登 录")])]))]),s("ul",D,[s("li",{class:"van-hairline--bottom",onClick:e[3]||(e[3]=a=>l.goTo("/add-sku"))},[P,t(r,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:e[4]||(e[4]=a=>l.goTo("/manage-sku"))},[E,t(r,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:e[5]||(e[5]=a=>l.goTo("/share-app",{from:"mine"}))},[G,t(r,{name:"arrow"})]),s("li",{onClick:e[6]||(e[6]=a=>l.goTo("/my-setting"))},[j,t(r,{name:"arrow"})]),s("li",{onClick:e[7]||(e[7]=a=>l.goTo("/my_about"))},[q,t(r,{name:"arrow"})])])])}const J=k(T,[["render",z],["__scopeId","data-v-bb3f25c8"]]);export{J as default};
