/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fi: {
          pink: {
            50: '#fdf2f8',
            100: '#fce7f3',
            200: '#fbcfe8',
            300: '#f9a8d4',
            400: '#f472b6',
            500: '#ec4899',
            600: '#db2777',
            700: '#be185d',
            800: '#9d174d',
            900: '#831843',
            950: '#500724',
            bg: '#FFEBF2',
            subtle: '#FFE2EC',
            card: '#FFFFFF',
            border: '#FFD1DE',
            borderDark: '#FFB8CB',
          }
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(219, 39, 119, 0.06), 0 1px 2px -1px rgba(219, 39, 119, 0.04)',
        'card': '0 4px 20px -2px rgba(219, 39, 119, 0.08), 0 2px 8px -1px rgba(219, 39, 119, 0.04)',
        'card-hover': '0 12px 28px -4px rgba(219, 39, 119, 0.18), 0 4px 12px -2px rgba(219, 39, 119, 0.08)',
        'pink-glow': '0 4px 20px -2px rgba(236, 72, 153, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.25s ease-out forwards',
        'slide-up': 'slideUp 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(4px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
