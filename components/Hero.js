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
  CheckCircle2,
} from "lucide-react";
import Link from "next/link";

/* ================= ANIMATIONS ================= */

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-svh flex items-center pt-28 pb-24 overflow-hidden isolate"
    >
      {/* ================= BACKGROUND ================= */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-background" />
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
            variants={fadeUp}
            className="text-4xl md:text-6xl xl:text-7xl font-extrabold leading-tight"
          >
            <span className="text-textPrimary">Gauri </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              Thokal
            </span>
          </motion.h1>

          <motion.div
            variants={fadeUp}
            className="mt-4 flex items-center gap-3 text-primary font-semibold"
          >
            <Cpu size={20} />
            Java Backend Developer
          </motion.div>

          <motion.p
            variants={fadeUp}
            className="mt-6 max-w-xl text-textSecondary text-lg"
          >
            I design and develop scalable Java applications with clean
            architecture, efficient APIs, and production-grade backend systems.
            Focused on performance, reliability, and maintainability.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-10 flex flex-wrap gap-5">
            <Link
              href="/resume"
              className="group inline-flex items-center gap-3 px-7 py-3.5 rounded-xl bg-primary text-textInverted font-semibold shadow-glowBlue"
            >
              <FileText size={18} />
              View Resume
              <ArrowRight className="group-hover:translate-x-1 transition" />
            </Link>

            <div className="flex items-center gap-3 px-3 py-2 rounded-xl bg-surface border border-border">
              <Social href="#">
                <Github size={18} />
              </Social>
              <Social href="#">
                <Linkedin size={18} />
              </Social>
              <Social href="#">
                <Mail size={18} />
              </Social>
            </div>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT – BACKEND SNAPSHOT ================= */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="relative hidden lg:block"
        >
          <div className="rounded-2xl bg-surface border border-border shadow-lg overflow-hidden">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-background">
              <span className="w-3 h-3 rounded-full bg-red-400" />
              <span className="w-3 h-3 rounded-full bg-yellow-400" />
              <span className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-3 text-sm text-textMuted font-mono">
                backend-system.log
              </span>
            </div>

            {/* Logs */}
            <div className="p-6 space-y-4 font-mono text-sm">
              <Log icon={Server} text="Spring Boot service started" />
              <Log icon={Database} text="Connected to PostgreSQL database" />
              <Log icon={Cpu} text="JVM optimized for production load" />
              <Log
                icon={CheckCircle2}
                text="All systems operational"
                success
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ================= LOG LINE ================= */

function Log({ icon: Icon, text, success }) {
  return (
    <motion.div
      variants={fadeUp}
      className="flex items-center gap-3 text-textSecondary"
    >
      <Icon
        size={18}
        className={success ? "text-green-400" : "text-primary"}
      />
      <span>{text}</span>
    </motion.div>
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
