import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectThemeMode } from "../homepageSlice";
import { Container } from "../../common/Container/styled";

export const App = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle mode={mode} />
      <Container></Container>
    </ThemeProvider>
  );
};
