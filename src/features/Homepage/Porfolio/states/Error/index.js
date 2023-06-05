import { useSelector } from "react-redux";
import { selectThemeMode } from "../../../homepageSlice";
import {
  StyledErrorSubTitle,
  StyledErrorTitle,
  StyledExclamation,
  StyledInfo,
  StyledReturnButton,
  StyledWrapper,
} from "./styled";

export const Error = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledWrapper>
      <StyledExclamation mode={mode} />
      <StyledInfo mode={mode}>
        <StyledErrorTitle>Ooops! Something went wrong... </StyledErrorTitle>
        <StyledErrorSubTitle>
          Sorry, failed to load Github projects. You can check them directly on
          Github.
        </StyledErrorSubTitle>
        <StyledReturnButton mode={mode}>Go to Github</StyledReturnButton>
      </StyledInfo>
    </StyledWrapper>
  );
};
