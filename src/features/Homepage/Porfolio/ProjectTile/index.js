import { useSelector } from "react-redux";
import {
  StyledDescription,
  StyledLinks,
  StyledProjectTile,
  StyledTitle,
} from "./styled";
import { selectThemeMode } from "../../homepageSlice";

export const ProjectTile = ({ title, description, demo, code }) => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledProjectTile mode={mode}>
      <StyledTitle mode={mode}>{title}</StyledTitle>
      <StyledDescription mode={mode}>{description}</StyledDescription>
      <StyledLinks>
        <StyledDescription mode={mode}>Demo:</StyledDescription>
        <StyledDescription as="a" href={demo} target="_blank" rel="noreferrer" mode={mode} link>
          {demo}
        </StyledDescription>
        <StyledDescription mode={mode}>Code:</StyledDescription>
        <StyledDescription as="a" href={code} target="_blank" rel="noreferrer" mode={mode} link>
          {code}
        </StyledDescription>
      </StyledLinks>
    </StyledProjectTile>
  );
};
