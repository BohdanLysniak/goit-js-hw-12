import{a as F,i as c,S as w}from"./assets/vendor-b2578120.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=t(e);fetch(e.href,o)}})();async function d(r,s){const t="https://pixabay.com/api/",n={key:"43011845-ca4f94d8d544ea7c100ad449b",q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:s};return(await F.get(t,{params:n})).data}const p=document.querySelector(".gallery");function u(r){if(r.length===0)c.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});else{const s=r.map(t=>`<li class="item-image"><a class="photos-list-link" href="${t.largeImageURL}">
  <img class="photo" loading="lazy" src="${t.webformatURL}" alt="${t.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span>${t.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span>${t.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span>${t.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${t.downloads}</p></li>
  </ul>
  </li>`).join("");p.insertAdjacentHTML("beforeend",s),b.refresh()}}const b=new w(".gallery a",{captionsData:"alt",captionDelay:250}),m=document.querySelector(".loader"),f=document.querySelector(".search-form"),l=document.querySelector(".btn-load-more");function h(){m.classList.remove("is-hidden")}function g(){m.classList.add("is-hidden")}function S(){l.classList.remove("is-hidden")}function P(){l.classList.add("is-hidden")}let v,a=1,y=0;const M=15;f.addEventListener("submit",q);async function q(r){r.preventDefault(),h(),p.innerHTML="",a=1;const s=r.target.elements.search.value.trim();if(s!=="")try{const t=await d(s,a);y=Math.ceil(t.totalHits/M),u(t.hits)}catch{c.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}else c.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"});g(),f.reset(),L()}l.addEventListener("click",E);async function E(){a+=1,h();const r=await d(v,a);u(r.hits),g(),L()}function L(){a>=y?P():S()}
//# sourceMappingURL=commonHelpers.js.map
