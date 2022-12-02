
  //     pop up for  map


  if (document.querySelector(".js-overlay-modal")) {
    /* Записываем в переменные массив элементов-кнопок и подложку.
		Подложке зададим id, чтобы не влиять на другие элементы с классом overlay*/
    var modalButtons = document.querySelectorAll(".js-open-modal"),
      overlay = document.querySelector(".js-overlay-modal"),
      closeButtons = document.querySelectorAll(".js-modal-close");

    /* Перебираем массив кнопок */
    modalButtons.forEach(function (item) {
      /* Назначаем каждой кнопке обработчик клика */
      item.addEventListener("click", function (e) {
        /* Предотвращаем стандартное действие элемента. Так как кнопку разные
			люди могут сделать по-разному. Кто-то сделает ссылку, кто-то кнопку.
			Нужно подстраховаться. */
        e.preventDefault();

        /* При каждом клике на кнопку мы будем забирать содержимое атрибута data-modal
			и будем искать модальное окно с таким же атрибутом. */
        var modalId = this.getAttribute("data-modal"),
          modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

        /* После того как нашли нужное модальное окно, добавим классы
			подложке и окну чтобы показать их. */
        modalElem.classList.add("showmodal");
        overlay.classList.add("showmodal");
        
      });
    });

    closeButtons.forEach(function (item) {
      item.addEventListener("click", function (e) {
        var parentModal = this.closest(".modal");

        parentModal.classList.remove("showmodal");
        overlay.classList.remove("showmodal");
      });
    });

    overlay.addEventListener("click", function () {
      document.querySelector(".modal.showmodal").classList.remove("showmodal");
      overlay.classList.remove("showmodal");
    });

    document.onkeydown = function (evt) {
      if (evt.key == "Escape" || evt.key == "Esc" || evt.key == 27) {
        evt.preventDefault();
        document.querySelector(".modal.showmodal").classList.remove("showmodal");
        overlay.classList.remove("showmodal");
      }
    };

  }


  //   contacts   form


let contactform = document.querySelector(".contact-form");
if (contactform) {
  contactform.addEventListener("submit", function (e) {
    e.preventDefault();

    // let data = new FormData(this);
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", location.origin + "/sendcontact/");
    // xhr.onload = function () {
      console.log(this.responseText);
      contactform.style.display = "none";
      let info = document.querySelector('.modal-wrapper__title')
      info.innerText = "Спасибо, ваша заявка принята!";
    // };
    // xhr.send(data);
    // if (contactform.closest(".showmodal")) {
    //   contactform.closest(".showmodal").classList.remove("showmodal");
    // }
  });
}



let tradeIn = document.querySelector(".trade-form");
if (tradeIn) {
  tradeIn.addEventListener("submit", function (e) {
    e.preventDefault();

    // let data = new FormData(this);
    // let xhr = new XMLHttpRequest();
    // xhr.open("POST", location.origin + "/sendcontact/");
    // xhr.onload = function () {
      console.log(this.responseText);
      tradeIn.style.display = "none";
      let infoTrade = document.querySelector('.trade__title')
      infoTrade.innerText = "Спасибо, ваша заявка принята!";
    // };
    // xhr.send(data);
    // if (contactform.closest(".showmodal")) {
    //   contactform.closest(".showmodal").classList.remove("showmodal");
    // }
  });
}


var lazyload;
function initLazyload(e, t) {
  lazyload = new LazyLoad({
    elements_selector: e,
    callback_loaded: function (e) {
      "function" == typeof t && t(e);
    },
  });
}
function loadPicture(e) {
  var t = Array.prototype.slice.call(
      e.querySelectorAll("picture source[data-srcset]")
    ),
    e = Array.prototype.slice.call(e.querySelectorAll("img[data-src]"));
  t.forEach(function (e) {
    e.setAttribute("srcset", e.dataset.srcset);
  }),
    e.forEach(function (e) {
      e.setAttribute("src", e.dataset.src);
    });
}
function initObjectFitFallback() {
  "objectFit" in document.documentElement.style ||
    Array.prototype.forEach.call(
      document.querySelectorAll("[data-object-fit]"),
      function (e) {
        var t,
          o = e.getAttribute("data-src") || e.getAttribute("src");
        o &&
          "img" === e.tagName.toLowerCase() &&
          ((t = e.getAttribute("data-object-fit")),
          (e = e.parentElement).classList.contains("responsive-media") ||
            (e = e.parentElement),
          (t = "cover" === t ? "cover" : "contain"),
          (e.style.backgroundImage = "url(" + o + ")"),
          e.classList.add("fit-img"),
          e.classList.add("fit-img--" + t));
      }
    );
}
function offset(e) {
  var t = 0,
    o = 0;
  if (e.offsetParent)
    for (; (t += e.offsetTop), (o += e.offsetLeft), (e = e.offsetParent); );
  return { top: t, left: o };
}
function initScroll() {
  var t,
    e = Array.prototype.slice.call(
      document.querySelectorAll(".js-scroll-to-anchor")
    );
  function o(e) {
    e.preventDefault();
    e = document.querySelector(this.dataset.href || this.getAttribute("href"));
    e &&
      t.animateScroll(e, 0, { speed: 500, speedAsDuration: !0, updateURL: !1 });
  }
  e &&
    ((t = new SmoothScroll()),
    e.forEach(function (e) {
      e.addEventListener("click", o);
    }));
}
function initPopups() {
  var e = ".js-popup-link",
    t = ".js-popup-close",
    o = ".js-slider",
    s = "show",
    n = "no-scroll-popup",
    e = Array.prototype.slice.call(document.querySelectorAll(e));
  function l(e) {
    e.preventDefault();
    var e = document.querySelector(this.getAttribute("href"));
    !e ||
      ((e = e.nextElementSibling) &&
        (document.body.classList.add(n),
        e.classList.add(s),
        (swiper = e.querySelector(o)),
        swiper && swiper.swiper && swiper.swiper.update()));
  }
  function r() {
    this.parentNode.classList.remove(s), document.body.classList.remove(n);
  }
  (popupCloseButtons = Array.prototype.slice.call(
    document.querySelectorAll(t)
  )),
    e.forEach(function (e) {
      e.addEventListener("click", l);
    }),
    popupCloseButtons.forEach(function (e) {
      e.addEventListener("click", r);
    });
}
function initHeroVideo() {
  initLazyload(".js-video", function (e) {
    e.play();
  });
}
function initHeader() {
  var s,
    l = {
      BURGER: "#js-header-burger",
      MENU: "#js-menu",
      MENU_ITEM: ".js-menu-item ",
      MENU_LINK_SUBMENU: ".js-menu-link-submenu",
      MENU_DROPDOWN: ".js-menu-dropdown",
      MENU_DROPDOWN_BACK: ".js-menu-dropdown-back",
      MENU_LEV2_LINK_SUBMENU: ".js-menu-lev2-link-submenu",
      MENU_LEV2_DROPDOWN: ".js-menu-lev3",
      MENU_LEV2_DROPDOWN_BACK: ".js-menu-lev3-back",
      MENU_LEV3_LINK: ".js-menu-lev3-link",
      MENU_IMAGE: ".js-menu-image",
      HEADER: "header",
      MENU_MODEL_LINK: ".js-menu-models-link",
      MENU_MODEL_DROPDOWN: ".js-menu-models-model",
    },
    r = {
      BURGER_OPEN: "header__burger_open",
      MENU_OPEN: "menu_open",
      MENU_CLOSE: "menu_close",
      MENU_LINK_ACTIVE: "menu__link_active",
      MENU_DROPDOWN_OPEN: "menu-dropdown_open",
      MENU_DROPDOWN_CLOSE: "menu-dropdown_close",
      MENU_LEV2_LINK_ACTIVE: "menu-lev2__link_active",
      MENU_LEV2_DROPDOWN_OPEN: "menu-lev3_open",
      MENU_LEV2_DROPDOWN_CLOSE: "menu-lev3_close",
      MENU_LEV2_DROPDOWN_OPEN_LG: "menu-lev3_open-lg",
      MENU_LEV3_LINK_ACTIVE: "menu-lev3__link_active",
      MENU_IMAGE_OPEN: "menu-dropdown__img_open",
      BODY_NO_SCROLL: "no-scroll",
      HEADER_HIDDEN: "header_hidden",
      HEADER_TRANSPARENT: "header_transparent",
      MENU_MODEL_LINK_ACTIVE: "menu-models__item-link_active",
      MENU_MODEL_DROPDOWN_OPEN: "menu-models__desc_open",
      MENU_MODEL_IMAGE_OPEN: "menu-models__img_open",
    },
    i = window.matchMedia("(min-width: 1024px)"),
    e = document.querySelector(l.BURGER),
    t = document.querySelector(l.MENU),
    d = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_LINK_SUBMENU)
    ),
    o = Array.prototype.slice.call(document.querySelectorAll(l.MENU_DROPDOWN)),
    u = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_DROPDOWN_BACK)
    ),
    E = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_LEV2_LINK_SUBMENU)
    ),
    n = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_LEV2_DROPDOWN)
    ),
    _ = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_LEV2_DROPDOWN_BACK)
    ),
    p = Array.prototype.slice.call(document.querySelectorAll(l.MENU_LEV3_LINK)),
    c = document.querySelector(l.HEADER),
    m = c.dataset.transparent,
    L = Array.prototype.slice.call(
      document.querySelectorAll(l.MENU_MODEL_LINK)
    );
  Array.prototype.slice.call(document.querySelectorAll(l.MENU_MODEL_DROPDOWN));
  function N(e) {
    e.preventDefault();
    var t,
      e = this.closest(l.MENU_ITEM).querySelector(l.MENU_DROPDOWN);
    e &&
      ((t = !e.classList.contains(r.MENU_DROPDOWN_OPEN)),
      a(),
      t &&
        (c.classList.remove(r.HEADER_TRANSPARENT),
        e.classList.remove(r.MENU_DROPDOWN_CLOSE),
        e.classList.add(r.MENU_DROPDOWN_OPEN),
        this.classList.add(r.MENU_LINK_ACTIVE),
        loadPicture(e)));
  }
  function y(e) {
    e.preventDefault();
    var e = this.closest(l.MENU_ITEM),
      t = e.querySelector(l.MENU_LINK_SUBMENU),
      e = e.querySelector(l.MENU_DROPDOWN);
    t.classList.remove(r.MENU_LINK_ACTIVE),
      e.classList.remove(r.MENU_DROPDOWN_OPEN),
      e.classList.add(r.MENU_DROPDOWN_CLOSE);
  }
  function f(e) {
    i.matches || e.preventDefault();
    var e = this.closest(l.MENU_DROPDOWN),
      t = Array.prototype.slice.call(
        e.querySelectorAll(l.MENU_LEV2_LINK_SUBMENU)
      ),
      e = Array.prototype.slice.call(e.querySelectorAll(l.MENU_LEV2_DROPDOWN)),
      t = t.indexOf(this);
    -1 < t && e[t].classList.add(r.MENU_LEV2_DROPDOWN_OPEN);
  }
  function O(e) {
    var t, o, s;
    i.matches &&
      ((o = this.closest(l.MENU_DROPDOWN)),
      (t = Array.prototype.slice.call(
        o.querySelectorAll(l.MENU_LEV2_LINK_SUBMENU)
      )),
      (o = Array.prototype.slice.call(
        o.querySelectorAll(l.MENU_LEV2_DROPDOWN)
      )),
      (s = t.indexOf(this)),
      t.forEach(function (e) {
        e.classList.remove(r.MENU_LEV2_LINK_ACTIVE);
      }),
      this.classList.add(r.MENU_LEV2_LINK_ACTIVE),
      o.forEach(function (e, t) {
        t == s
          ? (e.classList.add(r.MENU_LEV2_DROPDOWN_OPEN_LG),
            (t = e.querySelector(l.MENU_LEV3_LINK)) && M(t))
          : e.classList.remove(r.MENU_LEV2_DROPDOWN_OPEN_LG);
      }));
  }
  function v(e) {
    e.preventDefault();
    (e = this.closest(l.MENU_DROPDOWN)),
      Array.prototype.slice.call(e.querySelectorAll(l.MENU_LEV2_LINK_SUBMENU)),
      (e = this.closest(l.MENU_LEV2_DROPDOWN));
    e.classList.contains(r.MENU_LEV2_DROPDOWN_OPEN) &&
      (e.classList.remove(r.MENU_LEV2_DROPDOWN_OPEN),
      e.classList.add(r.MENU_LEV2_DROPDOWN_CLOSE));
  }
  function h(e) {
    i.matches && M(this);
  }
  function M(e) {
    var t = e.closest(l.MENU_DROPDOWN),
      o = Array.prototype.slice.call(t.querySelectorAll(l.MENU_LEV3_LINK)),
      s = Array.prototype.slice.call(t.querySelectorAll(l.MENU_IMAGE)),
      t = t.querySelector("#" + e.dataset.img);
    o.forEach(function (e) {
      e.classList.remove(r.MENU_LEV3_LINK_ACTIVE);
    }),
      e.classList.add(r.MENU_LEV3_LINK_ACTIVE),
      s.forEach(function (e) {
        e.classList.remove(r.MENU_IMAGE_OPEN);
      }),
      t.classList.add(r.MENU_IMAGE_OPEN);
  }
  function a() {
    var e;
    d.forEach(function (e) {
      e.classList.remove(r.MENU_LINK_ACTIVE);
    }),
      o.forEach(function (e) {
        e.classList.contains(r.MENU_DROPDOWN_OPEN) &&
          (e.classList.remove(r.MENU_DROPDOWN_OPEN),
          e.classList.add(r.MENU_DROPDOWN_CLOSE));
      }),
      n.forEach(function (e) {
        e.classList.contains(r.MENU_LEV2_DROPDOWN_OPEN) &&
          (e.classList.remove(r.MENU_LEV2_DROPDOWN_OPEN),
          e.classList.add(r.MENU_LEV2_DROPDOWN_CLOSE));
      }),
      (e = window.scrollY || document.documentElement.scrollTop),
      m & !e && c.classList.add(r.HEADER_TRANSPARENT);
  }
  function S() {
    a(),
      o.forEach(function (e) {
        e.classList.remove(r.MENU_DROPDOWN_CLOSE);
      }),
      n.forEach(function (e) {
        e.classList.remove(r.MENU_LEV2_DROPDOWN_CLOSE);
      }),
      e.classList.remove(r.BURGER_OPEN),
      t.classList.remove(r.MENU_OPEN),
      t.classList.remove(r.MENU_CLOSE),
      document.body.classList.remove(r.BODY_NO_SCROLL);
  }
  function D(e) {
    var t, o, s, n;
    i.matches &&
      ((s = this.closest(l.MENU_DROPDOWN)),
      (t = Array.prototype.slice.call(s.querySelectorAll(l.MENU_MODEL_LINK))),
      (o = Array.prototype.slice.call(
        s.querySelectorAll(l.MENU_MODEL_DROPDOWN)
      )),
      (s = Array.prototype.slice.call(s.querySelectorAll(l.MENU_IMAGE))),
      (n = t.indexOf(this)),
      t.forEach(function (e) {
        e.classList.remove(r.MENU_MODEL_LINK_ACTIVE);
      }),
      this.classList.add(r.MENU_MODEL_LINK_ACTIVE),
      o.forEach(function (e, t) {
        t == n
          ? e.classList.add(r.MENU_MODEL_DROPDOWN_OPEN)
          : e.classList.remove(r.MENU_MODEL_DROPDOWN_OPEN);
      }),
      s.forEach(function (e, t) {
        t == n
          ? e.classList.add(r.MENU_MODEL_IMAGE_OPEN)
          : e.classList.remove(r.MENU_MODEL_IMAGE_OPEN);
      }));
  }
  e &&
    t &&
    (e.addEventListener("click", function () {
      e.classList.contains(r.BURGER_OPEN)
        ? (e.classList.remove(r.BURGER_OPEN),
          t.classList.remove(r.MENU_OPEN),
          t.classList.add(r.MENU_CLOSE),
          document.body.classList.remove(r.BODY_NO_SCROLL),
          a(),
          o.forEach(function (e) {
            e.classList.remove(r.MENU_DROPDOWN_CLOSE);
          }),
          n.forEach(function (e) {
            e.classList.remove(r.MENU_LEV2_DROPDOWN_CLOSE);
          }))
        : (c.classList.remove(r.HEADER_TRANSPARENT),
          e.classList.add(r.BURGER_OPEN),
          t.classList.remove(r.MENU_CLOSE),
          t.classList.add(r.MENU_OPEN),
          document.body.classList.add(r.BODY_NO_SCROLL));
    }),
    d.forEach(function (e) {
      e.addEventListener("click", N);
    }),
    u.forEach(function (e) {
      e.addEventListener("click", y);
    }),
    E.forEach(function (e) {
      e.addEventListener("click", f), e.addEventListener("mouseover", O);
    }),
    _.forEach(function (e) {
      e.addEventListener("click", v);
    }),
    p.forEach(function (e) {
      e.addEventListener("mouseover", h);
    }),
    i.addListener ? i.addListener(S) : i.addEventListener("change", S),
    document.body.addEventListener("click", (e) => {
      i.matches &&
        null == e.target.closest(l.MENU_DROPDOWN) &&
        null == e.target.closest(l.MENU_LINK_SUBMENU) &&
        (document.body.classList.remove(r.BODY_NO_SCROLL), a());
    }),
    (s = window.scrollY || document.documentElement.scrollTop),
    window.addEventListener("scroll", function (e) {
      var t = window.scrollY || document.documentElement.scrollTop,
        o = Array.prototype.slice.call(
          document.querySelectorAll("." + r.MENU_DROPDOWN_OPEN)
        );
      t < 0 && (t = 0),
        o.length ||
          (s < t
            ? c.classList.add(r.HEADER_HIDDEN)
            : (m && c.classList.remove(r.HEADER_TRANSPARENT),
              c.classList.remove(r.HEADER_HIDDEN))),
        m & !t & !o.length && c.classList.add(r.HEADER_TRANSPARENT),
        (s = t);
    }),
    L.forEach(function (e) {
      e.addEventListener("mouseover", D);
    }));
}
function initSlider() {
  var e = Array.prototype.slice.call(document.querySelectorAll(".js-slider"));
  e &&
    e.forEach(function (e) {
      var o;
      (o = (e = e).dataset.layout),
        new Swiper(e, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loop: "model-range" == o || "hero" == o,
          preloadImages: !1,
          autoplay: "hero" == o && { delay: 5e3, disableOnInteraction: !1 },
          threshold: 10,
          lazy: { loadPrevNext: !0, loadOnTransitionStart: !0 },
          pagination: {
            el: e.querySelector(".swiper-pagination"),
            type: "popup" == o ? "fraction" : "bullets",
            clickable: !0,
            renderBullet: function (e, t) {
              return (
                '<div class="' +
                t +
                ' "><span>' +
                this.slides["model-range" == o ? e + 1 : e].dataset.title +
                "</span></div>"
              );
            },
            renderFraction: function (e, t) {
              return (
                '<span class="' +
                e +
                '"></span> из <span class="' +
                t +
                '"></span>'
              );
            },
          },
          navigation: {
            nextEl: e.querySelector(".swiper-button-next"),
            prevEl: e.querySelector(".swiper-button-prev"),
          },
        });
    });
}
function initModelColors() {
  var e,
    t,
    o,
    d = {
      EXT: ".js-model-colors-ext",
      EXT_LINK: ".js-model-colors-ext-link",
      INT: ".js-model-colors-int",
      INT_LINK: ".js-model-colors-int-link",
      TAB: ".js-model-colors-ext, .js-model-colors-int",
      PREV: ".js-model-colors-prev",
      NEXT: ".js-model-colors-next",
      IMAGE: ".js-model-colors-image",
      BUTTON: ".js-model-colors-color",
      COLOR_NAME: ".js-model-colors-color-name",
    },
    s = "model-colors-block__slider_active",
    u = "model-colors-block__color-item_active",
    E = "active",
    _ = "model-colors-block__arrow_disabled",
    p = "model-colors-block__slider_dark",
    n = Array.prototype.slice.call(document.querySelectorAll(d.TAB));
  n &&
    (n.forEach(function (e) {
      function t() {
        o(i.indexOf(this));
      }
      function o(e) {
        if (!(e < 0 || c - 1 < e)) {
          current = e;
          for (var t = 0; t < c; t++)
            t == current
              ? (r[t].classList.add(E), i[t].classList.add(u))
              : (r[t].classList.remove(E), i[t].classList.remove(u));
          (a.innerText = i[current].dataset.name),
            0 == current ? n.classList.add(_) : n.classList.remove(_),
            current == c - 1 ? l.classList.add(_) : l.classList.remove(_),
            s.classList.contains(d.INT.substring(1)) &&
              (i[current].dataset.light
                ? s.classList.remove(p)
                : s.classList.add(p));
        }
      }
      var s, n, l, r, i, c, a;
      (n = (s = e).querySelector(d.PREV)),
        (l = s.querySelector(d.NEXT)),
        (r = Array.prototype.slice.call(s.querySelectorAll(d.IMAGE))),
        (i = Array.prototype.slice.call(s.querySelectorAll(d.BUTTON))),
        (c = i.length),
        (a = s.querySelector(d.COLOR_NAME)),
        (current = 0),
        loadPicture(s),
        n.addEventListener("click", function () {
          o(current - 1);
        }),
        l.addEventListener("click", function () {
          o(current + 1);
        }),
        i.forEach(function (e) {
          e.addEventListener("click", t);
        }),
        o(current);
    }),
    (e = document.querySelector(d.EXT)),
    (n = document.querySelector(d.EXT_LINK)),
    (t = document.querySelector(d.INT)),
    (o = document.querySelector(d.INT_LINK)),
    e &&
      n &&
      t &&
      o &&
      (n.addEventListener("click", function () {
        t.classList.remove(s), e.classList.add(s);
      }),
      o.addEventListener("click", function () {
        e.classList.remove(s), t.classList.add(s);
      })));
}
function initGrades() {
  var e = ".js-grades-slider",
    r = ".js-grades-slide",
    e = Array.prototype.slice.call(document.querySelectorAll(e));
  e &&
    e.forEach(function (e) {
      var t,
        o = e,
        s = window.matchMedia("(min-width: 1024px)"),
        n = Array.prototype.slice.call(o.querySelectorAll(r));
      function l() {
        s.matches && 3 < n.length
          ? (t = new Swiper(o, {
              slidesPerView: 3,
              slidesPerGroup: 1,
              loop: !1,
              spaceBetween: 40,
              navigation: {
                nextEl: o.nextElementSibling.querySelector(
                  ".swiper-button-next"
                ),
                prevEl: o.nextElementSibling.querySelector(
                  ".swiper-button-prev"
                ),
              },
            }))
          : void 0 !== t && t.destroy(!0, !0);
      }
      s.addListener ? s.addListener(l) : s.addEventListener("change", l), l();
    });
}
function initGallery() {
  var e = ".js-gallery",
    E = ".js-gallery-slider",
    _ = ".js-gallery-link",
    p = ".js-gallery-popup",
    m = ".js-gallery-popup-close",
    L = ".js-gallery-popup-title",
    N = ".js-gallery-popup-slider",
    y = "gallery-popup_show",
    e = Array.prototype.slice.call(document.querySelectorAll(e));
  e &&
    e.forEach(function (e) {
      var t,
        o = window.matchMedia("(min-width: 768px)"),
        s = e.querySelector(E);
      function n() {
        o.matches
          ? void 0 !== t && t.destroy(!0, !0)
          : (t = new Swiper(s, {
              slidesPerView: 1,
              slidesPerGroup: 1,
              loop: !1,
              spaceBetween: 0,
              pagination: {
                el: ".swiper-pagination",
                type: "fraction",
                clickable: !0,
                renderFraction: function (e, t) {
                  return (
                    '<span class="' +
                    e +
                    '"></span> из <span class="' +
                    t +
                    '"></span>'
                  );
                },
              },
              navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
              },
            }));
      }
      o.addListener ? o.addListener(n) : o.addEventListener("change", n), n();
      var l,
        r = Array.prototype.slice.call(e.querySelectorAll(_)),
        i = e.querySelector(p),
        c = e.querySelector(m),
        d = e.querySelector(L),
        a = e.querySelector(N);
      function u(e) {
        e.preventDefault(),
          o.matches && (i.classList.add(y), l.slideTo(+this.dataset.index, 0));
      }
      r.forEach(function (e) {
        e.addEventListener("click", u);
      }),
        c.addEventListener("click", function () {
          i.classList.remove(y);
        }),
        (l = new Swiper(a, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loop: !1,
          spaceBetween: 0,
          preloadImages: !1,
          lazy: { loadPrevNext: !0, loadOnTransitionStart: !0 },
          pagination: {
            el: ".swiper-pagination",
            type: "fraction",
            clickable: !0,
            renderFraction: function (e, t) {
              return (
                '<span class="' +
                e +
                '"></span> из <span class="' +
                t +
                '"></span>'
              );
            },
          },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          on: {
            slideChangeTransitionEnd: function () {
              d.innerText = a.querySelector(
                ".swiper-slide-active"
              ).dataset.title;
            },
          },
        }));
    });
}
function initModelRange() {
  var e = ".js-model-range",
    t = ".js-model-range-image",
    o = ".js-model-range-bg",
    s = "(min-width: 768px)",
    n = "(min-width: 1200px)",
    l = "(min-width: 1450px)",
    r = window.matchMedia(s),
    d = window.matchMedia(n),
    u = window.matchMedia(l),
    i = document.querySelector(e),
    c = document.querySelector(t),
    E = document.querySelector(o);
  function a() {
    var e = offset(i).top + i.offsetHeight - offset(c).top - c.offsetHeight;
    u.matches
      ? (e += 100)
      : d.matches
      ? (e += 70)
      : r.matches
      ? (e += 60)
      : (e += 50),
      (E.style.bottom = e + "px");
  }
  i && (window.addEventListener("resize", a), a());
}
function initMediaText() {
  var e = ".js-media-text-block",
    o = ".js-media-text-block-slider",
    s = ".js-media-text-video",
    n = ".js-media-text-video-link",
    t = "#js-video-modal",
    l = "#js-video-modal-close",
    r = "#js-video-modal-iframe",
    i = "d-none",
    e = Array.prototype.slice.call(document.querySelectorAll(e)),
    c = document.querySelector(t),
    d = document.querySelector(l),
    a = document.querySelector(r);
  e &&
    e.forEach(function (e) {
      var t = (e = e).querySelector(o),
        e = Array.prototype.slice.call(e.querySelectorAll(n));
      t &&
        new Swiper(t, {
          slidesPerView: 1,
          slidesPerGroup: 1,
          loop: !0,
          pagination: { el: ".swiper-pagination" },
          navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          },
          preloadImages: !1,
          lazy: { loadPrevNext: !0, loadOnTransitionStart: !0 },
          on: {
            init: function () {
              initLazyload(s, (e) => {
                e.closest(".swiper-slide-active") && e.play();
              });
            },
            slideChangeTransitionStart: function () {
              Array.prototype.slice
                .call(this.$el[0].querySelectorAll(s))
                .forEach((e) => {
                  e.pause(), (e.currentTime = 0);
                });
            },
            slideChangeTransitionEnd: function () {
              const e = t.querySelector(".swiper-slide-active " + s);
              e && e.play();
            },
          },
        }),
        e &&
          (e.forEach(function (e) {
            e.addEventListener("click", function (e) {
              e.preventDefault(),
                (a.src = this.getAttribute("href")),
                c.classList.remove(i);
            });
          }),
          d.addEventListener("click", function () {
            c.classList.add(i), (a.src = "");
          }));
    });
}
function initCookiePopup() {
  var e = ".js-cookie-notify",
    t = ".js-cookie-notify-btn",
    o = "cookie-notify_hidden",
    s = "cookie-notify_hidden-anim",
    n = document.querySelector(e);
  function l(e) {
    e.preventDefault(),
      localStorage.setItem("cookie_hidden", "true"),
      n.classList.add(s);
  }
  n &&
    ((e = !localStorage.getItem("cookie_hidden")),
    (t = document.querySelector(t)),
    e
      ? (setTimeout(function () {
          n.classList.remove(o);
        }, 1e3),
        t.addEventListener("click", l))
      : (t.removeEventListener("click", l), n.remove()));
}
function initSelectOffices() {
  var t = ".js-offices-select",
    e = ".js-dealer-name",
    o = ".js-select-current",
    s = ".js-select-item",
    d = ".js-contacts-item",
    u = ".header",
    E = "header__select",
    n = "header__select_open",
    l = "header__select-item_active",
    r = "hidden",
    _ = "header_hidden",
    i = document.querySelector(o),
    c = document.querySelector(t),
    o = document.querySelectorAll(s),
    p = document.querySelector(e),
    m = document.querySelectorAll(d);
  function a(e) {
    document.querySelector(s + "." + l).classList.remove(l);
    var t = document.querySelector(`.js-select-item[data-dealer-id="${e}"]`),
      e =
        (t.classList.add(l),
        localStorage.setItem("selectedOffice", e),
        document.querySelectorAll(`.js-contacts-item[data-office-id="${e}"]`)),
      e =
        (m.forEach(function (e) {
          e.classList.add(r);
        }),
        e.forEach(function (e) {
          e.classList.remove(r);
        }),
        t.dataset.dealerName),
      t = t.dataset.dealerContent;
    (i.textContent = t), (p.textContent = e), c.classList.remove(n);
  }
  c &&
    ((e =
      localStorage.getItem("selectedOffice") ||
      document.querySelector('.js-select-item[data-dealer-id="0"]').dataset
        .dealerId),
    i.addEventListener("click", function () {
      c.classList.toggle(n);
    }),
    a(e),
    o.forEach(function (e) {
      e.addEventListener("click", function () {
        a(this.dataset.dealerId);
      });
    }),
    document.addEventListener("click", function (e) {
      e = e.target;
      e.closest(t) || e.classList.contains(E) || c.classList.remove(n);
    }));
  var L = document.querySelector(u);
  window.addEventListener("scroll", function () {
    c && L.classList.contains(_) && c.classList.remove(n);
  });
}
function initDealers() {
  !(function e() {
    "undefined" != typeof ymaps ? ymaps.ready(d) : setTimeout(e, 500);
  })();
  var n,
    l,
    r,
    o = null,
    i = null,
    c = -1,
    a = 16;
  function d() {
    const e = {
      Android: function () {
        return navigator.userAgent.match(/Android/i);
      },
      BlackBerry: function () {
        return navigator.userAgent.match(/BlackBerry/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
      },
      Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
      },
      Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
      },
      any: function () {
        return (
          e.Android() || e.BlackBerry() || e.iOS() || e.Opera() || e.Windows()
        );
      },
    };
    var t, s;
    (o = new ymaps.Map(
      "js-dc-map",
      {
        center: [55.751238, 37.625393],
        zoom: a,
        controls: ["zoomControl"],
        margin: [55, 22, 0, 22],
      },
      { balloonPanelMaxMapArea: 0 }
    )).behaviors.disable("scrollZoom"),
      e.any() &&
        (o.behaviors.disable("drag"), o.behaviors.enable("multiTouch")),
      (i = new ymaps.Clusterer({
        clusterIconLayout: ymaps.templateLayoutFactory.createClass(
          '<div class="dealers__map-multi-pin">{{ properties.geoObjects.length }}</div>'
        ),
        clusterIconShape: {
          type: "Rectangle",
          coordinates: [
            [-22, -22],
            [23, 23],
          ],
        },
      })),
      (n = ymaps.templateLayoutFactory.createClass(
        '<div class="dc-map__pin"></div>'
      )),
      (l = ymaps.templateLayoutFactory.createClass(
        '<div class="dc-map__pin dc-map__pin_current"></div>'
      )),
      (r = ymaps.templateLayoutFactory.createClass(
        '<div class="dc-map__balloon"><button class="dc-map__close"></button>$[[options.contentLayout]]</div>',
        {
          build: function () {
            this.constructor.superclass.build.call(this),
              (this._element =
                this.getParentElement().querySelector(".dc-map__balloon")),
              this.applyElementOffset(),
              this._element
                .querySelector(".dc-map__close")
                .addEventListener("click", this.onCloseClick.bind(this));
          },
          clear: function () {
            this._element
              .querySelector(".dc-map__close")
              .removeEventListener("click", this.onCloseClick.bind(this)),
              this.constructor.superclass.clear.call(this);
          },
          onSublayoutSizeChange: function () {
            r.superclass.onSublayoutSizeChange.apply(this, arguments),
              this._element &&
                (this.applyElementOffset(), this.events.fire("shapechange"));
          },
          applyElementOffset: function () {
            (this._element.style.left = -this._element.offsetWidth / 2 + "px"),
              (this._element.style.top = -this._element.offsetHeight + "px");
          },
          onCloseClick: function (e) {
            e.preventDefault(), this.events.fire("userclose");
          },
          getShape: function () {
            return this._element
              ? new ymaps.shape.Rectangle(
                  new ymaps.geometry.pixel.Rectangle([
                    [this._element.offsetLeft, this._element.offsetTop],
                    [
                      this._element.offsetLeft + this._element.offsetWidth,
                      this._element.offsetTop + this._element.offsetHeight,
                    ],
                  ])
                )
              : r.superclass.getShape.call(this);
          },
        }
      )),
      (t = dealers),
      (c = -1),
      o.geoObjects.remove(i),
      i.removeAll(),
      (s = 1 == dealers.length),
      t.forEach(function (e, t) {
        var o = e.content,
          e = new ymaps.Placemark(
            e.coord,
            { hintContent: e.name, balloonContentBody: e.name },
            {
              iconLayout: n,
              iconShape: {
                type: "Rectangle",
                coordinates: [
                  [-23, -57],
                  [22, 3],
                ],
              },
              balloonLayout: s ? null : r,
              balloonContentLayout: s
                ? null
                : ymaps.templateLayoutFactory.createClass(o),
              hideIconOnBalloonOpen: !1,
              balloonOffset: [0, -74],
            }
          );
        i.add(e),
          s ||
            e.events
              .add("mouseenter", function (e) {
                e.get("target").options.set({ iconLayout: l });
              })
              .add("mouseleave", function (e) {
                t != c && e.get("target").options.set({ iconLayout: n });
              })
              .add("click", function (e) {
                e.get("target").options.set({ iconLayout: l }), u(t);
              });
      }),
      o.geoObjects.add(i),
      o.setBounds(i.getBounds(), {
        useMapMargin: !0,
        callback: function (e) {
          1 == i.getLength() && o.setZoom(a);
        },
      }),
      t.length < 2 &&
        (o.setZoom(a), u(0), s || i.getGeoObjects()[0].balloon.open());
  }
  function u(e) {
    if (((c = e), i)) {
      for (var t = i.getGeoObjects(), o = 0; o < t.length; o++)
        t[o].options.set({ iconLayout: n });
      t[c].options.set({ iconLayout: l });
    }
  }
  var e,
    t = window.matchMedia("(min-width: 768px)"),
    E = document.querySelector(".js-dc-slider");
  function s() {
    t.matches
      ? void 0 !== e && e.destroy(!0, !0)
      : (e = new Swiper(E, {
          slidesPerView: "auto",
          slidesPerGroup: 1,
          loop: !1,
          spaceBetween: 0,
          pagination: {
            el: ".swiper-pagination",
            type: "bullets",
            clickable: !0,
          },
        }));
  }
  t.addListener ? t.addListener(s) : t.addEventListener("change", s), s();
}
svg4everybody(),
  document.addEventListener("DOMContentLoaded", function (e) {
    initObjectFitFallback(),
      initLazyload(".lazyload"),
      initScroll(),
      initPopups(),
      initHeroVideo(),
      initHeader(),
      initSlider(),
      initMediaText(),
      initModelColors(),
      initGrades(),
      initGallery(),
      initModelRange(),
      initCookiePopup(),
      initSelectOffices(),
      initDealers();
  });

