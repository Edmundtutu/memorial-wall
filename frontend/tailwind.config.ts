import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
      screens: {
        sm: "640px",
        md: "720px",
        lg: "800px",
      },
    },
    extend: {
      fontFamily: {
        serif: ["IBM Plex Serif", "Georgia", "serif"],
        sans: ["IBM Plex Sans", "system-ui", "sans-serif"],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        highlight: "hsl(var(--highlight))",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "var(--radius)",
        sm: "calc(var(--radius) - 1px)",
      },
      lineHeight: {
        relaxed: "1.75",
        loose: "1.85",
      },
      spacing: {
        "18": "4.5rem",
        "22": "5.5rem",
      },
      maxWidth: {
        "reading": "65ch",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
