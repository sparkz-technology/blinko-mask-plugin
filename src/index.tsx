/** @jsxImportSource preact */
/// <reference types="systemjs" />

import type { BasePlugin } from 'blinko';
import plugin from '../plugin.json';
import en from './locales/en.json';
import zh from './locales/zh.json';

// Eye open SVG icon
const eyeOpenIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path><circle cx="12" cy="12" r="3"></circle></svg>`;

// Eye closed SVG icon
const eyeClosedIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

// Mask icon for toolbar
const maskIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"></path><line x1="1" y1="1" x2="23" y2="23"></line></svg>`;

// CSS styles for masked content
const maskStyles = `
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

/**
 * Escapes HTML entities to prevent XSS
 */
function escapeHtml(text: string): string {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

/**
 * Creates a masked element with toggle functionality
 */
function createMaskElement(content: string): HTMLElement {
  const container = document.createElement('span');
  container.className = 'blinko-mask-container';
  container.setAttribute('data-mask-plugin', 'true');
  
  const escapedContent = escapeHtml(content);
  
  container.innerHTML = `
    <span class="blinko-mask-content hidden">${escapedContent}</span>
    <button class="blinko-mask-toggle" title="${window.Blinko?.i18n?.t('showContent') || 'Show content'}">
      ${eyeClosedIcon}
    </button>
  `;
  
  const contentSpan = container.querySelector('.blinko-mask-content') as HTMLElement;
  const toggleBtn = container.querySelector('.blinko-mask-toggle') as HTMLButtonElement;
  
  toggleBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isHidden = contentSpan.classList.contains('hidden');
    
    if (isHidden) {
      contentSpan.classList.remove('hidden');
      contentSpan.classList.add('visible');
      toggleBtn.innerHTML = eyeOpenIcon;
      toggleBtn.title = window.Blinko?.i18n?.t('hideContent') || 'Hide content';
    } else {
      contentSpan.classList.add('hidden');
      contentSpan.classList.remove('visible');
      toggleBtn.innerHTML = eyeClosedIcon;
      toggleBtn.title = window.Blinko?.i18n?.t('showContent') || 'Show content';
    }
  });
  
  return container;
}

/**
 * Pattern string for matching ||||content|||| syntax
 */
const MASK_PATTERN_STRING = '\\|\\|\\|\\|(.+?)\\|\\|\\|\\|';

/**
 * Creates a new regex pattern for matching mask syntax
 */
function createMaskPattern(global = false): RegExp {
  return new RegExp(MASK_PATTERN_STRING, global ? 'g' : '');
}

/**
 * Tests if text contains mask pattern
 */
function hasMaskPattern(text: string): boolean {
  return createMaskPattern().test(text);
}

/**
 * Process a text node to replace mask patterns
 */
function processTextNode(node: Text): void {
  const text = node.textContent || '';
  if (!hasMaskPattern(text)) return;
  
  const pattern = createMaskPattern(true);
  const matches = Array.from(text.matchAll(pattern));
  
  if (matches.length === 0) return;
  
  const fragment = document.createDocumentFragment();
  let lastIndex = 0;
  
  for (const match of matches) {
    const matchIndex = match.index ?? 0;
    
    // Add text before the match
    if (matchIndex > lastIndex) {
      fragment.appendChild(document.createTextNode(text.slice(lastIndex, matchIndex)));
    }
    
    // Add the masked element
    const maskedContent = match[1];
    fragment.appendChild(createMaskElement(maskedContent));
    
    lastIndex = matchIndex + match[0].length;
  }
  
  // Add remaining text after last match
  if (lastIndex < text.length) {
    fragment.appendChild(document.createTextNode(text.slice(lastIndex)));
  }
  
  // Replace the original text node
  if (fragment.childNodes.length > 0 && node.parentNode) {
    node.parentNode.replaceChild(fragment, node);
  }
}

/**
 * Walk through DOM tree and process text nodes
 */
function walkAndProcess(element: Element): void {
  // Skip if already processed or is a mask container
  if (element.getAttribute('data-mask-processed') === 'true' ||
      element.getAttribute('data-mask-plugin') === 'true') {
    return;
  }
  
  // Skip code blocks and pre elements
  const tagName = element.tagName.toLowerCase();
  if (tagName === 'code' || tagName === 'pre' || tagName === 'textarea' || tagName === 'input') {
    return;
  }
  
  // Collect text nodes first to avoid live collection issues
  const textNodes: Text[] = [];
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT, null);
  
  let node;
  while ((node = walker.nextNode())) {
    // Skip nodes inside already processed containers
    let parent = node.parentElement;
    let skip = false;
    while (parent && parent !== element) {
      if (parent.getAttribute('data-mask-plugin') === 'true' ||
          parent.tagName.toLowerCase() === 'code' ||
          parent.tagName.toLowerCase() === 'pre') {
        skip = true;
        break;
      }
      parent = parent.parentElement;
    }
    if (!skip && node.textContent && hasMaskPattern(node.textContent)) {
      textNodes.push(node as Text);
    }
  }
  
  // Process collected text nodes
  textNodes.forEach(processTextNode);
  
  // Mark as processed
  element.setAttribute('data-mask-processed', 'true');
}

/**
 * Main plugin entry point registered with SystemJS
 * Exports the plugin class implementing BasePlugin interface
 */
System.register([], (exports) => ({
  execute: () => {
    exports('default', class Plugin implements BasePlugin {
      private observer: MutationObserver | null = null;
      private styleElement: HTMLStyleElement | null = null;
      
      constructor() {
        // Initialize plugin with metadata from plugin.json
        Object.assign(this, plugin);
      }

      /**
       * Initializes the plugin
       * Sets up MutationObserver for content transformation and toolbar icon
       */
      async init() {
        // Initialize internationalization
        this.initI18n();
        
        // Inject styles
        this.injectStyles();
        
        // Set up MutationObserver to watch for new content
        this.setupObserver();
        
        // Process existing content
        this.processExistingContent();
        
        // Add toolbar icon to insert mask syntax
        this.addToolbarIcon();
      }
      
      /**
       * Injects CSS styles for masked content
       */
      private injectStyles() {
        this.styleElement = document.createElement('style');
        this.styleElement.id = 'blinko-mask-plugin-styles';
        this.styleElement.textContent = maskStyles;
        document.head.appendChild(this.styleElement);
      }
      
      /**
       * Sets up MutationObserver to watch for DOM changes
       */
      private setupObserver() {
        this.observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            // Process added nodes
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                walkAndProcess(node as Element);
              } else if (node.nodeType === Node.TEXT_NODE && node.parentElement) {
                const text = node.textContent || '';
                if (hasMaskPattern(text)) {
                  processTextNode(node as Text);
                }
              }
            });
          });
        });
        
        // Observe the entire document body for changes
        this.observer.observe(document.body, {
          childList: true,
          subtree: true
        });
      }
      
      /**
       * Process content that already exists on the page
       */
      private processExistingContent() {
        // Process common content containers
        const selectors = [
          '.markdown-body',
          '.note-content',
          '.blinko-content',
          '[data-content]',
          'article',
          'main'
        ];
        
        selectors.forEach((selector) => {
          document.querySelectorAll(selector).forEach((element) => {
            walkAndProcess(element);
          });
        });
      }
      
      /**
       * Adds toolbar icon to insert mask syntax
       */
      private addToolbarIcon() {
        const i18n = window.Blinko.i18n;
        
        window.Blinko.addToolBarIcon({
          name: 'mask',
          icon: maskIcon,
          placement: 'top',
          tooltip: i18n.t('maskTooltip'),
          onClick: () => {
            const editorStore = window.Blinko.getActiveEditorStore();
            if (editorStore) {
              const placeholder = i18n.t('maskPlaceholder');
              editorStore.insertMarkdown(`||||${placeholder}||||`);
            }
          }
        });
      }

      /**
       * Initializes internationalization resources
       * Adds English and Chinese translation bundles
       */
      initI18n() {
        window.Blinko.i18n.addResourceBundle('en', 'translation', en);
        window.Blinko.i18n.addResourceBundle('zh', 'translation', zh);
      }

      /**
       * Cleanup function called when plugin is disabled
       */
      destroy() {
        // Disconnect the observer
        if (this.observer) {
          this.observer.disconnect();
          this.observer = null;
        }
        
        // Remove injected styles
        if (this.styleElement && this.styleElement.parentNode) {
          this.styleElement.parentNode.removeChild(this.styleElement);
          this.styleElement = null;
        }
        
        // Clean up mask containers from the DOM
        document.querySelectorAll('[data-mask-plugin="true"]').forEach((el) => {
          const content = el.querySelector('.blinko-mask-content');
          if (content && el.parentNode) {
            const textContent = content.textContent || '';
            el.parentNode.replaceChild(
              document.createTextNode(`||||${textContent}||||`),
              el
            );
          }
        });
        
        // Remove processed markers
        document.querySelectorAll('[data-mask-processed="true"]').forEach((el) => {
          el.removeAttribute('data-mask-processed');
        });
        
        console.log('Mask Plugin destroyed');
      }
    });
  }
}));