import { BackgroundPaths } from "@/components/ui/background-paths";

export default function Home() {
  return (
    <>
      {/* ══ NAV ══════════════════════════════════════════ */}
      <nav className="nav" id="nav">
        <div className="nav__inner">
          <a href="#" className="nav__logo">
            <img
              className="nav__logo-badge"
              src="https://i.ibb.co/JWFYxWRW/Foto-de-Perfil-Tj-Taura-removebg-preview.png"
              alt="José S. Taura"
              loading="eager"
            />
            <div className="nav__logo-text">
              <strong>José S. Taura</strong>
              <span>Consultor Empresarial</span>
            </div>
          </a>
          <ul className="nav__menu">
            <li><a href="#servicios" className="nav__link">Servicios</a></li>
            <li><a href="#sobre-jose" className="nav__link">Mi historia</a></li>
            <li><a href="#testimonios" className="nav__link">Testimonios</a></li>
            <li><a href="#eventos" className="nav__link">Eventos</a></li>
            <li><a href="#faq" className="nav__link">FAQ</a></li>
          </ul>
          <a
            href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20quiero%20agendar%20mi%20primera%20llamada%20gratuita"
            className="nav__cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            Consulta gratuita
          </a>
          <button className="nav__burger" id="burger" aria-label="Abrir menú">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>

      {/* ══ MOBILE MENU ═══════════════════════════════════ */}
      <div className="mobile-menu" id="mobileMenu">
        <ul>
          <li><a href="#servicios" className="mobile-link">Servicios</a></li>
          <li><a href="#sobre-jose" className="mobile-link">Mi historia</a></li>
          <li><a href="#testimonios" className="mobile-link">Testimonios</a></li>
          <li><a href="#eventos" className="mobile-link">Eventos</a></li>
          <li><a href="#faq" className="mobile-link">FAQ</a></li>
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=34609625573"
              className="mobile-cta"
              target="_blank"
              rel="noopener noreferrer"
            >
              Consulta gratuita · 30 min
            </a>
          </li>
        </ul>
      </div>

      {/* ══ HERO (React + framer-motion) ═══════════════════ */}
      <BackgroundPaths />

      {/* ══ MARQUEE BAND ══════════════════════════════════ */}
      <div className="text-band" aria-hidden="true">
        <div className="text-band__track">
          <span>Consultoría Empresarial</span><span className="text-band__dot">◆</span>
          <span>Auditorías Empresariales</span><span className="text-band__dot">◆</span>
          <span>Coaching de Alto Rendimiento</span><span className="text-band__dot">◆</span>
          <span>Islas Baleares · Menorca</span><span className="text-band__dot">◆</span>
          <span>Reducción de Costes</span><span className="text-band__dot">◆</span>
          <span>+25 Años de Experiencia</span><span className="text-band__dot">◆</span>
          <span>Optimización de Procesos</span><span className="text-band__dot">◆</span>
          <span>Sector Hotelero</span><span className="text-band__dot">◆</span>
          <span>Consultoría Empresarial</span><span className="text-band__dot">◆</span>
          <span>Auditorías Empresariales</span><span className="text-band__dot">◆</span>
          <span>Coaching de Alto Rendimiento</span><span className="text-band__dot">◆</span>
          <span>Islas Baleares · Menorca</span><span className="text-band__dot">◆</span>
          <span>Reducción de Costes</span><span className="text-band__dot">◆</span>
          <span>+25 Años de Experiencia</span><span className="text-band__dot">◆</span>
          <span>Optimización de Procesos</span><span className="text-band__dot">◆</span>
          <span>Sector Hotelero</span><span className="text-band__dot">◆</span>
        </div>
      </div>

      {/* ══ SERVICIOS ═════════════════════════════════════ */}
      <section className="section servicios" id="servicios">
        <div className="container">
          <div className="section-head">
            <p className="tag" data-reveal="">Lo que hago por ti</p>
            <h2 className="h2" data-reveal="">Servicios diseñados<br /><em>para resultados reales</em></h2>
          </div>
          <div className="services-grid">

            <div className="service-card" data-reveal="" data-delay="0">
              <div className="service-card__num">01</div>
              <div className="service-card__icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
                  <polygon points="24,4 44,14 44,34 24,44 4,34 4,14" strokeWidth="1.2" />
                  <line x1="24" y1="4" x2="24" y2="44" strokeWidth="0.8" strokeDasharray="3,4" opacity=".4" />
                  <line x1="4" y1="14" x2="44" y2="34" strokeWidth="0.8" strokeDasharray="3,4" opacity=".4" />
                  <line x1="44" y1="14" x2="4" y2="34" strokeWidth="0.8" strokeDasharray="3,4" opacity=".4" />
                  <circle cx="24" cy="24" r="4" fill="currentColor" opacity=".8" />
                </svg>
              </div>
              <h3>Incremento de la Productividad</h3>
              <p>Metodologías probadas que optimizan la gestión de equipos, mejoran los procesos internos y reducen costes operativos para que tu empresa funcione al máximo nivel.</p>
              <div className="service-card__bar"></div>
            </div>

            <div className="service-card" data-reveal="" data-delay="0.1">
              <div className="service-card__num">02</div>
              <div className="service-card__icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
                  <line x1="8" y1="40" x2="8" y2="24" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18" y1="40" x2="18" y2="16" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="28" y1="40" x2="28" y2="8" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="38" y1="40" x2="38" y2="18" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M8 24 L18 16 L28 8 L38 18" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
                  <polyline points="32,8 38,8 38,14" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                  <line x1="4" y1="40" x2="44" y2="40" strokeWidth="1" opacity=".3" />
                </svg>
              </div>
              <h3>Reducción de Costes</h3>
              <p>Optimización estratégica de recursos manteniendo los estándares de calidad. Identificamos y eliminamos ineficiencias para mejorar tu margen de beneficio real.</p>
              <div className="service-card__bar"></div>
            </div>

            <div className="service-card" data-reveal="" data-delay="0.2">
              <div className="service-card__num">03</div>
              <div className="service-card__icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
                  <circle cx="24" cy="24" r="18" strokeWidth="1.2" />
                  <ellipse cx="24" cy="24" rx="8" ry="18" strokeWidth="1.2" />
                  <line x1="6" y1="24" x2="42" y2="24" strokeWidth="1.2" />
                  <line x1="9" y1="15" x2="39" y2="15" strokeWidth=".7" strokeDasharray="2,3" opacity=".5" />
                  <line x1="9" y1="33" x2="39" y2="33" strokeWidth=".7" strokeDasharray="2,3" opacity=".5" />
                </svg>
              </div>
              <h3>Mejora del Equilibrio</h3>
              <p>Te ayudo a estructurar tu empresa para lograr el equilibrio real entre vida profesional y personal, sin sacrificar el crecimiento ni la rentabilidad del negocio.</p>
              <div className="service-card__bar"></div>
            </div>

            <div className="service-card" data-reveal="" data-delay="0.3">
              <div className="service-card__num">04</div>
              <div className="service-card__icon">
                <svg viewBox="0 0 48 48" fill="none" stroke="currentColor">
                  <path d="M24 8 C24 8 14 16 14 26 C14 32 18 37 23 38 L23 44" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M24 8 C24 8 34 16 34 26 C34 32 30 37 25 38 L25 44" strokeWidth="1.5" strokeLinecap="round" />
                  <line x1="19" y1="44" x2="29" y2="44" strokeWidth="2.5" strokeLinecap="round" />
                  <line x1="18" y1="30" x2="30" y2="30" strokeWidth=".8" strokeDasharray="2,3" opacity=".5" />
                </svg>
              </div>
              <h3>Superación Personal</h3>
              <p>Acompañamiento integral que combina metodología de cambio de hábitos con apoyo físico y mental, para superar bloqueos y alcanzar tu máximo potencial.</p>
              <div className="service-card__bar"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ PARA QUIÉN ═════════════════════════════════════ */}
      <section className="section para-quien" id="para-quien">
        <div className="container">
          <div className="section-head">
            <p className="tag" data-reveal="">¿Es para ti?</p>
            <h2 className="h2" data-reveal="">Trabajo con líderes<br /><em>que exigen resultados</em></h2>
          </div>
          <div className="audience-grid">

            <div className="audience-item" data-reveal="" data-delay="0">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="18" width="26" height="11" rx="1.5" />
                  <path d="M3 18 L16 6 L29 18" />
                  <rect x="13" y="22" width="6" height="7" />
                  <line x1="7" y1="22" x2="7" y2="25" /><line x1="11" y1="22" x2="11" y2="25" />
                  <line x1="21" y1="22" x2="21" y2="25" /><line x1="25" y1="22" x2="25" y2="25" />
                </svg>
              </div>
              <h3>Empresarios y Autónomos</h3>
              <p>Construcción, mantenimiento y energías renovables</p>
            </div>

            <div className="audience-item" data-reveal="" data-delay="0.07">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="4,26 10,18 16,22 22,12 28,6" />
                  <polyline points="24,6 28,6 28,10" />
                  <line x1="4" y1="29" x2="28" y2="29" />
                  <line x1="4" y1="4" x2="4" y2="29" />
                </svg>
              </div>
              <h3>Directivos de Eficiencia</h3>
              <p>Líderes que optimizan operaciones sin perder calidad</p>
            </div>

            <div className="audience-item" data-reveal="" data-delay="0.14">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="6" y="14" width="20" height="14" rx="1" />
                  <path d="M10 14 L10 10 C10 7.8 12.7 6 16 6 C19.3 6 22 7.8 22 10 L22 14" />
                  <circle cx="16" cy="21" r="2.5" />
                  <line x1="16" y1="23.5" x2="16" y2="26" />
                </svg>
              </div>
              <h3>PYMEs Españolas</h3>
              <p>Empresas que buscan escalar con solidez y rentabilidad</p>
            </div>

            <div className="audience-item" data-reveal="" data-delay="0.21">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="26" height="24" rx="2" />
                  <line x1="3" y1="10" x2="29" y2="10" />
                  <line x1="10" y1="4" x2="10" y2="10" />
                  <line x1="22" y1="4" x2="22" y2="10" />
                  <rect x="10" y="16" width="12" height="10" />
                  <line x1="16" y1="16" x2="16" y2="26" />
                </svg>
              </div>
              <h3>Empresas Hoteleras</h3>
              <p>Complejos turísticos en Baleares y Península Ibérica</p>
            </div>

            <div className="audience-item" data-reveal="" data-delay="0.28">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 26 L16 16" />
                  <path d="M16 16 C16 16 22 14 24 7 C17 5 10 9 9 16 C9 21 12 24.5 16 26" />
                  <path d="M16 16 C16 16 10 14 8 7 C15 5 22 9 23 16" opacity=".5" />
                </svg>
              </div>
              <h3>Agroturismos</h3>
              <p>Gestión eficiente de instalaciones y servicios rurales</p>
            </div>

            <div className="audience-item" data-reveal="" data-delay="0.35">
              <div className="audience-item__icon">
                <svg viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="16,4 22,7.5 22,14.5 16,18 10,14.5 10,7.5" />
                  <polygon points="16,10 19,11.75 19,15.25 16,17 13,15.25 13,11.75" />
                  <line x1="10" y1="14.5" x2="4" y2="18" /><line x1="4" y1="18" x2="4" y2="25" /><line x1="4" y1="25" x2="10" y2="28.5" />
                  <line x1="22" y1="14.5" x2="28" y2="18" /><line x1="28" y1="18" x2="28" y2="25" /><line x1="28" y1="25" x2="22" y2="28.5" />
                  <line x1="16" y1="18" x2="16" y2="28" />
                </svg>
              </div>
              <h3>Grandes Infraestructuras</h3>
              <p>Gestores de proyectos de gran envergadura y complejidad</p>
            </div>

          </div>
        </div>
      </section>

      {/* ══ SOBRE JOSÉ ═════════════════════════════════════ */}
      <section className="section sobre-jose" id="sobre-jose">
        <div className="container">
          <div className="sobre-jose__layout">

            <div className="sobre-jose__visual" data-reveal="">
              <div className="sj-card">
                <div className="sj-card__rings">
                  <div className="sj-card__ring sj-card__ring--1"></div>
                  <div className="sj-card__ring sj-card__ring--2"></div>
                  <div className="sj-card__ring sj-card__ring--3"></div>
                </div>
                <img
                  className="sj-card__photo"
                  src="https://i.ibb.co/JWFYxWRW/Foto-de-Perfil-Tj-Taura-removebg-preview.png"
                  alt="José S. Taura"
                  loading="lazy"
                  style={{ background: 'var(--bg2)' }}
                />
              </div>
              <div className="sj-stats">
                <div className="sj-stat"><span className="sj-stat__n">25+</span><span className="sj-stat__l">Años liderando equipos</span></div>
                <div className="sj-stat"><span className="sj-stat__n">150+</span><span className="sj-stat__l">Personas a su cargo</span></div>
                <div className="sj-stat"><span className="sj-stat__n">14</span><span className="sj-stat__l">Años asesorando turismo</span></div>
              </div>
            </div>

            <div className="sobre-jose__text">
              <p className="tag" data-reveal="">Mi historia</p>
              <h2 className="h2" data-reveal="">De trabajador a<br /><em>referente del sector</em></h2>
              <div className="bio-timeline">
                <div className="bio-step" data-reveal="" data-delay="0">
                  <div className="bio-step__dot"></div>
                  <p>Empecé desde abajo y ascendí posición a posición hasta liderar equipos de más de <strong>150 personas</strong>, colaborando con grandes marcas como <strong>Meliá Hotels</strong>.</p>
                </div>
                <div className="bio-step" data-reveal="" data-delay="0.1">
                  <div className="bio-step__dot"></div>
                  <p>Fundé <strong>J.S.T. Instalaciones</strong>, donde ejecuté más de <strong>450 proyectos residenciales simultáneos</strong>. Esa experiencia me enseñó a gestionar complejidad y liderar bajo presión.</p>
                </div>
                <div className="bio-step" data-reveal="" data-delay="0.2">
                  <div className="bio-step__dot"></div>
                  <p>Durante <strong>14 años</strong> he asesorado complejos turísticos y empresas en Baleares y la Península, con enfoque siempre práctico y orientado a resultados medibles.</p>
                </div>
                <div className="bio-step" data-reveal="" data-delay="0.3">
                  <div className="bio-step__dot"></div>
                  <p>Tengo además un compromiso social profundo: trabajar con centros de desintoxicación, ayudando a personas a recuperar el control de sus vidas.</p>
                </div>
              </div>
              <a
                href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20me%20gustaría%20conocerte%20y%20hablar%20sobre%20mi%20empresa"
                className="btn btn-primary"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal=""
                data-delay="0.4"
              >
                <span className="btn__text">Habla conmigo hoy</span>
                <span className="btn__icon">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h12M10 4l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ══ CTA MID ════════════════════════════════════════ */}
      <section className="cta-mid">
        <div className="cta-mid__bg"></div>
        <div className="container">
          <div className="cta-mid__inner">
            <p className="tag" style={{ color: 'var(--gold-light)' }} data-reveal="">Sin compromiso</p>
            <h2 className="cta-mid__title" data-reveal="">Primera consulta<br /><em>completamente gratuita</em></h2>
            <p className="cta-mid__sub" data-reveal="">30 minutos con José Taura para evaluar tu situación<br />y trazar el camino más adecuado para tu empresa.</p>
            <a
              href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20quiero%20agendar%20mi%20primera%20llamada%20gratuita%20de%2030%20minutos"
              className="btn btn-gold"
              target="_blank"
              rel="noopener noreferrer"
              data-reveal=""
            >
              <span className="btn__text">Agenda tu sesión HOY</span>
              <span className="btn__icon">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3.4-.5 4.9-1.3l3 .8c.4.1.8-.3.7-.7l-.8-3C21.5 16.2 22 14.6 22 13v-1C22 6.5 17.5 2 12 2zm4.3 11.5l-1.3.7c-2 1-5.3-.3-6.8-1.7C6.7 11 5.3 7.9 6.3 6.2l.7-1.3c.2-.4.7-.6 1.1-.4l2 .7c.4.1.6.5.6.9V8c0 .4-.2.7-.6.9l-.9.4c.4.9 1.4 1.9 2.3 2.3l.4-.9c.2-.4.5-.6.9-.6H14c.4 0 .7.2.9.6l.7 2c.2.5-.1 1-.3 1.3z" /></svg>
              </span>
            </a>
          </div>
        </div>
      </section>

      {/* ══ NICHOS ═════════════════════════════════════════ */}
      <section className="section nichos" id="nichos">
        <div className="container">
          <div className="section-head">
            <p className="tag" data-reveal="">Especialización</p>
            <h2 className="h2" data-reveal="">Sectores donde<br /><em>genero más impacto</em></h2>
          </div>
          <div className="nichos-grid">

            <div className="nicho-card" data-reveal="" data-delay="0">
              <div className="nicho-card__glow nicho-card__glow--1"></div>
              <div className="nicho-card__icon">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M6 34 L6 20 L20 8 L34 20 L34 34" />
                  <rect x="14" y="24" width="12" height="10" />
                  <line x1="14" y1="24" x2="14" y2="20" /><line x1="26" y1="24" x2="26" y2="20" />
                  <line x1="3" y1="20" x2="37" y2="20" strokeWidth="1" />
                  <rect x="10" y="13" width="8" height="6" />
                </svg>
              </div>
              <h3>Construcción e Instalaciones</h3>
              <p>Asesoría especializada para empresas que gestionan operaciones de mantenimiento. Optimizo procesos, reduzco tiempos muertos y mejoro la rentabilidad en sector técnico.</p>
              <div className="nicho-card__corner"></div>
            </div>

            <div className="nicho-card" data-reveal="" data-delay="0.12">
              <div className="nicho-card__glow nicho-card__glow--2"></div>
              <div className="nicho-card__icon">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="6" width="32" height="28" rx="2" />
                  <line x1="4" y1="14" x2="36" y2="14" />
                  <line x1="13" y1="6" x2="13" y2="14" />
                  <line x1="27" y1="6" x2="27" y2="14" />
                  <rect x="13" y="20" width="14" height="12" />
                  <line x1="20" y1="20" x2="20" y2="32" />
                </svg>
              </div>
              <h3>Operaciones Hoteleras</h3>
              <p>Especialización en eficiencia de departamentos de mantenimiento y reducción del coste de servicios en empresas hoteleras de Baleares y Península.</p>
              <div className="nicho-card__corner"></div>
            </div>

            <div className="nicho-card" data-reveal="" data-delay="0.24">
              <div className="nicho-card__glow nicho-card__glow--3"></div>
              <div className="nicho-card__icon">
                <svg viewBox="0 0 40 40" fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="20" cy="20" r="8" />
                  <line x1="20" y1="4" x2="20" y2="8" />
                  <line x1="20" y1="32" x2="20" y2="36" />
                  <line x1="4" y1="20" x2="8" y2="20" />
                  <line x1="32" y1="20" x2="36" y2="20" />
                  <line x1="8.6" y1="8.6" x2="11.4" y2="11.4" />
                  <line x1="28.6" y1="28.6" x2="31.4" y2="31.4" />
                  <line x1="31.4" y1="8.6" x2="28.6" y2="11.4" />
                  <line x1="8.6" y1="31.4" x2="11.4" y2="28.6" />
                  <path d="M14 20 Q14 14 20 14 Q26 14 26 20" strokeDasharray="2,2" opacity=".5" />
                </svg>
              </div>
              <h3>Energía Renovable y Agroturismo</h3>
              <p>Consultoría experta para instalaciones aisladas, picos de tensión, sistemas de bombeo y gestión eficiente de energía. Evita los errores más costosos del sector.</p>
              <div className="nicho-card__corner"></div>
            </div>

          </div>
        </div>
      </section>

      {/* ══ TESTIMONIOS ════════════════════════════════════ */}
      <section className="section testimonios" id="testimonios">
        <div className="container">
          <div className="section-head">
            <p className="tag" data-reveal="">Lo que dicen</p>
            <h2 className="h2" data-reveal="">Clientes que<br /><em>transformaron sus empresas</em></h2>
          </div>
        </div>
        <div className="marquee-wrapper">
          <div className="marquee-track" id="marqueeTrack">
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;Gracias a la consultoría de José, incrementamos nuestra productividad de manera significativa y redujimos costes considerablemente. Su enfoque personalizado marcó la diferencia.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">ML</div><div><strong>María López</strong><span>Gerente de Operaciones</span></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;José reestructuró por completo nuestros departamentos. Hoy operamos de forma eficiente y rentable. No podría recomendar más sus servicios a cualquier empresa que quiera crecer.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">JP</div><div><strong>Juan Pérez García</strong><span>Director General</span></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;Conseguí el equilibrio entre mi vida personal y profesional que creía imposible. La empresa creció y yo recuperé mi tiempo. José tiene un don para ver lo que otros no ven.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">AM</div><div><strong>Ana Martínez</strong><span>Consultora de Negocios</span></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;Gracias a la consultoría de José, incrementamos nuestra productividad de manera significativa y redujimos costes considerablemente. Su enfoque personalizado marcó la diferencia.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">ML</div><div><strong>María López</strong><span>Gerente de Operaciones</span></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;José reestructuró por completo nuestros departamentos. Hoy operamos de forma eficiente y rentable. No podría recomendar más sus servicios a cualquier empresa que quiera crecer.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">JP</div><div><strong>Juan Pérez García</strong><span>Director General</span></div></div>
            </div>
            <div className="testi-card">
              <div className="testi-stars">★★★★★</div>
              <blockquote>&ldquo;Conseguí el equilibrio entre mi vida personal y profesional que creía imposible. La empresa creció y yo recuperé mi tiempo.&rdquo;</blockquote>
              <div className="testi-author"><div className="testi-avatar">AM</div><div><strong>Ana Martínez</strong><span>Consultora de Negocios</span></div></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FAQ ════════════════════════════════════════════ */}
      <section className="section faq" id="faq">
        <div className="container">
          <div className="faq__layout">
            <div className="faq__header">
              <p className="tag" data-reveal="">FAQ</p>
              <h2 className="h2" data-reveal="">Todo lo que<br /><em>necesitas saber</em></h2>
              <a
                href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20tengo%20una%20pregunta"
                className="btn btn-ghost"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal=""
              >
                ¿Más dudas? Escríbeme
              </a>
            </div>
            <div className="faq__items">
              <div className="faq-item" data-reveal="" data-delay="0">
                <button className="faq-item__q">
                  <span>¿Qué tipo de empresas se benefician más?</span>
                  <span className="faq-item__icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" /></svg></span>
                </button>
                <div className="faq-item__a"><p>Principalmente empresas con departamentos de mantenimiento e instalaciones en Baleares y Península que buscan optimizar procesos y reducir costes. También trabajo con autónomos del sector construcción, mantenimiento y energías renovables.</p></div>
              </div>
              <div className="faq-item" data-reveal="" data-delay="0.08">
                <button className="faq-item__q">
                  <span>¿Qué incluye el coaching 1:1?</span>
                  <span className="faq-item__icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" /></svg></span>
                </button>
                <div className="faq-item__a"><p>Sesiones personalizadas para identificar áreas de mejora en tu empresa y en ti como líder. Establecemos objetivos claros y desarrollamos planes de acción concretos. El precio se determina tras la consulta inicial gratuita.</p></div>
              </div>
              <div className="faq-item" data-reveal="" data-delay="0.16">
                <button className="faq-item__q">
                  <span>¿Cómo se realizan las auditorías?</span>
                  <span className="faq-item__icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" /></svg></span>
                </button>
                <div className="faq-item__a"><p>Análisis exhaustivo de tus operaciones actuales para identificar puntos de mejora. Examinamos procesos internos, eficiencia departamental y oportunidades de optimización de costes. Entregas: informe detallado + plan de acción.</p></div>
              </div>
              <div className="faq-item" data-reveal="" data-delay="0.24">
                <button className="faq-item__q">
                  <span>¿Qué formación ofreces a equipos?</span>
                  <span className="faq-item__icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" /></svg></span>
                </button>
                <div className="faq-item__a"><p>Programas en gestión de proyectos, técnicas de liderazgo, optimización de procesos y estrategias de crecimiento. Todos los programas se adaptan a las necesidades específicas de cada equipo y sector.</p></div>
              </div>
              <div className="faq-item" data-reveal="" data-delay="0.32">
                <button className="faq-item__q">
                  <span>¿En qué consiste la primera sesión gratuita?</span>
                  <span className="faq-item__icon"><svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><line x1="10" y1="4" x2="10" y2="16" /><line x1="4" y1="10" x2="16" y2="10" /></svg></span>
                </button>
                <div className="faq-item__a"><p>Una llamada de 30 minutos con José Taura donde evaluamos tu situación actual, identificamos los principales puntos de mejora y recomendamos los servicios más adecuados. Sin ningún compromiso.</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ EVENTOS ══════════════════════════════════════════ */}
      <section className="section eventos" id="eventos">
        <div className="container">
          <div className="eventos__layout">
            <div className="eventos__text">
              <p className="tag" data-reveal="">Más allá del negocio</p>
              <h2 className="h2" data-reveal="">Eventos &amp;<br /><em>Motonautica Menorca</em></h2>
              <p className="eventos__desc" data-reveal="">José Taura no solo transforma empresas — también forma parte activa de los grandes eventos de Menorca. Competiciones náuticas, actividades de alto octanaje y momentos únicos que definen la cultura de la isla.</p>
              <div className="eventos__badges" data-reveal="">
                <span className="eventos__badge">Motonautica</span>
                <span className="eventos__badge">Menorca</span>
                <span className="eventos__badge">Competición</span>
                <span className="eventos__badge">Eventos 2025</span>
              </div>
              <a
                href="https://motonauticamenorca.com"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
                data-reveal=""
                data-delay="0.1"
              >
                <span className="btn__text">Ver todos los eventos</span>
                <span className="btn__icon">
                  <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 10h12M10 4l6 6-6 6" /></svg>
                </span>
              </a>
            </div>
            <div className="eventos__visual" data-reveal="" data-delay="0.15">
              <div className="eventos__card">
                <div className="eventos__card-glow"></div>
                <img
                  className="eventos__logo"
                  src="https://i.ibb.co/TqWfLbjn/Universal-Upscaler-0d85729c-db5e-4eea-8351-a3ac3699e796-removebg-preview.png"
                  alt="TJ Taura Eventos Menorca"
                  loading="lazy"
                />
                <div className="eventos__card-label">
                  <span className="eventos__card-site">motonauticamenorca.com</span>
                  <span className="eventos__card-arrow">
                    <svg viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16"><path d="M4 10h12M10 4l6 6-6 6" /></svg>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FINAL CTA ══════════════════════════════════════ */}
      <section className="final-cta">
        <div className="final-cta__bg">
          <div className="final-cta__orb final-cta__orb--1"></div>
          <div className="final-cta__orb final-cta__orb--2"></div>
        </div>
        <div className="container">
          <div className="final-cta__inner">
            <p className="tag" style={{ color: 'var(--gold-light)' }} data-reveal="">¿Listo para el cambio?</p>
            <h2 className="final-cta__title" data-reveal="">Tu empresa puede<br /><em>rendir mucho más</em></h2>
            <p className="final-cta__sub" data-reveal="">Islas Baleares · Península Ibérica · Empresas que exigen resultados</p>
            <div className="final-cta__actions" data-reveal="">
              <a
                href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20quiero%20agendar%20mi%20primera%20llamada%20gratuita"
                className="btn btn-primary btn-lg"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="btn__text">Pregúntame ahora por WhatsApp</span>
                <span className="btn__icon">
                  <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3.4-.5 4.9-1.3l3 .8c.4.1.8-.3.7-.7l-.8-3C21.5 16.2 22 14.6 22 13v-1C22 6.5 17.5 2 12 2zm4.3 11.5l-1.3.7c-2 1-5.3-.3-6.8-1.7C6.7 11 5.3 7.9 6.3 6.2l.7-1.3c.2-.4.7-.6 1.1-.4l2 .7c.4.1.6.5.6.9V8c0 .4-.2.7-.6.9l-.9.4c.4.9 1.4 1.9 2.3 2.3l.4-.9c.2-.4.5-.6.9-.6H14c.4 0 .7.2.9.6l.7 2c.2.5-.1 1-.3 1.3z" /></svg>
                </span>
              </a>
              <div className="final-cta__tel"><span>O llámame:</span><a href="tel:+34609625573">+34 609 625 573</a></div>
            </div>
          </div>
        </div>
      </section>

      {/* ══ FOOTER ═════════════════════════════════════════ */}
      <footer className="footer">
        <div className="container">
          <div className="footer__top">
            <div className="footer__brand">
              <img
                className="nav__logo-badge"
                src="https://i.ibb.co/JWFYxWRW/Foto-de-Perfil-Tj-Taura-removebg-preview.png"
                alt="José S. Taura"
                loading="lazy"
                style={{ width: '40px', height: '40px', background: 'var(--bg2)' }}
              />
              <div className="footer__brand-text"><strong>José S. Taura</strong><span>Consultor · Auditor · Coach</span></div>
            </div>
            <nav className="footer__nav">
              <a href="#servicios">Servicios</a><a href="#sobre-jose">Sobre mí</a>
              <a href="#testimonios">Testimonios</a><a href="#faq">FAQ</a>
              <a href="/politica-privacidad">Privacidad</a>
            </nav>
            <div className="footer__contact">
              <a href="https://api.whatsapp.com/send?phone=34609625573" target="_blank" rel="noopener noreferrer" className="footer__wa">
                <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3.4-.5 4.9-1.3l3 .8c.4.1.8-.3.7-.7l-.8-3C21.5 16.2 22 14.6 22 13v-1C22 6.5 17.5 2 12 2zm4.3 11.5l-1.3.7c-2 1-5.3-.3-6.8-1.7C6.7 11 5.3 7.9 6.3 6.2l.7-1.3c.2-.4.7-.6 1.1-.4l2 .7c.4.1.6.5.6.9V8c0 .4-.2.7-.6.9l-.9.4c.4.9 1.4 1.9 2.3 2.3l.4-.9c.2-.4.5-.6.9-.6H14c.4 0 .7.2.9.6l.7 2c.2.5-.1 1-.3 1.3z" /></svg>
                +34 609 625 573
              </a>
              <span className="footer__area">Islas Baleares · Península Ibérica</span>
            </div>
          </div>
          <div className="footer__bottom">
            <p>© 2025 José S. Taura · Consultoría Empresarial. Todos los derechos reservados.</p>
            <p>Diseño web: <a href="https://lucasyleodigital.com" target="_blank" rel="noopener noreferrer">Lucas y Leo Digital</a></p>
          </div>
        </div>
      </footer>

      {/* ══ WHATSAPP FLOAT ═══════════════════════════════════ */}
      <a
        href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20me%20interesa%20tu%20consultoría"
        className="wa-float"
        id="waFloat"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c1.7 0 3.4-.5 4.9-1.3l3 .8c.4.1.8-.3.7-.7l-.8-3C21.5 16.2 22 14.6 22 13v-1C22 6.5 17.5 2 12 2zm4.3 11.5l-1.3.7c-2 1-5.3-.3-6.8-1.7C6.7 11 5.3 7.9 6.3 6.2l.7-1.3c.2-.4.7-.6 1.1-.4l2 .7c.4.1.6.5.6.9V8c0 .4-.2.7-.6.9l-.9.4c.4.9 1.4 1.9 2.3 2.3l.4-.9c.2-.4.5-.6.9-.6H14c.4 0 .7.2.9.6l.7 2c.2.5-.1 1-.3 1.3z" /></svg>
        <span>Consulta gratis</span>
      </a>
    </>
  );
}
