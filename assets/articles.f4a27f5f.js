import{_ as f}from"./Article.9d5d95f3.js";import{_ as k}from"./Paginate.6fe01ab8.js";import{d as o,p as x}from"./index.e4d6d587.js";import{e as h,v,f as P,o as c,d as i,a as n,t as b,p as e,F as B,n as y,l as A,c as S,x as $,y as D}from"./app.51d60c24.js";const E={class:"flex flex-col flex-wrap mb-2 px-4 lg:px-0"},w=n("h1",{class:"p-5 text-elucidator-700 dark:text-dark-repulser-400 font-bold"},"\u5168\u90E8\u6587\u7AE0",-1),C={class:"mt-1 text-elucidator-700 dark:text-dark-repulser-400"},F={class:"grid inline-grid gap-4 py-6 mb-2 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2"},N={class:"flex flex-wrap justify-center items-center mb-5"},G=h({__name:"articles",setup(V){const r=v(1),a=P(()=>{const s=o();return x({articles:s,currentPage:r.value,pageSize:3})}),l=()=>{r.value=a.value.startPage},g=s=>{console.log(s),r.value=s},m=()=>{r.value=a.value.endPage};return(s,p)=>{const d=f,u=k;return c(),i("div",E,[w,n("h3",C,"\u603B\u8BA1: "+b(e(o)().length)+" \u7BC7",1),n("div",F,[(c(!0),i(B,null,y(e(a).listArticles,(t,_)=>(c(),S(d,{key:_,image:t.meta.frontmatter.thumbnail,alt:`blog-banner-${e($)(t.meta.frontmatter.name)}`,tags:t.meta.frontmatter.tags,date:`${new Date(t.meta.frontmatter.date).toDateString()}`,title:t.meta.frontmatter.name,description:e(D)(t.meta.frontmatter.description,100),to:t.path,"to-tags":`/tags/${t.meta.frontmatter.tags}`},null,8,["image","alt","tags","date","title","description","to","to-tags"]))),128))]),n("div",N,[A(u,{"start-page":e(a).startPage,"end-page":e(a).endPage,mid:e(a).mid,"current-page":r.value,"click-start-page":l,"click-paginate":g,"click-end-page":m},null,8,["start-page","end-page","mid","current-page"])])])}}});export{G as default};