import{_ as h,z as b,O as C,e as D,C as u,s as B,o as s,c as r,a as e,t as l,u as t,F as c,r as _,N as k,i,j as d,P as x}from"./index-8946083d.js";import{C as A}from"./CommentDisplay-66597784.js";const P={class:"offers-container"},U={class:"offers-container"},w={__name:"ProfileDashboard",setup(N){const n=b(),p=C.getAllByUser(n),f=D(u.getAllByUser(n)),v=B();function g(){return k()?(v.replace({name:"home"}),!0):(console.error("An error occured with registration!"),!1)}function y(m){const a=u.removeComment(m);return f.value=u.getAllByUser(n),a}return(m,a)=>(s(),r(c,null,[e("h1",null,l(t(n)),1),e("button",{onClick:a[0]||(a[0]=o=>g()),type:"button",class:"btn btn-primary"},l(t(i)("logout")),1),e("section",null,[e("h3",null,l(t(i)("my-offers")),1),e("div",P,[(s(!0),r(c,null,_(t(p),o=>(s(),r("div",{key:o.id,class:"single-offer w-50"},[d(x,{offer:o},null,8,["offer"])]))),128))])]),e("section",null,[e("h3",null,l(t(i)("my-comments")),1),e("div",U,[(s(!0),r(c,null,_(f.value,o=>(s(),r("div",{key:o.id,class:"single-offer w-50"},[d(A,{comment:o,inDashboard:"",onRemove:O=>y(o.id)},null,8,["comment","onRemove"])]))),128))])])],64))}},V=h(w,[["__scopeId","data-v-897ca730"]]);export{V as default};
