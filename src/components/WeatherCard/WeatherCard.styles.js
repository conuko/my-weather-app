import styled from 'styled-components';
import { theme } from '../../styles';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 3rem 2rem;
  margin: 48px auto 0;
  width: 100%;
  background-color: ${theme.color.white};
  box-shadow: 4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);
  border-radius: 5px;
  border: 3px solid black;
`;

export const CardBody = styled.div`
  padding: 2rem;
  background-color: ${theme.color.red};
  box-shadow: 4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);
  color: ${theme.color.black};
  border-radius: 3px;
  border: 3px solid ${theme.color.black};
`;

export const Main = styled.div`
  margin-bottom: 1rem;
  font-size: ${theme.font.size.h3};
  font-weight: ${theme.font.weight.bold};
  color: ${theme.color.black};
`;
