"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Code2,
  Briefcase,
  Mail,
} from "lucide-react";
import Link from "next/link";

/* ================= NAV DATA ================= */

const navLinks = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "skills", label: "Skills", icon: Code2 },
  { id: "projects", label: "Projects", icon: Briefcase },
  { id: "contact", label: "Contact", icon: Mail },
];

/* ================= ANIMATIONS ================= */

const headerVariants = {
  hidden: { y: -60, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
  exit: { opacity: 0 },
};

const menuVariants = {
  hidden: { x: "100%" },
  visible: {
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
  exit: {
    x: "100%",
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

const itemVariants = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

/* ================= COMPONENT ================= */

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* ================= DESKTOP NAVBAR ================= */}
      <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl transition-colors ${
          scrolled
            ? "bg-background/80 border-b border-border"
            : "bg-transparent"
        }`}
      >
        <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="#home"
            className="text-xl font-semibold tracking-wide text-textPrimary"
          >
            Gauri<span className="text-primary">.</span>
          </Link>

          {/* DESKTOP LINKS */}
          <ul className="hidden md:flex items-center gap-8">
            {navLinks.map(({ id, label, icon: Icon }) => (
              <li key={id} className="relative group">
                <a
                  href={`#${id}`}
                  className="flex items-center gap-2 text-sm font-medium text-textSecondary hover:text-textPrimary transition-colors"
                >
                  <Icon size={16} className="text-primary" />
                  {label}
                </a>
                <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-primary group-hover:w-full transition-all duration-300" />
              </li>
            ))}
          </ul>

          {/* HAMBURGER */}
          <button
            onClick={() => setOpen(true)}
            className="md:hidden text-textPrimary"
            aria-label="Open Menu"
          >
            <Menu size={30} />
          </button>
        </nav>
      </motion.header>

      {/* ================= MOBILE MENU ================= */}
      <AnimatePresence>
        {open && (
          <>
            {/* BACKDROP */}
            <motion.div
              className="fixed inset-0 z-[998] bg-black/60"
              variants={backdropVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              onClick={() => setOpen(false)}
            />

            {/* SLIDE MENU */}
            <motion.aside
              className="fixed top-0 right-0 z-[999] h-full w-[80%] max-w-sm bg-surface border-l border-border"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
            >
              {/* HEADER */}
              <div className="flex items-center justify-between px-6 py-5 border-b border-border">
                <span className="text-lg font-semibold text-textPrimary">
                  Navigation
                </span>
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close Menu"
                  className="text-textPrimary"
                >
                  <X size={28} />
                </button>
              </div>

              {/* LINKS */}
              <motion.ul
                className="flex flex-col gap-6 px-6 py-10"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
              >
                {navLinks.map(({ id, label, icon: Icon }) => (
                  <motion.li key={id} variants={itemVariants}>
                    <a
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-4 rounded-lg px-4 py-3 text-lg font-medium text-textSecondary hover:bg-surfaceSoft hover:text-textPrimary transition"
                    >
                      <Icon size={22} className="text-primary" />
                      {label}
                    </a>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
