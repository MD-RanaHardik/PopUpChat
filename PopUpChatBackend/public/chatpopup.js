
var script1 = document.createElement("script");
// script1.type  = "text/javascript";
// script1.async = true;
script1.src = "https://cdn.tailwindcss.com";
// use this for linked script
document.head.appendChild(script1);


/*!
 * Socket.IO v4.5.4
 * (c) 2014-2022 Guillermo Rauch
 * Released under the MIT License.
 */
!function (t, e) { "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : (t = "undefined" != typeof globalThis ? globalThis : t || self).io = e() }(this, (function () { "use strict"; function t(e) { return t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (t) { return typeof t } : function (t) { return t && "function" == typeof Symbol && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t }, t(e) } function e(t, e) { if (!(t instanceof e)) throw new TypeError("Cannot call a class as a function") } function n(t, e) { for (var n = 0; n < e.length; n++) { var r = e[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), Object.defineProperty(t, r.key, r) } } function r(t, e, r) { return e && n(t.prototype, e), r && n(t, r), Object.defineProperty(t, "prototype", { writable: !1 }), t } function i() { return i = Object.assign ? Object.assign.bind() : function (t) { for (var e = 1; e < arguments.length; e++) { var n = arguments[e]; for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]) } return t }, i.apply(this, arguments) } function o(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && a(t, e) } function s(t) { return s = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t) }, s(t) } function a(t, e) { return a = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t }, a(t, e) } function c() { if ("undefined" == typeof Reflect || !Reflect.construct) return !1; if (Reflect.construct.sham) return !1; if ("function" == typeof Proxy) return !0; try { return Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], (function () { }))), !0 } catch (t) { return !1 } } function u(t, e, n) { return u = c() ? Reflect.construct.bind() : function (t, e, n) { var r = [null]; r.push.apply(r, e); var i = new (Function.bind.apply(t, r)); return n && a(i, n.prototype), i }, u.apply(null, arguments) } function h(t) { var e = "function" == typeof Map ? new Map : void 0; return h = function (t) { if (null === t || (n = t, -1 === Function.toString.call(n).indexOf("[native code]"))) return t; var n; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== e) { if (e.has(t)) return e.get(t); e.set(t, r) } function r() { return u(t, arguments, s(this).constructor) } return r.prototype = Object.create(t.prototype, { constructor: { value: r, enumerable: !1, writable: !0, configurable: !0 } }), a(r, t) }, h(t) } function f(t) { if (void 0 === t) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return t } function l(t, e) { if (e && ("object" == typeof e || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return f(t) } function p(t) { var e = c(); return function () { var n, r = s(t); if (e) { var i = s(this).constructor; n = Reflect.construct(r, arguments, i) } else n = r.apply(this, arguments); return l(this, n) } } function d(t, e) { for (; !Object.prototype.hasOwnProperty.call(t, e) && null !== (t = s(t));); return t } function y() { return y = "undefined" != typeof Reflect && Reflect.get ? Reflect.get.bind() : function (t, e, n) { var r = d(t, e); if (r) { var i = Object.getOwnPropertyDescriptor(r, e); return i.get ? i.get.call(arguments.length < 3 ? t : n) : i.value } }, y.apply(this, arguments) } function v(t, e) { (null == e || e > t.length) && (e = t.length); for (var n = 0, r = new Array(e); n < e; n++)r[n] = t[n]; return r } function g(t, e) { var n = "undefined" != typeof Symbol && t[Symbol.iterator] || t["@@iterator"]; if (!n) { if (Array.isArray(t) || (n = function (t, e) { if (t) { if ("string" == typeof t) return v(t, e); var n = Object.prototype.toString.call(t).slice(8, -1); return "Object" === n && t.constructor && (n = t.constructor.name), "Map" === n || "Set" === n ? Array.from(t) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? v(t, e) : void 0 } }(t)) || e && t && "number" == typeof t.length) { n && (t = n); var r = 0, i = function () { }; return { s: i, n: function () { return r >= t.length ? { done: !0 } : { done: !1, value: t[r++] } }, e: function (t) { throw t }, f: i } } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.") } var o, s = !0, a = !1; return { s: function () { n = n.call(t) }, n: function () { var t = n.next(); return s = t.done, t }, e: function (t) { a = !0, o = t }, f: function () { try { s || null == n.return || n.return() } finally { if (a) throw o } } } } var m = Object.create(null); m.open = "0", m.close = "1", m.ping = "2", m.pong = "3", m.message = "4", m.upgrade = "5", m.noop = "6"; var b = Object.create(null); Object.keys(m).forEach((function (t) { b[m[t]] = t })); for (var k = { type: "error", data: "parser error" }, w = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === Object.prototype.toString.call(Blob), _ = "function" == typeof ArrayBuffer, E = function (t, e, n) { var r, i = t.type, o = t.data; return w && o instanceof Blob ? e ? n(o) : O(o, n) : _ && (o instanceof ArrayBuffer || (r = o, "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(r) : r && r.buffer instanceof ArrayBuffer)) ? e ? n(o) : O(new Blob([o]), n) : n(m[i] + (o || "")) }, O = function (t, e) { var n = new FileReader; return n.onload = function () { var t = n.result.split(",")[1]; e("b" + t) }, n.readAsDataURL(t) }, A = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", R = "undefined" == typeof Uint8Array ? [] : new Uint8Array(256), T = 0; T < A.length; T++)R[A.charCodeAt(T)] = T; var C = "function" == typeof ArrayBuffer, B = function (t, e) { if ("string" != typeof t) return { type: "message", data: N(t, e) }; var n = t.charAt(0); return "b" === n ? { type: "message", data: S(t.substring(1), e) } : b[n] ? t.length > 1 ? { type: b[n], data: t.substring(1) } : { type: b[n] } : k }, S = function (t, e) { if (C) { var n = function (t) { var e, n, r, i, o, s = .75 * t.length, a = t.length, c = 0; "=" === t[t.length - 1] && (s--, "=" === t[t.length - 2] && s--); var u = new ArrayBuffer(s), h = new Uint8Array(u); for (e = 0; e < a; e += 4)n = R[t.charCodeAt(e)], r = R[t.charCodeAt(e + 1)], i = R[t.charCodeAt(e + 2)], o = R[t.charCodeAt(e + 3)], h[c++] = n << 2 | r >> 4, h[c++] = (15 & r) << 4 | i >> 2, h[c++] = (3 & i) << 6 | 63 & o; return u }(t); return N(n, e) } return { base64: !0, data: t } }, N = function (t, e) { return "blob" === e && t instanceof ArrayBuffer ? new Blob([t]) : t }, x = String.fromCharCode(30); function L(t) { if (t) return function (t) { for (var e in L.prototype) t[e] = L.prototype[e]; return t }(t) } L.prototype.on = L.prototype.addEventListener = function (t, e) { return this._callbacks = this._callbacks || {}, (this._callbacks["$" + t] = this._callbacks["$" + t] || []).push(e), this }, L.prototype.once = function (t, e) { function n() { this.off(t, n), e.apply(this, arguments) } return n.fn = e, this.on(t, n), this }, L.prototype.off = L.prototype.removeListener = L.prototype.removeAllListeners = L.prototype.removeEventListener = function (t, e) { if (this._callbacks = this._callbacks || {}, 0 == arguments.length) return this._callbacks = {}, this; var n, r = this._callbacks["$" + t]; if (!r) return this; if (1 == arguments.length) return delete this._callbacks["$" + t], this; for (var i = 0; i < r.length; i++)if ((n = r[i]) === e || n.fn === e) { r.splice(i, 1); break } return 0 === r.length && delete this._callbacks["$" + t], this }, L.prototype.emit = function (t) { this._callbacks = this._callbacks || {}; for (var e = new Array(arguments.length - 1), n = this._callbacks["$" + t], r = 1; r < arguments.length; r++)e[r - 1] = arguments[r]; if (n) { r = 0; for (var i = (n = n.slice(0)).length; r < i; ++r)n[r].apply(this, e) } return this }, L.prototype.emitReserved = L.prototype.emit, L.prototype.listeners = function (t) { return this._callbacks = this._callbacks || {}, this._callbacks["$" + t] || [] }, L.prototype.hasListeners = function (t) { return !!this.listeners(t).length }; var P = "undefined" != typeof self ? self : "undefined" != typeof window ? window : Function("return this")(); function j(t) { for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r]; return n.reduce((function (e, n) { return t.hasOwnProperty(n) && (e[n] = t[n]), e }), {}) } var q = setTimeout, I = clearTimeout; function D(t, e) { e.useNativeTimers ? (t.setTimeoutFn = q.bind(P), t.clearTimeoutFn = I.bind(P)) : (t.setTimeoutFn = setTimeout.bind(P), t.clearTimeoutFn = clearTimeout.bind(P)) } var F, M = function (t) { o(i, t); var n = p(i); function i(t, r, o) { var s; return e(this, i), (s = n.call(this, t)).description = r, s.context = o, s.type = "TransportError", s } return r(i) }(h(Error)), U = function (t) { o(i, t); var n = p(i); function i(t) { var r; return e(this, i), (r = n.call(this)).writable = !1, D(f(r), t), r.opts = t, r.query = t.query, r.readyState = "", r.socket = t.socket, r } return r(i, [{ key: "onError", value: function (t, e, n) { return y(s(i.prototype), "emitReserved", this).call(this, "error", new M(t, e, n)), this } }, { key: "open", value: function () { return "closed" !== this.readyState && "" !== this.readyState || (this.readyState = "opening", this.doOpen()), this } }, { key: "close", value: function () { return "opening" !== this.readyState && "open" !== this.readyState || (this.doClose(), this.onClose()), this } }, { key: "send", value: function (t) { "open" === this.readyState && this.write(t) } }, { key: "onOpen", value: function () { this.readyState = "open", this.writable = !0, y(s(i.prototype), "emitReserved", this).call(this, "open") } }, { key: "onData", value: function (t) { var e = B(t, this.socket.binaryType); this.onPacket(e) } }, { key: "onPacket", value: function (t) { y(s(i.prototype), "emitReserved", this).call(this, "packet", t) } }, { key: "onClose", value: function (t) { this.readyState = "closed", y(s(i.prototype), "emitReserved", this).call(this, "close", t) } }]), i }(L), V = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz-_".split(""), H = {}, K = 0, Y = 0; function z(t) { var e = ""; do { e = V[t % 64] + e, t = Math.floor(t / 64) } while (t > 0); return e } function W() { var t = z(+new Date); return t !== F ? (K = 0, F = t) : t + "." + z(K++) } for (; Y < 64; Y++)H[V[Y]] = Y; function $(t) { var e = ""; for (var n in t) t.hasOwnProperty(n) && (e.length && (e += "&"), e += encodeURIComponent(n) + "=" + encodeURIComponent(t[n])); return e } function J(t) { for (var e = {}, n = t.split("&"), r = 0, i = n.length; r < i; r++) { var o = n[r].split("="); e[decodeURIComponent(o[0])] = decodeURIComponent(o[1]) } return e } var X = !1; try { X = "undefined" != typeof XMLHttpRequest && "withCredentials" in new XMLHttpRequest } catch (t) { } var G = X; function Q(t) { var e = t.xdomain; try { if ("undefined" != typeof XMLHttpRequest && (!e || G)) return new XMLHttpRequest } catch (t) { } if (!e) try { return new (P[["Active"].concat("Object").join("X")])("Microsoft.XMLHTTP") } catch (t) { } } function Z() { } var tt = null != new Q({ xdomain: !1 }).responseType, et = function (t) { o(s, t); var n = p(s); function s(t) { var r; if (e(this, s), (r = n.call(this, t)).polling = !1, "undefined" != typeof location) { var i = "https:" === location.protocol, o = location.port; o || (o = i ? "443" : "80"), r.xd = "undefined" != typeof location && t.hostname !== location.hostname || o !== t.port, r.xs = t.secure !== i } var a = t && t.forceBase64; return r.supportsBinary = tt && !a, r } return r(s, [{ key: "name", get: function () { return "polling" } }, { key: "doOpen", value: function () { this.poll() } }, { key: "pause", value: function (t) { var e = this; this.readyState = "pausing"; var n = function () { e.readyState = "paused", t() }; if (this.polling || !this.writable) { var r = 0; this.polling && (r++, this.once("pollComplete", (function () { --r || n() }))), this.writable || (r++, this.once("drain", (function () { --r || n() }))) } else n() } }, { key: "poll", value: function () { this.polling = !0, this.doPoll(), this.emitReserved("poll") } }, { key: "onData", value: function (t) { var e = this; (function (t, e) { for (var n = t.split(x), r = [], i = 0; i < n.length; i++) { var o = B(n[i], e); if (r.push(o), "error" === o.type) break } return r })(t, this.socket.binaryType).forEach((function (t) { if ("opening" === e.readyState && "open" === t.type && e.onOpen(), "close" === t.type) return e.onClose({ description: "transport closed by the server" }), !1; e.onPacket(t) })), "closed" !== this.readyState && (this.polling = !1, this.emitReserved("pollComplete"), "open" === this.readyState && this.poll()) } }, { key: "doClose", value: function () { var t = this, e = function () { t.write([{ type: "close" }]) }; "open" === this.readyState ? e() : this.once("open", e) } }, { key: "write", value: function (t) { var e = this; this.writable = !1, function (t, e) { var n = t.length, r = new Array(n), i = 0; t.forEach((function (t, o) { E(t, !1, (function (t) { r[o] = t, ++i === n && e(r.join(x)) })) })) }(t, (function (t) { e.doWrite(t, (function () { e.writable = !0, e.emitReserved("drain") })) })) } }, { key: "uri", value: function () { var t = this.query || {}, e = this.opts.secure ? "https" : "http", n = ""; !1 !== this.opts.timestampRequests && (t[this.opts.timestampParam] = W()), this.supportsBinary || t.sid || (t.b64 = 1), this.opts.port && ("https" === e && 443 !== Number(this.opts.port) || "http" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port); var r = $(t); return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "") } }, { key: "request", value: function () { var t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; return i(t, { xd: this.xd, xs: this.xs }, this.opts), new nt(this.uri(), t) } }, { key: "doWrite", value: function (t, e) { var n = this, r = this.request({ method: "POST", data: t }); r.on("success", e), r.on("error", (function (t, e) { n.onError("xhr post error", t, e) })) } }, { key: "doPoll", value: function () { var t = this, e = this.request(); e.on("data", this.onData.bind(this)), e.on("error", (function (e, n) { t.onError("xhr poll error", e, n) })), this.pollXhr = e } }]), s }(U), nt = function (t) { o(i, t); var n = p(i); function i(t, r) { var o; return e(this, i), D(f(o = n.call(this)), r), o.opts = r, o.method = r.method || "GET", o.uri = t, o.async = !1 !== r.async, o.data = void 0 !== r.data ? r.data : null, o.create(), o } return r(i, [{ key: "create", value: function () { var t = this, e = j(this.opts, "agent", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "autoUnref"); e.xdomain = !!this.opts.xd, e.xscheme = !!this.opts.xs; var n = this.xhr = new Q(e); try { n.open(this.method, this.uri, this.async); try { if (this.opts.extraHeaders) for (var r in n.setDisableHeaderCheck && n.setDisableHeaderCheck(!0), this.opts.extraHeaders) this.opts.extraHeaders.hasOwnProperty(r) && n.setRequestHeader(r, this.opts.extraHeaders[r]) } catch (t) { } if ("POST" === this.method) try { n.setRequestHeader("Content-type", "text/plain;charset=UTF-8") } catch (t) { } try { n.setRequestHeader("Accept", "*/*") } catch (t) { } "withCredentials" in n && (n.withCredentials = this.opts.withCredentials), this.opts.requestTimeout && (n.timeout = this.opts.requestTimeout), n.onreadystatechange = function () { 4 === n.readyState && (200 === n.status || 1223 === n.status ? t.onLoad() : t.setTimeoutFn((function () { t.onError("number" == typeof n.status ? n.status : 0) }), 0)) }, n.send(this.data) } catch (e) { return void this.setTimeoutFn((function () { t.onError(e) }), 0) } "undefined" != typeof document && (this.index = i.requestsCount++, i.requests[this.index] = this) } }, { key: "onError", value: function (t) { this.emitReserved("error", t, this.xhr), this.cleanup(!0) } }, { key: "cleanup", value: function (t) { if (void 0 !== this.xhr && null !== this.xhr) { if (this.xhr.onreadystatechange = Z, t) try { this.xhr.abort() } catch (t) { } "undefined" != typeof document && delete i.requests[this.index], this.xhr = null } } }, { key: "onLoad", value: function () { var t = this.xhr.responseText; null !== t && (this.emitReserved("data", t), this.emitReserved("success"), this.cleanup()) } }, { key: "abort", value: function () { this.cleanup() } }]), i }(L); if (nt.requestsCount = 0, nt.requests = {}, "undefined" != typeof document) if ("function" == typeof attachEvent) attachEvent("onunload", rt); else if ("function" == typeof addEventListener) { addEventListener("onpagehide" in P ? "pagehide" : "unload", rt, !1) } function rt() { for (var t in nt.requests) nt.requests.hasOwnProperty(t) && nt.requests[t].abort() } var it = "function" == typeof Promise && "function" == typeof Promise.resolve ? function (t) { return Promise.resolve().then(t) } : function (t, e) { return e(t, 0) }, ot = P.WebSocket || P.MozWebSocket, st = "undefined" != typeof navigator && "string" == typeof navigator.product && "reactnative" === navigator.product.toLowerCase(), at = function (t) { o(i, t); var n = p(i); function i(t) { var r; return e(this, i), (r = n.call(this, t)).supportsBinary = !t.forceBase64, r } return r(i, [{ key: "name", get: function () { return "websocket" } }, { key: "doOpen", value: function () { if (this.check()) { var t = this.uri(), e = this.opts.protocols, n = st ? {} : j(this.opts, "agent", "perMessageDeflate", "pfx", "key", "passphrase", "cert", "ca", "ciphers", "rejectUnauthorized", "localAddress", "protocolVersion", "origin", "maxPayload", "family", "checkServerIdentity"); this.opts.extraHeaders && (n.headers = this.opts.extraHeaders); try { this.ws = st ? new ot(t, e, n) : e ? new ot(t, e) : new ot(t) } catch (t) { return this.emitReserved("error", t) } this.ws.binaryType = this.socket.binaryType || "arraybuffer", this.addEventListeners() } } }, { key: "addEventListeners", value: function () { var t = this; this.ws.onopen = function () { t.opts.autoUnref && t.ws._socket.unref(), t.onOpen() }, this.ws.onclose = function (e) { return t.onClose({ description: "websocket connection closed", context: e }) }, this.ws.onmessage = function (e) { return t.onData(e.data) }, this.ws.onerror = function (e) { return t.onError("websocket error", e) } } }, { key: "write", value: function (t) { var e = this; this.writable = !1; for (var n = function (n) { var r = t[n], i = n === t.length - 1; E(r, e.supportsBinary, (function (t) { try { e.ws.send(t) } catch (t) { } i && it((function () { e.writable = !0, e.emitReserved("drain") }), e.setTimeoutFn) })) }, r = 0; r < t.length; r++)n(r) } }, { key: "doClose", value: function () { void 0 !== this.ws && (this.ws.close(), this.ws = null) } }, { key: "uri", value: function () { var t = this.query || {}, e = this.opts.secure ? "wss" : "ws", n = ""; this.opts.port && ("wss" === e && 443 !== Number(this.opts.port) || "ws" === e && 80 !== Number(this.opts.port)) && (n = ":" + this.opts.port), this.opts.timestampRequests && (t[this.opts.timestampParam] = W()), this.supportsBinary || (t.b64 = 1); var r = $(t); return e + "://" + (-1 !== this.opts.hostname.indexOf(":") ? "[" + this.opts.hostname + "]" : this.opts.hostname) + n + this.opts.path + (r.length ? "?" + r : "") } }, { key: "check", value: function () { return !!ot } }]), i }(U), ct = { websocket: at, polling: et }, ut = /^(?:(?![^:@]+:[^:@\/]*@)(http|https|ws|wss):\/\/)?((?:(([^:@]*)(?::([^:@]*))?)?@)?((?:[a-f0-9]{0,4}:){2,7}[a-f0-9]{0,4}|[^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/, ht = ["source", "protocol", "authority", "userInfo", "user", "password", "host", "port", "relative", "path", "directory", "file", "query", "anchor"]; function ft(t) { var e = t, n = t.indexOf("["), r = t.indexOf("]"); -1 != n && -1 != r && (t = t.substring(0, n) + t.substring(n, r).replace(/:/g, ";") + t.substring(r, t.length)); for (var i, o, s = ut.exec(t || ""), a = {}, c = 14; c--;)a[ht[c]] = s[c] || ""; return -1 != n && -1 != r && (a.source = e, a.host = a.host.substring(1, a.host.length - 1).replace(/;/g, ":"), a.authority = a.authority.replace("[", "").replace("]", "").replace(/;/g, ":"), a.ipv6uri = !0), a.pathNames = function (t, e) { var n = /\/{2,9}/g, r = e.replace(n, "/").split("/"); "/" != e.slice(0, 1) && 0 !== e.length || r.splice(0, 1); "/" == e.slice(-1) && r.splice(r.length - 1, 1); return r }(0, a.path), a.queryKey = (i = a.query, o = {}, i.replace(/(?:^|&)([^&=]*)=?([^&]*)/g, (function (t, e, n) { e && (o[e] = n) })), o), a } var lt = function (n) { o(a, n); var s = p(a); function a(n) { var r, o = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}; return e(this, a), r = s.call(this), n && "object" === t(n) && (o = n, n = null), n ? (n = ft(n), o.hostname = n.host, o.secure = "https" === n.protocol || "wss" === n.protocol, o.port = n.port, n.query && (o.query = n.query)) : o.host && (o.hostname = ft(o.host).host), D(f(r), o), r.secure = null != o.secure ? o.secure : "undefined" != typeof location && "https:" === location.protocol, o.hostname && !o.port && (o.port = r.secure ? "443" : "80"), r.hostname = o.hostname || ("undefined" != typeof location ? location.hostname : "localhost"), r.port = o.port || ("undefined" != typeof location && location.port ? location.port : r.secure ? "443" : "80"), r.transports = o.transports || ["polling", "websocket"], r.readyState = "", r.writeBuffer = [], r.prevBufferLen = 0, r.opts = i({ path: "/engine.io", agent: !1, withCredentials: !1, upgrade: !0, timestampParam: "t", rememberUpgrade: !1, rejectUnauthorized: !0, perMessageDeflate: { threshold: 1024 }, transportOptions: {}, closeOnBeforeunload: !0 }, o), r.opts.path = r.opts.path.replace(/\/$/, "") + "/", "string" == typeof r.opts.query && (r.opts.query = J(r.opts.query)), r.id = null, r.upgrades = null, r.pingInterval = null, r.pingTimeout = null, r.pingTimeoutTimer = null, "function" == typeof addEventListener && (r.opts.closeOnBeforeunload && (r.beforeunloadEventListener = function () { r.transport && (r.transport.removeAllListeners(), r.transport.close()) }, addEventListener("beforeunload", r.beforeunloadEventListener, !1)), "localhost" !== r.hostname && (r.offlineEventListener = function () { r.onClose("transport close", { description: "network connection lost" }) }, addEventListener("offline", r.offlineEventListener, !1))), r.open(), r } return r(a, [{ key: "createTransport", value: function (t) { var e = i({}, this.opts.query); e.EIO = 4, e.transport = t, this.id && (e.sid = this.id); var n = i({}, this.opts.transportOptions[t], this.opts, { query: e, socket: this, hostname: this.hostname, secure: this.secure, port: this.port }); return new ct[t](n) } }, { key: "open", value: function () { var t, e = this; if (this.opts.rememberUpgrade && a.priorWebsocketSuccess && -1 !== this.transports.indexOf("websocket")) t = "websocket"; else { if (0 === this.transports.length) return void this.setTimeoutFn((function () { e.emitReserved("error", "No transports available") }), 0); t = this.transports[0] } this.readyState = "opening"; try { t = this.createTransport(t) } catch (t) { return this.transports.shift(), void this.open() } t.open(), this.setTransport(t) } }, { key: "setTransport", value: function (t) { var e = this; this.transport && this.transport.removeAllListeners(), this.transport = t, t.on("drain", this.onDrain.bind(this)).on("packet", this.onPacket.bind(this)).on("error", this.onError.bind(this)).on("close", (function (t) { return e.onClose("transport close", t) })) } }, { key: "probe", value: function (t) { var e = this, n = this.createTransport(t), r = !1; a.priorWebsocketSuccess = !1; var i = function () { r || (n.send([{ type: "ping", data: "probe" }]), n.once("packet", (function (t) { if (!r) if ("pong" === t.type && "probe" === t.data) { if (e.upgrading = !0, e.emitReserved("upgrading", n), !n) return; a.priorWebsocketSuccess = "websocket" === n.name, e.transport.pause((function () { r || "closed" !== e.readyState && (f(), e.setTransport(n), n.send([{ type: "upgrade" }]), e.emitReserved("upgrade", n), n = null, e.upgrading = !1, e.flush()) })) } else { var i = new Error("probe error"); i.transport = n.name, e.emitReserved("upgradeError", i) } }))) }; function o() { r || (r = !0, f(), n.close(), n = null) } var s = function (t) { var r = new Error("probe error: " + t); r.transport = n.name, o(), e.emitReserved("upgradeError", r) }; function c() { s("transport closed") } function u() { s("socket closed") } function h(t) { n && t.name !== n.name && o() } var f = function () { n.removeListener("open", i), n.removeListener("error", s), n.removeListener("close", c), e.off("close", u), e.off("upgrading", h) }; n.once("open", i), n.once("error", s), n.once("close", c), this.once("close", u), this.once("upgrading", h), n.open() } }, { key: "onOpen", value: function () { if (this.readyState = "open", a.priorWebsocketSuccess = "websocket" === this.transport.name, this.emitReserved("open"), this.flush(), "open" === this.readyState && this.opts.upgrade && this.transport.pause) for (var t = 0, e = this.upgrades.length; t < e; t++)this.probe(this.upgrades[t]) } }, { key: "onPacket", value: function (t) { if ("opening" === this.readyState || "open" === this.readyState || "closing" === this.readyState) switch (this.emitReserved("packet", t), this.emitReserved("heartbeat"), t.type) { case "open": this.onHandshake(JSON.parse(t.data)); break; case "ping": this.resetPingTimeout(), this.sendPacket("pong"), this.emitReserved("ping"), this.emitReserved("pong"); break; case "error": var e = new Error("server error"); e.code = t.data, this.onError(e); break; case "message": this.emitReserved("data", t.data), this.emitReserved("message", t.data) } } }, { key: "onHandshake", value: function (t) { this.emitReserved("handshake", t), this.id = t.sid, this.transport.query.sid = t.sid, this.upgrades = this.filterUpgrades(t.upgrades), this.pingInterval = t.pingInterval, this.pingTimeout = t.pingTimeout, this.maxPayload = t.maxPayload, this.onOpen(), "closed" !== this.readyState && this.resetPingTimeout() } }, { key: "resetPingTimeout", value: function () { var t = this; this.clearTimeoutFn(this.pingTimeoutTimer), this.pingTimeoutTimer = this.setTimeoutFn((function () { t.onClose("ping timeout") }), this.pingInterval + this.pingTimeout), this.opts.autoUnref && this.pingTimeoutTimer.unref() } }, { key: "onDrain", value: function () { this.writeBuffer.splice(0, this.prevBufferLen), this.prevBufferLen = 0, 0 === this.writeBuffer.length ? this.emitReserved("drain") : this.flush() } }, { key: "flush", value: function () { if ("closed" !== this.readyState && this.transport.writable && !this.upgrading && this.writeBuffer.length) { var t = this.getWritablePackets(); this.transport.send(t), this.prevBufferLen = t.length, this.emitReserved("flush") } } }, { key: "getWritablePackets", value: function () { if (!(this.maxPayload && "polling" === this.transport.name && this.writeBuffer.length > 1)) return this.writeBuffer; for (var t, e = 1, n = 0; n < this.writeBuffer.length; n++) { var r = this.writeBuffer[n].data; if (r && (e += "string" == typeof (t = r) ? function (t) { for (var e = 0, n = 0, r = 0, i = t.length; r < i; r++)(e = t.charCodeAt(r)) < 128 ? n += 1 : e < 2048 ? n += 2 : e < 55296 || e >= 57344 ? n += 3 : (r++, n += 4); return n }(t) : Math.ceil(1.33 * (t.byteLength || t.size))), n > 0 && e > this.maxPayload) return this.writeBuffer.slice(0, n); e += 2 } return this.writeBuffer } }, { key: "write", value: function (t, e, n) { return this.sendPacket("message", t, e, n), this } }, { key: "send", value: function (t, e, n) { return this.sendPacket("message", t, e, n), this } }, { key: "sendPacket", value: function (t, e, n, r) { if ("function" == typeof e && (r = e, e = void 0), "function" == typeof n && (r = n, n = null), "closing" !== this.readyState && "closed" !== this.readyState) { (n = n || {}).compress = !1 !== n.compress; var i = { type: t, data: e, options: n }; this.emitReserved("packetCreate", i), this.writeBuffer.push(i), r && this.once("flush", r), this.flush() } } }, { key: "close", value: function () { var t = this, e = function () { t.onClose("forced close"), t.transport.close() }, n = function n() { t.off("upgrade", n), t.off("upgradeError", n), e() }, r = function () { t.once("upgrade", n), t.once("upgradeError", n) }; return "opening" !== this.readyState && "open" !== this.readyState || (this.readyState = "closing", this.writeBuffer.length ? this.once("drain", (function () { t.upgrading ? r() : e() })) : this.upgrading ? r() : e()), this } }, { key: "onError", value: function (t) { a.priorWebsocketSuccess = !1, this.emitReserved("error", t), this.onClose("transport error", t) } }, { key: "onClose", value: function (t, e) { "opening" !== this.readyState && "open" !== this.readyState && "closing" !== this.readyState || (this.clearTimeoutFn(this.pingTimeoutTimer), this.transport.removeAllListeners("close"), this.transport.close(), this.transport.removeAllListeners(), "function" == typeof removeEventListener && (removeEventListener("beforeunload", this.beforeunloadEventListener, !1), removeEventListener("offline", this.offlineEventListener, !1)), this.readyState = "closed", this.id = null, this.emitReserved("close", t, e), this.writeBuffer = [], this.prevBufferLen = 0) } }, { key: "filterUpgrades", value: function (t) { for (var e = [], n = 0, r = t.length; n < r; n++)~this.transports.indexOf(t[n]) && e.push(t[n]); return e } }]), a }(L); lt.protocol = 4, lt.protocol; var pt = "function" == typeof ArrayBuffer, dt = Object.prototype.toString, yt = "function" == typeof Blob || "undefined" != typeof Blob && "[object BlobConstructor]" === dt.call(Blob), vt = "function" == typeof File || "undefined" != typeof File && "[object FileConstructor]" === dt.call(File); function gt(t) { return pt && (t instanceof ArrayBuffer || function (t) { return "function" == typeof ArrayBuffer.isView ? ArrayBuffer.isView(t) : t.buffer instanceof ArrayBuffer }(t)) || yt && t instanceof Blob || vt && t instanceof File } function mt(e, n) { if (!e || "object" !== t(e)) return !1; if (Array.isArray(e)) { for (var r = 0, i = e.length; r < i; r++)if (mt(e[r])) return !0; return !1 } if (gt(e)) return !0; if (e.toJSON && "function" == typeof e.toJSON && 1 === arguments.length) return mt(e.toJSON(), !0); for (var o in e) if (Object.prototype.hasOwnProperty.call(e, o) && mt(e[o])) return !0; return !1 } function bt(t) { var e = [], n = t.data, r = t; return r.data = kt(n, e), r.attachments = e.length, { packet: r, buffers: e } } function kt(e, n) { if (!e) return e; if (gt(e)) { var r = { _placeholder: !0, num: n.length }; return n.push(e), r } if (Array.isArray(e)) { for (var i = new Array(e.length), o = 0; o < e.length; o++)i[o] = kt(e[o], n); return i } if ("object" === t(e) && !(e instanceof Date)) { var s = {}; for (var a in e) Object.prototype.hasOwnProperty.call(e, a) && (s[a] = kt(e[a], n)); return s } return e } function wt(t, e) { return t.data = _t(t.data, e), t.attachments = void 0, t } function _t(e, n) { if (!e) return e; if (e && !0 === e._placeholder) { if ("number" == typeof e.num && e.num >= 0 && e.num < n.length) return n[e.num]; throw new Error("illegal attachments") } if (Array.isArray(e)) for (var r = 0; r < e.length; r++)e[r] = _t(e[r], n); else if ("object" === t(e)) for (var i in e) Object.prototype.hasOwnProperty.call(e, i) && (e[i] = _t(e[i], n)); return e } var Et; !function (t) { t[t.CONNECT = 0] = "CONNECT", t[t.DISCONNECT = 1] = "DISCONNECT", t[t.EVENT = 2] = "EVENT", t[t.ACK = 3] = "ACK", t[t.CONNECT_ERROR = 4] = "CONNECT_ERROR", t[t.BINARY_EVENT = 5] = "BINARY_EVENT", t[t.BINARY_ACK = 6] = "BINARY_ACK" }(Et || (Et = {})); var Ot = function () { function t(n) { e(this, t), this.replacer = n } return r(t, [{ key: "encode", value: function (t) { return t.type !== Et.EVENT && t.type !== Et.ACK || !mt(t) ? [this.encodeAsString(t)] : (t.type = t.type === Et.EVENT ? Et.BINARY_EVENT : Et.BINARY_ACK, this.encodeAsBinary(t)) } }, { key: "encodeAsString", value: function (t) { var e = "" + t.type; return t.type !== Et.BINARY_EVENT && t.type !== Et.BINARY_ACK || (e += t.attachments + "-"), t.nsp && "/" !== t.nsp && (e += t.nsp + ","), null != t.id && (e += t.id), null != t.data && (e += JSON.stringify(t.data, this.replacer)), e } }, { key: "encodeAsBinary", value: function (t) { var e = bt(t), n = this.encodeAsString(e.packet), r = e.buffers; return r.unshift(n), r } }]), t }(), At = function (n) { o(a, n); var i = p(a); function a(t) { var n; return e(this, a), (n = i.call(this)).reviver = t, n } return r(a, [{ key: "add", value: function (t) { var e; if ("string" == typeof t) { if (this.reconstructor) throw new Error("got plaintext data when reconstructing a packet"); (e = this.decodeString(t)).type === Et.BINARY_EVENT || e.type === Et.BINARY_ACK ? (this.reconstructor = new Rt(e), 0 === e.attachments && y(s(a.prototype), "emitReserved", this).call(this, "decoded", e)) : y(s(a.prototype), "emitReserved", this).call(this, "decoded", e) } else { if (!gt(t) && !t.base64) throw new Error("Unknown type: " + t); if (!this.reconstructor) throw new Error("got binary data when not reconstructing a packet"); (e = this.reconstructor.takeBinaryData(t)) && (this.reconstructor = null, y(s(a.prototype), "emitReserved", this).call(this, "decoded", e)) } } }, { key: "decodeString", value: function (t) { var e = 0, n = { type: Number(t.charAt(0)) }; if (void 0 === Et[n.type]) throw new Error("unknown packet type " + n.type); if (n.type === Et.BINARY_EVENT || n.type === Et.BINARY_ACK) { for (var r = e + 1; "-" !== t.charAt(++e) && e != t.length;); var i = t.substring(r, e); if (i != Number(i) || "-" !== t.charAt(e)) throw new Error("Illegal attachments"); n.attachments = Number(i) } if ("/" === t.charAt(e + 1)) { for (var o = e + 1; ++e;) { if ("," === t.charAt(e)) break; if (e === t.length) break } n.nsp = t.substring(o, e) } else n.nsp = "/"; var s = t.charAt(e + 1); if ("" !== s && Number(s) == s) { for (var c = e + 1; ++e;) { var u = t.charAt(e); if (null == u || Number(u) != u) { --e; break } if (e === t.length) break } n.id = Number(t.substring(c, e + 1)) } if (t.charAt(++e)) { var h = this.tryParse(t.substr(e)); if (!a.isPayloadValid(n.type, h)) throw new Error("invalid payload"); n.data = h } return n } }, { key: "tryParse", value: function (t) { try { return JSON.parse(t, this.reviver) } catch (t) { return !1 } } }, { key: "destroy", value: function () { this.reconstructor && this.reconstructor.finishedReconstruction() } }], [{ key: "isPayloadValid", value: function (e, n) { switch (e) { case Et.CONNECT: return "object" === t(n); case Et.DISCONNECT: return void 0 === n; case Et.CONNECT_ERROR: return "string" == typeof n || "object" === t(n); case Et.EVENT: case Et.BINARY_EVENT: return Array.isArray(n) && n.length > 0; case Et.ACK: case Et.BINARY_ACK: return Array.isArray(n) } } }]), a }(L), Rt = function () { function t(n) { e(this, t), this.packet = n, this.buffers = [], this.reconPack = n } return r(t, [{ key: "takeBinaryData", value: function (t) { if (this.buffers.push(t), this.buffers.length === this.reconPack.attachments) { var e = wt(this.reconPack, this.buffers); return this.finishedReconstruction(), e } return null } }, { key: "finishedReconstruction", value: function () { this.reconPack = null, this.buffers = [] } }]), t }(), Tt = Object.freeze({ __proto__: null, protocol: 5, get PacketType() { return Et }, Encoder: Ot, Decoder: At }); function Ct(t, e, n) { return t.on(e, n), function () { t.off(e, n) } } var Bt = Object.freeze({ connect: 1, connect_error: 1, disconnect: 1, disconnecting: 1, newListener: 1, removeListener: 1 }), St = function (t) { o(i, t); var n = p(i); function i(t, r, o) { var s; return e(this, i), (s = n.call(this)).connected = !1, s.receiveBuffer = [], s.sendBuffer = [], s.ids = 0, s.acks = {}, s.flags = {}, s.io = t, s.nsp = r, o && o.auth && (s.auth = o.auth), s.io._autoConnect && s.open(), s } return r(i, [{ key: "disconnected", get: function () { return !this.connected } }, { key: "subEvents", value: function () { if (!this.subs) { var t = this.io; this.subs = [Ct(t, "open", this.onopen.bind(this)), Ct(t, "packet", this.onpacket.bind(this)), Ct(t, "error", this.onerror.bind(this)), Ct(t, "close", this.onclose.bind(this))] } } }, { key: "active", get: function () { return !!this.subs } }, { key: "connect", value: function () { return this.connected || (this.subEvents(), this.io._reconnecting || this.io.open(), "open" === this.io._readyState && this.onopen()), this } }, { key: "open", value: function () { return this.connect() } }, { key: "send", value: function () { for (var t = arguments.length, e = new Array(t), n = 0; n < t; n++)e[n] = arguments[n]; return e.unshift("message"), this.emit.apply(this, e), this } }, { key: "emit", value: function (t) { if (Bt.hasOwnProperty(t)) throw new Error('"' + t.toString() + '" is a reserved event name'); for (var e = arguments.length, n = new Array(e > 1 ? e - 1 : 0), r = 1; r < e; r++)n[r - 1] = arguments[r]; n.unshift(t); var i = { type: Et.EVENT, data: n, options: {} }; if (i.options.compress = !1 !== this.flags.compress, "function" == typeof n[n.length - 1]) { var o = this.ids++, s = n.pop(); this._registerAckCallback(o, s), i.id = o } var a = this.io.engine && this.io.engine.transport && this.io.engine.transport.writable, c = this.flags.volatile && (!a || !this.connected); return c || (this.connected ? (this.notifyOutgoingListeners(i), this.packet(i)) : this.sendBuffer.push(i)), this.flags = {}, this } }, { key: "_registerAckCallback", value: function (t, e) { var n = this, r = this.flags.timeout; if (void 0 !== r) { var i = this.io.setTimeoutFn((function () { delete n.acks[t]; for (var r = 0; r < n.sendBuffer.length; r++)n.sendBuffer[r].id === t && n.sendBuffer.splice(r, 1); e.call(n, new Error("operation has timed out")) }), r); this.acks[t] = function () { n.io.clearTimeoutFn(i); for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)r[o] = arguments[o]; e.apply(n, [null].concat(r)) } } else this.acks[t] = e } }, { key: "packet", value: function (t) { t.nsp = this.nsp, this.io._packet(t) } }, { key: "onopen", value: function () { var t = this; "function" == typeof this.auth ? this.auth((function (e) { t.packet({ type: Et.CONNECT, data: e }) })) : this.packet({ type: Et.CONNECT, data: this.auth }) } }, { key: "onerror", value: function (t) { this.connected || this.emitReserved("connect_error", t) } }, { key: "onclose", value: function (t, e) { this.connected = !1, delete this.id, this.emitReserved("disconnect", t, e) } }, { key: "onpacket", value: function (t) { if (t.nsp === this.nsp) switch (t.type) { case Et.CONNECT: if (t.data && t.data.sid) { var e = t.data.sid; this.onconnect(e) } else this.emitReserved("connect_error", new Error("It seems you are trying to reach a Socket.IO server in v2.x with a v3.x client, but they are not compatible (more information here: https://socket.io/docs/v3/migrating-from-2-x-to-3-0/)")); break; case Et.EVENT: case Et.BINARY_EVENT: this.onevent(t); break; case Et.ACK: case Et.BINARY_ACK: this.onack(t); break; case Et.DISCONNECT: this.ondisconnect(); break; case Et.CONNECT_ERROR: this.destroy(); var n = new Error(t.data.message); n.data = t.data.data, this.emitReserved("connect_error", n) } } }, { key: "onevent", value: function (t) { var e = t.data || []; null != t.id && e.push(this.ack(t.id)), this.connected ? this.emitEvent(e) : this.receiveBuffer.push(Object.freeze(e)) } }, { key: "emitEvent", value: function (t) { if (this._anyListeners && this._anyListeners.length) { var e, n = g(this._anyListeners.slice()); try { for (n.s(); !(e = n.n()).done;) { e.value.apply(this, t) } } catch (t) { n.e(t) } finally { n.f() } } y(s(i.prototype), "emit", this).apply(this, t) } }, { key: "ack", value: function (t) { var e = this, n = !1; return function () { if (!n) { n = !0; for (var r = arguments.length, i = new Array(r), o = 0; o < r; o++)i[o] = arguments[o]; e.packet({ type: Et.ACK, id: t, data: i }) } } } }, { key: "onack", value: function (t) { var e = this.acks[t.id]; "function" == typeof e && (e.apply(this, t.data), delete this.acks[t.id]) } }, { key: "onconnect", value: function (t) { this.id = t, this.connected = !0, this.emitBuffered(), this.emitReserved("connect") } }, { key: "emitBuffered", value: function () { var t = this; this.receiveBuffer.forEach((function (e) { return t.emitEvent(e) })), this.receiveBuffer = [], this.sendBuffer.forEach((function (e) { t.notifyOutgoingListeners(e), t.packet(e) })), this.sendBuffer = [] } }, { key: "ondisconnect", value: function () { this.destroy(), this.onclose("io server disconnect") } }, { key: "destroy", value: function () { this.subs && (this.subs.forEach((function (t) { return t() })), this.subs = void 0), this.io._destroy(this) } }, { key: "disconnect", value: function () { return this.connected && this.packet({ type: Et.DISCONNECT }), this.destroy(), this.connected && this.onclose("io client disconnect"), this } }, { key: "close", value: function () { return this.disconnect() } }, { key: "compress", value: function (t) { return this.flags.compress = t, this } }, { key: "volatile", get: function () { return this.flags.volatile = !0, this } }, { key: "timeout", value: function (t) { return this.flags.timeout = t, this } }, { key: "onAny", value: function (t) { return this._anyListeners = this._anyListeners || [], this._anyListeners.push(t), this } }, { key: "prependAny", value: function (t) { return this._anyListeners = this._anyListeners || [], this._anyListeners.unshift(t), this } }, { key: "offAny", value: function (t) { if (!this._anyListeners) return this; if (t) { for (var e = this._anyListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this } else this._anyListeners = []; return this } }, { key: "listenersAny", value: function () { return this._anyListeners || [] } }, { key: "onAnyOutgoing", value: function (t) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.push(t), this } }, { key: "prependAnyOutgoing", value: function (t) { return this._anyOutgoingListeners = this._anyOutgoingListeners || [], this._anyOutgoingListeners.unshift(t), this } }, { key: "offAnyOutgoing", value: function (t) { if (!this._anyOutgoingListeners) return this; if (t) { for (var e = this._anyOutgoingListeners, n = 0; n < e.length; n++)if (t === e[n]) return e.splice(n, 1), this } else this._anyOutgoingListeners = []; return this } }, { key: "listenersAnyOutgoing", value: function () { return this._anyOutgoingListeners || [] } }, { key: "notifyOutgoingListeners", value: function (t) { if (this._anyOutgoingListeners && this._anyOutgoingListeners.length) { var e, n = g(this._anyOutgoingListeners.slice()); try { for (n.s(); !(e = n.n()).done;) { e.value.apply(this, t.data) } } catch (t) { n.e(t) } finally { n.f() } } } }]), i }(L); function Nt(t) { t = t || {}, this.ms = t.min || 100, this.max = t.max || 1e4, this.factor = t.factor || 2, this.jitter = t.jitter > 0 && t.jitter <= 1 ? t.jitter : 0, this.attempts = 0 } Nt.prototype.duration = function () { var t = this.ms * Math.pow(this.factor, this.attempts++); if (this.jitter) { var e = Math.random(), n = Math.floor(e * this.jitter * t); t = 0 == (1 & Math.floor(10 * e)) ? t - n : t + n } return 0 | Math.min(t, this.max) }, Nt.prototype.reset = function () { this.attempts = 0 }, Nt.prototype.setMin = function (t) { this.ms = t }, Nt.prototype.setMax = function (t) { this.max = t }, Nt.prototype.setJitter = function (t) { this.jitter = t }; var xt = function (n) { o(s, n); var i = p(s); function s(n, r) { var o, a; e(this, s), (o = i.call(this)).nsps = {}, o.subs = [], n && "object" === t(n) && (r = n, n = void 0), (r = r || {}).path = r.path || "/socket.io", o.opts = r, D(f(o), r), o.reconnection(!1 !== r.reconnection), o.reconnectionAttempts(r.reconnectionAttempts || 1 / 0), o.reconnectionDelay(r.reconnectionDelay || 1e3), o.reconnectionDelayMax(r.reconnectionDelayMax || 5e3), o.randomizationFactor(null !== (a = r.randomizationFactor) && void 0 !== a ? a : .5), o.backoff = new Nt({ min: o.reconnectionDelay(), max: o.reconnectionDelayMax(), jitter: o.randomizationFactor() }), o.timeout(null == r.timeout ? 2e4 : r.timeout), o._readyState = "closed", o.uri = n; var c = r.parser || Tt; return o.encoder = new c.Encoder, o.decoder = new c.Decoder, o._autoConnect = !1 !== r.autoConnect, o._autoConnect && o.open(), o } return r(s, [{ key: "reconnection", value: function (t) { return arguments.length ? (this._reconnection = !!t, this) : this._reconnection } }, { key: "reconnectionAttempts", value: function (t) { return void 0 === t ? this._reconnectionAttempts : (this._reconnectionAttempts = t, this) } }, { key: "reconnectionDelay", value: function (t) { var e; return void 0 === t ? this._reconnectionDelay : (this._reconnectionDelay = t, null === (e = this.backoff) || void 0 === e || e.setMin(t), this) } }, { key: "randomizationFactor", value: function (t) { var e; return void 0 === t ? this._randomizationFactor : (this._randomizationFactor = t, null === (e = this.backoff) || void 0 === e || e.setJitter(t), this) } }, { key: "reconnectionDelayMax", value: function (t) { var e; return void 0 === t ? this._reconnectionDelayMax : (this._reconnectionDelayMax = t, null === (e = this.backoff) || void 0 === e || e.setMax(t), this) } }, { key: "timeout", value: function (t) { return arguments.length ? (this._timeout = t, this) : this._timeout } }, { key: "maybeReconnectOnOpen", value: function () { !this._reconnecting && this._reconnection && 0 === this.backoff.attempts && this.reconnect() } }, { key: "open", value: function (t) { var e = this; if (~this._readyState.indexOf("open")) return this; this.engine = new lt(this.uri, this.opts); var n = this.engine, r = this; this._readyState = "opening", this.skipReconnect = !1; var i = Ct(n, "open", (function () { r.onopen(), t && t() })), o = Ct(n, "error", (function (n) { r.cleanup(), r._readyState = "closed", e.emitReserved("error", n), t ? t(n) : r.maybeReconnectOnOpen() })); if (!1 !== this._timeout) { var s = this._timeout; 0 === s && i(); var a = this.setTimeoutFn((function () { i(), n.close(), n.emit("error", new Error("timeout")) }), s); this.opts.autoUnref && a.unref(), this.subs.push((function () { clearTimeout(a) })) } return this.subs.push(i), this.subs.push(o), this } }, { key: "connect", value: function (t) { return this.open(t) } }, { key: "onopen", value: function () { this.cleanup(), this._readyState = "open", this.emitReserved("open"); var t = this.engine; this.subs.push(Ct(t, "ping", this.onping.bind(this)), Ct(t, "data", this.ondata.bind(this)), Ct(t, "error", this.onerror.bind(this)), Ct(t, "close", this.onclose.bind(this)), Ct(this.decoder, "decoded", this.ondecoded.bind(this))) } }, { key: "onping", value: function () { this.emitReserved("ping") } }, { key: "ondata", value: function (t) { try { this.decoder.add(t) } catch (t) { this.onclose("parse error", t) } } }, { key: "ondecoded", value: function (t) { var e = this; it((function () { e.emitReserved("packet", t) }), this.setTimeoutFn) } }, { key: "onerror", value: function (t) { this.emitReserved("error", t) } }, { key: "socket", value: function (t, e) { var n = this.nsps[t]; return n || (n = new St(this, t, e), this.nsps[t] = n), n } }, { key: "_destroy", value: function (t) { for (var e = 0, n = Object.keys(this.nsps); e < n.length; e++) { var r = n[e]; if (this.nsps[r].active) return } this._close() } }, { key: "_packet", value: function (t) { for (var e = this.encoder.encode(t), n = 0; n < e.length; n++)this.engine.write(e[n], t.options) } }, { key: "cleanup", value: function () { this.subs.forEach((function (t) { return t() })), this.subs.length = 0, this.decoder.destroy() } }, { key: "_close", value: function () { this.skipReconnect = !0, this._reconnecting = !1, this.onclose("forced close"), this.engine && this.engine.close() } }, { key: "disconnect", value: function () { return this._close() } }, { key: "onclose", value: function (t, e) { this.cleanup(), this.backoff.reset(), this._readyState = "closed", this.emitReserved("close", t, e), this._reconnection && !this.skipReconnect && this.reconnect() } }, { key: "reconnect", value: function () { var t = this; if (this._reconnecting || this.skipReconnect) return this; var e = this; if (this.backoff.attempts >= this._reconnectionAttempts) this.backoff.reset(), this.emitReserved("reconnect_failed"), this._reconnecting = !1; else { var n = this.backoff.duration(); this._reconnecting = !0; var r = this.setTimeoutFn((function () { e.skipReconnect || (t.emitReserved("reconnect_attempt", e.backoff.attempts), e.skipReconnect || e.open((function (n) { n ? (e._reconnecting = !1, e.reconnect(), t.emitReserved("reconnect_error", n)) : e.onreconnect() }))) }), n); this.opts.autoUnref && r.unref(), this.subs.push((function () { clearTimeout(r) })) } } }, { key: "onreconnect", value: function () { var t = this.backoff.attempts; this._reconnecting = !1, this.backoff.reset(), this.emitReserved("reconnect", t) } }]), s }(L), Lt = {}; function Pt(e, n) { "object" === t(e) && (n = e, e = void 0); var r, i = function (t) { var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", n = arguments.length > 2 ? arguments[2] : void 0, r = t; n = n || "undefined" != typeof location && location, null == t && (t = n.protocol + "//" + n.host), "string" == typeof t && ("/" === t.charAt(0) && (t = "/" === t.charAt(1) ? n.protocol + t : n.host + t), /^(https?|wss?):\/\//.test(t) || (t = void 0 !== n ? n.protocol + "//" + t : "https://" + t), r = ft(t)), r.port || (/^(http|ws)$/.test(r.protocol) ? r.port = "80" : /^(http|ws)s$/.test(r.protocol) && (r.port = "443")), r.path = r.path || "/"; var i = -1 !== r.host.indexOf(":") ? "[" + r.host + "]" : r.host; return r.id = r.protocol + "://" + i + ":" + r.port + e, r.href = r.protocol + "://" + i + (n && n.port === r.port ? "" : ":" + r.port), r }(e, (n = n || {}).path || "/socket.io"), o = i.source, s = i.id, a = i.path, c = Lt[s] && a in Lt[s].nsps; return n.forceNew || n["force new connection"] || !1 === n.multiplex || c ? r = new xt(o, n) : (Lt[s] || (Lt[s] = new xt(o, n)), r = Lt[s]), i.query && !n.query && (n.query = i.queryKey), r.socket(i.path, n) } return i(Pt, { Manager: xt, Socket: St, io: Pt, connect: Pt }), Pt }));
//# sourceMappingURL=socket.io.min.js.map



let API_HOST = "https://popupchat.onrender.com";

// let API_HOST="http://127.0.0.1:4000";



let body = document.body;
let head = document.head;
let widgetColor;
let propertyID;
let widget_ID;
let ipaddres;





// head.innerHTML += '<script src="https://cdn.tailwindcss.com"></script>'
// head.innerHTML += '<style>#msg::-webkit-scrollbar { width: 0;background: transparent;}</style>'


var socket = io(API_HOST, { autoConnect: false });

// https://www.trackip.net/ip?json

async function GetCurruntUserIp() {

    await fetch("https://jsonip.com/", {
        mode: 'cors',
        method: 'GET',
    }).then((res) => res.json()).then((data) => {
        if (localStorage.getItem("popupchatid") == null) {
            localStorage.setItem("popupchatid", crypto.randomUUID())
            ipaddres = data.ip + `=${localStorage.getItem("popupchatid")}`;
        } else {
            ipaddres = data.ip + `=${localStorage.getItem("popupchatid")}`;
        }
        console.log(ipaddres);
        console.log(data.ip);


        socket.on(ipaddres.replaceAll(".", ":"), (msg1) => {

            let msg = document.getElementById("msg");

            let data = msg1.split("|||")
            if (data[0] == "Admin") {
                addRecivedMessage(data[1]);
            } else {
                addSendeMessage(data[1]);
            }
            playPause();
            msg.scrollTo(0, msg.scrollHeight);
        })
    }).catch((e) => {
        console.log(e);
    })

}



async function StartChatIo(property_ID) {
    console.log("called function");
    await GetCurruntUserIp();

    await fetch(`${API_HOST}/client/getwidget/${property_ID}`).then((res) => res.json()).then((data) => {
        // console.log(data);
        if (data[0]["Property_status"]) {
            console.log(data[0]["Property_status"]);
            propertyID = property_ID;
            widgetColor = data[0]["Widget"]["Widget_color"];
            RenderChatPopUp(data[0]["Widget"]["Widget_color"]);

        }
    }).catch((e) => {
        console.log(e);
    })

}



function RenderChatPopUp(color) {
    body.innerHTML += `
    <audio id="audio">
        <source src="https://cdn.pixabay.com/audio/2022/10/30/audio_f5dbe8213e.mp3" type="audio/mpeg" />
        </audio>
    <div>
    <button id="close" onclick="CloseBtn()"
        class="hidden float-right text-white h-8 w-8 bg-[${color}] rounded-full p-2 my-auto mr-5 "><img
            src="https://img.icons8.com/ios-filled/50/FFFFFF/delete-sign--v1.png" alt="delete-sign--v1"></button>

    <div class="h-14 w-14 shadow-xl rounded-full fixed bottom-0 right-0 m-6 drop-shadow-lg hover:shadow-xl overflow-hidden"
        id="chatio" onclick="ChatIo()">
        <img src="https://cryptologos.cc/logos/chatcoin-chat-logo.png" class="" alt="not" id="chatimg">
        <div class="hidden" id="chat">
            <div class="h-20 bg-[${color}] flex pl-3 justify-between">
                <div class="flex">
                    <img class="rounded-full h-14 w-14 my-auto"
                        src="https://static.vecteezy.com/system/resources/previews/011/381/911/original/male-customer-service-3d-cartoon-avatar-portrait-png.png"
                        alt="not found">
                    <div class="my-auto">
                        <p class="font-semibold text-lg text-center text-white">Rana Hardik</p>
                        <div class="flex mt-1">
                            <span class="h-2 w-2 rounded-full bg-white animate-ping my-auto mr-2"></span>
                            <p class="text-xs text-white">Online</p>
                        </div>
                    </div>
                </div>



            </div>
            <div class="h-96 w-full overflow-y-scroll pb-20 bg-white" id="msg" >

            </div>
            <div class="p-4 fixed bottom-0 w-full bg-blue-100">
                <div class="flex w-full hidden" id="inputs">
               
                <form onsubmit="SendMessage(event)">
                <input type="text" id="msginput" placeholder="Message"
                                class="placeholder-slate-700 w-full text-blue-950 py-2 px-2 rounded-lg bg-white ring-1 ring-slate-100 outline-none" required/>
                <input id="sendmsg" type="submit" class="h-10 w-11 ml-1 bg-[${color}] rounded-full"><img class="p-2" src="https://img.icons8.com/ios-glyphs/100/FFFFFF/sent.png"
                                    alt="not" />
            </form>
                </div>
                <button id="chatnowbtn" onclick="ChatNowBtn()"
                    class="bg-[${color}] text-white font-semibold w-full py-2 rounded-xl ">Chat
                    Now</button>
            </div>
        </div>

    </div>
</div>
`
}






let chatio = document.getElementById("chatio")
let msg = document.getElementById("msg");
// let chatnowbtn  = document.getElementById("chatnowbtn")
let chat = document.getElementById("chat");
let closebtn = document.getElementById("close");
let chatimg = document.getElementById("chatimg");
let chatnowbtn = document.getElementById("chatnowbtn");
let inputs = document.getElementById("inputs");

let sendmsg = document.getElementById("sendmsg");

let msginput = document.getElementById("msginput");



// chatnowbtn.addEventListener("click",()=>{
//     msg.innerHTML += '<div class="w-auto bg-blue-700 text-white rounded-r-lg rounded-tl-lg p-2 float-left mr-20 my-3 ml-2">how are you</div>'
//     msg.scrollTo(0, msg.scrollHeight);
// })

function addRecivedMessage(msg1) {
    let msg = document.getElementById("msg");
    msg.innerHTML += ` <div class="w-full flex justify-start"><span class="w-auto bg-[${widgetColor}] text-white rounded-r-lg rounded-tl-lg p-2 mr-20 my-3 ml-2">${msg1}</span></div>`

}

function addSendeMessage(msg1) {
    let msg = document.getElementById("msg");
    msg.innerHTML += ` <div class="w-full  flex justify-end"><span class="w-auto bg-[${widgetColor}] text-white rounded-l-lg rounded-tr-lg p-2 ml-20 my-3 mr-2">${msg1}</span></div>`
}





function ChatIo() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");


    console.log("click chat io")
    chatimg.classList.add("hidden")
    chatio.style.borderRadius = "10px";
    chatio.style.height = "80%"
    chatio.style.width = "25%"
    chat.classList.remove("hidden");
    closebtn.classList.remove("hidden");


}

function CloseBtn() {
    let chatio = document.getElementById("chatio")
    let chatimg = document.getElementById("chatimg");
    let chat = document.getElementById("chat");
    let closebtn = document.getElementById("close");

    closebtn.classList.add("hidden");
    chat.classList.add("hidden");
    chatio.style = "";
    chatimg.classList.remove("hidden")
    socket.disconnect();
}

async function ChatNowBtn() {
    let inputs = document.getElementById("inputs");
    let chatnowbtn = document.getElementById("chatnowbtn");

    socket.connect();
    await StartNewChat();
    chatnowbtn.classList.add("hidden");
    inputs.classList.remove("hidden");
    // addRecivedMessage("Welcome to Chat.io 👋");
    // addRecivedMessage("How can i help you")

}



function playPause() {
    var audio = document.getElementById('audio');
    audio.play();
}


function SendMessage(event) {
    event.preventDefault();
    let msg = document.getElementById("msg");
    let msginput = document.getElementById("msginput");
    console.log(msginput.value);
    if (msginput.value != "") {
        SendMessageToApi(msginput.value);

        msginput.value = "";
        msg.scrollTo(0, msg.scrollHeight);
    }
}


async function StartNewChat() {

    // let headers = new Headers();

    // headers.append('Content-Type', 'application/json');
    // headers.append('Accept', 'application/json');
    // // headers.append('Authorization', 'Basic ' + base64.encode(username + ":" +  password));
    // headers.append('Origin','http://localhost:4000');





    let msg = document.getElementById("msg");

    await fetch(`${API_HOST}/client/chat/${propertyID}/${ipaddres.replaceAll(".", ":")}`).then((res) => res.json()).then((data) => {

        if ("ChatData" in data) {
            widget_ID = data["_id"];
            data["ChatData"].map((msg) => {
                if (msg.split("|||")[0] == "User") {
                    addSendeMessage(msg.split("|||")[1]);
                } else {
                    addRecivedMessage(msg.split("|||")[1])
                }
                // console.log(msg);
            });

            msg.scrollTo(0, msg.scrollHeight);

        } else {
            console.log("first");
            console.log(data);
            //  addRecivedMessage("Welcome to Chat.io 👋");
            //  addRecivedMessage("How can i help you")
        }
    });


}

async function SendMessageToApi(message) {
    await fetch(`${API_HOST}/client//message/User/${widget_ID}/${ipaddres.replaceAll(".", ":")}/${message}`).then((res) => res.json()).then((data) => {
        // playPause();
    })
}




















// chatio.addEventListener("click", () => {
//     console.log("click chat io")
//     chatimg.classList.add("hidden")
//     chatio.style.borderRadius = "10px";
//     chatio.style.height = "80%"
//     chatio.style.width = "25%"
//     chat.classList.remove("hidden");
//     closebtn.classList.remove("hidden");

// })


// closebtn.addEventListener("click", () => {
//     closebtn.classList.add("hidden");
//     chat.classList.add("hidden");
//     chatio.style = "";
//     chatimg.classList.remove("hidden")
//     socket.disconnect();
// })

// chatnowbtn.addEventListener("click", () => {
//     socket.connect();
//     chatnowbtn.classList.add("hidden");
//     inputs.classList.remove("hidden");
//     addRecivedMessage("Welcome to Chat.io 👋");
//     addRecivedMessage("How can i help you")

// })

// sendmsg.addEventListener("click", () => {

//     if (msginput.value != "") {
//         socket.emit("Test1", msginput.value);
//         msginput.value = "";
//         msg.scrollTo(0, msg.scrollHeight);
//     }
// })


if (document.currentScript.getAttribute('id') != null) {
    StartChatIo(document.currentScript.getAttribute('id'));
} else {
    alert("ID required to start chat");
}

