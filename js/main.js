/**
 * Portfolio Mariaceleste Picanza — Main JS
 * Reads all content from js/content.js (CONTENT global object).
 *
 * Features:
 *  - Language toggle IT/EN: text nodes via data-key, blocks rendered dynamically
 *  - Render functions for About facts, Skills, Education, Portfolio, Certs/Awards
 *  - Mobile hamburger menu
 *  - Active nav highlight on scroll
 *  - Scroll-to-top button
 *  - Fade-up animation (IntersectionObserver)
 *  - Smooth scroll on anchor clicks
 */

document.addEventListener('DOMContentLoaded', () => {

  /* ─────────────────────────────────────────
     Helpers
  ───────────────────────────────────────── */

  /**
   * Resolve a dot-notation path against the CONTENT object.
   * The leaf can be a plain string (returned as-is) or a {it, en} object.
   */
  function t(path, lang) {
    const node = path.split('.').reduce((obj, k) => obj?.[k], CONTENT);
    if (node == null) return '';
    if (typeof node === 'string') return node;
    return node[lang] ?? node.it ?? '';
  }

  /**
   * Resolve a value that is either a plain string or a {it, en} object.
   * Used for properties on data items (cards, facts, etc.).
   */
  function v(strOrObj, lang) {
    if (strOrObj == null) return '';
    if (typeof strOrObj === 'string') return strOrObj;
    return strOrObj[lang] ?? strOrObj.it ?? '';
  }

  /** Escape HTML special characters (for dynamically built templates). */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }


  /* ─────────────────────────────────────────
     Update data-key text nodes
  ───────────────────────────────────────── */

  function updateTextNodes(lang) {
    document.querySelectorAll('[data-key]').forEach(el => {
      const text = t(el.dataset.key, lang);
      // data-html attribute → safe innerHTML (content is developer-controlled)
      if (el.hasAttribute('data-html')) {
        el.innerHTML = text;
      } else {
        el.textContent = text;
      }
    });
  }


  /* ─────────────────────────────────────────
     Render: About Facts
  ───────────────────────────────────────── */

  function renderAboutFacts(lang) {
    const container = document.getElementById('about-facts');
    if (!container) return;
    container.innerHTML = CONTENT.about.facts.map(fact => `
      <div class="about__fact">
        <div class="about__fact-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"
               stroke-linecap="round" stroke-linejoin="round">${fact.icon}</svg>
        </div>
        <div>
          <div class="about__fact-label">${esc(v(fact.label, lang))}</div>
          <div class="about__fact-value">${esc(v(fact.value, lang))}</div>
        </div>
      </div>
    `).join('');
  }


  /* ─────────────────────────────────────────
     Render: Skills
  ───────────────────────────────────────── */

  function renderSkills(lang) {
    const grid = document.getElementById('skills-grid');
    if (grid) {
      grid.innerHTML = CONTENT.skills.cards.map(card => `
        <article class="skill-card fade-up">
          <div class="skill-card__area">${esc(v(card.area, lang))}</div>
          <h3 class="skill-card__name">${esc(v(card.name, lang))}</h3>
          <p class="skill-card__desc">${esc(v(card.desc, lang))}</p>
        </article>
      `).join('');
    }

    const softContainer = document.getElementById('soft-skills');
    if (softContainer) {
      softContainer.innerHTML = CONTENT.skills.softSkills.map(skill => `
        <span class="soft-tag">${esc(v(skill, lang))}</span>
      `).join('');
    }
  }


  /* ─────────────────────────────────────────
     Render: Education Timeline
  ───────────────────────────────────────── */

  function renderEducation(lang) {
    const container = document.getElementById('education-timeline');
    if (!container) return;
    container.innerHTML = CONTENT.education.items.map(item => {
      const badge = item.badge
        ? `<span class="badge">${esc(v(item.badge, lang))}</span> `
        : '';
      return `
        <article class="edu-item">
          <div class="edu-item__period">${esc(v(item.period, lang))}</div>
          <h3 class="edu-item__title">${esc(v(item.title, lang))}</h3>
          <div class="edu-item__institution">${esc(v(item.institution, lang))}</div>
          <p class="edu-item__details">${badge}${esc(v(item.details, lang))}</p>
        </article>
      `;
    }).join('');
  }


  /* ─────────────────────────────────────────
     Render: Portfolio Cards + Certs & Awards
  ───────────────────────────────────────── */

  function renderPortfolio(lang) {
    const grid = document.getElementById('portfolio-grid');
    if (grid) {
      grid.innerHTML = CONTENT.portfolio.cards.map(card => `
        <article class="portfolio-card fade-up">
          <div class="portfolio-card__type">${esc(v(card.type, lang))}</div>
          <h3 class="portfolio-card__title">${esc(v(card.title, lang))}</h3>
          <div class="portfolio-card__meta">${esc(v(card.meta, lang))}</div>
          <p class="portfolio-card__desc">${esc(v(card.desc, lang))}</p>
        </article>
      `).join('');
    }

    const certsAwards = document.getElementById('certs-awards');
    if (!certsAwards) return;

    const certsHtml = `
      <div>
        <h3 class="certs-awards__col-title">${t('portfolio.certsTitle', lang)}</h3>
        <ul class="cert-list" role="list">
          ${CONTENT.portfolio.certs.map(cert => `
            <li class="cert-item">
              <div class="cert-item__dot" aria-hidden="true"></div>
              <div>
                <div class="cert-item__name">${esc(v(cert.name, lang))}</div>
                <div class="cert-item__issuer">${esc(v(cert.issuer, lang))}</div>
              </div>
            </li>
          `).join('')}
        </ul>
      </div>`;

    const awardsHtml = `
      <div>
        <h3 class="certs-awards__col-title">${t('portfolio.awardsTitle', lang)}</h3>
        ${CONTENT.portfolio.awards.map(award => `
          <div class="award-card" style="margin-bottom:1rem;">
            <div class="award-card__icon" aria-hidden="true">${award.icon}</div>
            <div class="award-card__title">${esc(v(award.title, lang))}</div>
            <div class="award-card__issuer">${esc(v(award.issuer, lang))}</div>
            <p class="award-card__desc">${esc(v(award.desc, lang))}</p>
          </div>
        `).join('')}
      </div>`;

    certsAwards.innerHTML = certsHtml + awardsHtml;
  }


  /* ─────────────────────────────────────────
     Language Toggle
  ───────────────────────────────────────── */

  const LANG_KEY = 'mp_lang';
  let currentLang = localStorage.getItem(LANG_KEY) || 'it';

  function setLanguage(lang) {
    currentLang = lang;
    localStorage.setItem(LANG_KEY, lang);

    // 1. Update all data-key text nodes
    updateTextNodes(lang);

    // 2. Re-render dynamic sections
    renderAboutFacts(lang);
    renderSkills(lang);
    renderEducation(lang);
    renderPortfolio(lang);

    // 3. Update ARIA labels on the LinkedIn elements
    const linkedinLink = document.getElementById('linkedin-link');
    if (linkedinLink) linkedinLink.setAttribute('aria-label', v(CONTENT.contacts.linkedinAria, lang));

    const linkedinCta = document.getElementById('linkedin-cta');
    if (linkedinCta) linkedinCta.setAttribute('aria-label', v(CONTENT.contacts.ctaAria, lang));

    // 4. Update page <title> and meta description
    document.title = v(CONTENT.meta.pageTitle, lang);
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute('content', v(CONTENT.meta.description, lang));

    // 5. Update <html lang>
    document.documentElement.lang = lang;

    // 6. Sync all lang-btn elements across desktop and mobile menus
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // 7. Re-observe any newly rendered .fade-up elements
    if (fadeObserver) {
      document.querySelectorAll('.fade-up:not(.visible)').forEach(el => fadeObserver.observe(el));
    }
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
  });


  /* ─────────────────────────────────────────
     Mobile Hamburger Menu
  ───────────────────────────────────────── */

  const hamburger = document.querySelector('.navbar__hamburger');
  const mobileMenu = document.querySelector('.navbar__mobile-menu');

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
      const isOpen = hamburger.classList.toggle('open');
      mobileMenu.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', String(isOpen));
    });

    mobileMenu.querySelectorAll('.navbar__link').forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
      });
    });
  }


  /* ─────────────────────────────────────────
     Active Nav Link on Scroll
  ───────────────────────────────────────── */

  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.navbar__link[href^="#"]');

  function updateActiveLink() {
    const scrollY  = window.scrollY;
    const offset   = 90;
    let   current  = '';

    sections.forEach(section => {
      if (scrollY >= section.offsetTop - offset &&
          scrollY  < section.offsetTop - offset + section.offsetHeight) {
        current = section.id;
      }
    });

    navLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href').replace('#', '') === current);
    });
  }

  window.addEventListener('scroll', updateActiveLink, { passive: true });


  /* ─────────────────────────────────────────
     Scroll-to-Top Button
  ───────────────────────────────────────── */

  const scrollTopBtn = document.querySelector('.scroll-top');
  if (scrollTopBtn) {
    window.addEventListener('scroll', () => {
      scrollTopBtn.classList.toggle('visible', window.scrollY > 400);
    }, { passive: true });

    scrollTopBtn.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));
  }


  /* ─────────────────────────────────────────
     Smooth Scroll on Anchor Clicks
  ───────────────────────────────────────── */

  document.addEventListener('click', e => {
    const anchor = e.target.closest('a[href^="#"]');
    if (!anchor) return;
    const target = document.querySelector(anchor.getAttribute('href'));
    if (!target) return;
    e.preventDefault();
    const navH = document.querySelector('.navbar').offsetHeight;
    window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - navH - 8, behavior: 'smooth' });
  });


  /* ─────────────────────────────────────────
     Fade-up Animation (IntersectionObserver)
     NOTE: setLanguage is called first so all dynamic content is
     in the DOM before the observer is attached.
  ───────────────────────────────────────── */

  let fadeObserver = null;

  // Initialize: populate all content for the stored/default language
  setLanguage(currentLang);

  // Then attach observer (includes dynamically rendered .fade-up elements)
  if ('IntersectionObserver' in window) {
    fadeObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          fadeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.fade-up').forEach(el => fadeObserver.observe(el));
  } else {
    document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
  }


  /* ─────────────────────────────────────────
     Footer: current year
  ───────────────────────────────────────── */

  const yearEl = document.getElementById('current-year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  updateActiveLink();

});
