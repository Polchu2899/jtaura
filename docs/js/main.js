/* ─────────────────────────────────────────────────────────────
   José S. Taura — main.js
   Requires: GSAP, ScrollTrigger, Lenis (loaded via Next.js Script)
   ───────────────────────────────────────────────────────────── */

(function boot() {
  if (typeof gsap === 'undefined' || typeof Lenis === 'undefined' || typeof ScrollTrigger === 'undefined') {
    setTimeout(boot, 80);
    return;
  }
  init();
})();

function init() {

  /* ── LENIS SMOOTH SCROLL ──────────────────────────── */
  var lenis = new Lenis({
    duration: 1.4,
    easing: function(t) { return Math.min(1, 1.001 - Math.pow(2, -10 * t)); },
    smooth: true,
    smoothTouch: false,
  });

  gsap.registerPlugin(ScrollTrigger);
  lenis.on('scroll', ScrollTrigger.update);
  gsap.ticker.add(function(time) { lenis.raf(time * 1000); });
  gsap.ticker.lagSmoothing(0);

  /* ── PROGRESS BAR ─────────────────────────────────── */
  var progressBar = document.getElementById('progress-bar');
  if (progressBar) {
    gsap.to(progressBar, {
      scaleX: 1, ease: 'none',
      scrollTrigger: { trigger: document.body, start: 'top top', end: 'bottom bottom', scrub: true }
    });
  }

  /* ── CUSTOM CURSOR ────────────────────────────────── */
  var cursor = document.getElementById('cursor');
  var cursorFollower = document.getElementById('cursor-follower');

  if (cursor && cursorFollower) {
    var mouseX = 0, mouseY = 0, followerX = 0, followerY = 0;

    document.addEventListener('mousemove', function(e) {
      mouseX = e.clientX; mouseY = e.clientY;
      gsap.set(cursor, { x: mouseX, y: mouseY });
    });

    (function animateFollower() {
      followerX += (mouseX - followerX) * 0.12;
      followerY += (mouseY - followerY) * 0.12;
      gsap.set(cursorFollower, { x: followerX, y: followerY });
      requestAnimationFrame(animateFollower);
    })();

    document.querySelectorAll('a, button, .audience-card, .testimonial-card').forEach(function(el) {
      el.addEventListener('mouseenter', function() { cursor.classList.add('hover'); cursorFollower.classList.add('hover'); });
      el.addEventListener('mouseleave', function() { cursor.classList.remove('hover'); cursorFollower.classList.remove('hover'); });
    });

    if ('ontouchstart' in window) {
      cursor.style.display = 'none';
      cursorFollower.style.display = 'none';
      document.body.style.cursor = 'auto';
    }
  }

  /* ── NAVBAR ───────────────────────────────────────── */
  var navbar = document.getElementById('navbar');
  if (navbar) {
    window.addEventListener('scroll', function() {
      navbar.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
  }

  /* ── HERO ENTRANCE ────────────────────────────────── */
  gsap.set(['#hero-eyebrow','#hero-subtitle','#hero-actions','#hero-stats','#scroll-indicator'], { y: 30 });

  gsap.timeline({ defaults: { ease: 'power3.out' } })
    .to('#hero-eyebrow',     { opacity: 1, y: 0, duration: 1, delay: 0.3 }, 0)
    .fromTo('#hero-title',
      { opacity: 0, y: 60, clipPath: 'inset(100% 0 0 0)' },
      { opacity: 1, y: 0,  clipPath: 'inset(0% 0 0 0)', duration: 1.2 }, 0.5)
    .to('#hero-subtitle',    { opacity: 1, y: 0, duration: 1 }, 0.9)
    .to('#hero-actions',     { opacity: 1, y: 0, duration: 0.8 }, 1.2)
    .to('#hero-stats',       { opacity: 1, y: 0, duration: 0.8 }, 1.4)
    .to('#scroll-indicator', { opacity: 1, duration: 0.8 }, 1.6);

  /* ── HERO PARALLAX ────────────────────────────────── */
  gsap.to('#hero-bg', {
    yPercent: 30, ease: 'none',
    scrollTrigger: { trigger: '#hero', start: 'top top', end: 'bottom top', scrub: 1 }
  });

  /* ── STAT COUNTERS ────────────────────────────────── */
  document.querySelectorAll('.stat-number[data-count]').forEach(function(el) {
    var target = parseInt(el.dataset.count, 10);
    gsap.to({ val: 0 }, {
      val: target, duration: 2, ease: 'power2.out', delay: 1.6,
      onUpdate: function() { el.textContent = Math.round(this.targets()[0].val) + '+'; }
    });
  });

  /* ── PROBLEM SECTION ──────────────────────────────── */
  var problemImg = document.querySelector('#problem-img img');
  if (problemImg) {
    gsap.to(problemImg, {
      yPercent: -12, ease: 'none',
      scrollTrigger: { trigger: '#problem', start: 'top bottom', end: 'bottom top', scrub: 1.5 }
    });
  }
  var problemText = document.querySelector('#problem .problem-text');
  if (problemText) {
    gsap.from(Array.from(problemText.children), {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.9, ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: { trigger: '#problem', start: 'top 80%', toggleActions: 'play none none reverse' }
    });
  }

  /* ── SERVICE PANELS ───────────────────────────────── */
  [1,2,3,4].forEach(function(n) {
    var panel = '#panel-' + n, bg = '#panel-' + n + '-bg';

    gsap.fromTo(bg, { yPercent: -10 }, { yPercent: 10, ease: 'none',
      scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: 1.5 } });

    gsap.fromTo(bg, { scale: 1.0 }, { scale: 1.18, ease: 'none',
      scrollTrigger: { trigger: panel, start: 'top bottom', end: 'bottom top', scrub: 2 } });

    var pc = document.querySelector(panel + ' .service-panel-content');
    if (pc) {
      gsap.fromTo(Array.from(pc.children),
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, stagger: 0.15, duration: 1, ease: 'power2.out',
          scrollTrigger: { trigger: panel, start: 'top 60%', toggleActions: 'play none none reverse' } });
    }
    gsap.fromTo(panel + ' .service-number',
      { opacity: 0, x: n % 2 === 0 ? -40 : 40 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out',
        scrollTrigger: { trigger: panel, start: 'top 60%', toggleActions: 'play none none reverse' } });
  });

  /* ── ABOUT ────────────────────────────────────────── */
  var aboutImg = document.querySelector('#about-img img');
  if (aboutImg) {
    gsap.fromTo(aboutImg, { scale: 1.1 }, { scale: 1.0, ease: 'none',
      scrollTrigger: { trigger: '#about', start: 'top bottom', end: 'bottom top', scrub: 1.5 } });
  }
  var aboutText = document.querySelector('#about .about-text');
  if (aboutText) {
    gsap.from(Array.from(aboutText.children), {
      opacity: 0, y: 30, stagger: 0.1, duration: 0.8, ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: { trigger: '#about', start: 'top bottom', toggleActions: 'play none none none' }
    });
  }
  gsap.from('.about-badge', {
    opacity: 0, scale: 0.8, duration: 0.8, ease: 'back.out(1.7)',
    immediateRender: false,
    scrollTrigger: { trigger: '#about', start: 'top bottom', toggleActions: 'play none none none' }
  });

  /* ── AUDIENCE ─────────────────────────────────────── */
  gsap.from('.audience-card', {
    opacity: 0, y: 50, stagger: 0.1, duration: 0.8, ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: { trigger: '#audience', start: 'top 80%', toggleActions: 'play none none reverse' }
  });

  /* ── BRANDS ───────────────────────────────────────── */
  gsap.from('.brand-card', {
    opacity: 0, y: 30, stagger: 0.12, duration: 0.8, ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: { trigger: '#brands', start: 'top 80%', toggleActions: 'play none none reverse' }
  });

  /* ── EVENTS ───────────────────────────────────────── */
  gsap.from('.event-card', {
    opacity: 0, y: 40, stagger: 0.12, duration: 0.8, ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: { trigger: '#eventos', start: 'top 80%', toggleActions: 'play none none reverse' }
  });

  /* ── TESTIMONIALS ─────────────────────────────────── */
  gsap.from('.testimonial-card', {
    opacity: 0, y: 50, stagger: 0.15, duration: 0.8, ease: 'power2.out',
    immediateRender: false,
    scrollTrigger: { trigger: '#testimonials', start: 'top 80%', toggleActions: 'play none none reverse' }
  });

  /* ── CTA FINAL ────────────────────────────────────── */
  gsap.fromTo('#cta-bg',
    { yPercent: -10, scale: 1.1 },
    { yPercent: 10, scale: 1.2, ease: 'none',
      scrollTrigger: { trigger: '#cta-final', start: 'top bottom', end: 'bottom top', scrub: 1.5 } });

  var ctaInner = document.querySelector('#cta-final .cta-inner');
  if (ctaInner) {
    gsap.from(Array.from(ctaInner.children), {
      opacity: 0, y: 40, stagger: 0.15, duration: 0.9, ease: 'power2.out',
      immediateRender: false,
      scrollTrigger: { trigger: '#cta-final', start: 'top 80%', toggleActions: 'play none none reverse' }
    });
  }

  /* Refresh all triggers */
  ScrollTrigger.refresh();

  /* ── COOKIE BANNER ────────────────────────────────── */
  var cookieBanner = document.getElementById('cookie-banner');
  var cookieAccept = document.getElementById('cookie-accept');
  var cookieReject = document.getElementById('cookie-reject');

  function hideCookieBanner() {
    if (cookieBanner) {
      cookieBanner.style.transform = 'translateY(100%)';
      setTimeout(function() { cookieBanner.style.display = 'none'; }, 400);
    }
  }

  if (cookieBanner && !localStorage.getItem('tjtaura_cookies')) {
    setTimeout(function() {
      cookieBanner.style.display = 'flex';
      setTimeout(function() { cookieBanner.classList.add('visible'); }, 50);
    }, 1200);
  }

  if (cookieAccept) {
    cookieAccept.addEventListener('click', function() {
      localStorage.setItem('tjtaura_cookies', 'accepted');
      hideCookieBanner();
    });
  }
  if (cookieReject) {
    cookieReject.addEventListener('click', function() {
      localStorage.setItem('tjtaura_cookies', 'rejected');
      hideCookieBanner();
    });
  }

  /* ── MAGNETIC BUTTONS ─────────────────────────────── */
  document.querySelectorAll('.magnetic').forEach(function(btn) {
    btn.addEventListener('mousemove', function(e) {
      var r = btn.getBoundingClientRect();
      gsap.to(btn, { x: (e.clientX - r.left - r.width/2) * 0.25, y: (e.clientY - r.top - r.height/2) * 0.25, duration: 0.3, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', function() {
      gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1,0.5)' });
    });
  });

  /* ── FAQ ACCORDION ────────────────────────────────── */
  document.querySelectorAll('.faq-question').forEach(function(btn) {
    btn.addEventListener('click', function() {
      var item = btn.closest('.faq-item');
      var wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item.open').forEach(function(el) {
        el.classList.remove('open');
        el.querySelector('.faq-question').setAttribute('aria-expanded','false');
      });
      if (!wasOpen) { item.classList.add('open'); btn.setAttribute('aria-expanded','true'); }
    });
  });

  /* ── MOBILE MENU ──────────────────────────────────── */
  var navToggle = document.getElementById('nav-toggle');
  var mobileMenu = document.getElementById('mobile-menu');
  var menuOpen = false;

  if (navToggle && mobileMenu) {
    function closeMenu() {
      menuOpen = false;
      mobileMenu.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
      document.body.style.overflow = '';
      var s = navToggle.querySelectorAll('span');
      gsap.to(s[0],{rotation:0,y:0,duration:0.3});
      gsap.to(s[1],{opacity:1,duration:0.2});
      gsap.to(s[2],{rotation:0,y:0,duration:0.3});
    }
    navToggle.addEventListener('click', function() {
      menuOpen = !menuOpen;
      mobileMenu.classList.toggle('open', menuOpen);
      navToggle.setAttribute('aria-expanded', String(menuOpen));
      document.body.style.overflow = menuOpen ? 'hidden' : '';
      var s = navToggle.querySelectorAll('span');
      if (menuOpen) {
        gsap.to(s[0],{rotation:45,y:6.5,duration:0.3});
        gsap.to(s[1],{opacity:0,duration:0.2});
        gsap.to(s[2],{rotation:-45,y:-6.5,duration:0.3});
      } else { closeMenu(); }
    });
    mobileMenu.querySelectorAll('a').forEach(function(a) { a.addEventListener('click', closeMenu); });
  }

  /* ── SMOOTH ANCHOR SCROLL ─────────────────────────── */
  document.querySelectorAll('a[href^="#"]').forEach(function(anchor) {
    anchor.addEventListener('click', function(e) {
      var href = anchor.getAttribute('href');
      if (href === '#') { e.preventDefault(); lenis.scrollTo(0, { duration: 1.6 }); return; }
      var target = document.querySelector(href);
      if (target) { e.preventDefault(); lenis.scrollTo(target, { offset: -80, duration: 1.6 }); }
    });
  });
}
