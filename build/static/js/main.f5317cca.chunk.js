(this['webpackJsonpreact-certification-2020'] =
  this['webpackJsonpreact-certification-2020'] || []).push([
  [0],
  {
    37: function (e, t, n) {
      e.exports = n(69);
    },
    60: function (e, t, n) {},
    61: function (e, t, n) {},
    66: function (e, t, n) {},
    67: function (e, t, n) {},
    68: function (e, t, n) {},
    69: function (e, t, n) {
      'use strict';
      n.r(t);
      var a = n(0),
        r = n.n(a),
        c = n(30),
        l = n.n(c),
        o = n(7),
        i = n(1),
        u = n(14),
        s = function (e) {
          try {
            var t = window.localStorage.getItem(e);
            return JSON.parse(t);
          } catch (n) {
            return console.error('Error parsing storage item "'.concat(e, '".')), null;
          }
        },
        m = function (e, t) {
          window.localStorage.setItem(e, JSON.stringify(t));
        },
        f = r.a.createContext(null);
      function p() {
        var e = Object(a.useContext)(f);
        if (!e) throw new Error('Can\'t use "useAuth" without an AuthProvider!');
        return e;
      }
      var d = function (e) {
          var t = e.children,
            n = Object(a.useState)(!1),
            c = Object(u.a)(n, 2),
            l = c[0],
            o = c[1];
          Object(a.useEffect)(function () {
            var e = s('wa_cert_authenticated'),
              t = Boolean(e);
            o(t);
          }, []);
          var i = Object(a.useCallback)(function () {
              o(!0), m('wa_cert_authenticated', !0);
            }, []),
            p = Object(a.useCallback)(function () {
              o(!1), m('wa_cert_authenticated', !1);
            }, []);
          return r.a.createElement(
            f.Provider,
            { value: { login: i, logout: p, authenticated: l } },
            t
          );
        },
        v = n(8),
        E = n(9);
      function h() {
        var e = Object(v.a)([
          '\n  height: auto;\n  width: 100%;\n  border-radius: 3px;\n  margin-bottom: 8px;\n',
        ]);
        return (
          (h = function () {
            return e;
          }),
          e
        );
      }
      function b() {
        var e = Object(v.a)([
          '\n  font-size: 14px;\n  font-family: Arial Black;\n  text-overflow: ellipsis;\n',
        ]);
        return (
          (b = function () {
            return e;
          }),
          e
        );
      }
      function g() {
        var e = Object(v.a)([
          '\n  display: flex;\n  flex-direction: column;\n  width: 100%;\n  height: 40%;\n  padding: 8px;\n',
        ]);
        return (
          (g = function () {
            return e;
          }),
          e
        );
      }
      function w() {
        var e = Object(v.a)([
          '\n  border-radius: 3px;\n  display: flex;\n  flex-direction: column;\n  align-self: flex-start;\n  background-color: white;\n  height: 280px;\n  width: 280px;\n\n  margin: 8px;\n',
        ]);
        return (
          (w = function () {
            return e;
          }),
          e
        );
      }
      var x = E.a.div(w()),
        y = E.a.div(g()),
        O = E.a.span(b()),
        j = E.a.img(h()),
        k = function (e) {
          var t = e.videoSnippet;
          return r.a.createElement(
            x,
            null,
            r.a.createElement(
              y,
              null,
              r.a.createElement(j, { src: t.thumbnails.high.url }),
              r.a.createElement(O, null, ' ', t.title, ' ')
            )
          );
        },
        S = n(16),
        N = n.n(S),
        I = n(34),
        C = n(35),
        _ = n.n(C);
      function A() {
        var e = Object(v.a)([
          '\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  justify-content: center;\n  width: 100%;\n  height: 100%;\n  flex-wrap: wrap;\n',
        ]);
        return (
          (A = function () {
            return e;
          }),
          e
        );
      }
      var P = E.a.div(A()),
        B = function () {
          var e = (function () {
            var e = Object(a.useState)([]),
              t = Object(u.a)(e, 2),
              n = t[0],
              r = t[1];
            return (
              Object(a.useEffect)(function () {
                (function () {
                  var e = Object(I.a)(
                    N.a.mark(function e() {
                      var t, n, a;
                      return N.a.wrap(
                        function (e) {
                          for (;;)
                            switch ((e.prev = e.next)) {
                              case 0:
                                return (
                                  (e.prev = 0),
                                  (e.next = 3),
                                  _.a.get(
                                    'https://www.googleapis.com/youtube/v3/videos',
                                    {
                                      params: {
                                        part: 'snippet',
                                        chart: 'mostPopular',
                                        regionCode: 'mx',
                                        videoCategoryId: '10',
                                        key: 'AIzaSyAUu9MIWbw2vZy5_p-mBsTF-mPOH1VPHSU',
                                      },
                                    }
                                  )
                                );
                              case 3:
                                return (t = e.sent), (e.next = 6), t;
                              case 6:
                                (n = e.sent), (a = n.data.items), r(a), (e.next = 14);
                                break;
                              case 11:
                                (e.prev = 11),
                                  (e.t0 = e.catch(0)),
                                  console.error('YT Error: ', e.t0);
                              case 14:
                              case 'end':
                                return e.stop();
                            }
                        },
                        e,
                        null,
                        [[0, 11]]
                      );
                    })
                  );
                  return function () {
                    return e.apply(this, arguments);
                  };
                })()();
              }, []),
              { popularVids: n }
            );
          })().popularVids;
          if (e.length) {
            var t = e.map(function (e) {
              return r.a.createElement(k, { videoSnippet: e.snippet, key: e.id });
            });
            return r.a.createElement(P, null, t);
          }
          return r.a.createElement('span', null, ' LOADING... ');
        },
        M =
          (n(60),
          function () {
            var e = Object(a.useRef)(null);
            return r.a.createElement(
              'div',
              { ref: e },
              'HOME',
              r.a.createElement(B, null)
            );
          });
      n(61);
      var F = function () {
        var e = p().login,
          t = Object(i.g)();
        return r.a.createElement(
          'section',
          { className: 'login' },
          r.a.createElement('h1', null, 'Welcome back!'),
          r.a.createElement(
            'form',
            {
              onSubmit: function (n) {
                n.preventDefault(), e(), t.push('/secret');
              },
              className: 'login-form',
            },
            r.a.createElement(
              'div',
              { className: 'form-group' },
              r.a.createElement(
                'label',
                { htmlFor: 'username' },
                r.a.createElement('strong', null, 'username '),
                r.a.createElement('input', { required: !0, type: 'text', id: 'username' })
              )
            ),
            r.a.createElement(
              'div',
              { className: 'form-group' },
              r.a.createElement(
                'label',
                { htmlFor: 'password' },
                r.a.createElement('strong', null, 'password '),
                r.a.createElement('input', {
                  required: !0,
                  type: 'password',
                  id: 'password',
                })
              )
            ),
            r.a.createElement('button', { type: 'submit' }, 'login')
          )
        );
      };
      n(66);
      var J = function () {
        return r.a.createElement(
          'section',
          { className: 'not-found' },
          r.a.createElement(o.b, { to: '/', className: 'home-link' }, 'home'),
          r.a.createElement('img', { src: '404.gif', alt: 'page not found' })
        );
      };
      var L = function () {
          return r.a.createElement(
            'section',
            null,
            r.a.createElement(
              'pre',
              null,
              'welcome, voyager...',
              r.a.createElement(o.b, { to: '/' }, ' \u2190 go back')
            ),
            r.a.createElement('iframe', {
              width: '800',
              height: '450',
              allowFullScreen: !0,
              frameBorder: '0',
              title: 'rick roll',
              src: 'https://www.youtube.com/embed/dQw4w9WgXcQ?controls=0&autoplay=1',
              allow:
                'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture',
            })
          );
        },
        H = n(36);
      var V = function (e) {
        var t = e.children,
          n = Object(H.a)(e, ['children']),
          a = p().authenticated;
        return r.a.createElement(
          i.b,
          Object.assign({}, n, {
            render: function () {
              return a ? t : r.a.createElement(i.a, { to: '/login' });
            },
          })
        );
      };
      n(67);
      var W = function (e) {
        var t = e.children;
        return r.a.createElement('main', { className: 'container' }, t);
      };
      function q(e) {
        return Math.floor(Math.random() * e);
      }
      var z = function () {
        return (
          Object(a.useLayoutEffect)(function () {
            var e = document.body,
              t = function () {
                var t = q(100),
                  n = q(100);
                e.style.setProperty('--bg-position', ''.concat(t, '% ').concat(n, '%'));
              },
              n = setInterval(t, 3e3);
            return (
              e.addEventListener('click', t),
              function () {
                clearInterval(n), e.removeEventListener('click', t);
              }
            );
          }, []),
          r.a.createElement(
            o.a,
            null,
            r.a.createElement(
              d,
              null,
              r.a.createElement(
                W,
                null,
                r.a.createElement(
                  i.d,
                  null,
                  r.a.createElement(
                    i.b,
                    { exact: !0, path: '/' },
                    r.a.createElement(M, null)
                  ),
                  r.a.createElement(
                    i.b,
                    { exact: !0, path: '/login' },
                    r.a.createElement(F, null)
                  ),
                  r.a.createElement(
                    V,
                    { exact: !0, path: '/secret' },
                    r.a.createElement(L, null)
                  ),
                  r.a.createElement(i.b, { path: '*' }, r.a.createElement(J, null))
                )
              )
            )
          )
        );
      };
      n(68);
      l.a.render(
        r.a.createElement(r.a.StrictMode, null, r.a.createElement(z, null)),
        document.getElementById('root')
      );
    },
  },
  [[37, 1, 2]],
]);
//# sourceMappingURL=main.f5317cca.chunk.js.map