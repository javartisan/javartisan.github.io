import{_ as D,s as p,r as t,o as i,c as h,a as n,b as o,w as u,t as l,F as k,d,f as _,l as B,e as M}from"./index-12fb6369.js";const L={data(){return{skuInfo:{title:"苹果Mac2023",desc:"Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑",article:"Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑",categoryList:["电脑","苹果"],thumbs:["https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00738-1866.jpg","https://img2.baidu.com/it/u=1337361608,2564748157&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333","https://img2.baidu.com/it/u=2302030723,1498276955&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500"],owner:"李四",telNumber:"18612104222",weChatID:"ratel989",addr:"北京市昌平区",skuId:2012223,count:100,price:"20.98",followed:!1,viewCount:2e3,createdDate:"2023年2月29日"},shareConfig:{showShare:!1,options:[{name:"微信",icon:"wechat"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]},bubbleStar:{offset:{x:320,y:620}}}},methods:{backToParentPage(){this.$router.go(-1)},onClickShareDialog(){this.shareConfig.showShare=!0},onClickShare(r){p(r.name),this.shareConfig.showShare=!1},clickSkuId(){alert("this.$route.params.sku_id = "+this.$route.params.sku_id)},followedClick(){this.skuInfo.followed=!this.skuInfo.followed},clickCopyWxId(){navigator.clipboard.writeText(this.skuInfo.weChatID),p("微信账号复制成功！")}},computed:{followed(){return this.skuInfo.followed?"已关注":"关注"}}},N={class:"skuDetail"},T=["src"],E={style:{"font-size":"3%","margin-right":"0px"}},V=o("hr",null,null,-1),W={style:{display:"block"}},F=["href"],G={style:{display:"block"}},J={style:{display:"block"}},R={style:{display:"block"}},U={style:{display:"block"}},j=o("hr",null,null,-1);function q(r,c,z,A,e,s){const b=t("van-nav-bar"),P=t("van-swipe-item"),m=t("van-swipe"),C=t("van-tag"),v=t("van-text-ellipsis"),f=t("van-action-bar-icon"),w=t("van-action-bar-button"),g=t("van-action-bar"),y=t("van-floating-bubble"),I=t("van-cell"),x=t("van-share-sheet");return i(),h(k,null,[n(b,{title:"详情页","left-text":"返回","right-text":"分享","left-arrow":"",onClickLeft:s.backToParentPage,onClickRight:s.onClickShareDialog},null,8,["onClickLeft","onClickRight"]),o("div",N,[o("div",null,[n(m,{autoplay:"2000"},{default:u(()=>[(i(!0),h(k,null,d(e.skuInfo.thumbs,(a,S)=>(i(),M(P,{key:S},{default:u(()=>[o("img",{src:a},null,8,T)]),_:2},1024))),128))]),_:1})]),o("div",null,[o("label",E,"浏览次数："+l(e.skuInfo.viewCount),1)]),o("div",null,[o("h3",null,l(e.skuInfo.title),1),o("p",null,l(e.skuInfo.desc),1),(i(!0),h(k,null,d(e.skuInfo.categoryList,a=>(i(),M(C,{plain:"",type:"primary"},{default:u(()=>[_(l(a),1)]),_:2},1024))),256)),V,o("label",W,[_("联系电话："),o("a",{href:"tel:"+e.skuInfo.telNumber},"点击呼叫",8,F)]),o("label",{style:{display:"block"},id:"wxId",onClick:c[1]||(c[1]=(...a)=>s.clickCopyWxId&&s.clickCopyWxId(...a))},[_(" 微信账号："),o("a",{onClick:c[0]||(c[0]=B(()=>{},["prevent"])),href:"#"},"点击复制")]),o("label",G,"联系地址："+l(e.skuInfo.addr),1),o("label",J,"商品数量："+l(e.skuInfo.count),1),o("label",R,"期望价格："+l(e.skuInfo.price),1),o("label",U,"发布日期："+l(e.skuInfo.createdDate),1),j,n(v,{class:"article-text",content:e.skuInfo.article,"expand-text":"展开",rows:"3","collapse-text":"收起"},null,8,["content"])]),n(g,null,{default:u(()=>[n(f,{icon:"chat-o",text:"客服",onClick:r.onClickIcon},null,8,["onClick"]),n(f,{icon:"cart-o",text:"购物车",onClick:r.onClickIcon},null,8,["onClick"]),n(f,{icon:"shop-o",text:"店铺",onClick:r.onClickIcon},null,8,["onClick"]),n(w,{type:"danger",text:"立即购买",onClick:r.onClickButton},null,8,["onClick"])]),_:1}),n(y,{offset:e.bubbleStar.offset,"onUpdate:offset":c[2]||(c[2]=a=>e.bubbleStar.offset=a),axis:"xy",onClick:s.followedClick},{default:u(()=>[_(l(s.followed),1)]),_:1},8,["offset","onClick"]),o("div",null,[n(I,{title:"显示分享面板"}),n(x,{show:e.shareConfig.showShare,"onUpdate:show":c[3]||(c[3]=a=>e.shareConfig.showShare=a),title:"立即分享给好友",options:e.shareConfig.options,onSelect:s.onClickShare},null,8,["show","options","onSelect"])])])],64)}const K=D(L,[["render",q]]);export{K as default};
