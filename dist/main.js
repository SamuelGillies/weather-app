(()=>{"use strict";var t={426:(t,e,n)=>{n.d(e,{Z:()=>p});var r=n(81),o=n.n(r),i=n(645),a=n.n(i),c=n(667),s=n.n(c),u=new URL(n(625),n.b),l=a()(o()),d=s()(u);l.push([t.id,":root {\n    --primary-dark: #333;\n    --secondary-dark: #444;\n    --primary-light: #eee;\n    --secondary-light: #ddd;\n    --selected: rgb(192, 192, 192); \n}\n\n@font-face {\n    font-family: 'Raleway';\n    src: url("+d+");\n  }\n\n* {\n    box-sizing: border-box;\n    padding: 0;\n    margin: 0;\n    font-family: 'Raleway';\n}\n",""]);const p=l},645:t=>{t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",r=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),r&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),r&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,r,o,i){"string"==typeof t&&(t=[[null,t,void 0]]);var a={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(a[s]=!0)}for(var u=0;u<t.length;u++){var l=[].concat(t[u]);r&&a[l[0]]||(void 0!==i&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=i),n&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=n):l[2]=n),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),e.push(l))}},e}},667:t=>{t.exports=function(t,e){return e||(e={}),t?(t=String(t.__esModule?t.default:t),/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]|(%20)/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t):t}},81:t=>{t.exports=function(t){return t[1]}},379:t=>{var e=[];function n(t){for(var n=-1,r=0;r<e.length;r++)if(e[r].identifier===t){n=r;break}return n}function r(t,r){for(var i={},a=[],c=0;c<t.length;c++){var s=t[c],u=r.base?s[0]+r.base:s[0],l=i[u]||0,d="".concat(u," ").concat(l);i[u]=l+1;var p=n(d),m={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==p)e[p].references++,e[p].updater(m);else{var f=o(m,r);r.byIndex=c,e.splice(c,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,o){var i=r(t=t||[],o=o||{});return function(t){t=t||[];for(var a=0;a<i.length;a++){var c=n(i[a]);e[c].references--}for(var s=r(t,o),u=0;u<i.length;u++){var l=n(i[u]);0===e[l].references&&(e[l].updater(),e.splice(l,1))}i=s}}},569:t=>{var e={};t.exports=function(t,n){var r=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(n)}},216:t=>{t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var r="";n.supports&&(r+="@supports (".concat(n.supports,") {")),n.media&&(r+="@media ".concat(n.media," {"));var o=void 0!==n.layer;o&&(r+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),r+=n.css,o&&(r+="}"),n.media&&(r+="}"),n.supports&&(r+="}");var i=n.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),e.styleTagTransform(r,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}},625:(t,e,n)=>{t.exports=n.p+"575ec9e676c7a85494bb.ttf"}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var i=e[r]={id:r,exports:{}};return t[r](i,i.exports,n),i.exports}n.m=t,n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var r=e.getElementsByTagName("script");r.length&&(t=r[r.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),n.b=document.baseURI||self.location.href,n.nc=void 0,(()=>{var t=n(379),e=n.n(t),r=n(795),o=n.n(r),i=n(569),a=n.n(i),c=n(565),s=n.n(c),u=n(216),l=n.n(u),d=n(589),p=n.n(d),m=n(426),f={};function v(t){let e=t.substr(11,2);return e>=5&&e<=11?"morning":e>=12&&e<=16?"afternoon":e>=17&&e<=19?"evening":e>=20&&e<=5?"night":void 0}f.styleTagTransform=p(),f.setAttributes=s(),f.insert=a().bind(null,"head"),f.domAPI=o(),f.insertStyleElement=l(),e()(m.Z,f),m.Z&&m.Z.locals&&m.Z.locals,async function(t){let e=await fetch(`https://api.weatherapi.com/v1/current.json?key=6e6c524233e149aa8be130049230604&q=${t}`,{mode:"cors"}),n=await e.json();console.log(n);let r=function(t){return{name:t.location.name,region:t.location.region,time:v(t.location.localtime),description:t.current.condition.text,icon:t.current.condition.icon,temp:t.current.temp_c,feel:t.current.feelslike_c,humidity:t.current.humidity,wind:t.current.wind_kph,uv:t.current.uv}}(n);console.log(r),function(t){const e=document.getElementById("container");let n=document.createElement("div");n.setAttribute("id","form--container");let r=document.createElement("form");r.setAttribute("id","form");let o=document.createElement("input");o.setAttribute("id","form--search"),o.setAttribute("type","text");let i=document.createElement("input");i.setAttribute("id","form--submit"),i.setAttribute("type","submit"),i.setAttribute("value","submit"),r.append(o,i),n.append(r);let a=document.createElement("div");a.setAttribute("id","weather--container");let c=document.createElement("div");c.setAttribute("id","location--container");let s=document.createElement("p");s.setAttribute("id","location--nameText"),s.setAttribute("class","text"),s.textContent=`Location: ${t.name}, ${t.region}`;let u=document.createElement("p");u.setAttribute("id","location--descText"),u.setAttribute("class","text"),u.textContent=t.description;let l=new Image;l.src=t.icon,c.append(s,u,l);let d=document.createElement("div");d.setAttribute("id","temperature--container");let p=document.createElement("p");p.setAttribute("id","temperature--text"),p.setAttribute("class","text"),p.textContent=`${t.temp}˚C`,d.append(p);let m=document.createElement("div");m.setAttribute("id","info--container");let f=document.createElement("p");f.setAttribute("id","info--feelslikeText"),f.setAttribute("class","text"),f.textContent=`Feels like: ${t.feel}˚`;let v=document.createElement("p");v.setAttribute("id","info--humidityText"),v.setAttribute("class","text"),v.textContent=`Humidity: ${t.humidity}`;let h=document.createElement("p");h.setAttribute("id","info--windText"),h.setAttribute("class","text"),h.textContent=`Wind Speed: ${t.humidity}kph`;let b=document.createElement("p");b.setAttribute("id","info--uvText"),b.setAttribute("class","text"),b.textContent=`UV Rating: ${t.humidity}`,m.append(f,v,h,b),a.append(c,d,m),e.append(n,a)}(r)}("london")})()})();