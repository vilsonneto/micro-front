"use strict";
var MyWidget = (() => {
  var c = Object.create;
  var d = Object.defineProperty;
  var l = Object.getOwnPropertyDescriptor;
  var p = Object.getOwnPropertyNames;
  var u = Object.getPrototypeOf,
    h = Object.prototype.hasOwnProperty;
  var g = ((e) =>
    typeof require < "u"
      ? require
      : typeof Proxy < "u"
      ? new Proxy(e, { get: (o, r) => (typeof require < "u" ? require : o)[r] })
      : e)(function (e) {
    if (typeof require < "u") return require.apply(this, arguments);
    throw Error('Dynamic require of "' + e + '" is not supported');
  });
  var x = (e, o) => {
      for (var r in o) d(e, r, { get: o[r], enumerable: !0 });
    },
    a = (e, o, r, i) => {
      if ((o && typeof o == "object") || typeof o == "function")
        for (let t of p(o))
          !h.call(e, t) &&
            t !== r &&
            d(e, t, {
              get: () => o[t],
              enumerable: !(i = l(o, t)) || i.enumerable,
            });
      return e;
    };
  var m = (e, o, r) => (
      (r = e != null ? c(u(e)) : {}),
      a(
        o || !e || !e.__esModule
          ? d(r, "default", { value: e, enumerable: !0 })
          : r,
        e
      )
    ),
    E = (e) => a(d({}, "__esModule", { value: !0 }), e);
  var v = {};
  x(v, { renderWidget: () => f });
  var n = m(g("react")),
    s = m(g("react-dom/client")),
    b = () =>
      n.default.createElement(
        "div",
        {
          style: {
            padding: "20px",
            background: "lightblue",
            borderRadius: "5px",
          },
        },
        n.default.createElement("h3", null, "Widget de Exemplo"),
        n.default.createElement(
          "p",
          null,
          "Este \xE9 um widget React renderizado via Google Tag Manager."
        )
      ),
    f = (e) => {
      let o = document.getElementById(e);
      o
        ? s.default.createRoot(o).render(n.default.createElement(b, null))
        : console.error(`Elemento com id '${e}' n\xE3o encontrado.`);
    };
  return E(v);
})();
