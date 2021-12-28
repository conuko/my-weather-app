import styled from 'styled-components';
import theme from '../../../styles/theme';

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: ${theme.font.size.h1};
  font-variation-settings: 'wght' ${theme.font.weight.light};
  line-height: 1.125;
  margin-bottom: 1rem;
`;

export const H3 = styled.h3`
  font-size: ${theme.font.size.h3};
  margin-bottom: 0.75rem;
  font-weight: ${theme.font.weight.bold};
`;
