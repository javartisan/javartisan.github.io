import{_ as I,b as p,r as a,o as l,c as u,a as r,w as d,d as S,e as g,F as m,f as h,g as V,h as P,i as b,t as y}from"./index-ce388d1d.js";const x={data(){return{keyword:"",skuInfoList:[],dropdownMenu:{orderOptions:[{text:"默认排序",value:"a"},{text:"时间升序",value:"b"},{text:"销量降序",value:"c"}],orderOption:"a",statusOptions:[{text:"全部状态",value:null},{text:"在售",value:0},{text:"已售",value:1}],statusOption:null},tagInfo:{mobilePhone:{id:"mobilePhone",name:"手机",color:"blue"},computer:{id:"computer",name:"电脑",color:"green"}},listPageInfo:{currentPage:0,totalPageCount:0,sizePerPage:10}}},methods:{backToParentPage(){this.$router.go(-1)},onSearchClick(){const s=this.dropdownMenu.statusOption;this.listPageInfo.currentPage=0,p.searchSkuList(this.keyword,s,this.listPageInfo.currentPage,this.listPageInfo.sizePerPage).then(t=>{t.data.code===1&&(this.skuInfoList=t.data.data.items,this.listPageInfo.totalPageCount=t.data.data.totalSize)})},skuDetailInfo(s){this.$router.push("/sku-detail/"+s)},loadPageList(){const s=this.dropdownMenu.statusOption;p.searchSkuList(this.keyword,s,this.listPageInfo.currentPage,this.listPageInfo.sizePerPage).then(t=>{t.data.code===1&&(this.skuInfoList=t.data.data.items,this.listPageInfo.totalPageCount=t.data.data.totalSize)})}},mounted(){this.onSearchClick()}},O={class:"sku-list"},L={key:0,class:"pagination"};function M(s,t,z,B,o,n){const k=a("van-nav-bar"),_=a("van-search"),c=a("van-dropdown-item"),f=a("van-dropdown-menu"),v=a("van-tag"),C=a("van-card"),w=a("van-pagination");return l(),u("div",null,[r(k,{title:"搜索","left-text":"返回","left-arrow":"",onClickLeft:n.backToParentPage},null,8,["onClickLeft"]),r(_,{modelValue:o.keyword,"onUpdate:modelValue":t[1]||(t[1]=e=>o.keyword=e),shape:"round",background:"#4fc08d","show-action":"",placeholder:"请输入搜索关键词",onKeypress:S(n.onSearchClick,["enter"])},{action:d(()=>[g("div",{onClick:t[0]||(t[0]=(...e)=>n.onSearchClick&&n.onSearchClick(...e))},"搜索")]),_:1},8,["modelValue","onKeypress"]),r(f,null,{default:d(()=>[r(c,{modelValue:o.dropdownMenu.statusOption,"onUpdate:modelValue":t[2]||(t[2]=e=>o.dropdownMenu.statusOption=e),options:o.dropdownMenu.statusOptions,onChange:n.onSearchClick},null,8,["modelValue","options","onChange"]),r(c,{modelValue:o.dropdownMenu.orderOption,"onUpdate:modelValue":t[3]||(t[3]=e=>o.dropdownMenu.orderOption=e),options:o.dropdownMenu.orderOptions,onChange:n.onSearchClick},null,8,["modelValue","options","onChange"])]),_:1}),g("div",O,[(l(!0),u(m,null,h(o.skuInfoList,e=>(l(),P(C,{tag:e.count,num:e.count,price:e.price,desc:e.desc,title:e.title,thumb:e.thumbs[0],key:e.skuId,onClick:i=>n.skuDetailInfo(e.skuId)},{tags:d(()=>[(l(!0),u(m,null,h(e.tags,i=>(l(),P(v,{type:"success",color:o.tagInfo[i].color,key:i},{default:d(()=>[b(y(o.tagInfo[i].name),1)]),_:2},1032,["color"]))),128))]),_:2},1032,["tag","num","price","desc","title","thumb","onClick"]))),128)),o.listPageInfo.totalPageCount>0?(l(),u("div",L,[r(w,{modelValue:o.listPageInfo.currentPage,"onUpdate:modelValue":t[4]||(t[4]=e=>o.listPageInfo.currentPage=e),"total-items":o.listPageInfo.totalPageCount,"items-per-page":o.listPageInfo.sizePerPage,mode:"simple",onChange:n.loadPageList},null,8,["modelValue","total-items","items-per-page","onChange"])])):V("",!0)])])}const U=I(x,[["render",M]]);export{U as default};
