parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){return a(e)||r(e)||t(e)||n()}function n(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function t(e,n){if(e){if("string"==typeof e)return i(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?i(e,n):void 0}}function r(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}function a(e){if(Array.isArray(e))return i(e)}function i(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}var o,c=document.querySelector("thead"),l=c.querySelectorAll("th"),d=document.querySelector("tbody"),s=e(new Set(e(d.rows).map(function(e){return e.cells[2].outerHTML}))).sort().join("").replaceAll("td","option"),u=e(new Set(e(d.rows).map(function(e){var n=e.cells[2].innerText;return'<option value="'.concat(n.toLowerCase(),'">').concat(n,"</option>")}))).join("\n");function f(e){return Number(e.replace(/\D/g,""))}var m,p=Number;c.addEventListener("click",function(n){var t=e(l).indexOf(n.target),r=e(d.rows);if(p===t)return r.reverse(),void d.append.apply(d,e(r));r.sort(function(e,n){var r=e.cells[t].innerText,a=n.cells[t].innerText;return f(r)-f(a)||r.localeCompare(a)}),p=t,d.append.apply(d,e(r))}),d.addEventListener("click",function(e){m&&m.classList.remove("active"),e.target.closest("tr").classList.add("active"),m=e.target.closest("tr")});var b=function(e,n,t){var r=document.createElement("div"),a=document.createElement("h2"),i=document.createElement("p");document.body.insertAdjacentElement("beforeend",r),r.dataset.qa="notification",r.style.top="450px",r.style.left=o+"px",r.classList.add("notification",t),r.style.position="absolute",r.append(a),a.classList.add("title"),a.append(e),r.append(i),i.append(n),setTimeout(function(){r.remove()},2e3)},v=function(){b("❌ Salary validation","salary must be [1...2,000,000]","error")},y=function(){b("❌ Age validation","age must be [18...90]","error")},g=function(){b("❌ input length","input shall be min 4 chars OR a positive integer","error")},x=function(){b("✅ data changed","🎉","success")},h=function(){b("✅ data submitted","🎉","success")},T=function(){b("no data changed","","warning")};d.addEventListener("dblclick",function(e){if(!e.target.classList.contains("cell-input")){var n,t=e.target.closest("td"),r=t.innerText;switch(l[t.cellIndex].innerText){case"Salary":case"Age":t.innerText="",(n=document.createElement("input")).type="number",n.max="2000000",n.style.width="75%",n.value=f(r);break;case"Office":t.innerText="",(n=document.createElement("select")).innerHTML=s,n.value=r;break;default:t.innerText="",(n=document.createElement("input")).type="text",n.value=r}n.classList.add("cell-input"),t.append(n),n.focus(),n.addEventListener("keydown",function(e){"Enter"===e.key&&n.blur()}),n.addEventListener("blur",function(){if(n.remove(),n.value===r)return t.innerText=r,T();switch(l[t.cellIndex].innerText){case"Salary":if(n.value<1||n.value>2e6)return t.innerText=r,v();t.innerText="$"+Number(n.value).toLocaleString("en-US"),x();break;case"Age":if(n.value<18||n.value>90)return t.innerText=r,y();t.innerText=+n.value,x();break;default:return!n.value||+n.value<=0||n.value.trim().length<4?(t.innerText=r,g()):(t.innerText=n.value,x())}})}}),document.body.insertAdjacentHTML("beforeend",'\n<form class="new-employee-form" >\n  <label for="name">\n    Name:\n    <input id="name"\n      required\n      name="name"\n      type="text"\n      data-qa="name"\n\n      pattern="[A-z]{4,}(?: [A-z]+)*" title="min 4 chars, no digits"\n      placeholder="min 4 chars, no digits"\n    >\n  </label>\n  <label for="position">\n    Position:\n    <input id="position"\n      required\n      name="position"\n      type="text"\n      data-qa="position"\n\n      pattern="[A-z]{4,}(?: [A-z]+)*" title="min 4 chars, no digits"\n      placeholder="min 4 chars, no digits"\n    >\n  </label>\n  <label for="office">\n    Office:\n    <select id="office"\n      required\n      name="office"\n      data-qa="office"\n    >\n    </select>\n  </label>\n  <label for="age">\n    Age:\n    <input id="age"\n      required\n      name="age"\n      type="number"\n      data-qa="age"\n\n      min="18"\n      max="90"\n      step="1"\n      title="age must be [18...90]"\n      placeholder="[18...90]"\n    >\n  </label>\n  <label for="salary">\n    Salary:\n    <input id="salary"\n      required\n      name="salary"\n      type="number"\n      data-qa="salary"\n\n      min="100"\n      max="2000000"\n      step="100"\n    >\n  </label>\n  <button id="addRecord">Add record</button>\n</form>\n');var A=document.querySelector("form");A.querySelector("#office").insertAdjacentHTML("beforeend",u),window.addEventListener("resize",function(e){o=A.getBoundingClientRect().left}),d.style.textTransform="capitalize",A.addEventListener("submit",function(e){e.preventDefault();var n=new FormData(A);d.insertAdjacentHTML("beforeend","<tr>\n      <td>".concat(n.get("name"),"</td>\n      <td>").concat(n.get("position"),"</td>\n      <td>").concat(n.get("office"),"</td>\n      <td>").concat(Number(n.get("age")),"</td>\n      <td>$").concat(Number(n.get("salary")).toLocaleString("en-US"),"</td>\n    </tr>")),h(),A.reset()});
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.7b8b5ca8.js.map