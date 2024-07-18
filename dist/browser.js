(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #0000001a;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{max-width:none;height:auto;max-height:none;position:fixed;top:0;bottom:0;left:0;right:0}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var D = (t) => {
  throw TypeError(t);
};
var U = (t, e, n) => e.has(t) || D("Cannot " + n);
var o = (t, e, n) => (U(t, e, "read from private field"), n ? n.call(t) : e.get(t)), f = (t, e, n) => e.has(t) ? D("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), l = (t, e, n, i) => (U(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
const et = function() {
  return "xxxxxxxx-xxxx".replace(/[xy]/g, function(t) {
    var e = Math.random() * 16 | 0, n = t === "x" ? e : e & 3 | 8;
    return n.toString(16);
  });
}, M = function(t, e) {
  if (!(t instanceof Node))
    throw new Error("first argument have to be a DOM Node");
  if (e != null) {
    if (typeof e == "string" && (e = e.trim().replace(/\s{2,}/, " ").split(" ")), Object.prototype.toString.apply(e) !== "[object Array]")
      throw new Error("classNames arg must be string or array, " + Object.prototype.toString.apply(e) + " given");
    if (e.length)
      for (let n = 0, i = e.length; n < i; n++)
        t.className.indexOf(e[n]) < 0 && (t.className = (t.className + " " + e[n]).trim());
  }
}, G = function(t, e) {
  if (!t instanceof Node)
    throw new Error("el arg must be DOM Node");
  if (e != null) {
    if (typeof e == "string" && (e = e.trim().replace(/\s{2,}/, " ").split(" ")), Object.prototype.toString.apply(e) !== "[object Array]")
      throw new Error("classNames arg must be string or array");
    if (e.length)
      for (let n = 0, i = e.length; n < i; n++)
        for (; t.className.indexOf(e[n]) > -1; )
          t.className = t.className.replace(e[n], "").trim();
  }
}, at = function(t, e = !1) {
  if (typeof t != "string") {
    if (e)
      throw new Error("str argument must be a string, " + typeof t + " given");
    return null;
  }
  try {
    return JSON.parse(t);
  } catch (n) {
    if (e)
      throw n;
  }
  return null;
}, R = function(t) {
  if (typeof t != "string")
    return t;
  var e = document.createElement("div");
  return e.innerHTML = t, e.firstChild.nodeValue;
}, q = function(t, e = !1) {
  switch (typeof t) {
    case "boolean":
      return t;
    case "string":
      return ["true", "yes", "on", "1"].indexOf(t.toLowerCase()) > -1;
    case "number":
      return t === 1;
  }
  return e;
}, nt = function(t) {
  return parseInt(t, 10);
}, lt = function(t, e = null) {
  return /^#[0-9A-F]{6}$/i.test(t) || /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t) ? t : e;
}, K = function(t, e) {
  return e == null ? null : t(e);
}, ct = function(t, e) {
  let n = String, i = null;
  if (arguments.length > 2) {
    const s = { string: String, decimal: nt, number: Number, boolean: q, bool: q, color: lt };
    if (!s.hasOwnProperty(arguments[2]))
      throw new Error("3rd arg must be one of the following types: " + Object.keys(s).join(", "));
    n = s[arguments[2]], i = arguments[3];
  } else arguments.length === 3 && (i = arguments[2]);
  if (t instanceof Element) {
    if ("getAttribute" in t)
      return K(n, R(t.getAttribute(e))) ?? i;
    {
      let s = Array.prototype.slice.call(t.attributes);
      for (let r = 0, a = s.length; r < a; r++)
        if (s[r].nodeName === e)
          return K(n, R(s[r].nodeValue)) ?? i;
    }
  }
  return null;
}, V = function(t) {
  return Object.prototype.toString.apply(t) === "[object Object]";
}, Q = function(t) {
  return typeof t == "string" && t.length ? t : V(t) ? Object.keys(t).filter(function(e) {
    return t[e] !== !1;
  }).join(" ") : Array.isArray(t) ? t.join(" ") : null;
}, X = function() {
  var t = {
    transition: "transitionend",
    OTransition: "oTransitionEnd",
    MozTransition: "transitionend",
    WebkitTransition: "webkitTransitionEnd"
  }, e = document.createElement("div");
  for (var n in t)
    if (e.style[n] !== void 0)
      return t[n];
  return null;
}(), ut = function(t, e, n = null) {
  const i = {
    rpcId: et(),
    type: e
  };
  if (n) {
    if (typeof n == "string" && (n = at(n)), typeof n != "object")
      throw new Error("data argument must be an object, " + typeof n + " given");
    i = Object.assign({}, n, i);
  }
  return t instanceof HTMLIFrameElement ? (t.contentWindow.postMessage(JSON.stringify(i), "*"), i.rpcId) : null;
}, ft = 1e3, I = function(t, e, n, i) {
  return new Promise((s, r) => {
    const a = t.style.display === "none" ? "block" : "none";
    let u = setTimeout(() => {
      s();
    }, ft);
    const c = function() {
      clearTimeout(u), t.removeEventListener(X, c), t.style.display = a, G(t, [
        e,
        n
      ]), s();
    };
    t.addEventListener(
      X,
      c
    ), M(t, e), setTimeout(function() {
      M(t, n);
    }, 40);
  });
}, Y = function(t, e, n) {
  let i = ct(t, e, n);
  i && t.style.setProperty(`--${e}`, i);
}, N = ["bgcolor", "color", "bdradius", "bdwidth", "bdcolor"];
var P, S;
class dt extends HTMLElement {
  constructor() {
    super();
    f(this, P, !1);
    f(this, S);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), N.forEach((n) => {
      Y(this, n, "string");
    }), l(this, S, new MutationObserver((n) => {
      for (let i of n)
        i.type === "attributes" && N.includes(i.attributeName) && Y(this, i.attributeName, "string");
    })), o(this, S).observe(this, { attributes: !0 });
  }
  disconnectedCallback() {
    o(this, S).disconnect();
  }
  setState(n) {
    n = n.toLowerCase(), n === "loading" ? M(this, "loading") : (G(this, "loading"), n === "loaded" && this.shadowRoot.querySelector(".loader").remove());
  }
  setBadge(n) {
    n = nt(n);
    const i = this.shadowRoot.querySelector(".unreads");
    i && (n > 0 ? (i.textContent = n, M(i, "unreads--visible")) : G(i, "unreads--visible"));
  }
  setStyles(n) {
    const i = this.shadowRoot.getElementById("dynamic-styles");
    let s = "";
    for (const [r, a] of Object.entries(n))
      s += `${r} { ${a} } `;
    i.textContent = s;
  }
  render() {
    o(this, P) || (this.shadowRoot.innerHTML = `
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
        `, this.setStyles({
      ":host": `
                background: none;
                -webkit-font-smoothing: antialiased;
                -webkit-user-select: none;
                -moz-user-select: none;
                -ms-user-select: none;
                user-select: none;
                cursor: pointer;
            `,
      ":host(.loading)": `
                cursor: wait;
            `,
      ".button": `
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
            `,
      ".button:before": `
                display: block;
                padding-top: 100%;
                content: '';
            `,
      ".button-icon": `
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                width: 50%;
                fill-rule: nonzero;
                fill: var(--color, #FFF);
                transition: opacity .3s ease;
            `,
      ".button-icon > svg": `
                width: 100%;
            `,
      ".unreads": `
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
            `,
      ".unreads--visible": `
                transform: translate(50%, -50%) scale(1);
                opacity: 1;
            `,
      ".loader": `
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
            `,
      ":host(.loading) .button-icon": `
                opacity: 0;
            `,
      ":host(.loading) .loader": `
                opacity: 1;
            `,
      "@keyframes spin": `
                0% {
                    transform: translate(-50%, -50%) rotate(0deg);
                }
                100% {
                    transform: translate(-50%, -50%) rotate(360deg);
                }
            `
    }), l(this, P, !0));
  }
}
P = new WeakMap(), S = new WeakMap();
customElements.define("getchat-button", dt);
let m = {};
window.addEventListener("message", function(t) {
  var e = {};
  if (t.data)
    if (typeof t.data == "string")
      try {
        e = JSON.parse(t.data);
      } catch {
        return;
      }
    else
      e = t.data;
  e.type && Array.isArray(m == null ? void 0 : m[e.type]) && m[e.type].length && (m[e.type] = m[e.type].filter((n) => {
    try {
      return n(t, e) !== -1;
    } catch (i) {
      return console.error("Error in onMessage handler:", i), !0;
    }
  }));
});
const tt = function(t, e) {
  typeof t == "string" && typeof e == "function" && (m.hasOwnProperty(t) || (m[t] = []), m[t].push(e));
};
function B(...t) {
  let e = {};
  if (t.length === 1)
    typeof t[0] == "object" && Object.prototype.toString.call(t[0]) === "[object Object]" && (e = t[0]);
  else if (t.length > 1 && typeof t[0] == "string") {
    e[t[0]] = [];
    let n = Array.prototype.slice.call(t, 1);
    const i = n[n.length - 1] instanceof HTMLIFrameElement ? n.pop() : null;
    if (n.length) {
      for (let s = 0, r = n.length; s < r; s++)
        if (typeof n[s] == "function") {
          if (i) {
            const a = n[s];
            n[s] = function(u, c) {
              if (i.contentWindow === u.source.window)
                return a(u, c);
            };
          }
          e[t[0]].push(n[s]);
        }
    }
  }
  if (Object.keys(e).length) {
    for (let n in e)
      if (typeof e[n] == "function")
        tt(n, e[n]);
      else if (typeof e[n] == "object" && Object.prototype.toString.call(e[n]) === "[object Array]")
        for (let i in e[n])
          tt(n, e[n][i]);
  }
}
function ht(t, e, n, i, s) {
  t instanceof Element || (t = document.body);
  const r = document.createElement("iframe");
  r.src = e, r.setAttribute("frameborder", "0"), r.setAttribute("seamless", "seamless"), r.style.width = "100%", r.style.height = "100%";
  let a = function() {
  }, u = window.getComputedStyle(t);
  if (u.display === "none") {
    const c = u.visibility;
    a = function() {
      t.style.display = "none", t.style.visibility = c;
    }, r.onerror = a, t.style.visibility = "hidden", t.style.display = "block";
  }
  return B("GetChat.Loaded", function() {
    return a(), typeof i == "function" && i(r), -1;
  }, r), t.appendChild(r), r;
}
const pt = "vt0z5W_button", bt = "vt0z5W_chat", g = {
  button: pt,
  "button-animation-close": "vt0z5W_button-animation-close",
  "button-animation-open": "vt0z5W_button-animation-open",
  "button-animation-preclose": "vt0z5W_button-animation-preclose",
  "button-animation-preopen": "vt0z5W_button-animation-preopen",
  chat: bt,
  "chat-animation-close": "vt0z5W_chat-animation-close",
  "chat-animation-open": "vt0z5W_chat-animation-open",
  "chat-animation-preclose": "vt0z5W_chat-animation-preclose",
  "chat-animation-preopen": "vt0z5W_chat-animation-preopen"
};
var d, A, h, H, p, E, w, L, T, J, $, O;
class yt {
  constructor({ id: e, url: n, button: i, autoload: s, autostart: r = !1, autostartDelay: a, onBeforeEmbedChat: u, onChatLoaded: c, onCloseChat: W }) {
    f(this, d);
    f(this, A);
    f(this, h);
    f(this, H);
    f(this, p, -1);
    f(this, E, !1);
    f(this, w, !1);
    f(this, L);
    f(this, T);
    f(this, J);
    f(this, $);
    f(this, O);
    if (l(this, H, n), i instanceof Element && l(this, d, i), typeof u != "function")
      throw new Error("onBeforeEmbedChat parameter must be a function, " + typeof u + " given");
    l(this, L, u);
    let b;
    r && (r !== "once" || !window.localStorage.getItem("getchat_opened")) && (b = isNaN(a) ? this.open : () => {
      setTimeout(this.open, a * 1e3);
    }), l(this, T, () => {
      l(this, p, 1), b && b(), typeof c == "function" && c(), l(this, L, null), l(this, T, null);
    }), s && this.load(!1), o(this, d) && o(this, d).addEventListener("click", () => {
      this.toggle();
    });
    {
      let j, v;
      const y = new Promise((Z, _) => {
        j = Z, v = _;
      });
      l(this, O, { promise: y, resolve: j, reject: v });
    }
  }
  whenReady() {
    var e;
    return (e = o(this, O)) != null && e.promise ? o(this, O).promise : o(this, p) === 1 ? Promise.resolve() : new Promise();
  }
  load(e = !0) {
    return new Promise((n, i) => {
      var s;
      try {
        if (o(this, p) > -1) {
          n();
          return;
        }
        l(this, p, 0);
        const r = o(this, L).call(this);
        if (!(r instanceof Element))
          throw new Error("onBeforeEmbedChat must return an Element");
        l(this, A, r), e && ((s = o(this, d)) == null || s.setState("loading")), l(this, h, ht(r, o(this, H), {}, () => {
          var a, u;
          o(this, T).call(this), (a = o(this, d)) == null || a.setState("loaded"), l(this, p, 1), n(), (u = o(this, O)) == null || u.resolve(), l(this, O, null);
        }));
      } catch (r) {
        i(r);
      }
    });
  }
  toggle() {
    return new Promise(async (e, n) => {
      if (o(this, p) === 0) {
        e();
        return;
      }
      o(this, E) ? await this.close() : await this.open(), e();
    });
  }
  open() {
    return new Promise(async (e, n) => {
      if (o(this, p) < 1 && await this.load(), o(this, E) && !o(this, w)) {
        e();
        return;
      }
      try {
        l(this, w, !0), o(this, d) && await I(
          o(this, d),
          g["button-animation-preclose"],
          g["button-animation-close"]
        ), await I(
          o(this, A),
          g["chat-animation-preopen"],
          g["chat-animation-open"],
          () => {
            o(this, h).contentWindow.postMessage(
              JSON.stringify({
                type: "getchat.messenger.repaint"
              }),
              "*"
            );
          }
        ), l(this, w, !1), l(this, E, !0), o(this, h).contentWindow.postMessage(
          JSON.stringify({
            type: "getchat.chat.input.focus"
          }),
          "*"
        );
      } catch (i) {
        n(i);
      }
      e();
    });
  }
  close() {
    return new Promise(async (e, n) => {
      if (!o(this, E) && !o(this, w)) {
        e();
        return;
      }
      try {
        l(this, w, !0), await I(
          o(this, A),
          g["chat-animation-preclose"],
          g["chat-animation-close"]
        ), o(this, d) && await I(
          o(this, d),
          g["button-animation-preopen"],
          g["button-animation-open"]
        ), l(this, w, !0), l(this, E, !1), e();
      } catch (i) {
        n(i);
      }
    });
  }
  addEventListener(e, n) {
    this.whenReady().then(() => {
      o(this, h) && B(e, n, o(this, h));
    });
  }
  getButton() {
    return o(this, d);
  }
  getChatNode() {
    return o(this, A);
  }
  getChatIframeNode() {
    return o(this, h);
  }
  rpc(e, n, i = 5e3) {
    return new Promise((s, r) => {
      if (o(this, p) < 1) {
        r("Chat is not loaded");
        return;
      }
      if (!o(this, h)) {
        r("Chat iframe is not loaded");
        return;
      }
      let a;
      const u = (W, b) => (clearTimeout(a), s(b == null ? void 0 : b.data), -1), c = ut(o(this, h), e, n);
      c && (B("response." + c, u, o(this, h)), i > 0 && (a = setTimeout(() => {
        r("Timeout");
      }, i)));
    });
  }
}
d = new WeakMap(), A = new WeakMap(), h = new WeakMap(), H = new WeakMap(), p = new WeakMap(), E = new WeakMap(), w = new WeakMap(), L = new WeakMap(), T = new WeakMap(), J = new WeakMap(), $ = new WeakMap(), O = new WeakMap();
async function gt({
  className: t,
  showUnread: e = !1,
  autoload: n = !1,
  autostart: i = !1,
  autostartDelay: s = 5,
  bgcolor: r,
  bdradius: a,
  color: u,
  insertButtonTo: c,
  buttonStyle: W,
  chatClassName: b,
  chatParent: j,
  chatStyle: v,
  chatNode: y,
  node: Z,
  uri: _
}) {
  const it = "GetChat".toLowerCase() + et();
  if (typeof c == "function" && (c = c()), c instanceof Element) {
    if (!document.body.contains(c))
      throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first");
  } else
    c = document.body;
  const C = document.createElement("getchat-button");
  C.id = it, t || (t = g.button), t = Q(t), t && M(C, t), V(W) && Object.assign(C.style, W), r && C.setAttribute("bgcolor", r), u && C.setAttribute("color", u), a && C.setAttribute("bdradius", a), c.appendChild(C);
  const F = new yt({
    url: R(_),
    button: C,
    autoload: n,
    autostart: i,
    autostartDelay: s,
    onBeforeEmbedChat: function() {
      let x = !0;
      return y instanceof Element || (y = document.createElement("div"), x = !1), y.className = g.chat, V(v) ? v = Object.assign({}, v, { display: "none" }) : v = { display: "none" }, Object.assign(y.style, v), b && M(y, Q(b)), (!x || !document.body.contains(y)) && (j instanceof Element || (j = document.body), j.appendChild(y)), y;
    },
    onChatLoaded: function() {
      window.localStorage.setItem("getchat_opened", "1");
      const z = window.innerHeight;
      let x = "200px";
      const k = F.getChatNode();
      if (k) {
        const { display: ot, visibility: rt, position: st } = getComputedStyle(k);
        Object.assign(k.style, { display: "block", visibility: "hidden" }), st === "fixed" ? x = Math.min(z - (z - k.offsetTop) - 20, 500) : x = Math.min(z - 20, 500), k.style.height = `${x}px`, Object.assign(k.style, { display: ot, visibility: rt });
      }
    }
  });
  return F.addEventListener("GetChat.Close", function(z) {
    F.close();
  }), F;
}
(function(t) {
  var n;
  if ((n = t.GetChat) != null && n.isLoaded)
    return;
  t.GetChat = {
    version: "0.1.0",
    createButton: gt
  };
  const e = "GetChat".toLowerCase() + "onloaded";
  typeof t[e] == "function" && t[e](t.GetChat), t.GetChat.isLoaded = !0, Object.freeze && Object.freeze(t.GetChat);
})(window);
