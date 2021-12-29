/**
 * Theme variables
 *
 * See: https://www.styled-components.com/docs/advanced#theming
 *
 *
*/

const theme = {
  // Colors
  color: {
    white: '#fff',
    black: '#0f0e17',
    text: '#fffffe',
    grey: '#a7a9be',
    lightGrey: '#f2f2f1',
    orange: '#ff8906',
    red: '#f25f4c',
    pink: '#e53170',
  },
  // Shadows
  shadows: {
    cards:
      '0 1px 9px 2px rgba(60, 64, 67, 0.03), 0 1px 1px 0 rgba(60, 64, 67, 0.15)',
  },
  // Borders
  border: { radius: '3px' },
  // Fonts
  font: {
    main: 'Open Sans',
    size: {
      sectionHeadline: '6.5rem',
      newsDetailHeadline: '5.625rem',
      h1: '4.375rem',
      h2: '2.25rem',
      h3: '1.25rem',
      h4: '1rem',
      h5: '0.875rem',
      h6: '0.75rem',
      p: '1rem',
    },
    weight: {
      bold: 650,
      semibold: 500,
      regular: 400,
      book: 250,
      light: 150,
      thin: 100,
    },
  },
};

export default theme;
