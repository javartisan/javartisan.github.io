import{_ as M,b as d,s as p,B as P,C as w,r as l,o as i,c as r,a as u,e as s,w as h,t as n,g as m,i as f,D as N,F as L,f as B,h as V}from"./index-8d6183b2.js";import{c as _}from"./constant-3ba5f3ce.js";const H={data(){return{existSku:!0,skuInfo:{},shareConfig:{showShare:!1,options:[{name:"复制链接",icon:"link",id:"link"},{name:"口令",icon:"lock",id:"token"}]},bubbleStar:{offset:{x:320,y:620}},cate2CodeMap:{},addr3CodeMap:{}}},methods:{backToParentPage(){this.$router.go(-1)},onClickShareDialog(){this.shareConfig.showShare=!0},onClickShare(a){switch(a.id){case"wechat":break;case"link":_.writeHtml5Clipboard(window.location);break;case"poster":break;case"qrcode":break;case"token":_.writeHtml5Clipboard(this.skuInfo.title);break}this.shareConfig.showShare=!1},followedClick(){console.log("this.$route.params.sku_id = "+this.$route.params.sku_id),d.followSku(this.$route.params.sku_id,!this.skuInfo.followed).then(a=>{a.data.code===1?this.skuInfo.followed=!this.skuInfo.followed:p(a.data.message)}).catch(a=>{p("关注失败，稍后重试！")})},clickCopyWxId(){console.log(this.skuInfo.wechatId),_.writeHtml5Clipboard(this.skuInfo.wechatId)},imagePreview(){P({images:this.skuInfo.thumbs,startPosition:1})}},computed:{followed(){return this.skuInfo.followed?"已关注":"关注"},skuStatusTxt(){return _.skuStatusText(this.skuInfo.skuStatus,this.skuInfo.skuTransStatus)}},mounted(){let a=this.$route.params.sku_id;d.skuDetail(a).then(t=>{t.data.code===1&&(t.data.data==null?(p("商品不存在"),this.existSku=!1):this.skuInfo=t.data.data)}).catch(t=>{this.existSku=!1}),d.metaCate().then(t=>{if(t.data.code===1){let k=t.data.data;this.cate2CodeMap=w.value2TextLevelN(k)}}),d.metaAddr().then(t=>{if(t.data.code===1){let k=t.data.data;this.addr3CodeMap=w.value2TextLevelN(k)}}),d.addSkuEvent(a,1).then(t=>{})}},W={key:0,class:"skuDetail"},E={style:{width:"100%",height:"50%"}},F=["src"],R={class:"viewed"},U={class:"viewed-txt"},q=s("hr",null,null,-1),A={key:0},j={key:1},z={style:{display:"block"}},G=["href"],J={style:{display:"block"}},K={style:{display:"block"}},O={style:{display:"block"}},Q={style:{display:"block"}},X={key:2},Y=s("hr",null,null,-1),Z={class:"followed-icon"},$={key:1};function ee(a,t,k,te,e,o){const v=l("van-nav-bar"),b=l("van-swipe-item"),C=l("van-swipe"),I=l("van-tag"),g=l("van-text-ellipsis"),x=l("van-floating-bubble"),y=l("van-share-sheet"),S=l("van-empty");return i(),r("div",null,[u(v,{title:"详情页","left-text":"返回","left-arrow":"",onClickLeft:o.backToParentPage,"right-text":"分享",onClickRight:o.onClickShareDialog},null,8,["onClickLeft","onClickRight"]),e.existSku?(i(),r("div",W,[s("div",null,[u(C,{autoplay:"2000"},{default:h(()=>[(i(!0),r(L,null,B(e.skuInfo.thumbs,(c,T)=>(i(),V(b,{key:T},{default:h(()=>[s("div",E,[s("img",{src:c,onClick:t[0]||(t[0]=(...D)=>o.imagePreview&&o.imagePreview(...D)),style:{width:"100%",height:"480px"}},null,8,F)])]),_:2},1024))),128))]),_:1})]),s("div",R,[s("span",U,"浏览次数："+n(e.skuInfo.viewCount),1)]),s("div",null,[s("h3",null,n(e.skuInfo.title),1),s("p",null,n(e.skuInfo.desc),1),u(I,{plain:"",type:"primary"},{default:h(()=>[f(n(e.cate2CodeMap[e.skuInfo.cate2Code]),1)]),_:1}),q,o.skuStatusTxt?(i(),r("span",A,"在售状态："+n(this.skuStatusTxt),1)):m("",!0),o.skuStatusTxt?(i(),r("span",j,"联系姓名："+n(e.skuInfo.userName),1)):m("",!0),s("span",z,[f("联系电话："),s("a",{href:"tel:"+e.skuInfo.telNumber},"点击呼叫",8,G)]),s("label",{style:{display:"block"},id:"wxId",onClick:t[2]||(t[2]=(...c)=>o.clickCopyWxId&&o.clickCopyWxId(...c))},[f(" 微信账号："),s("a",{onClick:t[1]||(t[1]=N(()=>{},["prevent"])),href:"#"},"点击复制")]),s("span",J,"联系地址："+n(e.addr3CodeMap[e.skuInfo.addr3Code]+" "+e.skuInfo.addrDetail),1),s("label",K,"商品数量："+n(e.skuInfo.count),1),s("label",O,"期望价格："+n(e.skuInfo.price),1),s("label",Q,"发布日期："+n(e.skuInfo.createdDate),1),e.skuInfo.article!=null&&e.skuInfo.article.length>0?(i(),r("div",X,[Y,u(g,{class:"article-text",content:e.skuInfo.article,"expand-text":"展开",rows:"3","collapse-text":"收起"},null,8,["content"])])):m("",!0)]),s("div",Z,[u(x,{offset:e.bubbleStar.offset,"onUpdate:offset":t[3]||(t[3]=c=>e.bubbleStar.offset=c),axis:"xy",onClick:o.followedClick},{default:h(()=>[f(n(o.followed),1)]),_:1},8,["offset","onClick"])]),s("div",null,[u(y,{show:e.shareConfig.showShare,"onUpdate:show":t[4]||(t[4]=c=>e.shareConfig.showShare=c),title:"立即分享给好友",options:e.shareConfig.options,onSelect:o.onClickShare},null,8,["show","options","onSelect"])])])):(i(),r("div",$,[u(S,{description:"商品走丢，请稍后重试！"})]))])}const ne=M(H,[["render",ee]]);export{ne as default};
