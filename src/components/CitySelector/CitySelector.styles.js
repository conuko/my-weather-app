import styled from 'styled-components'
import { theme } from '../../styles'

export const CheckWeatherButton = styled.button`
  border: none;
  font-size: ${theme.font.size.h5};
  font-weight: ${theme.font.weight.bold};
  background-color: ${theme.color.darkBlue};
  opacity: 0.9;
  color: ${theme.color.text};
  cursor: pointer;
  border-radius: ${theme.border.radius};
  padding: 1rem 1.75rem;
  width: 100%;
  &:hover {
    opacity: 1;
  }
`

export const CheckWeatherInput = styled.input`
  border-radius: ${theme.border.radius};
  font-size: ${theme.font.size.h5};
  font-weight: ${theme.font.weight.bold};
  transition: all 0.3s ease-in-out;
  border: 3px solid #000;
  color: ${theme.color.red};
  background-color: ${theme.color.white};
  margin-top: 0.5rem;
  margin-bottom: 1rem;
  outline: none;
  padding: 1rem 0 1rem 1rem;
  transition: all 0.3s ease;
  width: 100%;
`

export const WeatherImg = styled.img`
  width: auto;
  height: auto;
  max-width: 450px;
  max-height: 900px;
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 768px) {
    flex-wrap: wrap;
    align-content: center;
  }
`
