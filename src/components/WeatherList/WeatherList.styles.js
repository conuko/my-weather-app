import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 0 50px;
  }
  @media (min-width: 1330px) {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 0 50px;
  } ;
`

export const Container = styled.div`
  display: flex;
`
