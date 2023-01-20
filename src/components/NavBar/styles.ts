import styled from 'styled-components'

export const NavContainer = styled.header`
  display: flex;
  justify-content: space-between;

  margin: 0 auto;
  padding: 2rem 0;
  max-width: 1120px;
`

export const InputSearch = styled.div`
  background: ${props => props.theme.color['black-600']};
  border-radius: 8px;
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;

  border-top: 1px solid transparent;
  border-bottom: 1px solid transparent;

  &:focus-within {
    border: 1px solid ${props => props.theme.color.Purple};
  }

  input {
    border: 0;
    width: 29.43rem;

    color: ${props => props.theme.color.White};
    background: ${props => props.theme.color['black-600']};

    &::placeholder {
      color: ${props => props.theme.color.White};
    }
  }
`

export const CardFavorites = styled.div`
  background: ${props => props.theme.color.Purple};
  padding: 0.5rem;
  border-radius: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  position: relative;

  span {
    position: absolute;
    top: -0.5625rem;
    right: -0.5625rem;
    font-size: 0.875rem;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    width: 1.25rem;
    height: 1.25rem;
    background: ${props => props.theme.color.White};
    color: ${props => props.theme.color.Purple};
  }
`
