document.addEventListener("DOMContentLoaded",()=>{if(!CONFIG.path){console.warn("`hexo-generator-searchdb` plugin is not installed!");return}const n=new LocalSearch({path:CONFIG.path,top_n_per_article:CONFIG.localsearch.top_n_per_article,unescape:CONFIG.localsearch.unescape});const r=document.querySelector(".search-input");const a=document.querySelector(".search-result-container");const e=()=>{if(!n.isfetched)return;const e=r.value.trim().toLowerCase();const t=e.split(/[-\s]+/);let c=[];if(e.length>0){c=n.getResultItems(t)}if(t.length===1&&t[0]===""){a.innerHTML='<div class="search-result-icon"><i class="fa fa-search fa-5x"></i></div>'}else if(c.length===0){a.innerHTML='<div class="search-result-icon"><i class="far fa-frown fa-5x"></i></div>'}else{c.sort((e,t)=>{if(e.includedCount!==t.includedCount){return t.includedCount-e.includedCount}else if(e.hitCount!==t.hitCount){return t.hitCount-e.hitCount}return t.id-e.id});const s=CONFIG.i18n.hits.replace("${hits}",c.length);a.innerHTML=`<div class="search-stats">${s}</div>
        <hr>
        <ul class="search-result-list">${c.map(e=>e.item).join("")}</ul>`;if(typeof pjax==="object")pjax.refresh(a)}};n.highlightSearchWords(document.querySelector(".post-body"));if(CONFIG.localsearch.preload){n.fetchData()}r.addEventListener("input",e);window.addEventListener("search:loaded",e);document.querySelectorAll(".popup-trigger").forEach(e=>{e.addEventListener("click",()=>{document.body.classList.add("search-active");setTimeout(()=>r.focus(),500);if(!n.isfetched)n.fetchData()})});const t=()=>{document.body.classList.remove("search-active")};document.querySelector(".search-pop-overlay").addEventListener("click",e=>{if(e.target===document.querySelector(".search-pop-overlay")){t()}});document.querySelector(".popup-btn-close").addEventListener("click",t);document.addEventListener("pjax:success",()=>{n.highlightSearchWords(document.querySelector(".post-body"));t()});window.addEventListener("keydown",e=>{if((e.ctrlKey||e.metaKey)&&e.key==="k"){e.preventDefault();document.body.classList.add("search-active");setTimeout(()=>r.focus(),500);if(!n.isfetched)n.fetchData()}});window.addEventListener("keyup",e=>{if(e.key==="Escape"){t()}})});