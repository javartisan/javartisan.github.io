import{_ as p,r as u,o as _,c,a,b as s,t as d,p as g,g as v}from"./index-4af2fa83.js";const h={data(){return{user:{avatar:"https://t7.baidu.com/it/u=2268267538,364165622&fm=193&f=GIF",nickname:"nickname-tom",username:"username-tom",sign:"个性签名个性吧？"}}},methods:{goTo(e){this.$router.push(e)}}},i=e=>(g("data-v-0ed34eca"),e=e(),v(),e),k={class:"user-box"},b={class:"user-info"},f={key:0,class:"info"},y=["src"],C={class:"user-desc"},T={class:"name"},w={key:1,class:"none_login"},I=i(()=>s("label",{class:"login_msg"},"U are not login,please login!",-1)),S={class:"register_login_btn"},x={class:"user-list"},M=i(()=>s("span",null,"商品发布",-1)),B=i(()=>s("span",null,"商品管理",-1)),L=i(()=>s("span",null,"分享有礼",-1)),N=i(()=>s("span",null,"个人设置",-1)),V=i(()=>s("span",null,"关于我们",-1));function $(e,n,A,D,r,o){const m=u("s-header"),l=u("van-icon");return _(),c("div",k,[a(m,{name:"我的",showLeftIcon:!1}),s("div",b,[this.$store.isLogin?(_(),c("div",f,[s("img",{src:r.user.avatar||e.defaultAvatar},null,8,y),s("div",C,[s("span",null,"昵称："+d(r.user.nickname),1),s("span",null,"登录名："+d(r.user.username),1),s("span",T,"个性签名："+d(r.user.sign),1)])])):(_(),c("div",w,[I,s("div",S,[s("span",null,[s("button",{id:"login_btn",onClick:n[0]||(n[0]=t=>o.goTo("/login"))},"登录")]),s("span",null,[s("button",{id:"register_btn",onClick:n[1]||(n[1]=t=>o.goTo("/register"))},"注册")])])]))]),s("ul",x,[s("li",{class:"van-hairline--bottom",onClick:n[2]||(n[2]=t=>o.goTo("/add-sku"))},[M,a(l,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:n[3]||(n[3]=t=>o.goTo("/manage-sku"))},[B,a(l,{name:"arrow"})]),s("li",{class:"van-hairline--bottom",onClick:n[4]||(n[4]=t=>o.goTo("/share-app",{from:"mine"}))},[L,a(l,{name:"arrow"})]),s("li",{onClick:n[5]||(n[5]=t=>o.goTo("/my_about"))},[N,a(l,{name:"arrow"})]),s("li",{onClick:n[6]||(n[6]=t=>o.goTo("/my_about"))},[V,a(l,{name:"arrow"})])])])}const F=p(h,[["render",$],["__scopeId","data-v-0ed34eca"]]);export{F as default};
