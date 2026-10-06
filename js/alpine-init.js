/**
 * Alpine.js Global Initialization
 * Sets up shared stores and global configuration
 */

document.addEventListener('alpine:init', () => {
  // Global navigation store
  Alpine.store('nav', {
    isMobileMenuOpen: false,
    isScrolled: false,

    toggleMobile() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen;
    },

    closeMobile() {
      this.isMobileMenuOpen = false;
    },

    init() {
      window.addEventListener('scroll', () => {
        this.isScrolled = window.scrollY > 80;
      });
    }
  });

  // Toast notification store
  Alpine.store('toast', {
    message: '',
    type: 'success', // success, error, info
    visible: false,
    timeout: null,

    show(message, type = 'success', duration = 3000) {
      this.message = message;
      this.type = type;
      this.visible = true;

      if (this.timeout) clearTimeout(this.timeout);
      this.timeout = setTimeout(() => {
        this.visible = false;
      }, duration);
    }
  });

  // Theme/settings store
  Alpine.store('settings', {
    volume: 0.8,
    voiceRate: 0.9,
    preferredVoice: null,

    init() {
      // Load settings from localStorage
      const saved = StorageManager.getSetting('appSettings');
      if (saved) {
        Object.assign(this, saved);
      }
    },

    save() {
      StorageManager.saveSetting('appSettings', {
        volume: this.volume,
        voiceRate: this.voiceRate,
        preferredVoice: this.preferredVoice
      });
    }
  });
});

/**
 * Alpine.js global directives and magic helpers
 */
document.addEventListener('alpine:init', () => {
  // x-intersect directive for scroll animations
  Alpine.directive('animate', (el, { value, expression }) => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

    observer.observe(el);
  });
});
