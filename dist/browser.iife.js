(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #0000001a;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{height:auto;position:fixed;top:0;bottom:0;left:0;right:0;max-width:none!important;max-height:none!important}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var At=Object.defineProperty;var ht=c=>{throw TypeError(c)};var kt=(c,a,f)=>a in c?At(c,a,{enumerable:!0,configurable:!0,writable:!0,value:f}):c[a]=f;var et=(c,a,f)=>kt(c,typeof a!="symbol"?a+"":a,f),pt=(c,a,f)=>a.has(c)||ht("Cannot "+f);var o=(c,a,f)=>(pt(c,a,"read from private field"),f?f.call(c):a.get(c)),b=(c,a,f)=>a.has(c)?ht("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(c):a.set(c,f),l=(c,a,f,J)=>(pt(c,a,"write to private field"),J?J.call(c,f):a.set(c,f),f);(function(){"use strict";var p,S,g,$,F,y,A,E,P,W,k,_,U,G;const c=function(){return"xxxxxxxx-xxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})},a=function(t,e){if(!(t instanceof Node))throw new Error("first argument have to be a DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array, "+Object.prototype.toString.apply(e)+" given");if(e.length)for(let n=0,i=e.length;n<i;n++)t.className.indexOf(e[n])<0&&(t.className=(t.className+" "+e[n]).trim())}},f=function(t,e){if(!t instanceof Node)throw new Error("el arg must be DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array");if(e.length)for(let n=0,i=e.length;n<i;n++)for(;t.className.indexOf(e[n])>-1;)t.className=t.className.replace(e[n],"").trim()}},J=function(t,e=!1){if(typeof t!="string"){if(e)throw new Error("str argument must be a string, "+typeof t+" given");return null}try{return JSON.parse(t)}catch(n){if(e)throw n}return null},K=function(t){if(typeof t!="string")return t;var e=document.createElement("div");return e.innerHTML=t,e.firstChild.nodeValue},nt=function(t,e=!1){switch(typeof t){case"boolean":return t;case"string":return["true","yes","on","1"].indexOf(t.toLowerCase())>-1;case"number":return t===1}return e},it=function(t){return parseInt(t,10)},bt=function(t,e=null){return/^#[0-9A-F]{6}$/i.test(t)||/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t)?t:e},gt=function(t,e=null){if(typeof t=="string"&&t.length===0)try{return URL.parse(t),t}catch{return e}return e},ot=function(t,e){return e==null?null:t(e)},rt=function(t,e=null){if(typeof t=="string"&&t.length>0){let n=t.match(/^((\d+)(\.(\d)+)?)(.*)$/);return n?{value:parseFloat(n[1]),integer:parseInt(n[2],10),fraction:parseInt(n[4],10),unit:n[5]}:t}return e},yt=function(t,e){let n=String,i=null;if(arguments.length>2){const s={string:String,decimal:it,number:Number,boolean:nt,bool:nt,color:bt,url:gt};if(!s.hasOwnProperty(arguments[2]))throw new Error("3rd arg must be one of the following types: "+Object.keys(s).join(", "));n=s[arguments[2]],i=arguments[3]}else arguments.length===3&&(i=arguments[2]);if(t instanceof Element){if("getAttribute"in t)return ot(n,K(t.getAttribute(e)))??i;{let s=Array.prototype.slice.call(t.attributes);for(let r=0,u=s.length;r<u;r++)if(s[r].nodeName===e)return ot(n,K(s[r].nodeValue))??i}}return null},Q=function(t){return Object.prototype.toString.apply(t)==="[object Object]"},st=function(t){return typeof t=="string"&&t.length?t:Q(t)?Object.keys(t).filter(function(e){return t[e]!==!1}).join(" "):Array.isArray(t)?t.join(" "):null},at=function(){var t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=document.createElement("div");for(var n in t)if(e.style[n]!==void 0)return t[n];return null}(),X=function(t,e,n=null){let i={rpcId:c(),type:e};if(n){if(typeof n=="string"&&(n=J(n)),typeof n!="object")throw new Error("data argument must be an object, "+typeof n+" given");i=Object.assign({},n,i)}return t instanceof HTMLIFrameElement?(t.contentWindow.postMessage(JSON.stringify(i),"*"),i.rpcId):null},mt=1e3,q=function(t,e,n){return new Promise((i,s)=>{const r=t.style.display==="none"?"block":"none";let u=setTimeout(()=>{i()},mt);const h=function(){clearTimeout(u),t.removeEventListener(at,h),t.style.display=r,f(t,[e,n]),i()};t.addEventListener(at,h),a(t,e),setTimeout(function(){a(t,n)},40)})};let C={};window.addEventListener("message",function(t){var e={};if(t.data)if(typeof t.data=="string")try{e=JSON.parse(t.data)}catch{return}else e=t.data;e.type&&Array.isArray(C==null?void 0:C[e.type])&&C[e.type].length&&(C[e.type]=C[e.type].filter(n=>{try{return n(t,e)!==-1}catch(i){return console.error("Error in onMessage handler:",i),!0}}))});const ct=function(t,e){typeof t=="string"&&typeof e=="function"&&(C.hasOwnProperty(t)||(C[t]=[]),C[t].push(e))};function Y(...t){let e={};if(t.length===1)typeof t[0]=="object"&&Object.prototype.toString.call(t[0])==="[object Object]"&&(e=t[0]);else if(t.length>1&&typeof t[0]=="string"){e[t[0]]=[];let n=Array.prototype.slice.call(t,1);const i=n[n.length-1]instanceof HTMLIFrameElement?n.pop():null;if(n.length){for(let s=0,r=n.length;s<r;s++)if(typeof n[s]=="function"){if(i){const u=n[s];n[s]=function(h,d){if(i.contentWindow===h.source.window)return u(h,d)}}e[t[0]].push(n[s])}}}if(Object.keys(e).length){for(let n in e)if(typeof e[n]=="function")ct(n,e[n]);else if(typeof e[n]=="object"&&Object.prototype.toString.call(e[n])==="[object Array]")for(let i in e[n])ct(n,e[n][i])}}function wt(t,e,n,i,s){t instanceof Element||(t=document.body);const r=document.createElement("iframe");r.src=e,r.setAttribute("frameborder","0"),r.setAttribute("seamless","seamless"),r.style.width="100%",r.style.height="100%";let u=function(){},h=window.getComputedStyle(t);if(h.display==="none"){const d=h.visibility;u=function(){t.style.display="none",t.style.visibility=d},r.onerror=u,t.style.visibility="hidden",t.style.display="block"}return Y("getchat.loaded",function(){return u(),typeof i=="function"&&i(r),-1},r),t.appendChild(r),r}let L=[];const N=function(t){if(t.key==="Escape"){const e=L.pop();L.length===0&&document.removeEventListener("keydown",N),typeof e=="function"&&e()}},lt={bind:function(t){typeof t=="function"&&L.push(t),L.length===1&&document.addEventListener("keydown",N)},unbind:function(t){typeof t=="function"&&(L=L.filter(e=>e!==t)),L.length===0&&document.removeEventListener("keydown",N)}},w={button:"vt0z5W_button","button-animation-close":"vt0z5W_button-animation-close","button-animation-open":"vt0z5W_button-animation-open","button-animation-preclose":"vt0z5W_button-animation-preclose","button-animation-preopen":"vt0z5W_button-animation-preopen",chat:"vt0z5W_chat","chat-animation-close":"vt0z5W_chat-animation-close","chat-animation-open":"vt0z5W_chat-animation-open","chat-animation-preclose":"vt0z5W_chat-animation-preclose","chat-animation-preopen":"vt0z5W_chat-animation-preopen"};class ut{constructor({id:e,url:n,button:i,closeOnEscape:s=!0,autoload:r,autoopen:u=!1,autoopenDelay:h,onBeforeEmbedChat:d,onChatLoaded:R}){b(this,p);b(this,S);b(this,g);b(this,$);b(this,F,!0);b(this,y,-1);b(this,A,!1);b(this,E,!1);b(this,P);b(this,W);b(this,k);et(this,"open",()=>new Promise(async(e,n)=>{if(o(this,y)<1&&await this.load(),o(this,A)&&!o(this,E)){e();return}try{l(this,E,!0),o(this,p)&&await q(o(this,p),w["button-animation-preclose"],w["button-animation-close"]),await q(o(this,S),w["chat-animation-preopen"],w["chat-animation-open"]),X(o(this,g),"getchat.messenger.repaint"),l(this,E,!1),l(this,A,!0),X(o(this,g),"getchat.chat.input.focus"),o(this,F)&&lt.bind(this.close)}catch(i){n(i)}e()}));et(this,"close",()=>new Promise(async(e,n)=>{if(!o(this,A)&&!o(this,E)){e();return}o(this,F)&&lt.unbind(this.close);try{l(this,E,!0),await q(o(this,S),w["chat-animation-preclose"],w["chat-animation-close"]),o(this,p)&&await q(o(this,p),w["button-animation-preopen"],w["button-animation-open"]),l(this,E,!0),l(this,A,!1),e()}catch(i){n(i)}}));if(l(this,$,n),l(this,F,s),i instanceof Element&&l(this,p,i),typeof d!="function")throw new Error("onBeforeEmbedChat parameter must be a function, "+typeof d+" given");l(this,P,d);let v;u&&(u!=="once"||!window.localStorage.getItem("getchat_opened"))&&(v=isNaN(h)?this.open:()=>{setTimeout(this.open,h*1e3)}),l(this,W,()=>{l(this,y,1),v&&v(),typeof R=="function"&&R(),l(this,P,null),l(this,W,null)}),r&&this.load(!1),o(this,p)&&o(this,p).addEventListener("click",()=>{this.toggle()});{let B,j;const m=new Promise((x,V)=>{B=x,j=V});l(this,k,{promise:m,resolve:B,reject:j}),o(this,p)&&m.then(async()=>{var V;const x=await this.rpc("getchat.messenger.getUnreads");o(this,p).setBadge(((V=x==null?void 0:x.total)==null?void 0:V.messages)??0)})}}whenReady(){var e;return(e=o(this,k))!=null&&e.promise?o(this,k).promise:o(this,y)===1?Promise.resolve():new Promise}load(e=!0){return new Promise((n,i)=>{var s;try{if(o(this,y)>-1){n();return}l(this,y,0);const r=o(this,P).call(this);if(!(r instanceof Element))throw new Error("onBeforeEmbedChat must return an Element");l(this,S,r),e&&((s=o(this,p))==null||s.setState("loading")),l(this,g,wt(r,o(this,$),{},()=>{var u,h;o(this,W).call(this),(u=o(this,p))==null||u.setState("loaded"),l(this,y,1),n(),(h=o(this,k))==null||h.resolve(),l(this,k,null)}))}catch(r){i(r)}})}toggle(){return new Promise(async(e,n)=>{if(o(this,y)===0){e();return}o(this,A)?await this.close():await this.open(),e()})}addEventListener(e,n){this.whenReady().then(()=>{o(this,g)&&Y(e,n,o(this,g))})}getButton(){return o(this,p)}getChatNode(){return o(this,S)}getChatIframeNode(){return o(this,g)}rpc(e,n,i=5e3){return new Promise((s,r)=>{if(o(this,y)<1){r("Chat is not loaded");return}if(!o(this,g)){r("Chat iframe is not loaded");return}let u;const h=(R,v)=>(clearTimeout(u),s(v==null?void 0:v.data),-1),d=X(o(this,g),e,n);d&&(Y("response."+d,h,o(this,g)),i>0&&(u=setTimeout(()=>{r("Timeout")},i)))})}}p=new WeakMap,S=new WeakMap,g=new WeakMap,$=new WeakMap,F=new WeakMap,y=new WeakMap,A=new WeakMap,E=new WeakMap,P=new WeakMap,W=new WeakMap,k=new WeakMap;const ft=function(t,e,n){let i=yt(t,e,n);i&&t.style.setProperty(`--${e.replace("data-","")}`,i)},tt=["bgcolor","color","bdradius","bdwidth","bdcolor","badgebg","badgecolor"];class D extends HTMLElement{constructor(){super();b(this,_);b(this,U,!1);b(this,G);this.attachShadow({mode:"open"})}connectedCallback(){this.render(),tt.forEach(n=>{this.hasAttribute("data-"+n)&&ft(this,"data-"+n,"string")}),l(this,G,new MutationObserver(n=>{for(let i of n)if(i.type==="attributes"){let s=i.attributeName;s.startsWith("data-")&&(s=s.replace("data-","")),tt.includes(s.replace("data-",""))&&ft(this,i.attributeName,"string")}})),o(this,G).observe(this,{attributes:!0})}disconnectedCallback(){o(this,G).disconnect()}setChatInstance(n){!o(this,_)&&n instanceof ut&&l(this,_,n)}getChatInstance(){return o(this,_)}setState(n){n=n.toLowerCase(),n==="loading"?a(this,"loading"):(f(this,"loading"),n==="loaded"&&this.shadowRoot.querySelector(".loader").remove())}setBadge(n){n=it(n);const i=this.shadowRoot.querySelector(".unreads");i&&(n>0?(i.textContent=n,a(i,"unreads--visible")):f(i,"unreads--visible"))}setStyles(n){const i=this.shadowRoot.getElementById("dynamic-styles");let s="";for(const[r,u]of Object.entries(n))s+=`${r} { ${u} } `;i.textContent=s}render(){o(this,U)||(this.shadowRoot.innerHTML=`
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
                background: var(--badgebg, #F16843);
                border-radius: 8px;
                color: var(--badgecolor, #FFF);
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
            `}),l(this,U,!0))}}_=new WeakMap,U=new WeakMap,G=new WeakMap,D.supportedAttributes=tt,customElements.define("getchat-button",D);async function vt({uri:t,className:e,showUnread:n=!1,autoload:i=!1,autoopen:s=!1,autoopenDelay:r=5,closeOnEscape:u,color:h,insertButtonTo:d,buttonStyle:R,chatClassName:v,chatParent:B,chatStyle:j,chatNode:m,...x}){var dt;const V="GetChat".toLowerCase()+c();if(typeof d=="function"&&(d=d()),d instanceof Element){if(!document.body.contains(d))throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first")}else d=document.body;const T=document.createElement("getchat-button");if(T.id=V,e||(e=w.button),e=st(e),e&&a(T,e),Q(R)&&Object.assign(T.style,R),(dt=D.supportedAttributes)!=null&&dt.length)for(let M of D.supportedAttributes)x[M]&&T.setAttribute("data-"+M,x[M]);d.appendChild(T);const Z=new ut({url:K(t),button:T,autoload:i,autoopen:s,autoopenDelay:r,closeOnEscape:u,onBeforeEmbedChat:function(){let z=!0;return m instanceof Element||(m=document.createElement("div"),z=!1),m.className=w.chat,Q(j)?j=Object.assign({},j,{display:"none"}):j={display:"none"},Object.assign(m.style,j),v&&a(m,st(v)),(!z||!document.body.contains(m))&&(B instanceof Element||(B=document.body),B.appendChild(m)),m},onChatLoaded:function(){window.localStorage.setItem("getchat_opened","1");const M=window.innerHeight,z=Z.getChatNode();if(z){let{display:Ct,visibility:Et,position:Ot,top:I,right:Lt,bottom:O,left:St}=getComputedStyle(z);const H={display:Ct,visibility:Et};Object.assign(z.style,{display:"block",visibility:"hidden"}),requestAnimationFrame(()=>{Ot==="fixed"?(O=rt(O,"auto"),I=rt(I,"auto"),O!=="auto"&&(O!=null&&O.value)?I==="auto"&&(H.top=O.value+O.unit,H.height="auto"):I!=="auto"&&I.value&&O==="auto"&&(H.bottom=I.value+I.unit,H.height="auto")):H.height=`${Math.min(M-20,500)}px`,console.info("newStyle",H),Object.assign(z.style,H)})}}});return T.setChatInstance(Z),Z.addEventListener("getchat.close",function(M){Z.close()}),Z}(function(t){var n;if((n=t.GetChat)!=null&&n.isLoaded)return;t.GetChat={version:"0.1.2",createButton:vt};const e="GetChat".toLowerCase()+"onloaded";typeof t[e]=="function"&&t[e](t.GetChat),t.GetChat.isLoaded=!0,Object.freeze&&Object.freeze(t.GetChat)})(window)})();
