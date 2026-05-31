/* ─────────────────────────────────────────────────────────────
   José S. Taura — Landing Page
   Server Component — all interactivity via public/js/main.js
   ───────────────────────────────────────────────────────────── */

const BADGE = "https://i.ibb.co/JWFYxWRW/Foto-de-Perfil-Tj-Taura-removebg-preview.png";
const JOSE_AVION = "https://i.ibb.co/4g90GWCp/Jose-avion.jpg";
const WA_BASE = "https://api.whatsapp.com/send?phone=34609625573&text=";

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
    "description": "Más de 25 años de experiencia en consultoría empresarial, auditorías y coaching de alto rendimiento para el sector hotelero, construcción e instalaciones en Islas Baleares y Península.",
    "worksFor": { "@type": "Organization", "name": "José S. Taura — Consultoría Empresarial" }
  }
};

export default function Home() {
  return (
    <>
      {/* Skip link */}
      <a href="#main-content" className="skip-link">Ir al contenido principal</a>

      {/* Custom cursor */}
      <div className="cursor" id="cursor" aria-hidden="true" />
      <div className="cursor-follower" id="cursor-follower" aria-hidden="true" />

      {/* Progress bar */}
      <div className="progress-bar" id="progress-bar" aria-hidden="true" />

      {/* Mobile menu */}
      <nav className="mobile-menu" id="mobile-menu" aria-label="Menú de navegación móvil">
        <a href="#problem">Servicios</a>
        <a href="#about">José Taura</a>
        <a href="#audience">Para quién</a>
        <a href="#testimonials">Testimonios</a>
        <a
          href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"}
          target="_blank" rel="noopener noreferrer"
        >
          Primera llamada gratuita →
        </a>
      </nav>

      {/* ── NAV ── */}
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
            <a
              href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"}
              target="_blank" rel="noopener noreferrer"
              className="nav-cta"
            >
              Primera llamada →
            </a>
          </li>
        </ul>
        <button
          className="nav-toggle magnetic"
          id="nav-toggle"
          aria-label="Abrir menú de navegación"
          aria-expanded="false"
          aria-controls="mobile-menu"
        >
          <span /><span /><span />
        </button>
      </nav>

      <main id="main-content">

        {/* ══ HERO ═════════════════════════════════════════ */}
        <section id="hero" aria-label="Sección principal">
          <div className="hero-bg" id="hero-bg" role="img" aria-label="Vista aérea de ciudad de negocios" />
          <div className="hero-overlay" />

          <div className="hero-content">
            <p className="hero-eyebrow" id="hero-eyebrow">
              Consultoría · Coaching · Auditoría
            </p>
            <h1 className="hero-title" id="hero-title">
              Transforma tu<br />
              <em>Negocio.</em>
            </h1>
            <p className="hero-subtitle" id="hero-subtitle">
              Auditorías, Coaching y Consultoría Exclusiva para Empresarios del Sector Hotelero,
              Construcción e Instalaciones en Islas Baleares y Península.
            </p>
            <div className="hero-actions" id="hero-actions">
              <a
                href={WA_BASE + "Quiero%20m%C3%A1s%20informaci%C3%B3n"}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary magnetic"
                aria-label="Agenda tu primera llamada gratuita en WhatsApp"
              >
                🔥 Primera llamada GRATUITA
              </a>
              <a href="#about" className="btn-outline magnetic">
                Conocer a José →
              </a>
            </div>
          </div>

          {/* Stats */}
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
              <div className="stat-label">Años en Meliá Hotels</div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="scroll-indicator" id="scroll-indicator" aria-hidden="true">
            <span>Scroll</span>
            <div className="scroll-line" />
          </div>
        </section>

        {/* ══ PROBLEM ══════════════════════════════════════ */}
        <section id="problem" aria-labelledby="problem-title">
          <div className="container">
            <div className="problem-inner">

              {/* Image */}
              <div className="problem-img-wrap img-clip-wrap" id="problem-img">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80&fm=webp"
                  alt="Empresario reflexionando sobre el crecimiento de su negocio"
                  loading="lazy"
                  width={800} height={1000}
                />
                <div className="problem-img-overlay" />
              </div>

              {/* Text */}
              <div className="problem-text">
                <div className="section-label">El problema</div>
                <h2 className="problem-title" id="problem-title">
                  ¿Tu Negocio Pierde<br />
                  <em>Estructura y Rentabilidad?</em>
                </h2>
                <p className="problem-body">
                  El crecimiento de tu empresa no debe traducirse en caos y pérdida de control. Muchos
                  empresarios llegan a un punto en que saben que algo no funciona, pero no saben exactamente
                  qué ni cómo solucionarlo.
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
                <a
                  href="#services"
                  className="btn-outline magnetic"
                  style={{ marginTop: "0.5rem" }}
                >
                  Ver soluciones →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ SERVICES ══════════════════════════════════════ */}
        <section id="services" aria-labelledby="services-title">
          <div className="services-header container">
            <div className="section-label" style={{ justifyContent: "center" }}>Nuestros servicios</div>
            <h2 className="services-title" id="services-title">
              Una metodología <em>probada</em><br />para transformar tu empresa
            </h2>
          </div>

          {/* Panel 1 */}
          <div className="service-panel" id="panel-1">
            <div
              className="service-panel-bg" id="panel-1-bg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1920&q=80&fm=webp')" }}
              role="img" aria-label="Profesionales trabajando en productividad"
            />
            <div className="service-panel-overlay" />
            <div className="service-panel-content">
              <div className="section-label">01</div>
              <h3 className="service-panel-title">Incremento de la<br /><em>Productividad</em></h3>
              <p className="service-panel-text">
                Implementa estructuras eficientes mediante metodologías probadas que optimizan la gestión
                de equipos, mejoran los procesos internos y reducen costos operativos. No se trata de
                trabajar más, sino de trabajar mejor.
              </p>
              <a
                href={WA_BASE + "Me%20interesa%20el%20servicio%20de%20Productividad"}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline magnetic"
              >
                Consultar este servicio
              </a>
            </div>
            <div className="service-number" aria-hidden="true">01</div>
          </div>

          {/* Panel 2 */}
          <div className="service-panel" id="panel-2">
            <div
              className="service-panel-bg" id="panel-2-bg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80&fm=webp')" }}
              role="img" aria-label="Análisis financiero y reducción de costes"
            />
            <div className="service-panel-overlay" />
            <div className="service-panel-content">
              <div className="section-label">02</div>
              <h3 className="service-panel-title">Reducción<br /><em>de Costes</em></h3>
              <p className="service-panel-text">
                Optimiza recursos y reduce costos sin sacrificar calidad. Aplicamos metodologías
                estratégicas para eliminar ineficiencias, optimizar procesos y mejorar la gestión de
                equipos con auditorías y consultoría personalizada.
              </p>
              <a
                href={WA_BASE + "Me%20interesa%20la%20Reducci%C3%B3n%20de%20Costes"}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline magnetic"
              >
                Consultar este servicio
              </a>
            </div>
            <div className="service-number" aria-hidden="true">02</div>
          </div>

          {/* Panel 3 */}
          <div className="service-panel" id="panel-3">
            <div
              className="service-panel-bg" id="panel-3-bg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=1920&q=80&fm=webp')" }}
              role="img" aria-label="Equilibrio personal y profesional"
            />
            <div className="service-panel-overlay" />
            <div className="service-panel-content">
              <div className="section-label">03</div>
              <h3 className="service-panel-title">Equilibrio Personal<br /><em>y Profesional</em></h3>
              <p className="service-panel-text">
                El éxito empresarial no debería costarte tu bienestar personal. Estructura tu negocio con
                metodologías que optimizan la gestión y delegación, permitiéndote recuperar el control
                de tu tiempo.
              </p>
              <a
                href={WA_BASE + "Me%20interesa%20el%20Coaching%20de%20Equilibrio"}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline magnetic"
              >
                Consultar este servicio
              </a>
            </div>
            <div className="service-number" aria-hidden="true">03</div>
          </div>

          {/* Panel 4 */}
          <div className="service-panel" id="panel-4">
            <div
              className="service-panel-bg" id="panel-4-bg"
              style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=1920&q=80&fm=webp')" }}
              role="img" aria-label="Coaching de alto rendimiento"
            />
            <div className="service-panel-overlay" />
            <div className="service-panel-content">
              <div className="section-label">04</div>
              <h3 className="service-panel-title">Coaching de<br /><em>Alto Rendimiento</em></h3>
              <p className="service-panel-text">
                Transforma tu vida y tu negocio a través de un enfoque basado en el cambio de hábitos y
                el desarrollo del mindset. Con apoyo personalizado, construiremos juntos una nueva rutina
                que te impulse hacia la libertad y el éxito sostenido.
              </p>
              <a
                href={WA_BASE + "Me%20interesa%20el%20Coaching%20de%20Alto%20Rendimiento"}
                target="_blank" rel="noopener noreferrer"
                className="btn-outline magnetic"
              >
                Consultar este servicio
              </a>
            </div>
            <div className="service-number" aria-hidden="true">04</div>
          </div>
        </section>

        {/* ══ ABOUT ═════════════════════════════════════════ */}
        <section id="about" aria-labelledby="about-title">
          <div className="container">
            <div className="about-inner">

              {/* Image — foto real de José en avión */}
              <div style={{ position: "relative" }}>
                <div className="about-accent-line" />
                <div className="about-img-wrap img-clip-wrap" id="about-img">
                  <img
                    src={JOSE_AVION}
                    alt="José S. Taura, Consultor Empresarial y Coach de Alto Rendimiento"
                    loading="lazy"
                    width={800} height={1067}
                  />
                </div>
                <div className="about-badge">
                  <div className="about-badge-num">25+</div>
                  <div className="about-badge-text">Años de experiencia</div>
                </div>
              </div>

              {/* Text */}
              <div className="about-text">
                <div className="section-label">El experto</div>
                <h2 className="about-title" id="about-title">Conoce a José Taura</h2>
                <p className="about-subtitle">
                  Consultor Empresarial · Auditor · Coach de Alto Rendimiento
                </p>
                <p className="about-bio">
                  Con más de 25 años de experiencia, José Taura ha recorrido un camino excepcional en el
                  mundo empresarial, comenzando desde la base hasta liderar equipos de más de 150 empleados
                  y colaborar con grandes marcas como{" "}
                  <strong style={{ color: "var(--color-text)" }}>Meliá Hotels</strong>.
                </p>
                <p className="about-bio">
                  Su trayectoria lo ha convertido en un experto en la optimización de negocios,
                  reestructuración organizativa y mejora de procesos para autónomos y pymes, especialmente
                  en el sector de la construcción, instalaciones y hotelería.
                </p>

                <div className="about-highlights">
                  <div className="highlight-item">
                    <div className="highlight-icon">🏗️</div>
                    <div className="highlight-text">Experto en sector construcción e instalaciones</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🏨</div>
                    <div className="highlight-text">14 años asesorando a Meliá Hotels International</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">⚡</div>
                    <div className="highlight-text">Especialista en energías renovables y eficiencia</div>
                  </div>
                  <div className="highlight-item">
                    <div className="highlight-icon">🌱</div>
                    <div className="highlight-text">Colaborador con centros de desarrollo personal</div>
                  </div>
                </div>

                <a
                  href={WA_BASE + "Quiero%20hablar%20con%20Jos%C3%A9%20Taura"}
                  target="_blank" rel="noopener noreferrer"
                  className="btn-primary magnetic"
                >
                  Hablar con José →
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ══ AUDIENCE ══════════════════════════════════════ */}
        <section id="audience" aria-labelledby="audience-title">
          <div className="container">
            <div className="audience-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Para quién</div>
              <h2 className="audience-title" id="audience-title">
                ¿Son estos servicios <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>para ti?</em>
              </h2>
              <div className="divider" />
              <p style={{ color: "var(--color-text-muted)", maxWidth: "550px", margin: "0 auto", fontSize: "var(--text-base)", lineHeight: 1.7 }}>
                Descubre si nuestros servicios de auditoría, coaching y consultoría empresarial están
                diseñados para tu situación.
              </p>
            </div>

            <div className="audience-grid">
              {[
                { icon: "🏢", title: "Empresarios y Autónomos", text: "Si necesitas optimizar procesos y aumentar la rentabilidad de tu empresa de construcción, mantenimiento o energías renovables, nuestros servicios son para ti." },
                { icon: "📊", title: "Directivos en busca de Eficiencia", text: "Para líderes que desean implementar estrategias efectivas y mejorar la estructura organizacional, reduciendo el caos y aumentando el rendimiento de sus equipos." },
                { icon: "🏨", title: "Empresas Hoteleras", text: "¿Cansado del servicio ineficiente de tu departamento de Mantenimiento? Implementa metodologías para mejorar productividad, reducir costos y garantizar un servicio eficiente." },
                { icon: "🏘️", title: "PYMES Españolas", text: "Servicios especialmente diseñados para empresas en territorio nacional, tanto en Islas Baleares como en Península, asegurando un enfoque personalizado y relevante." },
                { icon: "🌿", title: "Agroturismos y Energía Renovable", text: "Asesoramiento experto en instalaciones renovables para agroturismos, hoteles y grandes infraestructuras. Evita errores costosos con planificación eficiente desde el inicio." },
                { icon: "🧠", title: "Personas en Proceso de Cambio", text: "Si buscas un cambio personal profundo, recuperar el equilibrio y construir hábitos saludables que transformen tu vida personal y profesional, José Taura puede acompañarte." },
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

        {/* ══ TESTIMONIALS ══════════════════════════════════ */}
        <section id="testimonials" aria-labelledby="testimonials-title">
          <div className="container">
            <div className="testimonials-header">
              <div className="section-label" style={{ justifyContent: "center" }}>Opiniones reales</div>
              <h2 className="testimonials-title" id="testimonials-title">
                Lo que dicen nuestros{" "}
                <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>clientes</em>
              </h2>
              <div className="divider" />
            </div>

            <div className="testimonials-grid">
              {[
                {
                  initial: "M",
                  quote: "Gracias a José Taura, nuestra empresa ha visto un incremento significativo en la productividad y una reducción en los costes operativos. Su enfoque personalizado ha sido clave para nuestro éxito.",
                  name: "María López",
                  role: "Gerente de Operaciones",
                },
                {
                  initial: "J",
                  quote: "José nos ayudó a reestructurar nuestros departamentos clave, lo que resultó en una operación más eficiente y rentable. Su conocimiento y experiencia son invaluables.",
                  name: "Juan Pérez García",
                  role: "Director General",
                },
                {
                  initial: "A",
                  quote: "La asesoría de José Taura fue fundamental para alcanzar un mejor equilibrio personal y profesional. Su coaching nos ha permitido optimizar procesos y mejorar la rentabilidad.",
                  name: "Ana Martínez",
                  role: "Consultora de Negocios",
                },
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

        {/* ══ FAQ ═══════════════════════════════════════════ */}
        <section id="faq" aria-labelledby="faq-title">
          <div className="container">
            <div className="faq-header">
              <div className="section-label" style={{ justifyContent: "center" }}>FAQ</div>
              <h2 className="faq-title" id="faq-title">Preguntas frecuentes</h2>
              <div className="divider" />
            </div>

            <div className="faq-list" role="list">
              {[
                {
                  q: "¿Qué tipo de empresas pueden beneficiarse de estos servicios?",
                  a: "Todo tipo de empresas, principalmente aquellas con departamento de mantenimiento e instalaciones en las Islas Baleares y la Península. Ya sea que busques optimizar procesos, reducir costos o mejorar la estructura, nuestros servicios de auditoría, coaching y consultoría están diseñados para ayudarte a alcanzar un crecimiento sostenible y rentable.",
                },
                {
                  q: "¿Qué incluye una sesión de coaching 1:1 con José Taura?",
                  a: "Cada sesión está personalizada para abordar tus necesidades específicas. Se trabajará en identificar áreas de mejora, establecer metas claras y desarrollar un plan de acción. Este enfoque individualizado asegura que recibas la atención necesaria para enfrentar tus desafíos y lograr un equilibrio personal y profesional más sólido. El coste se acuerda tras la primera llamada gratuita de valoración.",
                },
                {
                  q: "¿Cómo se realizan las auditorías empresariales?",
                  a: "Las auditorías implican un análisis exhaustivo de los procesos, estructura organizativa, gestión de equipos y finanzas de tu empresa. José Taura realiza un diagnóstico completo para identificar ineficiencias, oportunidades de mejora y propone un plan de acción concreto con métricas de seguimiento.",
                },
                {
                  q: "¿Trabajan solo en Islas Baleares o también en Península?",
                  a: "Trabajamos en todo el territorio nacional: tanto en Islas Baleares como en la Península. Muchos de nuestros servicios pueden realizarse de forma presencial o remota, lo que nos permite atender empresas de cualquier localización dentro de España.",
                },
                {
                  q: "¿Cuál es el primer paso para empezar?",
                  a: "El primer paso es agendar una llamada gratuita a través de WhatsApp. En esta llamada de valoración, José Taura escuchará tu situación, identificará tus necesidades principales y te explicará sin compromiso cómo podría ayudarte. Es completamente gratuita y sin ningún tipo de compromiso posterior.",
                },
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

        {/* ══ FINAL CTA ═════════════════════════════════════ */}
        <section id="cta-final" aria-labelledby="cta-title">
          <div className="cta-bg" id="cta-bg" />
          <div className="cta-overlay" />
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
              <a
                href={WA_BASE + "Quiero%20agendar%20mi%20llamada%20gratuita"}
                target="_blank" rel="noopener noreferrer"
                className="btn-primary magnetic"
                style={{ fontSize: "var(--text-base)", padding: "1.25rem 2.8rem" }}
              >
                🔥 Agenda tu llamada GRATUITA
              </a>
              <p className="cta-trust">
                ★★★★★ · Más de 400 clientes satisfechos · Islas Baleares y Península
              </p>
            </div>
          </div>
        </section>

      </main>

      {/* ── FOOTER ── */}
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
              <li>
                <a href="https://tjtaura.com/terms-of-use-and-privacy-policy.html" target="_blank" rel="noopener noreferrer">
                  Privacidad
                </a>
              </li>
            </ul>
            <p className="footer-copy">© 2025 José S. Taura · Todos los derechos reservados</p>
          </div>
        </div>
      </footer>

      {/* Schema.org */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
    </>
  );
}
