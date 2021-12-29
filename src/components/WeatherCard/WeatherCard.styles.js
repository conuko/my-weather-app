import styled from 'styled-components';
import { theme } from '../../styles';

export const CardWrapper = styled.div`
  overflow: hidden;
  padding: 2rem 0 32px;
  margin: 48px auto 0;
  width: 100%;
  background-color: ${theme.color.red};
  box-shadow: 4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);
  border-radius: 5px;
  border: 3px solid ${theme.color.black};
`;

export const CardBody = styled.div`
  margin: 2rem;
  padding: 32px;
  background-color: ${theme.color.white};
  box-shadow: 4.2px 8.5px 8.5px hsl(0deg 0% 0% / 0.37);
  color: ${theme.color.black};
  border-radius: 3px;
  border: 3px solid ${theme.color.black};
`;

export const CardHeader = styled.header`
  padding-top: 32px;
  padding-bottom: 32px;
`;

export const CardHeading = styled.h1`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
`;
