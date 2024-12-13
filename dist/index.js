(function(){"use strict";try{if(typeof document<"u"){var t=document.createElement("style");t.appendChild(document.createTextNode(":root{--is-mobile-screen-mq:(max-width: 460px);--is-touch-device-mq:(pointer: coarse)}@media (max-width:460px){html:has(.vt0z5W_chat-animation-opened){overscroll-behavior:none}}.vt0z5W_button{opacity:1;border:0;border-radius:50%;width:100%;max-width:60px;height:100%;max-height:60px;transition:opacity .3s,transform .3s;display:block;position:fixed;bottom:10px;right:10px;transform:scale(1);box-shadow:0 1px 6px #0000000f,0 2px 32px #00000029}.vt0z5W_button:active{transition:none;transform:scale(.95)}@media (prefers-reduced-motion){.vt0z5W_button{transition:none!important}}.vt0z5W_button-animation-preclose{opacity:1;transition:opacity .3s,transform .3s;transform:scale(1)}.vt0z5W_button-animation-close{opacity:0;transform:scale(.5)}.vt0z5W_button-animation-preopen{opacity:0;transition:opacity .3s,transform .3s;transform:scale(.5);display:block!important}.vt0z5W_button-animation-open{opacity:1;transform:scale(1)}.vt0z5W_chat{border-radius:var(--bdradius,8px);visibility:hidden;pointer-events:none;border:1px solid #e6e6e6;width:100%;max-width:370px;height:80vh;max-height:800px;transition:none;overflow:hidden;box-shadow:0 0 2px #0000001f,0 4px 8px #0000001f}@media (max-width:460px){.vt0z5W_chat{top:var(--chat-node-top-offset,0);height:var(--chat-node-height,auto);box-shadow:none;border:0;border-top:1px solid #e6e6e6;border-radius:8px;position:fixed;bottom:0;left:0;right:0;max-width:none!important;max-height:none!important}}@media (prefers-reduced-motion){.vt0z5W_chat{transition:none!important}}.vt0z5W_chat+.vt0z5W_button{margin-top:20px}.vt0z5W_chat-animation-preopen{opacity:0;transform:scale(.95)}.vt0z5W_chat-animation-opened{opacity:1;transition:opacity .15s,transform .15s;transform:scale(1);pointer-events:auto!important;visibility:visible!important}.vt0z5W_chat-animation-closed{opacity:1;transform:scale(1)}.vt0z5W_chat-animation-close{opacity:0;transform:scale(.95)}")),document.head.appendChild(t)}}catch(o){console.error("vite-plugin-css-injected-by-js",o)}})();
var Lt = Object.defineProperty;
var dt = (t) => {
  throw TypeError(t);
};
var Tt = (t, e, n) => e in t ? Lt(t, e, { enumerable: !0, configurable: !0, writable: !0, value: n }) : t[e] = n;
var ot = (t, e, n) => Tt(t, typeof e != "symbol" ? e + "" : e, n), ht = (t, e, n) => e.has(t) || dt("Cannot " + n);
var o = (t, e, n) => (ht(t, e, "read from private field"), n ? n.call(t) : e.get(t)), u = (t, e, n) => e.has(t) ? dt("Cannot add the same private member more than once") : e instanceof WeakSet ? e.add(t) : e.set(t, n), c = (t, e, n, i) => (ht(t, e, "write to private field"), i ? i.call(t, n) : e.set(t, n), n);
const Ct = function() {
  return "xxxxxxxx-xxxx".replace(/[xy]/g, function(t) {
    var e = Math.random() * 16 | 0, n = t === "x" ? e : e & 3 | 8;
    return n.toString(16);
  });
}, K = function(t, e) {
  if (!(t instanceof Node))
    throw new Error("first argument have to be a DOM Node");
  if (e != null) {
    if (typeof e == "string" && (e = e.trim().replace(/\s{2,}/, " ").split(" ")), Object.prototype.toString.apply(e) !== "[object Array]")
      throw new Error("classNames arg must be string or array, " + Object.prototype.toString.apply(e) + " given");
    if (e.length)
      for (let n = 0, i = e.length; n < i; n++)
        t.className.indexOf(e[n]) < 0 && (t.className = (t.className + " " + e[n]).trim());
  }
}, I = function(t, e) {
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
}, Vt = function(t, e = !1) {
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
}, at = function(t) {
  if (typeof t != "string")
    return t;
  var e = document.createElement("div");
  return e.innerHTML = t, e.firstChild.nodeValue;
}, pt = function(t, e = !1) {
  switch (typeof t) {
    case "boolean":
      return t;
    case "string":
      return ["true", "yes", "on", "1"].indexOf(t.toLowerCase()) > -1;
    case "number":
      return t === 1;
  }
  return e;
}, At = function(t) {
  return parseInt(t, 10);
}, Mt = function(t, e = null) {
  return /^#[0-9A-F]{6}$/i.test(t) || /^rgba?\((\d{1,3}),(\d{1,3}),(\d{1,3})(?:,(\d(?:\.\d+)?))?\)$/i.test(t) ? t : e;
}, Pt = function(t, e = null) {
  if (typeof t == "string" && t.length === 0)
    try {
      return URL.parse(t), t;
    } catch {
      return e;
    }
  return e;
}, gt = function(t, e) {
  return e == null ? null : t(e);
}, mt = function(t, e = null) {
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
}, It = function(t, e) {
  let n = String, i = null;
  if (arguments.length > 2) {
    const s = { string: String, decimal: At, number: Number, boolean: pt, bool: pt, color: Mt, url: Pt };
    if (!s.hasOwnProperty(arguments[2]))
      throw new Error("3rd arg must be one of the following types: " + Object.keys(s).join(", "));
    n = s[arguments[2]], i = arguments[3];
  } else arguments.length === 3 && (i = arguments[2]);
  if (t instanceof Element) {
    if ("getAttribute" in t)
      return gt(n, at(t.getAttribute(e))) ?? i;
    {
      let s = Array.prototype.slice.call(t.attributes);
      for (let r = 0, l = s.length; r < l; r++)
        if (s[r].nodeName === e)
          return gt(n, at(s[r].nodeValue)) ?? i;
    }
  }
  return null;
}, Ot = function(t) {
  return Object.prototype.toString.apply(t) === "[object Object]";
}, bt = function(t) {
  return typeof t == "string" && t.length ? t : Ot(t) ? Object.keys(t).filter(function(e) {
    return t[e] !== !1;
  }).join(" ") : Array.isArray(t) ? t.join(" ") : null;
}, yt = function() {
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
}(), rt = function(t, e, n = null) {
  let i = {
    rpcId: Ct(),
    type: e
  };
  if (n) {
    if (typeof n == "string" && (n = Vt(n)), typeof n != "object")
      throw new Error("data argument must be an object, " + typeof n + " given");
    i = Object.assign({}, n, i);
  }
  return t instanceof HTMLIFrameElement ? (t.contentWindow.postMessage(JSON.stringify(i), "*"), i.rpcId) : null;
}, Ht = 1e3, et = function(t, e, n) {
  return new Promise((i, s) => {
    t.style.display;
    let r = setTimeout(() => {
      i();
    }, Ht);
    const l = function(h) {
      clearTimeout(r), t.removeEventListener(yt, l), I(t, [
        e
      ]), i();
    }, a = zt();
    a && t.addEventListener(
      yt,
      l
    ), K(t, e), setTimeout(function() {
      K(t, n), a || l();
    }, 40);
  });
};
function Wt() {
  const t = navigator.userAgent;
  return /Safari/.test(t) && !/Chrome/.test(t) && !/Chromium/.test(t);
}
getComputedStyle(document.documentElement).getPropertyValue("--is-mobile-screen-mq").trim();
let st = null;
const xt = function() {
  if (st === null) {
    const t = getComputedStyle(document.documentElement).getPropertyValue("--is-touch-device-mq").trim();
    st = window.matchMedia(t).matches;
  }
  return st;
};
let X = null;
function Bt() {
  if (window.matchMedia) {
    const t = window.matchMedia("(prefers-reduced-motion: reduce)");
    X = !t.matches, t.addEventListener("change", (e) => {
      X = !e.matches, console.info("somebody change preferAnimation", X);
    });
  }
}
const zt = function() {
  return X === null && Bt(), X;
};
let A = {};
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
  e.type && Array.isArray(A == null ? void 0 : A[e.type]) && A[e.type].length && (A[e.type] = A[e.type].filter((n) => {
    try {
      return n(t, e) !== -1;
    } catch (i) {
      return console.error("Error in onMessage handler:", i), !0;
    }
  }));
});
const wt = function(t, e) {
  typeof t == "string" && typeof e == "function" && (A.hasOwnProperty(t) || (A[t] = []), A[t].push(e));
};
function Y(...t) {
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
            const l = n[s];
            n[s] = function(a, h) {
              if (i.contentWindow === a.source.window)
                return l(a, h);
            };
          }
          e[t[0]].push(n[s]);
        }
    }
  }
  if (Object.keys(e).length) {
    for (let n in e)
      if (typeof e[n] == "function")
        wt(n, e[n]);
      else if (typeof e[n] == "object" && Object.prototype.toString.call(e[n]) === "[object Array]")
        for (let i in e[n])
          wt(n, e[n][i]);
  }
}
const it = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Map();
let St = !1;
initVirtualkeyboardAPI = function() {
  navigator.virtualKeyboard.overlaysContent = !0, lastVKHeight = null, navigator.virtualKeyboard.addEventListener("geometrychange", (t) => {
    const { x: e, y: n, width: i, height: s } = t.target.boundingRect;
    if (lastVKHeight !== s) {
      for (const r of it) {
        const l = Object.assign({}, lastViewport);
        setTimeout(() => {
          handleNode(r, l, newViewport);
        }, 0);
      }
      lastVKHeight = s;
    }
  });
};
const _t = function() {
  if (!xt())
    return;
  if (!window.visualViewport) {
    console.error("window.visualViewport is not supported");
    return;
  }
  let t = { height: window.visualViewport.height, width: window.visualViewport.width };
  const e = function(n, i, s, r) {
    const l = Date.now(), a = i.querySelector("iframe");
    if (!T.has(a == null ? void 0 : a.contentWindow))
      return;
    let h = T.get(a == null ? void 0 : a.contentWindow).action === "unfocus" ? 1e3 : 300;
    if (l - T.get(a == null ? void 0 : a.contentWindow).timestamp > h) {
      n.type === "scroll" && T.get(a == null ? void 0 : a.contentWindow).action === "focus" && i.style.setProperty("--chat-node-top-offset", `${window.visualViewport.pageTop}px`);
      return;
    }
    if (T.get(a == null ? void 0 : a.contentWindow).action === "unfocus") {
      i.style.removeProperty("--chat-node-top-offset"), i.style.removeProperty("--chat-node-height");
      return;
    }
    const d = i.getBoundingClientRect(), y = r.height - s.height;
    d.top === y && (i.style.setProperty("--chat-node-top-offset", `${(parseInt(i.style.top) || 0) + d.top * -1}px`), i.style.setProperty("--chat-node-height", `${r.height}px`));
  };
  window.visualViewport.addEventListener("resize", (n) => {
    if (t.height === window.visualViewport.height)
      return;
    const i = { height: window.visualViewport.height, width: window.visualViewport.width };
    for (const s of it) {
      const r = Object.assign({}, t);
      e(n, s, r, i);
    }
    t = i;
  }), Y("getchat.input.focused", function(n, i) {
    T.set(n.source.window, {
      action: "focus",
      timestamp: Date.now()
    });
  }), Y("getchat.input.unfocused", function(n, i) {
    T.set(n.source.window, {
      action: "unfocus",
      timestamp: Date.now()
    });
  }), St = !0;
}, Ft = function(t) {
  t instanceof Element && (St || _t(), it.add(t));
}, Rt = function(t) {
  t instanceof Element && it.delete(t);
};
function Dt(t, e, n, i, s) {
  var l;
  t instanceof Element || (t = document.body);
  const r = document.createElement("iframe");
  if (r.src = e, r.setAttribute("frameborder", "0"), r.setAttribute("seamless", "seamless"), r.style.width = "100%", r.style.height = "100%", Y("getchat.loaded", function() {
    return typeof i == "function" && i(r), -1;
  }, r), t.appendChild(r), !(xt() || Wt())) {
    const a = ((l = window.getComputedStyle(document.body)) == null ? void 0 : l.overscrollBehaviorX) ?? "auto";
    r.addEventListener("mouseenter", function() {
      document.body.style.overscrollBehaviorX = "contain";
    }), r.addEventListener("mouseleave", function() {
      document.body.style.overscrollBehaviorX = a;
    });
  }
  return r;
}
let V = [];
const ct = function(t) {
  if (t.key === "Escape") {
    const e = V.pop();
    V.length === 0 && document.removeEventListener("keydown", ct), typeof e == "function" && e();
  }
}, vt = {
  bind: function(t) {
    typeof t == "function" && V.push(t), V.length === 1 && document.addEventListener("keydown", ct);
  },
  unbind: function(t) {
    typeof t == "function" && (V = V.filter((e) => e !== t)), V.length === 0 && document.removeEventListener("keydown", ct);
  }
}, qt = "vt0z5W_button", Kt = "vt0z5W_chat", p = {
  button: qt,
  "button-animation-close": "vt0z5W_button-animation-close",
  "button-animation-open": "vt0z5W_button-animation-open",
  "button-animation-preclose": "vt0z5W_button-animation-preclose",
  "button-animation-preopen": "vt0z5W_button-animation-preopen",
  chat: Kt,
  "chat-animation-close": "vt0z5W_chat-animation-close",
  "chat-animation-closed": "vt0z5W_chat-animation-closed",
  "chat-animation-opened": "vt0z5W_chat-animation-opened",
  "chat-animation-preopen": "vt0z5W_chat-animation-preopen"
};
var f, v, g, G, H, b, S, O, W, B, z, _, F, R, k;
class kt {
  constructor({ id: e, url: n, button: i, closeOnEscape: s = !0, autoload: r, autoopen: l = !1, autoopenDelay: a, onBeforeEmbedChat: h, onChatLoaded: d, onBeforeOpen: y, onAfterOpen: Q, onBeforeClose: U, onAfterClose: ut }) {
    u(this, f);
    u(this, v);
    u(this, g);
    u(this, G);
    u(this, H, !0);
    u(this, b, -1);
    u(this, S, !1);
    u(this, O, !1);
    u(this, W);
    u(this, B);
    u(this, z);
    u(this, _);
    u(this, F);
    u(this, R);
    u(this, k);
    ot(this, "open", () => new Promise(async (e, n) => {
      if (o(this, b) < 1 && await this.load(), o(this, S) && !o(this, O)) {
        e();
        return;
      }
      try {
        c(this, O, !0), typeof o(this, z) == "function" && await o(this, z).call(this), o(this, f) && await et(
          o(this, f),
          p["button-animation-preclose"],
          p["button-animation-close"]
        ), await et(
          o(this, v),
          p["chat-animation-preopen"],
          p["chat-animation-opened"]
        ), typeof o(this, _) == "function" && await o(this, _).call(this), rt(o(this, g), "getchat.messenger.repaint"), Ft(o(this, v)), c(this, O, !1), c(this, S, !0), rt(o(this, g), "getchat.chat.input.focus"), o(this, H) && vt.bind(this.close);
      } catch (i) {
        n(i);
      }
      e();
    }));
    ot(this, "close", () => new Promise(async (e, n) => {
      if (!o(this, S) && !o(this, O)) {
        e();
        return;
      }
      o(this, H) && vt.unbind(this.close);
      try {
        c(this, O, !0), Rt(o(this, v)), typeof o(this, F) == "function" && await o(this, F).call(this), await et(
          o(this, v),
          p["chat-animation-opened"],
          p["chat-animation-close"]
        ), I(o(this, v), p["chat-animation-close"]), I(o(this, f), p["button-animation-close"]), o(this, f) && await et(
          o(this, f),
          p["button-animation-preopen"],
          p["button-animation-open"]
        ), I(o(this, f), p["button-animation-open"]), c(this, O, !0), c(this, S, !1), typeof o(this, R) == "function" && await o(this, R).call(this), e();
      } catch (i) {
        n(i);
      }
    }));
    if (c(this, G, n), c(this, H, s), i instanceof Element && c(this, f, i), typeof h != "function")
      throw new Error("onBeforeEmbedChat parameter must be a function, " + typeof h + " given");
    c(this, W, h);
    let m;
    l && (l !== "once" || !window.localStorage.getItem("getchat_opened")) && (m = isNaN(a) ? this.open : () => {
      setTimeout(this.open, a * 1e3);
    }), c(this, B, () => {
      c(this, b, 1), m && m(), typeof d == "function" && d(), c(this, W, null), c(this, B, null);
    }), r && this.load(!1), c(this, z, y), c(this, _, Q), c(this, F, U), c(this, R, ut), o(this, f) && o(this, f).addEventListener("click", () => {
      this.toggle();
    });
    {
      let Z, $;
      const w = new Promise((E, x) => {
        Z = E, $ = x;
      });
      c(this, k, { promise: w, resolve: Z, reject: $ }), o(this, f) && w.then(async () => {
        var x;
        const E = await this.rpc("getchat.messenger.getUnreads");
        o(this, f).setBadge(((x = E == null ? void 0 : E.total) == null ? void 0 : x.messages) ?? 0);
      });
    }
  }
  whenReady() {
    var e;
    return (e = o(this, k)) != null && e.promise ? o(this, k).promise : o(this, b) === 1 ? Promise.resolve() : new Promise();
  }
  load(e = !0) {
    return new Promise((n, i) => {
      var s;
      try {
        if (o(this, b) > -1) {
          n();
          return;
        }
        c(this, b, 0);
        const r = o(this, W).call(this);
        if (!(r instanceof Element))
          throw new Error("onBeforeEmbedChat must return an Element");
        c(this, v, r), e && ((s = o(this, f)) == null || s.setState("loading")), c(this, g, Dt(r, o(this, G), {}, () => {
          var l, a;
          o(this, B).call(this), (l = o(this, f)) == null || l.setState("loaded"), c(this, b, 1), n(), (a = o(this, k)) == null || a.resolve(), c(this, k, null);
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
      o(this, S) ? await this.close() : await this.open(), e();
    });
  }
  addEventListener(e, n) {
    this.whenReady().then(() => {
      o(this, g) && Y(e, n, o(this, g));
    });
  }
  getButton() {
    return o(this, f);
  }
  getChatNode() {
    return o(this, v);
  }
  getChatIframeNode() {
    return o(this, g);
  }
  rpc(e, n, i = 5e3) {
    return new Promise((s, r) => {
      if (o(this, b) < 1) {
        r("Chat is not loaded");
        return;
      }
      if (!o(this, g)) {
        r("Chat iframe is not loaded");
        return;
      }
      let l;
      const a = (d, y) => (clearTimeout(l), s(y == null ? void 0 : y.data), -1), h = rt(o(this, g), e, n);
      h && (Y("response." + h, a, o(this, g)), i > 0 && (l = setTimeout(() => {
        r("Timeout");
      }, i)));
    });
  }
}
f = new WeakMap(), v = new WeakMap(), g = new WeakMap(), G = new WeakMap(), H = new WeakMap(), b = new WeakMap(), S = new WeakMap(), O = new WeakMap(), W = new WeakMap(), B = new WeakMap(), z = new WeakMap(), _ = new WeakMap(), F = new WeakMap(), R = new WeakMap(), k = new WeakMap();
const Et = function(t, e, n) {
  let i = It(t, e, n);
  i && t.style.setProperty(`--${e.replace("data-", "")}`, i);
}, lt = ["bgcolor", "color", "bdradius", "bdwidth", "bdcolor", "badgebg", "badgecolor"];
var D, N, q;
class nt extends HTMLElement {
  constructor() {
    super();
    u(this, D);
    u(this, N, !1);
    u(this, q);
    this.attachShadow({ mode: "open" });
  }
  connectedCallback() {
    this.render(), lt.forEach((n) => {
      this.hasAttribute("data-" + n) && Et(this, "data-" + n, "string");
    }), c(this, q, new MutationObserver((n) => {
      for (let i of n)
        if (i.type === "attributes") {
          let s = i.attributeName;
          s.startsWith("data-") && (s = s.replace("data-", "")), lt.includes(s.replace("data-", "")) && Et(this, i.attributeName, "string");
        }
    })), o(this, q).observe(this, { attributes: !0 });
  }
  disconnectedCallback() {
    o(this, q).disconnect();
  }
  setChatInstance(n) {
    !o(this, D) && n instanceof kt && c(this, D, n);
  }
  getChatInstance() {
    return o(this, D);
  }
  setState(n) {
    n = n.toLowerCase(), n === "loading" ? K(this, "loading") : (I(this, "loading"), n === "loaded" && this.shadowRoot.querySelector(".loader").remove());
  }
  setBadge(n) {
    n = At(n);
    const i = this.shadowRoot.querySelector(".unreads");
    i && (n > 0 ? (i.textContent = n, K(i, "unreads--visible")) : I(i, "unreads--visible"));
  }
  setStyles(n) {
    const i = this.shadowRoot.getElementById("dynamic-styles");
    let s = "";
    for (const [r, l] of Object.entries(n))
      s += `${r} { ${l} } `;
    i.textContent = s;
  }
  render() {
    o(this, N) || (this.shadowRoot.innerHTML = `
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
    }), c(this, N, !0));
  }
}
D = new WeakMap(), N = new WeakMap(), q = new WeakMap();
nt.supportedAttributes = lt;
customElements.define("getchat-button", nt);
async function Ut({
  uri: t,
  className: e,
  showUnread: n = !1,
  autoload: i = !1,
  autoopen: s = !1,
  autoopenDelay: r = 5,
  closeOnEscape: l,
  color: a,
  mobileModeMaxWidth: h = 460,
  insertButtonTo: d,
  buttonStyle: y,
  chatClassName: Q,
  chatParent: U,
  chatStyle: ut,
  chatNode: m,
  ...Z
}) {
  var ft;
  const $ = "GetChat".toLowerCase() + Ct();
  if (typeof d == "function" && (d = d()), d instanceof Element) {
    if (!document.body.contains(d))
      throw new Error("insertButtonTo is Element but not yet in DOM, please insert it first");
  } else
    d = document.body;
  const w = document.createElement("getchat-button");
  if (w.id = $, e || (e = p.button), e = bt(e), e && K(w, e), Ot(y) && Object.assign(w.style, y), (ft = nt.supportedAttributes) != null && ft.length)
    for (let j of nt.supportedAttributes)
      Z[j] && w.setAttribute("data-" + j, Z[j]);
  d.appendChild(w);
  let E, x, tt = !1;
  const J = new kt({
    url: at(t),
    button: w,
    autoload: i,
    autoopen: s,
    autoopenDelay: r,
    closeOnEscape: l,
    onBeforeEmbedChat: function() {
      let M = !0;
      return m instanceof Element || (m = document.createElement("div"), M = !1), m.className = p.chat, Q && K(m, bt(Q)), (!M || !document.body.contains(m)) && (U instanceof Element || (U = document.body), U.appendChild(m)), m;
    },
    onChatLoaded: function() {
      window.localStorage.setItem("getchat_opened", "1");
      const j = window.innerHeight, M = J.getChatNode();
      if (M) {
        let { position: jt, top: L, bottom: C } = getComputedStyle(M);
        const P = {};
        requestAnimationFrame(() => {
          jt === "fixed" ? (C = mt(C, "auto"), L = mt(L, "auto"), C !== "auto" && (C != null && C.value) ? L === "auto" && (P.top = C.value + C.unit, P.height = "auto") : L !== "auto" && L.value && C === "auto" && (P.bottom = L.value + L.unit, P.height = "auto")) : P.height = `${Math.min(j - 20, 500)}px`, Object.assign(M.style, P);
        });
      }
    },
    onBeforeOpen: function() {
      window.innerWidth <= h && (E = window.scrollY || window.pageYOffset, x = getComputedStyle(document.body).position, tt = !0);
    },
    onAfterOpen: function() {
      tt && (window.scrollTo({ top: 0, left: 0, behavior: "instant" }), document.body.style.position = "fixed");
    },
    onBeforeClose: function() {
      tt && (x && (document.body.style.position = x), E && window.scrollTo({ top: E, left: 0, behavior: "instant" })), tt = !1;
    }
  });
  return w.setChatInstance(J), J.addEventListener("getchat.close", function(j) {
    J.close();
  }), J;
}
const Jt = {
  version: "0.1.4",
  createButton: Ut
};
export {
  Jt as default
};
