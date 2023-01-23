import styled from 'styled-components'

export const DetailsContainer = styled.div`
  max-width: 1120px;
  margin: 2rem auto;
`

export const DetailsContent = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: flex-start;
  gap: 2.5rem;
`

export const InfoGamePrincipal = styled.section`
  max-width: 760px;
`

export const About = styled.div`
  margin-top: 1.25rem;
`

export const InfoGameSecond = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  div {
    margin-bottom: 0.625rem;
    h2 {
      color: ${props => props.theme.color.Gray};
      font-size: 1.25rem;
    }
  }
`

export const ButtonAddGame = styled.button`
  padding: 0.625rem;
  border-radius: 6px;
  border: 0;
  background: ${props => props.theme.color.White};
  color: ${props => props.theme.color['black-600']};
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  &:hover {
    background: ${props => props.theme.color.Purple};
    color: ${props => props.theme.color.White};
    transition: color 0.2s, background 0.2s;
  }
`

export const CarouselImages = styled.div`
  img {
    max-width: 760px;
  }
`
