import styled from 'styled-components';
import theme from '../../../styles/theme';

export const H1 = styled.h1`
  text-transform: uppercase;
  font-size: ${theme.font.size.h1};
  font-variation-settings: 'wght' ${theme.font.weight.light};
  line-height: 1.125;
  margin-bottom: 1rem;
`;

export const H2 = styled.h2`
  text-transform: uppercase;
  font-family: ${theme.font.main};
  font-size: ${theme.font.size.h2};
  margin-bottom: 0.75rem;
`;
