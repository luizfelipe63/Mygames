import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { NavBar } from "./components/NavBar";
import { Router } from "./Router";
import { GlobalStyle } from "./styles/global";
import { DefaultTheme } from "./styles/themes/default";

export function App() {
  return (
    <ThemeProvider theme={DefaultTheme}> 
    <BrowserRouter>
      <NavBar/>
      <Router/>
    </BrowserRouter>
      <GlobalStyle/>
    </ThemeProvider>
  )
}

