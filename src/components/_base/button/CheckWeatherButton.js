import styled from 'styled-components';
import { theme } from '../../../styles';

const CheckWeatherButton = styled.button`
  border: none;
  font-size: ${theme.font.size.h5};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.color.text};
  cursor: pointer;
  border-radius: ${theme.border.radius};
  padding: 1rem 1.75rem;
  width: 100%;
`;

export default CheckWeatherButton;
