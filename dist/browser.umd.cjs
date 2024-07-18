(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #0000001a;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{max-width:none;height:auto;max-height:none;position:fixed;top:0;bottom:0;left:0;right:0}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
(function(l){typeof define=="function"&&define.amd?define(l):l()})(function(){"use strict";var nt=l=>{throw TypeError(l)};var it=(l,f,p)=>f.has(l)||nt("Cannot "+p);var o=(l,f,p)=>(it(l,f,"read from private field"),p?p.call(l):f.get(l)),h=(l,f,p)=>f.has(l)?nt("Cannot add the same private member more than once"):f instanceof WeakSet?f.add(l):f.set(l,p),c=(l,f,p,I)=>(it(l,f,"write to private field"),I?I.call(l,p):f.set(l,p),p);var H,S,b,k,y,W,g,O,E,L,T,$,Z,A;const l=function(){return"xxxxxxxx-xxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})},f=function(t,e){if(!(t instanceof Node))throw new Error("first argument have to be a DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array, "+Object.prototype.toString.apply(e)+" given");if(e.length)for(let n=0,i=e.length;n<i;n++)t.className.indexOf(e[n])<0&&(t.className=(t.className+" "+e[n]).trim())}},p=function(t,e){if(!t instanceof Node)throw new Error("el arg must be DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array");if(e.length)for(let n=0,i=e.length;n<i;n++)for(;t.className.indexOf(e[n])>-1;)t.className=t.className.replace(e[n],"").trim()}},I=function(t,e=!1){if(typeof t!="string"){if(e)throw new Error("str argument must be a string, "+typeof t+" given");return null}try{return JSON.parse(t)}catch(n){if(e)throw n}return null},V=function(t){if(typeof t!="string")return t;var e=document.createElement("div");return e.innerHTML=t,e.firstChild.nodeValue},U=function(t,e=!1){switch(typeof t){case"boolean":return t;case"string":return["true","yes","on","1"].indexOf(t.toLowerCase())>-1;case"number":return t===1}return e},q=function(t){return parseInt(t,10)},ot=function(t,e=null){return/^#[0-9A-F]{6}$/i.test(t)||/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t)?t:e},K=function(t,e){return e==null?null:t(e)},rt=function(t,e){let n=String,i=null;if(arguments.length>2){const s={string:String,decimal:q,number:Number,boolean:U,bool:U,color:ot};if(!s.hasOwnProperty(arguments[2]))throw new Error("3rd arg must be one of the following types: "+Object.keys(s).join(", "));n=s[arguments[2]],i=arguments[3]}else arguments.length===3&&(i=arguments[2]);if(t instanceof Element){if("getAttribute"in t)return K(n,V(t.getAttribute(e)))??i;{let s=Array.prototype.slice.call(t.attributes);for(let r=0,a=s.length;r<a;r++)if(s[r].nodeName===e)return K(n,V(s[r].nodeValue))??i}}return null},B=function(t){return Object.prototype.toString.apply(t)==="[object Object]"},Q=function(t){return typeof t=="string"&&t.length?t:B(t)?Object.keys(t).filter(function(e){return t[e]!==!1}).join(" "):Array.isArray(t)?t.join(" "):null},X=function(){var t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=document.createElement("div");for(var n in t)if(e.style[n]!==void 0)return t[n];return null}(),st=function(t,e,n=null){const i={rpcId:l(),type:e};if(n){if(typeof n=="string"&&(n=I(n)),typeof n!="object")throw new Error("data argument must be an object, "+typeof n+" given");i=Object.assign({},n,i)}return t instanceof HTMLIFrameElement?(t.contentWindow.postMessage(JSON.stringify(i),"*"),i.rpcId):null},at=1e3,_=function(t,e,n,i){return new Promise((s,r)=>{const a=t.style.display==="none"?"block":"none";let d=setTimeout(()=>{s()},at);const u=function(){clearTimeout(d),t.removeEventListener(X,u),t.style.display=a,p(t,[e,n]),s()};t.addEventListener(X,u),f(t,e),setTimeout(function(){f(t,n)},40)})},Y=function(t,e,n){let i=rt(t,e,n);i&&t.style.setProperty(`--${e}`,i)},N=["bgcolor","color","bdradius","bdwidth","bdcolor"];class ct extends HTMLElement{constructor(){super();h(this,H,!1);h(this,S);this.attachShadow({mode:"open"})}connectedCallback(){this.render(),N.forEach(n=>{Y(this,n,"string")}),c(this,S,new MutationObserver(n=>{for(let i of n)i.type==="attributes"&&N.includes(i.attributeName)&&Y(this,i.attributeName,"string")})),o(this,S).observe(this,{attributes:!0})}disconnectedCallback(){o(this,S).disconnect()}setState(n){n=n.toLowerCase(),n==="loading"?f(this,"loading"):(p(this,"loading"),n==="loaded"&&this.shadowRoot.querySelector(".loader").remove())}setBadge(n){n=q(n);const i=this.shadowRoot.querySelector(".unreads");i&&(n>0?(i.textContent=n,f(i,"unreads--visible")):p(i,"unreads--visible"))}setStyles(n){const i=this.shadowRoot.getElementById("dynamic-styles");let s="";for(const[r,a]of Object.entries(n))s+=`${r} { ${a} } `;i.textContent=s}render(){o(this,H)||(this.shadowRoot.innerHTML=`
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
            `}),c(this,H,!0))}}H=new WeakMap,S=new WeakMap,customElements.define("getchat-button",ct);let C={};window.addEventListener("message",function(t){var e={};if(t.data)if(typeof t.data=="string")try{e=JSON.parse(t.data)}catch{return}else e=t.data;e.type&&Array.isArray(C==null?void 0:C[e.type])&&C[e.type].length&&(C[e.type]=C[e.type].filter(n=>{try{return n(t,e)!==-1}catch(i){return console.error("Error in onMessage handler:",i),!0}}))});const tt=function(t,e){typeof t=="string"&&typeof e=="function"&&(C.hasOwnProperty(t)||(C[t]=[]),C[t].push(e))};function J(...t){let e={};if(t.length===1)typeof t[0]=="object"&&Object.prototype.toString.call(t[0])==="[object Object]"&&(e=t[0]);else if(t.length>1&&typeof t[0]=="string"){e[t[0]]=[];let n=Array.prototype.slice.call(t,1);const i=n[n.length-1]instanceof HTMLIFrameElement?n.pop():null;if(n.length){for(let s=0,r=n.length;s<r;s++)if(typeof n[s]=="function"){if(i){const a=n[s];n[s]=function(d,u){if(i.contentWindow===d.source.window)return a(d,u)}}e[t[0]].push(n[s])}}}if(Object.keys(e).length){for(let n in e)if(typeof e[n]=="function")tt(n,e[n]);else if(typeof e[n]=="object"&&Object.prototype.toString.call(e[n])==="[object Array]")for(let i in e[n])tt(n,e[n][i])}}function lt(t,e,n,i,s){t instanceof Element||(t=document.body);const r=document.createElement("iframe");r.src=e,r.setAttribute("frameborder","0"),r.setAttribute("seamless","seamless"),r.style.width="100%",r.style.height="100%";let a=function(){},d=window.getComputedStyle(t);if(d.display==="none"){const u=d.visibility;a=function(){t.style.display="none",t.style.visibility=u},r.onerror=a,t.style.visibility="hidden",t.style.display="block"}return J("GetChat.Loaded",function(){return a(),typeof i=="function"&&i(r),-1},r),t.appendChild(r),r}const m={button:"vt0z5W_button","button-animation-close":"vt0z5W_button-animation-close","button-animation-open":"vt0z5W_button-animation-open","button-animation-preclose":"vt0z5W_button-animation-preclose","button-animation-preopen":"vt0z5W_button-animation-preopen",chat:"vt0z5W_chat","chat-animation-close":"vt0z5W_chat-animation-close","chat-animation-open":"vt0z5W_chat-animation-open","chat-animation-preclose":"vt0z5W_chat-animation-preclose","chat-animation-preopen":"vt0z5W_chat-animation-preopen"};class ut{constructor({id:e,url:n,button:i,autoload:s,autostart:r=!1,autostartDelay:a,onBeforeEmbedChat:d,onChatLoaded:u,onCloseChat:G}){h(this,b);h(this,k);h(this,y);h(this,W);h(this,g,-1);h(this,O,!1);h(this,E,!1);h(this,L);h(this,T);h(this,$);h(this,Z);h(this,A);if(c(this,W,n),i instanceof Element&&c(this,b,i),typeof d!="function")throw new Error("onBeforeEmbedChat parameter must be a function, "+typeof d+" given");c(this,L,d);let w;r&&(r!=="once"||!window.localStorage.getItem("getchat_opened"))&&(w=isNaN(a)?this.open:()=>{setTimeout(this.open,a*1e3)}),c(this,T,()=>{c(this,g,1),w&&w(),typeof u=="function"&&u(),c(this,L,null),c(this,T,null)}),s&&this.load(!1),o(this,b)&&o(this,b).addEventListener("click",()=>{this.toggle()});{let M,j;const v=new Promise((et,D)=>{M=et,j=D});c(this,A,{promise:v,resolve:M,reject:j})}}whenReady(){var e;return(e=o(this,A))!=null&&e.promise?o(this,A).promise:o(this,g)===1?Promise.resolve():new Promise}load(e=!0){return new Promise((n,i)=>{var s;try{if(o(this,g)>-1){n();return}c(this,g,0);const r=o(this,L).call(this);if(!(r instanceof Element))throw new Error("onBeforeEmbedChat must return an Element");c(this,k,r),e&&((s=o(this,b))==null||s.setState("loading")),c(this,y,lt(r,o(this,W),{},()=>{var a,d;o(this,T).call(this),(a=o(this,b))==null||a.setState("loaded"),c(this,g,1),n(),(d=o(this,A))==null||d.resolve(),c(this,A,null)}))}catch(r){i(r)}})}toggle(){return new Promise(async(e,n)=>{if(o(this,g)===0){e();return}o(this,O)?await this.close():await this.open(),e()})}open(){return new Promise(async(e,n)=>{if(o(this,g)<1&&await this.load(),o(this,O)&&!o(this,E)){e();return}try{c(this,E,!0),o(this,b)&&await _(o(this,b),m["button-animation-preclose"],m["button-animation-close"]),await _(o(this,k),m["chat-animation-preopen"],m["chat-animation-open"],()=>{o(this,y).contentWindow.postMessage(JSON.stringify({type:"getchat.messenger.repaint"}),"*")}),c(this,E,!1),c(this,O,!0),o(this,y).contentWindow.postMessage(JSON.stringify({type:"getchat.chat.input.focus"}),"*")}catch(i){n(i)}e()})}close(){return new Promise(async(e,n)=>{if(!o(this,O)&&!o(this,E)){e();return}try{c(this,E,!0),await _(o(this,k),m["chat-animation-preclose"],m["chat-animation-close"]),o(this,b)&&await _(o(this,b),m["button-animation-preopen"],m["button-animation-open"]),c(this,E,!0),c(this,O,!1),e()}catch(i){n(i)}})}addEventListener(e,n){this.whenReady().then(()=>{o(this,y)&&J(e,n,o(this,y))})}getButton(){return o(this,b)}getChatNode(){return o(this,k)}getChatIframeNode(){return o(this,y)}rpc(e,n,i=5e3){return new Promise((s,r)=>{if(o(this,g)<1){r("Chat is not loaded");return}if(!o(this,y)){r("Chat iframe is not loaded");return}let a;const d=(G,w)=>(clearTimeout(a),s(w==null?void 0:w.data),-1),u=st(o(this,y),e,n);u&&(J("response."+u,d,o(this,y)),i>0&&(a=setTimeout(()=>{r("Timeout")},i)))})}}b=new WeakMap,k=new WeakMap,y=new WeakMap,W=new WeakMap,g=new WeakMap,O=new WeakMap,E=new WeakMap,L=new WeakMap,T=new WeakMap,$=new WeakMap,Z=new WeakMap,A=new WeakMap;async function ft({className:t,showUnread:e=!1,autoload:n=!1,autostart:i=!1,autostartDelay:s=5,bgcolor:r,bdradius:a,color:d,insertButtonTo:u,buttonStyle:G,chatClassName:w,chatParent:M,chatStyle:j,chatNode:v,node:et,uri:D}){const dt="GetChat".toLowerCase()+l();if(typeof u=="function"&&(u=u()),u instanceof Element){if(!document.body.contains(u))throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first")}else u=document.body;const x=document.createElement("getchat-button");x.id=dt,t||(t=m.button),t=Q(t),t&&f(x,t),B(G)&&Object.assign(x.style,G),r&&x.setAttribute("bgcolor",r),d&&x.setAttribute("color",d),a&&x.setAttribute("bdradius",a),u.appendChild(x);const R=new ut({url:V(D),button:x,autoload:n,autostart:i,autostartDelay:s,onBeforeEmbedChat:function(){let z=!0;return v instanceof Element||(v=document.createElement("div"),z=!1),v.className=m.chat,B(j)?j=Object.assign({},j,{display:"none"}):j={display:"none"},Object.assign(v.style,j),w&&f(v,Q(w)),(!z||!document.body.contains(v))&&(M instanceof Element||(M=document.body),M.appendChild(v)),v},onChatLoaded:function(){window.localStorage.setItem("getchat_opened","1");const F=window.innerHeight;let z="200px";const P=R.getChatNode();if(P){const{display:ht,visibility:pt,position:bt}=getComputedStyle(P);Object.assign(P.style,{display:"block",visibility:"hidden"}),bt==="fixed"?z=Math.min(F-(F-P.offsetTop)-20,500):z=Math.min(F-20,500),P.style.height=`${z}px`,Object.assign(P.style,{display:ht,visibility:pt})}}});return R.addEventListener("GetChat.Close",function(F){R.close()}),R}(function(t){var n;if((n=t.GetChat)!=null&&n.isLoaded)return;t.GetChat={version:"0.1.0",createButton:ft};const e="GetChat".toLowerCase()+"onloaded";typeof t[e]=="function"&&t[e](t.GetChat),t.GetChat.isLoaded=!0,Object.freeze&&Object.freeze(t.GetChat)})(window)});
