import{S as L}from"./index-36ff2bf7.js";import{_ as T,g as h,s as P,r,o as t,c as a,a as c,b as x,F as _,d as v,e as g,w as i,f as l,t as N,q as S}from"./index-47d12f78.js";const z={components:{ScmMainCartItem:L},data(){return{tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},manageSkuInfoList:[{title:"商品标题",desc:"商品描述信息",tags:["mobilePhone","computer"],thumbs:["https://t7.baidu.com/it/u=674568614,1388980693&fm=193&f=GIF"],telNumber:"15640123888",addr:"北京市昌平区",skuId:1,skuStatus:1,skuTransStatus:1,count:1,price:10}]}},methods:{updateSku(n,d,m){h.updateSku([n.skuId],d,m).then(k=>{k.data.code===1&&(P("更新成功！"),d!=null&&(n.skuStatus=d),m!=null&&(n.skuTransStatus=m))})},skuDetailInfo(n){this.$router.push("/sku-detail/"+n)},backToParentPage(){this.$router.go(-1)}},mounted(){h.skuManageList().then(n=>{console.log(JSON.stringify(n.data)),n.data.code==1&&(this.manageSkuInfoList=n.data.data)})},computed:{}},w={key:0,class:"mainCart"},B={key:0},M={key:1},V={key:2},D={key:3},F={key:4},$={key:5},q={key:1};function E(n,d,m,k,p,s){const b=r("van-nav-bar"),f=r("van-tag"),u=r("van-button"),C=r("van-card"),y=r("van-empty");return t(),a(_,null,[c(b,{title:"商品管理","left-text":"返回","left-arrow":"",onClickLeft:s.backToParentPage},null,8,["onClickLeft"]),x("div",null,[p.manageSkuInfoList.length>0?(t(),a("div",w,[(t(!0),a(_,null,v(p.manageSkuInfoList,e=>(t(),g(C,{tag:e.count,num:e.count,price:e.price,desc:e.desc,title:e.title,thumb:e.thumbs[0],key:e.skuId},{tags:i(()=>[(t(!0),a(_,null,v(e.tags,o=>(t(),g(f,{type:"success",color:this.tagInfo[o].color,key:o},{default:i(()=>[l(N(this.tagInfo[o].name),1)]),_:2},1032,["color"]))),128))]),footer:i(()=>[c(u,{size:"mini",onClick:o=>s.skuDetailInfo(e.skuId)},{default:i(()=>[l("查看")]),_:2},1032,["onClick"]),e.skuStatus===0?(t(),a("div",B,[c(u,{size:"mini",onClick:o=>s.updateSku(e,1,null)},{default:i(()=>[l("点击下架")]),_:2},1032,["onClick"])])):S("",!0),e.skuStatus===1?(t(),a("div",M,[c(u,{size:"mini",onClick:o=>s.updateSku(e,0,null)},{default:i(()=>[l("点击上架")]),_:2},1032,["onClick"])])):(t(),a("div",V)),e.skuTransStatus===0?(t(),a("div",D,[c(u,{size:"mini",onClick:o=>s.updateSku(e,null,1)},{default:i(()=>[l("已卖")]),_:2},1032,["onClick"])])):S("",!0),e.skuTransStatus===1?(t(),a("div",F,[c(u,{size:"mini",onClick:o=>s.updateSku(e,null,0)},{default:i(()=>[l("在卖")]),_:2},1032,["onClick"])])):(t(),a("div",$))]),_:2},1032,["tag","num","price","desc","title","thumb"]))),128))])):(t(),a("div",q,[c(y,{description:"暂无关注商品"})]))])],64)}const O=T(z,[["render",E]]);export{O as default};
