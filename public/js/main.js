/* ═══════════════════════════════════════════════════════
   JOSÉ S. TAURA · main.js  2026
   ═══════════════════════════════════════════════════════ */
(function () {
  'use strict';

  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => [...ctx.querySelectorAll(s)];

  /* ── Smooth scroll ─────────────────────────────────── */
  $$('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      const id = a.getAttribute('href').slice(1);
      const target = document.getElementById(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      closeMobileMenu();
    });
  });

  /* ── Nav ───────────────────────────────────────────── */
  const nav    = $('#nav');
  const burger = $('#burger');
  const mobileMenu = $('#mobileMenu');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  function closeMobileMenu() {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
    document.body.style.overflow = '';
  }
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    mobileMenu.classList.toggle('open', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  $$('.mobile-link, .mobile-cta').forEach(el => el.addEventListener('click', closeMobileMenu));

  /* ══════════════════════════════════════════════════════
     BACKGROUND PATHS — Animated SVG flowing lines
  ══════════════════════════════════════════════════════ */
  function initBackgroundPaths() {
    const container = document.getElementById('backgroundPaths');
    if (!container) return;

    const NS = 'http://www.w3.org/2000/svg';

    function genPath(index, position, type) {
      const baseAmp  = type === 'primary' ? 150 : type === 'secondary' ? 100 : 60;
      const phase    = index * 0.2;
      const segments = type === 'primary' ? 10 : type === 'secondary' ? 8 : 6;
      const pts = [];
      for (let i = 0; i <= segments; i++) {
        const p  = i / segments;
        const e  = 1 - Math.pow(1 - p, 2);
        const bx = (2400 + (-4800) * e) * position;
        const by = 800 + (-1600 + index * 25) * e;
        const af = 1 - e * 0.3;
        pts.push({
          x: bx,
          y: by
            + Math.sin(p * Math.PI * 3 + phase) * baseAmp * 0.7 * af
            + Math.cos(p * Math.PI * 4 + phase) * baseAmp * 0.3 * af
            + Math.sin(p * Math.PI * 2 + phase) * baseAmp * 0.2 * af
        });
      }
      return pts.map((pt, i) => {
        if (i === 0) return `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
        const pr = pts[i - 1], t = 0.4;
        return `C ${(pr.x + (pt.x - pr.x) * t).toFixed(1)} ${pr.y.toFixed(1)},`
             + ` ${(pr.x + (pt.x - pr.x) * (1-t)).toFixed(1)} ${pt.y.toFixed(1)},`
             + ` ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
      }).join(' ');
    }

    const svg = document.createElementNS(NS, 'svg');
    svg.setAttribute('viewBox', '-2400 -800 4800 1600');
    svg.setAttribute('preserveAspectRatio', 'xMidYMid slice');
    svg.setAttribute('aria-hidden', 'true');

    const defs = document.createElementNS(NS, 'defs');
    const grad = document.createElementNS(NS, 'linearGradient');
    grad.id = 'pathGoldGrad';
    grad.setAttribute('x1','0%'); grad.setAttribute('y1','0%');
    grad.setAttribute('x2','100%'); grad.setAttribute('y2','0%');
    [
      ['0%',   'rgba(201,168,76,0.25)'],
      ['40%',  'rgba(232,201,107,0.55)'],
      ['70%',  'rgba(245,217,144,0.45)'],
      ['100%', 'rgba(201,168,76,0.15)'],
    ].forEach(([offset, color]) => {
      const s = document.createElementNS(NS, 'stop');
      s.setAttribute('offset', offset);
      s.setAttribute('stop-color', color);
      grad.appendChild(s);
    });
    defs.appendChild(grad);
    svg.appendChild(defs);

    const groups = [
      { type:'primary',   count:12, opBase:0.10, opStep:0.018, wBase:3.5, wStep:0.28, durBase:7,  durVar:2   },
      { type:'secondary', count:15, opBase:0.07, opStep:0.012, wBase:2.5, wStep:0.20, durBase:5.5,durVar:1.5 },
      { type:'accent',    count:10, opBase:0.04, opStep:0.008, wBase:1.5, wStep:0.15, durBase:4,  durVar:1   },
    ];

    const amps = { primary: 45, secondary: 28, accent: 15 };

    groups.forEach(cfg => {
      const g = document.createElementNS(NS, 'g');
      for (let i = 0; i < cfg.count; i++) {
        const path = document.createElementNS(NS, 'path');
        path.setAttribute('d', genPath(i, 1, cfg.type));
        path.setAttribute('stroke', 'url(#pathGoldGrad)');
        path.setAttribute('stroke-width', (cfg.wBase + i * cfg.wStep).toFixed(2));
        path.setAttribute('stroke-linecap', 'round');
        path.setAttribute('fill', 'none');
        path.setAttribute('opacity', (cfg.opBase + i * cfg.opStep).toFixed(3));

        const dur    = (cfg.durBase + (i % 4) * cfg.durVar * 0.6).toFixed(1);
        const amp    = amps[cfg.type];
        const begin  = (-Math.random() * parseFloat(dur)).toFixed(2) + 's';
        const hDrift = cfg.type === 'primary' ? 12 : cfg.type === 'secondary' ? 7 : 4;
        const hSign  = (i % 2 === 0) ? 1 : -1;

        const anim = document.createElementNS(NS, 'animateTransform');
        anim.setAttribute('attributeName', 'transform');
        anim.setAttribute('type', 'translate');
        anim.setAttribute('values', `0 0; ${hSign * hDrift} -${amp}; 0 0`);
        anim.setAttribute('dur', dur + 's');
        anim.setAttribute('begin', begin);
        anim.setAttribute('repeatCount', 'indefinite');
        anim.setAttribute('calcMode', 'spline');
        anim.setAttribute('keySplines', '0.37 0 0.63 1; 0.37 0 0.63 1');
        path.appendChild(anim);
        g.appendChild(path);
      }
      svg.appendChild(g);
    });

    container.appendChild(svg);
  }

  initBackgroundPaths();

  /* ══════════════════════════════════════════════════════
     HERO ENTRANCE (GSAP)
  ══════════════════════════════════════════════════════ */
  function heroEntrance() {
    if (typeof gsap === 'undefined') return;

    const heroEl = $('.hero');

    const tl = gsap.timeline({
      defaults: { ease: 'power3.out' },
      onComplete() {
        /* Add class FIRST so the CSS rule wins before inline styles are cleared */
        if (heroEl) heroEl.classList.add('hero-done');
        /* Remove GSAP translate3d inline styles — prevents GPU-layer / overflow:hidden
           compositor clipping bug that makes heading words vanish during scroll */
        gsap.set([
          '.hero__word',
          '.hero__line--gold em',
          '.hero__eyebrow',
          '.hero__sub',
          '.hero__actions',
          '.hero__metrics'
        ], { clearProps: 'all' });
      }
    });

    tl.to('.hero__eyebrow', { opacity: 1, y: 0, duration: 0.55, delay: 0.1 })
      .to('.hero__word',    { y: '0%', duration: 0.65, stagger: 0.03 }, '-=0.35')
      .add(() => {
        const em = $('.hero__line--gold em');
        if (em) {
          gsap.to(em, { y: '0%', duration: 0.65, ease: 'power3.out',
            onComplete: () => em.classList.add('animating') });
        }
      }, '-=0.4')
      .to('.hero__sub',     { opacity: 1, y: 0, duration: 0.55 }, '-=0.45')
      .to('.hero__actions', { opacity: 1, y: 0, duration: 0.55 }, '-=0.5')
      .to('.hero__metrics', { opacity: 1, y: 0, duration: 0.55 }, '-=0.5');
  }

  heroEntrance();

  /* ══════════════════════════════════════════════════════
     SCROLL REVEALS
     IntersectionObserver triggers GSAP opacity 0→1.
     data-delay on the element is read and passed as GSAP
     delay so sibling cards stagger sequentially.
     onComplete adds .revealed (CSS opacity:1) and clears
     GSAP inline style → CSS class takes over with no flash.
     Avoids: CSS-transition/transitionend bugs, permanent
     will-change on 50+ elements, compositing layer conflicts.
  ══════════════════════════════════════════════════════ */
  const revealIO = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      revealIO.unobserve(el);

      /* Read the stagger delay specified in HTML (data-delay="0.1" etc.) */
      const delay = parseFloat(el.dataset.delay || 0);

      if (typeof gsap !== 'undefined') {
        gsap.to(el, {
          opacity: 1,
          duration: 0.65,
          delay,
          ease: 'power2.out',
          onComplete() {
            el.classList.add('revealed');
            gsap.set(el, { clearProps: 'opacity' });
          }
        });
      } else {
        /* Fallback: CSS transition handles it */
        el.classList.add('revealed');
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  $$('[data-reveal]').forEach(el => revealIO.observe(el));

  /* ══════════════════════════════════════════════════════
     COUNTERS
  ══════════════════════════════════════════════════════ */
  function countUp(el, target, ms = 1800) {
    const start = performance.now();
    (function step(ts) {
      const p    = Math.min((ts - start) / ms, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.floor(ease * target);
      if (p < 1) requestAnimationFrame(step);
      else el.textContent = target;
    })(performance.now());
  }

  const metricsEl = $('.hero__metrics');
  if (metricsEl) {
    const metIO = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      $$('.counter').forEach(el => countUp(el, +el.dataset.target));
      metIO.disconnect();
    }, { threshold: 0.5 });
    metIO.observe(metricsEl);
  }

  /* ══════════════════════════════════════════════════════
     SERVICE CARD BARS + BACKGROUND PARALLAX (GSAP only)
     scrub:0.5 for minimal parallax lag without stuttering
  ══════════════════════════════════════════════════════ */
  function initScrollFX() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    gsap.registerPlugin(ScrollTrigger);

    $$('.service-card__bar').forEach(bar => {
      gsap.to(bar, {
        width: '100%',
        duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: bar.closest('.service-card'), start: 'top 80%', once: true }
      });
    });

    gsap.to('#backgroundPaths', {
      yPercent: 12, ease: 'none',
      scrollTrigger: { trigger: '.hero', start: 'top top', end: 'bottom top', scrub: 0.5 }
    });
  }

  initScrollFX();

  /* ══════════════════════════════════════════════════════
     PREMIUM CARD INTERACTIONS
     GUARD: 3D tilt only after .revealed is set.
     Prevents opacity-animation + 3D-transform compositing
     conflict that causes visual artefacts during scroll.
  ══════════════════════════════════════════════════════ */
  if (window.matchMedia('(pointer:fine)').matches) {

    $$('.service-card, .nicho-card').forEach(card => {
      card.addEventListener('mousemove', e => {
        /* Skip if reveal animation hasn't finished */
        if (!card.classList.contains('revealed')) return;
        const r = card.getBoundingClientRect();
        const px = e.clientX - r.left;
        const py = e.clientY - r.top;
        const nx = px / r.width  - 0.5;
        const ny = py / r.height - 0.5;
        card.style.setProperty('--mx', px + 'px');
        card.style.setProperty('--my', py + 'px');
        card.style.transform = `perspective(900px) rotateY(${nx * 5}deg) rotateX(${-ny * 4}deg) translateZ(8px)`;
      });
      card.addEventListener('mouseleave', () => {
        card.style.setProperty('--mx', '-9999px');
        card.style.setProperty('--my', '-9999px');
        card.style.transform = '';
      });
    });

    $$('.sj-stat').forEach(el => {
      el.addEventListener('mouseenter', () => { el.style.transform = 'translateY(-3px)'; });
      el.addEventListener('mouseleave', () => { el.style.transform = ''; });
    });

    $$('.btn-primary, .btn-gold').forEach(btn => {
      btn.addEventListener('mousemove', e => {
        const r = btn.getBoundingClientRect();
        const x = (e.clientX - (r.left + r.width  * 0.5)) * 0.14;
        const y = (e.clientY - (r.top  + r.height * 0.5)) * 0.14;
        btn.style.transform = `translateY(-2px) translate(${x}px, ${y}px)`;
      });
      btn.addEventListener('mouseleave', () => { btn.style.transform = ''; });
    });

  }

  /* ══════════════════════════════════════════════════════
     FAQ ACCORDION
  ══════════════════════════════════════════════════════ */
  $$('.faq-item').forEach(item => {
    const btn = item.querySelector('.faq-item__q');
    const ans = item.querySelector('.faq-item__a');
    btn.addEventListener('click', () => {
      const open = item.classList.contains('open');
      $$('.faq-item.open').forEach(other => {
        other.classList.remove('open');
        other.querySelector('.faq-item__a').style.maxHeight = '0';
      });
      item.classList.toggle('open', !open);
      ans.style.maxHeight = !open ? ans.scrollHeight + 'px' : '0';
    });
  });

  /* ══════════════════════════════════════════════════════
     WA FLOAT — hide on footer
  ══════════════════════════════════════════════════════ */
  const waFloat = $('#waFloat');
  const footer  = $('.footer');
  if (waFloat && footer) {
    new IntersectionObserver(([e]) => {
      waFloat.style.opacity = e.isIntersecting ? '0' : '1';
      waFloat.style.pointerEvents = e.isIntersecting ? 'none' : 'all';
    }, { threshold: 0.1 }).observe(footer);
  }

  /* ══════════════════════════════════════════════════════
     ACTIVE NAV LINK
  ══════════════════════════════════════════════════════ */
  const navLinks = $$('.nav__link[href^="#"]');
  const sections = navLinks.map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  if (sections.length) {
    sections.forEach(s => {
      new IntersectionObserver(([e]) => {
        if (!e.isIntersecting) return;
        navLinks.forEach(a => {
          a.style.color = a.getAttribute('href') === '#' + s.id ? 'var(--gold-light)' : '';
        });
      }, { threshold: 0.4 }).observe(s);
    });
  }

})();
