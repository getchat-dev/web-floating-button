(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #0000001a;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{max-width:none;height:auto;max-height:none;position:fixed;top:0;bottom:0;left:0;right:0}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
(function(c,a){typeof exports=="object"&&typeof module<"u"?module.exports=a():typeof define=="function"&&define.amd?define(a):(c=typeof globalThis<"u"?globalThis:c||self,c.GetChat=a())})(this,function(){"use strict";var nt=c=>{throw TypeError(c)};var it=(c,a,p)=>a.has(c)||nt("Cannot "+p);var o=(c,a,p)=>(it(c,a,"read from private field"),p?p.call(c):a.get(c)),h=(c,a,p)=>a.has(c)?nt("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(c):a.set(c,p),u=(c,a,p,_)=>(it(c,a,"write to private field"),_?_.call(c,p):a.set(c,p),p);var H,S,b,k,y,W,g,O,E,T,M,G,Z,x;const c=function(){return"xxxxxxxx-xxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})},a=function(t,e){if(!(t instanceof Node))throw new Error("first argument have to be a DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array, "+Object.prototype.toString.apply(e)+" given");if(e.length)for(let n=0,i=e.length;n<i;n++)t.className.indexOf(e[n])<0&&(t.className=(t.className+" "+e[n]).trim())}},p=function(t,e){if(!t instanceof Node)throw new Error("el arg must be DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array");if(e.length)for(let n=0,i=e.length;n<i;n++)for(;t.className.indexOf(e[n])>-1;)t.className=t.className.replace(e[n],"").trim()}},_=function(t,e=!1){if(typeof t!="string"){if(e)throw new Error("str argument must be a string, "+typeof t+" given");return null}try{return JSON.parse(t)}catch(n){if(e)throw n}return null},B=function(t){if(typeof t!="string")return t;var e=document.createElement("div");return e.innerHTML=t,e.firstChild.nodeValue},U=function(t,e=!1){switch(typeof t){case"boolean":return t;case"string":return["true","yes","on","1"].indexOf(t.toLowerCase())>-1;case"number":return t===1}return e},q=function(t){return parseInt(t,10)},ot=function(t,e=null){return/^#[0-9A-F]{6}$/i.test(t)||/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t)?t:e},K=function(t,e){return e==null?null:t(e)},rt=function(t,e){let n=String,i=null;if(arguments.length>2){const s={string:String,decimal:q,number:Number,boolean:U,bool:U,color:ot};if(!s.hasOwnProperty(arguments[2]))throw new Error("3rd arg must be one of the following types: "+Object.keys(s).join(", "));n=s[arguments[2]],i=arguments[3]}else arguments.length===3&&(i=arguments[2]);if(t instanceof Element){if("getAttribute"in t)return K(n,B(t.getAttribute(e)))??i;{let s=Array.prototype.slice.call(t.attributes);for(let r=0,l=s.length;r<l;r++)if(s[r].nodeName===e)return K(n,B(s[r].nodeValue))??i}}return null},J=function(t){return Object.prototype.toString.apply(t)==="[object Object]"},Q=function(t){return typeof t=="string"&&t.length?t:J(t)?Object.keys(t).filter(function(e){return t[e]!==!1}).join(" "):Array.isArray(t)?t.join(" "):null},X=function(){var t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=document.createElement("div");for(var n in t)if(e.style[n]!==void 0)return t[n];return null}(),st=function(t,e,n=null){const i={rpcId:c(),type:e};if(n){if(typeof n=="string"&&(n=_(n)),typeof n!="object")throw new Error("data argument must be an object, "+typeof n+" given");i=Object.assign({},n,i)}return t instanceof HTMLIFrameElement?(t.contentWindow.postMessage(JSON.stringify(i),"*"),i.rpcId):null},at=1e3,F=function(t,e,n,i){return new Promise((s,r)=>{const l=t.style.display==="none"?"block":"none";let d=setTimeout(()=>{s()},at);const f=function(){clearTimeout(d),t.removeEventListener(X,f),t.style.display=l,p(t,[e,n]),s()};t.addEventListener(X,f),a(t,e),setTimeout(function(){a(t,n)},40)})},Y=function(t,e,n){let i=rt(t,e,n);i&&t.style.setProperty(`--${e}`,i)},N=["bgcolor","color","bdradius","bdwidth","bdcolor"];class lt extends HTMLElement{constructor(){super();h(this,H,!1);h(this,S);this.attachShadow({mode:"open"})}connectedCallback(){this.render(),N.forEach(n=>{Y(this,n,"string")}),u(this,S,new MutationObserver(n=>{for(let i of n)i.type==="attributes"&&N.includes(i.attributeName)&&Y(this,i.attributeName,"string")})),o(this,S).observe(this,{attributes:!0})}disconnectedCallback(){o(this,S).disconnect()}setState(n){n=n.toLowerCase(),n==="loading"?a(this,"loading"):(p(this,"loading"),n==="loaded"&&this.shadowRoot.querySelector(".loader").remove())}setBadge(n){n=q(n);const i=this.shadowRoot.querySelector(".unreads");i&&(n>0?(i.textContent=n,a(i,"unreads--visible")):p(i,"unreads--visible"))}setStyles(n){const i=this.shadowRoot.getElementById("dynamic-styles");let s="";for(const[r,l]of Object.entries(n))s+=`${r} { ${l} } `;i.textContent=s}render(){o(this,H)||(this.shadowRoot.innerHTML=`
            <style id="dynamic-styles"></style>
            <button class="button">
                <div class="button-icon">
                    <svg class="button-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none">
                        <path fill="inherit"
                            d="M7 14h6a.968.968 0 0 0 .713-.288A.964.964 0 0 0 14 13a.968.968 0 0 0-.288-.713A.964.964 0 0 0 13 12H7a.968.968 0 0 0-.713.288A.964.964 0 0 0 6 13c0 .283.096.521.288.713.192.192.43.288.712.287Zm0-3h10a.968.968 0 0 0 .713-.288A.964.964 0 0 0 18 10a.968.968 0 0 0-.288-.713A.964.964 0 0 0 17 9H7a.968.968 0 0 0-.713.288A.964.964 0 0 0 6 10c0 .283.096.521.288.713.192.192.43.288.712.287Zm0-3h10a.968.968 0 0 0 .713-.288A.964.964 0 0 0 18 7a.968.968 0 0 0-.288-.713A.964.964 0 0 0 17 6H7a.968.968 0 0 0-.713.288A.964.964 0 0 0 6 7c0 .283.096.521.288.713.192.192.43.288.712.287ZM6 18l-2.3 2.3c-.317.317-.68.388-1.088.213-.409-.175-.613-.487-.612-.938V4c0-.55.196-1.021.588-1.413A1.922 1.922 0 0 1 4 2h16c.55 0 1.021.196 1.413.588.392.392.588.863.587 1.412v12c0 .55-.196 1.021-.588 1.413A1.922 1.922 0 0 1 20 18H6Zm-.85-2H20V4H4v13.125L5.15 16Z" />
                    </svg>
                </div>
                <div class="unreads"></div>
                <div class="loader"></div>
            </button>
        `,this.setStyles({":host":`
                background: none;
                -webkit-font-smoothing: antialiased;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: pointer;
            `,":host(.loading)":`
                cursor: wait;
            `,".button":`
                position: relative;
                display: block;
                margin: 0;
                padding: 0;
                width: 100%;
                background: var(--bgcolor, #000);
                border: 0;
                border-radius: var(--bdradius, 50%);
                border-width: var(--bdwidth, 0);
                border-color: var(--bdcolor, currentColor);
                outline: none;
                cursor: inherit;

                -webkit-transition: background .3s ease;
                -moz-transition: background .3s ease;
                -o-transition: background .3s ease;
                transition: background .3s ease;
            `,".button:before":`
                display: block;
                padding-top: 100%;
                content: '';
            `,".button-icon":`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                fill-rule: nonzero;
                fill: var(--color, #FFF);
                transition: opacity .3s ease;
            `,".button-icon > svg":`
                width: 100%;
            `,".unreads":`
                position: absolute;
                top: 0;
                right: 0;
                transform: translate(50%, -50%) scale(0.95);
                display: block;
                box-sizing: border-box;
                padding: 0 4px;
                min-width: 16px;
                height: 16px;
                line-height: 16px;
                background: #F16843;
                border-radius: 8px;
                color: #FFF;
                opacity: 0;
                transition: opacity .15s ease, transform .15s ease;
            `,".unreads--visible":`
                transform: translate(50%, -50%) scale(1);
                opacity: 1;
            `,".loader":`
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                opacity: 0;
                display: block;
                width: 80%;
                height: 80%;
                border: .2rem solid rgba(255, 255, 255, .7);
                border-top-color: currentColor;
                border-radius: 50%;
                animation: spin 1s infinite;
                transition: opacity .3s ease;
            `,":host(.loading) .button-icon":`
                opacity: 0;
            `,":host(.loading) .loader":`
                opacity: 1;
            `,"@keyframes spin":`
                0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                    transform: translate(-50%, -50%) rotate(360deg);
                }
            `}),u(this,H,!0))}}H=new WeakMap,S=new WeakMap,customElements.define("getchat-button",lt);let C={};window.addEventListener("message",function(t){var e={};if(t.data)if(typeof t.data=="string")try{e=JSON.parse(t.data)}catch{return}else e=t.data;e.type&&Array.isArray(C==null?void 0:C[e.type])&&C[e.type].length&&(C[e.type]=C[e.type].filter(n=>{try{return n(t,e)!==-1}catch(i){return console.error("Error in onMessage handler:",i),!0}}))});const tt=function(t,e){typeof t=="string"&&typeof e=="function"&&(C.hasOwnProperty(t)||(C[t]=[]),C[t].push(e))};function $(...t){let e={};if(t.length===1)typeof t[0]=="object"&&Object.prototype.toString.call(t[0])==="[object Object]"&&(e=t[0]);else if(t.length>1&&typeof t[0]=="string"){e[t[0]]=[];let n=Array.prototype.slice.call(t,1);const i=n[n.length-1]instanceof HTMLIFrameElement?n.pop():null;if(n.length){for(let s=0,r=n.length;s<r;s++)if(typeof n[s]=="function"){if(i){const l=n[s];n[s]=function(d,f){if(i.contentWindow===d.source.window)return l(d,f)}}e[t[0]].push(n[s])}}}if(Object.keys(e).length){for(let n in e)if(typeof e[n]=="function")tt(n,e[n]);else if(typeof e[n]=="object"&&Object.prototype.toString.call(e[n])==="[object Array]")for(let i in e[n])tt(n,e[n][i])}}function ct(t,e,n,i,s){t instanceof Element||(t=document.body);const r=document.createElement("iframe");r.src=e,r.setAttribute("frameborder","0"),r.setAttribute("seamless","seamless"),r.style.width="100%",r.style.height="100%";let l=function(){},d=window.getComputedStyle(t);if(d.display==="none"){const f=d.visibility;l=function(){t.style.display="none",t.style.visibility=f},r.onerror=l,t.style.visibility="hidden",t.style.display="block"}return $("GetChat.Loaded",function(){return l(),typeof i=="function"&&i(r),-1},r),t.appendChild(r),r}const m={button:"vt0z5W_button","button-animation-close":"vt0z5W_button-animation-close","button-animation-open":"vt0z5W_button-animation-open","button-animation-preclose":"vt0z5W_button-animation-preclose","button-animation-preopen":"vt0z5W_button-animation-preopen",chat:"vt0z5W_chat","chat-animation-close":"vt0z5W_chat-animation-close","chat-animation-open":"vt0z5W_chat-animation-open","chat-animation-preclose":"vt0z5W_chat-animation-preclose","chat-animation-preopen":"vt0z5W_chat-animation-preopen"};class ut{constructor({id:e,url:n,button:i,autoload:s,autostart:r=!1,autostartDelay:l,onBeforeEmbedChat:d,onChatLoaded:f,onCloseChat:R}){h(this,b);h(this,k);h(this,y);h(this,W);h(this,g,-1);h(this,O,!1);h(this,E,!1);h(this,T);h(this,M);h(this,G);h(this,Z);h(this,x);if(u(this,W,n),i instanceof Element&&u(this,b,i),typeof d!="function")throw new Error("onBeforeEmbedChat parameter must be a function, "+typeof d+" given");u(this,T,d);let w;r&&(r!=="once"||!window.localStorage.getItem("getchat_opened"))&&(w=isNaN(l)?this.open:()=>{setTimeout(this.open,l*1e3)}),u(this,M,()=>{u(this,g,1),w&&w(),typeof f=="function"&&f(),u(this,T,null),u(this,M,null)}),s&&this.load(!1),o(this,b)&&o(this,b).addEventListener("click",()=>{this.toggle()});{let L,A;const v=new Promise((et,D)=>{L=et,A=D});u(this,x,{promise:v,resolve:L,reject:A})}}whenReady(){var e;return(e=o(this,x))!=null&&e.promise?o(this,x).promise:o(this,g)===1?Promise.resolve():new Promise}load(e=!0){return new Promise((n,i)=>{var s;try{if(o(this,g)>-1){n();return}u(this,g,0);const r=o(this,T).call(this);if(!(r instanceof Element))throw new Error("onBeforeEmbedChat must return an Element");u(this,k,r),e&&((s=o(this,b))==null||s.setState("loading")),u(this,y,ct(r,o(this,W),{},()=>{var l,d;o(this,M).call(this),(l=o(this,b))==null||l.setState("loaded"),u(this,g,1),n(),(d=o(this,x))==null||d.resolve(),u(this,x,null)}))}catch(r){i(r)}})}toggle(){return new Promise(async(e,n)=>{if(o(this,g)===0){e();return}o(this,O)?await this.close():await this.open(),e()})}open(){return new Promise(async(e,n)=>{if(o(this,g)<1&&await this.load(),o(this,O)&&!o(this,E)){e();return}try{u(this,E,!0),o(this,b)&&await F(o(this,b),m["button-animation-preclose"],m["button-animation-close"]),await F(o(this,k),m["chat-animation-preopen"],m["chat-animation-open"],()=>{o(this,y).contentWindow.postMessage(JSON.stringify({type:"getchat.messenger.repaint"}),"*")}),u(this,E,!1),u(this,O,!0),o(this,y).contentWindow.postMessage(JSON.stringify({type:"getchat.chat.input.focus"}),"*")}catch(i){n(i)}e()})}close(){return new Promise(async(e,n)=>{if(!o(this,O)&&!o(this,E)){e();return}try{u(this,E,!0),await F(o(this,k),m["chat-animation-preclose"],m["chat-animation-close"]),o(this,b)&&await F(o(this,b),m["button-animation-preopen"],m["button-animation-open"]),u(this,E,!0),u(this,O,!1),e()}catch(i){n(i)}})}addEventListener(e,n){this.whenReady().then(()=>{o(this,y)&&$(e,n,o(this,y))})}getButton(){return o(this,b)}getChatNode(){return o(this,k)}getChatIframeNode(){return o(this,y)}rpc(e,n,i=5e3){return new Promise((s,r)=>{if(o(this,g)<1){r("Chat is not loaded");return}if(!o(this,y)){r("Chat iframe is not loaded");return}let l;const d=(R,w)=>(clearTimeout(l),s(w==null?void 0:w.data),-1),f=st(o(this,y),e,n);f&&($("response."+f,d,o(this,y)),i>0&&(l=setTimeout(()=>{r("Timeout")},i)))})}}b=new WeakMap,k=new WeakMap,y=new WeakMap,W=new WeakMap,g=new WeakMap,O=new WeakMap,E=new WeakMap,T=new WeakMap,M=new WeakMap,G=new WeakMap,Z=new WeakMap,x=new WeakMap;async function ft({className:t,showUnread:e=!1,autoload:n=!1,autostart:i=!1,autostartDelay:s=5,bgcolor:r,bdradius:l,color:d,insertButtonTo:f,buttonStyle:R,chatClassName:w,chatParent:L,chatStyle:A,chatNode:v,node:et,uri:D}){const dt="GetChat".toLowerCase()+c();if(typeof f=="function"&&(f=f()),f instanceof Element){if(!document.body.contains(f))throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first")}else f=document.body;const j=document.createElement("getchat-button");j.id=dt,t||(t=m.button),t=Q(t),t&&a(j,t),J(R)&&Object.assign(j.style,R),r&&j.setAttribute("bgcolor",r),d&&j.setAttribute("color",d),l&&j.setAttribute("bdradius",l),f.appendChild(j);const V=new ut({url:B(D),button:j,autoload:n,autostart:i,autostartDelay:s,onBeforeEmbedChat:function(){let P=!0;return v instanceof Element||(v=document.createElement("div"),P=!1),v.className=m.chat,J(A)?A=Object.assign({},A,{display:"none"}):A={display:"none"},Object.assign(v.style,A),w&&a(v,Q(w)),(!P||!document.body.contains(v))&&(L instanceof Element||(L=document.body),L.appendChild(v)),v},onChatLoaded:function(){window.localStorage.setItem("getchat_opened","1");const I=window.innerHeight;let P="200px";const z=V.getChatNode();if(z){const{display:ht,visibility:pt,position:bt}=getComputedStyle(z);Object.assign(z.style,{display:"block",visibility:"hidden"}),bt==="fixed"?P=Math.min(I-(I-z.offsetTop)-20,500):P=Math.min(I-20,500),z.style.height=`${P}px`,Object.assign(z.style,{display:ht,visibility:pt})}}});return V.addEventListener("GetChat.Close",function(I){V.close()}),V}return{version:"0.1.0",createButton:ft}});
