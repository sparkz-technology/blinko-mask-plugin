var P = Object.defineProperty;
var B = (l, a, c) => a in l ? P(l, a, { enumerable: !0, configurable: !0, writable: !0, value: c }) : l[a] = c;
var m = (l, a, c) => (B(l, typeof a != "symbol" ? a + "" : a, c), c);
(function() {
  const v = {
    name: "blinko-mask-plugin",
    author: "sparkz-technology",
    url: "https://github.com/sparkz-technology/blinko-mask-plugin",
    version: "1.0.0",
    minAppVersion: "0.0.0",
    displayName: {
      default: "Mask Plugin",
      zh: "遮罩插件"
    },
    description: {
      default: "Hide sensitive content with ||||password|||| syntax. Click the eye icon to reveal hidden text.",
      zh: "使用 ||||password|||| 语法隐藏敏感内容。点击眼睛图标显示隐藏的文字。"
    },
    readme: {
      default: "README.md",
      zh: "README_zh.md"
    }
  }, C = {
    title: "Mask Plugin",
    insertMask: "Insert Mask",
    maskTooltip: "Hide sensitive content",
    showContent: "Show content",
    hideContent: "Hide content",
    maskPlaceholder: "hidden text"
  }, E = {
    title: "遮罩插件",
    insertMask: "插入遮罩",
    maskTooltip: "隐藏敏感内容",
    showContent: "显示内容",
    hideContent: "隐藏内容",
    maskPlaceholder: "隐藏的文字"
  }, N = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', p = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>', T = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>', M = `
  .blinko-mask-container {
    display: inline-flex;
    align-items: center;
    gap: 4px;
    padding: 2px 6px;
    border-radius: 4px;
    background-color: var(--primary, #6366f1);
    color: var(--primary-foreground, white);
    font-family: inherit;
    cursor: pointer;
    transition: background-color 0.2s ease;
  }
  .blinko-mask-container:hover {
    opacity: 0.9;
  }
  .blinko-mask-content {
    font-family: inherit;
  }
  .blinko-mask-content.hidden {
    filter: blur(5px);
    user-select: none;
    transition: filter 0.2s ease;
  }
  .blinko-mask-content.visible {
    filter: none;
    transition: filter 0.2s ease;
  }
  .blinko-mask-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: none;
    border: none;
    color: inherit;
    cursor: pointer;
    padding: 2px;
    border-radius: 2px;
    opacity: 0.8;
  }
  .blinko-mask-toggle:hover {
    opacity: 1;
  }
`;
  function A(t) {
    const n = document.createElement("div");
    return n.textContent = t, n.innerHTML;
  }
  function S(t) {
    var i, r;
    const n = document.createElement("span");
    n.className = "blinko-mask-container", n.setAttribute("data-mask-plugin", "true");
    const s = A(t);
    n.innerHTML = `
    <span class="blinko-mask-content hidden">${s}</span>
    <button class="blinko-mask-toggle" title="${((r = (i = window.Blinko) == null ? void 0 : i.i18n) == null ? void 0 : r.t("showContent")) || "Show content"}">
      ${p}
    </button>
  `;
    const o = n.querySelector(".blinko-mask-content"), e = n.querySelector(".blinko-mask-toggle");
    return e.addEventListener("click", (d) => {
      var f, y, b, x;
      d.stopPropagation(), o.classList.contains("hidden") ? (o.classList.remove("hidden"), o.classList.add("visible"), e.innerHTML = N, e.title = ((y = (f = window.Blinko) == null ? void 0 : f.i18n) == null ? void 0 : y.t("hideContent")) || "Hide content") : (o.classList.add("hidden"), o.classList.remove("visible"), e.innerHTML = p, e.title = ((x = (b = window.Blinko) == null ? void 0 : b.i18n) == null ? void 0 : x.t("showContent")) || "Show content");
    }), n;
  }
  const $ = "\\|\\|\\|\\|(.+?)\\|\\|\\|\\|";
  function u(t = !1) {
    return new RegExp($, t ? "g" : "");
  }
  function h(t) {
    return u().test(t);
  }
  function k(t) {
    const n = t.textContent || "";
    if (!h(n))
      return;
    const s = u(!0), o = Array.from(n.matchAll(s));
    if (o.length === 0)
      return;
    const e = document.createDocumentFragment();
    let i = 0;
    for (const r of o) {
      const d = r.index ?? 0;
      d > i && e.appendChild(document.createTextNode(n.slice(i, d)));
      const w = r[1];
      e.appendChild(S(w)), i = d + r[0].length;
    }
    i < n.length && e.appendChild(document.createTextNode(n.slice(i))), e.childNodes.length > 0 && t.parentNode && t.parentNode.replaceChild(e, t);
  }
  function g(t) {
    if (t.getAttribute("data-mask-processed") === "true" || t.getAttribute("data-mask-plugin") === "true")
      return;
    const n = t.tagName.toLowerCase();
    if (n === "code" || n === "pre" || n === "textarea" || n === "input")
      return;
    const s = [], o = document.createTreeWalker(t, NodeFilter.SHOW_TEXT, null);
    let e;
    for (; e = o.nextNode(); ) {
      let i = e.parentElement, r = !1;
      for (; i && i !== t; ) {
        if (i.getAttribute("data-mask-plugin") === "true" || i.tagName.toLowerCase() === "code" || i.tagName.toLowerCase() === "pre") {
          r = !0;
          break;
        }
        i = i.parentElement;
      }
      !r && e.textContent && h(e.textContent) && s.push(e);
    }
    s.forEach(k), t.setAttribute("data-mask-processed", "true");
  }
  System.register([], (t) => ({
    execute: () => {
      t("default", class {
        constructor() {
          m(this, "observer", null);
          m(this, "styleElement", null);
          Object.assign(this, v);
        }
        /**
         * Initializes the plugin
         * Sets up MutationObserver for content transformation and toolbar icon
         */
        async init() {
          this.initI18n(), this.injectStyles(), this.setupObserver(), this.processExistingContent(), this.addToolbarIcon();
        }
        /**
         * Injects CSS styles for masked content
         */
        injectStyles() {
          this.styleElement = document.createElement("style"), this.styleElement.id = "blinko-mask-plugin-styles", this.styleElement.textContent = M, document.head.appendChild(this.styleElement);
        }
        /**
         * Sets up MutationObserver to watch for DOM changes
         */
        setupObserver() {
          this.observer = new MutationObserver((s) => {
            s.forEach((o) => {
              o.addedNodes.forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE)
                  g(e);
                else if (e.nodeType === Node.TEXT_NODE && e.parentElement) {
                  const i = e.textContent || "";
                  h(i) && k(e);
                }
              });
            });
          }), this.observer.observe(document.body, {
            childList: !0,
            subtree: !0
          });
        }
        /**
         * Process content that already exists on the page
         */
        processExistingContent() {
          [
            ".markdown-body",
            ".note-content",
            ".blinko-content",
            "[data-content]",
            "article",
            "main"
          ].forEach((o) => {
            document.querySelectorAll(o).forEach((e) => {
              g(e);
            });
          });
        }
        /**
         * Adds toolbar icon to insert mask syntax
         */
        addToolbarIcon() {
          const s = window.Blinko.i18n;
          window.Blinko.addToolBarIcon({
            name: "mask",
            icon: T,
            placement: "top",
            tooltip: s.t("maskTooltip"),
            onClick: () => {
              const o = window.Blinko.getActiveEditorStore();
              if (o) {
                const e = s.t("maskPlaceholder");
                o.insertMarkdown(`||||${e}||||`);
              }
            }
          });
        }
        /**
         * Initializes internationalization resources
         * Adds English and Chinese translation bundles
         */
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", C), window.Blinko.i18n.addResourceBundle("zh", "translation", E);
        }
        /**
         * Cleanup function called when plugin is disabled
         */
        destroy() {
          this.observer && (this.observer.disconnect(), this.observer = null), this.styleElement && this.styleElement.parentNode && (this.styleElement.parentNode.removeChild(this.styleElement), this.styleElement = null), document.querySelectorAll('[data-mask-plugin="true"]').forEach((s) => {
            const o = s.querySelector(".blinko-mask-content");
            if (o && s.parentNode) {
              const e = o.textContent || "";
              s.parentNode.replaceChild(
                document.createTextNode(`||||${e}||||`),
                s
              );
            }
          }), document.querySelectorAll('[data-mask-processed="true"]').forEach((s) => {
            s.removeAttribute("data-mask-processed");
          }), console.log("Mask Plugin destroyed");
        }
      });
    }
  }));
})();
