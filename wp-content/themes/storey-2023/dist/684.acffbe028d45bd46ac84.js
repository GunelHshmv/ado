(self.webpackChunkbuild_boilerplate=self.webpackChunkbuild_boilerplate||[]).push([[684],{9440:function(e,t,o){var n={"./base/ajax":[2096,9,464,900,588,90,96],"./base/ajax.ts":[2096,9,464,900,588,90,96],"./base/aos":[6572,9,572],"./base/aos.ts":[6572,9,572],"./base/fadePage":[7580,9,580],"./base/fadePage.ts":[7580,9,580],"./base/header":[8484,9,464,104],"./base/header.ts":[8484,9,464,104],"./base/misc":[9480,9,588,64,480],"./base/misc.ts":[9480,9,588,64,480],"./base/scroll":[5540,9,540],"./base/scroll.ts":[5540,9,540],"./helpers/link-prefetch":[2032,9,32],"./helpers/link-prefetch.ts":[2032,9,32],"./import-functions":[7684,9],"./import-functions.ts":[7684,9],"./init-scripts":[7876,9],"./init-scripts.ts":[7876,9],"./main":[4232,9],"./main.ts":[4232,9],"./modules/accordion":[1484,9,484],"./modules/accordion.ts":[1484,9,484],"./modules/bg-shape":[7924,9,924],"./modules/bg-shape.ts":[7924,9,924],"./modules/c-asset":[5128,9,128],"./modules/c-asset.ts":[5128,9,128],"./modules/footer":[7008,9,8],"./modules/footer.ts":[7008,9,8],"./modules/h-slider":[8340,9,340],"./modules/h-slider.ts":[8340,9,340],"./modules/img-slider":[8687,9,687],"./modules/img-slider.ts":[8687,9,687],"./modules/intro-webgl":[584,9,24,196],"./modules/intro-webgl.ts":[584,9,24,196],"./modules/leasing-listing":[452,9,464,900,90,452],"./modules/leasing-listing-popup":[7016,9,16],"./modules/leasing-listing-popup.ts":[7016,9,16],"./modules/leasing-listing.ts":[452,9,464,900,90,452],"./modules/location-map":[7090,9,900,90,824],"./modules/location-map.ts":[7090,9,900,90,824],"./modules/locations":[9920,9,920],"./modules/locations.ts":[9920,9,920],"./modules/pillars":[748,9,748],"./modules/pillars.ts":[748,9,748],"./modules/popup":[9144,9,144],"./modules/popup.ts":[9144,9,144],"./modules/quote-block":[7728,9,728],"./modules/quote-block.ts":[7728,9,728],"./modules/times":[8148,9,148],"./modules/times.ts":[8148,9,148],"./modules/two-col":[6388,9,388],"./modules/two-col.ts":[6388,9,388],"./storey":[1024,7,644],"./storey.js":[1024,7,644],"./utils/functions":[5172,9,172],"./utils/functions.ts":[5172,9,172],"./utils/variables":[9100,9],"./utils/variables.ts":[9100,9]};function s(e){if(!o.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],s=t[0];return Promise.all(t.slice(2).map(o.e)).then((function(){return o.t(s,16|t[1])}))}s.keys=function(){return Object.keys(n)},s.id=9440,e.exports=s},4444:function(){var e,t=["scroll","wheel","touchstart","touchmove","touchenter","touchend","touchleave","mouseout","mouseleave","mouseup","mousedown","mousemove","mouseenter","mousewheel","mouseover"];if(function(){var e=!1;try{var t=Object.defineProperty({},"passive",{get:function(){e=!0}});window.addEventListener("test",null,t),window.removeEventListener("test",null,t)}catch(e){}return e}()){var o=EventTarget.prototype.addEventListener;e=o,EventTarget.prototype.addEventListener=function(o,n,s){var r,i="object"==typeof s&&null!==s,l=i?s.capture:s;(s=i?function(e){var t=Object.getOwnPropertyDescriptor(e,"passive");return t&&!0!==t.writable&&void 0===t.set?Object.assign({},e):e}(s):{}).passive=void 0!==(r=s.passive)?r:-1!==t.indexOf(o)&&!0,s.capture=void 0!==l&&l,e.call(this,o,n,s)},EventTarget.prototype.addEventListener._original=e}},7684:function(e,t,o){"use strict";o.r(t),o.d(t,{ifModuleThenImport:function(){return l},runDefaultAt:function(){return i}});var n=o(8520),s=o(314),r=o(9100);function i(e){o(9440)(`${e}`).then((e=>e.default()))}function l(e,t,o){const l=document.querySelector(e);l&&(o&&!r.isMobile?n.default.to(l,{scrollTrigger:{trigger:l,start:`top bottom+=${r.innerH}`,once:!0,onEnter:()=>{i(`./modules/${t}`),s.ScrollTrigger.refresh()}}}):i(`./modules/${t}`))}},7876:function(e,t,o){"use strict";o.r(t),o.d(t,{default:function(){return r}});var n=o(9100),s=o(7684);o(4444);function r(){!function(){if(!n.isMobile||n.innerW<n.bp.tbl)(0,s.runDefaultAt)("./base/scroll"),(0,s.runDefaultAt)("./helpers/link-prefetch");else{document.querySelectorAll("[data-scroll-to]").forEach((e=>{e.addEventListener("click",(t=>{t.preventDefault();const o=e.getAttribute("data-scroll-to");if(!o)return;const n=document.querySelector(o);n&&n.scrollIntoView({behavior:"smooth"})}))}))}(0,s.runDefaultAt)("./utils/variables"),(0,s.runDefaultAt)("./base/header"),(0,s.runDefaultAt)("./base/misc"),(0,s.runDefaultAt)("./base/ajax"),(0,s.runDefaultAt)("./base/fadePage")}(),function(){(0,s.ifModuleThenImport)(".c-asset","c-asset",!0),(0,s.ifModuleThenImport)(".times","times",!0),(0,s.ifModuleThenImport)(".img-slider","img-slider",!0),(0,s.ifModuleThenImport)(".quote-block","quote-block",!1),(0,s.ifModuleThenImport)(".accordion","accordion",!0),(0,s.ifModuleThenImport)(".map","location-map",!0),(0,s.ifModuleThenImport)(".listing","leasing-listing",!0),(0,s.ifModuleThenImport)(".popup-trigger","popup",!0),(0,s.ifModuleThenImport)(".two-col","two-col",!0),n.isMobile||((0,s.ifModuleThenImport)(".bg-shape","bg-shape",!1),(0,s.ifModuleThenImport)(".pillars","pillars",!0));n.innerW>n.bp.lpt&&((0,s.ifModuleThenImport)(".intro-webgl","intro-webgl",!1),(0,s.ifModuleThenImport)(".footer","footer",!0),(0,s.ifModuleThenImport)(".locations","locations",!0));n.innerW>n.bp.tbl&&(0,s.ifModuleThenImport)(".h-slider","h-slider",!1)}()}},9100:function(e,t,o){"use strict";o.r(t),o.d(t,{bp:function(){return s},default:function(){return f},innerH:function(){return l},innerW:function(){return i},isMobile:function(){return r},mouse:function(){return m},varSpacer:function(){return u}});var n=o(314);const s={mbl:416,mblLG:640,tbl:900,lpt:1100,lptLg:1312,dsk:1696},r="ontouchstart"in document.documentElement;let i,l,u,a;function c(){n.ScrollTrigger.refresh(),i=window.innerWidth,l=window.innerHeight,u=i*(i>s.mblLG?.027:.053)}function d(){clearTimeout(a),a=setTimeout((()=>{window.innerHeight!==l&&r?(window.innerHeight>l+.3*l||window.innerHeight<l-.3*l)&&c():c()}),500)}c();const m={x:l/2,y:i/2,xPerc:50,yPerc:50,xFromCen:i/2,yFromCen:l/2,movementX:0,movementY:0};function p(e){m.x=e.clientX,m.y=e.clientY,m.xPerc=m.x/i*100,m.yPerc=m.y/l*100,m.xFromCen=m.x-i/2,m.yFromCen=m.y-l/2,m.movementX=e.movementX,m.movementY=e.movementY}function f(){r||window.addEventListener("mousemove",p),window.addEventListener("resize",d)}}}]);
//# sourceMappingURL=684.acffbe028d45bd46ac84.js.map