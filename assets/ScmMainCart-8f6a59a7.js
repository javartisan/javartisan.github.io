import{S as v}from"./index-a8acd053.js";import{_ as S,b as l,s as y,r as i,o,c as n,F as p,f,a as r,h as k,w as a,i as d,t as C}from"./index-19ffa880.js";const b={components:{ScmMainCartItem:v},data(){return{isLogin:!1,tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},cartSkuInfoList:[]}},methods:{deleteFromCartList(t){console.log(JSON.stringify(t)),l.followSku(t.skuId,!1).then(u=>{u.data.code===1&&(y(`移除关注商品：${t.title}`),this.refreshSkuList())})},skuDetailInfo(t){this.$router.push("/sku-detail/"+t)},refreshSkuList(){l.followedSkuList().then(t=>{t.data.code===1&&(this.cartSkuInfoList=t.data.data)})}},mounted(){l.userInfoInMy().then(t=>{if(t.data.code===1)this.isLogin=!0;else{this.isLogin=!1;return}}),this.refreshSkuList(),this.$store.cartCount=this.cartSkuInfoList.length},computed:{}},w={key:0},x={key:0,class:"mainCart"},I={key:1},D={key:1};function F(t,u,$,B,c,m){const g=i("van-tag"),h=i("van-button"),L=i("van-card"),_=i("van-empty");return c.isLogin?(o(),n("div",w,[c.cartSkuInfoList.length>0?(o(),n("div",x,[(o(!0),n(p,null,f(c.cartSkuInfoList,e=>(o(),k(L,{tag:e.count,num:e.count,price:e.price,desc:"发布日期："+e.createdDate,title:e.title,thumb:e.thumbs[0],key:e.skuId},{tags:a(()=>[(o(!0),n(p,null,f(e.tags,s=>(o(),k(g,{type:"success",color:this.tagInfo[s].color,key:s},{default:a(()=>[d(C(this.tagInfo[s].name),1)]),_:2},1032,["color"]))),128))]),footer:a(()=>[r(h,{size:"mini",onClick:s=>m.skuDetailInfo(e.skuId)},{default:a(()=>[d("查看")]),_:2},1032,["onClick"]),r(h,{size:"mini",onClick:s=>m.deleteFromCartList(e)},{default:a(()=>[d("移除")]),_:2},1032,["onClick"])]),_:2},1032,["tag","num","price","desc","title","thumb"]))),128))])):(o(),n("div",I,[r(_,{description:"暂无关注商品"})]))])):(o(),n("div",D,[r(_,{description:"暂未登录，请登录！"})]))}const z=S(b,[["render",F]]);export{z as default};
