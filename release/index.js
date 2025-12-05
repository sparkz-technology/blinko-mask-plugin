var wt = Object.defineProperty;
var $t = ($, a, C) => a in $ ? wt($, a, { enumerable: !0, configurable: !0, writable: !0, value: C }) : $[a] = C;
var le = ($, a, C) => ($t($, typeof a != "symbol" ? a + "" : a, C), C);
(function() {
  var $, a, C, E, ue, ce, se, ae, G, Z, J, B = {}, fe = [], Ge = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i, U = Array.isArray;
  function P(e, t) {
    for (var _ in t)
      e[_] = t[_];
    return e;
  }
  function K(e) {
    e && e.parentNode && e.parentNode.removeChild(e);
  }
  function Q(e, t, _) {
    var n, o, r, i = {};
    for (r in t)
      r == "key" ? n = t[r] : r == "ref" ? o = t[r] : i[r] = t[r];
    if (arguments.length > 2 && (i.children = arguments.length > 3 ? $.call(arguments, 2) : _), typeof e == "function" && e.defaultProps != null)
      for (r in e.defaultProps)
        i[r] === void 0 && (i[r] = e.defaultProps[r]);
    return R(e, i, n, o, null);
  }
  function R(e, t, _, n, o) {
    var r = { type: e, props: t, key: _, ref: n, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: o ?? ++C, __i: -1, __u: 0 };
    return o == null && a.vnode != null && a.vnode(r), r;
  }
  function H(e) {
    return e.children;
  }
  function N(e, t) {
    this.props = e, this.context = t;
  }
  function A(e, t) {
    if (t == null)
      return e.__ ? A(e.__, e.__i + 1) : null;
    for (var _; t < e.__k.length; t++)
      if ((_ = e.__k[t]) != null && _.__e != null)
        return _.__e;
    return typeof e.type == "function" ? A(e) : null;
  }
  function pe(e) {
    var t, _;
    if ((e = e.__) != null && e.__c != null) {
      for (e.__e = e.__c.base = null, t = 0; t < e.__k.length; t++)
        if ((_ = e.__k[t]) != null && _.__e != null) {
          e.__e = e.__c.base = _.__e;
          break;
        }
      return pe(e);
    }
  }
  function de(e) {
    (!e.__d && (e.__d = !0) && E.push(e) && !O.__r++ || ue != a.debounceRendering) && ((ue = a.debounceRendering) || ce)(O);
  }
  function O() {
    for (var e, t, _, n, o, r, i, c = 1; E.length; )
      E.length > c && E.sort(se), e = E.shift(), c = E.length, e.__d && (_ = void 0, n = void 0, o = (n = (t = e).__v).__e, r = [], i = [], t.__P && ((_ = P({}, n)).__v = n.__v + 1, a.vnode && a.vnode(_), X(t.__P, _, n, t.__n, t.__P.namespaceURI, 32 & n.__u ? [o] : null, r, o ?? A(n), !!(32 & n.__u), i), _.__v = n.__v, _.__.__k[_.__i] = _, ge(r, _, i), n.__e = n.__ = null, _.__e != o && pe(_)));
    O.__r = 0;
  }
  function he(e, t, _, n, o, r, i, c, s, u, p) {
    var l, d, f, g, w, b, v, h = n && n.__k || fe, S = t.length;
    for (s = Ze(_, t, h, s, S), l = 0; l < S; l++)
      (f = _.__k[l]) != null && (d = f.__i == -1 ? B : h[f.__i] || B, f.__i = l, b = X(e, f, d, o, r, i, c, s, u, p), g = f.__e, f.ref && d.ref != f.ref && (d.ref && ee(d.ref, null, f), p.push(f.ref, f.__c || g, f)), w == null && g != null && (w = g), (v = !!(4 & f.__u)) || d.__k === f.__k ? s = ve(f, s, e, v) : typeof f.type == "function" && b !== void 0 ? s = b : g && (s = g.nextSibling), f.__u &= -7);
    return _.__e = w, s;
  }
  function Ze(e, t, _, n, o) {
    var r, i, c, s, u, p = _.length, l = p, d = 0;
    for (e.__k = new Array(o), r = 0; r < o; r++)
      (i = t[r]) != null && typeof i != "boolean" && typeof i != "function" ? (typeof i == "string" || typeof i == "number" || typeof i == "bigint" || i.constructor == String ? i = e.__k[r] = R(null, i, null, null, null) : U(i) ? i = e.__k[r] = R(H, { children: i }, null, null, null) : i.constructor == null && i.__b > 0 ? i = e.__k[r] = R(i.type, i.props, i.key, i.ref ? i.ref : null, i.__v) : e.__k[r] = i, s = r + d, i.__ = e, i.__b = e.__b + 1, (u = i.__i = Je(i, _, s, l)) != -1 && (l--, (c = _[u]) && (c.__u |= 2)), c == null || c.__v == null ? (u == -1 && (o > p ? d-- : o < p && d++), typeof i.type != "function" && (i.__u |= 4)) : u != s && (u == s - 1 ? d-- : u == s + 1 ? d++ : (u > s ? d-- : d++, i.__u |= 4))) : e.__k[r] = null;
    if (l)
      for (r = 0; r < p; r++)
        (c = _[r]) != null && !(2 & c.__u) && (c.__e == n && (n = A(c)), ke(c, c));
    return n;
  }
  function ve(e, t, _, n) {
    var o, r;
    if (typeof e.type == "function") {
      for (o = e.__k, r = 0; o && r < o.length; r++)
        o[r] && (o[r].__ = e, t = ve(o[r], t, _, n));
      return t;
    }
    e.__e != t && (n && (t && e.type && !t.parentNode && (t = A(e)), _.insertBefore(e.__e, t || null)), t = e.__e);
    do
      t = t && t.nextSibling;
    while (t != null && t.nodeType == 8);
    return t;
  }
  function W(e, t) {
    return t = t || [], e == null || typeof e == "boolean" || (U(e) ? e.some(function(_) {
      W(_, t);
    }) : t.push(e)), t;
  }
  function Je(e, t, _, n) {
    var o, r, i, c = e.key, s = e.type, u = t[_], p = u != null && (2 & u.__u) == 0;
    if (u === null && c == null || p && c == u.key && s == u.type)
      return _;
    if (n > (p ? 1 : 0)) {
      for (o = _ - 1, r = _ + 1; o >= 0 || r < t.length; )
        if ((u = t[i = o >= 0 ? o-- : r++]) != null && !(2 & u.__u) && c == u.key && s == u.type)
          return i;
    }
    return -1;
  }
  function me(e, t, _) {
    t[0] == "-" ? e.setProperty(t, _ ?? "") : e[t] = _ == null ? "" : typeof _ != "number" || Ge.test(t) ? _ : _ + "px";
  }
  function F(e, t, _, n, o) {
    var r, i;
    e:
      if (t == "style")
        if (typeof _ == "string")
          e.style.cssText = _;
        else {
          if (typeof n == "string" && (e.style.cssText = n = ""), n)
            for (t in n)
              _ && t in _ || me(e.style, t, "");
          if (_)
            for (t in _)
              n && _[t] == n[t] || me(e.style, t, _[t]);
        }
      else if (t[0] == "o" && t[1] == "n")
        r = t != (t = t.replace(ae, "$1")), i = t.toLowerCase(), t = i in e || t == "onFocusOut" || t == "onFocusIn" ? i.slice(2) : t.slice(2), e.l || (e.l = {}), e.l[t + r] = _, _ ? n ? _.u = n.u : (_.u = G, e.addEventListener(t, r ? J : Z, r)) : e.removeEventListener(t, r ? J : Z, r);
      else {
        if (o == "http://www.w3.org/2000/svg")
          t = t.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
        else if (t != "width" && t != "height" && t != "href" && t != "list" && t != "form" && t != "tabIndex" && t != "download" && t != "rowSpan" && t != "colSpan" && t != "role" && t != "popover" && t in e)
          try {
            e[t] = _ ?? "";
            break e;
          } catch {
          }
        typeof _ == "function" || (_ == null || _ === !1 && t[4] != "-" ? e.removeAttribute(t) : e.setAttribute(t, t == "popover" && _ == 1 ? "" : _));
      }
  }
  function ye(e) {
    return function(t) {
      if (this.l) {
        var _ = this.l[t.type + e];
        if (t.t == null)
          t.t = G++;
        else if (t.t < _.u)
          return;
        return _(a.event ? a.event(t) : t);
      }
    };
  }
  function X(e, t, _, n, o, r, i, c, s, u) {
    var p, l, d, f, g, w, b, v, h, S, T, I, L, qe, q, D, ie, x = t.type;
    if (t.constructor != null)
      return null;
    128 & _.__u && (s = !!(32 & _.__u), r = [c = t.__e = _.__e]), (p = a.__b) && p(t);
    e:
      if (typeof x == "function")
        try {
          if (v = t.props, h = "prototype" in x && x.prototype.render, S = (p = x.contextType) && n[p.__c], T = p ? S ? S.props.value : p.__ : n, _.__c ? b = (l = t.__c = _.__c).__ = l.__E : (h ? t.__c = l = new x(v, T) : (t.__c = l = new N(v, T), l.constructor = x, l.render = Qe), S && S.sub(l), l.state || (l.state = {}), l.__n = n, d = l.__d = !0, l.__h = [], l._sb = []), h && l.__s == null && (l.__s = l.state), h && x.getDerivedStateFromProps != null && (l.__s == l.state && (l.__s = P({}, l.__s)), P(l.__s, x.getDerivedStateFromProps(v, l.__s))), f = l.props, g = l.state, l.__v = t, d)
            h && x.getDerivedStateFromProps == null && l.componentWillMount != null && l.componentWillMount(), h && l.componentDidMount != null && l.__h.push(l.componentDidMount);
          else {
            if (h && x.getDerivedStateFromProps == null && v !== f && l.componentWillReceiveProps != null && l.componentWillReceiveProps(v, T), t.__v == _.__v || !l.__e && l.shouldComponentUpdate != null && l.shouldComponentUpdate(v, l.__s, T) === !1) {
              for (t.__v != _.__v && (l.props = v, l.state = l.__s, l.__d = !1), t.__e = _.__e, t.__k = _.__k, t.__k.some(function(M) {
                M && (M.__ = t);
              }), I = 0; I < l._sb.length; I++)
                l.__h.push(l._sb[I]);
              l._sb = [], l.__h.length && i.push(l);
              break e;
            }
            l.componentWillUpdate != null && l.componentWillUpdate(v, l.__s, T), h && l.componentDidUpdate != null && l.__h.push(function() {
              l.componentDidUpdate(f, g, w);
            });
          }
          if (l.context = T, l.props = v, l.__P = e, l.__e = !1, L = a.__r, qe = 0, h) {
            for (l.state = l.__s, l.__d = !1, L && L(t), p = l.render(l.props, l.state, l.context), q = 0; q < l._sb.length; q++)
              l.__h.push(l._sb[q]);
            l._sb = [];
          } else
            do
              l.__d = !1, L && L(t), p = l.render(l.props, l.state, l.context), l.state = l.__s;
            while (l.__d && ++qe < 25);
          l.state = l.__s, l.getChildContext != null && (n = P(P({}, n), l.getChildContext())), h && !d && l.getSnapshotBeforeUpdate != null && (w = l.getSnapshotBeforeUpdate(f, g)), D = p, p != null && p.type === H && p.key == null && (D = be(p.props.children)), c = he(e, U(D) ? D : [D], t, _, n, o, r, i, c, s, u), l.base = t.__e, t.__u &= -161, l.__h.length && i.push(l), b && (l.__E = l.__ = null);
        } catch (M) {
          if (t.__v = null, s || r != null)
            if (M.then) {
              for (t.__u |= s ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; )
                c = c.nextSibling;
              r[r.indexOf(c)] = null, t.__e = c;
            } else {
              for (ie = r.length; ie--; )
                K(r[ie]);
              Y(t);
            }
          else
            t.__e = _.__e, t.__k = _.__k, M.then || Y(t);
          a.__e(M, t, _);
        }
      else
        r == null && t.__v == _.__v ? (t.__k = _.__k, t.__e = _.__e) : c = t.__e = Ke(_.__e, t, _, n, o, r, i, s, u);
    return (p = a.diffed) && p(t), 128 & t.__u ? void 0 : c;
  }
  function Y(e) {
    e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(Y);
  }
  function ge(e, t, _) {
    for (var n = 0; n < _.length; n++)
      ee(_[n], _[++n], _[++n]);
    a.__c && a.__c(t, e), e.some(function(o) {
      try {
        e = o.__h, o.__h = [], e.some(function(r) {
          r.call(o);
        });
      } catch (r) {
        a.__e(r, o.__v);
      }
    });
  }
  function be(e) {
    return typeof e != "object" || e == null || e.__b && e.__b > 0 ? e : U(e) ? e.map(be) : P({}, e);
  }
  function Ke(e, t, _, n, o, r, i, c, s) {
    var u, p, l, d, f, g, w, b = _.props || B, v = t.props, h = t.type;
    if (h == "svg" ? o = "http://www.w3.org/2000/svg" : h == "math" ? o = "http://www.w3.org/1998/Math/MathML" : o || (o = "http://www.w3.org/1999/xhtml"), r != null) {
      for (u = 0; u < r.length; u++)
        if ((f = r[u]) && "setAttribute" in f == !!h && (h ? f.localName == h : f.nodeType == 3)) {
          e = f, r[u] = null;
          break;
        }
    }
    if (e == null) {
      if (h == null)
        return document.createTextNode(v);
      e = document.createElementNS(o, h, v.is && v), c && (a.__m && a.__m(t, r), c = !1), r = null;
    }
    if (h == null)
      b === v || c && e.data == v || (e.data = v);
    else {
      if (r = r && $.call(e.childNodes), !c && r != null)
        for (b = {}, u = 0; u < e.attributes.length; u++)
          b[(f = e.attributes[u]).name] = f.value;
      for (u in b)
        if (f = b[u], u != "children") {
          if (u == "dangerouslySetInnerHTML")
            l = f;
          else if (!(u in v)) {
            if (u == "value" && "defaultValue" in v || u == "checked" && "defaultChecked" in v)
              continue;
            F(e, u, null, f, o);
          }
        }
      for (u in v)
        f = v[u], u == "children" ? d = f : u == "dangerouslySetInnerHTML" ? p = f : u == "value" ? g = f : u == "checked" ? w = f : c && typeof f != "function" || b[u] === f || F(e, u, f, b[u], o);
      if (p)
        c || l && (p.__html == l.__html || p.__html == e.innerHTML) || (e.innerHTML = p.__html), t.__k = [];
      else if (l && (e.innerHTML = ""), he(t.type == "template" ? e.content : e, U(d) ? d : [d], t, _, n, h == "foreignObject" ? "http://www.w3.org/1999/xhtml" : o, r, i, r ? r[0] : _.__k && A(_, 0), c, s), r != null)
        for (u = r.length; u--; )
          K(r[u]);
      c || (u = "value", h == "progress" && g == null ? e.removeAttribute("value") : g != null && (g !== e[u] || h == "progress" && !g || h == "option" && g != b[u]) && F(e, u, g, b[u], o), u = "checked", w != null && w != e[u] && F(e, u, w, b[u], o));
    }
    return e;
  }
  function ee(e, t, _) {
    try {
      if (typeof e == "function") {
        var n = typeof e.__u == "function";
        n && e.__u(), n && t == null || (e.__u = e(t));
      } else
        e.current = t;
    } catch (o) {
      a.__e(o, _);
    }
  }
  function ke(e, t, _) {
    var n, o;
    if (a.unmount && a.unmount(e), (n = e.ref) && (n.current && n.current != e.__e || ee(n, null, t)), (n = e.__c) != null) {
      if (n.componentWillUnmount)
        try {
          n.componentWillUnmount();
        } catch (r) {
          a.__e(r, t);
        }
      n.base = n.__P = null;
    }
    if (n = e.__k)
      for (o = 0; o < n.length; o++)
        n[o] && ke(n[o], t, _ || typeof e.type != "function");
    _ || K(e.__e), e.__c = e.__ = e.__e = void 0;
  }
  function Qe(e, t, _) {
    return this.constructor(e, _);
  }
  function Xe(e, t, _) {
    var n, o, r, i;
    t == document && (t = document.documentElement), a.__ && a.__(e, t), o = (n = typeof _ == "function") ? null : _ && _.__k || t.__k, r = [], i = [], X(t, e = (!n && _ || t).__k = Q(H, null, [e]), o || B, B, t.namespaceURI, !n && _ ? [_] : o ? null : t.firstChild ? $.call(t.childNodes) : null, r, !n && _ ? _ : o ? o.__e : t.firstChild, n, i), ge(r, e, i);
  }
  $ = fe.slice, a = { __e: function(e, t, _, n) {
    for (var o, r, i; t = t.__; )
      if ((o = t.__c) && !o.__)
        try {
          if ((r = o.constructor) && r.getDerivedStateFromError != null && (o.setState(r.getDerivedStateFromError(e)), i = o.__d), o.componentDidCatch != null && (o.componentDidCatch(e, n || {}), i = o.__d), i)
            return o.__E = o;
        } catch (c) {
          e = c;
        }
    throw e;
  } }, C = 0, N.prototype.setState = function(e, t) {
    var _;
    _ = this.__s != null && this.__s != this.state ? this.__s : this.__s = P({}, this.state), typeof e == "function" && (e = e(P({}, _), this.props)), e && P(_, e), e != null && this.__v && (t && this._sb.push(t), de(this));
  }, N.prototype.forceUpdate = function(e) {
    this.__v && (this.__e = !0, e && this.__h.push(e), de(this));
  }, N.prototype.render = H, E = [], ce = typeof Promise == "function" ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, se = function(e, t) {
    return e.__v.__b - t.__v.__b;
  }, O.__r = 0, ae = /(PointerCapture)$|Capture$/i, G = 0, Z = ye(!1), J = ye(!0);
  var Ye = 0;
  function k(e, t, _, n, o, r) {
    t || (t = {});
    var i, c, s = t;
    if ("ref" in s)
      for (c in s = {}, t)
        c == "ref" ? i = t[c] : s[c] = t[c];
    var u = { type: e, props: s, key: _, ref: i, __k: null, __: null, __b: 0, __e: null, __c: null, constructor: void 0, __v: --Ye, __i: -1, __u: 0, __source: o, __self: r };
    if (typeof e == "function" && (i = e.defaultProps))
      for (c in i)
        s[c] === void 0 && (s[c] = i[c]);
    return a.vnode && a.vnode(u), u;
  }
  var j, m, te, we, _e = 0, $e = [], y = a, xe = y.__b, Pe = y.__r, Ne = y.diffed, Ce = y.__c, Se = y.unmount, Ee = y.__;
  function He(e, t) {
    y.__h && y.__h(m, e, _e || t), _e = 0;
    var _ = m.__H || (m.__H = { __: [], __h: [] });
    return e >= _.__.length && _.__.push({}), _.__[e];
  }
  function ne(e) {
    return _e = 1, et(Ae, e);
  }
  function et(e, t, _) {
    var n = He(j++, 2);
    if (n.t = e, !n.__c && (n.__ = [_ ? _(t) : Ae(void 0, t), function(c) {
      var s = n.__N ? n.__N[0] : n.__[0], u = n.t(s, c);
      s !== u && (n.__N = [u, n.__[1]], n.__c.setState({}));
    }], n.__c = m, !m.__f)) {
      var o = function(c, s, u) {
        if (!n.__c.__H)
          return !0;
        var p = n.__c.__H.__.filter(function(d) {
          return !!d.__c;
        });
        if (p.every(function(d) {
          return !d.__N;
        }))
          return !r || r.call(this, c, s, u);
        var l = n.__c.props !== c;
        return p.forEach(function(d) {
          if (d.__N) {
            var f = d.__[0];
            d.__ = d.__N, d.__N = void 0, f !== d.__[0] && (l = !0);
          }
        }), r && r.call(this, c, s, u) || l;
      };
      m.__f = !0;
      var r = m.shouldComponentUpdate, i = m.componentWillUpdate;
      m.componentWillUpdate = function(c, s, u) {
        if (this.__e) {
          var p = r;
          r = void 0, o(c, s, u), r = p;
        }
        i && i.call(this, c, s, u);
      }, m.shouldComponentUpdate = o;
    }
    return n.__N || n.__;
  }
  function tt(e, t) {
    var _ = He(j++, 3);
    !y.__s && ot(_.__H, t) && (_.__ = e, _.u = t, m.__H.__h.push(_));
  }
  function _t() {
    for (var e; e = $e.shift(); )
      if (e.__P && e.__H)
        try {
          e.__H.__h.forEach(z), e.__H.__h.forEach(oe), e.__H.__h = [];
        } catch (t) {
          e.__H.__h = [], y.__e(t, e.__v);
        }
  }
  y.__b = function(e) {
    m = null, xe && xe(e);
  }, y.__ = function(e, t) {
    e && t.__k && t.__k.__m && (e.__m = t.__k.__m), Ee && Ee(e, t);
  }, y.__r = function(e) {
    Pe && Pe(e), j = 0;
    var t = (m = e.__c).__H;
    t && (te === m ? (t.__h = [], m.__h = [], t.__.forEach(function(_) {
      _.__N && (_.__ = _.__N), _.u = _.__N = void 0;
    })) : (t.__h.forEach(z), t.__h.forEach(oe), t.__h = [], j = 0)), te = m;
  }, y.diffed = function(e) {
    Ne && Ne(e);
    var t = e.__c;
    t && t.__H && (t.__H.__h.length && ($e.push(t) !== 1 && we === y.requestAnimationFrame || ((we = y.requestAnimationFrame) || nt)(_t)), t.__H.__.forEach(function(_) {
      _.u && (_.__H = _.u), _.u = void 0;
    })), te = m = null;
  }, y.__c = function(e, t) {
    t.some(function(_) {
      try {
        _.__h.forEach(z), _.__h = _.__h.filter(function(n) {
          return !n.__ || oe(n);
        });
      } catch (n) {
        t.some(function(o) {
          o.__h && (o.__h = []);
        }), t = [], y.__e(n, _.__v);
      }
    }), Ce && Ce(e, t);
  }, y.unmount = function(e) {
    Se && Se(e);
    var t, _ = e.__c;
    _ && _.__H && (_.__H.__.forEach(function(n) {
      try {
        z(n);
      } catch (o) {
        t = o;
      }
    }), _.__H = void 0, t && y.__e(t, _.__v));
  };
  var Te = typeof requestAnimationFrame == "function";
  function nt(e) {
    var t, _ = function() {
      clearTimeout(n), Te && cancelAnimationFrame(t), setTimeout(e);
    }, n = setTimeout(_, 35);
    Te && (t = requestAnimationFrame(_));
  }
  function z(e) {
    var t = m, _ = e.__c;
    typeof _ == "function" && (e.__c = void 0, _()), m = t;
  }
  function oe(e) {
    var t = m;
    e.__c = e.__(), m = t;
  }
  function ot(e, t) {
    return !e || e.length !== t.length || t.some(function(_, n) {
      return _ !== e[n];
    });
  }
  function Ae(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function rt(e, t) {
    for (var _ in t)
      e[_] = t[_];
    return e;
  }
  function Me(e, t) {
    for (var _ in e)
      if (_ !== "__source" && !(_ in t))
        return !0;
    for (var n in t)
      if (n !== "__source" && e[n] !== t[n])
        return !0;
    return !1;
  }
  function Be(e, t) {
    this.props = e, this.context = t;
  }
  (Be.prototype = new N()).isPureReactComponent = !0, Be.prototype.shouldComponentUpdate = function(e, t) {
    return Me(this.props, e) || Me(this.state, t);
  };
  var Ue = a.__b;
  a.__b = function(e) {
    e.type && e.type.__f && e.ref && (e.props.ref = e.ref, e.ref = null), Ue && Ue(e);
  };
  var it = a.__e;
  a.__e = function(e, t, _, n) {
    if (e.then) {
      for (var o, r = t; r = r.__; )
        if ((o = r.__c) && o.__c)
          return t.__e == null && (t.__e = _.__e, t.__k = _.__k), o.__c(e, t);
    }
    it(e, t, _, n);
  };
  var Le = a.unmount;
  function De(e, t, _) {
    return e && (e.__c && e.__c.__H && (e.__c.__H.__.forEach(function(n) {
      typeof n.__c == "function" && n.__c();
    }), e.__c.__H = null), (e = rt({}, e)).__c != null && (e.__c.__P === _ && (e.__c.__P = t), e.__c.__e = !0, e.__c = null), e.__k = e.__k && e.__k.map(function(n) {
      return De(n, t, _);
    })), e;
  }
  function Re(e, t, _) {
    return e && _ && (e.__v = null, e.__k = e.__k && e.__k.map(function(n) {
      return Re(n, t, _);
    }), e.__c && e.__c.__P === t && (e.__e && _.appendChild(e.__e), e.__c.__e = !0, e.__c.__P = _)), e;
  }
  function re() {
    this.__u = 0, this.o = null, this.__b = null;
  }
  function Oe(e) {
    var t = e.__.__c;
    return t && t.__a && t.__a(e);
  }
  function V() {
    this.i = null, this.l = null;
  }
  a.unmount = function(e) {
    var t = e.__c;
    t && t.__R && t.__R(), t && 32 & e.__u && (e.type = null), Le && Le(e);
  }, (re.prototype = new N()).__c = function(e, t) {
    var _ = t.__c, n = this;
    n.o == null && (n.o = []), n.o.push(_);
    var o = Oe(n.__v), r = !1, i = function() {
      r || (r = !0, _.__R = null, o ? o(c) : c());
    };
    _.__R = i;
    var c = function() {
      if (!--n.__u) {
        if (n.state.__a) {
          var s = n.state.__a;
          n.__v.__k[0] = Re(s, s.__c.__P, s.__c.__O);
        }
        var u;
        for (n.setState({ __a: n.__b = null }); u = n.o.pop(); )
          u.forceUpdate();
      }
    };
    n.__u++ || 32 & t.__u || n.setState({ __a: n.__b = n.__v.__k[0] }), e.then(i, i);
  }, re.prototype.componentWillUnmount = function() {
    this.o = [];
  }, re.prototype.render = function(e, t) {
    if (this.__b) {
      if (this.__v.__k) {
        var _ = document.createElement("div"), n = this.__v.__k[0].__c;
        this.__v.__k[0] = De(this.__b, _, n.__O = n.__P);
      }
      this.__b = null;
    }
    var o = t.__a && Q(H, null, e.fallback);
    return o && (o.__u &= -33), [Q(H, null, t.__a ? null : e.children), o];
  };
  var We = function(e, t, _) {
    if (++_[1] === _[0] && e.l.delete(t), e.props.revealOrder && (e.props.revealOrder[0] !== "t" || !e.l.size))
      for (_ = e.i; _; ) {
        for (; _.length > 3; )
          _.pop()();
        if (_[1] < _[0])
          break;
        e.i = _ = _[2];
      }
  };
  (V.prototype = new N()).__a = function(e) {
    var t = this, _ = Oe(t.__v), n = t.l.get(e);
    return n[0]++, function(o) {
      var r = function() {
        t.props.revealOrder ? (n.push(o), We(t, e, n)) : o();
      };
      _ ? _(r) : r();
    };
  }, V.prototype.render = function(e) {
    this.i = null, this.l = /* @__PURE__ */ new Map();
    var t = W(e.children);
    e.revealOrder && e.revealOrder[0] === "b" && t.reverse();
    for (var _ = t.length; _--; )
      this.l.set(t[_], this.i = [1, 0, this.i]);
    return e.children;
  }, V.prototype.componentDidUpdate = V.prototype.componentDidMount = function() {
    var e = this;
    this.l.forEach(function(t, _) {
      We(e, _, t);
    });
  };
  var lt = typeof Symbol < "u" && Symbol.for && Symbol.for("react.element") || 60103, ut = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, ct = /^on(Ani|Tra|Tou|BeforeInp|Compo)/, st = /[A-Z0-9]/g, at = typeof document < "u", ft = function(e) {
    return (typeof Symbol < "u" && typeof Symbol() == "symbol" ? /fil|che|rad/ : /fil|che|ra/).test(e);
  };
  function Fe(e, t, _) {
    return t.__k == null && (t.textContent = ""), Xe(e, t), typeof _ == "function" && _(), e ? e.__c : null;
  }
  N.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e) {
    Object.defineProperty(N.prototype, e, { configurable: !0, get: function() {
      return this["UNSAFE_" + e];
    }, set: function(t) {
      Object.defineProperty(this, e, { configurable: !0, writable: !0, value: t });
    } });
  });
  var je = a.event;
  function pt() {
  }
  function dt() {
    return this.cancelBubble;
  }
  function ht() {
    return this.defaultPrevented;
  }
  a.event = function(e) {
    return je && (e = je(e)), e.persist = pt, e.isPropagationStopped = dt, e.isDefaultPrevented = ht, e.nativeEvent = e;
  };
  var vt = { enumerable: !1, configurable: !0, get: function() {
    return this.class;
  } }, ze = a.vnode;
  a.vnode = function(e) {
    typeof e.type == "string" && function(t) {
      var _ = t.props, n = t.type, o = {}, r = n.indexOf("-") === -1;
      for (var i in _) {
        var c = _[i];
        if (!(i === "value" && "defaultValue" in _ && c == null || at && i === "children" && n === "noscript" || i === "class" || i === "className")) {
          var s = i.toLowerCase();
          i === "defaultValue" && "value" in _ && _.value == null ? i = "value" : i === "download" && c === !0 ? c = "" : s === "translate" && c === "no" ? c = !1 : s[0] === "o" && s[1] === "n" ? s === "ondoubleclick" ? i = "ondblclick" : s !== "onchange" || n !== "input" && n !== "textarea" || ft(_.type) ? s === "onfocus" ? i = "onfocusin" : s === "onblur" ? i = "onfocusout" : ct.test(i) && (i = s) : s = i = "oninput" : r && ut.test(i) ? i = i.replace(st, "-$&").toLowerCase() : c === null && (c = void 0), s === "oninput" && o[i = s] && (i = "oninputCapture"), o[i] = c;
        }
      }
      n == "select" && o.multiple && Array.isArray(o.value) && (o.value = W(_.children).forEach(function(u) {
        u.props.selected = o.value.indexOf(u.props.value) != -1;
      })), n == "select" && o.defaultValue != null && (o.value = W(_.children).forEach(function(u) {
        u.props.selected = o.multiple ? o.defaultValue.indexOf(u.props.value) != -1 : o.defaultValue == u.props.value;
      })), _.class && !_.className ? (o.class = _.class, Object.defineProperty(o, "className", vt)) : (_.className && !_.class || _.class && _.className) && (o.class = o.className = _.className), t.props = o;
    }(e), e.$$typeof = lt, ze && ze(e);
  };
  var Ve = a.__r;
  a.__r = function(e) {
    Ve && Ve(e), e.__c;
  };
  var Ie = a.diffed;
  a.diffed = function(e) {
    Ie && Ie(e);
    var t = e.props, _ = e.__e;
    _ != null && e.type === "textarea" && "value" in t && t.value !== _.value && (_.value = t.value == null ? "" : t.value);
  };
  function mt() {
    const [e, t] = ne(0), _ = window.Blinko.i18n;
    return /* @__PURE__ */ k(H, { children: [
      /* @__PURE__ */ k("h1", { children: _.t("title") }),
      /* @__PURE__ */ k("div", { class: "card", children: /* @__PURE__ */ k("button", { onClick: () => {
        t((n) => n + 1), console.log(window.Blinko.toast.success(_.t("successMessage")));
      }, children: _.t("countLabel", { count: e }) }) })
    ] });
  }
  function yt() {
    const [e, t] = ne(""), [_, n] = ne(!0), o = window.Blinko.i18n;
    tt(() => {
      window.Blinko.api.config.getPluginConfig.query({
        pluginName: "my-note-plugin"
      }).then((i) => {
        t(i.apiToken);
      });
    }, []);
    const r = async () => {
      window.Blinko.toast.success(o.t("settingsSaved")), window.Blinko.closeDialog(), await window.Blinko.api.config.setPluginConfig.mutate({
        pluginName: "my-note-plugin",
        key: "apiToken",
        value: e
      }), window.Blinko.api.config.getPluginConfig.query({
        pluginName: "my-note-plugin"
      });
    };
    return /* @__PURE__ */ k("div", { className: "max-w-2xl mx-auto p-2 rounded-lg", children: [
      /* @__PURE__ */ k("div", { className: "mb-6", children: /* @__PURE__ */ k("label", { className: "block text-sm font-medium mb-2", children: [
        o.t("apiTokenLabel"),
        /* @__PURE__ */ k(
          "input",
          {
            value: e,
            onChange: (i) => t(i.currentTarget.value),
            placeholder: o.t("enterApiToken"),
            className: "mt-1 block w-full px-3 py-2 border rounded-md shadow-sm sm:text-sm bg-primary!"
          }
        )
      ] }) }),
      /* @__PURE__ */ k("div", { className: "mb-6", children: /* @__PURE__ */ k("label", { className: "flex items-center space-x-2", children: [
        /* @__PURE__ */ k(
          "input",
          {
            type: "checkbox",
            checked: _,
            onChange: (i) => n(i.currentTarget.checked),
            className: "h-4 w-4 text-primary-foreground bg-primary rounded"
          }
        ),
        /* @__PURE__ */ k("span", { className: "text-sm text-desc", children: o.t("enableNotifications") })
      ] }) }),
      /* @__PURE__ */ k(
        "button",
        {
          onClick: r,
          className: "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md bg-primary text-primary-foreground",
          children: o.t("saveSettings")
        }
      )
    ] });
  }
  const gt = {
    name: "blinko-plugin-demo",
    author: "blinko-offical",
    url: "https://github.com/blinko-space/blinko-plugin-template",
    version: "0.0.4",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Blinko plugin demo",
      zh: "Blinko插件示例"
    },
    description: {
      default: "This is a blinko plugin demo, you can use it as a template to create your own plugin.",
      zh: "这是一个blinko插件示例，你可以使用它作为模板来创建自己的插件。"
    },
    readme: {
      default: "README.md",
      zh: "README_zh.md"
    }
  }, bt = {
    title: "My Plugin",
    countLabel: "Count is {{count}}",
    successMessage: "Success!"
  }, kt = {
    title: "我的插件",
    countLabel: "计数为 {{count}}",
    successMessage: "成功！"
  };
  System.register([], (e) => ({
    execute: () => {
      e("default", class {
        constructor() {
          // Flag indicating this plugin has a settings panel
          le(this, "withSettingPanel", !0);
          /**
           * Renders the settings panel UI
           * @returns {HTMLElement} Container element with rendered settings component
           */
          le(this, "renderSettingPanel", () => {
            const _ = document.createElement("div");
            return Fe(/* @__PURE__ */ k(yt, {}), _), _;
          });
          Object.assign(this, gt);
        }
        /**
         * Initializes the plugin
         * Sets up toolbar icons, right-click menus, and AI write prompts
         */
        async init() {
          this.initI18n(), window.Blinko.addToolBarIcon({
            name: "test",
            icon: "<svg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 24 24' fill='none' stroke='currentColor' stroke-width='2' stroke-linecap='round' stroke-linejoin='round' class='lucide lucide-file'><path d='M13 3H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z'/><polyline points='14 3 14 9 19 9'/></svg>",
            placement: "top",
            tooltip: "testtootip",
            content: () => {
              const _ = document.createElement("div");
              return _.setAttribute("data-plugin", "my-note-plugin"), Fe(/* @__PURE__ */ k(mt, {}), _), _;
            }
          }), window.Blinko.addRightClickMenu({
            name: "custom-action",
            label: "Custom Action",
            icon: "tabler:accessible",
            onClick: (_) => {
              console.log("Custom action triggered", _);
            }
          }), window.Blinko.addAiWritePrompt(
            "Translate Content",
            "Please translate the following content into English:",
            "material-symbols:translate"
          );
        }
        /**
         * Initializes internationalization resources
         * Adds English and Chinese translation bundles
         */
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", bt), window.Blinko.i18n.addResourceBundle("zh", "translation", kt);
        }
        /**
         * Cleanup function called when plugin is disabled
         */
        destroy() {
          console.log("Plugin destroyed");
        }
      });
    }
  }));
})();
