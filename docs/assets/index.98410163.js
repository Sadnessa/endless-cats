import{o as r,c as l,r as w,n as $,a as i,F as m,b as g,d as x,p as C,e as b,f as _,g as I,w as f,h as N,t as B,i as L,j as M,k as h,l as A}from"./vendor.bb8c687e.js";const O=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))d(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&d(o)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function d(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}};O();var u=(t,n)=>{const a=t.__vccOpts||t;for(const[d,e]of n)a[d]=e;return a};const V={props:{small:{type:Boolean,default:!1}},computed:{compClass(){return this.small?"btn btn--small":"btn"}}};function j(t,n,a,d,e,s){return r(),l("div",{class:$(s.compClass)},[w(t.$slots,"default",{},void 0,!0)],2)}var S=u(V,[["render",j],["__scopeId","data-v-64d537bc"]]);const F={props:{sliderImg:{type:Array},imgIndex:{type:Number,default:0}},computed:{compStyle(){return"transform: translateX("+this.imgIndex*-100+"%)"}}},y=t=>(C("data-v-388c5d85"),t=t(),b(),t),T={class:"card-wrapper"},U={key:0,class:"loading-wrapper"},z=y(()=>i("div",{class:"dot"},null,-1)),D=y(()=>i("div",{class:"dot"},null,-1)),E=y(()=>i("div",{class:"dot"},null,-1)),P=[z,D,E],R=["src"];function q(t,n,a,d,e,s){return r(),l("div",T,[i("div",{class:"scroll",style:x(s.compStyle)},[(r(!0),l(m,null,g(a.sliderImg,o=>(r(),l("div",{key:o,class:"img-wrapper"},[o==null?(r(),l("div",U,[i("div",{class:"hollow-dots-spinner",style:x(t.spinnerStyle)},P,4)])):(r(),l("img",{key:1,src:o},null,8,R))]))),128))],4)])}var K=u(F,[["render",q],["__scopeId","data-v-388c5d85"]]);const X={components:{MyButton:S},props:{slideIndex:{type:Number,default:0},slideCount:{type:Number,default:0}},methods:{toSlide(t){this.$emit("update:slideIndex",t)}}},G={class:"indicators"};function H(t,n,a,d,e,s){const o=_("MyButton");return r(),l("div",G,[(r(!0),l(m,null,g(a.slideCount,(p,c)=>(r(),I(o,{small:"",class:"btn",key:p,onClick:v=>s.toSlide(c)},{default:f(()=>[N(B(c+1),1)]),_:2},1032,["onClick"]))),128))])}var J=u(X,[["render",H],["__scopeId","data-v-ab9aba70"]]);function Q(){return L.get(`https://cataas.com/cat?timestamp=${new Date().getTime()}`,{responseType:"blob"}).then(t=>t.data).then(t=>window.URL.createObjectURL(t))}const W={components:{MyButton:S,SliderCard:K,Slides:J},data(){return{cats:[],index:0}},created(){this.loadNewCat()},methods:{loadNewCat(){const t=this.cats.push(null);Q().then(n=>{this.cats[t-1]=n})},nextCat(){this.index+=1,this.index>this.cats.length-1&&this.loadNewCat()},prevCat(){this.index!==0&&(this.index-=1)}}},k=t=>(C("data-v-215a1125"),t=t(),b(),t),Y=k(()=>i("span",{class:"material-icons"}," keyboard_double_arrow_left",-1)),Z=k(()=>i("span",{class:"material-icons"}," keyboard_double_arrow_right ",-1));function ee(t,n,a,d,e,s){const o=_("MyButton"),p=_("SliderCard"),c=_("Slides");return r(),l(m,null,[e.index!==0?(r(),I(o,{key:0,class:"btn btn--left",onClick:s.prevCat},{default:f(()=>[Y]),_:1},8,["onClick"])):M("",!0),h(p,{sliderImg:e.cats,imgIndex:e.index},null,8,["sliderImg","imgIndex"]),h(o,{class:"btn btn--right",onClick:s.nextCat},{default:f(()=>[Z]),_:1},8,["onClick"]),h(c,{slideIndex:e.index,"onUpdate:slideIndex":n[0]||(n[0]=v=>e.index=v),slideCount:e.cats.length},null,8,["slideIndex","slideCount"])],64)}var te=u(W,[["render",ee],["__scopeId","data-v-215a1125"]]);A(te).mount("#app");
