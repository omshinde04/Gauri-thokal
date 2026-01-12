"use client";

import { motion } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  ArrowRight,
  Cpu,
  Database,
  Server,
  Layers,
} from "lucide-react";
import Link from "next/link";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.12 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const scaleFade = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center pt-28 pb-20 overflow-hidden isolate"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute inset-0 bg-radial-blue" />

        {/* Grid */}
        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
      </div>

      {/* ================= CONTENT ================= */}
      <div className="mx-auto max-w-7xl w-full px-6 grid lg:grid-cols-2 gap-16 items-center">
        {/* ================= LEFT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-3xl"
        >
          <motion.p
            variants={fadeUp}
            className="text-textMuted uppercase tracking-[0.3em] text-xs mb-3"
          >
            Hello, I’m
          </motion.p>

          <motion.h1
            variants={scaleFade}
            className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
          >
            <span className="text-textPrimary">Gauri </span>
            <span className="relative inline-block">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Thokal
              </span>
              <span className="absolute left-0 -bottom-1 h-1 w-full bg-gradient-to-r from-primary to-secondary blur-md opacity-60" />
            </span>
          </motion.h1>

          {/* ROLE */}
          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-3 text-primary font-semibold"
          >
            <Cpu size={20} />
            Java Backend Developer
          </motion.div>

          {/* DESCRIPTION */}
          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-textSecondary text-lg"
          >
            I design and develop scalable Java applications with clean
            architecture, efficient APIs, and production-grade backend systems.
            Focused on performance, reliability, and maintainability.
          </motion.p>

          {/* CTA */}
          <motion.div
            variants={fadeUp}
            className="mt-10 flex flex-wrap gap-5"
          >
            <Link
              href="/resume"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-textInverted font-semibold shadow-glowBlue"
            >
              <FileText size={18} />
              View Resume
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-surface border border-border">
              <Social href="https://github.com/">
                <Github size={18} />
              </Social>
              <Social href="https://linkedin.com/">
                <Linkedin size={18} />
              </Social>
              <Social href="mailto:example@gmail.com">
                <Mail size={18} />
              </Social>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT (DESKTOP ONLY) ================= */}
        <div className="relative hidden lg:flex items-center justify-center">
          {/* Core */}
          <motion.div
            className="relative w-72 h-72 rounded-full flex items-center justify-center"
            animate={{
              boxShadow: [
                "0 0 40px rgba(59,130,246,0.35)",
                "0 0 100px rgba(59,130,246,0.7)",
                "0 0 40px rgba(59,130,246,0.35)",
              ],
            }}
            transition={{ duration: 4, repeat: Infinity }}
          >
            <div className="w-24 h-24 rounded-full bg-background border border-primary/40 flex items-center justify-center">
              <Cpu size={36} className="text-primary" />
            </div>
          </motion.div>

          {/* Orbiting Concepts */}
          {[
            { Icon: Server, x: -120, y: -40 },
            { Icon: Database, x: 120, y: -40 },
            { Icon: Layers, x: 0, y: 140 },
          ].map(({ Icon, x, y }, i) => (
            <motion.div
              key={i}
              className="absolute"
              style={{ transform: `translate(${x}px, ${y}px)` }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5 + i, repeat: Infinity }}
            >
              <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-surface border border-border shadow-glowBlue">
                <Icon size={26} className="text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ================= SOCIAL ================= */

function Social({ href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="p-3 rounded-lg text-textSecondary hover:text-primary hover:bg-surfaceSoft transition"
    >
      {children}
    </a>
  );
}
