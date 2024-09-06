(()=>{var e={484:function(e){e.exports=function(){"use strict";var e=6e4,t=36e5,n="millisecond",s="second",i="minute",a="hour",r="day",l="week",o="month",c="quarter",u="year",d="date",p="Invalid Date",v=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,h=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,f={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(e){var t=["th","st","nd","rd"],n=e%100;return"["+e+(t[(n-20)%10]||t[n]||t[0])+"]"}},m=function(e,t,n){var s=String(e);return!s||s.length>=t?e:""+Array(t+1-s.length).join(n)+e},_={s:m,z:function(e){var t=-e.utcOffset(),n=Math.abs(t),s=Math.floor(n/60),i=n%60;return(t<=0?"+":"-")+m(s,2,"0")+":"+m(i,2,"0")},m:function e(t,n){if(t.date()<n.date())return-e(n,t);var s=12*(n.year()-t.year())+(n.month()-t.month()),i=t.clone().add(s,o),a=n-i<0,r=t.clone().add(s+(a?-1:1),o);return+(-(s+(n-i)/(a?i-r:r-i))||0)},a:function(e){return e<0?Math.ceil(e)||0:Math.floor(e)},p:function(e){return{M:o,y:u,w:l,d:r,D:d,h:a,m:i,s,ms:n,Q:c}[e]||String(e||"").toLowerCase().replace(/s$/,"")},u:function(e){return void 0===e}},y="en",g={};g[y]=f;var b="$isDayjsObject",$=function(e){return e instanceof D||!(!e||!e[b])},M=function e(t,n,s){var i;if(!t)return y;if("string"==typeof t){var a=t.toLowerCase();g[a]&&(i=a),n&&(g[a]=n,i=a);var r=t.split("-");if(!i&&r.length>1)return e(r[0])}else{var l=t.name;g[l]=t,i=l}return!s&&i&&(y=i),i||!s&&y},S=function(e,t){if($(e))return e.clone();var n="object"==typeof t?t:{};return n.date=e,n.args=arguments,new D(n)},w=_;w.l=M,w.i=$,w.w=function(e,t){return S(e,{locale:t.$L,utc:t.$u,x:t.$x,$offset:t.$offset})};var D=function(){function f(e){this.$L=M(e.locale,null,!0),this.parse(e),this.$x=this.$x||e.x||{},this[b]=!0}var m=f.prototype;return m.parse=function(e){this.$d=function(e){var t=e.date,n=e.utc;if(null===t)return new Date(NaN);if(w.u(t))return new Date;if(t instanceof Date)return new Date(t);if("string"==typeof t&&!/Z$/i.test(t)){var s=t.match(v);if(s){var i=s[2]-1||0,a=(s[7]||"0").substring(0,3);return n?new Date(Date.UTC(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)):new Date(s[1],i,s[3]||1,s[4]||0,s[5]||0,s[6]||0,a)}}return new Date(t)}(e),this.init()},m.init=function(){var e=this.$d;this.$y=e.getFullYear(),this.$M=e.getMonth(),this.$D=e.getDate(),this.$W=e.getDay(),this.$H=e.getHours(),this.$m=e.getMinutes(),this.$s=e.getSeconds(),this.$ms=e.getMilliseconds()},m.$utils=function(){return w},m.isValid=function(){return!(this.$d.toString()===p)},m.isSame=function(e,t){var n=S(e);return this.startOf(t)<=n&&n<=this.endOf(t)},m.isAfter=function(e,t){return S(e)<this.startOf(t)},m.isBefore=function(e,t){return this.endOf(t)<S(e)},m.$g=function(e,t,n){return w.u(e)?this[t]:this.set(n,e)},m.unix=function(){return Math.floor(this.valueOf()/1e3)},m.valueOf=function(){return this.$d.getTime()},m.startOf=function(e,t){var n=this,c=!!w.u(t)||t,p=w.p(e),v=function(e,t){var s=w.w(n.$u?Date.UTC(n.$y,t,e):new Date(n.$y,t,e),n);return c?s:s.endOf(r)},h=function(e,t){return w.w(n.toDate()[e].apply(n.toDate("s"),(c?[0,0,0,0]:[23,59,59,999]).slice(t)),n)},f=this.$W,m=this.$M,_=this.$D,y="set"+(this.$u?"UTC":"");switch(p){case u:return c?v(1,0):v(31,11);case o:return c?v(1,m):v(0,m+1);case l:var g=this.$locale().weekStart||0,b=(f<g?f+7:f)-g;return v(c?_-b:_+(6-b),m);case r:case d:return h(y+"Hours",0);case a:return h(y+"Minutes",1);case i:return h(y+"Seconds",2);case s:return h(y+"Milliseconds",3);default:return this.clone()}},m.endOf=function(e){return this.startOf(e,!1)},m.$set=function(e,t){var l,c=w.p(e),p="set"+(this.$u?"UTC":""),v=(l={},l[r]=p+"Date",l[d]=p+"Date",l[o]=p+"Month",l[u]=p+"FullYear",l[a]=p+"Hours",l[i]=p+"Minutes",l[s]=p+"Seconds",l[n]=p+"Milliseconds",l)[c],h=c===r?this.$D+(t-this.$W):t;if(c===o||c===u){var f=this.clone().set(d,1);f.$d[v](h),f.init(),this.$d=f.set(d,Math.min(this.$D,f.daysInMonth())).$d}else v&&this.$d[v](h);return this.init(),this},m.set=function(e,t){return this.clone().$set(e,t)},m.get=function(e){return this[w.p(e)]()},m.add=function(n,c){var d,p=this;n=Number(n);var v=w.p(c),h=function(e){var t=S(p);return w.w(t.date(t.date()+Math.round(e*n)),p)};if(v===o)return this.set(o,this.$M+n);if(v===u)return this.set(u,this.$y+n);if(v===r)return h(1);if(v===l)return h(7);var f=(d={},d[i]=e,d[a]=t,d[s]=1e3,d)[v]||1,m=this.$d.getTime()+n*f;return w.w(m,this)},m.subtract=function(e,t){return this.add(-1*e,t)},m.format=function(e){var t=this,n=this.$locale();if(!this.isValid())return n.invalidDate||p;var s=e||"YYYY-MM-DDTHH:mm:ssZ",i=w.z(this),a=this.$H,r=this.$m,l=this.$M,o=n.weekdays,c=n.months,u=n.meridiem,d=function(e,n,i,a){return e&&(e[n]||e(t,s))||i[n].slice(0,a)},v=function(e){return w.s(a%12||12,e,"0")},f=u||function(e,t,n){var s=e<12?"AM":"PM";return n?s.toLowerCase():s};return s.replace(h,(function(e,s){return s||function(e){switch(e){case"YY":return String(t.$y).slice(-2);case"YYYY":return w.s(t.$y,4,"0");case"M":return l+1;case"MM":return w.s(l+1,2,"0");case"MMM":return d(n.monthsShort,l,c,3);case"MMMM":return d(c,l);case"D":return t.$D;case"DD":return w.s(t.$D,2,"0");case"d":return String(t.$W);case"dd":return d(n.weekdaysMin,t.$W,o,2);case"ddd":return d(n.weekdaysShort,t.$W,o,3);case"dddd":return o[t.$W];case"H":return String(a);case"HH":return w.s(a,2,"0");case"h":return v(1);case"hh":return v(2);case"a":return f(a,r,!0);case"A":return f(a,r,!1);case"m":return String(r);case"mm":return w.s(r,2,"0");case"s":return String(t.$s);case"ss":return w.s(t.$s,2,"0");case"SSS":return w.s(t.$ms,3,"0");case"Z":return i}return null}(e)||i.replace(":","")}))},m.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},m.diff=function(n,d,p){var v,h=this,f=w.p(d),m=S(n),_=(m.utcOffset()-this.utcOffset())*e,y=this-m,g=function(){return w.m(h,m)};switch(f){case u:v=g()/12;break;case o:v=g();break;case c:v=g()/3;break;case l:v=(y-_)/6048e5;break;case r:v=(y-_)/864e5;break;case a:v=y/t;break;case i:v=y/e;break;case s:v=y/1e3;break;default:v=y}return p?v:w.a(v)},m.daysInMonth=function(){return this.endOf(o).$D},m.$locale=function(){return g[this.$L]},m.locale=function(e,t){if(!e)return this.$L;var n=this.clone(),s=M(e,t,!0);return s&&(n.$L=s),n},m.clone=function(){return w.w(this.$d,this)},m.toDate=function(){return new Date(this.valueOf())},m.toJSON=function(){return this.isValid()?this.toISOString():null},m.toISOString=function(){return this.$d.toISOString()},m.toString=function(){return this.$d.toUTCString()},f}(),T=D.prototype;return S.prototype=T,[["$ms",n],["$s",s],["$m",i],["$H",a],["$W",r],["$M",o],["$y",u],["$D",d]].forEach((function(e){T[e[1]]=function(t){return this.$g(t,e[0],e[1])}})),S.extend=function(e,t){return e.$i||(e(t,D,S),e.$i=!0),S},S.locale=M,S.isDayjs=$,S.unix=function(e){return S(1e3*e)},S.en=g[y],S.Ls=g,S.p={},S}()},646:function(e){e.exports=function(){"use strict";var e,t,n=1e3,s=6e4,i=36e5,a=864e5,r=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,l=31536e6,o=2628e6,c=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,u={years:l,months:o,days:a,hours:i,minutes:s,seconds:n,milliseconds:1,weeks:6048e5},d=function(e){return e instanceof y},p=function(e,t,n){return new y(e,n,t.$l)},v=function(e){return t.p(e)+"s"},h=function(e){return e<0},f=function(e){return h(e)?Math.ceil(e):Math.floor(e)},m=function(e){return Math.abs(e)},_=function(e,t){return e?h(e)?{negative:!0,format:""+m(e)+t}:{negative:!1,format:""+e+t}:{negative:!1,format:""}},y=function(){function h(e,t,n){var s=this;if(this.$d={},this.$l=n,void 0===e&&(this.$ms=0,this.parseFromMilliseconds()),t)return p(e*u[v(t)],this);if("number"==typeof e)return this.$ms=e,this.parseFromMilliseconds(),this;if("object"==typeof e)return Object.keys(e).forEach((function(t){s.$d[v(t)]=e[t]})),this.calMilliseconds(),this;if("string"==typeof e){var i=e.match(c);if(i){var a=i.slice(2).map((function(e){return null!=e?Number(e):0}));return this.$d.years=a[0],this.$d.months=a[1],this.$d.weeks=a[2],this.$d.days=a[3],this.$d.hours=a[4],this.$d.minutes=a[5],this.$d.seconds=a[6],this.calMilliseconds(),this}}return this}var m=h.prototype;return m.calMilliseconds=function(){var e=this;this.$ms=Object.keys(this.$d).reduce((function(t,n){return t+(e.$d[n]||0)*u[n]}),0)},m.parseFromMilliseconds=function(){var e=this.$ms;this.$d.years=f(e/l),e%=l,this.$d.months=f(e/o),e%=o,this.$d.days=f(e/a),e%=a,this.$d.hours=f(e/i),e%=i,this.$d.minutes=f(e/s),e%=s,this.$d.seconds=f(e/n),e%=n,this.$d.milliseconds=e},m.toISOString=function(){var e=_(this.$d.years,"Y"),t=_(this.$d.months,"M"),n=+this.$d.days||0;this.$d.weeks&&(n+=7*this.$d.weeks);var s=_(n,"D"),i=_(this.$d.hours,"H"),a=_(this.$d.minutes,"M"),r=this.$d.seconds||0;this.$d.milliseconds&&(r+=this.$d.milliseconds/1e3,r=Math.round(1e3*r)/1e3);var l=_(r,"S"),o=e.negative||t.negative||s.negative||i.negative||a.negative||l.negative,c=i.format||a.format||l.format?"T":"",u=(o?"-":"")+"P"+e.format+t.format+s.format+c+i.format+a.format+l.format;return"P"===u||"-P"===u?"P0D":u},m.toJSON=function(){return this.toISOString()},m.format=function(e){var n=e||"YYYY-MM-DDTHH:mm:ss",s={Y:this.$d.years,YY:t.s(this.$d.years,2,"0"),YYYY:t.s(this.$d.years,4,"0"),M:this.$d.months,MM:t.s(this.$d.months,2,"0"),D:this.$d.days,DD:t.s(this.$d.days,2,"0"),H:this.$d.hours,HH:t.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:t.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:t.s(this.$d.seconds,2,"0"),SSS:t.s(this.$d.milliseconds,3,"0")};return n.replace(r,(function(e,t){return t||String(s[e])}))},m.as=function(e){return this.$ms/u[v(e)]},m.get=function(e){var t=this.$ms,n=v(e);return"milliseconds"===n?t%=1e3:t="weeks"===n?f(t/u[n]):this.$d[n],t||0},m.add=function(e,t,n){var s;return s=t?e*u[v(t)]:d(e)?e.$ms:p(e,this).$ms,p(this.$ms+s*(n?-1:1),this)},m.subtract=function(e,t){return this.add(e,t,!0)},m.locale=function(e){var t=this.clone();return t.$l=e,t},m.clone=function(){return p(this.$ms,this)},m.humanize=function(t){return e().add(this.$ms,"ms").locale(this.$l).fromNow(!t)},m.valueOf=function(){return this.asMilliseconds()},m.milliseconds=function(){return this.get("milliseconds")},m.asMilliseconds=function(){return this.as("milliseconds")},m.seconds=function(){return this.get("seconds")},m.asSeconds=function(){return this.as("seconds")},m.minutes=function(){return this.get("minutes")},m.asMinutes=function(){return this.as("minutes")},m.hours=function(){return this.get("hours")},m.asHours=function(){return this.as("hours")},m.days=function(){return this.get("days")},m.asDays=function(){return this.as("days")},m.weeks=function(){return this.get("weeks")},m.asWeeks=function(){return this.as("weeks")},m.months=function(){return this.get("months")},m.asMonths=function(){return this.as("months")},m.years=function(){return this.get("years")},m.asYears=function(){return this.as("years")},h}(),g=function(e,t,n){return e.add(t.years()*n,"y").add(t.months()*n,"M").add(t.days()*n,"d").add(t.hours()*n,"h").add(t.minutes()*n,"m").add(t.seconds()*n,"s").add(t.milliseconds()*n,"ms")};return function(n,s,i){e=i,t=i().$utils(),i.duration=function(e,t){var n=i.locale();return p(e,{$l:n},t)},i.isDuration=d;var a=s.prototype.add,r=s.prototype.subtract;s.prototype.add=function(e,t){return d(e)?g(this,e,1):a.bind(this)(e,t)},s.prototype.subtract=function(e,t){return d(e)?g(this,e,-1):r.bind(this)(e,t)}}}()}},t={};function n(s){var i=t[s];if(void 0!==i)return i.exports;var a=t[s]={exports:{}};return e[s].call(a.exports,a,a.exports,n),a.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var s in t)n.o(t,s)&&!n.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";function e(e){const t=document.createElement("div");return t.innerHTML=e,t.firstElementChild}function t(e,t,n="beforeend"){t.insertAdjacentElement(n,e.getElement())}var s=n(484),i=n.n(s),a=n(646),r=n.n(a);i().extend(r());const l=e=>e.charAt(0).toUpperCase()+e.slice(1);function o(e){return e[Math.floor(Math.random()*e.length)]}const c=(e,t)=>{const n=Math.ceil(Math.min(e,t)),s=Math.floor(Math.max(e,t)),i=Math.random()*(s-n+1)+n;return Math.floor(i)},u=(e,t)=>e?i()(e).format(t):"",d=[{name:"everything",state:""},{name:"future",state:""},{name:"present",state:""},{name:"past",state:"checked"}];class p{getTemplate(){return'<ul class="trip-events__list"></ul>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const v=["Amsterdam","Geneva","Chamonix","Basel","Düsseldorf","Strasbourg"],h=["Taxi","Bus","Train","Ship","Drive","Flight","Check-in","Sightseeing","Restaurant"],f=[`https://loremflickr.com/248/152?random=${c(1,5)}`,`https://loremflickr.com/248/152?random=${c(1,5)}`,`https://loremflickr.com/248/152?random=${c(1,5)}`,`https://loremflickr.com/248/152?random=${c(1,5)}`,`https://loremflickr.com/248/152?random=${c(1,5)}`],m=[{dateFrom:"2024-07-10T10:00:00",dateTo:"2024-07-11T11:00:00"},{dateFrom:"2024-07-15T18:00:00",dateTo:"2024-07-16T20:30:00"},{dateFrom:"2024-07-16T21:00:00",dateTo:"2024-07-16T23:45:00"},{dateFrom:"2024-08-01T09:55:00",dateTo:"2024-08-02T11:22:00"},{dateFrom:"2024-08-10T14:00:00",dateTo:"2024-08-10T17:00:00"},{dateFrom:"2024-08-12T13:56:00",dateTo:"2024-08-12T14:06:00"}],_=[{id:1,title:"Add luggage",price:c(5,200)},{id:2,title:"Switch to comfort",price:c(5,200)},{id:3,title:"Add meal",price:c(5,200)},{id:4,title:"Choose seats",price:c(5,200)},{id:5,title:"Order Uber",price:c(5,200)},{id:6,title:"Add breakfast",price:c(5,200)},{id:7,title:"Rent a car",price:c(5,200)}],y=[{name:"taxi",state:""},{name:"bus",state:""},{name:"train",state:""},{name:"ship",state:""},{name:"drive",state:""},{name:"flight",state:"checked"},{name:"check-in",state:""},{name:"sightseeing",state:""},{name:"restaurant",state:""}],g=[{class:"luggage",title:"Add luggage",price:"50",state:"checked"},{class:"comfort",title:"Switch to comfort",price:"80",state:"checked"},{class:"meal",title:"Add meal",price:"15",state:""},{class:"seats",title:"Choose seats",price:"5",state:""},{class:"train",title:"Travel by train",price:"40",state:""}],b="HH:mm",$="DD/MM/YY HH:MM";class M{constructor({point:e,offers:t,destinations:n}){this.point=e,this.offers=t,this.destinations=n}getTemplate(){return function(e,t,n){const{type:s,destination:i,dateFrom:a,dateTo:r,basePrice:o,description:c,offers:d}=e,p=n.find((e=>e.id===i)).name;return`<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n            ${y.map((e=>(e=>`\n  <div class="event__type-item">\n  <input id="event-type-${e.name}-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="${e.name}" ${e.state}>\n  <label class="event__type-label  event__type-label--${e.name}" for="event-type-${e.name}-1">${l(e.name)}</label>\n  </div>`)(e))).join("")}\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          ${s}\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="${p}" list="destination-list-1">\n        <datalist id="destination-list-1">\n          <option value="Amsterdam"></option>\n          <option value="Geneva"></option>\n          <option value="Chamonix"></option>\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="${u(a,$)}">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="${u(r,$)}">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="${o}">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Delete</button>\n      <button class="event__rollup-btn" type="button">\n        <span class="visually-hidden">Open event</span>\n      </button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n        ${g.map((e=>(e=>`<div class="event__offer-${e.class}">\n  <input class="event__offer-checkbox  visually-hidden" id="event-offer-${e.class}-1" type="checkbox" name="event-offer-${e.class}" ${e.state}>\n  <label class="event__offer-label" for="event-offer-${e.class}-1">\n    <span class="event__offer-title">${e.title}</span>\n    &plus;&euro;&nbsp;\n    <span class="event__offer-price">${e.price}</span>\n  </label>\n  </div>`)(e))).join("")}\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">${c}</p>\n      </section>\n    </section>\n  </form>\n</li>`}(this.point,this.offers,this.destinations)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class S{getTemplate(){return'<li class="trip-events__item">\n  <form class="event event--edit" action="#" method="post">\n    <header class="event__header">\n      <div class="event__type-wrapper">\n        <label class="event__type  event__type-btn" for="event-type-toggle-1">\n          <span class="visually-hidden">Choose event type</span>\n          <img class="event__type-icon" width="17" height="17" src="img/icons/flight.png" alt="Event type icon">\n        </label>\n        <input class="event__type-toggle  visually-hidden" id="event-type-toggle-1" type="checkbox">\n\n        <div class="event__type-list">\n          <fieldset class="event__type-group">\n            <legend class="visually-hidden">Event type</legend>\n\n            <div class="event__type-item">\n              <input id="event-type-taxi-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="taxi">\n              <label class="event__type-label  event__type-label--taxi" for="event-type-taxi-1">Taxi</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-bus-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="bus">\n              <label class="event__type-label  event__type-label--bus" for="event-type-bus-1">Bus</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-train-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="train">\n              <label class="event__type-label  event__type-label--train" for="event-type-train-1">Train</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-ship-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="ship">\n              <label class="event__type-label  event__type-label--ship" for="event-type-ship-1">Ship</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-drive-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="drive">\n              <label class="event__type-label  event__type-label--drive" for="event-type-drive-1">Drive</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-flight-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="flight" checked>\n              <label class="event__type-label  event__type-label--flight" for="event-type-flight-1">Flight</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-check-in-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="check-in">\n              <label class="event__type-label  event__type-label--check-in" for="event-type-check-in-1">Check-in</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-sightseeing-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="sightseeing">\n              <label class="event__type-label  event__type-label--sightseeing" for="event-type-sightseeing-1">Sightseeing</label>\n            </div>\n\n            <div class="event__type-item">\n              <input id="event-type-restaurant-1" class="event__type-input  visually-hidden" type="radio" name="event-type" value="restaurant">\n              <label class="event__type-label  event__type-label--restaurant" for="event-type-restaurant-1">Restaurant</label>\n            </div>\n          </fieldset>\n        </div>\n      </div>\n\n      <div class="event__field-group  event__field-group--destination">\n        <label class="event__label  event__type-output" for="event-destination-1">\n          Flight\n        </label>\n        <input class="event__input  event__input--destination" id="event-destination-1" type="text" name="event-destination" value="Geneva" list="destination-list-1">\n        <datalist id="destination-list-1">\n          <option value="Amsterdam"></option>\n          <option value="Geneva"></option>\n          <option value="Chamonix"></option>\n        </datalist>\n      </div>\n\n      <div class="event__field-group  event__field-group--time">\n        <label class="visually-hidden" for="event-start-time-1">From</label>\n        <input class="event__input  event__input--time" id="event-start-time-1" type="text" name="event-start-time" value="19/03/19 00:00">\n        &mdash;\n        <label class="visually-hidden" for="event-end-time-1">To</label>\n        <input class="event__input  event__input--time" id="event-end-time-1" type="text" name="event-end-time" value="19/03/19 00:00">\n      </div>\n\n      <div class="event__field-group  event__field-group--price">\n        <label class="event__label" for="event-price-1">\n          <span class="visually-hidden">Price</span>\n          &euro;\n        </label>\n        <input class="event__input  event__input--price" id="event-price-1" type="text" name="event-price" value="">\n      </div>\n\n      <button class="event__save-btn  btn  btn--blue" type="submit">Save</button>\n      <button class="event__reset-btn" type="reset">Cancel</button>\n    </header>\n    <section class="event__details">\n      <section class="event__section  event__section--offers">\n        <h3 class="event__section-title  event__section-title--offers">Offers</h3>\n\n        <div class="event__available-offers">\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-luggage-1" type="checkbox" name="event-offer-luggage">\n            <label class="event__offer-label" for="event-offer-luggage-1">\n              <span class="event__offer-title">Add luggage</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">30</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-comfort-1" type="checkbox" name="event-offer-comfort" checked>\n            <label class="event__offer-label" for="event-offer-comfort-1">\n              <span class="event__offer-title">Switch to comfort class</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">100</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-meal-1" type="checkbox" name="event-offer-meal">\n            <label class="event__offer-label" for="event-offer-meal-1">\n              <span class="event__offer-title">Add meal</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">15</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-seats-1" type="checkbox" name="event-offer-seats">\n            <label class="event__offer-label" for="event-offer-seats-1">\n              <span class="event__offer-title">Choose seats</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">5</span>\n            </label>\n          </div>\n\n          <div class="event__offer-selector">\n            <input class="event__offer-checkbox  visually-hidden" id="event-offer-train-1" type="checkbox" name="event-offer-train">\n            <label class="event__offer-label" for="event-offer-train-1">\n              <span class="event__offer-title">Travel by train</span>\n              &plus;&euro;&nbsp;\n              <span class="event__offer-price">40</span>\n            </label>\n          </div>\n        </div>\n      </section>\n\n      <section class="event__section  event__section--destination">\n        <h3 class="event__section-title  event__section-title--destination">Destination</h3>\n        <p class="event__destination-description">Geneva is a city in Switzerland that lies at the southern tip of expansive Lac Léman (Lake Geneva). Surrounded by the Alps and Jura mountains, the city has views of dramatic Mont Blanc.</p>\n\n        <div class="event__photos-container">\n          <div class="event__photos-tape">\n            <img class="event__photo" src="img/photos/1.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/2.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/3.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/4.jpg" alt="Event photo">\n            <img class="event__photo" src="img/photos/5.jpg" alt="Event photo">\n          </div>\n        </div>\n      </section>\n    </section>\n  </form>\n</li>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}class w{constructor({point:e,offers:t,destinations:n}){this.point=e,this.offers=t,this.destinations=n}getTemplate(){return function(e,t,n){const{type:s,destination:a,dateFrom:r,dateTo:l,basePrice:o}=e,c=n.find((e=>e.id===a)).name;return`<li class="trip-events__item">\n  <div class="event">\n    <time class="event__date" datetime="2019-03-18">${u(r,"D MMM")}</time>\n    <div class="event__type">\n      <img class="event__type-icon" width="42" height="42" src="img/icons/taxi.png" alt="Event type icon">\n    </div>\n    <h3 class="event__title">${s} ${c}</h3>\n    <div class="event__schedule">\n      <p class="event__time">\n        <time class="event__start-time" datetime="2019-03-18T10:30">${u(r,b)}</time>\n        &mdash;\n        <time class="event__end-time" datetime="2019-03-18T11:00">${u(l,b)}</time>\n      </p>\n      <p class="event__duration">${((e,t)=>{const n=i()(e),s=i()(t),a=i().duration(s.diff(n));let r="";return r=a.days()>0?a.format("DD[D] HH[H] mm[M]"):a.hours()>0?a.format("HH[H] mm[M]"):a.format("mm[M]"),r})(r,l)}</p>\n    </div>\n    <p class="event__price">\n      &euro;&nbsp;<span class="event__price-value">${o}</span>\n    </p>\n    <h4 class="visually-hidden">Offers:</h4>\n    <ul class="event__selected-offers">\n      ${d=s,p=t,p.find((e=>e.type===d)).offers.map((e=>`<li class="event__offer">\n        <span class="event__offer-title">${e.title}</span>\n        &plus;&euro;&nbsp;\n        <span class="event__offer-price">${e.price}</span>\n        </li>`)).join("")}\n    </ul>\n    <button class="event__favorite-btn event__favorite-btn--active" type="button">\n      <span class="visually-hidden">Add to favorite</span>\n      <svg class="event__favorite-icon" width="28" height="28" viewBox="0 0 28 28">\n        <path d="M14 21l-8.22899 4.3262 1.57159-9.1631L.685209 9.67376 9.8855 8.33688 14 0l4.1145 8.33688 9.2003 1.33688-6.6574 6.48934 1.5716 9.1631L14 21z"/>\n      </svg>\n    </button>\n    <button class="event__rollup-btn" type="button">\n      <span class="visually-hidden">Open event</span>\n    </button>\n  </div>\n</li>`;var d,p}(this.point,this.offers,this.destinations)}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const D=[{name:"day",state:""},{name:"event",state:"disabled"},{name:"time",state:""},{name:"price",state:"checked"},{name:"offer",state:"disabled"}];class T{getTemplate(){return`<form class="trip-events__trip-sort  trip-sort" action="#" method="get">\n  ${D.map((e=>(e=>` <div class="trip-sort__item  trip-sort__item--${e.name}">\n<input id="sort-${e.name}" class="trip-sort__input  visually-hidden" type="radio" name="trip-sort" value="sort-${e.name}" ${e.state}>\n<label class="trip-sort__btn" for="sort-${e.name}">${l(e.name)}</label>\n</div>`)(e))).join("")}\n  </form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}}const k=e=>{const t=[];return e.forEach((e=>{const n=_.find((t=>t.id===e));t.push(n)})),t},x=(()=>{const e=[];return h.forEach((t=>{const n=((e,t)=>({type:e,offers:k(t)}))(t,((e,t)=>{const n=[];for(;n.length!==t;){let e=c(1,t);n.every((t=>t!==e))?n.push(e):e=c(1,t)}return n})(0,c(1,_.length)));e.push(n)})),e})(),O=()=>x,E=O(),C=e=>{const t=e.split(".");return Array.from({length:5},(()=>o(t).trim())).join(".")},H=(()=>{let e=0;return()=>(e+=1,e)})(),Y=Array.from({length:10},(()=>(()=>{const e=o(m),t=o(h);return{id:H(),type:t,destination:c(1,v.length),description:C("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras aliquet varius magna, non porta ligula feugiat eget. Fusce tristique felis at fermentum pharetra. Aliquam id orci ut lectus varius viverra. Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante. Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum. Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui. Sed sed nisi sed augue convallis suscipit in sed felis. Aliquam erat volutpat. Nunc fermentum tortor ac porta dapibus. In rutrum ac purus sit amet tempus."),dateFrom:e.dateFrom,dateTo:e.dateTo,basePrice:c(20,5e3),offers:(()=>{const e=E.find((e=>e.type===t)).offers;let n=[];return e.forEach((e=>{n.push(e.id)})),n.slice(0,c(1,n.length))})(),isFavorite:!0}})()));let A=0;const F=(()=>{const e=[];return v.forEach((t=>{A++,e.push((e=>({id:A,name:e,description:`${e}, is a beautiful city, a true asian pearl, with crowded streets.`,pictures:[{src:f[0],description:`${e} parliament building`},{src:f[1],description:`${e} main square`},{src:f[2],description:`${e} best view`},{src:f[3],description:`${e} landscape`},{src:f[4],description:`${e} church`}]}))(t))})),e})(),j=document.querySelector(".trip-main"),L=document.querySelector(".trip-controls__filters"),P=document.querySelector(".trip-events"),W=new class{points=(()=>Y)();destinations=(()=>F)();offers=O();getPoints(){return this.points}getDestinations(){return this.destinations}getOffers(){return this.offers}},q=new class{pointsListComponent=new p;constructor({pointsContainer:e,pointModel:t}){this.pointsContainer=e,this.pointModel=t}init(){this.points=[...this.pointModel.getPoints()],this.destinations=[...this.pointModel.getDestinations()],this.offers=[...this.pointModel.getOffers()],t(new T,this.pointsContainer),t(this.pointsListComponent,this.pointsContainer),t(new M({point:this.points[0],offers:this.offers,destinations:this.destinations}),this.pointsListComponent.getElement()),t(new S,this.pointsListComponent.getElement());for(let e=0;e<this.points.length;e++)t(new w({point:this.points[e],offers:this.offers,destinations:this.destinations}),this.pointsListComponent.getElement())}}({pointsContainer:P,pointModel:W});t(new class{getTemplate(){return'<section class="trip-main__trip-info  trip-info">\n  <div class="trip-info__main">\n    <h1 class="trip-info__title">Amsterdam &mdash; Chamonix &mdash; Geneva</h1>\n\n    <p class="trip-info__dates">18&nbsp;&mdash;&nbsp;20 Mar</p>\n  </div>\n\n  <p class="trip-info__cost">\n    Total: &euro;&nbsp;<span class="trip-info__cost-value">1230</span>\n  </p>\n</section>'}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},j,"afterbegin"),t(new class{getTemplate(){return`<form class="trip-filters" action="#" method="get">\n  ${d.map((e=>(e=>`<div class="trip-filters__filter">\n<input id="filter-${e.name}" class="trip-filters__filter-input  visually-hidden" type="radio" name="trip-filter" value="${e.name}" ${e.state}>\n<label class="trip-filters__filter-label" for="filter-${e.name}">${l(e.name)}</label>\n</div>`)(e))).join("")}\n  <button class="visually-hidden" type="submit">Accept filter</button>\n</form>`}getElement(){return this.element||(this.element=e(this.getTemplate())),this.element}removeElement(){this.element=null}},L),q.init()})()})();
//# sourceMappingURL=bundle.5de99cc879f205e3e70f.js.map