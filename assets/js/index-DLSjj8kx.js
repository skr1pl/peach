(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))c(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const i of n.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function o(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function c(e){if(e.ep)return;e.ep=!0;const n=o(e);fetch(e.href,n)}})();document.addEventListener("DOMContentLoaded",function(){const s=document.querySelector("#toggleCities"),t=document.querySelector("#mapPanel");s.addEventListener("click",function(){t.classList.toggle("active"),s.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const s=["./assets/img/slide1.png","./assets/img/slide2.png","./assets/img/slide3.png","./assets/img/slide4.png","./assets/img/slide5.png"];let t=0;const o=document.getElementById("lifeImage"),c=document.querySelectorAll(".life__slide"),e=(l,a="right")=>{o.classList.remove("slide-left","slide-right"),setTimeout(()=>{o.src=s[l],o.classList.add(a==="right"?"slide-right":"slide-left")},50),c.forEach(m=>m.classList.remove("active")),c[l].classList.add("active")},n=()=>{t=(t+1)%s.length,e(t,"right")},i=()=>{t=(t-1+s.length)%s.length,e(t,"left")};document.getElementById("nextSlide").addEventListener("click",n),document.getElementById("prevSlide").addEventListener("click",i),setInterval(()=>{n()},3e3)});new Swiper(".life__swiper",{loop:!0,speed:800,autoplay:{delay:3e3,disableOnInteraction:!1},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,renderBullet:function(s,t){return`<div class="${t}"></div>`}},effect:"slide"});document.addEventListener("DOMContentLoaded",()=>{const s=document.querySelectorAll(".map__header__navbar a"),t=document.getElementById("mapImage"),o={Все:"./assets/img/all_map.png",Москва:"./assets/img/moscow_map.png",Центр:"./assets/img/middle_map.png","Северо-Запад":"./assets/img/northwest_map.png",Юг:"./assets/img/south_map.png",Волга:"./assets/img/volga_map.png",Урал:"./assets/img/ural_map.png",Сибирь:"./assets/img/siberia_map.png","Дальний восток":"./assets/img/far_east_map.png"};s.forEach(n=>{n.addEventListener("click",i=>{i.preventDefault(),s.forEach(a=>a.classList.remove("active_city")),n.classList.add("active_city");const l=n.textContent.trim();o[l]&&(t.src=o[l])})});const c=document.getElementById("toggleCities"),e=document.getElementById("mapPanel");c.addEventListener("click",()=>{e.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("toggleCities"),t=document.getElementById("mapPanel");s.addEventListener("click",()=>{t.classList.toggle("active")})});document.addEventListener("DOMContentLoaded",()=>{const s=document.getElementById("moscowBtn"),t=document.getElementById("centerBtn"),o=document.getElementById("southBtn"),c=document.getElementById("volgaBtn"),e=document.getElementById("uralBtn"),n=document.getElementById("siberiaBtn"),i=document.getElementById("eastBtn"),l=document.getElementById("northwestBtn"),a=document.getElementById("moscow"),m=document.getElementById("center"),u=document.getElementById("south"),p=document.getElementById("volga"),f=document.getElementById("ural"),B=document.getElementById("siberia"),E=document.getElementById("east"),v=document.getElementById("northwest"),y=[s,t,o,c,e,n,i,l],g=[a,m,u,p,f,B,E,v];let d=null;y.map((L,r)=>{L.addEventListener("click",()=>{d&&d!==r&&g[d].classList.toggle("actived"),g[r].classList.toggle("actived"),d=d===r?null:r})})});
