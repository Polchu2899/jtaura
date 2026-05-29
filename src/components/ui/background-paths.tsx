"use client";

import { motion, useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

/* ── Deterministic timing — NO Math.random() to prevent SSR/client mismatch ── */
const PATH_DURATIONS = Array.from({ length: 36 }, (_, i) => 20 + (i % 5) * 2); // 20,22,24,26,28,20...

/* ── Animated gold paths ─────────────────────────────────── */
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
    <div className="absolute inset-0 pointer-events-none">
      <svg className="w-full h-full" viewBox="0 0 696 316" fill="none">
        <title>Background Paths</title>
        {paths.map((path, i) => (
          <motion.path
            key={path.id}
            d={path.d}
            stroke={`rgba(232,201,107,${path.opacity})`}
            strokeWidth={path.width}
            /* pathLength removed — it caused an instant jump from 1→0.3 at each repeat
               (repeatType:"loop" default), making all 36 paths flash simultaneously.
               Pure opacity breathing: [0.4,1,0.4] starts and ends at same value
               → seamless loop, zero flicker. Varying durations create natural phase offsets. */
            initial={{ opacity: 0.4 }}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: PATH_DURATIONS[i],
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}
      </svg>
    </div>
  );
}

/* ── Animated counter ────────────────────────────────────── */
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

/* ── Hero ────────────────────────────────────────────────── */
export function BackgroundPaths() {
  const headingLine1 = "Transforma tu empresa.";
  const headingLine2 = "Eleva tu vida.";

  const metrics = [
    { target: 25,  label: "Años de experiencia"  },
    { target: 400, label: "Clientes satisfechos"  },
    { target: 450, label: "Proyectos ejecutados"  },
  ];

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      style={{ background: "#080B12" }}
    >
      {/* Ambient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.07) 0%, rgba(201,168,76,0.02) 50%, transparent 70%)" }} />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
           style={{ background: "radial-gradient(circle, rgba(201,168,76,0.05) 0%, rgba(201,168,76,0.01) 50%, transparent 70%)" }} />

      {/* Animated gold paths */}
      <div className="absolute inset-0">
        <FloatingPaths position={1} />
        <FloatingPaths position={-1} />
      </div>

      {/* ── PHOTO MOBILE — in flow, centered above content ── */}
      <div className="relative md:hidden flex justify-center pt-24 pb-2 pointer-events-none select-none z-[1]">
        <div className="relative">
          {/* radial-gradient glow — avoids filter:blur GPU layer that conflicts with SVG animation */}
          <div className="absolute -bottom-2 left-1/2 -translate-x-1/2"
               style={{ width: "180px", height: "60px", background: "radial-gradient(ellipse, rgba(201,168,76,0.22) 0%, transparent 70%)" }} />
          <img
            src="https://i.ibb.co/B2gKRg0b/Universal-Upscaler-0462b481-74cd-469c-879b-e569f5dbebda-removebg-preview.png"
            alt="José S. Taura - Consultor Empresarial"
            loading="eager"
            className="relative z-[1] w-44 object-contain"
          />
        </div>
      </div>

      {/* ── PHOTO DESKTOP — absolute bottom-right ── */}
      <div className="hidden md:block absolute bottom-0 z-[1] pointer-events-none select-none"
           style={{ right: "clamp(1rem, 4vw, 3rem)" }}>
        {/* radial-gradient glow — avoids filter:blur GPU layer */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2"
             style={{ width: "420px", height: "130px", background: "radial-gradient(ellipse, rgba(201,168,76,0.16) 0%, transparent 70%)" }} />
        <img
          src="https://i.ibb.co/B2gKRg0b/Universal-Upscaler-0462b481-74cd-469c-879b-e569f5dbebda-removebg-preview.png"
          alt="José S. Taura - Consultor Empresarial"
          loading="eager"
          className="relative z-[1] object-contain"
          style={{ width: "clamp(220px,24vw,400px)", maxHeight: "85vh" }}
        />
      </div>

      {/* ── Main content ── */}
      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 pb-20 pt-6 md:pt-28
                      text-center md:text-left">

        {/* Eyebrow — golden lines hidden on mobile to avoid awkward wrap */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.1 }}
          className="flex items-center justify-center md:justify-start gap-3 mb-8"
        >
          <div className="hidden md:block h-px w-8 shrink-0" style={{ background: "linear-gradient(to right, transparent, #C9A84C)" }} />
          <span className="text-[11px] tracking-[0.2em] uppercase font-medium leading-relaxed" style={{ color: "#C9A84C" }}>
            Consultor · Auditor · Coach de Alto Rendimiento
          </span>
          <div className="hidden md:block h-px w-8 shrink-0" style={{ background: "linear-gradient(to left, transparent, #C9A84C)" }} />
        </motion.div>

        {/* Heading */}
        <h1 className="mb-8 leading-none" style={{ fontFamily: "var(--font-playfair)" }}>

          {/* Line 1 — per-character clip animation, word-grouped to prevent mid-word line breaks */}
          <div
            className="block text-5xl sm:text-6xl md:text-7xl font-bold"
            style={{ color: "#F0EAD6" }}
          >
            {headingLine1.split(" ").map((word, wIdx) => {
              /* count total chars before this word (including prior spaces) for consistent delay */
              const charOffset = headingLine1
                .split(" ")
                .slice(0, wIdx)
                .reduce((acc, w) => acc + w.length + 1, 0);
              return (
                <span key={wIdx} style={{ display: "inline" }}>
                  {wIdx > 0 && " "}
                  {/* inline-block + nowrap = word never breaks internally */}
                  <span style={{ display: "inline-block", whiteSpace: "nowrap" }}>
                    {word.split("").map((char, cIdx) => (
                      <span
                        key={cIdx}
                        style={{ display: "inline-block", overflow: "hidden", verticalAlign: "bottom" }}
                      >
                        <motion.span
                          style={{ display: "inline-block" }}
                          initial={{ y: "100%" }}
                          animate={{ y: "0%" }}
                          transition={{
                            delay: 0.15 + (charOffset + cIdx) * 0.024,
                            type: "spring",
                            stiffness: 150,
                            damping: 25,
                          }}
                        >
                          {char}
                        </motion.span>
                      </span>
                    ))}
                  </span>
                </span>
              );
            })}
          </div>

          {/* Line 2 — gold italic fade-up */}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.55, ease: [0.33, 1, 0.68, 1] }}
            className="block text-5xl sm:text-6xl md:text-7xl font-bold italic mt-1"
            style={{
              background: "linear-gradient(90deg, #C9A84C 0%, #E8C96B 50%, #F5D990 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            {headingLine2}
          </motion.span>
        </h1>

        {/* Sub */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.7 }}
          className="text-base md:text-lg mb-10 max-w-md mx-auto md:mx-0 leading-relaxed"
          style={{ color: "rgba(240,234,214,0.65)" }}
        >
          Más de{" "}
          <strong style={{ color: "#E8C96B" }}>25 años</strong>{" "}
          transformando empresas en Islas Baleares y Península.
          <br />
          Metodologías probadas. Resultados que se miden.
        </motion.p>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.8 }}
          className="flex flex-wrap gap-4 mb-16 justify-center md:justify-start"
        >
          <a
            href="https://api.whatsapp.com/send?phone=34609625573&text=Hola%20José%2C%20quiero%20agendar%20mi%20primera%20llamada%20gratuita%20de%2030%20minutos"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full font-semibold text-sm tracking-wide transition-all duration-300 hover:-translate-y-0.5 active:scale-[0.98]"
            style={{
              background: "linear-gradient(135deg, #C9A84C 0%, #E8C96B 100%)",
              color: "#080B12",
              boxShadow: "0 4px 24px rgba(201,168,76,0.35)",
            }}
          >
            <span>Agenda tu llamada gratuita</span>
            <svg className="w-4 h-4 shrink-0" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 10h12M10 4l6 6-6 6" />
            </svg>
          </a>
          <a
            href="#servicios"
            className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full font-medium text-sm tracking-wide border transition-all duration-300 hover:-translate-y-0.5"
            style={{ borderColor: "rgba(201,168,76,0.28)", color: "rgba(240,234,214,0.75)" }}
          >
            Ver servicios
          </a>
        </motion.div>

        {/* Metrics */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.9 }}
          className="flex flex-wrap items-center gap-x-8 gap-y-6 justify-center md:justify-start"
        >
          {metrics.map((m, idx) => (
            <div key={idx} className="flex items-center gap-8">
              {idx > 0 && (
                <div className="hidden sm:block w-px self-stretch" style={{ background: "rgba(201,168,76,0.25)" }} />
              )}
              <div>
                <div
                  className="text-3xl font-bold tabular-nums leading-none"
                  style={{
                    background: "linear-gradient(90deg, #C9A84C, #E8C96B)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    fontFamily: "var(--font-inter)",
                  }}
                >
                  <Counter target={m.target} /><span>+</span>
                </div>
                <div className="text-xs mt-1 tracking-wide" style={{ color: "rgba(240,234,214,0.45)" }}>
                  {m.label}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10"
      >
        <div className="w-5 h-8 rounded-full border flex items-start justify-center pt-1.5"
             style={{ borderColor: "rgba(201,168,76,0.3)" }}>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            className="w-1 h-1.5 rounded-full"
            style={{ background: "rgba(201,168,76,0.6)" }}
          />
        </div>
        <span className="text-[10px] tracking-[0.22em] uppercase" style={{ color: "rgba(201,168,76,0.45)" }}>
          Scroll
        </span>
      </motion.div>
    </section>
  );
}
