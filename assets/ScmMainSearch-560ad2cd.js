import{_ as h,b as V,r as n,o as r,c as d,a,w as u,d as c,F as m,e as g,f as _,g as x,t as C}from"./index-1f468ef8.js";const O={data(){return{keyword:"",skuInfoList:[],dropdownMenu:{orderOptions:[{text:"默认排序",value:"a"},{text:"时间排序",value:"b"},{text:"销量排序",value:"c"}],orderOption:"a",statusOptions:[{text:"全部状态",value:"a"},{text:"在售",value:"b"},{text:"已售",value:"c"}],statusOption:"a"},tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},listPageInfo:{currentPage:0,totalPageCount:100,sizePerPage:10}}},methods:{backToParentPage(){this.$router.go(-1)},onSearchClick(l){V.searchSkuList(l).then(t=>{t.data.code===1&&(this.skuInfoList=t.data.data)})},skuDetailInfo(l){this.$router.push("/sku-detail/"+l)}}},M={class:"sku-list"},y={class:"pagination"};function I(l,t,L,S,o,s){const v=n("van-nav-bar"),k=n("van-search"),p=n("van-dropdown-item"),f=n("van-dropdown-menu"),P=n("van-tag"),w=n("van-card"),b=n("van-pagination");return r(),d("div",null,[a(v,{title:"搜索","left-text":"返回","left-arrow":"",onClickLeft:s.backToParentPage},null,8,["onClickLeft"]),a(k,{modelValue:o.keyword,"onUpdate:modelValue":t[1]||(t[1]=e=>o.keyword=e),shape:"round",background:"#4fc08d","show-action":"",placeholder:"请输入搜索关键词"},{action:u(()=>[c("div",{onClick:t[0]||(t[0]=(...e)=>s.onSearchClick&&s.onSearchClick(...e))},"搜索")]),_:1},8,["modelValue"]),a(f,null,{default:u(()=>[a(p,{modelValue:o.dropdownMenu.statusOption,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dropdownMenu.statusOption=e),options:o.dropdownMenu.statusOptions},null,8,["modelValue","options"]),a(p,{modelValue:o.dropdownMenu.orderOption,"onUpdate:modelValue":t[3]||(t[3]=e=>o.dropdownMenu.orderOption=e),options:o.dropdownMenu.orderOptions},null,8,["modelValue","options"])]),_:1}),c("div",M,[(r(!0),d(m,null,g(o.skuInfoList,e=>(r(),_(w,{tag:e.count,num:e.count,price:e.price,desc:e.desc,title:e.title,thumb:e.thumb,key:e.skuId,onClick:i=>s.skuDetailInfo(e.skuId)},{tags:u(()=>[(r(!0),d(m,null,g(e.tags,i=>(r(),_(P,{type:"success",color:o.tagInfo[i].color,key:i},{default:u(()=>[x(C(o.tagInfo[i].name),1)]),_:2},1032,["color"]))),128))]),_:2},1032,["tag","num","price","desc","title","thumb","onClick"]))),128)),c("div",y,[a(b,{modelValue:o.listPageInfo.currentPage,"onUpdate:modelValue":t[4]||(t[4]=e=>o.listPageInfo.currentPage=e),"total-items":o.listPageInfo.totalPageCount,"items-per-page":o.listPageInfo.sizePerPage,mode:"simple"},null,8,["modelValue","total-items","items-per-page"])])])])}const U=h(O,[["render",I]]);export{U as default};
