import { useSelector, useDispatch } from "react-redux";
import { selectThemeMode, toggleMode } from "../homepageSlice";
import {
  StyledThemeToggler,
  StyledTogglerTitle,
  StyledSwitch,
  StyledIcon,
  StyledIconDiv,
} from "./styled";

export const Switch = () => {
  const mode = useSelector(selectThemeMode);
  const dispatch = useDispatch();

  return (
    <StyledThemeToggler>
      <StyledTogglerTitle mode={mode}>
        dark mode {mode === "lightMode" ? "off" : "on"}
      </StyledTogglerTitle>
      <StyledSwitch
        mode={mode}
        onClick={() => {
          dispatch(toggleMode());
        }}
      >
        <StyledIconDiv>
          <StyledIcon mode={mode} />
        </StyledIconDiv>
      </StyledSwitch>
    </StyledThemeToggler>
  );
};
