!function(e,t){for(var r in t)e[r]=t[r]}(window,function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=263)}({263:function(e,t,r){r(36),e.exports=r(264)},264:function(e,t,r){"use strict";r.r(t);r(265);function n(e){if("https://subscribe.wordpress.com"===e.origin&&e.data){var t=JSON.parse(e.data);t&&"close"===t.action&&(window.removeEventListener("message",n),tb_remove())}}var o=function(){Array.prototype.slice.call(document.querySelectorAll(".wp-block-jetpack-membership-button")).forEach(function(e){var t=e.getAttribute("data-blog-id"),r=e.getAttribute("data-plan-id"),o=e.getAttribute("data-lang"),i=e.getAttribute("data-powered-text").replace("WordPress.com",'<a href="https://wordpress.com" target="_blank" rel="noreferrer noopener">WordPress.com</a>');try{!function(e,t,r,o,i){e.addEventListener("click",function(){tb_show(null,"https://subscribe.wordpress.com/memberships/?blog="+t+"&plan="+r+"&lang="+i+"TB_iframe=true&height=600&width=400",null),window.addEventListener("message",n,!1);var e=document.querySelector("#TB_window");e.classList.add("jetpack-memberships-modal");var a=document.createElement("DIV");a.classList.add("TB_footer"),a.innerHTML=o,e.appendChild(a)})}(e,t,r,i,o)}catch(a){console.error("Problem activating Membership Button "+r,a)}})};"undefined"!=typeof window&&"undefined"!=typeof document&&("loading"===document.readyState?document.addEventListener("DOMContentLoaded",o):o())},265:function(e,t,r){},27:function(e,t,r){"object"==typeof window&&window.Jetpack_Block_Assets_Base_Url&&(r.p=window.Jetpack_Block_Assets_Base_Url)},36:function(e,t,r){"use strict";r.r(t);r(27)}}));