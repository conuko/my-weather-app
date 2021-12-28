import styled from 'styled-components';
import { theme } from '../../styles';

export const CheckWeatherButton = styled.button`
  border: none;
  font-size: ${theme.font.size.h5};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.color.text};
  cursor: pointer;
  border-radius: ${theme.border.radius};
  padding: 1rem 1.75rem;
  width: 100%;
`;

export const CheckWeatherInput = styled.input`
  border-radius: ${theme.border.radius};
  font-size: ${theme.font.size.h5};
  font-weight: ${theme.font.weight.bold};
  transition: all .30s ease-in-out;
  border: 3px solid #000;
  color: ${theme.color.red};
  background-color: ${theme.color.black};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 0 1rem 1rem;
  transition: all .3s ease;
  width: 100%;
`;