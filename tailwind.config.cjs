module.exports = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,jsx}",
    "./src/components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        /* ===== BASE SURFACES ===== */
        background: "#0b0f1a",     // deep midnight (main bg)
        surface: "#111827",        // cards / sections
        surfaceSoft: "#0f172a",    // softer panels
        border: "#1f2937",         // subtle dividers

        /* ===== BRAND / JAVA FEEL ===== */
        primary: "#3b82f6",        // electric blue (Java energy)
        primarySoft: "#1e40af",    // darker blue
        primaryGlow: "#60a5fa",    // glow highlights

        /* ===== SYSTEM ACCENTS ===== */
        secondary: "#22d3ee",      // cyan (APIs, cloud, system)
        success: "#10b981",        // green (success states)
        warning: "#f59e0b",        // amber (attention)
        danger: "#ef4444",         // error / critical

        /* ===== TEXT ===== */
        textPrimary: "#e5e7eb",    // main text
        textSecondary: "#9ca3af",  // paragraphs
        textMuted: "#6b7280",      // hints / meta
        textInverted: "#020617",   // text on bright buttons

        /* ===== SPECIAL EFFECTS ===== */
        glowBlue: "rgba(59,130,246,0.45)",
        glowCyan: "rgba(34,211,238,0.35)",
      },

      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.6)",
        glowBlue: "0 0 40px rgba(59,130,246,0.35)",
        glowCyan: "0 0 40px rgba(34,211,238,0.35)",
      },

      backgroundImage: {
        "radial-blue":
          "radial-gradient(circle at top, rgba(59,130,246,0.18), transparent 45%)",
        "radial-cyan":
          "radial-gradient(circle at center, rgba(34,211,238,0.15), transparent 50%)",
        "grid-dark":
          "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};
