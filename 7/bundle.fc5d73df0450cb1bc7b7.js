(()=>{var t={10:(t,e,n)=>{"use strict";n.d(e,{Z:()=>a});var s=n(537),i=n.n(s),r=n(645),o=n.n(r)()(i());o.push([t.id,".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n","",{version:3,sources:["webpack://./src/framework/view/abstract-view.css"],names:[],mappings:"AAAA;EACE,qBAAqB;EACrB,kBAAkB;EAClB,WAAW;AACb;;AAEA;EACE;;IAEE,wBAAwB;EAC1B;;EAEA;;;;;IAKE,2BAA2B;EAC7B;;EAEA;;;;IAIE,0BAA0B;EAC5B;AACF",sourcesContent:[".shake {\n  animation: shake 0.6s;\n  position: relative;\n  z-index: 10;\n}\n\n@keyframes shake {\n  0%,\n  100% {\n    transform: translateX(0);\n  }\n\n  10%,\n  30%,\n  50%,\n  70%,\n  90% {\n    transform: translateX(-5px);\n  }\n\n  20%,\n  40%,\n  60%,\n  80% {\n    transform: translateX(5px);\n  }\n}\n"],sourceRoot:""}]);const a=o},645:t=>{"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n="",s=void 0!==e[5];return e[4]&&(n+="@supports (".concat(e[4],") {")),e[2]&&(n+="@media ".concat(e[2]," {")),s&&(n+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),n+=t(e),s&&(n+="}"),e[2]&&(n+="}"),e[4]&&(n+="}"),n})).join("")},e.i=function(t,n,s,i,r){"string"==typeof t&&(t=[[null,t,void 0]]);var o={};if(s)for(var a=0;a<this.length;a++){var l=this[a][0];null!=l&&(o[l]=!0)}for(var c=0;c<t.length;c++){var u=[].concat(t[c]);s&&o[u[0]]||(void 0!==r&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=r),n&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=n):u[2]=n),i&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=i):u[4]="".concat(i)),e.push(u))}},e}},537:t=>{"use strict";t.exports=function(t){var e=t[1],n=t[3];if(!n)return e;if("function"==typeof btoa){var s=btoa(unescape(encodeURIComponent(JSON.stringify(n)))),i="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(s),r="/*# ".concat(i," */");return[e].concat([r]).join("\n")}return[e].join("\n")}},484:function(t){t.exports=function(){"use strict";var t=6e4,e=36e5,n="millisecond",s="second",i="minute",r="hour",o="day",a="week",l="month",c="quarter",u="year",d="date",h="Invalid Date",f=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,p=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,m={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(t){var e=["th","st","nd","rd"],n=t%100;return"["+t+(e[(n-20)%10]||e[n]||e[0])+"]"}},v=function(t,e,n){var s=String(t);return!s||s.length>=e?t:""+Array(e+1-s.length).join(n)+t},$={s:v,z:function(t){var e=-t.utcOffset(),n=Math.abs(e),s=Math.floor(n/60),i=n%60;return(e<=0?"+":"-")+v(s,2,"0")+":"+v(i,2,"0")},m:function t(e,n){if(e.date()<n.date())return-t(n,e);var s=12*(n.year()-e.year())+(n.month()-e.month()),i=e.clone().add(s,l),r=n-i<0,o=e.clone().add(s+(r?-1:1),l);return+(-(s+(n-i)/(r?i-o:o-i))||0)},a:function(t){return t<0?Math.ceil(t)||0:Math.floor(t)},p:function(t){return{M:l,y:u,w:a,d:o,D:d,h:r,m:i,s,ms:n,Q:c}[t]||String(t||"").toLowerCase().replace(/s$/,"")},u:function(t){return void 0===t}},_="en",y={};y[_]=m;var g="$isDayjsObject",b=function(t){return t instanceof k||!(!t||!t[g])},M=function t(e,n,s){var i;if(!e)return _;if("string"==typeof e){var r=e.toLowerCase();y[r]&&(i=r),n&&(y[r]=n,i=r);var o=e.split("-");if(!i&&o.length>1)return t(o[0])}else{var a=e.name;y[a]=e,i=a}return!s&&i&&(_=i),i||!s&&_},C=function(t,e){if(b(t))return t.clone();var n="object"==typeof e?e:{};return n.date=t,n.args=arguments,new k(n)},w=$;w.l=M,w.i=b,w.w=function(t,e){return C(t,{locale:e.$L,utc:e.$u,x:e.$x,$offset:e.$offset})};var k=function(){function m(t){this.$L=M(t.locale,null,!0),this.parse(t),this.$x=this.$x||t.x||{},this[g]=!0}var v=m.prototype;return v.parse=function(t){this.$d=function(t){var e=t.date,n=t.utc;if(null===e)return new Date(NaN);if(w.u(e))return new Date;if(e instanceof Date)return new Date(e);if("string"==typeof e&&!/Z$/i.test(e)){var s=e.match(f);if(s){var i=s[2]-1||0,r=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,r)}}return new Date(e)}(t),this.init()},v.init=function(){var t=this.$d;this.$y=t.getFullYear(),this.$M=t.getMonth(),this.$D=t.getDate(),this.$W=t.getDay(),this.$H=t.getHours(),this.$m=t.getMinutes(),this.$s=t.getSeconds(),this.$ms=t.getMilliseconds()},v.$utils=function(){return w},v.isValid=function(){return!(this.$d.toString()===h)},v.isSame=function(t,e){var n=C(t);return this.startOf(e)<=n&&n<=this.endOf(e)},v.isAfter=function(t,e){return C(t)<this.startOf(e)},v.isBefore=function(t,e){return this.endOf(e)<C(t)},v.$g=function(t,e,n){return w.u(t)?this[e]:this.set(n,t)},v.unix=function(){return Math.floor(this.valueOf()/1e3)},v.valueOf=function(){return this.$d.getTime()},v.startOf=function(t,e){var n=this,c=!!w.u(e)||e,h=w.p(t),f=function(t,e){var s=w.w(n.$u?Date.UTC(n.$y,e,t):new Date(n.$y,e,t),n);return c?s:s.endOf(o)},p=function(t,e){return w.w(n.toDate()[t].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(e)),n)},m=this.$W,v=this.$M,$=this.$D,_="set"+(this.$u?"UTC":"");switch(h){case u:return c?f(1,0):f(31,11);case l:return c?f(1,v):f(0,v+1);case a:var y=this.$locale().weekStart||0,g=(m<y?m+7:m)-y;return f(c?$-g:$+(6-g),v);case o:case d:return p(_+"Hours",0);case r:return p(_+"Minutes",1);case i:return p(_+"Seconds",2);case s:return p(_+"Milliseconds",3);default:return this.clone()}},v.endOf=function(t){return this.startOf(t,!1)},v.$set=function(t,e){var a,c=w.p(t),h="set"+(this.$u?"UTC":""),f=(a={},a[o]=h+"Date",a[d]=h+"Date",a[l]=h+"Month",a[u]=h+"FullYear",a[r]=h+"Hours",a[i]=h+"Minutes",a[s]=h+"Seconds",a[n]=h+"Milliseconds",a)[c],p=c===o?this.$D+(e-this.$W):e;if(c===l||c===u){var m=this.clone().set(d,1);m.$d[f](p),m.init(),this.$d=m.set(d,Math.min(this.$D,m.daysInMonth())).$d}else f&&this.$d[f](p);return this.init(),this},v.set=function(t,e){return this.clone().$set(t,e)},v.get=function(t){return this[w.p(t)]()},v.add=function(n,c){var d,h=this;n=Number(n);var f=w.p(c),p=function(t){var e=C(h);return w.w(e.date(e.date()+Math.round(t*n)),h)};if(f===l)return this.set(l,this.$M+n);if(f===u)return this.set(u,this.$y+n);if(f===o)return p(1);if(f===a)return p(7);var m=(d={},d[i]=t,d[r]=e,d[s]=1e3,d)[f]||1,v=this.$d.getTime()+n*m;return w.w(v,this)},v.subtract=function(t,e){return this.add(-1*t,e)},v.format=function(t){var e=this,n=this.$locale();if(!this.isValid())return n.invalidDate||h;var s=t||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),r=this.$H,o=this.$m,a=this.$M,l=n.weekdays,c=n.months,u=n.meridiem,d=function(t,n,i,r){return t&&(t[n]||t(e,s))||i[n].slice(0,r)},f=function(t){return w.s(r%12||12,t,"0")},m=u||function(t,e,n){var s=t<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(p,(function(t,s){return s||function(t){switch(t){case"YY":return String(e.$y).slice(-2);case"YYYY":return w.s(e.$y,4,"0");case"M":return a+1;case"MM":return w.s(a+1,2,"0");case"MMM":return d(n.monthsShort,a,c,3);case"MMMM":return d(c,a);case"D":return e.$D;case"DD":return w.s(e.$D,2,"0");case"d":return String(e.$W);case"dd":return d(n.weekdaysMin,e.$W,l,2);case"ddd":return d(n.weekdaysShort,e.$W,l,3);case"dddd":return l[e.$W];case"H":return String(r);case"HH":return w.s(r,2,"0");case"h":return f(1);case"hh":return f(2);case"a":return m(r,o,!0);case"A":return m(r,o,!1);case"m":return String(o);case"mm":return w.s(o,2,"0");case"s":return String(e.$s);case"ss":return w.s(e.$s,2,"0");case"SSS":return w.s(e.$ms,3,"0");case"Z":return i}return null}(t)||i.replace(":","")}))},v.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},v.diff=function(n,d,h){var f,p=this,m=w.p(d),v=C(n),$=(v.utcOffset()-this.utcOffset())*t,_=this-v,y=function(){return w.m(p,v)};switch(m){case u:f=y()/12;break;case l:f=y();break;case c:f=y()/3;break;case a:f=(_-$)/6048e5;break;case o:f=(_-$)/864e5;break;case r:f=_/e;break;case i:f=_/t;break;case s:f=_/1e3;break;default:f=_}return h?f:w.a(f)},v.daysInMonth=function(){return this.endOf(l).$D},v.$locale=function(){return y[this.$L]},v.locale=function(t,e){if(!t)return this.$L;var n=this.clone(),s=M(t,e,!0);return s&&(n.$L=s),n},v.clone=function(){return w.w(this.$d,this)},v.toDate=function(){return new Date(this.valueOf())},v.toJSON=function(){return this.isValid()?this.toISOString():null},v.toISOString=function(){return this.$d.toISOString()},v.toString=function(){return this.$d.toUTCString()},m}(),D=k.prototype;return C.prototype=D,[["$ms",n],["$s",s],["$m",i],["$H",r],["$W",o],["$M",l],["$y",u],["$D",d]].forEach((function(t){D[t[1]]=function(e){return this.$g(e,t[0],t[1])}})),C.extend=function(t,e){return t.$i||(t(e,k,C),t.$i=!0),C},C.locale=M,C.isDayjs=b,C.unix=function(t){return C(1e3*t)},C.en=y[_],C.Ls=y,C.p={},C}()},646:function(t){t.exports=function(){"use strict";var t,e,n=1e3,s=6e4,i=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,a=31536e6,l=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:a,months:l,days:r,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof _},h=function(t,e,n){return new _(t,n,e.$l)},f=function(t){return e.p(t)+"s"},p=function(t){return t<0},m=function(t){return p(t)?Math.ceil(t):Math.floor(t)},v=function(t){return Math.abs(t)},$=function(t,e){return t?p(t)?{negative:!0,format:""+v(t)+e}:{negative:!1,format:""+t+e}:{negative:!1,format:""}},_=function(){function p(t,e,n){var s=this;if(this.$d={},this.$l=n,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),e)return h(t*u[f(e)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(e){s.$d[f(e)]=t[e]})),this.calMilliseconds(),this;if("string"==typeof t){var i=t.match(c);if(i){var r=i.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var v=p.prototype;return v.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(e,n){return e+(t.$d[n]||0)*u[n]}),0)},v.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=m(t/a),t%=a,this.$d.months=m(t/l),t%=l,this.$d.days=m(t/r),t%=r,this.$d.hours=m(t/i),t%=i,this.$d.minutes=m(t/s),t%=s,this.$d.seconds=m(t/n),t%=n,this.$d.milliseconds=t},v.toISOString=function(){var t=$(this.$d.years,"Y"),e=$(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=$(n,"D"),i=$(this.$d.hours,"H"),r=$(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3,o=Math.round(1e3*o)/1e3);var a=$(o,"S"),l=t.negative||e.negative||s.negative||i.negative||r.negative||a.negative,c=i.format||r.format||a.format?"T":"",u=(l?"-":"")+"P"+t.format+e.format+s.format+c+i.format+r.format+a.format;return"P"===u||"-P"===u?"P0D":u},v.toJSON=function(){return this.toISOString()},v.format=function(t){var n=t||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:e.s(this.$d.years,2,"0"),YYYY:e.s(this.$d.years,4,"0"),M:this.$d.months,MM:e.s(this.$d.months,2,"0"),D:this.$d.days,DD:e.s(this.$d.days,2,"0"),H:this.$d.hours,HH:e.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:e.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:e.s(this.$d.seconds,2,"0"),SSS:e.s(this.$d.milliseconds,3,"0")};return n.replace(o,(function(t,e){return e||String(s[t])}))},v.as=function(t){return this.$ms/u[f(t)]},v.get=function(t){var e=this.$ms,n=f(t);return"milliseconds"===n?e%=1e3:e="weeks"===n?m(e/u[n]):this.$d[n],e||0},v.add=function(t,e,n){var s;return s=e?t*u[f(e)]:d(t)?t.$ms:h(t,this).$ms,h(this.$ms+s*(n?-1:1),this)},v.subtract=function(t,e){return this.add(t,e,!0)},v.locale=function(t){var e=this.clone();return e.$l=t,e},v.clone=function(){return h(this.$ms,this)},v.humanize=function(e){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!e)},v.valueOf=function(){return this.asMilliseconds()},v.milliseconds=function(){return this.get("milliseconds")},v.asMilliseconds=function(){return this.as("milliseconds")},v.seconds=function(){return this.get("seconds")},v.asSeconds=function(){return this.as("seconds")},v.minutes=function(){return this.get("minutes")},v.asMinutes=function(){return this.as("minutes")},v.hours=function(){return this.get("hours")},v.asHours=function(){return this.as("hours")},v.days=function(){return this.get("days")},v.asDays=function(){return this.as("days")},v.weeks=function(){return this.get("weeks")},v.asWeeks=function(){return this.as("weeks")},v.months=function(){return this.get("months")},v.asMonths=function(){return this.as("months")},v.years=function(){return this.get("years")},v.asYears=function(){return this.as("years")},p}(),y=function(t,e,n){return t.add(e.years()*n,"y").add(e.months()*n,"M").add(e.days()*n,"d").add(e.hours()*n,"h").add(e.minutes()*n,"m").add(e.seconds()*n,"s").add(e.milliseconds()*n,"ms")};return function(n,s,i){t=i,e=i().$utils(),i.duration=function(t,e){var n=i.locale();return h(t,{$l:n},e)},i.isDuration=d;var r=s.prototype.add,o=s.prototype.subtract;s.prototype.add=function(t,e){return d(t)?y(this,t,1):r.bind(this)(t,e)},s.prototype.subtract=function(t,e){return d(t)?y(this,t,-1):o.bind(this)(t,e)}}}()},379:t=>{"use strict";var e=[];function n(t){for(var n=-1,s=0;s<e.length;s++)if(e[s].identifier===t){n=s;break}return n}function s(t,s){for(var r={},o=[],a=0;a<t.length;a++){var l=t[a],c=s.base?l[0]+s.base:l[0],u=r[c]||0,d="".concat(c," ").concat(u);r[c]=u+1;var h=n(d),f={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==h)e[h].references++,e[h].updater(f);else{var p=i(f,s);s.byIndex=a,e.splice(a,0,{identifier:d,updater:p,references:1})}o.push(d)}return o}function i(t,e){var n=e.domAPI(e);return n.update(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap&&e.supports===t.supports&&e.layer===t.layer)return;n.update(t=e)}else n.remove()}}t.exports=function(t,i){var r=s(t=t||[],i=i||{});return function(t){t=t||[];for(var o=0;o<r.length;o++){var a=n(r[o]);e[a].references--}for(var l=s(t,i),c=0;c<r.length;c++){var u=n(r[c]);0===e[u].references&&(e[u].updater(),e.splice(u,1))}r=l}}},569:t=>{"use strict";var e={};t.exports=function(t,n){var s=function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}e[t]=n}return e[t]}(t);if(!s)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");s.appendChild(n)}},216:t=>{"use strict";t.exports=function(t){var e=document.createElement("style");return t.setAttributes(e,t.attributes),t.insert(e,t.options),e}},565:(t,e,n)=>{"use strict";t.exports=function(t){var e=n.nc;e&&t.setAttribute("nonce",e)}},795:t=>{"use strict";t.exports=function(t){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var e=t.insertStyleElement(t);return{update:function(n){!function(t,e,n){var s="";n.supports&&(s+="@supports (".concat(n.supports,") {")),n.media&&(s+="@media ".concat(n.media," {"));var i=void 0!==n.layer;i&&(s+="@layer".concat(n.layer.length>0?" ".concat(n.layer):""," {")),s+=n.css,i&&(s+="}"),n.media&&(s+="}"),n.supports&&(s+="}");var r=n.sourceMap;r&&"undefined"!=typeof btoa&&(s+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),e.styleTagTransform(s,t,e.options)}(e,t,n)},remove:function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(e)}}}},589:t=>{"use strict";t.exports=function(t,e){if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}}},e={};function n(s){var i=e[s];if(void 0!==i)return i.exports;var r=e[s]={id:s,exports:{}};return t[s].call(r.exports,r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var s in e)n.o(e,s)&&!n.o(t,s)&&Object.defineProperty(t,s,{enumerable:!0,get:e[s]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.nc=void 0,(()=>{"use strict";const t=t=>t.charAt(0).toUpperCase()+t.slice(1);function e(t){return t[Math.floor(Math.random()*t.length)]}const s=(t,e)=>{const n=Math.ceil(Math.min(t,e)),s=Math.floor(Math.max(t,e)),i=Math.random()*(s-n+1)+n;return Math.floor(i)};function i(t,e,n="beforeend"){if(!(t instanceof M))throw new Error("Can render only components");if(null===e)throw new Error("Container element doesn't exist");e.insertAdjacentElement(n,t.element)}function r(t,e){if(!(t instanceof M&&e instanceof M))throw new Error("Can replace only components");const n=t.element,s=e.element,i=s.parentElement;if(null===i)throw new Error("Parent element doesn't exist");i.replaceChild(n,s)}function o(t){if(null!==t){if(!(t instanceof M))throw new Error("Can remove only components");t.element.remove(),t.removeElement()}}var a=n(379),l=n.n(a),c=n(795),u=n.n(c),d=n(569),h=n.n(d),f=n(565),p=n.n(f),m=n(216),v=n.n(m),$=n(589),_=n.n($),y=n(10),g={};g.styleTagTransform=_(),g.setAttributes=p(),g.insert=h().bind(null,"head"),g.domAPI=u(),g.insertStyleElement=v(),l()(y.Z,g),y.Z&&y.Z.locals&&y.Z.locals;const b="shake";class M{#t=null;constructor(){if(new.target===M)throw new Error("Can't instantiate AbstractView, only concrete one.")}get element(){return this.#t||(this.#t=function(t){const e=document.createElement("div");return e.innerHTML=t,e.firstElementChild}(this.template)),this.#t}get template(){throw new Error("Abstract method not implemented: get template")}removeElement(){this.#t=null}shake(t){this.element.classList.add(b),setTimeout((()=>{this.element.classList.remove(b),t?.()}),600)}}class C extends M{get template(){return'<ul class="trip-events__list"></ul>'}}const w=[{name:"day",state:""},{name:"event",state:"disabled"},{name:"time",state:""},{name:"price",state:"checked"},{name:"offer",state:"disabled"}];class k extends M{get template(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${w.map((e=>(e=>` <div class="trip-sort__item  trip-sort__item--${e.name}">\n<input id="sort-${e.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e.name}" ${e.state}>\n<label class="trip-sort__btn" for="sort-${e.name}">${t(e.name)}</label>\n</div>`)(e))).join("")}\n  </form>`}}class D extends M{get template(){return'<p class="trip-events__msg">Click New Event to create your first point</p>'}}var S=n(484),E=n.n(S),A=n(646),T=n.n(A);E().extend(T());const x=(t,e)=>t?E()(t).format(e):"",F=["taxi","bus","train","ship","drive","flight","check-in","sightseeing","restaurant"],H="HH:mm",P="DD/MM/YY HH:MM",O="everything",L="past",Y="future",j="present";class I extends M{#e=null;#n=null;#s=null;#i=null;#r=null;constructor({point:t,offers:e,destinations:n,onEditClick:s,onFavoriteClick:i}){super(),this.#e=t,this.#n=e,this.#s=n,this.#i=s,this.#r=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o),this.element.querySelector(".event__favorite-btn").addEventListener("click",this.#a)}get template(){return function(t,e,n){const{type:s,destination:i,dateFrom:r,dateTo:o,basePrice:a,isFavorite:l}=t,c=n.find((t=>t.id===i)).name;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${x(r,"D MMM")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/${s}.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${s} ${c}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${x(r,H)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${x(o,H)}</time>\n      </p>\n      <p class="event__duration">${((t,e)=>{const n=E()(t),s=E()(e),i=E().duration(s.diff(n));return i.days()>0?i.format("DD[D] HH[H] mm[M]"):i.hours()>0?i.format("HH[H] mm[M]"):i.format("mm[M]")})(r,o)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${a}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${u=s,d=e,d.find((t=>t.type===u)).offers.map((t=>`<li class="event__offer">\n      <span class="event__offer-title">${t.title}</span>\n      &plus;&euro;&nbsp;\n      <span class="event__offer-price">${t.price}</span>\n      </li>`)).join("")}\n    </ul>\n    <button class="${l?"event__favorite-btn event__favorite-btn--active":"event__favorite-btn"}" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var u,d}(this.#e,this.#n,this.#s)}#o=t=>{t.preventDefault(),this.#i()};#a=t=>{t.preventDefault(),this.#r()}}const B=["Amsterdam","Geneva","Chamonix","Basel","Düsseldorf","Strasbourg"],q=[`https://loremflickr.com/248/152?random=${s(1,5)}`,`https://loremflickr.com/248/152?random=${s(1,5)}`,`https://loremflickr.com/248/152?random=${s(1,5)}`,`https://loremflickr.com/248/152?random=${s(1,5)}`,`https://loremflickr.com/248/152?random=${s(1,5)}`],N=[{dateFrom:"2024-10-10T10:00:00",dateTo:"2024-10-11T11:00:00"},{dateFrom:"2024-07-15T18:00:00",dateTo:"2024-07-16T20:30:00"},{dateFrom:"2024-07-16T21:00:00",dateTo:"2024-07-16T23:45:00"},{dateFrom:"2024-08-01T09:55:00",dateTo:"2024-08-02T11:22:00"},{dateFrom:"2024-08-10T14:00:00",dateTo:"2024-08-10T17:00:00"},{dateFrom:"2024-08-12T13:56:00",dateTo:"2024-08-12T14:06:00"}],W=[{id:1,title:"Add luggage",price:s(5,200)},{id:2,title:"Switch to comfort",price:s(5,200)},{id:3,title:"Add meal",price:s(5,200)},{id:4,title:"Choose seats",price:s(5,200)},{id:5,title:"Order Uber",price:s(5,200)},{id:6,title:"Add breakfast",price:s(5,200)},{id:7,title:"Rent a car",price:s(5,200)}],U=t=>{const e=t.split(" ");return e[e.length-1]};class Z extends M{#e=null;#n=null;#s=null;#i=null;#l=null;constructor({point:t,offers:e,destinations:n,onEditClick:s,onFormSaveClick:i}){super(),this.#e=t,this.#n=e,this.#s=n,this.#i=s,this.#l=i,this.element.querySelector(".event__rollup-btn").addEventListener("click",this.#o),this.element.querySelector("form").addEventListener("submit",this.#c)}get template(){return function(e,n,s){const{type:i,destination:r,dateFrom:o,dateTo:a,basePrice:l,description:c,offers:u}=e,d=s.find((t=>t.id===r)).name,h=n.find((t=>t.type===i)).offers;return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/${i}.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${F.map((e=>((e,n)=>`\n  <div class="event__type-item">\n  <input id="event-type-${e}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e}" ${n}>\n  <label class="event__type-label  event__type-label--${e}" for="event-type-${e}-1">${t(e)}</label>\n  </div>`)(e,(t=>t===i?"checked":"")(e)))).join("")}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          ${i}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${d}" list="destination-list-1">\n        <datalist id="destination-list-1">\n          ${B.map((t=>(t=>`<option value="${t}"></option>`)(t))).join("")}\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${x(o,P)}">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${x(a,P)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${l}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n        ${h.map((t=>{return((t,e)=>`<div class="event__offer-${U(t.title)}">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${U(t.title)}-1" type="checkbox" name="event-offer-${U(t.title)}" ${e}>\n  <label class="event__offer-label" for="event-offer-${U(t.title)}-1">\n    <span class="event__offer-title">${t.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${t.price}</span>\n  </label>\n  </div>`)(t,(e=t.id,u.includes(e)?"checked":""));var e})).join("")}\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${c}</p>\n      </section>\n    </section>\n  </form>\n</li>`}(this.#e,this.#n,this.#s)}#o=t=>{t.preventDefault(),this.#i()};#c=t=>{t.preventDefault(),this.#l()}}const z="DEFAULT",J="EDIT";class K{#e=null;#s=null;#n=null;#u=null;#d=null;#h=null;#f=null;#p=null;#m=z;constructor({pointsListComponent:t,onPointsChange:e,onModeChange:n}){this.#u=t,this.#f=e,this.#p=n}init(t,e,n){this.#e=t,this.#n=e,this.#s=n;const s=this.#d,a=this.#h;this.#d=new I({point:this.#e,offers:this.#n,destinations:this.#s,onEditClick:()=>{this.#v()},onFavoriteClick:this.#r}),this.#h=new Z({point:t,offers:e,destinations:n,onEditClick:()=>{this.#$()},onFormSaveClick:this.#_}),null!==s&&null!==a?(this.#m===z&&r(this.#d,s),this.#m===J&&r(this.#h,a),o(s),o(a)):i(this.#d,this.#u)}#v(){r(this.#h,this.#d),document.addEventListener("keydown",this.#y),this.#p(),this.#m=J}#$(){r(this.#d,this.#h),document.removeEventListener("keydown",this.#y),this.#m=z}#r=()=>{this.#f({...this.#e,isFavorite:!this.#e.isFavorite})};resetView(){this.#m!==z&&this.#$()}#_=t=>{this.#f(t),this.#$(),document.removeEventListener("keydown",this.#y)};#y=t=>{"Escape"===t.key&&(t.preventDefault(),this.#$(),document.removeEventListener("keydown",this.#y))}}const R=t=>{const e=[];return t.forEach((t=>{const n=W.find((e=>e.id===t));e.push(n)})),e},V=(()=>{const t=[];return F.forEach((e=>{const n=((t,e)=>({type:t,offers:R(e)}))(e,((t,e)=>{const n=[];for(;n.length!==e;){let t=s(1,e);n.every((e=>e!==t))?n.push(t):t=s(1,e)}return n})(0,s(1,W.length)));t.push(n)})),t})(),X=()=>V,G=X(),Q=t=>{const n=t.split(".");return Array.from({length:5},(()=>e(n).trim())).join(".")},tt=(()=>{let t=0;return()=>(t+=1,t)})(),et=Array.from({length:10},(()=>(()=>{const t=e(N),n=e(F);return{id:tt(),type:n,destination:s(1,B.length),description:Q("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."),dateFrom:t.dateFrom,dateTo:t.dateTo,basePrice:s(20,5e3),offers:(()=>{const t=G.find((t=>t.type===n)).offers,e=[];return t.forEach((t=>{e.push(t.id)})),e.slice(0,s(1,e.length))})(),isFavorite:0===s(0,1)}})()));let nt=0;const st=(()=>{const t=[];return B.forEach((e=>{nt++,t.push((t=>({id:nt,name:t,description:`${t}, is a beautiful city, a true asian pearl, with crowded streets.`,pictures:[{src:q[0],description:`${t} parliament building`},{src:q[1],description:`${t} main square`},{src:q[2],description:`${t} best view`},{src:q[3],description:`${t} landscape`},{src:q[4],description:`${t} church`}]}))(e))})),t})(),it={[O]:t=>t,[L]:t=>t.filter((t=>(t=>{const e=new Date;return new Date(t.dateTo)<e})(t))),[j]:t=>t.filter((t=>(t=>{const e=new Date,n=new Date(t.dateTo);return new Date(t.dateFrom)<=e&&n>=e})(t))),[Y]:t=>t.filter((t=>(t=>{const e=new Date;return new Date(t.dateFrom)>e})(t)))},rt=document.querySelector(".trip-main"),ot=document.querySelector(".trip-controls__filters"),at=document.querySelector(".trip-events"),lt=new class{#g=(()=>et)();#s=(()=>st)();#n=X();get points(){return this.#g}get destinations(){return this.#s}get offers(){return this.#n}},ct=new class{#u=new C;#b=null;#M=null;#g=[];#s=[];#n=[];#C=new Map;constructor({pointsContainer:t,pointModel:e}){this.#b=t,this.#M=e}init(){this.#g=[...this.#M.points],this.#s=[...this.#M.destinations],this.#n=[...this.#M.offers],this.#w();for(const t of this.#g)this.#k(t)}#w(){i(new k,this.#b),i(this.#u,this.#b),0===this.#g.length&&i(new D,this.#u.element)}#k(t){const e=new K({pointsListComponent:this.#u.element,onPointsChange:this.#f,onModeChange:this.#p});e.init(t,this.#n,this.#s),this.#C.set(t.id,e)}#f=t=>{this.#g=function(t,e){return t.map((t=>t.id===e.id?e:t))}(this.#g,t),this.#C.get(t.id).init(t,this.#n,this.#s)};#p=()=>{this.#C.forEach((t=>t.resetView()))}}({pointsContainer:at,pointModel:lt}),ut=function(t){return Object.entries(it).map((([e,n])=>({type:e,count:n(t).length})))}(lt.points);i(new class extends M{get template(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n    <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}},rt,"afterbegin"),i(new class extends M{#D=[];constructor({filters:t}){super(),this.#D=t}get template(){return function(e){return`<form class="trip-filters" action="#" method="get">\n  ${Object.values(e).map((e=>{return`<div class="trip-filters__filter">\n    <input\n    id="filter-${n=e.type}"\n    class="trip-filters__filter-input  visually-hidden"\n    type="radio"\n    name="trip-filter"\n    value="${n}"\n    ${"everything"===n?"checked":""}\n    ${0===e.count?"disabled":"checked"} >\n    <label class="trip-filters__filter-label" for="filter-${n}">${t(n)}</label>\n    </div>`;var n})).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}(this.#D)}}({filters:ut}),ot),ct.init()})()})();
//# sourceMappingURL=bundle.fc5d73df0450cb1bc7b7.js.map