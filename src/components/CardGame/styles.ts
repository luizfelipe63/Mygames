import styled from 'styled-components'
import Exemplo from '../../assets/readdead.jpg'

export const CardContent = styled.div`
  p {
    margin-top: 0.5rem;
    line-height: 120%;
    word-break: break-all;
    opacity: 0.7;
    color: ${props => props.theme.color.White};
    transition: color 0.2s;

    :hover {
      color: ${props => props.theme.color.White};
      opacity: 10;
    }
  }
`

export const CardGameImg = styled.div`
  height: 20rem;
  background: url(${Exemplo}) no-repeat center;
  background-size: cover;
  border-radius: 6px;

  cursor: pointer;

  padding: 0.625rem;
  display: flex;
  justify-content: end;

  transition: scale 0.2s;

  :hover {
    scale: 1.1;
  }
`

export const ButtonWishes = styled.button`
  margin-top: 1rem;
  background: transparent;
  border: 0;
  cursor: pointer;
  font-size: 0.75rem;

  display: flex;
  gap: 0.5rem;
  align-items: center;

  color: ${props => props.theme.color.White};

  :hover {
    transition: color 0.2s;
    color: ${props => props.theme.color.Purple};
  }
`
