import{S as L}from"./index-f11afb8e.js";import{_ as T,b as h,s as x,r,o as t,c as n,a as l,e as P,F as p,f as v,h as y,w as o,i as c,t as z,g}from"./index-a3dd337d.js";const N={components:{ScmMainCartItem:L},data(){return{tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},manageSkuInfoList:[]}},methods:{updateSku(a,u,_,k){h.updateSku([a.skuId],u,_).then(m=>{m.data.code===1&&(x(k),u!=null&&(a.skuStatus=u),_!=null&&(a.skuTransStatus=_))})},skuDetailInfo(a){this.$router.push("/sku-detail/"+a)},backToParentPage(){this.$router.go(-1)}},mounted(){h.skuManageList().then(a=>{console.log(JSON.stringify(a.data)),a.data.code==1&&(this.manageSkuInfoList=a.data.data)})},computed:{}},w={key:0,class:"mainCart"},B={key:0,style:{display:"inline"}},M={key:1,style:{display:"inline"}},V={key:2,style:{display:"inline"}},D={key:3,style:{display:"inline"}},$={key:4,style:{display:"inline"}},F={key:5,style:{display:"inline"}},E={key:1};function J(a,u,_,k,m,s){const S=r("van-nav-bar"),C=r("van-tag"),d=r("van-button"),f=r("van-card"),b=r("van-empty");return t(),n(p,null,[l(S,{title:"商品管理","left-text":"返回","left-arrow":"",onClickLeft:s.backToParentPage},null,8,["onClickLeft"]),P("div",null,[m.manageSkuInfoList.length>0?(t(),n("div",w,[(t(!0),n(p,null,v(m.manageSkuInfoList,e=>(t(),y(f,{tag:e.count,num:e.count,price:e.price,desc:e.desc,title:e.title,thumb:e.thumbs[0],key:e.skuId},{tags:o(()=>[(t(!0),n(p,null,v(e.tags,i=>(t(),y(C,{type:"success",color:this.tagInfo[i].color,key:i},{default:o(()=>[c(z(this.tagInfo[i].name),1)]),_:2},1032,["color"]))),128))]),footer:o(()=>[l(d,{size:"mini",onClick:i=>s.skuDetailInfo(e.skuId)},{default:o(()=>[c("查看")]),_:2},1032,["onClick"]),e.skuStatus===0?(t(),n("div",B,[l(d,{size:"mini",onClick:i=>s.updateSku(e,1,null,"下架成功，此商品将仅对自己可见。")},{default:o(()=>[c("下架")]),_:2},1032,["onClick"])])):g("",!0),e.skuStatus===1?(t(),n("div",M,[l(d,{size:"mini",onClick:i=>s.updateSku(e,0,null,"上架成功，此商品对他人可见。")},{default:o(()=>[c("上架")]),_:2},1032,["onClick"])])):(t(),n("div",V)),e.skuTransStatus===0?(t(),n("div",D,[l(d,{size:"mini",onClick:i=>s.updateSku(e,null,1,"已经更新为已卖状态，表示该商品已经售卖。")},{default:o(()=>[c("已卖")]),_:2},1032,["onClick"])])):g("",!0),e.skuTransStatus===1?(t(),n("div",$,[l(d,{size:"mini",onClick:i=>s.updateSku(e,null,0,"已经更新为在卖状态，表示该商品目前待卖。")},{default:o(()=>[c("在卖")]),_:2},1032,["onClick"])])):(t(),n("div",F))]),_:2},1032,["tag","num","price","desc","title","thumb"]))),128))])):(t(),n("div",E,[l(b,{description:"暂未发布商品，请发布商品！"})]))])],64)}const q=T(N,[["render",J]]);export{q as default};
