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
    background: '#0f0e17',
    text: '#fffffe',
    paragraph: '#a7a9be',
    button: '#ff8906',
    secondary: '#f25f4c',
    tertiary: '#e53170',
  },
  // Shadows
  shadows: {
    cards:
      '0 1px 9px 2px rgba(60, 64, 67, 0.03), 0 1px 1px 0 rgba(60, 64, 67, 0.15)',
  },
  // Borders
  border: { radius: '1px' },
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
