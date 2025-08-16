import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./client/index.html", "./client/src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        popover: {
          DEFAULT: "var(--popover)",
          foreground: "var(--popover-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        chart: {
          "1": "var(--chart-1)",
          "2": "var(--chart-2)",
          "3": "var(--chart-3)",
          "4": "var(--chart-4)",
          "5": "var(--chart-5)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar-background)",
          foreground: "var(--sidebar-foreground)",
          primary: "var(--sidebar-primary)",
          "primary-foreground": "var(--sidebar-primary-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        // Rasika Desserts Royal Colors
        'royal-green': 'var(--royal-green)',
        'royal-gold': 'var(--royal-gold)',
        'royal-cream': 'var(--royal-cream)',
        'dark-green': 'var(--dark-green)',
        'light-gold': 'var(--light-gold)',
        'gold-accent': 'var(--gold-accent)',
      },
      fontFamily: {
        sans: ["var(--font-montserrat)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
        mono: ["var(--font-mono)"],
        playfair: ["var(--font-playfair)", "serif"],
        montserrat: ["var(--font-montserrat)", "sans-serif"],
  brand: ["var(--font-playfair)", "var(--font-devanagari)", "serif"],
      },
      backgroundImage: {
        'royal-gradient': 'linear-gradient(135deg, var(--royal-green) 0%, var(--dark-green) 50%, var(--royal-gold) 100%)',
        'gold-gradient': 'linear-gradient(135deg, var(--royal-gold) 0%, var(--gold-accent) 100%)',
        'cream-gradient': 'linear-gradient(135deg, var(--royal-cream) 0%, #ffffff 100%)',
      },
      boxShadow: {
        'royal': '0 20px 40px rgba(1, 50, 32, 0.3)',
        'gold': '0 10px 30px rgba(255, 215, 0, 0.2)',
        'elegant': '0 15px 35px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        fadeInUp: {
          "0%": {
            opacity: "0",
            transform: "translateY(30px)",
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "fade-in-up": "fadeInUp 0.8s ease forwards",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
} satisfies Config;
