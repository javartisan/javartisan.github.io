import{_ as v,b as f,s as k,r as d,o as b,c as x,a as n,d as r,w as u,F as y}from"./index-1670978e.js";import{c as p}from"./constant-777de380.js";const F={data(){return{addrInfo:{selectAddr:"",show:!1,addrTree:[],lastAddrCode:"",reverseAddrTree:{}},dateInfo:{showPicker:!1,selectDate:p.formatDate(p.addNDays(7)),minDate:p.skuValidMinDate(),maxDate:p.skuValidMaxDate()},skuInfo:{title:"",desc:"",article:"",cate1Code:"",cate2Code:"",thumbs:[],telNumber:"",wechatId:"",addr1Code:"",addr2Code:"",addr3Code:"",addr4Code:"",count:"",price:""},thumbFiles:[],categoryInfo:{selectCate:"",show:!1,lastCateCode:"",metaList:[]},uploadFiles:t=>{t.status="uploading",t.message="上传中...",f.upLoadFiles([t.file]).then(s=>{let i=s.data;t.status=i.code,i.code===1?(t.message="上传成功",t.file=i.data[0]):t.message=i.message}).catch(s=>{console.log("err = "+s)})}}},methods:{backToParentPage(){this.$router.go(-1)},onConfirm(t){var e;this.addrOptions.selectAddr=(e=t.selectedOptions[0])==null?void 0:e.text,this.addrOptions.showPicker=!1},onDateConfirm(t){let e=t.selectedValues;this.dateInfo.selectDate=e.join("-"),this.dateInfo.showPicker=!1},onAddrFinish(t){let e=t.selectedOptions;this.addrInfo.show=!1,this.addrInfo.selectAddr=e.map(s=>s.text).join("/"),this.skuInfo.addr1Code=e[0].value,this.skuInfo.addr2Code=e[1].value,this.skuInfo.addr3Code=e[2].value,this.skuInfo.addr4Code=0},publishSkuInfo(){let t=[];for(let e=0;e<this.thumbFiles.length;e++)t=t.concat([this.thumbFiles[e].file]);console.log(t),this.skuInfo.thumbs=t,f.addSkuInfo(this.skuInfo).then(e=>{if(e.status===200&&e.data.data>0){k("添加成功，即将跳转详情页!");let s=e.data.data;this.$router.push("/sku-detail/"+s)}else k("添加失败，请稍后重试!")})},onCateFinish(t){let e=t.selectedOptions;this.categoryInfo.show=!1,this.categoryInfo.selectCate=e.map(s=>(console.log(s),s.text)).join("/"),this.skuInfo.cate1Code=e[0].value,this.skuInfo.cate2Code=e[1].value}},mounted(){this.categoryInfo.metaList=f.metaAddr().then(t=>{t.data.code===1&&(this.addrInfo.addrTree=t.data.data)}),this.categoryInfo.metaList=f.metaCate().then(t=>{t.data.code===1&&(this.categoryInfo.metaList=t.data.data)})}};function U(t,e,s,i,o,m){const c=d("van-nav-bar"),a=d("van-field"),V=d("van-cell-group"),h=d("van-cascader"),I=d("van-popup"),C=d("van-date-picker"),g=d("van-uploader"),w=d("van-form");return b(),x(y,null,[n(c,{title:"发布商品","left-text":"返回","left-arrow":"",onClickLeft:m.backToParentPage,"right-text":"提交",onClickRight:m.publishSkuInfo},null,8,["onClickLeft","onClickRight"]),r("div",null,[n(w,null,{default:u(()=>[r("div",null,[n(V,null,{default:u(()=>[n(a,{modelValue:o.skuInfo.title,"onUpdate:modelValue":e[0]||(e[0]=l=>o.skuInfo.title=l),label:"商品标题",maxlength:"20","show-word-limit":"",name:"pattern",placeholder:"请填写商品标题(必填)",rules:[{required:!0,message:"请填写商品标题"}]},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.desc,"onUpdate:modelValue":e[1]||(e[1]=l=>o.skuInfo.desc=l),label:"商品概要",maxlength:"50","show-word-limit":"",type:"textarea",name:"validator",placeholder:"请填写商品概要(必填)",rules:[{required:!0,message:"请填写商品概要"}]},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.article,"onUpdate:modelValue":e[2]||(e[2]=l=>o.skuInfo.article=l),label:"商品详细",maxlength:"200","show-word-limit":"",type:"textarea",name:"validator",placeholder:"请填写商品详细介绍(选填)."},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.price,"onUpdate:modelValue":e[3]||(e[3]=l=>o.skuInfo.price=l),label:"期望价格",name:"validatorMessage",placeholder:"期望价格",rules:[{required:!0,message:"请填写商品期望价格(必填)"}]},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.count,"onUpdate:modelValue":e[4]||(e[4]=l=>o.skuInfo.count=l),label:"商品数量",name:"validatorMessage",placeholder:"商品数量(必填),例如：2000斤",rules:[{required:!0,message:"请填写商品数量"}]},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.telNumber,"onUpdate:modelValue":e[5]||(e[5]=l=>o.skuInfo.telNumber=l),label:"联系电话",name:"telNumberValidator",placeholder:"联系电话",rules:[{required:!0,message:"请填写联系电话(必填)"}]},null,8,["modelValue"]),n(a,{modelValue:o.skuInfo.wechatId,"onUpdate:modelValue":e[6]||(e[6]=l=>o.skuInfo.wechatId=l),label:"微信账号",name:"wxValidator",placeholder:"微信账号(选填)"},null,8,["modelValue"])]),_:1})]),r("div",null,[n(a,{modelValue:o.addrInfo.selectAddr,"onUpdate:modelValue":e[7]||(e[7]=l=>o.addrInfo.selectAddr=l),"is-link":"",readonly:"",label:"所在地区",placeholder:"请选择所在地区(必填)",onClick:e[8]||(e[8]=l=>o.addrInfo.show=!0)},null,8,["modelValue"]),n(I,{show:o.addrInfo.show,"onUpdate:show":e[11]||(e[11]=l=>o.addrInfo.show=l),round:"",position:"bottom"},{default:u(()=>[n(h,{modelValue:o.addrInfo.lastAddrCode,"onUpdate:modelValue":e[9]||(e[9]=l=>o.addrInfo.lastAddrCode=l),title:"请选择所在地区",options:o.addrInfo.addrTree,onClose:e[10]||(e[10]=l=>o.addrInfo.show=!1),onFinish:m.onAddrFinish},null,8,["modelValue","options","onFinish"])]),_:1},8,["show"])]),r("div",null,[n(a,{modelValue:o.categoryInfo.selectCate,"onUpdate:modelValue":e[12]||(e[12]=l=>o.categoryInfo.selectCate=l),"is-link":"",readonly:"",label:"所属分类",placeholder:"请求选商品所属类别(必填)",onClick:e[13]||(e[13]=l=>o.categoryInfo.show=!0)},null,8,["modelValue"]),n(I,{show:o.categoryInfo.show,"onUpdate:show":e[16]||(e[16]=l=>o.categoryInfo.show=l),round:"",position:"bottom"},{default:u(()=>[n(h,{modelValue:o.categoryInfo.lastCateCode,"onUpdate:modelValue":e[14]||(e[14]=l=>o.categoryInfo.lastCateCode=l),title:"请求选商品所属类别",options:o.categoryInfo.metaList,onClose:e[15]||(e[15]=l=>o.categoryInfo.show=!1),onFinish:m.onCateFinish},null,8,["modelValue","options","onFinish"])]),_:1},8,["show"])]),r("div",null,[n(a,{modelValue:o.dateInfo.selectDate,"onUpdate:modelValue":e[17]||(e[17]=l=>o.dateInfo.selectDate=l),"is-link":"",readonly:"",name:"datePicker",label:"时间选择",placeholder:"点击选择时间",onClick:e[18]||(e[18]=l=>o.dateInfo.showPicker=!0)},null,8,["modelValue"]),n(I,{show:o.dateInfo.showPicker,"onUpdate:show":e[20]||(e[20]=l=>o.dateInfo.showPicker=l),position:"bottom"},{default:u(()=>[n(C,{onConfirm:m.onDateConfirm,"min-date":o.dateInfo.minDate,"max-date":o.dateInfo.maxDate,onCancel:e[19]||(e[19]=l=>o.dateInfo.showPicker=!1)},null,8,["onConfirm","min-date","max-date"])]),_:1},8,["show"])]),r("div",null,[n(a,{name:"uploader",label:"上传图片"},{input:u(()=>[n(g,{modelValue:o.thumbFiles,"onUpdate:modelValue":e[21]||(e[21]=l=>o.thumbFiles=l),reupload:"",multiple:"","max-count":3,"after-read":o.uploadFiles},null,8,["modelValue","after-read"])]),_:1})])]),_:1})])],64)}const A=v(F,[["render",U]]);export{A as default};
