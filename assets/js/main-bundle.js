!function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i:i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,i){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:i})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var i=Object.create(null);if(n.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(i,o,function(t){return e[t]}.bind(null,o));return i},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t),function(){var e,t,n,i,o,r;if((e=document.querySelector(".main-navigation"))&&void 0!==(t=e.getElementsByTagName("button")[0]))if(void 0!==(n=e.querySelector(".main-navigation-menu"))){for(n.setAttribute("aria-expanded","false"),-1===n.className.indexOf("nav-menu")&&(n.className+=" nav-menu"),o=0,r=(i=n.getElementsByTagName("a")).length;o<r;o++)i[o].addEventListener("focus",s,!0),i[o].addEventListener("blur",s,!0);!function(e){var t,n,i=e.querySelectorAll(".menu-item-has-children > a, .page_item_has_children > a");if("ontouchstart"in window)for(t=function(e){var t,n=this.parentNode;if(n.classList.contains("focus"))n.classList.remove("focus");else{for(e.preventDefault(),t=0;t<n.parentNode.children.length;++t)n!==n.parentNode.children[t]&&n.parentNode.children[t].classList.remove("focus");n.classList.add("focus")}},n=0;n<i.length;++n)i[n].addEventListener("touchstart",t,!1)}(e),window.addEventListener("resize",(function(){window.innerWidth>=1e3&&n.getAttribute("aria-expanded")&&(n.setAttribute("aria-expanded",!1),t.setAttribute("aria-expanded",!1),e.classList.remove("toggled"),t.classList.remove("button-cross"),n.style.height=null)})),t.onclick=function(){e.classList.contains("toggled")&&!n.classList.contains("in-transition")?(t.classList.toggle("button-cross"),function(e){e.classList.add("in-transition");var t=e.style.transition;e.style.transition="",requestAnimationFrame((function(){e.style.transition=t,requestAnimationFrame((function(){e.style.height="0px"}))})),e.addEventListener("transitionend",(function(t){a(),e.classList.remove("in-transition")}),{once:!0})}(n)):n.classList.contains("in-transition")||(t.classList.toggle("button-cross"),a(),function(e){e.classList.add("in-transition"),e.style.height||(e.style.height="0px");var t=e.scrollHeight;e.style.height=t+"px",e.addEventListener("transitionend",(function(n){e.style.height=t+"px",e.classList.remove("in-transition")}),{once:!0})}(n))},document.addEventListener("scroll",(function(){window.pageYOffset>50&&window.innerWidth>1e3?document.querySelector(".nav-container").style.transform="translateY(-52px)":document.querySelector(".nav-container").style.transform="translateY(0)"}))}else t.style.display="none";function s(){for(var e=this;-1===e.className.indexOf("nav-menu");)"li"===e.tagName.toLowerCase()&&(-1!==e.className.indexOf("focus")?e.className=e.className.replace(" focus",""):e.className+=" focus"),e=e.parentElement}function a(){var i="false"!==n.getAttribute("aria-expanded");n.setAttribute("aria-expanded",!i),t.setAttribute("aria-expanded",!i),e.classList.toggle("toggled")}}(),function(){function e(e,t,n){var i="";if(n){var o=new Date;o.setTime(o.getTime()+24*n*60*60*1e3),i="; expires="+o.toUTCString()}document.cookie=e+"="+t+i+"; path=/"}if("true"==function(e){for(var t=e+"=",n=document.cookie.split(";"),i=0;i<n.length;i++){for(var o=n[i];" "==o.charAt(0);)o=o.substring(1,o.length);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}("cookie-notice-dismissed")){var t=[];if(t=document.querySelectorAll(".cookie-accept"))for(var n=0;n<t.length;n++)t[n].src=t[n].dataset.src}else document.getElementById("cookie-notice").style.display="block";document.getElementById("cookie-notice-accept").addEventListener("click",(function(){e("cookie-notice-dismissed","true",31),document.getElementById("cookie-notice").style.display="none",location.reload()}))}(),window.netlifyIdentity&&window.netlifyIdentity.on("init",(function(e){e||window.netlifyIdentity.on("login",(function(){document.location.href="/admin/"}))}))}]);