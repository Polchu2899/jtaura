/* ─────────────────────────────────────────────────────────────
   José S. Taura — Landing Page
   Server Component — all interactivity via public/js/main.js
   ───────────────────────────────────────────────────────────── */

const BADGE      = "https://i.ibb.co/JWFYxWRW/Foto-de-Perfil-Tj-Taura-removebg-preview.png";
const JOSE_AVION = "https://i.ibb.co/4g90GWCp/Jose-avion.jpg";
const JOSE_CUT1  = "https://i.ibb.co/B2gKRg0b/Universal-Upscaler-0462b481-74cd-469c-879b-e569f5dbebda-removebg-preview.png";
const JOSE_CUT2  = "https://i.ibb.co/JFBV8XgB/Perfil.png";
const LUXINPRO   = "https://i.ibb.co/nMPVkq0f/Logo-Luxinpro.png";
const WA_BASE    = "https://api.whatsapp.com/send?phone=34609625573&text=";

/* ── SVG Icon set — no emojis ──────────────────────────────── */
const icons = {
  building: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="1"/><path d="M9 21V12h6v9"/><path d="M7 7h.01M12 7h.01M17 7h.01M7 11h.01M17 11h.01"/>
    </svg>
  ),
  chart: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
    </svg>
  ),
  hotel: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14"/><path d="M3 21h18"/><rect x="7" y="9" width="3" height="4"/><rect x="14" y="9" width="3" height="4"/><path d="M12 21v-6"/>
    </svg>
  ),
  houses: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
    </svg>
  ),
  leaf: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
    </svg>
  ),
  head: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a8 8 0 0 1 8 8v1.5c0 .83-.67 1.5-1.5 1.5H16a2 2 0 0 0-2 2v2.5a1.5 1.5 0 0 1-3 0V15a2 2 0 0 0-2-2H5.5A1.5 1.5 0 0 1 4 11.5V10A8 8 0 0 1 12 2z"/>
    </svg>
  ),
  wrench: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>
    </svg>
  ),
  bolt: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  anchor: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="5" r="3"/><line x1="12" y1="22" x2="12" y2="8"/><path d="M5 12H2a10 10 0 0 0 20 0h-3"/>
    </svg>
  ),
  activity: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
    </svg>
  ),
  target: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/>
    </svg>
  ),
  award: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="8" r="6"/><path d="M15.477 12.89L17 22l-5-3-5 3 1.523-9.11"/>
    </svg>
  ),
  users: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
  ),
  arrow: (
    <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 10h12M10 4l6 6-6 6"/>
    </svg>
  ),
};

const schema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "José S. Taura — Consultoría Empresarial",
  "description": "Auditorías, Coaching y Consultoría exclusiva para empresarios del sector hotelero, construcción e instalaciones en Islas Baleares y Península. Más de 25 años de experiencia.",
  "url": "https://tjtaura.com/",
  "telephone": "+34609625573",
  "areaServed": ["Islas Baleares", "Menorca", "España"],
  "priceRange": "$$",
  "founder": {
    "@type": "Person",
    "name": "José S. Taura",
    "jobTitle": "Consultor Empresarial, Auditor y Coach de Alto Rendimiento",
  }
};

export default function Home() {
  return (
    <>
      <a href="#main-content" className="skip-link">Ir al contenido principal</a>
      <div className="cursor" id="cursor" aria-hidden="true" />
      <div className="cursor-follower" id="cursor-follower" aria-hidden="true" />
      <div className="progress-bar" id="progress-bar" aria-hidden="true" />

      {/* ── WHATSAPP FLOAT BUTTON ── */}
      <a
        href={WA_BASE + "Hola%20Jos%C3%A9%2C%20me%20gustar%C3%ADa%20obtener%20m%C3%A1s%20informaci%C3%B3n"}
        target="_blank" rel="noopener noreferrer"
        className="wa-float" aria-label="Contactar por WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/>
        </svg>
      </a>

      {/* ── COOKIE BANNER ── */}
      <div className="cookie-banner" id="cookie-banner" role="region" aria-label="Aviso de cookies" style={{ display: "none" }}>
        <p className="cookie-text">
          Utilizamos cookies propias y de terceros para analizar el tráfico y mejorar tu experiencia.
          Puedes aceptar todas o solo las necesarias.{" "}
          <a href="/politica-privacidad/" className="cookie-link">Más información</a>
        </p>
        <div className="cookie-actions">
          <button id="cookie-accept" className="cookie-btn cookie-btn--accept">Aceptar todas</button>
          <button id="cookie-reject" className="cookie-btn cookie-btn--reject">Solo necesarias</button>
        </div>
      </div>

      {/* Mobile menu */}
      <nav className="mobile-menu" id="mobile-menu" aria-label="Menú de navegación móvil">
        <a href="#problem">Servicios</a>
        <a href="#about">José Taura</a>
        <a href="#audience">Para quién</a>
        <a href="#testimonials">Testimonios</a>
        <a href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"} target="_blank" rel="noopener noreferrer">
          Primera llamada gratuita →
        </a>
      </nav>

      {/* ══ NAV ══════════════════════════════════════════════ */}
      <nav id="navbar" role="navigation" aria-label="Navegación principal">
        <a href="#" className="nav-logo">
          <img src={BADGE} alt="Logo José S. Taura" />
          José S. <span>Taura</span>
        </a>
        <ul className="nav-links" role="list">
          <li><a href="#problem">Servicios</a></li>
          <li><a href="#about">José Taura</a></li>
          <li><a href="#audience">Para quién</a></li>
          <li><a href="#testimonials">Testimonios</a></li>
          <li>
            <a href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"} target="_blank" rel="noopener noreferrer" className="nav-cta">
              Primera llamada →
            </a>
          </li>
        </ul>
        <button className="nav-toggle magnetic" id="nav-toggle"
          aria-label="Abrir menú de navegación" aria-expanded="false" aria-controls="mobile-menu">
          <span /><span /><span />
        </button>
      </nav>

      <main id="main-content">

        {/* ══ HERO ═════════════════════════════════════════ */}
        <section id="hero" aria-label="Sección principal">
          <div className="hero-bg" id="hero-bg" role="img" aria-label="Vista aérea de ciudad de negocios" />
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow" id="hero-eyebrow">Consultoría · Coaching · Auditoría</p>
            <h1 className="hero-title" id="hero-title">
              Transforma tu<br /><em>Negocio.</em>
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              Auditorías, Coaching y Consultoría Exclusiva para Empresarios del Sector Hotelero,
              Construcción e Instalaciones en Islas Baleares y Península.
            </p>
            <div className="hero-actions" id="hero-actions">
              <a href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"} target="_blank" rel="noopener noreferrer"
                className="btn-primary magnetic" aria-label="Agenda tu primera llamada gratuita en WhatsApp">
                Primera llamada GRATUITA {icons.arrow}
              </a>
              <a href="#about" className="btn-outline magnetic">Conocer a José →</a>
            </div>
          </div>
          <div className="hero-stats" id="hero-stats" aria-label="Estadísticas">
            <div className="stat-item">
              <div className="stat-number" data-count="400">0</div>
              <div className="stat-label">Clientes satisfechos</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="25">0</div>
              <div className="stat-label">Años de experiencia</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="450">0</div>
              <div className="stat-label">Proyectos ejecutados</div>
            </div>
            <div className="stat-item">
              <div className="stat-number" data-count="14">0</div>
              <div className="stat-label">Años en el sector hotelero</div>
            </div>
          </div>
          <div className="scroll-indicator" id="scroll-indicator" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ══ LOGOS STRIP ══════════════════════════════════ */}
        <section id="logos-strip" aria-label="Empresas y proyectos destacados">
          <div className="container">
            <p className="logos-label">Empresas fundadas · Sectores asesorados · Proyectos ejecutados</p>
            <div className="logos-row">
              <div className="logo-item">
                <img src={LUXINPRO} alt="Luxinpro" className="logo-img" />
              </div>
              <div className="logo-item logo-item--text">
                <span className="logo-text-brand">J.S.T. Instalaciones</span>
                <span className="logo-text-sub">+450 proyectos</span>
              </div>
              <div className="logo-item logo-item--text">
                <span className="logo-text-brand">Sector Hotelero</span>
                <span className="logo-text-sub">14 años · Baleares & Península</span>
              </div>
              <div className="logo-item logo-item--text">
                <span className="logo-text-brand">Construcción</span>
                <span className="logo-text-sub">Vivienda · Industrial · Renovables</span>
              </div>
            </div>
          </div>
        </section>

        {/* ══ PROBLEM ══════════════════════════════════════ */}
        <section id="problem" aria-labelledby="problem-title">
          <div className="container">
            <div className="problem-inner">
              {/* Real photo of José — airplane */}
              <div className="problem-img-wrap img-clip-wrap" id="problem-img">
                <img src={JOSE_AVION} alt="José S. Taura, Consultor Empresarial" loading="lazy" width={800} height={1000} />
                <div className="problem-img-overlay" />
              </div>
              <div className="problem-text">
                <div className="section-label">El problema</div>
                <h2 className="problem-title" id="problem-title">
                  ¿Tu Negocio Pierde<br /><em>Estructura y Rentabilidad?</em>
                </h2>
                <p className="problem-body">
                  El crecimiento de tu empresa no debe traducirse en caos y pérdida de control. Muchos
                  empresarios llegan a un punto en que saben que algo no funciona, pero no saben
                  exactamente qué ni cómo solucionarlo.
                </p>
                <div className="problem-questions">
                  <p>¿Sientes que tu negocio ha crecido demasiado?</p>
                  <p>¿Has perdido el control de tu equipo y tus procesos?</p>
                </div>
                <p className="problem-body">
                  Con nuestro enfoque estratégico, no sólo transformarás tu negocio en una máquina de
                  productividad y éxito sostenido, también conseguirás la metodología y el mindset que
                  necesitas para gestionar tu equipo y expandir tu empresa.
                </p>
                <a href="#services" className="btn-outline magnetic" style={{ marginTop: "0.5rem" }}>
                  Ver soluciones →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ═════════════════════════════════════ */}
        <section id="services" aria-labelledby="services-title">
          <div className="services-header container">
            <div className="section-label" style={{ justifyContent: "center" }}>Nuestros servicios</div>
            <h2 className="services-title" id="services-title">
              Una metodología <em>probada</em><br />para transformar tu empresa
            </h2>
          </div>

          {[
            { n: 1, bg: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fm=webp')", label: "01", title: <>Incremento de la<br /><em>Productividad</em></>, text: "Implementa estructuras eficientes mediante metodologías probadas que optimizan la gestión de equipos, mejoran los procesos internos y reducen costos operativos. No se trata de trabajar más, sino de trabajar mejor.", wa: "Me%20interesa%20el%20servicio%20de%20Productividad" },
            { n: 2, bg: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&fm=webp')", label: "02", title: <>Reducción<br /><em>de Costes</em></>, text: "Optimiza recursos y reduce costos sin sacrificar calidad. Aplicamos metodologías estratégicas para eliminar ineficiencias, optimizar procesos y mejorar la gestión de equipos con auditorías y consultoría personalizada.", wa: "Me%20interesa%20la%20Reducci%C3%B3n%20de%20Costes" },
            { n: 3, bg: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp')", label: "03", title: <>Equilibrio Personal<br /><em>y Profesional</em></>, text: "El éxito empresarial no debería costarte tu bienestar personal. Estructura tu negocio con metodologías que optimizan la gestión y delegación, permitiéndote recuperar el control de tu tiempo.", wa: "Me%20interesa%20el%20Coaching%20de%20Equilibrio" },
            { n: 4, bg: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80&fm=webp')", label: "04", title: <>Coaching de<br /><em>Alto Rendimiento</em></>, text: "Transforma tu vida y tu negocio a través de un enfoque basado en el cambio de hábitos y el desarrollo del mindset. Con apoyo personalizado, construiremos juntos una nueva rutina que te impulse hacia la libertad y el éxito sostenido.", wa: "Me%20interesa%20el%20Coaching%20de%20Alto%20Rendimiento" },
          ].map(({ n, bg, label, title, text, wa }) => (
            <div className="service-panel" id={`panel-${n}`} key={n}>
              <div className="service-panel-bg" id={`panel-${n}-bg`} style={{ backgroundImage: bg }} role="img" aria-label={`Servicio ${label}`} />
              <div className="service-panel-overlay" />
              <div className="service-panel-content">
                <div className="section-label">{label}</div>
                <h3 className="service-panel-title">{title}</h3>
                <p className="service-panel-text">{text}</p>
                <a href={WA_BASE + wa} target="_blank" rel="noopener noreferrer" className="btn-outline magnetic">
                  Consultar este servicio
                </a>
              </div>
              <div className="service-number" aria-hidden="true">{label}</div>
            </div>
          ))}
        </section>

        {/* ══ ABOUT ════════════════════════════════════════ */}
        <section id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="about-inner">

              {/* Photo — branded portrait of José */}
              <div style={{ position: "relative" }}>
                <div className="about-accent-line" />
                <div className="about-img-wrap img-clip-wrap" id="about-img">
                  <img src={JOSE_CUT2} alt="José S. Taura, Consultor Empresarial" loading="lazy" width={800} height={1067} />
                </div>
                <div className="about-badge">
                  <div className="about-badge-num">25+</div>
                  <div className="about-badge-text">Años de experiencia</div>
                </div>
              </div>

              {/* History & text */}
              <div className="about-text">
                <div className="section-label">El experto</div>
                <h2 className="about-title" id="about-title">Conoce a José Taura</h2>
                <p className="about-subtitle">Consultor Empresarial · Auditor · Coach de Alto Rendimiento</p>

                <p className="about-bio">
                  Con más de 25 años de experiencia, José Taura ha recorrido un camino excepcional en el
                  mundo empresarial, comenzando desde la base hasta liderar equipos de más de{" "}
                  <strong style={{ color: "var(--color-text)" }}>150 empleados</strong> y colaborar con
                  las principales cadenas del sector hotelero a nivel nacional.
                </p>
                <p className="about-bio">
                  Desde sus inicios, José trabajó en empresas instaladoras, ascendiendo de peón a
                  encargado en solo tres años. Tras liderar proyectos en múltiples ciudades y superar la
                  crisis de 2008, fundó{" "}
                  <strong style={{ color: "var(--color-text)" }}>J.S.T. Instalaciones</strong>, logrando
                  ejecutar más de 450 viviendas a la vez. Posteriormente consolidó su conocimiento en
                  expansión y desarrollo de negocios, colaborando durante{" "}
                  <strong style={{ color: "var(--color-text)" }}>14 años</strong> en la transformación
                  operativa del sector hotelero y asesorando múltiples complejos turísticos en Baleares y
                  la Península.
                </p>
                <p className="about-bio">
                  Su enfoque va más allá de la gestión: ayuda a empresarios a recuperar el equilibrio
                  personal y profesional aplicando metodologías que optimizan equipos, procesos y
                  liderazgo. Además, su compromiso social le ha llevado a colaborar con centros de
                  desarrollo personal, impulsando el cambio a través de hábitos saludables y ejercicio
                  físico.
                </p>
                <p className="about-bio" style={{ color: "var(--color-text)", fontFamily: "var(--font-heading)", fontStyle: "italic", fontSize: "var(--text-lg)" }}>
                  Si tu empresa necesita estructura, crecimiento y mayor rentabilidad — o si buscas un
                  cambio personal para mejorar tu bienestar — José Taura es el guía que te ayudará a
                  lograrlo.
                </p>

                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">{icons.wrench}</div>
                    <div className="highlight-text">Fundador de J.S.T. Instalaciones · +450 proyectos simultáneos</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">{icons.hotel}</div>
                    <div className="highlight-text">14 años de transformación en el sector hotelero · Baleares</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">{icons.bolt}</div>
                    <div className="highlight-text">Especialista en energías renovables e instalaciones</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">{icons.leaf}</div>
                    <div className="highlight-text">Colaborador con centros de desarrollo personal y social</div>
                  </div>
                </div>

                <a href={WA_BASE + "Quiero%20hablar%20con%20Jos%C3%A9%20Taura"} target="_blank" rel="noopener noreferrer" className="btn-primary magnetic">
                  Hablar con José →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ BRANDS ═══════════════════════════════════════ */}
        <section id="brands" aria-label="Empresas y colaboraciones">
          <div className="container">
            <div className="brands-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Trayectoria & Empresas</div>
              <p className="brands-subtitle">Empresas fundadas, sectores asesorados y colaboraciones a lo largo de 25+ años</p>
            </div>
            <div className="brands-grid">
              <div className="brand-card">
                <img src={LUXINPRO} alt="Luxinpro" className="brand-logo" />
                <p className="brand-desc">Empresa de instalaciones y servicios técnicos fundada por José Taura</p>
              </div>
              <div className="brand-card">
                <div className="brand-text-logo">Sector Hotelero</div>
                <p className="brand-desc">14 años transformando estándares operativos en grandes cadenas de Baleares y la Península</p>
              </div>
              <div className="brand-card">
                <div className="brand-text-logo">J.S.T. Instalaciones</div>
                <p className="brand-desc">Empresa fundada por José · Más de 450 viviendas ejecutadas simultáneamente</p>
              </div>
            </div>
          </div>
        </section>

        {/* ══ AUDIENCE ═════════════════════════════════════ */}
        <section id="audience" aria-labelledby="audience-title">
          <div className="container">
            <div className="audience-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Para quién</div>
              <h2 className="audience-title" id="audience-title">
                ¿Son estos servicios <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>para ti?</em>
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--color-text-muted)", maxWidth: "550px", margin: "0 auto", fontSize: "var(--text-base)", lineHeight: 1.7 }}>
                Descubre si nuestros servicios de auditoría, coaching y consultoría empresarial están diseñados para tu situación.
              </p>
            </div>
            <div className="audience-grid">
              {[
                { icon: icons.building, title: "Empresarios y Autónomos", text: "Si necesitas optimizar procesos y aumentar la rentabilidad de tu empresa de construcción, mantenimiento o energías renovables, nuestros servicios son para ti." },
                { icon: icons.chart,    title: "Directivos en busca de Eficiencia", text: "Para líderes que desean implementar estrategias efectivas y mejorar la estructura organizacional, reduciendo el caos y aumentando el rendimiento de sus equipos." },
                { icon: icons.hotel,    title: "Empresas del Sector Hotelero", text: "¿Cansado del servicio ineficiente de tu departamento de Mantenimiento? Implementa metodologías para mejorar productividad, reducir costos y garantizar un servicio eficiente." },
                { icon: icons.houses,   title: "PYMES Españolas", text: "Servicios especialmente diseñados para empresas en Islas Baleares y Península, asegurando un enfoque personalizado y relevante para el tejido empresarial español." },
                { icon: icons.leaf,     title: "Agroturismos y Energía Renovable", text: "Asesoramiento experto en instalaciones renovables para agroturismos, hoteles y grandes infraestructuras. Evita errores costosos con planificación eficiente desde el inicio." },
                { icon: icons.head,     title: "Personas en Proceso de Cambio", text: "Si buscas un cambio personal profundo, recuperar el equilibrio y construir hábitos saludables que transformen tu vida personal y profesional, José Taura puede acompañarte." },
              ].map((card, i) => (
                <div className="audience-card" key={i}>
                  <div className="audience-card-icon">{card.icon}</div>
                  <h3 className="audience-card-title">{card.title}</h3>
                  <p className="audience-card-text">{card.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ EVENTS ═══════════════════════════════════════ */}
        <section id="eventos" aria-labelledby="eventos-title">
          <div className="container">
            <div className="events-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Actividades & Eventos</div>
              <h2 className="events-title" id="eventos-title">Más allá del negocio</h2>
              <div className="divider" />
              <p style={{ color: "var(--color-text-muted)", maxWidth: "550px", margin: "0 auto 3rem", fontSize: "var(--text-base)", lineHeight: 1.7 }}>
                José también organiza y patrocina eventos que combinan su pasión por el deporte, la aventura y el desarrollo personal en Menorca y Baleares.
              </p>
            </div>
            <div className="events-grid">
              <a href="https://motonauticamenorca.com" target="_blank" rel="noopener noreferrer" className="event-card magnetic" aria-label="Motonautica Menorca">
                <div className="event-icon">{icons.anchor}</div>
                <h3 className="event-title">Motonautica Menorca</h3>
                <p className="event-text">Organización y patrocinio de eventos de motonautica en las aguas de Menorca. Deporte, aventura y networking para empresarios.</p>
                <span className="event-link">motonauticamenorca.com →</span>
              </a>
              <div className="event-card">
                <div className="event-icon">{icons.activity}</div>
                <h3 className="event-title">Desarrollo Personal & Deporte</h3>
                <p className="event-text">Colaboración con centros de desarrollo personal para impulsar el cambio mediante hábitos saludables, ejercicio físico y trabajo mental.</p>
                <span className="event-link" style={{ color: "var(--color-text-muted)" }}>Menorca · Islas Baleares</span>
              </div>
              <div className="event-card">
                <div className="event-icon">{icons.target}</div>
                <h3 className="event-title">Talleres Empresariales</h3>
                <p className="event-text">Workshops y jornadas de formación para directivos y emprendedores sobre gestión de equipos, liderazgo y optimización de procesos.</p>
                <a href={WA_BASE + "Me%20interesa%20asistir%20a%20un%20taller%20empresarial"} target="_blank" rel="noopener noreferrer" className="event-link">
                  Consultar próximas fechas →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ TESTIMONIALS ═════════════════════════════════ */}
        <section id="testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="testimonials-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Opiniones reales</div>
              <h2 className="testimonials-title" id="testimonials-title">
                Lo que dicen nuestros <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>clientes</em>
              </h2>
              <div className="divider" />
            </div>
            <div className="testimonials-grid">
              {[
                { initial: "M", quote: "Gracias a José Taura, nuestra empresa ha visto un incremento significativo en la productividad y una reducción en los costes operativos. Su enfoque personalizado ha sido clave para nuestro éxito.", name: "María López", role: "Gerente de Operaciones" },
                { initial: "J", quote: "José nos ayudó a reestructurar nuestros departamentos clave, lo que resultó en una operación más eficiente y rentable. Su conocimiento y experiencia son invaluables.", name: "Juan Pérez García", role: "Director General" },
                { initial: "A", quote: "La asesoría de José Taura fue fundamental para alcanzar un mejor equilibrio personal y profesional. Su coaching nos ha permitido optimizar procesos y mejorar la rentabilidad.", name: "Ana Martínez", role: "Consultora de Negocios" },
              ].map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-stars">★★★★★</div>
                  <blockquote className="testimonial-quote">&ldquo;{t.quote}&rdquo;</blockquote>
                  <div className="testimonial-author">
                    <div className="testimonial-avatar" aria-hidden="true">{t.initial}</div>
                    <div>
                      <div className="testimonial-name">{t.name}</div>
                      <div className="testimonial-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FAQ ══════════════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="faq-header">
              <div className="section-label" style={{ justifyContent: "center" }}>FAQ</div>
              <h2 className="faq-title" id="faq-title">Preguntas frecuentes</h2>
              <div className="divider" />
            </div>
            <div className="faq-list" role="list">
              {[
                { q: "¿Qué tipo de empresas pueden beneficiarse de estos servicios?", a: "Todo tipo de empresas, principalmente aquellas con departamento de mantenimiento e instalaciones en las Islas Baleares y la Península. Ya sea que busques optimizar procesos, reducir costos o mejorar la estructura, nuestros servicios de auditoría, coaching y consultoría están diseñados para ayudarte a alcanzar un crecimiento sostenible y rentable." },
                { q: "¿Qué incluye una sesión de coaching 1:1 con José Taura?", a: "Cada sesión está personalizada para abordar tus necesidades específicas. Se trabajará en identificar áreas de mejora, establecer metas claras y desarrollar un plan de acción. Este enfoque individualizado asegura que recibas la atención necesaria para enfrentar tus desafíos y lograr un equilibrio personal y profesional más sólido. El coste se acuerda tras la primera llamada gratuita de valoración." },
                { q: "¿Cómo se realizan las auditorías empresariales?", a: "Las auditorías implican un análisis exhaustivo de los procesos, estructura organizativa, gestión de equipos y finanzas de tu empresa. José Taura realiza un diagnóstico completo para identificar ineficiencias, oportunidades de mejora y propone un plan de acción concreto con métricas de seguimiento." },
                { q: "¿Trabajan solo en Islas Baleares o también en Península?", a: "Trabajamos en todo el territorio nacional: tanto en Islas Baleares como en la Península. Muchos de nuestros servicios pueden realizarse de forma presencial o remota, lo que nos permite atender empresas de cualquier localización dentro de España." },
                { q: "¿Cuál es el primer paso para empezar?", a: "El primer paso es agendar una llamada gratuita a través de WhatsApp. En esta llamada de valoración, José Taura escuchará tu situación, identificará tus necesidades principales y te explicará sin compromiso cómo podría ayudarte. Es completamente gratuita y sin ningún tipo de compromiso posterior." },
              ].map((item, i) => (
                <div className="faq-item" role="listitem" key={i}>
                  <button className="faq-question" aria-expanded="false">
                    {item.q}
                    <span className="faq-icon" aria-hidden="true">+</span>
                  </button>
                  <div className="faq-answer">
                    <p className="faq-answer-inner">{item.a}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══ FINAL CTA ════════════════════════════════════ */}
        <section id="cta-final" aria-labelledby="cta-title">
          <div className="cta-bg" id="cta-bg" />
          <div className="cta-overlay" />
          {/* José photo — floats on the right side */}
          <div className="cta-jose-photo" aria-hidden="true">
            <img src={JOSE_CUT1} alt="" />
          </div>
          <div className="container">
            <div className="cta-inner">
              <div className="section-label" style={{ justifyContent: "center" }}>El siguiente paso</div>
              <h2 className="cta-title" id="cta-title">
                ¿Listo para <em>transformar</em><br />tu negocio?
              </h2>
              <p className="cta-text">
                Agenda tu primera llamada gratuita hoy mismo. Sin compromiso, sin formularios interminables.
                Solo una conversación honesta sobre cómo podemos ayudarte a crecer.
              </p>
              <a href={WA_BASE + "Quiero%20agendar%20mi%20llamada%20gratuita"} target="_blank" rel="noopener noreferrer"
                className="btn-primary magnetic" style={{ fontSize: "var(--text-base)", padding: "1.25rem 2.8rem" }}>
                Agenda tu llamada GRATUITA {icons.arrow}
              </a>
              <p className="cta-trust">★★★★★ · Más de 400 clientes satisfechos · Islas Baleares y Península</p>
            </div>
          </div>
        </section>

      </main>

      {/* ══ FOOTER ═══════════════════════════════════════ */}
      <footer role="contentinfo">
        <div className="container">
          <div className="footer-inner">
            <a href="#" className="footer-logo">
              <img src={BADGE} alt="José S. Taura" />
              José S. Taura
            </a>
            <ul className="footer-links" role="list">
              <li><a href="#problem">Servicios</a></li>
              <li><a href="#about">José Taura</a></li>
              <li><a href="#testimonials">Testimonios</a></li>
              <li><a href="#eventos">Eventos</a></li>
              <li><a href="/politica-privacidad/">Aviso Legal & Privacidad</a></li>
            </ul>
            <p className="footer-copy">© 2026 José S. Taura · Todos los derechos reservados</p>
          </div>
          <div className="footer-credit">
            Diseñado y desarrollado por{" "}
            <a href="https://lucasyleodigital.com" target="_blank" rel="noopener noreferrer" className="footer-credit-link">
              Lucas y Leo Digital
            </a>
          </div>
        </div>
      </footer>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </>
  );
}
