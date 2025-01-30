// import colors from 'tailwindcss/colors';

export const theme = {
  container: {
    center: true,
  },
  extend: {
    colors: {
      border: 'hsl(var(--border))',
      input: 'hsl(var(--input))',
      ring: 'hsl(var(--ring))',
      background: 'hsl(var(--background))',
      foreground: 'hsl(var(--foreground))',
      primary: {
        DEFAULT: 'hsl(var(--primary))',
        foreground: 'hsl(var(--primary-foreground))',
      },
      secondary: {
        DEFAULT: 'hsl(var(--secondary))',
        foreground: 'hsl(var(--secondary-foreground))',
      },
      destructive: {
        DEFAULT: 'hsl(var(--destructive))',
        foreground: 'hsl(var(--destructive-foreground))',
      },
      muted: {
        DEFAULT: 'hsl(var(--muted))',
        foreground: 'hsl(var(--muted-foreground))',
      },
      accent: {
        DEFAULT: 'hsl(var(--accent))',
        foreground: 'hsl(var(--accent-foreground))',
      },
      popover: {
        DEFAULT: 'hsl(var(--popover))',
        foreground: 'hsl(var(--popover-foreground))',
      },
      card: {
        DEFAULT: 'hsl(var(--card))',
        foreground: 'hsl(var(--card-foreground))',
      },
    },
    borderRadius: {
      lg: 'var(--radius)',
      md: 'calc(var(--radius) - 2px)',
      sm: 'calc(var(--radius) - 4px)',
    },
    // fontSize: {
    //   // https://tailwindcss.com/docs/font-size#using-custom-values
    //   h1: ['3rem', { fontWeight: '700' }], // 48px
    //   h2: ['2.25rem', { fontWeight: '700' }], // 36px
    //   h3: ['1.875rem', { fontWeight: '700' }], // 30px
    //   h4: ['1.5rem', { fontWeight: '700' }], // 24px
    //   h5: '1.25rem', // 20px
    //   h6: '1.125rem', // 18px
    //   p: '1rem', // 16px
    //   sm: '0.875rem', // 14px
    //   xs: '0.75rem', // 12px
    // },
  },

  keyframes: {
    'accordion-down': {
      from: {
        height: '0',
      },
      to: {
        height: 'var(--radix-accordion-content-height)',
      },
    },
    'accordion-up': {
      from: {
        height: 'var(--radix-accordion-content-height)',
      },
      to: {
        height: '0',
      },
    },
  },
  animation: {
    'accordion-down': 'accordion-down 0.2s ease-out',
    'accordion-up': 'accordion-up 0.2s ease-out',
  },

};
