! function (t) {
  var e, n, o, i, l, c = '<svg><symbol id="icon-subway-copy" viewBox="0 0 1024 1024"><path d="M522.01838351 483.94712354q5.79291899 0 9.9096786 2.928019t4.11675962 7.09211782l0 28.05287645q0 4.06942039-3.92915602 6.95010014t-9.56427756 3.03672387l6.66957137 6.32417035q0.50144516 0.46988569 0.2507226 1.09581547t-0.93977135 0.62592982l-33.06206823 0q-0.68904878 0-0.93977135-0.62592982t0.25072258-1.09581547l6.66957138-6.32417035q-5.63512155-0.15604412-9.56427757-3.03672387t-3.929156-6.95010015l0-28.05287644q0-4.16409884 4.11675961-7.09211782t9.9096786-2.928019l20.03852031 0zM496.97067143 525.02530118q2.06714632 0 3.53816906-1.47102267t1.4710227-3.53816908-1.4710227-3.53816902-3.53816906-1.47102273-3.53816903 1.47102273-1.47102273 3.53816902 1.47102273 3.53816908 3.53816903 1.47102268zM509.99421933 507.99194528l1e-8-16.0304656-17.03160261 0 0 16.0304656 17.03160261-1e-8zM527.02757524 525.02530118q2.06714632 0 3.53816905-1.47102267t1.47102272-3.53816908-1.47102272-3.53816902-3.53816905-1.47102273-3.53816902 1.47102273-1.47102272 3.53816902 1.47102272 3.53816908 3.53816902 1.47102268zM532.03676701 507.99194528l0-16.0304656-18.03449295 0 0 16.0304656 18.03449295-1e-8z"  ></path></symbol></svg>',
    d = (d = document.getElementsByTagName("script"))[d.length - 1].getAttribute("data-injectcss"),
    s = function (t, e) {
      e.parentNode.insertBefore(t, e)
    };
  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;
    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>")
    } catch (t) {
      console && console.log(t)
    }
  }

  function a() {
    l || (l = !0, o())
  }

  function r() {
    try {
      i.documentElement.doScroll("left")
    } catch (t) {
      return void setTimeout(r, 50)
    }
    a()
  }
  e = function () {
    var t, e = document.createElement("div");
    e.innerHTML = c, c = null, (e = e.getElementsByTagName("svg")[0]) && (e.setAttribute("aria-hidden", "true"), e.style.position = "absolute", e.style.width = 0, e.style.height = 0, e.style.overflow = "hidden", e = e, (t = document.body).firstChild ? s(e, t.firstChild) : t.appendChild(e))
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(e, 0) : (n = function () {
    document.removeEventListener("DOMContentLoaded", n, !1), e()
  }, document.addEventListener("DOMContentLoaded", n, !1)) : document.attachEvent && (o = e, i = t.document, l = !1, r(), i.onreadystatechange = function () {
    "complete" == i.readyState && (i.onreadystatechange = null, a())
  })
}(window);
<link rel="stylesheet" href="/css/bilicard.css" type="text/css">