var A = Object.defineProperty;
var S = (a, r, l) => r in a ? A(a, r, { enumerable: !0, configurable: !0, writable: !0, value: l }) : a[r] = l;
var h = (a, r, l) => (S(a, typeof r != "symbol" ? r + "" : r, l), l);
(function() {
  const y = {
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
  }, f = {
    title: "Mask Plugin",
    insertMask: "Insert Mask",
    maskTooltip: "Hide sensitive content",
    showContent: "Show content",
    hideContent: "Hide content",
    maskPlaceholder: "hidden text"
  }, x = {
    title: "遮罩插件",
    insertMask: "插入遮罩",
    maskTooltip: "隐藏敏感内容",
    showContent: "显示内容",
    hideContent: "隐藏内容",
    maskPlaceholder: "隐藏的文字"
  }, v = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>', m = '<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>', C = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>', E = `
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
  function N(s) {
    const o = document.createElement("div");
    return o.textContent = s, o.innerHTML;
  }
  function T(s) {
    var i, d;
    const o = document.createElement("span");
    o.className = "blinko-mask-container", o.setAttribute("data-mask-plugin", "true");
    const t = N(s);
    o.innerHTML = `
    <span class="blinko-mask-content hidden">${t}</span>
    <button class="blinko-mask-toggle" title="${((d = (i = window.Blinko) == null ? void 0 : i.i18n) == null ? void 0 : d.t("showContent")) || "Show content"}">
      ${m}
    </button>
  `;
    const n = o.querySelector(".blinko-mask-content"), e = o.querySelector(".blinko-mask-toggle");
    return e.addEventListener("click", (M) => {
      var k, g, w, b;
      M.stopPropagation(), n.classList.contains("hidden") ? (n.classList.remove("hidden"), n.classList.add("visible"), e.innerHTML = v, e.title = ((g = (k = window.Blinko) == null ? void 0 : k.i18n) == null ? void 0 : g.t("hideContent")) || "Hide content") : (n.classList.add("hidden"), n.classList.remove("visible"), e.innerHTML = m, e.title = ((b = (w = window.Blinko) == null ? void 0 : w.i18n) == null ? void 0 : b.t("showContent")) || "Show content");
    }), o;
  }
  const c = /\|\|\|\|(.+?)\|\|\|\|/g;
  function p(s) {
    const o = s.textContent || "";
    if (!c.test(o))
      return;
    c.lastIndex = 0;
    const t = document.createDocumentFragment();
    let n = 0, e;
    for (; (e = c.exec(o)) !== null; ) {
      e.index > n && t.appendChild(document.createTextNode(o.slice(n, e.index)));
      const i = e[1];
      t.appendChild(T(i)), n = e.index + e[0].length;
    }
    n < o.length && t.appendChild(document.createTextNode(o.slice(n))), t.childNodes.length > 0 && s.parentNode && s.parentNode.replaceChild(t, s);
  }
  function u(s) {
    if (s.getAttribute("data-mask-processed") === "true" || s.getAttribute("data-mask-plugin") === "true")
      return;
    const o = s.tagName.toLowerCase();
    if (o === "code" || o === "pre" || o === "textarea" || o === "input")
      return;
    const t = [], n = document.createTreeWalker(s, NodeFilter.SHOW_TEXT, null);
    let e;
    for (; e = n.nextNode(); ) {
      let i = e.parentElement, d = !1;
      for (; i && i !== s; ) {
        if (i.getAttribute("data-mask-plugin") === "true" || i.tagName.toLowerCase() === "code" || i.tagName.toLowerCase() === "pre") {
          d = !0;
          break;
        }
        i = i.parentElement;
      }
      !d && e.textContent && c.test(e.textContent) && t.push(e);
    }
    t.forEach(p), s.setAttribute("data-mask-processed", "true");
  }
  System.register([], (s) => ({
    execute: () => {
      s("default", class {
        constructor() {
          h(this, "observer", null);
          h(this, "styleElement", null);
          Object.assign(this, y);
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
          this.styleElement = document.createElement("style"), this.styleElement.id = "blinko-mask-plugin-styles", this.styleElement.textContent = E, document.head.appendChild(this.styleElement);
        }
        /**
         * Sets up MutationObserver to watch for DOM changes
         */
        setupObserver() {
          this.observer = new MutationObserver((t) => {
            t.forEach((n) => {
              n.addedNodes.forEach((e) => {
                if (e.nodeType === Node.ELEMENT_NODE)
                  u(e);
                else if (e.nodeType === Node.TEXT_NODE && e.parentElement) {
                  const i = e.textContent || "";
                  c.test(i) && p(e);
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
          ].forEach((n) => {
            document.querySelectorAll(n).forEach((e) => {
              u(e);
            });
          });
        }
        /**
         * Adds toolbar icon to insert mask syntax
         */
        addToolbarIcon() {
          const t = window.Blinko.i18n;
          window.Blinko.addToolBarIcon({
            name: "mask",
            icon: C,
            placement: "top",
            tooltip: t.t("maskTooltip"),
            onClick: () => {
              const n = window.Blinko.getActiveEditorStore();
              if (n) {
                const e = t.t("maskPlaceholder");
                n.insertMarkdown(`||||${e}||||`);
              }
            }
          });
        }
        /**
         * Initializes internationalization resources
         * Adds English and Chinese translation bundles
         */
        initI18n() {
          window.Blinko.i18n.addResourceBundle("en", "translation", f), window.Blinko.i18n.addResourceBundle("zh", "translation", x);
        }
        /**
         * Cleanup function called when plugin is disabled
         */
        destroy() {
          this.observer && (this.observer.disconnect(), this.observer = null), this.styleElement && this.styleElement.parentNode && (this.styleElement.parentNode.removeChild(this.styleElement), this.styleElement = null), document.querySelectorAll('[data-mask-plugin="true"]').forEach((t) => {
            const n = t.querySelector(".blinko-mask-content");
            n && t.parentNode && t.parentNode.replaceChild(
              document.createTextNode(`||||${n.textContent}||||`),
              t
            );
          }), document.querySelectorAll('[data-mask-processed="true"]').forEach((t) => {
            t.removeAttribute("data-mask-processed");
          }), console.log("Mask Plugin destroyed");
        }
      });
    }
  }));
})();
