import{i,S as p}from"./assets/vendor-5ObWk2rO.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const f="46912917-fb92bedb7f4b4973c6d37e29f",m="https://pixabay.com/api/";function g(a){const o=new URLSearchParams({key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`${m}?${o}`).then(r=>{if(!r.ok)throw new Error("Network response was not ok");return r.json()})}function y(a){return a.map(({webformatURL:o,largeImageURL:r,tags:s,likes:e=0,views:t=0,comments:n="",downloads:u=0})=>`
      <div class="images-gallery">
                <div class="loader" style="display: block;"></div> 
                <a href="${r}">
                    <img src="${o}" alt="${s}" />
                </a>
                <div class="content">
                    <div><p>Likes</p><span>${e}</span></div>
                    <div><p>Views</p><span>${t}</span></div>
                    <div><p>Comments</p><span>${n}</span></div>
                    <div><p>Downloads</p><span>${u}</span></div>
                </div>
            </div>
      `).join("")}function h(a){a.querySelectorAll(".images-gallery img").forEach(r=>{const s=r.closest(".images-gallery").querySelector(".loader");r.onload=()=>{s.style.display="none"},r.onerror=()=>{s.style.display="none"}})}const d=document.querySelector(".form"),c=document.querySelector(".gallery");let l=null;d.addEventListener("submit",v);function v(a){a.preventDefault();const{textName:o}=a.target.elements;if(o.value.trim()===""){i.warning({title:"Hey",message:"You forgot important data",color:"red"});return}g(o.value).then(r=>{r.hits.length===0?i.warning({title:"Hey",message:"Sorry, there are no images matching your search query. Please try again!",color:"orange"}):(c.innerHTML=y(r.hits),h(c),l?l.refresh():l=new p(".gallery .images-gallery a",{captionsData:"alt",captionDelay:250}))}).catch(r=>{i.error({title:"Error",message:`Fetch error: ${r.message}`,color:"red"})}),d.reset()}
//# sourceMappingURL=index.js.map
