(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(".vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .6s,transform .6s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border:1px solid #0000001a;width:100%;max-width:370px;height:350px}@media (max-width:460px){.vt0z5W_chat{height:auto;position:fixed;top:0;bottom:0;left:0;right:0;max-width:none!important;max-height:none!important}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.95);display:block!important}.vt0z5W_chat-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(a){console.error("vite-plugin-css-injected-by-js",a)}})();
var yt = Object.defineProperty;
var et = (t) => {
  throw TypeError(t);
};
var mt = (t, e, n) => e in t ? yt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var q = (t, e, n) => mt(t, typeof e != "symbol" ? e + "" : e, n), nt = (t, e, n) => e.has(t) || et("Cannot " + n);
var o = (t, e, n) => (nt(t, e, "read from private field"), n ? n.call(t) : e.get(t)), f = (t, e, n) => e.has(t) ? et("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), a = (t, e, n, i) => (nt(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
const ft = function() {
  return "xxxxxxxx-xxxx".replace(/[xy]/g, function(t) {
    var e = Math.random() * 16 | 0, n = t === "x" ? e : e & 3 | 8;
    return n.toString(16);
  });
}, B = function(t, e) {
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
}, wt = function(t, e = !1) {
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
}, K = function(t) {
  if (typeof t != "string")
    return t;
  var e = document.createElement("div");
  return e.innerHTML = t, e.firstChild.nodeValue;
}, it = function(t, e = !1) {
  switch (typeof t) {
    case "boolean":
      return t;
    case "string":
      return ["true", "yes", "on", "1"].indexOf(t.toLowerCase()) > -1;
    case "number":
      return t === 1;
  }
  return e;
}, dt = function(t) {
  return parseInt(t, 10);
}, vt = function(t, e = null) {
  return /^#[0-9A-F]{6}$/i.test(t) || /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t) ? t : e;
}, Et = function(t, e = null) {
  if (typeof t == "string" && t.length === 0)
    try {
      return URL.parse(t), t;
    } catch {
      return e;
    }
  return e;
}, ot = function(t, e) {
  return e == null ? null : t(e);
}, rt = function(t, e = null) {
  if (typeof t == "string" && t.length > 0) {
    let n = t.match(/^((\d+)(\.(\d)+)?)(.*)$/);
    return n ? {
      value: parseFloat(n[1]),
      integer: parseInt(n[2], 10),
      fraction: parseInt(n[4], 10),
      unit: n[5]
    } : t;
  }
  return e;
}, Ct = function(t, e) {
  let n = String, i = null;
  if (arguments.length > 2) {
    const s = { string: String, decimal: dt, number: Number, boolean: it, bool: it, color: vt, url: Et };
    if (!s.hasOwnProperty(arguments[2]))
      throw new Error("3rd arg must be one of the following types: " + Object.keys(s).join(", "));
    n = s[arguments[2]], i = arguments[3];
  } else arguments.length === 3 && (i = arguments[2]);
  if (t instanceof Element) {
    if ("getAttribute" in t)
      return ot(n, K(t.getAttribute(e))) ?? i;
    {
      let s = Array.prototype.slice.call(t.attributes);
      for (let r = 0, c = s.length; r < c; r++)
        if (s[r].nodeName === e)
          return ot(n, K(s[r].nodeValue)) ?? i;
    }
  }
  return null;
}, Q = function(t) {
  return Object.prototype.toString.apply(t) === "[object Object]";
}, st = function(t) {
  return typeof t == "string" && t.length ? t : Q(t) ? Object.keys(t).filter(function(e) {
    return t[e] !== !1;
  }).join(" ") : Array.isArray(t) ? t.join(" ") : null;
}, at = function() {
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
}(), D = function(t, e, n = null) {
  let i = {
    rpcId: ft(),
    type: e
  };
  if (n) {
    if (typeof n == "string" && (n = wt(n)), typeof n != "object")
      throw new Error("data argument must be an object, " + typeof n + " given");
    i = Object.assign({}, n, i);
  }
  return t instanceof HTMLIFrameElement ? (t.contentWindow.postMessage(JSON.stringify(i), "*"), i.rpcId) : null;
}, At = 1e3, Z = function(t, e, n) {
  return new Promise((i, s) => {
    const r = t.style.display === "none" ? "block" : "none";
    let c = setTimeout(() => {
      i();
    }, At);
    const u = function() {
      clearTimeout(c), t.removeEventListener(at, u), t.style.display = r, G(t, [
        e,
        n
      ]), i();
    };
    t.addEventListener(
      at,
      u
    ), B(t, e), setTimeout(function() {
      B(t, n);
    }, 40);
  });
};
let w = {};
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
  e.type && Array.isArray(w == null ? void 0 : w[e.type]) && w[e.type].length && (w[e.type] = w[e.type].filter((n) => {
    try {
      return n(t, e) !== -1;
    } catch (i) {
      return console.error("Error in onMessage handler:", i), !0;
    }
  }));
});
const ct = function(t, e) {
  typeof t == "string" && typeof e == "function" && (w.hasOwnProperty(t) || (w[t] = []), w[t].push(e));
};
function X(...t) {
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
            const c = n[s];
            n[s] = function(u, l) {
              if (i.contentWindow === u.source.window)
                return c(u, l);
            };
          }
          e[t[0]].push(n[s]);
        }
    }
  }
  if (Object.keys(e).length) {
    for (let n in e)
      if (typeof e[n] == "function")
        ct(n, e[n]);
      else if (typeof e[n] == "object" && Object.prototype.toString.call(e[n]) === "[object Array]")
        for (let i in e[n])
          ct(n, e[n][i]);
  }
}
function Ot(t, e, n, i, s) {
  t instanceof Element || (t = document.body);
  const r = document.createElement("iframe");
  r.src = e, r.setAttribute("frameborder", "0"), r.setAttribute("seamless", "seamless"), r.style.width = "100%", r.style.height = "100%";
  let c = function() {
  }, u = window.getComputedStyle(t);
  if (u.display === "none") {
    const l = u.visibility;
    c = function() {
      t.style.display = "none", t.style.visibility = l;
    }, r.onerror = c, t.style.visibility = "hidden", t.style.display = "block";
  }
  return X("getchat.loaded", function() {
    return c(), typeof i == "function" && i(r), -1;
  }, r), t.appendChild(r), r;
}
let L = [];
const Y = function(t) {
  if (t.key === "Escape") {
    const e = L.pop();
    L.length === 0 && document.removeEventListener("keydown", Y), typeof e == "function" && e();
  }
}, lt = {
  bind: function(t) {
    typeof t == "function" && L.push(t), L.length === 1 && document.addEventListener("keydown", Y);
  },
  unbind: function(t) {
    typeof t == "function" && (L = L.filter((e) => e !== t)), L.length === 0 && document.removeEventListener("keydown", Y);
  }
}, kt = "vt0z5W_button", xt = "vt0z5W_chat", y = {
  button: kt,
  "button-animation-close": "vt0z5W_button-animation-close",
  "button-animation-open": "vt0z5W_button-animation-open",
  "button-animation-preclose": "vt0z5W_button-animation-preclose",
  "button-animation-preopen": "vt0z5W_button-animation-preopen",
  chat: xt,
  "chat-animation-close": "vt0z5W_chat-animation-close",
  "chat-animation-open": "vt0z5W_chat-animation-open",
  "chat-animation-preclose": "vt0z5W_chat-animation-preclose",
  "chat-animation-preopen": "vt0z5W_chat-animation-preopen"
};
var d, T, h, $, P, b, A, v, F, W, O;
class ht {
  constructor({ id: e, url: n, button: i, closeOnEscape: s = !0, autoload: r, autoopen: c = !1, autoopenDelay: u, onBeforeEmbedChat: l, onChatLoaded: M }) {
    f(this, d);
    f(this, T);
    f(this, h);
    f(this, $);
    f(this, P, !0);
    f(this, b, -1);
    f(this, A, !1);
    f(this, v, !1);
    f(this, F);
    f(this, W);
    f(this, O);
    q(this, "open", () => new Promise(async (e, n) => {
      if (o(this, b) < 1 && await this.load(), o(this, A) && !o(this, v)) {
        e();
        return;
      }
      try {
        a(this, v, !0), o(this, d) && await Z(
          o(this, d),
          y["button-animation-preclose"],
          y["button-animation-close"]
        ), await Z(
          o(this, T),
          y["chat-animation-preopen"],
          y["chat-animation-open"]
        ), D(o(this, h), "getchat.messenger.repaint"), a(this, v, !1), a(this, A, !0), D(o(this, h), "getchat.chat.input.focus"), o(this, P) && lt.bind(this.close);
      } catch (i) {
        n(i);
      }
      e();
    }));
    q(this, "close", () => new Promise(async (e, n) => {
      if (!o(this, A) && !o(this, v)) {
        e();
        return;
      }
      o(this, P) && lt.unbind(this.close);
      try {
        a(this, v, !0), await Z(
          o(this, T),
          y["chat-animation-preclose"],
          y["chat-animation-close"]
        ), o(this, d) && await Z(
          o(this, d),
          y["button-animation-preopen"],
          y["button-animation-open"]
        ), a(this, v, !0), a(this, A, !1), e();
      } catch (i) {
        n(i);
      }
    }));
    if (a(this, $, n), a(this, P, s), i instanceof Element && a(this, d, i), typeof l != "function")
      throw new Error("onBeforeEmbedChat parameter must be a function, " + typeof l + " given");
    a(this, F, l);
    let g;
    c && (c !== "once" || !window.localStorage.getItem("getchat_opened")) && (g = isNaN(u) ? this.open : () => {
      setTimeout(this.open, u * 1e3);
    }), a(this, W, () => {
      a(this, b, 1), g && g(), typeof M == "function" && M(), a(this, F, null), a(this, W, null);
    }), r && this.load(!1), o(this, d) && o(this, d).addEventListener("click", () => {
      this.toggle();
    });
    {
      let I, E;
      const p = new Promise((C, H) => {
        I = C, E = H;
      });
      a(this, O, { promise: p, resolve: I, reject: E }), o(this, d) && p.then(async () => {
        var H;
        const C = await this.rpc("getchat.messenger.getUnreads");
        o(this, d).setBadge(((H = C == null ? void 0 : C.total) == null ? void 0 : H.messages) ?? 0);
      });
    }
  }
  whenReady() {
    var e;
    return (e = o(this, O)) != null && e.promise ? o(this, O).promise : o(this, b) === 1 ? Promise.resolve() : new Promise();
  }
  load(e = !0) {
    return new Promise((n, i) => {
      var s;
      try {
        if (o(this, b) > -1) {
          n();
          return;
        }
        a(this, b, 0);
        const r = o(this, F).call(this);
        if (!(r instanceof Element))
          throw new Error("onBeforeEmbedChat must return an Element");
        a(this, T, r), e && ((s = o(this, d)) == null || s.setState("loading")), a(this, h, Ot(r, o(this, $), {}, () => {
          var c, u;
          o(this, W).call(this), (c = o(this, d)) == null || c.setState("loaded"), a(this, b, 1), n(), (u = o(this, O)) == null || u.resolve(), a(this, O, null);
        }));
      } catch (r) {
        i(r);
      }
    });
  }
  toggle() {
    return new Promise(async (e, n) => {
      if (o(this, b) === 0) {
        e();
        return;
      }
      o(this, A) ? await this.close() : await this.open(), e();
    });
  }
  addEventListener(e, n) {
    this.whenReady().then(() => {
      o(this, h) && X(e, n, o(this, h));
    });
  }
  getButton() {
    return o(this, d);
  }
  getChatNode() {
    return o(this, T);
  }
  getChatIframeNode() {
    return o(this, h);
  }
  rpc(e, n, i = 5e3) {
    return new Promise((s, r) => {
      if (o(this, b) < 1) {
        r("Chat is not loaded");
        return;
      }
      if (!o(this, h)) {
        r("Chat iframe is not loaded");
        return;
      }
      let c;
      const u = (M, g) => (clearTimeout(c), s(g == null ? void 0 : g.data), -1), l = D(o(this, h), e, n);
      l && (X("response." + l, u, o(this, h)), i > 0 && (c = setTimeout(() => {
        r("Timeout");
      }, i)));
    });
  }
}
d = new WeakMap(), T = new WeakMap(), h = new WeakMap(), $ = new WeakMap(), P = new WeakMap(), b = new WeakMap(), A = new WeakMap(), v = new WeakMap(), F = new WeakMap(), W = new WeakMap(), O = new WeakMap();
const ut = function(t, e, n) {
  let i = Ct(t, e, n);
  i && t.style.setProperty(`--${e.replace("data-", "")}`, i);
}, N = ["bgcolor", "color", "bdradius", "bdwidth", "bdcolor", "badgebg", "badgecolor"];
var _, U, R;
class J extends HTMLElement {
  constructor() {
    super();
    f(this, _);
    f(this, U, !1);
    f(this, R);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), N.forEach((n) => {
      this.hasAttribute("data-" + n) && ut(this, "data-" + n, "string");
    }), a(this, R, new MutationObserver((n) => {
      for (let i of n)
        if (i.type === "attributes") {
          let s = i.attributeName;
          s.startsWith("data-") && (s = s.replace("data-", "")), N.includes(s.replace("data-", "")) && ut(this, i.attributeName, "string");
        }
    })), o(this, R).observe(this, { attributes: !0 });
  }
  disconnectedCallback() {
    o(this, R).disconnect();
  }
  setChatInstance(n) {
    !o(this, _) && n instanceof ht && a(this, _, n);
  }
  getChatInstance() {
    return o(this, _);
  }
  setState(n) {
    n = n.toLowerCase(), n === "loading" ? B(this, "loading") : (G(this, "loading"), n === "loaded" && this.shadowRoot.querySelector(".loader").remove());
  }
  setBadge(n) {
    n = dt(n);
    const i = this.shadowRoot.querySelector(".unreads");
    i && (n > 0 ? (i.textContent = n, B(i, "unreads--visible")) : G(i, "unreads--visible"));
  }
  setStyles(n) {
    const i = this.shadowRoot.getElementById("dynamic-styles");
    let s = "";
    for (const [r, c] of Object.entries(n))
      s += `${r} { ${c} } `;
    i.textContent = s;
  }
  render() {
    o(this, U) || (this.shadowRoot.innerHTML = `
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
                background: var(--badgebg, #F16843);
                border-radius: 8px;
                color: var(--badgecolor, #FFF);
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
    }), a(this, U, !0));
  }
}
_ = new WeakMap(), U = new WeakMap(), R = new WeakMap();
J.supportedAttributes = N;
customElements.define("getchat-button", J);
async function jt({
  uri: t,
  className: e,
  showUnread: n = !1,
  autoload: i = !1,
  autoopen: s = !1,
  autoopenDelay: r = 5,
  closeOnEscape: c,
  color: u,
  insertButtonTo: l,
  buttonStyle: M,
  chatClassName: g,
  chatParent: I,
  chatStyle: E,
  chatNode: p,
  ...C
}) {
  var tt;
  const H = "GetChat".toLowerCase() + ft();
  if (typeof l == "function" && (l = l()), l instanceof Element) {
    if (!document.body.contains(l))
      throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first");
  } else
    l = document.body;
  const k = document.createElement("getchat-button");
  if (k.id = H, e || (e = y.button), e = st(e), e && B(k, e), Q(M) && Object.assign(k.style, M), (tt = J.supportedAttributes) != null && tt.length)
    for (let x of J.supportedAttributes)
      C[x] && k.setAttribute("data-" + x, C[x]);
  l.appendChild(k);
  const V = new ht({
    url: K(t),
    button: k,
    autoload: i,
    autoopen: s,
    autoopenDelay: r,
    closeOnEscape: c,
    onBeforeEmbedChat: function() {
      let j = !0;
      return p instanceof Element || (p = document.createElement("div"), j = !1), p.className = y.chat, Q(E) ? E = Object.assign({}, E, { display: "none" }) : E = { display: "none" }, Object.assign(p.style, E), g && B(p, st(g)), (!j || !document.body.contains(p)) && (I instanceof Element || (I = document.body), I.appendChild(p)), p;
    },
    onChatLoaded: function() {
      window.localStorage.setItem("getchat_opened", "1");
      const x = window.innerHeight, j = V.getChatNode();
      if (j) {
        let { display: pt, visibility: bt, position: gt, top: S, right: St, bottom: m, left: Lt } = getComputedStyle(j);
        const z = {
          display: pt,
          visibility: bt
        };
        Object.assign(j.style, { display: "block", visibility: "hidden" }), requestAnimationFrame(() => {
          gt === "fixed" ? (m = rt(m, "auto"), S = rt(S, "auto"), m !== "auto" && (m != null && m.value) ? S === "auto" && (z.top = m.value + m.unit, z.height = "auto") : S !== "auto" && S.value && m === "auto" && (z.bottom = S.value + S.unit, z.height = "auto")) : z.height = `${Math.min(x - 20, 500)}px`, Object.assign(j.style, z);
        });
      }
    }
  });
  return k.setChatInstance(V), V.addEventListener("getchat.close", function(x) {
    V.close();
  }), V;
}
const Mt = {
  version: "0.1.3",
  createButton: jt
};
export {
  Mt as default
};
