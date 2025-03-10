/** @type {import('tailwindcss').Config} */
import {fontFamily} from 'tailwindcss/defaultTheme';

export default {
  darkMode: ["class"],
  content: ["./index.html", "./src/**/*.{ts,tsx,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inter',
          ...fontFamily.sans
        ],
        montserrat: 'Montserrat, sans-serif'
      },
      fontSize: {
        'Desktop/body_14/Semibold': [
          '.875rem',
          {
            lineHeight: '1.138rem',
            fontWeight: '600',

          }
        ],
        'desktop/card/h1': [
          '1.125rem', {
            lineHeight: '1.36rem',
            fontWeight: '600',

          }
        ],
        'desktop/body_16/regular': [
          '1rem', {
            lineHeight: '1.4rem',
            fontWeight: '400',

          }
        ],
        'desktop/body_14/regular': [
          '.875rem', {
            lineHeight: '1.125rem',
            fontWeight: '400',

          }
        ],
        'desktop/body_16/semibold': [
          '1rem', {
            lineHeight: '1.4rem',
            fontWeight: '600',

          }
        ],
        'mobile/chips_14/medium': [
          '0.875rem', {
            lineHeight: '1.225rem',
            fontWeight: '500',

          }
        ],
        'mobile/body_12/regular': [
          '0.75rem', {
            lineHeight: '0.975rem',
            fontWeight: '400',

          }
        ],
        'mobile/chips_12/medium': [
          '0.75rem', {
            lineHeight: '1.125rem',
            fontWeight: '500',

          }
        ],
        'mobile/button_14/bold': [
          '0.875rem', {
            lineHeight: '1.125rem',
            fontWeight: '700',

          }
        ],
        'mobile/h2': [
          '1.063rem', {
            lineHeight: '1.5rem',
            fontWeight: '600',

          }
        ],
        'mobile/h1': [
          '1.25rem', {
            lineHeight: '1.25rem',
            fontWeight: '600',

          }
        ],
        'mobile/card/h1': [
          '0.938rem', {
            lineHeight: '1.25rem',
            fontWeight: '600',

          }
        ],
        titles_main_page: [
          '1.5rem',
          {
            lineHeight: 'normal',
            letterSpacing: '-0.5px',
            fontWeight: '600',

          }
        ],
        font_sm: [
          '10px',
          {
            lineHeight: '14.85px',
            fontWeight: '500',

          }
        ]
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)'
      },
      colors: {
        fonts_primary: '#161517',
        fonts_black_secondary: '#2F2647',
        fonts_grey: '#6D738F',
        fonts_blue_secondary: '#233380',
        stroke_cards: '#DFE3E7',
        indigo_800: '#4263EB',
        indigo_600: '#5C7CFA',
        indigo_100: '#EDF2FF',
        indigo_200: '#DBE4FF',
        indigo_1000: '#364FC7',
        bg_blue: '#FAFCFF',
        accent_red: '#D6336C',
        error_red: '#FF5454',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))'
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))'
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))'
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))'
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))'
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))'
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))'
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))'
        }
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0'
          },
          to: {
            height: 'var(--radix-accordion-content-height)'
          }
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)'
          },
          to: {
            height: '0'
          }
        }
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out'
      }
    }
  },
  plugins: [require("tailwindcss-animate")],
}

