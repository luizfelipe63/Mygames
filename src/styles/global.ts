import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle` 
  *{
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    text-decoration: none;
  }

  
  :focus{
    outline: 0;
 
  }

  body, input, button{
    font: 400 1rem Poppins, sans-serif ;
  } 

  body{
    background: ${props => props.theme.color['black-800']};
    color: ${props => props.theme.color.White};
  }
`
