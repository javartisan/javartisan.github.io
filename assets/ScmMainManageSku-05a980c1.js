import{S as L}from"./index-1746ae2d.js";import{_ as M,b as h,s as T,r as u,o as t,c as n,a as l,e as x,F as p,f as y,h as g,w as s,i as c,t as P,g as v}from"./index-24cc7ad0.js";const z={components:{ScmMainCartItem:L},data(){return{emptyMsg:"",tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},manageSkuInfoList:[]}},methods:{updateSku(a,m,_,k){h.updateSku([a.skuId],m,_).then(d=>{d.data.code===1&&(T(k),m!=null&&(a.skuStatus=m),_!=null&&(a.skuTransStatus=_))})},skuDetailInfo(a){this.$router.push("/sku-detail/"+a)},backToParentPage(){this.$router.go(-1)}},mounted(){h.skuManageList().then(a=>{a.data.code==1?a.data.data.length>0?this.manageSkuInfoList=a.data.data:this.emptyMsg="暂未发布商品，请发布商品！":this.emptyMsg=a.data.message})},computed:{}},w={key:0,class:"mainCart"},B={key:0,style:{display:"inline"}},N={key:1,style:{display:"inline"}},V={key:2,style:{display:"inline"}},D={key:3,style:{display:"inline"}},F={key:4,style:{display:"inline"}},$={key:5,style:{display:"inline"}},E={key:1};function j(a,m,_,k,d,o){const C=u("van-nav-bar"),S=u("van-tag"),r=u("van-button"),f=u("van-card"),b=u("van-empty");return t(),n(p,null,[l(C,{title:"商品管理","left-text":"返回","left-arrow":"",onClickLeft:o.backToParentPage},null,8,["onClickLeft"]),x("div",null,[d.manageSkuInfoList.length>0?(t(),n("div",w,[(t(!0),n(p,null,y(d.manageSkuInfoList,e=>(t(),g(f,{tag:e.count,num:e.count,price:e.price,desc:e.desc,title:e.title,thumb:e.thumbs[0],key:e.skuId},{tags:s(()=>[(t(!0),n(p,null,y(e.tags,i=>(t(),g(S,{type:"success",color:this.tagInfo[i].color,key:i},{default:s(()=>[c(P(this.tagInfo[i].name),1)]),_:2},1032,["color"]))),128))]),footer:s(()=>[l(r,{size:"mini",onClick:i=>o.skuDetailInfo(e.skuId)},{default:s(()=>[c("查看")]),_:2},1032,["onClick"]),e.skuStatus===0?(t(),n("div",B,[l(r,{size:"mini",onClick:i=>o.updateSku(e,1,null,"下架成功，此商品将仅对自己可见。")},{default:s(()=>[c("下架")]),_:2},1032,["onClick"])])):v("",!0),e.skuStatus===1?(t(),n("div",N,[l(r,{size:"mini",onClick:i=>o.updateSku(e,0,null,"上架成功，此商品对他人可见。")},{default:s(()=>[c("上架")]),_:2},1032,["onClick"])])):(t(),n("div",V)),e.skuTransStatus===0?(t(),n("div",D,[l(r,{size:"mini",onClick:i=>o.updateSku(e,null,1,"已经更新为已卖状态，表示该商品已经售卖。")},{default:s(()=>[c("已卖")]),_:2},1032,["onClick"])])):v("",!0),e.skuTransStatus===1?(t(),n("div",F,[l(r,{size:"mini",onClick:i=>o.updateSku(e,null,0,"已经更新为在卖状态，表示该商品目前待卖。")},{default:s(()=>[c("在卖")]),_:2},1032,["onClick"])])):(t(),n("div",$))]),_:2},1032,["tag","num","price","desc","title","thumb"]))),128))])):(t(),n("div",E,[l(b,{description:d.emptyMsg},null,8,["description"])]))])],64)}const G=M(z,[["render",j]]);export{G as default};
