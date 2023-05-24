import { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { GlobalStyle } from "./GlobalStyle";
import { useSelector } from "react-redux";
import { selectThemeMode } from "../homepageSlice";
import { Homepage } from "../../features/Homepage";

export const App = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle mode={mode} />
      <Homepage />
    </ThemeProvider>
  );
};
