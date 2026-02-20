/* =============================================
   BESMARA — Main JavaScript
   Yoann · Consultant IA Maritime
   ============================================= */

(function () {
  'use strict';

  /* ---------- Console branding ---------- */
  console.log(
    '%c BESMARA %c Yoann · IA & Maritime ',
    'background:#C8A84E;color:#0A1628;font-weight:bold;padding:4px 8px;border-radius:4px 0 0 4px;',
    'background:#001F3F;color:#C8A84E;padding:4px 8px;border-radius:0 4px 4px 0;'
  );

  /* ---------- DOM refs ---------- */
  const $ = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => [...ctx.querySelectorAll(sel)];

  const html = document.documentElement;
  const header = $('.header');
  const scrollProgress = $('.scroll-progress');
  const backToTop = $('.back-to-top');
  const hamburger = $('.hamburger');
  const mobileNav = $('.mobile-nav');
  const themeToggle = $('.theme-toggle');
  const heroSubtitle = $('#typewriter');
  const modalOverlay = $('.modal-overlay');
  const cookieBanner = $('.cookie-banner');

  /* ---------- Dark mode ---------- */
  function initTheme() {
    const saved = localStorage.getItem('besmara-theme');
    if (saved) {
      html.setAttribute('data-theme', saved);
    } else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      html.setAttribute('data-theme', 'dark');
    }
    updateThemeIcon();
  }

  function toggleTheme() {
    const current = html.getAttribute('data-theme');
    const next = current === 'dark' ? 'light' : 'dark';
    html.setAttribute('data-theme', next);
    localStorage.setItem('besmara-theme', next);
    updateThemeIcon();
  }

  function updateThemeIcon() {
    if (!themeToggle) return;
    const isDark = html.getAttribute('data-theme') === 'dark';
    themeToggle.innerHTML = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    themeToggle.setAttribute('aria-label', isDark ? 'Passer en mode clair' : 'Passer en mode sombre');
  }

  if (themeToggle) themeToggle.addEventListener('click', toggleTheme);
  initTheme();

  /* ---------- Mobile menu ---------- */
  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('active');
      mobileNav.classList.toggle('active');
      const isOpen = mobileNav.classList.contains('active');
      hamburger.setAttribute('aria-expanded', isOpen);
      mobileNav.setAttribute('aria-hidden', !isOpen);
    });

    $$('a', mobileNav).forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        mobileNav.classList.remove('active');
        hamburger.setAttribute('aria-expanded', 'false');
        mobileNav.setAttribute('aria-hidden', 'true');
      });
    });
  }

  /* ---------- Smooth scroll ---------- */
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', e => {
      const target = $(link.getAttribute('href'));
      if (!target) return;
      e.preventDefault();
      const offset = 80;
      const top = target.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    });
  });

  /* ---------- Scroll events ---------- */
  let ticking = false;

  function onScroll() {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const scrollY = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;

      // Progress bar
      if (scrollProgress) {
        const pct = docHeight > 0 ? (scrollY / docHeight) * 100 : 0;
        scrollProgress.style.width = pct + '%';
      }

      // Header shadow
      if (header) {
        header.classList.toggle('scrolled', scrollY > 10);
      }

      // Back-to-top
      if (backToTop) {
        backToTop.classList.toggle('visible', scrollY > 500);
      }

      ticking = false;
    });
  }

  window.addEventListener('scroll', onScroll, { passive: true });

  if (backToTop) {
    backToTop.addEventListener('click', () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  /* ---------- Intersection Observer: fade-in ---------- */
  const fadeEls = $$('.fade-in-scroll');
  if (fadeEls.length && 'IntersectionObserver' in window) {
    const fadeObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            fadeObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
    );
    fadeEls.forEach(el => fadeObserver.observe(el));
  }

  /* ---------- Counter animation ---------- */
  function animateCounters() {
    $$('[data-count]').forEach(el => {
      if (el.dataset.counted) return;
      const target = parseInt(el.dataset.count, 10);
      const suffix = el.dataset.suffix || '';
      const duration = 2000;
      const start = performance.now();

      function step(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(target * eased) + suffix;
        if (progress < 1) requestAnimationFrame(step);
      }

      el.dataset.counted = 'true';
      requestAnimationFrame(step);
    });
  }

  const statsBar = $('.stats-bar');
  if (statsBar && 'IntersectionObserver' in window) {
    const counterObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            animateCounters();
            counterObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    counterObserver.observe(statsBar);
  }

  /* ---------- FAQ accordion ---------- */
  $$('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const item = btn.closest('.faq-item');
      const isActive = item.classList.contains('active');

      // Close all
      $$('.faq-item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
      });

      // Toggle clicked
      if (!isActive) {
        item.classList.add('active');
        btn.setAttribute('aria-expanded', 'true');
      }
    });
  });

  /* ---------- Contact modal ---------- */
  function openModal() {
    if (modalOverlay) {
      modalOverlay.classList.add('active');
      document.body.style.overflow = 'hidden';
      const firstInput = $('input, select, textarea', modalOverlay);
      if (firstInput) setTimeout(() => firstInput.focus(), 300);
    }
  }

  function closeModal() {
    if (modalOverlay) {
      modalOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  $$('[data-modal="open"]').forEach(btn => btn.addEventListener('click', openModal));

  if (modalOverlay) {
    $('.modal-close', modalOverlay)?.addEventListener('click', closeModal);
    modalOverlay.addEventListener('click', e => {
      if (e.target === modalOverlay) closeModal();
    });
  }

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });

  /* ---------- Form validation ---------- */
  function validateField(input) {
    const group = input.closest('.form-group');
    if (!group) return true;

    let valid = true;
    const val = input.value.trim();
    const type = input.type;
    const name = input.name;

    if (input.required && !val) {
      valid = false;
    } else if (type === 'email' && val) {
      valid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
    } else if (name === 'phone' && val) {
      valid = /^(?:(?:\+|00)33|0)\s*[1-9](?:[\s.-]*\d{2}){4}$/.test(val);
    } else if (input.minLength > 0 && val.length < input.minLength) {
      valid = false;
    }

    group.classList.toggle('has-error', !valid);
    return valid;
  }

  $$('.contact-form input, .contact-form select, .contact-form textarea, .modal-form input, .modal-form select, .modal-form textarea').forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      const group = input.closest('.form-group');
      if (group && group.classList.contains('has-error')) validateField(input);
    });
  });

  $$('form').forEach(form => {
    form.addEventListener('submit', e => {
      e.preventDefault();
      const inputs = $$('input, select, textarea', form);
      let allValid = true;

      inputs.forEach(input => {
        if (!validateField(input)) allValid = false;
      });

      // Check RGPD checkbox
      const rgpd = $('input[name="rgpd"]', form);
      if (rgpd && !rgpd.checked) {
        allValid = false;
        const group = rgpd.closest('.form-group');
        if (group) group.classList.add('has-error');
      }

      if (!allValid) return;

      // Formspree AJAX submit
      const btn = $('button[type="submit"]', form);
      if (btn) {
        const original = btn.textContent;
        btn.textContent = 'Envoi en cours...';
        btn.disabled = true;

        const formData = new FormData(form);
        const action = form.getAttribute('action') || 'https://formspree.io/f/VOTRE_ID_FORMSPREE';

        fetch(action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(response => {
          btn.textContent = original;
          btn.disabled = false;
          form.reset();
          
          if (response.ok) {
            // Show success
            const success = form.nextElementSibling;
            if (success && success.classList.contains('form-success')) {
              form.style.display = 'none';
              success.classList.add('active');
              setTimeout(() => {
                form.style.display = '';
                success.classList.remove('active');
                closeModal();
              }, 3000);
            } else {
              closeModal();
            }
          } else {
            alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.");
          }
        }).catch(error => {
          btn.textContent = original;
          btn.disabled = false;
          alert("Une erreur de réseau est survenue. Veuillez vérifier votre connexion.");
        });
      }
    });
  });

  /* ---------- Cookie consent ---------- */
  if (cookieBanner && !localStorage.getItem('besmara-cookies')) {
    setTimeout(() => cookieBanner.classList.add('active'), 2000);
  }

  $$('[data-cookie]').forEach(btn => {
    btn.addEventListener('click', () => {
      const val = btn.dataset.cookie;
      localStorage.setItem('besmara-cookies', val);
      cookieBanner.classList.remove('active');
    });
  });

  /* ---------- Typewriter effect (desktop only) ---------- */
  if (heroSubtitle && window.innerWidth > 768) {
    const phrases = [
      'Automation & workflows IA',
      'Maintenance predictive marine',
      'Sites web & visibilite digitale',
      'Tracabilite & conformite RGPD'
    ];
    let phraseIdx = 0;
    let charIdx = 0;
    let deleting = false;
    const baseText = heroSubtitle.textContent;

    heroSubtitle.textContent = '';

    function type() {
      const phrase = phrases[phraseIdx];
      if (!deleting) {
        heroSubtitle.textContent = phrase.substring(0, charIdx + 1);
        charIdx++;
        if (charIdx === phrase.length) {
          setTimeout(() => { deleting = true; type(); }, 2000);
          return;
        }
        setTimeout(type, 60);
      } else {
        heroSubtitle.textContent = phrase.substring(0, charIdx - 1);
        charIdx--;
        if (charIdx === 0) {
          deleting = false;
          phraseIdx = (phraseIdx + 1) % phrases.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 30);
      }
    }

    setTimeout(type, 800);
  }

  /* ---------- Performance monitoring ---------- */
  if ('PerformanceObserver' in window) {
    try {
      // LCP
      const lcpObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        const last = entries[entries.length - 1];
        console.log('[BESMARA] LCP:', Math.round(last.startTime), 'ms');
      });
      lcpObserver.observe({ type: 'largest-contentful-paint', buffered: true });

      // FID
      const fidObserver = new PerformanceObserver(list => {
        const entries = list.getEntries();
        entries.forEach(entry => {
          console.log('[BESMARA] FID:', Math.round(entry.processingStart - entry.startTime), 'ms');
        });
      });
      fidObserver.observe({ type: 'first-input', buffered: true });
    } catch (e) {
      // Observer types not supported
    }
  }

  /* ---------- Accessibility: skip link ---------- */
  const skipLink = $('.skip-link');
  if (skipLink) {
    skipLink.addEventListener('click', e => {
      e.preventDefault();
      const target = $(skipLink.getAttribute('href'));
      if (target) {
        target.setAttribute('tabindex', '-1');
        target.focus();
      }
    });
  }

})();
