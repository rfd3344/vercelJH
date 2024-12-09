import colors from 'tailwindcss/colors';

export const theme = {
  container: {
    center: true,
  },
  colors: {
    // ...colors,
    // primary: colors.cyan[500],
    // secondary: '#F46036',
    cyan: '#06b6d4',
    salmon: '#F46036',
    // neutral: colors.gray,
    // gray: colors.neutral[300],
    // lightGray: colors.neutral[100],
    white: colors.neutral[50],
  },
  fontSize: {
    // https://tailwindcss.com/docs/font-size#using-custom-values
    h1: ['3rem', { fontWeight: '700' }], // 48px
    h2: ['2.25rem', { fontWeight: '700' }], // 36px
    h3: ['1.875rem', { fontWeight: '700' }], // 30px
    h4: ['1.5rem', { fontWeight: '700' }], // 24px
    h5: '1.25rem', // 20px
    h6: '1.125rem', // 18px
    p: '1rem', // 16px
    sm: '0.875rem', // 14px
    xs: '0.75rem', // 12px
  },
};
