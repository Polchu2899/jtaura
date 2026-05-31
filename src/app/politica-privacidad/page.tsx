import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Aviso Legal, Política de Privacidad y Cookies | José S. Taura",
  description: "Aviso legal, política de privacidad y política de cookies de tjtaura.com · Luxury Investment And Projects Island Territory, S.L.",
  robots: { index: false, follow: false },
};

export default function PoliticaPrivacidad() {
  return (
    <div className="legal-page">
      <div className="legal-container">

        {/* Nav back */}
        <a href="/jtaura/" className="legal-back">← Volver a inicio</a>

        <h1 className="legal-main-title">Aviso Legal, Política de Privacidad y Cookies</h1>
        <p className="legal-updated">Última actualización: junio 2025</p>

        {/* ══ AVISO LEGAL ══ */}
        <section className="legal-section">
          <h2>1. Aviso Legal</h2>
          <p>
            En cumplimiento con el deber de información establecido en la Ley 34/2002, de Servicios de la Sociedad de la Información y del Comercio Electrónico (LSSI-CE), se facilitan los siguientes datos del titular del sitio web:
          </p>
          <table className="legal-table">
            <tbody>
              <tr><td><strong>Denominación social</strong></td><td>Luxury Investment And Projects Island Territory, S.L.</td></tr>
              <tr><td><strong>NIF</strong></td><td>B16649808</td></tr>
              <tr><td><strong>Domicilio</strong></td><td>Es Castell, Illes Balears, España</td></tr>
              <tr><td><strong>Sitio web</strong></td><td><a href="https://tjtaura.com" target="_blank" rel="noopener noreferrer">tjtaura.com</a></td></tr>
              <tr><td><strong>Contacto</strong></td><td><a href="https://api.whatsapp.com/send?phone=34609625573" target="_blank" rel="noopener noreferrer">+34 609 625 573</a></td></tr>
              <tr><td><strong>Diseño y desarrollo web</strong></td><td><a href="https://lucasyleodigital.com" target="_blank" rel="noopener noreferrer">Lucas y Leo Digital</a></td></tr>
            </tbody>
          </table>
          <p>
            El titular se reserva el derecho a modificar los contenidos del sitio web en cualquier momento y sin previo aviso. El acceso y uso del sitio web implica la aceptación plena de las presentes condiciones legales.
          </p>
          <h3>1.1 Propiedad intelectual e industrial</h3>
          <p>
            Todos los contenidos del sitio web —incluyendo textos, imágenes, logotipos, diseños, programación y cualquier otro elemento— son titularidad de Luxury Investment And Projects Island Territory, S.L. o de terceros que han autorizado su uso. Queda expresamente prohibida su reproducción, distribución, comunicación pública o transformación sin autorización escrita del titular.
          </p>
          <h3>1.2 Responsabilidad</h3>
          <p>
            El titular no se hace responsable de los daños que pudieran derivarse de la utilización de los contenidos, servicios o información del sitio web, ni de los contenidos de terceros accesibles a través de enlaces externos. El titular se compromete a eliminar o deshabilitar los contenidos que resulten ilícitos o lesivos en cuanto tenga conocimiento efectivo de ello.
          </p>
        </section>

        {/* ══ PRIVACIDAD ══ */}
        <section className="legal-section">
          <h2>2. Política de Privacidad</h2>
          <p>
            En cumplimiento del Reglamento (UE) 2016/679 (RGPD) y la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD), le informamos sobre el tratamiento de sus datos personales.
          </p>

          <h3>2.1 Responsable del tratamiento</h3>
          <table className="legal-table">
            <tbody>
              <tr><td><strong>Responsable</strong></td><td>Luxury Investment And Projects Island Territory, S.L.</td></tr>
              <tr><td><strong>NIF</strong></td><td>B16649808</td></tr>
              <tr><td><strong>Contacto</strong></td><td>+34 609 625 573</td></tr>
            </tbody>
          </table>

          <h3>2.2 Finalidades del tratamiento</h3>
          <ul>
            <li>Gestionar las consultas, solicitudes de información y contacto realizadas a través de los formularios del sitio web o vía WhatsApp.</li>
            <li>Enviar comunicaciones comerciales sobre servicios de consultoría, auditoría y coaching, previa autorización expresa del usuario.</li>
            <li>Realizar estudios de mercado y análisis estadísticos para mejorar nuestros servicios.</li>
            <li>Gestionar el envío de newsletters e información de interés cuando el usuario se haya suscrito expresamente.</li>
          </ul>

          <h3>2.3 Base jurídica</h3>
          <ul>
            <li><strong>Consentimiento del interesado</strong> (Art. 6.1.a RGPD): para el envío de comunicaciones comerciales y newsletters.</li>
            <li><strong>Interés legítimo</strong> (Art. 6.1.f RGPD): para el análisis estadístico y la mejora del servicio.</li>
            <li><strong>Ejecución de un contrato</strong> (Art. 6.1.b RGPD): para la prestación de los servicios solicitados.</li>
          </ul>

          <h3>2.4 Destinatarios</h3>
          <p>
            Los datos no serán cedidos a terceros salvo obligación legal. Para la gestión de comunicaciones podemos utilizar plataformas de terceros (p. ej. WhatsApp Business) que actúan como encargados del tratamiento bajo los acuerdos correspondientes.
          </p>

          <h3>2.5 Conservación de los datos</h3>
          <p>
            Los datos se conservarán durante el tiempo necesario para cumplir con la finalidad para la que fueron recabados y para atender las posibles responsabilidades derivadas del tratamiento. Una vez cumplida la finalidad, los datos serán suprimidos de forma segura.
          </p>

          <h3>2.6 Derechos de los usuarios</h3>
          <p>
            Puede ejercer los siguientes derechos dirigiéndose al responsable del tratamiento por WhatsApp (+34 609 625 573):
          </p>
          <ul>
            <li><strong>Acceso:</strong> conocer qué datos tratamos sobre usted.</li>
            <li><strong>Rectificación:</strong> solicitar la corrección de datos inexactos.</li>
            <li><strong>Supresión:</strong> solicitar la eliminación de sus datos.</li>
            <li><strong>Oposición:</strong> oponerse al tratamiento de sus datos.</li>
            <li><strong>Limitación:</strong> solicitar la restricción del tratamiento.</li>
            <li><strong>Portabilidad:</strong> recibir sus datos en formato estructurado.</li>
            <li><strong>Retirada del consentimiento:</strong> en cualquier momento, sin que ello afecte a la licitud del tratamiento previo.</li>
          </ul>
          <p>
            Si considera que el tratamiento de sus datos vulnera la normativa, tiene derecho a presentar una reclamación ante la Agencia Española de Protección de Datos (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
          </p>
        </section>

        {/* ══ COOKIES ══ */}
        <section className="legal-section">
          <h2>3. Política de Cookies</h2>
          <p>
            Este sitio web utiliza cookies propias y de terceros para mejorar la experiencia de navegación y analizar el tráfico.
          </p>

          <h3>3.1 ¿Qué son las cookies?</h3>
          <p>
            Las cookies son pequeños archivos de texto que se almacenan en el dispositivo del usuario al visitar un sitio web. Permiten recordar preferencias, analizar el comportamiento de navegación y personalizar la experiencia.
          </p>

          <h3>3.2 Tipos de cookies utilizadas</h3>
          <table className="legal-table">
            <thead>
              <tr>
                <th>Cookie</th>
                <th>Tipo</th>
                <th>Finalidad</th>
                <th>Duración</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>tjtaura_cookies</td>
                <td>Técnica / propia</td>
                <td>Almacena la preferencia de cookies del usuario</td>
                <td>1 año</td>
              </tr>
              <tr>
                <td>_ga</td>
                <td>Analítica / Google Analytics</td>
                <td>Distingue usuarios únicos</td>
                <td>2 años</td>
              </tr>
              <tr>
                <td>_gat</td>
                <td>Analítica / Google Analytics</td>
                <td>Limita el número de peticiones</td>
                <td>1 minuto</td>
              </tr>
              <tr>
                <td>_gid</td>
                <td>Analítica / Google Analytics</td>
                <td>Distingue usuarios</td>
                <td>24 horas</td>
              </tr>
            </tbody>
          </table>

          <h3>3.3 Gestión de cookies</h3>
          <p>
            Las cookies técnicas no requieren consentimiento por ser estrictamente necesarias para el funcionamiento del sitio. Las cookies analíticas requieren su autorización expresa, que puede otorgar o retirar a través del banner de cookies que aparece en su primera visita.
          </p>
          <p>
            También puede gestionar o eliminar las cookies a través de la configuración de su navegador. Tenga en cuenta que deshabilitar determinadas cookies puede afectar al correcto funcionamiento del sitio web.
          </p>
          <ul>
            <li><a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer">Google Chrome</a></li>
            <li><a href="https://support.mozilla.org/es/kb/habilitar-y-deshabilitar-cookies-sitios-web-rastrear-preferencias" target="_blank" rel="noopener noreferrer">Mozilla Firefox</a></li>
            <li><a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer">Safari</a></li>
            <li><a href="https://support.microsoft.com/es-es/windows/eliminar-y-administrar-cookies-168dab11-0753-043d-7c16-ede5947fc64d" target="_blank" rel="noopener noreferrer">Microsoft Edge</a></li>
          </ul>
          <p>
            Para desactivar el seguimiento de Google Analytics: <a href="https://tools.google.com/dlpage/gaoptout" target="_blank" rel="noopener noreferrer">Google Analytics Opt-out</a>.
          </p>
        </section>

        <div className="legal-footer-note">
          <a href="/jtaura/" className="legal-back">← Volver a inicio</a>
          <p>© 2025 José S. Taura · Luxury Investment And Projects Island Territory, S.L.</p>
          <p>Diseñado y desarrollado por <a href="https://lucasyleodigital.com" target="_blank" rel="noopener noreferrer">Lucas y Leo Digital</a></p>
        </div>

      </div>
    </div>
  );
}
