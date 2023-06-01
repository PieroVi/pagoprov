import{k as e}from"./key-a83dbe57.js";import{R as t}from"./dom-utils-2919d18e.js";import{E as i,S as s,a as n}from"./observables-589a5615.js";import"./dom-95153cd1.js";import"./browser-a3d50e79.js";import"./_tslib-158249d5.js";function o(e){return e*(2-e)}function l(e){return e/Math.abs(e)}function r(e,t,i,s){let n=null;const o=e=>n?n(e,null):0,l=()=>{n=null},r=(e,s,o)=>{n=function(e,t,i,s,n){const o=t+i;let l=0;return(r,a)=>{if(a)return a(e-l,r,s(r/o));if(r<t)return null;r>=o&&n&&n();const h=e*s((Math.min(r,o)-t)/i)-l;return l+=h,h}}(s+e,o,t,i,l)},a=e=>{null===n?(r(e.value,0,e.timeStamp),s(o)):n(e.timeStamp,((t,i)=>r(e.value,t,i)))};return e.subscribe(a),()=>{n=null,e.unsubscribe(a)}}function a(e,s,n,o,a){const h=function(e,t,s){const n=new i;return e.addEventListener(t,(e=>{e.preventDefault();const t=s(e);0===t||isNaN(t)||n.emit({value:t,timeStamp:e.timeStamp})}),!1),n}(e,"wheel",(e=>l(e.deltaY)*s));function c(e,i){t((t=>{const s=e(t);0!==s?(null!==s&&o(s),c(e,i)):i()}))}r(function(e,t){const s=new i;let n=0,o=1;return e.subscribe((e=>{(0===n||e.timeStamp>=n||l(e.value)!==o)&&(n=e.timeStamp+t,o=l(e.value),s.emit(e))})),s}(h,30),300,n,(function(e){a(new Promise(((t,i)=>{c(e,t)})))}))}function h(e,t,i){const s=i(e);return s?t||s.visible.value?s:h(s,t,i):null}function c(e,t){const i=-1===t?"prevItem":"nextItem";return e[i]?e[i]:e[i]=(i=>{const s=e.value+t*i.delta;return-1===t&&-1!==i.min&&s<i.min?i.needLoop?new u(i,i.max,!1,null,e):null:1===t&&-1!==i.max&&s>i.max?i.needLoop?new u(i,i.min,!1,e,null):null:new u(i,s,!1,null,null)})(e.collection)}class m{constructor(e,t,i,n,o,l){this._collection=e,this.prevItem=o,this.nextItem=l,this.value=t,this.visible=i||new s(!0),this.selected=new s(!!n),o&&(o.nextItem=this),l&&(l.prevItem=this),this.displayText=new s(t);const r=this.collection.selectedItem;this.selected.subscribe((e=>{e&&(r.value&&r.value.selected.update(!1),r.update(this))})),this.visible.subscribe((e=>{if(!e&&this.selected.value){const e=this.getPrevious(!1);e&&e.selected.update(!0)}this.collection.visibleItemsChanged.emit(null)}),!0)}get collection(){return this._collection}getPrevious(e){return h(this,e,(e=>e.prevItem))}getNext(e){return h(this,e,(e=>e.nextItem))}getDisplayText(){return this.displayText.value||this.value}}class u extends m{constructor(e,t,i,s,n){super(e,t,null,i,s,n)}get collection(){return this._collection}getPrevious(e){return c(this,-1)}getNext(e){return c(this,1)}}class d extends u{constructor(e,t){super(e,t,!0,null,null)}}class p{constructor(e=!0){this.needLoop=e,this.items=[],this.selectedItem=new s(null),this.visibleItemsChanged=new i}static createCollection(e,t,i=!0){const s=new p(i);for(let i=0;i<t.length;i++)s.add(i+1,null,i+1===e).displayText.value=t[i];return s.initialize(e),s}static createGenerator(e,t,i,s,n=!0){const o=new g(t,i,s,n);return o.initialize(e),o}initialize(e){this.items.filter((t=>t.value===e))[0].selected.update(!0),this.needLoop&&(this.items[0].prevItem=this.items[this.items.length-1],this.items[this.items.length-1].nextItem=this.items[0])}add(e,t,i){const s=new m(this,e,t,i,this.items[this.items.length-1],null);return this.items.push(s),s}}class g extends p{constructor(e,t,i,s){super(s),this.min=e,this.max=t,this.delta=i,this.originItem=null}initialize(e){this.originItem=new d(this,e)}}class v{constructor(e,t,i,s,n){this.dataItem=null,this.displayTextSubscription=this.displayTextSubscription.bind(this),this.roller=i,this.prevItem=n,this.nextItem=null,this.index=t,this.elements=i.createRollerItemElements(),this.offset=t*s,this.height=s,this.position=0,this.visibleItemCount=i.visibleItemCount,n&&(n.nextItem=this),this.updateDataItem(e),this.selectItem=this.selectItem.bind(this)}initialize(e){const i=Math.floor(this.visibleItemCount/2);this.elements[1].style.top=(this.index-i)*this.height+"px",e.appendChild(this.elements[1]),this.move(this.offset),this.elements[0].addEventListener("click",(()=>{t(this.selectItem)}))}isSelected(){return Math.floor(this.visibleItemCount/2)*this.height===Math.round(this.position)}selectItem(e){if(!this.dataItem)return Promise.resolve();const i=Math.floor(this.visibleItemCount/2);return this.roller.afterMove(y(n.Empty,(e=>this.roller.move(e)),{divisor:this.roller.itemSize.height,startTimestamp:e,endTimestamp:e+300,easing:o,frameCallback:t,value:(i-this.index)*this.height-(this.position-this.offset)}))}move(e){this.updatePosition(e);const t=this.position-this.offset;this.elements.forEach((e=>e.style.transform="matrix(1, 0, 0, 1, 0, "+t+")"))}updatePosition(e){this.position+=e,this.position>this.visibleItemCount*this.height?(this.position-=(this.visibleItemCount+1)*this.height,this.updateDataItem(this.nextItem&&this.nextItem.dataItem?this.nextItem.dataItem.getPrevious(!1):null)):this.position<-1*this.height&&(this.position+=(this.visibleItemCount+1)*this.height,this.updateDataItem(this.prevItem.dataItem?this.prevItem.dataItem.getNext(!1):null))}updateDataItem(e){this.dataItem!==e&&(this.dataItem&&this.dataItem.displayText.unsubscribe(this.displayTextSubscription),this.dataItem=e,this.dataItem?this.dataItem.displayText.subscribe(this.displayTextSubscription):this.displayTextSubscription(""))}displayTextSubscription(e){this.elements.forEach((t=>f(t,e)))}raiseChanges(){this.isSelected()&&this.dataItem&&this.dataItem.selected.update(!0)}}function f(e,t){e.innerText=t}function b(e,t,i){const s=i(e);return s&&Math.abs(Math.round(s.position-e.position))===t?[s].concat(b(s,t,i)):[]}function C(e,t,i){0!==e.length&&(e.shift().updateDataItem(t),C(e,i(t),i))}class I{constructor(e,t,i,s,n,o){this.itemCollection=e,this.visibleItemCount=t,this.itemContainers=[],this.itemSize=s,this.caption=n,this.longestVisibleDisplayText=o,this.needLoop=e.needLoop,this.container=i,this.rollerElement=null,this.rollerContainer=null,this.move=this.move.bind(this),this.moveReversed=this.moveReversed.bind(this),this.afterMove=this.afterMove.bind(this)}initialize(){this.initializeRollerElements();const s=[this.itemCollection.selectedItem.value];for(;s.length<this.visibleItemCount;)s.splice(0,0,s[0]?s[0].getPrevious(!1):null),s.push(s[s.length-1]?s[s.length-1].getNext(!1):null);s.push(s[s.length-1]?s[s.length-1].getNext(!1):null);for(let e=0;e<s.length;e++)this.itemContainers.push(new v(s[e],e,this,this.itemSize.height,this.itemContainers[this.itemContainers.length-1]));this.longestVisibleDisplayText&&f(this.createRollerItemElement("roller-item expander"),this.longestVisibleDisplayText);const n=this.createRollerItemElement("roller-after");this.itemContainers[0].prevItem=this.itemContainers[this.itemContainers.length-1],this.itemContainers[this.itemContainers.length-1].nextItem=this.itemContainers[0];for(let e=0;e<this.itemContainers.length;e++)this.itemContainers[e].initialize(n);this.itemCollection.selectedItem.subscribe((()=>this.updateVisibleDataItems()),!0),this.itemCollection.visibleItemsChanged.subscribe((()=>this.updateVisibleDataItems())),a(this.rollerElement,this.itemSize.height,o,this.moveReversed,this.afterMove),function(e,s,n,l){const r=new i,a=new i;let h=0;e.addEventListener("touchstart",(e=>{h=e.touches[0].clientY}),!1),e.addEventListener("touchend",(()=>{h=0,t((e=>a.emit(e)))}),!1),e.addEventListener("touchmove",(e=>{e.preventDefault();const t=e.changedTouches[0].clientY;r.emit(t-h),h=t}),!1);!function(e,t,i,s,n,l){let r,a,h,c=1,m=!1;const u=i.accelerationTimeFrame||300;function d(e){const t=Math.abs(a%i.divisor);return{value:(i.divisor-t)*Math.sign(a),endTimestamp:e+300,startTimestamp:e,easing:o,frameCallback:l,divisor:0}}function p(e,t){return(t*=c)>=r&&e-h<=u&&(c=Math.min(2,1.2*c)),a+=t,r=t,h=e,t}function g(e){a=0,h=e,c=1}e.subscribe((i=>{l((o=>{m||(m=!0,g(o),n(new Promise(((i,n)=>{const l=n=>{t.unsubscribe(l),y(e,s,d(n)).then((()=>{m=!1,i()})).catch((()=>{t.subscribe(l)})).finally((()=>g(o)))};t.subscribe(l)})))),s(p(o,i))}))}))}(r,a,{divisor:s,accelerationTimeFrame:0},n,l,t)}(this.rollerElement,this.itemSize.height,this.move,this.afterMove),this.rollerContainer&&this.rollerContainer.addEventListener("keydown",(t=>{let i=null;t.keyCode===e.KeyCode.Up?i=this.itemCollection.selectedItem.value.getPrevious():t.keyCode===e.KeyCode.Down&&(i=this.itemCollection.selectedItem.value.getNext()),i&&(t.preventDefault(),i.selected.update(!0))}))}initializeRollerElements(){const e=this.rollerContainer=document.createElement("SPAN");e.className="roller-container",e.style.minWidth=this.itemSize.width.toString();const t=document.createElement("SPAN");t.innerText=this.caption,t.className="roller-title",e.appendChild(t);const i=this.rollerElement=document.createElement("DIV");i.className="roller",i.tabIndex=-1,i.style.height=this.itemSize.height*this.visibleItemCount+"px",e.appendChild(i),this.container&&this.container.appendChild(e)}updateVisibleDataItems(){const e=this.itemContainers.filter((e=>e.isSelected()))[0];if(!e)return;const t=b(e,this.itemSize.height,(e=>e.prevItem)),i=b(e,this.itemSize.height,(e=>e.nextItem)),s=this.itemCollection.selectedItem.value;e.updateDataItem(s),C(t.concat([]),s.getPrevious(),(e=>e?e.getPrevious(!1):null)),C(i.concat([]),s.getNext(),(e=>e?e.getNext(!1):null))}createRollerItemElement(e){const t=document.createElement("SPAN");return t.className=e||"roller-item",this.rollerElement&&this.rollerElement.appendChild(t),t}createRollerItemElements(){const e=this.createRollerItemElement(null);return[e,e.cloneNode()]}moveReversed(e){this.move(0-e)}move(e){if(0===e)return;const t=Math.sign(e),i=this.itemContainers.length-1,s=-1===t?i:0,n=(-1===t?0:i)+t;if(!this.needLoop){if(1===t){const i=Math.floor(this.visibleItemCount/2)*this.itemSize.height;for(let o=s;o!==n;o+=t)!this.itemContainers[o].dataItem&&this.itemContainers[o].position+this.itemSize.height-i<=0&&this.itemContainers[o].position+this.itemSize.height+e-i>0&&(e=Math.min(i-(this.itemContainers[o].position+this.itemSize.height),e))}else{const i=(Math.floor(this.visibleItemCount/2)+1)*this.itemSize.height;for(let o=s;o!==n;o+=t)!this.itemContainers[o].dataItem&&this.itemContainers[o].position-i>=0&&this.itemContainers[o].position+e-i<0&&(e=Math.max(i-this.itemContainers[o].position,e))}if(0===e)return}for(let i=s;i!==n;i+=t)this.itemContainers[i].move(e)}afterMove(e){return e.then((()=>Promise.resolve(this.itemContainers.forEach((e=>e.raiseChanges())))))}}function y(e,t,i){return new Promise(((s,n)=>{function o(){e.unsubscribe(o),n()}e.subscribe(o);let l=0;const r=i.frameCallback,a=n=>{if(n<i.endTimestamp){const e=i.easing((n-i.startTimestamp)/(i.endTimestamp-i.startTimestamp)),s=i.value*e-l;t(s),l+=s,r(a)}else e.unsubscribe(o),t(i.value-l),s()};r(a)}))}function D(e){return e.value%4==0&&e.value%100!=0||e.value%400==0}function x(e){return 2!==e.value}function W(e){return-1!==[1,3,5,7,8,10,12].indexOf(e.value)}var w;function M(e,t,i,s,n,o,l){const r=e.add(t,i,s);o.subscribe((([e,i])=>{if(l){const s=n[S(i.value,e.value,t)];r.displayText.update(t+" "+s)}else r.displayText.value=n[t-1]}))}function S(e,t,i){return new Date(e,t-1,i).getDay()}function T(e){return e&&e.length?" "+e.concat([]).sort(((e,t)=>t.length-e.length))[0]:""}function N(e){let t="initial";for(;e;){if(t=window.getComputedStyle(e).backgroundColor,t&&"rgba(0, 0, 0, 0)"!==t&&"transparent"!==t)return t;e=e.parentElement}return t}!function(e){e[e.DayWithoutLeadingZero=0]="DayWithoutLeadingZero",e[e.DayWithLeadingZero=1]="DayWithLeadingZero",e[e.DayWithShortName=2]="DayWithShortName",e[e.DayWithFullName=3]="DayWithFullName",e[e.MonthWithShortName=4]="MonthWithShortName",e[e.MonthWithFullName=5]="MonthWithFullName",e[e.MonthWithoutLeadingZero=6]="MonthWithoutLeadingZero",e[e.MonthWithLeadingZero=7]="MonthWithLeadingZero",e[e.YearWithFourDigit=8]="YearWithFourDigit",e[e.YearWithThreeDigit=9]="YearWithThreeDigit",e[e.YearWithTwoDigit=10]="YearWithTwoDigit",e[e.YearWithOneDigit=11]="YearWithOneDigit"}(w||(w={}));const z=1,E=2,L=0,P=1,Y=2,k=3;function F(e,t,i){if(!t)return Promise.reject();const s=t.twelveHourFormat;let n=s?t.time.hours%12:t.time.hours;s&&0===n&&(n=12);let o=t.time.minutes,l=t.time.seconds,r=t.time.hours>=12?E:z;const a=36,h=p.createGenerator(l,0,59,1),c=p.createGenerator(o,0,59,1),m=s?p.createGenerator(n,1,12,1):p.createGenerator(n,0,23,1);let u=null;t.ampmDesignators&&t.ampmDesignators[0]&&t.ampmDesignators[1]&&(u=p.createCollection(r,t.ampmDesignators,!1));const d=document.createDocumentFragment(),g=document.createElement("STYLE");function v(e){return t=>{e(t),i.invokeMethodAsync("UpdateDateTime",[n,o,l,r]).catch()}}return g.type="text/css",g.innerText=".roller { height: 180px; } .roller-item, .roller-after { height: 36px; } .roller-item, .roller-title { color: "+window.getComputedStyle(e).color+" !important; } .roller-after { background-color: "+N(e)+";}",d.appendChild(g),t.items.forEach((e=>{switch(e.type){case L:new I(m,5,d,{width:-1,height:a},"Hour","15").initialize();break;case P:new I(c,5,d,{width:-1,height:a},"Minute","55").initialize();break;case Y:new I(h,5,d,{width:-1,height:a},"Second","55").initialize();break;case k:if(u){new I(u,5,d,{width:-1,height:a},"AM/PM","AM").initialize()}}})),m.selectedItem.subscribe(v((e=>{n=e.value}))),c.selectedItem.subscribe(v((e=>{o=e.value}))),h.selectedItem.subscribe(v((e=>{l=e.value}))),u&&u.selectedItem.subscribe(v((e=>{r=e.value}))),Z.set(e,new R(m,c,h,u)),e.textContent="",e.appendChild(d),Promise.resolve()}const Z=new WeakMap;class R{constructor(e,t,i,s){this.hoursCollection=e,this.minutesCollection=t,this.secondsCollection=i,this.AMPMCollection=s}update(e){if(this.AMPMCollection){let t=this.AMPMCollection?e.hours%12:e.hours;t=0===t?12:t,this.hoursCollection.initialize(t),this.AMPMCollection.initialize(e.hours>=12?E:z)}else this.hoursCollection.initialize(e.hours);this.minutesCollection.initialize(e.minutes),this.secondsCollection.initialize(e.seconds)}}class A{constructor(e,t,i){this.yearsCollection=e,this.monthsCollection=t,this.daysCollection=i}update(e){const t=e.filter((e=>e.type===w.DayWithShortName||e.type===w.DayWithFullName||e.type===w.DayWithoutLeadingZero||e.type===w.DayWithLeadingZero))[0],i=e.filter((e=>e.type===w.MonthWithShortName||e.type===w.MonthWithFullName||e.type===w.MonthWithLeadingZero||e.type===w.MonthWithoutLeadingZero))[0],s=e.filter((e=>e.type===w.YearWithFourDigit||e.type===w.YearWithThreeDigit||e.type===w.YearWithTwoDigit||e.type===w.YearWithOneDigit))[0];this.yearsCollection.initialize(s.value),this.monthsCollection.initialize(i.value),this.daysCollection.initialize(t.value)}}function j(e,t){if(!Z.has(e))return;const i=Z.get(e);if(i)return void i.update(t);const s=Z.get(e);s&&s.update(t)}const V={initializeDateRoller:function(e,t,i,s,n){const o=t.items.filter((e=>e.type===w.DayWithShortName||e.type===w.DayWithFullName||e.type===w.DayWithoutLeadingZero||e.type===w.DayWithLeadingZero))[0],l=t.items.filter((e=>e.type===w.MonthWithShortName||e.type===w.MonthWithFullName||e.type===w.MonthWithLeadingZero||e.type===w.MonthWithoutLeadingZero))[0],r=t.items.filter((e=>e.type===w.YearWithFourDigit||e.type===w.YearWithThreeDigit||e.type===w.YearWithTwoDigit||e.type===w.YearWithOneDigit))[0];let a=t.monthNames||[];const h=t.dayNames||[];let c=o?o.value:1,m=null;l?m=l.value:(a=["","","","","","","","","","","",""],m=i);let u=r?r.value:s;const d=r?p.createCollection(u,t.yearNames||[]):p.createGenerator(u,1,9999,1),g=p.createCollection(m,a),v=g.selectedItem.asTrigger(x),f={29:d.selectedItem.asTrigger(D).or(v),30:v,31:g.selectedItem.asTrigger(W)},b=g.selectedItem.join(d.selectedItem),C=o&&(o.type===w.DayWithFullName||o.type===w.DayWithShortName),y=new p;for(let e=1;e<=31;e++)M(y,e,f[e],e===c,h,b,C);y.initialize(c);const S=["25"+T(h),T(a),"0000"].reduce(((e,t)=>e.length>t.length?e:t)),z=document.createDocumentFragment(),E=document.createElement("STYLE");function L(e){return t=>{e(t),n.invokeMethodAsync("UpdateDateTime",[c,m,u]).catch((e=>console.error(e)))}}return E.type="text/css",E.innerText=".roller { height: 180px; } .roller-item, .roller-after { height: 36px; } .roller-item, .roller-title { color: "+window.getComputedStyle(e).color+" !important; } .roller-after { background-color: "+N(e)+";}",z.appendChild(E),t.items.forEach((e=>{switch(e.type){case w.DayWithoutLeadingZero:case w.DayWithLeadingZero:case w.DayWithFullName:case w.DayWithShortName:new I(y,5,z,{width:-1,height:36},"Day",S).initialize();break;case w.MonthWithFullName:case w.MonthWithShortName:case w.MonthWithLeadingZero:case w.MonthWithoutLeadingZero:new I(g,5,z,{width:-1,height:36},"Month",S).initialize();break;case w.YearWithFourDigit:case w.YearWithThreeDigit:case w.YearWithTwoDigit:case w.YearWithOneDigit:new I(d,5,z,{width:-1,height:36},"Year",S).initialize();break}})),e.textContent="",e.appendChild(z),y.selectedItem.subscribe(L((e=>{c=e.value}))),g.selectedItem.subscribe(L((e=>{m=e.value}))),d.selectedItem.subscribe(L((e=>{u=e.value}))),Z.set(e,new A(d,g,y)),Promise.resolve()},initializeTimeRoller:F,updateRoller:j};export{I as Roller,m as RollerItem,p as RollerItemCollection,V as default,S as getDayOfWeek,F as initializeTimeRoller,j as updateRoller};
