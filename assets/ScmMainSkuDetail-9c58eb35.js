import{_ as g,s as y,r as a,o as c,c as u,a as r,b as o,w as _,t,F as p,d as h,e as M,f as S}from"./index-133bac92.js";const I={data(){return{skuInfo:{title:"苹果Mac2023",desc:"Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑",article:"Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑Mac Pro电脑",categoryList:["电脑","苹果"],thumbs:["https://ns-strategy.cdn.bcebos.com/ns-strategy/upload/fc_big_pic/part-00738-1866.jpg","https://img2.baidu.com/it/u=1337361608,2564748157&fm=253&fmt=auto&app=138&f=JPEG?w=500&h=333","https://img2.baidu.com/it/u=2302030723,1498276955&fm=253&fmt=auto&app=120&f=JPEG?w=753&h=500"],owner:"李四",telNumber:"18612104222",weChatID:"ratel989",addr:"北京市昌平区",skuId:2012223,count:100,price:"20.98"},shareConfig:{showShare:!1,options:[{name:"微信",icon:"wechat"},{name:"复制链接",icon:"link"},{name:"分享海报",icon:"poster"},{name:"二维码",icon:"qrcode"}]}}},methods:{backToParentPage(){this.$router.go(-1)},onClickShare(s){y(s.name),this.showShare=!1},clickSkuId(){alert("this.$route.params.sku_id = "+this.$route.params.sku_id)}}},C={class:"skuDetail"},x=["src"],D=o("hr",null,null,-1),L={style:{display:"block"}},N={style:{display:"block"}},B={style:{display:"block"}},T={style:{display:"block"}},E={style:{display:"block"}},V=o("hr",null,null,-1);function F(s,l,G,J,e,i){const P=a("van-nav-bar"),m=a("van-swipe-item"),d=a("van-swipe"),k=a("van-tag"),f=a("van-text-ellipsis"),b=a("van-cell"),v=a("van-share-sheet");return c(),u(p,null,[r(P,{title:"详情页","left-text":"返回","right-text":"分享","left-arrow":"",onClickLeft:i.backToParentPage,onClickRight:i.onClickShare},null,8,["onClickLeft","onClickRight"]),o("div",C,[o("div",null,[r(d,{autoplay:"2000"},{default:_(()=>[(c(!0),u(p,null,h(e.skuInfo.thumbs,(n,w)=>(c(),M(m,{key:w},{default:_(()=>[o("img",{src:n},null,8,x)]),_:2},1024))),128))]),_:1})]),o("div",null,[o("h3",null,t(e.skuInfo.title),1),o("p",null,t(e.skuInfo.desc),1),(c(!0),u(p,null,h(e.skuInfo.categoryList,n=>(c(),M(k,{plain:"",type:"primary"},{default:_(()=>[S(t(n),1)]),_:2},1024))),256)),D,o("label",L,"联系电话："+t(e.skuInfo.telNumber),1),o("label",N,"微信账号："+t(e.skuInfo.weChatID),1),o("label",B,"联系地址："+t(e.skuInfo.addr),1),o("label",T,"商品数量："+t(e.skuInfo.count),1),o("label",E,"期望价格："+t(e.skuInfo.price),1),V,r(f,{class:"article-text",content:e.skuInfo.article,"expand-text":"展开",rows:"3","collapse-text":"收起"},null,8,["content"])]),o("div",null,[r(b,{title:"显示分享面板",onClick:l[0]||(l[0]=n=>s.showShare=!0)}),r(v,{show:s.showShare,"onUpdate:show":l[1]||(l[1]=n=>s.showShare=n),title:"立即分享给好友",options:e.shareConfig.options,onSelect:i.onClickShare},null,8,["show","options","onSelect"])])])],64)}const j=g(I,[["render",F]]);export{j as default};
