import{a as b,S,i as a}from"./assets/vendor-b2578120.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const l of s.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function r(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(e){if(e.ep)return;e.ep=!0;const s=r(e);fetch(e.href,s)}})();async function h(t,o){const r="https://pixabay.com/api/",i={key:"43011845-ca4f94d8d544ea7c100ad449b",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:o};return(await b.get(r,{params:i})).data}const P=document.querySelector(".gallery");function m(t){const o=t.map(r=>`<li class="item-image"><a class="photos-list-link" href="${r.largeImageURL}">
  <img class="photo" loading="lazy" src="${r.webformatURL}" alt="${r.tags}"/>
  </a>
  <ul class="photo-information-container">
  <li class="item-photo-information-container"><p><span class="accent">Likes</span>${r.likes}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Views</span>${r.views}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Comments</span>${r.comments}</p></li>
  <li class="item-photo-information-container"><p><span class="accent">Downloads</span>${r.downloads}</p></li>
  </ul>
  </li>`).join("");P.insertAdjacentHTML("beforeend",o),v.refresh()}const v=new S(".gallery a",{captionsData:"alt",captionDelay:250}),f=document.querySelector(".loader"),g=document.querySelector(".search-form"),p=document.querySelector(".btn-load-more"),y=document.querySelector(".gallery");function F(){f.classList.remove("is-hidden")}function d(){f.classList.add("is-hidden")}function B(){p.classList.remove("is-hidden")}function u(){p.classList.add("is-hidden")}let c,n=1,L=0;const R=15;g.addEventListener("submit",q);async function q(t){if(t.preventDefault(),u(),F(),y.innerHTML="",n=1,c=t.target.elements.search.value.trim(),!c){a.show({message:"Please complete the field!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}),d();return}try{const o=await h(c,n);L=Math.ceil(o.totalHits/R),o.hits.length===0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"}):(m(o.hits),w())}catch{a.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}d(),g.reset()}p.addEventListener("click",C);async function C(){n+=1,u(),F();try{const t=await h(c,n);m(t.hits)}catch{a.error({message:"Sorry, an error occurred while loading. Please try again!",theme:"dark",progressBarColor:"#FFFFFF",color:"#EF4040",position:"topRight"})}d(),E(),w()}function w(){n>=L?(u(),a.show({message:"We're sorry, but you've reached the end of search results.",theme:"dark",progressBarColor:"#FFFFFF",color:"blue",position:"topRight"})):B()}function E(){const t=y.firstChild.getBoundingClientRect().height;scrollBy({top:t,behavior:"smooth"})}
//# sourceMappingURL=commonHelpers.js.map
