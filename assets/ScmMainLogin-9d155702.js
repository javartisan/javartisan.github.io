import{_ as m,g,s as f,r,o as v,c as b,b as n,a,w as d,f as c}from"./index-843b6647.js";import{s as w}from"./function-call-b0df2010.js";const k={data(){return{userName:"",password:"",verifyCode:""}},methods:{backToParentPage(){this.$router.go(-1)},login(){g.login(this.userName,this.password,this.verifyCode).then(t=>{t.data.code===1&&t.data.data===!0?this.$router.push("/my"):f("用户名或密码错误！")})},forgetPassword(){w({message:"忘记密码"})},goTo(t){this.$router.push(t)}}},h={class:"reg-login-input-btn"},C={class:"forgetPassword"};function V(t,e,P,x,s,l){const _=r("van-nav-bar"),i=r("van-field"),p=r("van-cell-group"),u=r("van-button");return v(),b("div",null,[n("div",null,[a(_,{title:"我的","left-text":"返回","left-arrow":"",onClickLeft:l.backToParentPage},null,8,["onClickLeft"])]),n("div",h,[a(p,null,{default:d(()=>[a(i,{modelValue:s.userName,"onUpdate:modelValue":e[0]||(e[0]=o=>s.userName=o),required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},null,8,["modelValue"]),a(i,{modelValue:s.password,"onUpdate:modelValue":e[1]||(e[1]=o=>s.password=o),type:"password",label:"密码",placeholder:"请输入密码",required:""},null,8,["modelValue"])]),_:1})]),n("div",C,[n("a",{onClick:e[2]||(e[2]=(...o)=>l.forgetPassword&&l.forgetPassword(...o))},"忘记密码?")]),n("div",null,[a(u,{class:"login-btn",plain:"",onClick:l.login},{default:d(()=>[c("登录")]),_:1},8,["onClick"]),a(u,{class:"login-btn",plain:"",onClick:e[3]||(e[3]=o=>l.goTo("/register"))},{default:d(()=>[c("注册")]),_:1})])])}const T=m(k,[["render",V]]);export{T as default};
