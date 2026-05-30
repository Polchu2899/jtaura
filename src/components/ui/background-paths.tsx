"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Deterministic timing — NO Math.random() ─────────────── */
const PATH_DURATIONS = Array.from({ length: 36 }, (_, i) => 20 + (i % 5) * 2);

const PHOTO =
  "https://i.ibb.co/B2gKRg0b/Universal-Upscaler-0462b481-74cd-469c-879b-e569f5dbebda-removebg-preview.png";

/* ── Gold animated paths ──────────────────────────────────── */
function FloatingPaths({ position }: { position: number }) {
  const paths = Array.from({ length: 36 }, (_, i) => ({
    id: i,
    d: `M-${380 - i * 5 * position} -${189 + i * 6}C-${
      380 - i * 5 * position
    } -${189 + i * 6} -${312 - i * 5 * position} ${216 - i * 6} ${
      152 - i * 5 * position
    } ${343 - i * 6}C${616 - i * 5 * position} ${470 - i * 6} ${
      684 - i * 5 * position
    } ${875 - i * 6} ${684 - i * 5 * position} ${875 - i * 6}`,
    opacity: 0.06 + i * 0.016,
    width: 0.5 + i * 0.03,
  }));
  return (
    <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
      <svg style={{ width: "100%", height: "100%" }} viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path, i) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`rgba(232,201,107,${path.opacity})`}
            strokeWidth={path.width}
            /* opacity [0.4→1→0.4] — same start/end value = seamless loop, no jump */
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: PATH_DURATIONS[i], repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ── Animated counter ─────────────────────────────────────── */
function Counter({ target }: { target: number }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -80px 0px" });
  useEffect(() => {
    if (!inView) return;
    const duration = 1800;
    const start = performance.now();
    const tick = (ts: number) => {
      const p = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - p, 3);
      setCount(Math.floor(ease * target));
      if (p < 1) requestAnimationFrame(tick);
      else setCount(target);
    };
    requestAnimationFrame(tick);
  }, [inView, target]);
  return <span ref={ref}>{count}</span>;
}

/* ── Hero ─────────────────────────────────────────────────── */
export function BackgroundPaths() {
  const headingLine1 = "Transforma tu empresa.";
  const headingLine2 = "Eleva tu vida.";
  const metrics = [
    { target: 25,  label: "Años de experiencia" },
    { target: 400, label: "Clientes satisfechos" },
    { target: 450, label: "Proyectos ejecutados" },
  ];

  const ease = [0.33, 1, 0.68, 1] as const;

  return (
    <section
      style={{
        position: "relative",
        width: "100%",
        minHeight: "100vh",
        overflow: "hidden",
        background: "#080B12",
      }}
    >
      {/* ── BACKGROUND ── */}
      <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <div style={{
          position: "absolute", top: 0, left: 0,
          width: 600, height: 600, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 50%, transparent 70%)",
        }} />
        <div style={{
          position: "absolute", bottom: 0, right: 0,
          width: 500, height: 500, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.01) 50%, transparent 70%)",
        }} />
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* ── CONTENT ── */}
      <div style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        maxWidth: "1152px",
        margin: "0 auto",
        padding: "0 clamp(1.5rem, 5vw, 3rem)",
      }}>

        {/* flex row: text-col + desktop-photo — layout managed by taura.css .bp-* classes */}
        <div className="bp-row">

          {/* ── TEXT COLUMN ── */}
          <div className="bp-text">

            {/* Mobile photo */}
            <div className="bp-mobile-photo">
              <div style={{ position: "relative" }}>
                <div style={{
                  position: "absolute", bottom: -8, left: "50%", transform: "translateX(-50%)",
                  width: 180, height: 60,
                  background: "radial-gradient(ellipse, rgba(201,168,76,0.22) 0%, transparent 70%)",
                }} />
                <img
                  src={PHOTO}
                  alt="José S. Taura - Consultor Empresarial"
                  loading="eager"
                  style={{ position: "relative", zIndex: 1, width: 176, objectFit: "contain", display: "block" }}
                />
              </div>
            </div>

            {/* Eyebrow */}
            <motion.div
              initial={{ y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.1, ease }}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "0.75rem", marginBottom: "1.5rem" }}
              className="md:justify-start"
            >
              <div className="hidden md:block" style={{ height: 1, width: 32, flexShrink: 0, background: "linear-gradient(to right, transparent, #C9A84C)" }} />
              <span style={{ fontSize: 11, letterSpacing: "0.2em", textTransform: "uppercase", fontWeight: 500, color: "#C9A84C", lineHeight: 1.6 }}>
                Consultor · Auditor · Coach de Alto Rendimiento
              </span>
              <div className="hidden md:block" style={{ height: 1, width: 32, flexShrink: 0, background: "linear-gradient(to left, transparent, #C9A84C)" }} />
            </motion.div>

            {/* Heading */}
            <h1 style={{ marginBottom: "1.5rem", lineHeight: 1.08, fontFamily: "var(--font-playfair)" }}>

              {/* Line 1 — block slide-up (visible in SSR, no per-char clipping) */}
              <motion.div
                className="text-5xl sm:text-6xl md:text-7xl font-bold"
                style={{ display: "block", color: "#F0EAD6", whiteSpace: "normal" }}
                initial={{ y: 24 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.7, delay: 0.2, ease }}
              >
                {headingLine1}
              </motion.div>

              {/* Line 2 — gold italic */}
              <motion.span
                initial={{ y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.35, ease }}
                className="text-5xl sm:text-6xl md:text-7xl font-bold italic"
                style={{
                  display: "block",
                  marginTop: "0.15rem",
                  background: "linear-gradient(90deg, #C9A84C 0%, #E8C96B 50%, #F5D990 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {headingLine2}
              </motion.span>
            </h1>

            {/* Sub-paragraph */}
            <motion.p
              initial={{ y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.5, ease }}
              className="text-base md:text-lg"
              style={{ maxWidth: "28rem", margin: "0 auto 2rem", lineHeight: 1.65, color: "rgba(240,234,214,0.65)" }}
            >
              Más de{" "}
              <strong style={{ color: "#E8C96B" }}>25 años</strong>{" "}
              transformando empresas en Islas Baleares y Península.
              <br />
              Metodologías probadas. Resultados que se miden.
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.65, ease }}
              style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginBottom: "2.5rem", justifyContent: "center" }}
              className="md:justify-start"
            >
              <a
                href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20quiero%20agendar%20mi%20primera%20llamada%20gratuita%20de%2030%20minutos"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.75rem",
                  padding: "0.875rem 1.75rem", borderRadius: "9999px",
                  fontWeight: 600, fontSize: "0.875rem", letterSpacing: "0.05em",
                  background: "linear-gradient(135deg, #C9A84C 0%, #E8C96B 100%)",
                  color: "#080B12",
                  boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
                  textDecoration: "none", transition: "transform 0.3s",
                }}
              >
                <span>Agenda tu llamada gratuita</span>
                <svg width="16" height="16" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" style={{ flexShrink: 0 }}>
                  <path d="M4 10h12M10 4l6 6-6 6" />
                </svg>
              </a>
              <a
                href="#servicios"
                style={{
                  display: "inline-flex", alignItems: "center", gap: "0.5rem",
                  padding: "0.875rem 1.75rem", borderRadius: "9999px",
                  fontWeight: 500, fontSize: "0.875rem", letterSpacing: "0.05em",
                  border: "1px solid rgba(201,168,76,0.28)",
                  color: "rgba(240,234,214,0.75)",
                  textDecoration: "none", transition: "transform 0.3s",
                }}
              >
                Ver servicios
              </a>
            </motion.div>

            {/* Metrics */}
            <motion.div
              initial={{ y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.78, ease }}
              style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: "2rem", justifyContent: "center" }}
              className="md:justify-start"
            >
              {metrics.map((m, idx) => (
                <div key={idx} style={{ display: "flex", alignItems: "center", gap: "2rem" }}>
                  {idx > 0 && (
                    <div style={{ width: 1, alignSelf: "stretch", background: "rgba(201,168,76,0.25)" }} />
                  )}
                  <div>
                    <div
                      style={{
                        fontSize: "1.875rem", fontWeight: 700, fontVariantNumeric: "tabular-nums", lineHeight: 1,
                        background: "linear-gradient(90deg, #C9A84C, #E8C96B)",
                        WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent",
                        backgroundClip: "text", fontFamily: "var(--font-inter)",
                      }}
                    >
                      <Counter target={m.target} /><span>+</span>
                    </div>
                    <div style={{ fontSize: "0.75rem", marginTop: "0.25rem", letterSpacing: "0.05em", color: "rgba(240,234,214,0.45)" }}>
                      {m.label}
                    </div>
                  </div>
                </div>
              ))}
            </motion.div>

          </div>{/* end .bp-text */}

          {/* ── DESKTOP PHOTO COLUMN ── */}
          <div
            className="bp-desktop-photo"
            style={{ width: "clamp(220px, 28vw, 400px)" }}
          >
            <div style={{ position: "relative" }}>
              <div style={{
                position: "absolute", bottom: 0, left: "50%", transform: "translateX(-50%)",
                width: 380, height: 120,
                background: "radial-gradient(ellipse, rgba(201,168,76,0.16) 0%, transparent 70%)",
              }} />
              <img
                src={PHOTO}
                alt="José S. Taura - Consultor Empresarial"
                loading="eager"
                style={{ position: "relative", display: "block", width: "100%", objectFit: "contain", maxHeight: "80vh" }}
              />
            </div>
          </div>

        </div>{/* end .bp-row */}

        {/* Scroll hint */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={{
            position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)",
            display: "flex", flexDirection: "column", alignItems: "center", gap: 8,
          }}
        >
          <div style={{
            width: 20, height: 32, borderRadius: 9999,
            border: "1px solid rgba(201,168,76,0.3)",
            display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: 6,
          }}>
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              style={{ width: 4, height: 6, borderRadius: 9999, background: "rgba(201,168,76,0.6)" }}
            />
          </div>
          <span style={{ fontSize: 10, letterSpacing: "0.22em", textTransform: "uppercase", color: "rgba(201,168,76,0.45)" }}>
            Scroll
          </span>
        </motion.div>

      </div>{/* end content wrapper */}
    </section>
  );
}
