import{_ as v,b as c,r as i,o as s,c as l,a as d,w as r,F as h,f as k,e as f,t as _}from"./index-3eb38288.js";import{a as b}from"./function-call-ef1a11d6.js";const y={data(){return{loading:!1,finished:!1,devices:[]}},methods:{backToParentPage(){this.$router.go(-1)},onLoad(){const e=this;c.deviceList().then(n=>{n.data.code===1&&(e.devices=n.data.data)}),e.loading=!1,e.finished=!0},exitLogin(){b({title:"提示",message:"确定退出？"}).then(e=>{c.unlogin()})},mounted(){}}},L={style:{display:"block"}},x={style:{display:"block"}};function C(e,n,w,P,a,o){const g=i("van-nav-bar"),p=i("van-cell"),m=i("van-list");return s(),l("div",null,[d(g,{title:"设备管理","left-text":"返回","left-arrow":"",onClickLeft:o.backToParentPage},null,8,["onClickLeft"]),d(m,{loading:a.loading,"onUpdate:loading":n[0]||(n[0]=t=>a.loading=t),finished:a.finished,"finished-text":"没有更多了",onLoad:o.onLoad},{default:r(()=>[(s(!0),l(h,null,k(a.devices,(t,u)=>(s(),l("div",{key:u},[d(p,{icon:"friends",title:t.deviceName,"title-style":"display:block",style:{display:"block"},clickable:"true",onClick:o.exitLogin},{default:r(()=>[f("span",L,"登录时间："+_(t.loginTime),1),f("span",x,"过期时间："+_(t.expiredTime),1)]),_:2},1032,["title","onClick"])]))),128))]),_:1},8,["loading","finished","onLoad"])])}const D=v(y,[["render",C]]);export{D as default};
