import { useSelector } from "react-redux";
import { StyledInfo, StyledWrapper, StyledloadingCircle } from "./styled";
import { selectThemeMode } from "../../../homepageSlice";

export const Loading = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledWrapper>
      <StyledInfo mode={mode}>Please wait, projects are loading...</StyledInfo>
      <StyledloadingCircle mode={mode} />
    </StyledWrapper>
  );
};
