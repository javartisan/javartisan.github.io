import{_ as m,r as s,o as g,c as f,b as t,a as l,w as r,f as c}from"./index-da28332e.js";import{a as v}from"./function-call-e1d5dd5c.js";const b={data(){return{userName:"",password:""}},methods:{backToParentPage(){this.$router.go(-1)},login(){this.$store.isLogin=!0,this.$router.push("/my")},forgetPassword(){v({message:"忘记密码"})},goTo(i){this.$router.push(i)}}},w={class:"reg-login-input-btn"},k={class:"forgetPassword"};function V(i,e,C,P,a,n){const _=s("van-nav-bar"),u=s("van-field"),p=s("van-cell-group"),d=s("van-button");return g(),f("div",null,[t("div",null,[l(_,{title:"我的","left-text":"返回","left-arrow":"",onClickLeft:n.backToParentPage},null,8,["onClickLeft"])]),t("div",w,[l(p,null,{default:r(()=>[l(u,{modelValue:a.userName,"onUpdate:modelValue":e[0]||(e[0]=o=>a.userName=o),required:"",clearable:"",label:"用户名",placeholder:"请输入用户名"},null,8,["modelValue"]),l(u,{modelValue:a.password,"onUpdate:modelValue":e[1]||(e[1]=o=>a.password=o),type:"password",label:"密码",placeholder:"请输入密码",required:""},null,8,["modelValue"])]),_:1})]),t("div",k,[t("a",{onClick:e[2]||(e[2]=(...o)=>n.forgetPassword&&n.forgetPassword(...o))},"忘记密码?")]),t("div",null,[l(d,{class:"login-btn",plain:"",onClick:n.login},{default:r(()=>[c("登录")]),_:1},8,["onClick"]),l(d,{class:"login-btn",plain:"",onClick:e[3]||(e[3]=o=>n.goTo("/register"))},{default:r(()=>[c("注册")]),_:1})])])}const N=m(b,[["render",V]]);export{N as default};
