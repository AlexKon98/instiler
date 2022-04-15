import{Scene}from"../gl/Scene.js";window.addEventListener("load",function(){const r=document.querySelector("html"),e=document.querySelector(".loader");Pace.stop();document.querySelector(".pace-progress");setTimeout(function(){e.insertAdjacentHTML("beforeend",'<div class="load-new"><img src="img/Load.svg" alt="img">'),Pace.restart(),document.querySelector("body").classList.remove("paced"),Pace.on("done",function(){e.innerText="",e.classList.add("loader--hide"),console.log("ok")})},1e3),window.addEventListener("resize",function(e){let t=document.querySelector("body").getBoundingClientRect().top;window.scrollTo(0,t.toString().replace("-",""))},!0);const t=document.querySelector(".js-headerMenu");t.addEventListener("click",function(e){e.preventDefault();let t=this;"0"==this.getAttribute("data-click")?(t.setAttribute("data-click","1"),t.classList.add("is-opened"),t.querySelector(".header__menu-btn-text--menu").style.opacity="0",t.querySelector(".header__menu-btn-text--menu").style.transform="translateY(8px)",t.querySelector(".header__menu-btn-text--menu").style.transition="none",t.querySelector(".header__menu-btn-text--close").style.opacity="1",t.querySelector(".header__menu-btn-text--close").style.transform="translateY(0px)",t.querySelector(".header__menu-btn-text--close").style.transition="0.9s ease-out",t.closest(".header__content").classList.add("header__content-opened"),t.style.pointerEvents="none",document.querySelector("html").classList.add("scroll-disabled"),t.closest(".header__content").querySelector("picture").innerHTML="",t.closest(".header__content").querySelector("picture").insertAdjacentHTML("beforeend",`
		<source srcset="img/logo-mobile-open.png" media="(min-width: 0px) and (max-width: 767px)">
		<source srcset="img/logo-tablet-open.png" media="(min-width: 767px) and (max-width: 1279px)">
		<img src="img/logo-desktop-open.png" alt="logo">`),t.closest(".header__content").querySelector("div").style.opacity="0",t.closest(".header__content").querySelector("div").style.transition="0s ease",anime({targets:".header__menu",top:0,easing:"easeInOutExpo",complete:function(){document.querySelector(".header").classList.add("header-active"),document.querySelector(".header__menu-wrapper").classList.add("header__menu-wrapper-active"),t.style.pointerEvents="all",t.closest(".header__content").querySelector("div").style.opacity="1",t.closest(".header__content").querySelector("div").style.transition="1s ease",document.querySelector(".header__logo-fixed").classList.remove("header__logo-fixed-active"),document.querySelector(".header__logo-default").classList.remove("header__logo-default-hide")}})):(t.setAttribute("data-click","0"),t.classList.remove("is-opened"),t.querySelector(".header__menu-btn-text--menu").style.opacity="1",t.querySelector(".header__menu-btn-text--menu").style.transform="translateY(0px)",t.querySelector(".header__menu-btn-text--menu").style.transition="0.9s ease-out",t.querySelector(".header__menu-btn-text--close").style.opacity="0",t.querySelector(".header__menu-btn-text--close").style.transform="translateY(8px)",t.querySelector(".header__menu-btn-text--close").style.transition="none",t.closest(".header__content").classList.remove("header__content-opened"),document.querySelector(".header").classList.remove("header-active"),document.querySelector(".header__menu-wrapper").classList.remove("header__menu-wrapper-active"),t.style.pointerEvents="none",t.closest(".header__content").querySelector("picture").innerHTML="",t.closest(".header__content").querySelector("picture").insertAdjacentHTML("beforeend",`
		<source srcset="img/logo-mobile.png" media="(min-width: 0px) and (max-width: 767px)">
		<source srcset="img/logo-tablet.png" media="(min-width: 767px) and (max-width: 1279px)">
		<img src="img/logo-desktop.png" alt="logo">
	`),t.closest(".header__content").querySelector("div").style.opacity="0",t.closest(".header__content").querySelector("div").style.transition="0s ease",anime({targets:".header__menu",top:"-100vh",easing:"easeInOutExpo",complete:function(){t.style.pointerEvents="all",document.querySelector("html").classList.remove("scroll-disabled"),t.closest(".header__content").querySelector("div").style.opacity="1",t.closest(".header__content").querySelector("div").style.transition="1s ease",document.querySelector(".header__logo-fixed").classList.add("header__logo-fixed-active"),document.querySelector(".header__logo-default").classList.add("header__logo-default-hide")}}))}),$(".upArrow a").click(function(){$("html, body").animate({scrollTop:0},"ease"),p.classList.remove("header-hide"),p.classList.remove("header-sticky")});const o=document.querySelector(".js-search-open");o.addEventListener("click",e=>{e.preventDefault(),o.closest("div").querySelector("input").classList.toggle("header__bar-input-active"),o.closest("div").querySelector(".search-img").classList.toggle("header__bar-img-view"),o.closest("div").querySelector(".close-img").classList.toggle("header__bar-img-view"),o.closest("div").querySelector("button").classList.toggle("header__bar-img-view")});const s=document.querySelectorAll(".canvas");if(s.forEach(function(e){let o=e,s=o.getContext("2d"),i=new Image,r=new Image,n=e.closest(".js-hover");r.src=n.getAttribute("data-imgmasksrc"),i.src=n.getAttribute("data-img-src");let l=0,a;function c(){-1!=navigator.userAgent.indexOf("Chrome")?(n.classList.contains("js-hover-menu")&&(l+=20),n.classList.contains("js-hover-main")&&(l+=40)):-1!=navigator.userAgent.indexOf("Safari")?(n.classList.contains("js-hover-menu")&&(l+=15),n.classList.contains("js-hover-main")&&(l+=30)):-1!=navigator.userAgent.indexOf("Firefox")&&(n.classList.contains("js-hover-menu")&&(l+=25),n.classList.contains("js-hover-main")&&(l+=50));var e=(o.width-(70+l))/2,t=(o.height-(40+l))/2;s.clearRect(0,0,o.width,o.height),s.globalCompositeOperation="source-over",s.drawImage(r,e,t,70+l,40+l),s.globalCompositeOperation="source-in",s.drawImage(i,0,0,i.naturalWidth,i.naturalHeight),l<1500&&(a=window.requestAnimationFrame(c))}i.onload=()=>{o.width=i.naturalWidth,o.height=i.naturalHeight,c(),n.classList.contains("js-hover-main")&&setTimeout(()=>{n.classList.add("js-canvas-scale"),n.querySelector(".js-canvasLink")&&(n.querySelector(".js-canvasLink").style.opacity="0")},300)},n.onmouseenter=()=>{l=0,o.style.display="block",c(),window.requestAnimationFrame(c),n.classList.contains("js-hover-main")&&(n.classList.remove("js-canvas-scale"),n.classList.add("js-canvas-text"),n.querySelector(".js-canvasLink")&&(n.querySelector(".js-canvasLink").style.opacity="1"),n.querySelector(".js-canvasLink")&&n.querySelector(".js-canvasLink").classList.add("main__project-link--hovered")),n.querySelector(".js-canvasLink").style.color="chocolate"},n.onmouseleave=()=>{n.classList.contains("js-hover-menu")&&(o.style.display="none"),n.classList.contains("js-hover-main")&&(n.classList.add("js-canvas-scale"),n.classList.remove("js-canvas-text"),n.querySelector(".js-canvasLink")&&(n.querySelector(".main__project-link").style.opacity="0"),n.querySelector(".js-canvasLink")&&n.querySelector(".js-canvasLink").classList.remove("main__project-link--hovered")),n.querySelector(".js-canvasLink").style.color="#fff7f3"};let t=0;$(window).scroll(function(){var e=$(window).scrollTop()+$(window).height();n.classList.contains("js-show-scroll")&&$(n).offset().top+$(n).height()+300<e&&0==t&&(l=0,o.style.display="block",n.querySelector(".js-show-scroll-canvas").classList.remove("js-show-scroll-scale"),c(),t=1)})}),document.querySelector(".js-main__video")&&Fancybox.bind(".js-main__video",{}),document.querySelector(".services__swiper")){window.matchMedia("(min-width:1200px)");const E=document.querySelectorAll(".services__slide"),k=document.querySelector(".services__tablet-result p"),B=document.querySelector(".services__tablet-result a");E.forEach(o=>{var e;o.classList.contains("services__slide-active")&&(e=o.querySelector(".services__slide-text").textContent,k.innerText=e,o.classList.add("services__slide-active")),o.addEventListener("click",e=>{e.preventDefault();var t=o.querySelector(".services__slide-text").textContent,e=o.querySelector(".services__slide-link").getAttribute("href");k.innerText=t,B.setAttribute("href",e),E.forEach(e=>{e.classList.remove("services__slide-active")}),o.classList.add("services__slide-active")})})}AOS.init({duration:1200});var i=document.querySelectorAll(".js-dropdown");if(i[0])for(var n of i)n.addEventListener("click",l);function l(){const e=this.parentElement.parentElement.querySelector(".js-dropdown.active");e&&e!==this&&(e.classList.remove("active"),e.nextElementSibling.style.maxHeight=null),this.classList.toggle("active");const t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}const a=document.querySelector(".filter");if(a){window.matchMedia("(max-width: 1366px)").matches&&a.querySelector(".filter__options");var c=a.querySelectorAll(".filter__options-list input[type=checkbox]");a.querySelector("#reset-filter");const j=a.querySelector(".filter__result-list"),C=(e,t)=>{e=e.nextElementSibling.textContent;const o=document.createElement("li");o.classList.add("filter__result-item"),o.textContent=e,o.dataset.id=t,j.appendChild(o)};Array.from(c).forEach((e,t)=>{e.checked&&C(e,t)});Array.from(c).forEach((e,t)=>{e.addEventListener("change",()=>{((e,t)=>{if(!0===e.checked)C(e,t);else{const o=Array.from(a.querySelectorAll(".filter__result-item")).filter(e=>+e.dataset.id===t)[0];o.remove()}})(e,t)})})}const d=document.querySelectorAll(".js-hover-anim");let u=!1;const p=document.querySelector("header");window.addEventListener("wheel",e=>{e=Math.sign(e.deltaY);1==e&&p.classList.add("header-hide"),-1==e&&p.classList.remove("header-hide"),p.classList.contains("header-active")?p.classList.add("header-block"):p.classList.remove("header-block")});var m=$(document);m.scroll(function(){50<=m.scrollTop()?(p.classList.add("header-sticky"),p.querySelector(".header__logo-default").classList.add("header__logo-default-hide"),p.querySelector(".header__logo-fixed").classList.add("header__logo-fixed-active")):(p.classList.remove("header-sticky"),p.querySelector(".header__logo-default").classList.remove("header__logo-default-hide"),p.querySelector(".header__logo-fixed").classList.remove("header__logo-fixed-active"))});document.querySelector(".fixed__bar-social");const y=document.querySelector(".js-social-open");y.addEventListener("click",e=>{$(".fixed__bar-social-list-wrapper").animate({width:"toggle"},350),y.closest(".fixed__bar-social").classList.toggle("fixed__bar-social--active")});const h=document.querySelector(".footer"),f=document.querySelector(".awards"),v=document.querySelector(".footer__decor"),g=document.querySelector(".fixed__bar"),_=document.querySelector(".awards__title");let w=!1;$(h).on("inview",function(e,t){if(1==t){t=h.getBoundingClientRect().height;let e=t+f.getBoundingClientRect().height;v.style.bottom=`${t}px`,setTimeout(function(){$(v).animate({height:e}),w=!0},100),g.classList.add("fixed__bar--active"),_.style.color="#F7F3F0"}else setTimeout(function(){$(v).animate({height:0}),w=!1},100),g.classList.remove("fixed__bar--active"),_.style.color="#101010"}),window.addEventListener("resize",function(e){const t=document.querySelector(".footer"),o=document.querySelector(".awards"),s=document.querySelector(".footer__decor");var i=t.getBoundingClientRect().height,r=i+o.getBoundingClientRect().height;1==w&&(s.style.height=`${r}px`,s.style.bottom=`${i}px`)},!0),$(".js-openModal").click(function(e){e.preventDefault(),this.blur(),$.get(this.href,function(e){$(e).appendTo("body").modal({fadeDuration:150,fadeDelay:.5});e=document.querySelectorAll(".js-dropdown");const t=document.querySelectorAll(".js-openSecondModal");if(t&&t.forEach(o=>{o.addEventListener("click",function(e){e.preventDefault();e=o.dataset.name;if(!array[e])return!1;const t=lightGallery(this,{plugins:[lgZoom,lgThumbnail],licenseKey:"your_license_key",speed:500,download:!1,mobileSettings:{showCloseIcon:!0},dynamic:!0,dynamicEl:array[e]});t.openGallery(0)})}),e[0])for(var o of e)o.addEventListener("click",s);function s(){const e=this.parentElement.parentElement.querySelector(".js-dropdown.active");e&&e!==this&&(e.classList.remove("active"),e.nextElementSibling.style.maxHeight=null),this.classList.toggle("active");const t=this.nextElementSibling;t.style.maxHeight?t.style.maxHeight=null:t.style.maxHeight=t.scrollHeight+"px"}}),$.ajax({url:$(this).attr("href"),success:function(e,t,o){if(document.querySelector(".js-promt")){const s=document.querySelectorAll(".js-promt");s.forEach(e=>{var t=e.getAttribute("data-promt");tippy(e,{content:`${t}`,animation:"scale",placement:"top",arrow:!0,arrowType:"round",duration:[250,200],theme:"light-border",interactive:!0})})}if(document.querySelector(".js-astr")){const i=document.querySelectorAll(".js-astr");i.forEach(t=>{console.log(),t.addEventListener("click",e=>{e.preventDefault(),toastr.info(t.getAttribute("data-promt"))})})}r.style.overflow="hidden",setTimeout(function(){document.querySelector(".close-modal").addEventListener("click",e=>{e.preventDefault(),document.querySelector(".viewer")&&document.querySelector(".viewer").remove(),r.style.overflow="visible"})},100)}})});const b=document.querySelectorAll(".js-openSecondModal");if(b&&b.forEach(o=>{o.addEventListener("click",function(e){e.preventDefault();e=o.dataset.name;if(!array[e])return!1;const t=lightGallery(this,{plugins:[lgZoom,lgThumbnail],licenseKey:"your_license_key",speed:500,download:!1,mobileSettings:{showCloseIcon:!0},dynamic:!0,dynamicEl:array[e]});t.openGallery(0)})}),document.querySelector(".tile")&&(window.scene=new Scene),document.querySelector("#stage")){const T=document.querySelector("#stage");T.classList.add("stage--loaded")}if(document.querySelector(".awards__item")){const M=document.querySelectorAll(".awards__item");M.forEach(e=>{var t=e.getAttribute("data-title");tippy(e,{content:`${t}`,animation:"scale",followCursor:!0,theme:"tomato"})})}if(document.querySelector(".js-promt")){const D=document.querySelectorAll(".js-promt");D.forEach(e=>{var t=e.getAttribute("data-promt");tippy(e,{content:`${t}`,animation:"scale",placement:"top",arrow:!0,arrowType:"round",duration:[250,200],theme:"light-border",interactive:!0})})}if(document.querySelector(".reviews__swiper")&&new Swiper(".swiper.reviews__swiper",{loop:!0,loopAdditionalSlides:30,speed:1e3,navigation:{nextEl:".swiper-button-next.reviews__next",prevEl:".swiper-button-prev.reviews__prev"},autoplay:{delay:2500,disableOnInteraction:!0},breakpoints:{375:{slidesPerView:1,spaceBetween:50},1440:{slidesPerView:1.2,spaceBetween:50},1700:{slidesPerView:1.4,spaceBetween:50},1920:{slidesPerView:1.4,spaceBetween:135}}}),d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);var t=document.querySelector("body").getBoundingClientRect(),o=i.getBoundingClientRect(),s={};s.top=o.top-t.top,s.left=o.left-t.left;var r=s.top,o=s.left,t=i.getAttribute("href"),s=i.querySelector("canvas").getAttribute("data-src");function n(e){let t=e.querySelector("canvas");var o=t.getContext("2d"),i=o.canvas;i.width=i.getBoundingClientRect().width,i.height=i.getBoundingClientRect().height;var r=new function(e){this.ctx=e,this.canvas=i,this.set=function(e){for(var t in e)this.ctx[t]=e[t]},this.fillRect=function(e,t,o,s){this.ctx.fillRect(e,t,o,s)},this.strokeRect=function(e,t,o,s){this.ctx.strokeRect(e,t,o,s)},this.fillCircle=function(e,t,o){this.ctx.beginPath(),this.ctx.arc(e,t,o,0,2*Math.PI),this.ctx.fill()},this.strokeCircle=function(e,t,o){this.ctx.beginPath(),this.ctx.arc(e,t,o,0,2*Math.PI),this.ctx.stroke()},this.fillText=function(e,t,o){this.ctx.fillText(o,e,t)},this.strokeText=function(e,t,o){this.ctx.strokeText(o,e,t)},this.line=function(e,t,o,s){this.ctx.beginPath(),this.ctx.moveTo(e,t),this.ctx.lineTo(o,s),this.ctx.stroke()},this.clear=function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height)}}(o),n=[];window.step=function(){if(0==u)return u=!0,window.requestAnimationFrame(window.step),window.cancelAnimationFrame(window.step),r.clear(),!1;1==u&&(window.requestAnimationFrame(window.step),r.clear());var e,t={x:l.x-i.offsetLeft,y:l.y-i.offsetTop};for(e of n){var o,s=1/Math.sqrt(Math.pow(e.y-t.y,2)+Math.pow(e.x-t.x,2))*12;for(o of["x","y"])e[o]+=e["a"+o],e["a"+o]+=.3*(Math.random()-.5),e["a"+o]-=.15*Math.sign(e[o]-e["s"+o]),e["a"+o]*=.9,e["a"+o]-=Math.sign(t[o]-e[o])*s;r.fillCircle(e.x,e.y,2)}},function(){-1==navigator.userAgent.indexOf("Chrome")&&-1==navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Firefox")||(r.set({font:"89px Icons",textBaseline:"center",textAlign:"center",fillStyle:"#170808"}),r.clear(),r.fillText(210,304,"k"));for(var e of n=function(e,t){for(var o=e.getImageData(0,0,e.canvas.width,e.canvas.height),s=[],i=e.canvas.height/t,r=e.canvas.width/t,n=0;n<i;n++)for(var l=0;l<r;l++)for(var a=l*t+t/2,c=n*t+t/2,d=0;d<t;d++)for(var u=0;u<t;u++){var p=4*((n*t+d)*e.canvas.width+(l*t+u)),[m,y,h,p]=[o.data[p],o.data[1+p],o.data[2+p],o.data[3+p]];p&&(s.push({x:a,y:c,info:{r:m,g:y,b:h,alpha:p}}),u=d=t)}return s}(o,3))e.sx=e.x,e.sy=e.y,e.ax=25*Math.random()-13,e.ay=25*Math.random()-13}(),0==u&&(r.clear(),window.step())}document.querySelector("body").insertAdjacentHTML("beforeend",`
	<div data-isBtnDyeZ="${e}" class="isBtnDyeZ" style="width:420px; height: 420px; position: absolute; top: ${r-10}px; left: ${o-10}px; background: url(${s}), #FAF9F7">
		<a href="${t}"></a>
	</div>`),window.addEventListener("resize",function(e){const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})},!0);var l={x:0,y:0};function a(e){$(window).scrollTop();l.x=e.pageX,l.y=e.pageY}200<window.innerWidth?document.addEventListener("mousemove",a,!1):document.addEventListener("touchmove",function(e){a(e.touches[0])},!1),$(i).on("inview",function(e,t){1==t?setTimeout(function(){n(i),u=!0},100):u=!1})}),document.querySelector(".pricelist-price__btn")){const P=document.querySelectorAll(".pricelist-price__btn");P.forEach(e=>{$(e).click(function(){0==e.getAttribute("data-active")&&$(e).closest(".pricelist-price__btn-wrap").siblings(".js-hide").slideDown("slow",function(){d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})}),e.setAttribute("data-active",1),e.textContent="",e.insertAdjacentHTML("beforeend",`Свернуть
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path d="M1 1.48438L14 1.48437M14 1.48437L14 14.4844M14 1.48437L1 14.4844" stroke="#B55A2B"></path>
					</svg>
				</span>`)}),1==e.getAttribute("data-active")&&(e.setAttribute("data-active",0),$(e).closest(".pricelist-price__btn-wrap").siblings(".js-hide").slideUp("slow",function(){d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})}),e.textContent="",e.insertAdjacentHTML("beforeend",`Подробнее
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
						<path d="M14 0.484375L14 13.4844M14 13.4844L1 13.4844M14 13.4844L1 0.484374" stroke="#B55A2B"/>
					</svg>
				</span>`)}))})})}if(document.querySelector(".composition__btn")){const R=document.querySelectorAll(".composition__btn");R.forEach(e=>{$(e).click(function(){0==e.getAttribute("data-active")&&$(e).closest("li").find(".composition__list-result").slideDown("slow",function(){d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})}),e.setAttribute("data-active",1),e.textContent="",e.insertAdjacentHTML("beforeend",`Свернуть
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
						<path d="M1 1.48438L14 1.48437M14 1.48437L14 14.4844M14 1.48437L1 14.4844" stroke="#B55A2B"></path>
					</svg>
				</span>`)}),1==e.getAttribute("data-active")&&(e.setAttribute("data-active",0),$(e).closest("li").find(".composition__list-result").slideUp("slow",function(){d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})}),e.textContent="",e.insertAdjacentHTML("beforeend",`Подробнее
				<span>
					<svg xmlns="http://www.w3.org/2000/svg" width="15" height="14" viewBox="0 0 15 14" fill="none">
						<path d="M14 0.484375L14 13.4844M14 13.4844L1 13.4844M14 13.4844L1 0.484374" stroke="#B55A2B"/>
					</svg>
				</span>`)}))})})}if(document.querySelector(".js-composition-item")){const H=document.querySelectorAll(".js-composition-item"),V=document.querySelectorAll(".js-composition-link");V.forEach((t,o)=>{t.addEventListener("click",e=>{e.preventDefault(),H.forEach((e,t)=>{e.style.opacity="0",e.classList.remove("composition__list-result"),e.classList.add("composition__list-result-hide"),t===o&&(H[t].classList.add("composition__list-result"),H[t].classList.remove("composition__list-result-hide"),setTimeout(()=>{H[t].style.opacity="1"},350))}),V.forEach(e=>{e.closest("li").querySelector("span").classList.remove("active")}),t.closest("li").querySelector("span").classList.add("active")})})}if(document.querySelector(".examples-swiper")&&new Swiper(".swiper.examples-swiper",{loop:!0,loopAdditionalSlides:30,speed:1e3,navigation:{nextEl:".swiper-button-next.examples__next",prevEl:".swiper-button-prev.examples__prev"},autoplay:{delay:2500,disableOnInteraction:!0},breakpoints:{375:{slidesPerView:1,spaceBetween:100},1200:{slidesPerView:2,spaceBetween:20},1366:{slidesPerView:3,spaceBetween:20}}}),document.querySelector(".project-gallery")&&(c=new Swiper(".gallery-thumbs.project-gallery__thumbsSwiper",{spaceBetween:10,slidesPerView:4,freeMode:!0,watchSlidesProgress:!0,breakpoints:{0:{slidesPerView:3,spaceBetween:17},768:{slidesPerView:5,spaceBetween:8},1200:{slidesPerView:5,spaceBetween:8},1366:{slidesPerView:5,spaceBetween:8},1666:{slidesPerView:6,spaceBetween:8},1920:{slidesPerView:8,spaceBetween:17}}}),new Swiper(".gallery-top.project-gallery__topSwiper",{spaceBetween:10,navigation:{nextEl:".swiper-button-next.project-gallery__next",prevEl:".swiper-button-prev.project-gallery__prev"},thumbs:{swiper:c},breakpoints:{0:{slidesPerView:1,spaceBetween:50},768:{slidesPerView:1,spaceBetween:50},1200:{slidesPerView:1.5,spaceBetween:30},1366:{slidesPerView:1.7,spaceBetween:30},1666:{slidesPerView:2.3,spaceBetween:50},1920:{slidesPerView:3.3,spaceBetween:50}}})),document.querySelector(".js-reviews")){const O=document.querySelectorAll(".js-reviews");O.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),0==t.getAttribute("data-open")&&$(t).siblings(".reviews__comment-hide").slideDown("slow",function(){t.innerText="Скрыть",t.setAttribute("data-open",1),d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})})}),1==t.getAttribute("data-open")&&(t.setAttribute("data-open",0),$(t).siblings(".reviews__comment-hide").slideUp("slow",function(){t.innerText="Читать польностью",d.forEach((i,e)=>{i.setAttribute("data-isBtnDye",e);const t=document.querySelectorAll(".isBtnDyeZ");t.forEach(e=>{var t,o,s;i.getAttribute("data-isbtndye")==e.getAttribute("data-isbtndyez")&&(o=document.querySelector("body").getBoundingClientRect(),t=i.getBoundingClientRect(),(s={}).top=t.top-o.top,s.left=t.left-o.left,o=s.top,s=s.left,e.style.top=`${o-10}px`,e.style.left=`${s-10}px`)})})}))})})}if(document.querySelector(".js-astr")){toastr.options={closeButton:!1,debug:!1,newestOnTop:!1,progressBar:!0,positionClass:"toast-top-right",preventDuplicates:!1,onclick:null,showDuration:"1300",hideDuration:"1000",timeOut:"5000",extendedTimeOut:"1000",showEasing:"swing",hideEasing:"linear",showMethod:"fadeIn",hideMethod:"fadeOut"};const I=document.querySelectorAll(".js-astr");I.forEach(t=>{t.addEventListener("click",e=>{e.preventDefault(),toastr.info(t.getAttribute("data-promt"))})})}const S=document.querySelectorAll(".filter__wrapper");document.querySelectorAll(".filter__label");const x=document.querySelector(".filter"),q=document.querySelector(".filter__clear-btn"),L=document.querySelector(".filter__close-mob");x&&x.addEventListener("click",e=>{(e.target===e.currentTarget||e.target.classList.contains("filter__substrate")||e.target.classList.contains("filter__heading")||e.target.classList.contains("filter__btn"))&&(e.currentTarget.classList.toggle("filter-active"),window.innerWidth<768&&(document.querySelector("html").style.overflow="hidden"))}),$(document).mouseup(function(e){var t=$(".filter");0===t.has(e.target).length&&t.removeClass("filter-active")}),S&&S.forEach(e=>{e.addEventListener("click",()=>{e.classList.toggle("filter__wrapper-active"),e.classList.contains("filter__wrapper-active")&&(q.style.visibility="visible")})}),S.forEach(e=>{e.addEventListener("click",()=>{return Array.from(x.querySelectorAll(".filter__checkbox")).some(e=>!!e.hasAttribute("checked"))?(document.querySelector(".filter__substrate").style.backgroundColor="#B55A2B",void(document.querySelector(".filter__substrate path").style.fill="white")):(q.style.visibility="hidden",document.querySelector(".filter__substrate").style.backgroundColor="white",void(document.querySelector(".filter__substrate path").style.fill="#B55A2B"))})}),q&&q.addEventListener("click",()=>{S.forEach(e=>{e.classList.remove("filter__wrapper-active"),e.querySelector(".filter__checkbox").removeAttribute("checked"),document.querySelector(".filter__substrate").style.backgroundColor="white",document.querySelector(".filter__substrate path").style.fill="#B55A2B",q.style.visibility="hidden"})}),L&&L.addEventListener("click",()=>{x.classList.remove("filter-active"),document.querySelector("html").style.overflow="visible"}),x&&setTimeout(()=>{x.style.left=0},.5),document.querySelector(".filter__popup-mob")&&document.querySelector(".filter__popup-mob").addEventListener("click",e=>{window.innerWidth<768&&e.target===e.currentTarget&&(x.classList.remove("filter-active"),document.querySelector("html").style.overflow="visible")}),document.addEventListener("keydown",e=>{"Escape"===e.key&&(document.querySelector("html").style.overflow="visible")}),document.addEventListener("keypress",e=>{"Escape"===e.key&&(document.querySelector("html").style.overflow="visible")}),document.addEventListener("keyup",e=>{"Escape"===e.key&&(document.querySelector("html").style.overflow="visible")});let A=document.querySelector(".js-application-link");A.addEventListener("click",async function(e){e.preventDefault();let t=await fetch(this.href),o=document.createElement("div");o.innerHTML=await t.text(),o.classList.add("application-bg"),document.body.append(o),document.querySelector("html").style.overflow="hidden";e=document.querySelector("input[type='tel']");new Inputmask("+7(999) 999-99-99").mask(e)}),window.addEventListener("click",e=>{(e.target.classList.contains("application-bg")||e.target.classList.contains("application-close")||e.target.classList.contains("application-close__img"))&&(document.querySelector(".application-bg").remove(),document.querySelector("html").removeAttribute("style"))})});
//# sourceMappingURL=main.js.map
