!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);let n=Math.max(15.678,123.965,90.2345);const r=function(e,t){let o=[];for(let n=0;n<e.length;n++)o.push([" "+e[n]," "+t[n]]);return o}(["Олександр","Ігор","Олена","Іра","Олексій","Світлана"],[4,5,5,3,4,5]);const s=[6,2,55,11,78,2,55,77,57,87,23,2,56,3,2],l=((e,t,o)=>{let n=[];for(let e=0;e<s.length;e++)n[e]=Math.floor(Math.random()*(o-t+1)+o);return n})(0,1,100);const c=[{name:"Tanya",course:3,subjects:{math:[4,4,3,4],algorithms:[3,3,3,4,4,4],data_science:[5,5,3,4]}},{name:"Victor",course:4,subjects:{physics:[5,5,5,3],economics:[2,3,3,3,3,5],geometry:[5,5,2,3,5]}},{name:"Anton",course:2,subjects:{statistics:[4,5,5,5,5,3,4,3,4,5],english:[5,3],cosmology:[5,5,5,5]}}];const u={tax:.195,middleSalary:1789,vacancies:11476};function i(e){return Math.round(e*this.tax)}var a;console.log("HW-1:",n),console.log("HW-3:",(a="yevhenii")[0].toUpperCase()+a.slice(1).toLowerCase()),console.log("HW-4:",r),console.log("HW-5:",l),console.log("HW-6:",(e=>e.map(e=>e.name).sort())(c)),console.log("HW-7:",i.call(u,1e3));const f=new class{constructor(e,t,o){this.course=e,this.university=t,this.fullName=o}getInfo(){return`cтудент ${this.course} курсу, ${this.university}, ${this.fullName}`}}("1","Вища Школа Психотерапії м.Одеса","Остап Бендер");var m;console.log("HW-8:",f),(()=>{let e="#";for(let t=0;t<6;t++)e+="0123456789ABCDEF"[Math.floor(16*Math.random())];console.log("HW-9:",e)})(),console.log("HW-11:",(m=5,new Promise((function(e){let t=Number(Date.now().toString().slice(-5)),o=[];for(let e=0;e<m;e++)t+=e,o.push(String.fromCharCode(t));setTimeout(()=>e(o.join("")),50*m)}))))}]);