const Ue=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))l(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&l(o)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function l(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};Ue();const V={};function Fe(e){V.context=e}const Ye=(e,t)=>e===t,Je=Symbol("solid-proxy"),Qe=Symbol("solid-track"),oe={equals:Ye};let Ae=Pe;const J={},B=1,ce=2,Ve={owned:null,cleanups:null,context:null,owner:null};var N=null;let se=null,$=null,ne=null,O=null,G=null,pe=0;function re(e,t){const n=$,l=N,s=e.length===0,i=s?Ve:{owned:null,cleanups:null,context:null,owner:t||l},o=s?e:()=>e(()=>xe(i));N=i,$=null;try{return ye(o,!0)}finally{$=n,N=l}}function _(e,t){t=t?Object.assign({},oe,t):oe;const n={value:e,observers:null,observerSlots:null,pending:J,comparator:t.equals||void 0},l=s=>(typeof s=="function"&&(s=s(n.pending!==J?n.pending:n.value)),ve(n,s));return[Ie.bind(n),l]}function Ce(e,t,n){const l=de(e,t,!0,B);ee(l)}function I(e,t,n){const l=de(e,t,!1,B);ee(l)}function R(e,t,n){Ae=lt;const l=de(e,t,!1,B);l.user=!0,G?G.push(l):ee(l)}function Q(e,t,n){n=n?Object.assign({},oe,n):oe;const l=de(e,t,!0,0);return l.pending=J,l.observers=null,l.observerSlots=null,l.comparator=n.equals||void 0,ee(l),Ie.bind(l)}function _e(e,t,n){arguments.length===2?typeof t=="object"&&(n=t,t=e,e=!0):arguments.length===1&&(t=e,e=!0),n||(n={});const l=new Set,[s,i]=_(n.initialValue),[o,r]=_(void 0,{equals:!1}),[u,a]=_(!1),[c,h]=_();let f,g=null,b=null,x=null,C=!1,T="initialValue"in n,S=typeof e=="function"&&Q(e);V.context&&(x=`${V.context.id}${V.context.count++}`,V.load&&(b=V.load(x)));function v(A,L,k,D){return g===A&&(g=null,T=!0,b&&(A===b||L===b)&&n.onHydrated&&queueMicrotask(()=>n.onHydrated(D,{value:L})),b=null,h(f=k),E(L)),L}function E(A){be(()=>{i(()=>A),a(!1);for(const L of l.keys())L.decrement();l.clear()})}function P(){const A=et,L=s();if(f)throw f;return $&&!$.user&&A&&Ce(()=>{o(),g&&(A.resolved||l.has(A)||(A.increment(),l.add(A)))}),L}function K(A=!0){if(A&&C)return;C=!1,h(f=void 0);const L=S?S():e;if(L==null||L===!1){v(g,U(s));return}const k=b||U(()=>t(L,{value:s(),refetching:A}));return typeof k!="object"||!("then"in k)?(v(g,k),k):(g=k,C=!0,queueMicrotask(()=>C=!1),be(()=>{a(!0),r()}),k.then(D=>v(k,D,void 0,L),D=>v(k,D,D)))}return Object.defineProperties(P,{loading:{get(){return u()}},error:{get(){return c()}},latest:{get(){if(!T)return P();if(f)throw f;return s()}}}),S?Ce(()=>K(!1)):K(!1),[P,{refetch:K,mutate:i}]}function be(e){if(ne)return e();let t;const n=ne=[];try{t=e()}finally{ne=null}return ye(()=>{for(let l=0;l<n.length;l+=1){const s=n[l];if(s.pending!==J){const i=s.pending;s.pending=J,ve(s,i)}}},!1),t}function U(e){let t,n=$;return $=null,t=e(),$=n,t}function Z(e,t,n){const l=Array.isArray(e);let s,i=n&&n.defer;return o=>{let r;if(l){r=Array(e.length);for(let a=0;a<e.length;a++)r[a]=e[a]()}else r=e();if(i){i=!1;return}const u=U(()=>t(r,s,o));return s=r,u}}function qe(e){return N===null||(N.cleanups===null?N.cleanups=[e]:N.cleanups.push(e)),e}let et;function Ie(){const e=se;if(this.sources&&(this.state||e)){const t=O;O=null,this.state===B||e?ee(this):ue(this),O=t}if($){const t=this.observers?this.observers.length:0;$.sources?($.sources.push(this),$.sourceSlots.push(t)):($.sources=[this],$.sourceSlots=[t]),this.observers?(this.observers.push($),this.observerSlots.push($.sources.length-1)):(this.observers=[$],this.observerSlots=[$.sources.length-1])}return this.value}function ve(e,t,n){if(ne)return e.pending===J&&ne.push(e),e.pending=t,t;if(e.comparator&&e.comparator(e.value,t))return t;let l=!1;return e.value=t,e.observers&&e.observers.length&&ye(()=>{for(let s=0;s<e.observers.length;s+=1){const i=e.observers[s];l&&se.disposed.has(i),(l&&!i.tState||!l&&!i.state)&&(i.pure?O.push(i):G.push(i),i.observers&&Te(i)),l||(i.state=B)}if(O.length>1e6)throw O=[],new Error},!1),t}function ee(e){if(!e.fn)return;xe(e);const t=N,n=$,l=pe;$=N=e,tt(e,e.value,l),$=n,N=t}function tt(e,t,n){let l;try{l=e.fn(t)}catch(s){De(s)}(!e.updatedAt||e.updatedAt<=n)&&(e.observers&&e.observers.length?ve(e,l):e.value=l,e.updatedAt=n)}function de(e,t,n,l=B,s){const i={fn:e,state:l,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:t,owner:N,context:null,pure:n};return N===null||N!==Ve&&(N.owned?N.owned.push(i):N.owned=[i]),i}function le(e){const t=se;if(e.state===0||t)return;if(e.state===ce||t)return ue(e);if(e.suspense&&U(e.suspense.inFallback))return e.suspense.effects.push(e);const n=[e];for(;(e=e.owner)&&(!e.updatedAt||e.updatedAt<pe);)(e.state||t)&&n.push(e);for(let l=n.length-1;l>=0;l--)if(e=n[l],e.state===B||t)ee(e);else if(e.state===ce||t){const s=O;O=null,ue(e,n[0]),O=s}}function ye(e,t){if(O)return e();let n=!1;t||(O=[]),G?n=!0:G=[],pe++;try{const l=e();return nt(n),l}catch(l){O||(G=null),De(l)}}function nt(e){O&&(Pe(O),O=null),!e&&(G.length?be(()=>{Ae(G),G=null}):G=null)}function Pe(e){for(let t=0;t<e.length;t++)le(e[t])}function lt(e){let t,n=0;for(t=0;t<e.length;t++){const s=e[t];s.user?e[n++]=s:le(s)}V.context&&Fe();const l=e.length;for(t=0;t<n;t++)le(e[t]);for(t=l;t<e.length;t++)le(e[t])}function ue(e,t){const n=se;e.state=0;for(let l=0;l<e.sources.length;l+=1){const s=e.sources[l];s.sources&&(s.state===B||n?s!==t&&le(s):(s.state===ce||n)&&ue(s,t))}}function Te(e){const t=se;for(let n=0;n<e.observers.length;n+=1){const l=e.observers[n];(!l.state||t)&&(l.state=ce,l.pure?O.push(l):G.push(l),l.observers&&Te(l))}}function xe(e){let t;if(e.sources)for(;e.sources.length;){const n=e.sources.pop(),l=e.sourceSlots.pop(),s=n.observers;if(s&&s.length){const i=s.pop(),o=n.observerSlots.pop();l<s.length&&(i.sourceSlots[o]=l,s[l]=i,n.observerSlots[l]=o)}}if(e.owned){for(t=0;t<e.owned.length;t++)xe(e.owned[t]);e.owned=null}if(e.cleanups){for(t=0;t<e.cleanups.length;t++)e.cleanups[t]();e.cleanups=null}e.state=0,e.context=null}function De(e){throw e}const st=Symbol("fallback");function Se(e){for(let t=0;t<e.length;t++)e[t]()}function it(e,t,n={}){let l=[],s=[],i=[],o=0,r=t.length>1?[]:null;return qe(()=>Se(i)),()=>{let u=e()||[],a,c;return u[Qe],U(()=>{let f=u.length,g,b,x,C,T,S,v,E,P;if(f===0)o!==0&&(Se(i),i=[],l=[],s=[],o=0,r&&(r=[])),n.fallback&&(l=[st],s[0]=re(K=>(i[0]=K,n.fallback())),o=1);else if(o===0){for(s=new Array(f),c=0;c<f;c++)l[c]=u[c],s[c]=re(h);o=f}else{for(x=new Array(f),C=new Array(f),r&&(T=new Array(f)),S=0,v=Math.min(o,f);S<v&&l[S]===u[S];S++);for(v=o-1,E=f-1;v>=S&&E>=S&&l[v]===u[E];v--,E--)x[E]=s[v],C[E]=i[v],r&&(T[E]=r[v]);for(g=new Map,b=new Array(E+1),c=E;c>=S;c--)P=u[c],a=g.get(P),b[c]=a===void 0?-1:a,g.set(P,c);for(a=S;a<=v;a++)P=l[a],c=g.get(P),c!==void 0&&c!==-1?(x[c]=s[a],C[c]=i[a],r&&(T[c]=r[a]),c=b[c],g.set(P,c)):i[a]();for(c=S;c<f;c++)c in x?(s[c]=x[c],i[c]=C[c],r&&(r[c]=T[c],r[c](c))):s[c]=re(h);s=s.slice(0,o=f),l=u.slice(0)}return s});function h(f){if(i[c]=f,r){const[g,b]=_(c);return r[c]=b,t(u[c],g)}return t(u[c])}}}function p(e,t){return U(()=>e(t||{}))}function ie(){return!0}const Re={get(e,t,n){return t===Je?n:e.get(t)},has(e,t){return e.has(t)},set:ie,deleteProperty:ie,getOwnPropertyDescriptor(e,t){return{configurable:!0,enumerable:!0,get(){return e.get(t)},set:ie,deleteProperty:ie}},ownKeys(e){return e.keys()}};function he(e){return(e=typeof e=="function"?e():e)==null?{}:e}function fe(...e){return new Proxy({get(t){for(let n=e.length-1;n>=0;n--){const l=he(e[n])[t];if(l!==void 0)return l}},has(t){for(let n=e.length-1;n>=0;n--)if(t in he(e[n]))return!0;return!1},keys(){const t=[];for(let n=0;n<e.length;n++)t.push(...Object.keys(he(e[n])));return[...new Set(t)]}},Re)}function rt(e,...t){const n=new Set(t.flat()),l=Object.getOwnPropertyDescriptors(e),s=t.map(i=>{const o={};for(let r=0;r<i.length;r++){const u=i[r];Object.defineProperty(o,u,l[u]?l[u]:{get(){return e[u]},set(){return!0}})}return o});return s.push(new Proxy({get(i){return n.has(i)?void 0:e[i]},has(i){return n.has(i)?!1:i in e},keys(){return Object.keys(e).filter(i=>!n.has(i))}},Re)),s}function q(e){const t="fallback"in e&&{fallback:()=>e.fallback};return Q(it(()=>e.each,e.children,t||void 0))}function j(e){let t=!1;const n=Q(()=>e.when,void 0,{equals:(l,s)=>t?l===s:!l==!s});return Q(()=>{const l=n();if(l){const s=e.children;return(t=typeof s=="function"&&s.length>0)?U(()=>s(l)):s}return e.fallback})}function ot(e,t){return Q(e,void 0,t?void 0:{equals:t})}function ct(e,t,n){let l=n.length,s=t.length,i=l,o=0,r=0,u=t[s-1].nextSibling,a=null;for(;o<s||r<i;){if(t[o]===n[r]){o++,r++;continue}for(;t[s-1]===n[i-1];)s--,i--;if(s===o){const c=i<l?r?n[r-1].nextSibling:n[i-r]:u;for(;r<i;)e.insertBefore(n[r++],c)}else if(i===r)for(;o<s;)(!a||!a.has(t[o]))&&t[o].remove(),o++;else if(t[o]===n[i-1]&&n[r]===t[s-1]){const c=t[--s].nextSibling;e.insertBefore(n[r++],t[o++].nextSibling),e.insertBefore(n[--i],c),t[s]=n[i]}else{if(!a){a=new Map;let h=r;for(;h<i;)a.set(n[h],h++)}const c=a.get(t[o]);if(c!=null)if(r<c&&c<i){let h=o,f=1,g;for(;++h<s&&h<i&&!((g=a.get(t[h]))==null||g!==c+f);)f++;if(f>c-r){const b=t[o];for(;r<c;)e.insertBefore(n[r++],b)}else e.replaceChild(n[r++],t[o++])}else o++;else t[o++].remove()}}}const Le="_$DX_DELEGATE";function ut(e,t,n){let l;return re(s=>{l=s,t===document?e():m(t,e(),t.firstChild?null:void 0,n)}),()=>{l(),t.textContent=""}}function w(e,t,n){const l=document.createElement("template");l.innerHTML=e;let s=l.content.firstChild;return n&&(s=s.firstChild),s}function Ge(e,t=window.document){const n=t[Le]||(t[Le]=new Set);for(let l=0,s=e.length;l<s;l++){const i=e[l];n.has(i)||(n.add(i),t.addEventListener(i,ft))}}function W(e,t,n){n==null?e.removeAttribute(t):e.setAttribute(t,n)}function at(e,t){t==null?e.removeAttribute("class"):e.className=t}function dt(e,t,n,l){if(l)Array.isArray(n)?(e[`$$${t}`]=n[0],e[`$$${t}Data`]=n[1]):e[`$$${t}`]=n;else if(Array.isArray(n)){const s=n[0];e.addEventListener(t,n[0]=i=>s.call(e,n[1],i))}else e.addEventListener(t,n)}function m(e,t,n,l){if(n!==void 0&&!l&&(l=[]),typeof t!="function")return ae(e,t,l,n);I(s=>ae(e,t(),s,n),l)}function ft(e){const t=`$$${e.type}`;let n=e.composedPath&&e.composedPath()[0]||e.target;for(e.target!==n&&Object.defineProperty(e,"target",{configurable:!0,value:n}),Object.defineProperty(e,"currentTarget",{configurable:!0,get(){return n||document}}),V.registry&&!V.done&&(V.done=!0,document.querySelectorAll("[id^=pl-]").forEach(l=>l.remove()));n!==null;){const l=n[t];if(l&&!n.disabled){const s=n[`${t}Data`];if(s!==void 0?l.call(n,s,e):l.call(n,e),e.cancelBubble)return}n=n.host&&n.host!==n&&n.host instanceof Node?n.host:n.parentNode}}function ae(e,t,n,l,s){for(V.context&&!n&&(n=[...e.childNodes]);typeof n=="function";)n=n();if(t===n)return n;const i=typeof t,o=l!==void 0;if(e=o&&n[0]&&n[0].parentNode||e,i==="string"||i==="number"){if(V.context)return n;if(i==="number"&&(t=t.toString()),o){let r=n[0];r&&r.nodeType===3?r.data=t:r=document.createTextNode(t),n=F(e,n,l,r)}else n!==""&&typeof n=="string"?n=e.firstChild.data=t:n=e.textContent=t}else if(t==null||i==="boolean"){if(V.context)return n;n=F(e,n,l)}else{if(i==="function")return I(()=>{let r=t();for(;typeof r=="function";)r=r();n=ae(e,r,n,l)}),()=>n;if(Array.isArray(t)){const r=[],u=n&&Array.isArray(n);if(ge(r,t,n,s))return I(()=>n=ae(e,r,n,l,!0)),()=>n;if(V.context){for(let a=0;a<r.length;a++)if(r[a].parentNode)return n=r}if(r.length===0){if(n=F(e,n,l),o)return n}else u?n.length===0?ke(e,r,l):ct(e,n,r):(n&&F(e),ke(e,r));n=r}else if(t instanceof Node){if(V.context&&t.parentNode)return n=o?[t]:t;if(Array.isArray(n)){if(o)return n=F(e,n,l,t);F(e,n,null,t)}else n==null||n===""||!e.firstChild?e.appendChild(t):e.replaceChild(t,e.firstChild);n=t}}return n}function ge(e,t,n,l){let s=!1;for(let i=0,o=t.length;i<o;i++){let r=t[i],u=n&&n[i];if(r instanceof Node)e.push(r);else if(!(r==null||r===!0||r===!1))if(Array.isArray(r))s=ge(e,r,u)||s;else if(typeof r=="function")if(l){for(;typeof r=="function";)r=r();s=ge(e,Array.isArray(r)?r:[r],u)||s}else e.push(r),s=!0;else{const a=String(r);u&&u.nodeType===3&&u.data===a?e.push(u):e.push(document.createTextNode(a))}}return s}function ke(e,t,n){for(let l=0,s=t.length;l<s;l++)e.insertBefore(t[l],n)}function F(e,t,n,l){if(n===void 0)return e.textContent="";const s=l||document.createTextNode("");if(t.length){let i=!1;for(let o=t.length-1;o>=0;o--){const r=t[o];if(s!==r){const u=r.parentNode===e;!i&&!o?u?e.replaceChild(s,r):e.insertBefore(s,n):u&&r.remove()}else i=!0}}else e.insertBefore(s,n);return[s]}const ht=e=>{const t=fe({multiple:!1,disabled:!1,optionToValue:d=>d,isOptionDisabled:d=>!1},e),n=d=>{if(t.multiple&&Array.isArray(d))return d;if(!t.multiple&&!Array.isArray(d))return d!==null?[d]:[];throw new Error(`Incompatible value type for ${t.multiple?"multple":"single"} select.`)},[l,s]=_(t.initialValue?n(t.initialValue):[]),i=()=>t.multiple?l():l()[0]||null,o=d=>s(n(d)),r=()=>s([]),u=()=>!!(t.multiple?i().length:i());R(Z(l,()=>t.onChange?.(i()),{defer:!0}));const[a,c]=_(""),h=()=>c("");R(Z(a,d=>t.onInput?.(d),{defer:!0})),R(Z(a,d=>{d&&!v()&&P()},{defer:!0}));const f=typeof t.options=="function"?Q(()=>t.options(a()),t.options(a())):()=>t.options,g=()=>f().length,b=d=>{if(t.isOptionDisabled(d))return;const y=t.optionToValue(d);t.multiple?o([...l(),y]):(o(y),S()),K()},[x,C]=_(!1),T=()=>C(!1),S=()=>C(!0),[v,E]=_(!1),P=()=>E(!0),K=()=>E(!1),A=()=>E(!v()),L=()=>t.disabled,[k,D]=_(-1),M=()=>f()[k()],Ze=d=>d===M(),we=d=>{g()||D(-1);const y=g()-1,te=d==="next"?1:-1;let z=k()+te;z>y&&(z=0),z<0&&(z=y),D(z)},Be=()=>we("previous"),$e=()=>we("next");R(Z(f,d=>{v()&&D(Math.min(0,d.length-1))},{defer:!0})),R(Z(L,d=>{d&&v()&&K()})),R(Z(v,d=>{d?(k()===-1&&$e(),T()):(k()>-1&&D(-1),h())},{defer:!0})),R(Z(k,d=>{d>-1&&!v()&&P()},{defer:!0}));const X={containerRef:null,inputRef:null,listRef:null},Me=d=>{X.containerRef=d,d.getAttribute("tabIndex")||(d.tabIndex=-1),d.addEventListener("focusin",()=>{T()}),d.addEventListener("focusout",y=>{const te=y.relatedTarget;for(const z of Object.values(X))if(z?.contains(te)){y.preventDefault(),y.stopPropagation();return}K()}),d.addEventListener("pointerdown",y=>{X.inputRef&&y.target!==X.inputRef&&y.preventDefault()}),d.addEventListener("click",y=>{(!X.listRef||!X.listRef.contains(y.target))&&(X.inputRef&&X.inputRef.focus(),A())})},ze=d=>{X.inputRef=d,d.getAttribute("tabIndex")||(d.tabIndex=-1),I(()=>d.value=a()),d.addEventListener("input",y=>{c(y.target.value)}),I(()=>{d.style.setProperty("opacity",x()?"0":"1")}),d.addEventListener("focus",y=>{t.onFocus&&t.onFocus(y)}),d.addEventListener("blur",y=>{t.onBlur&&t.onBlur(y)}),d.addEventListener("keydown",y=>{switch(y.key){case"ArrowDown":$e();break;case"ArrowUp":Be();break;case"Enter":if(v()&&M()){b(M());break}return;case"Escape":if(v()){K();break}return;case"Delete":case"Backspace":if(a())return;if(t.multiple){const te=i();o([...te.slice(0,-1)])}else r();break;case" ":if(a())return;v()?M()&&b(M()):P();break;case"Tab":if(M()&&v()){b(M());break}return;default:return}y.preventDefault(),y.stopPropagation()})},He=d=>{X.listRef=d,d.getAttribute("tabIndex")||(d.tabIndex=-1),d.addEventListener("pointerdown",y=>{y.preventDefault(),y.stopPropagation()})};return{get value(){return i()},get hasValue(){return u()},setValue:o,get options(){return f()},get inputValue(){return a()},get isOpen(){return v()},multiple:t.multiple,get disabled(){return L()},pickOption:b,isOptionFocused:Ze,isOptionDisabled:t.isOptionDisabled,containerRef:Me,inputRef:ze,listRef:He}},bt=w("<mark></mark>"),Y={NO_MATCH:0,MATCH:1,WORD_START:2,START:3},gt=(e,t)=>{let n=Y.NO_MATCH,l=[];if(e.length<=t.length){const s=Array.from(e.toLocaleLowerCase()),i=Array.from(t.toLocaleLowerCase());let o=Y.START;e:for(let r=0,u=0;r<s.length;r++){for(;u<i.length;)if(i[u]===s[r]){l[u]=!0,o===Y.MATCH&&i[u-1]===" "&&i[u]!==" "&&(o=Y.WORD_START),n+=o,o++,u++;continue e}else o=Y.MATCH,u++;n=Y.NO_MATCH,l.length=0}}return{target:t,score:n,matches:l}},mt=(e,t=n=>(()=>{const l=bt.cloneNode(!0);return m(l,n),l})())=>{const n=e.target,l=e.matches,s="\0",i=[];let o=!1;for(let r=0;r<n.length;r++){const u=n[r],a=l[r];!o&&a?(i.push(s),o=!0):o&&!a&&(i.push(s),o=!1),i.push(u)}return o&&(i.push(s),o=!1),ot(()=>i.join("").split(s).map((r,u)=>u%2?t(r):r))},pt=(e,t,n)=>{const l=[];for(let s=0;s<t.length;s++){const i=t[s],o=n?i[n]:i,r=gt(e,o);r.score&&l.push({...r,item:i,index:s})}return l.sort((s,i)=>{let o=i.score-s.score;return o===0&&(o=s.index-i.index),o}),l},vt=w("<mark></mark>"),We=(e,t)=>{const n=Object.assign({filterable:!0,disable:()=>!1},t||{}),l=u=>n?.key!==void 0?u[n.key]:u;return{options:u=>{let c=(typeof e=="function"?e(u):e).map(h=>({label:l(h),value:h,disabled:n.disable(h)}));if(n.filterable&&u&&(c=pt(u,c,"label").map(h=>({...h.item,label:mt(h)}))),n.createable!==void 0){const h=u.trim(),f=c.some(g=>yt(u,l(g.value)));if(h&&!f){let g;typeof n.createable=="function"?g=n.createable(h):g=n.key?{[n.key]:h}:h;const b={label:["Create ",(()=>{const x=vt.cloneNode(!0);return m(x,()=>l(g)),x})()],value:g,disabled:!1};c=[...c,b]}}return c},optionToValue:u=>u.value,isOptionDisabled:u=>u.disabled,format:(u,a)=>a==="option"?u.label:l(u)}},yt=(e,t)=>e.localeCompare(t,void 0,{sensitivity:"base"})===0,xt=w("<div></div>"),wt=w('<div class="solid-select-control"></div>'),$t=w('<div class="solid-select-placeholder"></div>'),Ct=w('<div class="solid-select-single-value"></div>'),_t=w('<div class="solid-select-multi-value"><button type="button" class="solid-select-multi-value-remove">\u2A2F</button></div>'),St=w('<input class="solid-select-input" type="text" tabindex="0" autocomplete="off" autocapitalize="none" size="1">'),Lt=w('<div class="solid-select-list"></div>'),Ne=w('<div class="solid-select-list-placeholder"></div>'),kt=w('<div class="solid-select-option"></div>'),Ke=e=>{const[t,n]=rt(fe({format:(s,i)=>s,placeholder:"Select...",readonly:typeof e.options!="function",loading:!1,loadingPlaceholder:"Loading...",emptyPlaceholder:"No options"},e),["options","optionToValue","isOptionDisabled","multiple","disabled","onInput","onChange","onBlur"]),l=ht(t);return n.initialValue!==void 0&&R(Z(()=>n.initialValue,s=>l.setValue(s))),p(Nt,{get class(){return n.class},ref(s){const i=l.containerRef;typeof i=="function"?i(s):l.containerRef=s},get disabled(){return l.disabled},get children(){return[p(Ot,{get format(){return n.format},get placeholder(){return n.placeholder},get id(){return n.id},get name(){return n.name},get autofocus(){return n.autofocus},get readonly(){return n.readonly},get disabled(){return l.disabled},get value(){return l.value},get hasValue(){return l.hasValue},get setValue(){return l.setValue},get inputValue(){return l.inputValue},get inputRef(){return l.inputRef},get multiple(){return l.multiple}}),p(Pt,{ref(s){const i=l.listRef;typeof i=="function"?i(s):l.listRef=s},get isOpen(){return l.isOpen},get options(){return l.options},get loading(){return n.loading},get loadingPlaceholder(){return n.loadingPlaceholder},get emptyPlaceholder(){return n.emptyPlaceholder},children:s=>p(Tt,{get isDisabled(){return l.isOptionDisabled(s)},get isFocused(){return l.isOptionFocused(s)},get pickOption(){return[l.pickOption,s]},get children(){return n.format(s,"option")}})})]}})},Nt=e=>(()=>{const t=xt.cloneNode(!0),n=e.ref;return typeof n=="function"?n(t):e.ref=t,m(t,()=>e.children),I(l=>{const s=`solid-select-container ${e.class!==void 0?e.class:""}`,i=e.disabled;return s!==l._v$&&at(t,l._v$=s),i!==l._v$2&&W(t,"data-disabled",l._v$2=i),l},{_v$:void 0,_v$2:void 0}),t})(),Ot=e=>{const t=n=>{const l=e.value;e.setValue([...l.slice(0,n),...l.slice(n+1)])};return(()=>{const n=wt.cloneNode(!0);return m(n,p(j,{get when(){return!e.hasValue&&!e.inputValue},get children(){return p(Et,{get children(){return e.placeholder}})}}),null),m(n,p(j,{get when(){return e.hasValue&&!e.multiple&&!e.inputValue},get children(){return p(At,{get children(){return e.format(e.value,"value")}})}}),null),m(n,p(j,{get when(){return e.hasValue&&e.multiple},get children(){return p(q,{get each(){return e.value},children:(l,s)=>p(Vt,{onRemove:()=>t(s()),get children(){return e.format(l,"value")}})})}}),null),m(n,p(It,{ref(l){const s=e.inputRef;typeof s=="function"?s(l):e.inputRef=l},get id(){return e.id},get name(){return e.name},get autofocus(){return e.autofocus},get disabled(){return e.disabled},get readonly(){return e.readonly}}),null),I(l=>{const s=e.multiple,i=e.hasValue,o=e.disabled;return s!==l._v$3&&W(n,"data-multiple",l._v$3=s),i!==l._v$4&&W(n,"data-has-value",l._v$4=i),o!==l._v$5&&W(n,"data-disabled",l._v$5=o),l},{_v$3:void 0,_v$4:void 0,_v$5:void 0}),n})()},Et=e=>(()=>{const t=$t.cloneNode(!0);return m(t,()=>e.children),t})(),At=e=>(()=>{const t=Ct.cloneNode(!0);return m(t,()=>e.children),t})(),Vt=e=>(()=>{const t=_t.cloneNode(!0),n=t.firstChild;return m(t,()=>e.children,n),n.addEventListener("click",l=>{l.stopPropagation(),e.onRemove()}),t})(),It=e=>(()=>{const t=St.cloneNode(!0);t.$$keydown=l=>{l.key==="Escape"&&(l.preventDefault(),l.stopPropagation(),l.target.blur())};const n=e.ref;return typeof n=="function"?n(t):e.ref=t,I(l=>{const s=e.id,i=e.name,o=e.autofocus,r=e.readonly,u=e.disabled;return s!==l._v$6&&W(t,"id",l._v$6=s),i!==l._v$7&&W(t,"name",l._v$7=i),o!==l._v$8&&(t.autofocus=l._v$8=o),r!==l._v$9&&(t.readOnly=l._v$9=r),u!==l._v$10&&(t.disabled=l._v$10=u),l},{_v$6:void 0,_v$7:void 0,_v$8:void 0,_v$9:void 0,_v$10:void 0}),t})(),Pt=e=>p(j,{get when(){return e.isOpen},get children(){const t=Lt.cloneNode(!0),n=e.ref;return typeof n=="function"?n(t):e.ref=t,m(t,p(j,{get when(){return!e.loading},get fallback(){return(()=>{const l=Ne.cloneNode(!0);return m(l,()=>e.loadingPlaceholder),l})()},get children(){return p(q,{get each(){return e.options},get fallback(){return(()=>{const l=Ne.cloneNode(!0);return m(l,()=>e.emptyPlaceholder),l})()},get children(){return e.children}})}})),t}}),Tt=e=>{const t=n=>{R(()=>{e.isFocused&&n.scrollIntoView({block:"nearest"})})};return(()=>{const n=kt.cloneNode(!0);return dt(n,"click",e.pickOption,!0),t(n),m(n,()=>e.children),I(l=>{const s=e.isDisabled,i=e.isFocused;return s!==l._v$11&&W(n,"data-disabled",l._v$11=s),i!==l._v$12&&W(n,"data-focused",l._v$12=i),l},{_v$11:void 0,_v$12:void 0}),n})()};Ge(["keydown","click"]);const Dt=w('<div class="w-max"><label for="version-select" class="font-semibold">Minecraft Version</label><div class="flex"><input type="checkbox" id="snapshot-checkbox" class="mr-2 self-center"><label for="snapshot-checkbox">Show Snapshots</label></div></div>');function Rt(e){const[t,n]=_(!1),l=()=>{let i=e.versions.listings;return t()||(i=i.filter(o=>o.type==="release")),We(i,{key:"id"})},s=()=>e.versions.listings.find(i=>i.id===e.versions.latest.release);return(()=>{const i=Dt.cloneNode(!0),o=i.firstChild,r=o.nextSibling,u=r.firstChild;return m(i,p(Ke,fe(l,{get initialValue(){return s()},onChange:a=>e.setSelectedVersion(a),class:"bg-white",id:"version-select"})),r),u.addEventListener("change",a=>n(a.currentTarget.checked)),i})()}const Gt=w('<div class="w-max"><label for="item-select" class="font-semibold">Item to Enchant</label></div>');function Wt(e){const t=e.enchantmentData.categories.reduce((l,s)=>l.concat(s.items.filter(i=>!l.some(o=>o.id===i.id))),[]).sort((l,s)=>l.name.localeCompare(s.name)),n=We(t,{key:"name"});return(()=>{const l=Gt.cloneNode(!0);return l.firstChild,m(l,p(Ke,fe(n,{placeholder:"Select an Item...",onChange:s=>e.setSelectedItem(s),class:"bg-white",id:"item-select"})),null),l})()}const Kt=w('<div><span class="font-semibold">Enchantment Selection</span><table class="border-separate border-spacing-x-2"><tbody></tbody></table></div>'),Xt=w('<tr><td class="w-5"></td><td></td><td><select class="w-10"><option value="0">-</option></select></td></tr>'),jt=w('<div class="font-bold w-full text-center underline decoration-dotted">*</div>'),Zt=w("<option></option>");function Xe(e){if(isNaN(e))return NaN;const t=String(+e).split(""),n=["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"];let l="",s=3;for(;s--;)l=(n[+t.pop()+s*10]||"")+l;return Array(+t.join("")+1).join("M")+l}function Bt(e){const t=()=>e.availableEnchantments.map(l=>{const s=[...Array(l.max_level-l.min_level+1).keys()].map(o=>({text:Xe(o+1),value:o+1})).reverse(),i=l.incompatible.filter(o=>e.availableEnchantments.some(r=>r.id===o));return{...l,incompatible:i,levels:s,defaultLevel:l.is_curse||i.length>0?0:l.max_level}}).sort((l,s)=>s.max_level-l.max_level);R(()=>{e.setSelectedEnchantments(t().filter(l=>l.defaultLevel>0).map(l=>({id:l.id,level:l.defaultLevel})))});const n=(l,s)=>{e.setSelectedEnchantments(i=>{let o=i===void 0?[]:i.filter(u=>u.id!==s);const r=parseInt(l.currentTarget.value);if(r>0){o.push({level:r,id:s});const u=t().find(a=>a.id===s).incompatible;o=o.filter(a=>!u.includes(a.id))}return o})};return(()=>{const l=Kt.cloneNode(!0),s=l.firstChild,i=s.nextSibling,o=i.firstChild;return m(o,p(q,{get each(){return t()},children:r=>(()=>{const u=Xt.cloneNode(!0),a=u.firstChild,c=a.nextSibling,h=c.nextSibling,f=h.firstChild,g=f.firstChild;return m(a,p(j,{get when(){return r.incompatible.length>0},children:()=>(()=>{const b=jt.cloneNode(!0);return I(()=>W(b,"title",`Incompatible with ${r.incompatible.map(x=>t().find(C=>C.id===x).name).join(", ")}`)),b})()})),m(c,()=>r.name),f.addEventListener("change",b=>n(b,r.id)),m(f,p(q,{get each(){return r.levels},children:b=>(()=>{const x=Zt.cloneNode(!0);return m(x,()=>b.text),I(()=>x.selected=e.selectedEnchantments.some(C=>C.id===r.id&&C.level===b.value)),I(()=>x.value=b.value),x})()}),null),I(()=>g.selected=!e.selectedEnchantments.some(b=>b.id===r.id)),u})()})),l})()}const je="KGZ1bmN0aW9uKCl7InVzZSBzdHJpY3QiO2Z1bmN0aW9uIGsodCxlKXtjb25zdCBuPU1hdGgubWF4KHQud29yayxlLndvcmspLGw9dC53b3JrK2Uud29yaytlLnZhbHVlO3JldHVybntib29rOnQuYm9vayx2YWx1ZTp0LnZhbHVlK2UudmFsdWUsd29yazpuK24rMSxjb3N0OmwsdG90YWxDb3N0OnQudG90YWxDb3N0K2UudG90YWxDb3N0K2wsZnJvbTpbdCxlXX19ZnVuY3Rpb24gZCh0LGUsbil7aWYobi1lPT09MSlyZXR1cm5bdFtlXV07e2NvbnN0IGw9W107Zm9yKGxldCBvPWUrMTtvPG47bysrKXtjb25zdCByPWQodCxlLG8pLHM9ZCh0LG8sbik7Zm9yKGxldCBpPTA7aTxzLmxlbmd0aDtpKyspaWYoISFzW2ldLmJvb2spZm9yKGxldCB1PTA7dTxyLmxlbmd0aDt1KyspbC5wdXNoKGsoclt1XSxzW2ldKSl9cmV0dXJuIGx9fWZ1bmN0aW9uIEModCl7bGV0IGU9dC5sZW5ndGgsbj1bdC5zbGljZSgpXSxsPW5ldyBBcnJheShlKS5maWxsKDApLG89MSxyLHM7Zm9yKDtvPGU7KWxbb108bz8ocj1vJTImJmxbb10scz10W29dLHRbb109dFtyXSx0W3JdPXMsKytsW29dLG89MSx0W3QubGVuZ3RoLTFdLmJvb2smJm4ucHVzaCh0LnNsaWNlKCkpKToobFtvXT0wLCsrbyk7cmV0dXJuIG59ZnVuY3Rpb24gZyh0KXtpZih0PD0xKXJldHVybiAxO2xldCBlPTA7Zm9yKGxldCBuPTA7bjx0O24rKyllKz1nKG4pKmcodC1uLTEpO3JldHVybiBlfWZ1bmN0aW9uIHcodCxlKXtjb25zdCBuPURhdGUubm93KCk7bGV0IGw9bnVsbDtjb25zdCBvPUModCkscj0xMDAscz1vLmxlbmd0aC9yO2xldCBpPXM7Zm9yKGxldCBhPTA7YTxvLmxlbmd0aDthKyspe2E+aSYmZSE9PW51bGwmJihpKz1zLGUoYS9vLmxlbmd0aCkpO2NvbnN0IGg9ZChvW2FdLDAsdC5sZW5ndGgpO2xldCBjPW51bGw7Zm9yKGxldCBmPTA7ZjxoLmxlbmd0aDtmKyspKGM9PT1udWxsfHxoW2ZdLnRvdGFsQ29zdDxjLnRvdGFsQ29zdCkmJihjPWhbZl0pO2MhPT1udWxsJiYobD09PW51bGx8fGwudG90YWxDb3N0PmMudG90YWxDb3N0KSYmKGw9Yyl9cmV0dXJue3RpbWVUYWtlbk1pbGxpczpEYXRlLm5vdygpLW4sb3B0aW1hbENvbWJpbmF0aW9uOmwsY29tYmluYXRpb25zQ2hlY2tlZDpvLmxlbmd0aCpnKHQubGVuZ3RoKX19b25tZXNzYWdlPXQ9Pntjb25zdCBlPXQuZGF0YSxuPXcoZS5pdGVtcyxsPT57cG9zdE1lc3NhZ2Uoe3R5cGU6InByb2dyZXNzIixpZDplLmlkLHByb2dyZXNzOmx9KX0pO3Bvc3RNZXNzYWdlKHt0eXBlOiJyZXN1bHQiLGlkOmUuaWQscmVzdWx0Om59KX19KSgpOwo=",Oe=typeof window<"u"&&window.Blob&&new Blob([atob(je)],{type:"text/javascript;charset=utf-8"});function Mt(){const e=Oe&&(window.URL||window.webkitURL).createObjectURL(Oe);try{return e?new Worker(e):new Worker("data:application/javascript;base64,"+je)}finally{e&&(window.URL||window.webkitURL).revokeObjectURL(e)}}let Ee=0,H=null;async function zt(e,t,n,l,s){const i=t.map(o=>{const r=n.enchantments.find(c=>c.id===o.id),u=n.rarities.find(c=>c.name===r.rarity);let a=r.name;return o.level>1&&(a+=` ${Xe(o.level)}`),{book:!0,work:0,cost:0,totalCost:0,value:u.book_cost*o.level,from:[],base:{id:r.id,displayName:a}}});return i.push({book:!1,work:0,cost:0,totalCost:0,value:0,from:[],base:{id:e.id,displayName:e.name}}),H===null&&(H=new Mt),new Promise((o,r)=>{const u=Ee;Ee++,H.postMessage({id:u,items:i});const a=c=>{const h=c.data.type;h==="progress"&&l!==void 0?l(c.data.progress):h==="result"&&(o(c.data.result),H.removeEventListener("message",a))};H.addEventListener("message",a),s!==void 0&&s.addEventListener("abort",()=>{H.terminate(),H=null,r(s.reason)})})}const Ht=w('<button class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"></button>');function Ut(e){const[t,n]=_(0),[l,s]=_(null),i=()=>l()!==null?"cancel":"calculate",o=()=>{s(c=>(c!==null&&c.abortController.abort("cancelled"),null))},r=()=>{const c=new AbortController,h=zt(e.item,e.selectedEnchantments,e.enchantmentData,n,c.signal);h.then(f=>e.setResults(f)).catch(()=>{}).finally(()=>s(null)),n(0),s({promise:h,abortController:c,started:Date.now()})},u=()=>{i()==="calculate"?r():o()},a=()=>i()==="calculate"?"Calculate":`Cancel (${Math.round(t()*100)}%)`;return R(()=>{e.selectedEnchantments,e.setResults(null),o()}),(()=>{const c=Ht.cloneNode(!0);return c.$$click=u,m(c,a),c})()}Ge(["click"]);const Ft=w('<table class="border-collapse border-black"><caption class="font-semibold"> levels needed</caption><caption style="caption-side: bottom;" class="font-light text-sm">Checked <!> combinations in <!>ms</caption></table>'),Yt=w('<tr class="border border-black"><td class="border border-r-0 border-black px-2"></td></tr>'),Jt=w('<td class="border px-2 border-black font-semibold text-center"></td>');function Qt(e,t,n){let l=[...e,...t];for(let s=0;s<l.length;s++)s===0?l[s].comboColumns.push({depth:e.length+t.length,meta:{text:n.cost.toString(),color:"white"}}):l[s].comboColumns.push({depth:0});return l}function me(e){return e.from.length===0?[{name:e.base.displayName,comboColumns:[]}]:Qt(me(e.from[0]),me(e.from[1]),e)}function qt(e){const t=()=>{const n=me(e.combo.optimalCombination);return{table:n,columnCount:n[0].comboColumns.length}};return(()=>{const n=Ft.cloneNode(!0),l=n.firstChild,s=l.firstChild,i=l.nextSibling,o=i.firstChild,r=o.nextSibling,u=r.nextSibling,a=u.nextSibling;return a.nextSibling,m(l,()=>e.combo.optimalCombination.totalCost,s),m(n,p(q,{get each(){return t().table},children:c=>(()=>{const h=Yt.cloneNode(!0),f=h.firstChild;return m(f,()=>c.name),m(h,p(q,{get each(){return c.comboColumns.filter(g=>g.depth!==0)},children:g=>(()=>{const b=Jt.cloneNode(!0);return m(b,()=>g.meta.text),I(x=>{const C=g.meta.color,T=g.depth;return C!==x._v$&&b.style.setProperty("background-color",x._v$=C),T!==x._v$2&&W(b,"rowspan",x._v$2=T),x},{_v$:void 0,_v$2:void 0}),b})()}),null),I(()=>W(f,"colspan",t().columnCount-c.comboColumns.length+1)),h})()}),i),m(i,()=>e.combo.combinationsChecked.toLocaleString(),r),m(i,()=>e.combo.timeTakenMillis.toLocaleString(),a),n})()}const en=w('<div class="flex flex-col gap-6 items-center"></div>'),tn=w('<div class="p-5 text-center text-lg"><h1 class="font-bold mb-3">Anvil Calculator</h1><div class="flex flex-row justify-center gap-6 mb-3"></div></div>'),nn=w("<p>Loading versions...</p>"),ln=w("<p>Loading enchantment data...</p>");async function sn(e){return await(await fetch(e.url)).json()}async function rn(){return await(await fetch("https://techchrism.github.io/enchantment-json-exporter/versions.json")).json()}const on=()=>{const[e,t]=_(),[n,l]=_(),[s,i]=_([]),[o,r]=_(null),[u]=_e(rn),[a]=_e(e,sn),c=()=>n()===void 0||a()===void 0?[]:a().enchantments.filter(h=>h.secondary_items.some(f=>f.id===n().id)||a().categories.find(f=>f.name===h.category).items.some(f=>f.id===n().id));return(()=>{const h=tn.cloneNode(!0),f=h.firstChild,g=f.nextSibling;return m(g,p(j,{get when(){return!u.loading},get fallback(){return nn.cloneNode(!0)},get children(){return p(Rt,{get versions(){return u()},setSelectedVersion:t})}}),null),m(g,p(j,{get when(){return a()!==void 0},get fallback(){return ln.cloneNode(!0)},get children(){return p(Wt,{get enchantmentData(){return a()},setSelectedItem:l})}}),null),m(h,p(j,{get when(){return c().length>0},get children(){const b=en.cloneNode(!0);return m(b,p(Bt,{get availableEnchantments(){return c()},get selectedEnchantments(){return s()},setSelectedEnchantments:i}),null),m(b,p(Ut,{get item(){return n()},get selectedEnchantments(){return s()},get enchantmentData(){return a()},setResults:r}),null),m(b,p(j,{get when(){return o()!==null},get children(){return p(qt,{get combo(){return o()}})}}),null),b}}),null),h})()};ut(()=>p(on,{}),document.getElementById("root"));