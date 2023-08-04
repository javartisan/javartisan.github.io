import{_ as M,b as h,s as f,y as D,z as p,r as i,o as r,c as u,a as l,e as o,w as k,t as a,g as m,i as _,A as L,F as N,f as B,h as E}from"./index-87f0b99c.js";import{c as V}from"./constant-f55c22c3.js";const A={data(){return{existSku:!0,skuInfo:{},shareConfig:{showShare:!1,options:[{name:"微信",icon:"wechat",id:"wechat"},{name:"复制链接",icon:"link",id:"link"},{name:"分享海报",icon:"poster",id:"poster"},{name:"二维码",icon:"qrcode",id:"qrcode"}]},bubbleStar:{offset:{x:320,y:620}},cate2CodeMap:{},addr3CodeMap:{}}},methods:{backToParentPage(){this.$router.go(-1)},onClickShareDialog(){this.shareConfig.showShare=!0},onClickShare(s){this.shareConfig.showShare=!1,navigator.clipboard.writeText(window.location)},followedClick(){console.log("this.$route.params.sku_id = "+this.$route.params.sku_id),h.followSku(this.$route.params.sku_id,!this.skuInfo.followed).then(s=>{s.data.code===1&&(this.skuInfo.followed=!this.skuInfo.followed)})},clickCopyWxId(){if(console.log(this.skuInfo.wechatId),navigator.clipboard&&window.isSecureContext)console.log("is secure mode = "+this.skuInfo.wechatId),navigator.clipboard.writeText(this.skuInfo.wechatId).then(()=>{f("复制成功！")}).catch(()=>{f("复制失败！")});else{console.log("is not secure mode = "+this.skuInfo.wechatId);const s=document.createElement("textarea");return s.value=this.skuInfo.wechatId,document.body.appendChild(s),s.focus(),s.select(),new Promise((e,d)=>{document.execCommand("copy")?e():d(new Error("出错了")),s.remove()}).then(()=>{f("复制成功！")},()=>{f("复制失败！")})}},imagePreview(){D({images:this.skuInfo.thumbs,startPosition:1})}},computed:{followed(){return this.skuInfo.followed?"已关注":"关注"},skuStatusTxt(){return V.skuStatusText(this.skuInfo.skuStatus,this.skuInfo.skuTransStatus)}},mounted(){let s=this.$route.params.sku_id;h.skuDetail(s).then(e=>{e.data.code===1&&(e.data.data==null?(f("商品不存在"),this.existSku=!1):this.skuInfo=e.data.data)}).catch(e=>{this.existSku=!1}),h.metaCate().then(e=>{if(e.data.code===1){let d=e.data.data;this.cate2CodeMap=p.value2TextLevelN(d)}}),h.metaAddr().then(e=>{if(e.data.code===1){let d=e.data.data;this.addr3CodeMap=p.value2TextLevelN(d)}}),h.addSkuEvent(s,1).then(e=>{})}},W={key:0,class:"skuDetail"},q={style:{width:"100%",height:"50%"}},F=["src"],R={class:"viewed"},U={class:"viewed-txt"},z=o("hr",null,null,-1),j={key:0},G={style:{display:"block"}},H=["href"],J={style:{display:"block"}},K={style:{display:"block"}},O={style:{display:"block"}},Q={style:{display:"block"}},X={key:1},Y=o("hr",null,null,-1),Z={class:"followed-icon"},$={key:1};function ee(s,e,d,te,t,n){const w=i("van-nav-bar"),v=i("van-swipe-item"),C=i("van-swipe"),x=i("van-tag"),b=i("van-text-ellipsis"),g=i("van-floating-bubble"),I=i("van-cell"),y=i("van-share-sheet"),S=i("van-empty");return r(),u("div",null,[l(w,{title:"详情页","left-text":"返回","left-arrow":"",onClickLeft:n.backToParentPage,"right-text":"分享",onClickRight:n.onClickShareDialog},null,8,["onClickLeft","onClickRight"]),t.existSku?(r(),u("div",W,[o("div",null,[l(C,{autoplay:"2000"},{default:k(()=>[(r(!0),u(N,null,B(t.skuInfo.thumbs,(c,T)=>(r(),E(v,{key:T},{default:k(()=>[o("div",q,[o("img",{src:c,onClick:e[0]||(e[0]=(...P)=>n.imagePreview&&n.imagePreview(...P)),style:{width:"100%",height:"480px"}},null,8,F)])]),_:2},1024))),128))]),_:1})]),o("div",R,[o("span",U,"浏览次数："+a(t.skuInfo.viewCount),1)]),o("div",null,[o("h3",null,a(t.skuInfo.title),1),o("p",null,a(t.skuInfo.desc),1),l(x,{plain:"",type:"primary"},{default:k(()=>[_(a(t.cate2CodeMap[t.skuInfo.cate2Code]),1)]),_:1}),z,n.skuStatusTxt?(r(),u("span",j,"在售状态："+a(this.skuStatusTxt),1)):m("",!0),o("span",G,[_("联系电话："),o("a",{href:"tel:"+t.skuInfo.telNumber},"点击呼叫",8,H)]),o("label",{style:{display:"block"},id:"wxId",onClick:e[2]||(e[2]=(...c)=>n.clickCopyWxId&&n.clickCopyWxId(...c))},[_(" 微信账号："),o("a",{onClick:e[1]||(e[1]=L(()=>{},["prevent"])),href:"#"},"点击复制")]),o("span",J,"联系地址："+a(t.addr3CodeMap[t.skuInfo.addr3Code]),1),o("label",K,"商品数量："+a(t.skuInfo.count),1),o("label",O,"期望价格："+a(t.skuInfo.price),1),o("label",Q,"发布日期："+a(t.skuInfo.createdDate),1),t.skuInfo.article!=null&&t.skuInfo.article.length>0?(r(),u("div",X,[Y,l(b,{class:"article-text",content:t.skuInfo.article,"expand-text":"展开",rows:"3","collapse-text":"收起"},null,8,["content"])])):m("",!0)]),o("div",Z,[l(g,{offset:t.bubbleStar.offset,"onUpdate:offset":e[3]||(e[3]=c=>t.bubbleStar.offset=c),axis:"xy",onClick:n.followedClick},{default:k(()=>[_(a(n.followed),1)]),_:1},8,["offset","onClick"])]),o("div",null,[l(I,{title:"显示分享面板"}),l(y,{show:t.shareConfig.showShare,"onUpdate:show":e[4]||(e[4]=c=>t.shareConfig.showShare=c),title:"立即分享给好友",options:t.shareConfig.options,onSelect:n.onClickShare},null,8,["show","options","onSelect"])])])):(r(),u("div",$,[l(S,{description:"商品走丢，请稍后重试！"})]))])}const ne=M(A,[["render",ee]]);export{ne as default};
