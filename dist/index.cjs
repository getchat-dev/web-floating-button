(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #e6e6e6;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{border:0;border-top:1px solid #e6e6e6;height:auto;position:fixed;top:0;bottom:0;left:0;right:0;max-width:none!important;max-height:none!important}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
"use strict";var xt=Object.defineProperty;var ct=t=>{throw TypeError(t)};var kt=(t,e,n)=>e in t?xt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n;var tt=(t,e,n)=>kt(t,typeof e!="symbol"?e+"":e,n),ut=(t,e,n)=>e.has(t)||ct("Cannot "+n);var o=(t,e,n)=>(ut(t,e,"read from private field"),n?n.call(t):e.get(t)),c=(t,e,n)=>e.has(t)?ct("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,n),a=(t,e,n,i)=>(ut(t,e,"write to private field"),i?i.call(t,n):e.set(t,n),n);const wt=function(){return"xxxxxxxx-xxxx".replace(/[xy]/g,function(t){var e=Math.random()*16|0,n=t==="x"?e:e&3|8;return n.toString(16)})},U=function(t,e){if(!(t instanceof Node))throw new Error("first argument have to be a DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array, "+Object.prototype.toString.apply(e)+" given");if(e.length)for(let n=0,i=e.length;n<i;n++)t.className.indexOf(e[n])<0&&(t.className=(t.className+" "+e[n]).trim())}},nt=function(t,e){if(!t instanceof Node)throw new Error("el arg must be DOM Node");if(e!=null){if(typeof e=="string"&&(e=e.trim().replace(/\s{2,}/," ").split(" ")),Object.prototype.toString.apply(e)!=="[object Array]")throw new Error("classNames arg must be string or array");if(e.length)for(let n=0,i=e.length;n<i;n++)for(;t.className.indexOf(e[n])>-1;)t.className=t.className.replace(e[n],"").trim()}},jt=function(t,e=!1){if(typeof t!="string"){if(e)throw new Error("str argument must be a string, "+typeof t+" given");return null}try{return JSON.parse(t)}catch(n){if(e)throw n}return null},it=function(t){if(typeof t!="string")return t;var e=document.createElement("div");return e.innerHTML=t,e.firstChild.nodeValue},ft=function(t,e=!1){switch(typeof t){case"boolean":return t;case"string":return["true","yes","on","1"].indexOf(t.toLowerCase())>-1;case"number":return t===1}return e},vt=function(t){return parseInt(t,10)},St=function(t,e=null){return/^#[0-9A-F]{6}$/i.test(t)||/^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t)?t:e},Tt=function(t,e=null){if(typeof t=="string"&&t.length===0)try{return URL.parse(t),t}catch{return e}return e},dt=function(t,e){return e==null?null:t(e)},ht=function(t,e=null){if(typeof t=="string"&&t.length>0){let n=t.match(/^((\d+)(\.(\d)+)?)(.*)$/);return n?{value:parseFloat(n[1]),integer:parseInt(n[2],10),fraction:parseInt(n[4],10),unit:n[5]}:t}return e},Lt=function(t,e){let n=String,i=null;if(arguments.length>2){const s={string:String,decimal:vt,number:Number,boolean:ft,bool:ft,color:St,url:Tt};if(!s.hasOwnProperty(arguments[2]))throw new Error("3rd arg must be one of the following types: "+Object.keys(s).join(", "));n=s[arguments[2]],i=arguments[3]}else arguments.length===3&&(i=arguments[2]);if(t instanceof Element){if("getAttribute"in t)return dt(n,it(t.getAttribute(e)))??i;{let s=Array.prototype.slice.call(t.attributes);for(let r=0,l=s.length;r<l;r++)if(s[r].nodeName===e)return dt(n,it(s[r].nodeValue))??i}}return null},ot=function(t){return Object.prototype.toString.apply(t)==="[object Object]"},pt=function(t){return typeof t=="string"&&t.length?t:ot(t)?Object.keys(t).filter(function(e){return t[e]!==!1}).join(" "):Array.isArray(t)?t.join(" "):null},bt=function(){var t={transition:"transitionend",OTransition:"oTransitionEnd",MozTransition:"transitionend",WebkitTransition:"webkitTransitionEnd"},e=document.createElement("div");for(var n in t)if(e.style[n]!==void 0)return t[n];return null}(),et=function(t,e,n=null){let i={rpcId:wt(),type:e};if(n){if(typeof n=="string"&&(n=jt(n)),typeof n!="object")throw new Error("data argument must be an object, "+typeof n+" given");i=Object.assign({},n,i)}return t instanceof HTMLIFrameElement?(t.contentWindow.postMessage(JSON.stringify(i),"*"),i.rpcId):null},Mt=1e3,X=function(t,e,n){return new Promise((i,s)=>{const r=t.style.display==="none"?"block":"none";let l=setTimeout(()=>{i()},Mt);const u=function(){clearTimeout(l),t.removeEventListener(bt,u),t.style.display=r,nt(t,[e,n]),i()};t.addEventListener(bt,u),U(t,e),setTimeout(function(){U(t,n)},40)})};let E={};window.addEventListener("message",function(t){var e={};if(t.data)if(typeof t.data=="string")try{e=JSON.parse(t.data)}catch{return}else e=t.data;e.type&&Array.isArray(E==null?void 0:E[e.type])&&E[e.type].length&&(E[e.type]=E[e.type].filter(n=>{try{return n(t,e)!==-1}catch(i){return console.error("Error in onMessage handler:",i),!0}}))});const yt=function(t,e){typeof t=="string"&&typeof e=="function"&&(E.hasOwnProperty(t)||(E[t]=[]),E[t].push(e))};function rt(...t){let e={};if(t.length===1)typeof t[0]=="object"&&Object.prototype.toString.call(t[0])==="[object Object]"&&(e=t[0]);else if(t.length>1&&typeof t[0]=="string"){e[t[0]]=[];let n=Array.prototype.slice.call(t,1);const i=n[n.length-1]instanceof HTMLIFrameElement?n.pop():null;if(n.length){for(let s=0,r=n.length;s<r;s++)if(typeof n[s]=="function"){if(i){const l=n[s];n[s]=function(u,d){if(i.contentWindow===u.source.window)return l(u,d)}}e[t[0]].push(n[s])}}}if(Object.keys(e).length){for(let n in e)if(typeof e[n]=="function")yt(n,e[n]);else if(typeof e[n]=="object"&&Object.prototype.toString.call(e[n])==="[object Array]")for(let i in e[n])yt(n,e[n][i])}}function It(t,e,n,i,s){t instanceof Element||(t=document.body);const r=document.createElement("iframe");r.src=e,r.setAttribute("frameborder","0"),r.setAttribute("seamless","seamless"),r.style.width="100%",r.style.height="100%";let l=function(){},u=window.getComputedStyle(t);if(u.display==="none"){const d=u.visibility;l=function(){t.style.display="none",t.style.visibility=d},r.onerror=l,t.style.visibility="hidden",t.style.display="block"}return rt("getchat.loaded",function(){return l(),typeof i=="function"&&i(r),-1},r),t.appendChild(r),r}let M=[];const st=function(t){if(t.key==="Escape"){const e=M.pop();M.length===0&&document.removeEventListener("keydown",st),typeof e=="function"&&e()}},gt={bind:function(t){typeof t=="function"&&M.push(t),M.length===1&&document.addEventListener("keydown",st)},unbind:function(t){typeof t=="function"&&(M=M.filter(e=>e!==t)),M.length===0&&document.removeEventListener("keydown",st)}},Ht="vt0z5W_button",Pt="vt0z5W_chat",m={button:Ht,"button-animation-close":"vt0z5W_button-animation-close","button-animation-open":"vt0z5W_button-animation-open","button-animation-preclose":"vt0z5W_button-animation-preclose","button-animation-preopen":"vt0z5W_button-animation-preopen",chat:Pt,"chat-animation-close":"vt0z5W_chat-animation-close","chat-animation-open":"vt0z5W_chat-animation-open","chat-animation-preclose":"vt0z5W_chat-animation-preclose","chat-animation-preopen":"vt0z5W_chat-animation-preopen"};var f,I,p,D,P,y,x,C,z,F,W,_,B,R,k;class Et{constructor({id:e,url:n,button:i,closeOnEscape:s=!0,autoload:r,autoopen:l=!1,autoopenDelay:u,onBeforeEmbedChat:d,onChatLoaded:b,onBeforeOpen:O,onAfterOpen:Y,onBeforeClose:Z,onAfterClose:j}){c(this,f);c(this,I);c(this,p);c(this,D);c(this,P,!0);c(this,y,-1);c(this,x,!1);c(this,C,!1);c(this,z);c(this,F);c(this,W);c(this,_);c(this,B);c(this,R);c(this,k);tt(this,"open",()=>new Promise(async(e,n)=>{if(o(this,y)<1&&await this.load(),o(this,x)&&!o(this,C)){e();return}try{a(this,C,!0),typeof o(this,W)=="function"&&await o(this,W).call(this),o(this,f)&&await X(o(this,f),m["button-animation-preclose"],m["button-animation-close"]),await X(o(this,I),m["chat-animation-preopen"],m["chat-animation-open"]),typeof o(this,_)=="function"&&await o(this,_).call(this),et(o(this,p),"getchat.messenger.repaint"),a(this,C,!1),a(this,x,!0),et(o(this,p),"getchat.chat.input.focus"),o(this,P)&&gt.bind(this.close)}catch(i){n(i)}e()}));tt(this,"close",()=>new Promise(async(e,n)=>{if(!o(this,x)&&!o(this,C)){e();return}o(this,P)&&gt.unbind(this.close);try{a(this,C,!0),typeof o(this,B)=="function"&&await o(this,B).call(this),await X(o(this,I),m["chat-animation-preclose"],m["chat-animation-close"]),o(this,f)&&await X(o(this,f),m["button-animation-preopen"],m["button-animation-open"]),a(this,C,!0),a(this,x,!1),typeof o(this,R)=="function"&&await o(this,R).call(this),e()}catch(i){n(i)}}));if(a(this,D,n),a(this,P,s),i instanceof Element&&a(this,f,i),typeof d!="function")throw new Error("onBeforeEmbedChat parameter must be a function, "+typeof d+" given");a(this,z,d);let h;l&&(l!=="once"||!window.localStorage.getItem("getchat_opened"))&&(h=isNaN(u)?this.open:()=>{setTimeout(this.open,u*1e3)}),a(this,F,()=>{a(this,y,1),h&&h(),typeof b=="function"&&b(),a(this,z,null),a(this,F,null)}),r&&this.load(!1),a(this,W,O),a(this,_,Y),a(this,B,Z),a(this,R,j),o(this,f)&&o(this,f).addEventListener("click",()=>{this.toggle()});{let J,K;const g=new Promise((w,A)=>{J=w,K=A});a(this,k,{promise:g,resolve:J,reject:K}),o(this,f)&&g.then(async()=>{var A;const w=await this.rpc("getchat.messenger.getUnreads");o(this,f).setBadge(((A=w==null?void 0:w.total)==null?void 0:A.messages)??0)})}}whenReady(){var e;return(e=o(this,k))!=null&&e.promise?o(this,k).promise:o(this,y)===1?Promise.resolve():new Promise}load(e=!0){return new Promise((n,i)=>{var s;try{if(o(this,y)>-1){n();return}a(this,y,0);const r=o(this,z).call(this);if(!(r instanceof Element))throw new Error("onBeforeEmbedChat must return an Element");a(this,I,r),e&&((s=o(this,f))==null||s.setState("loading")),a(this,p,It(r,o(this,D),{},()=>{var l,u;o(this,F).call(this),(l=o(this,f))==null||l.setState("loaded"),a(this,y,1),n(),(u=o(this,k))==null||u.resolve(),a(this,k,null)}))}catch(r){i(r)}})}toggle(){return new Promise(async(e,n)=>{if(o(this,y)===0){e();return}o(this,x)?await this.close():await this.open(),e()})}addEventListener(e,n){this.whenReady().then(()=>{o(this,p)&&rt(e,n,o(this,p))})}getButton(){return o(this,f)}getChatNode(){return o(this,I)}getChatIframeNode(){return o(this,p)}rpc(e,n,i=5e3){return new Promise((s,r)=>{if(o(this,y)<1){r("Chat is not loaded");return}if(!o(this,p)){r("Chat iframe is not loaded");return}let l;const u=(b,O)=>(clearTimeout(l),s(O==null?void 0:O.data),-1),d=et(o(this,p),e,n);d&&(rt("response."+d,u,o(this,p)),i>0&&(l=setTimeout(()=>{r("Timeout")},i)))})}}f=new WeakMap,I=new WeakMap,p=new WeakMap,D=new WeakMap,P=new WeakMap,y=new WeakMap,x=new WeakMap,C=new WeakMap,z=new WeakMap,F=new WeakMap,W=new WeakMap,_=new WeakMap,B=new WeakMap,R=new WeakMap,k=new WeakMap;const mt=function(t,e,n){let i=Lt(t,e,n);i&&t.style.setProperty(`--${e.replace("data-","")}`,i)},at=["bgcolor","color","bdradius","bdwidth","bdcolor","badgebg","badgecolor"];var V,G,$;class N extends HTMLElement{constructor(){super();c(this,V);c(this,G,!1);c(this,$);this.attachShadow({mode:"open"})}connectedCallback(){this.render(),at.forEach(n=>{this.hasAttribute("data-"+n)&&mt(this,"data-"+n,"string")}),a(this,$,new MutationObserver(n=>{for(let i of n)if(i.type==="attributes"){let s=i.attributeName;s.startsWith("data-")&&(s=s.replace("data-","")),at.includes(s.replace("data-",""))&&mt(this,i.attributeName,"string")}})),o(this,$).observe(this,{attributes:!0})}disconnectedCallback(){o(this,$).disconnect()}setChatInstance(n){!o(this,V)&&n instanceof Et&&a(this,V,n)}getChatInstance(){return o(this,V)}setState(n){n=n.toLowerCase(),n==="loading"?U(this,"loading"):(nt(this,"loading"),n==="loaded"&&this.shadowRoot.querySelector(".loader").remove())}setBadge(n){n=vt(n);const i=this.shadowRoot.querySelector(".unreads");i&&(n>0?(i.textContent=n,U(i,"unreads--visible")):nt(i,"unreads--visible"))}setStyles(n){const i=this.shadowRoot.getElementById("dynamic-styles");let s="";for(const[r,l]of Object.entries(n))s+=`${r} { ${l} } `;i.textContent=s}render(){o(this,G)||(this.shadowRoot.innerHTML=`
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
            `}),a(this,G,!0))}}V=new WeakMap,G=new WeakMap,$=new WeakMap;N.supportedAttributes=at;customElements.define("getchat-button",N);async function zt({uri:t,className:e,showUnread:n=!1,autoload:i=!1,autoopen:s=!1,autoopenDelay:r=5,closeOnEscape:l,color:u,mobileModeMaxWidth:d=460,insertButtonTo:b,buttonStyle:O,chatClassName:Y,chatParent:Z,chatStyle:j,chatNode:h,...J}){var lt;const K="GetChat".toLowerCase()+wt();if(typeof b=="function"&&(b=b()),b instanceof Element){if(!document.body.contains(b))throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first")}else b=document.body;const g=document.createElement("getchat-button");if(g.id=K,e||(e=m.button),e=pt(e),e&&U(g,e),ot(O)&&Object.assign(g.style,O),(lt=N.supportedAttributes)!=null&&lt.length)for(let S of N.supportedAttributes)J[S]&&g.setAttribute("data-"+S,J[S]);b.appendChild(g);let w,A,Q=!1;const q=new Et({url:it(t),button:g,autoload:i,autoopen:s,autoopenDelay:r,closeOnEscape:l,onBeforeEmbedChat:function(){let T=!0;return h instanceof Element||(h=document.createElement("div"),T=!1),h.className=m.chat,ot(j)?j=Object.assign({},j,{display:"none"}):j={display:"none"},Object.assign(h.style,j),Y&&U(h,pt(Y)),(!T||!document.body.contains(h))&&(Z instanceof Element||(Z=document.body),Z.appendChild(h)),h},onChatLoaded:function(){window.localStorage.setItem("getchat_opened","1");const S=window.innerHeight,T=q.getChatNode();if(T){let{display:Ct,visibility:Ot,position:At,top:L,right:Wt,bottom:v,left:_t}=getComputedStyle(T);const H={display:Ct,visibility:Ot};Object.assign(T.style,{display:"block",visibility:"hidden"}),requestAnimationFrame(()=>{At==="fixed"?(v=ht(v,"auto"),L=ht(L,"auto"),v!=="auto"&&(v!=null&&v.value)?L==="auto"&&(H.top=v.value+v.unit,H.height="auto"):L!=="auto"&&L.value&&v==="auto"&&(H.bottom=L.value+L.unit,H.height="auto")):H.height=`${Math.min(S-20,500)}px`,Object.assign(T.style,H)})}},onBeforeOpen:function(){window.innerWidth<=d&&(w=window.scrollY||window.pageYOffset,A=getComputedStyle(document.body).position,Q=!0)},onAfterOpen:function(){Q&&(window.scrollTo({top:0,left:0,behavior:"instant"}),document.body.style.position="fixed")},onBeforeClose:function(){Q&&(A&&(document.body.style.position=A),w&&window.scrollTo({top:w,left:0,behavior:"instant"})),Q=!1}});return g.setChatInstance(q),q.addEventListener("getchat.close",function(S){q.close()}),q}const Ft={version:"0.1.3",createButton:zt};module.exports=Ft;
