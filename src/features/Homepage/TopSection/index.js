import { useSelector } from "react-redux";
import { selectThemeMode } from "../homepageSlice";
import {
  StyledTopSection,
  StyledImage,
  StyledInfoWrapper,
  StyledPreTitle,
  StyledTitle,
  StyledDescription,
  StyledHireButton,
  StyledButtonContent,
  StyledButtonPic,
  StyledButtonText,
} from "./styled";
import myPhoto from "../../../images/06.png";
import { contact } from "../routes";

export const TopSection = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledTopSection>
      <StyledImage src={myPhoto} alt="myPhoto" />
      <StyledInfoWrapper>
        <StyledPreTitle mode={mode}>this is</StyledPreTitle>
        <StyledTitle mode={mode}>Radosław Włodarski</StyledTitle>
        <StyledDescription mode={mode}>
          I am a dedicated Frontend Developer working in React. I aim for
          creating user-friendly interactive web applications. My commitment
          lies in delivering high-quality code that adheres to best practices
          while optimizing every detail. Whether working on solo projects or
          collaborating within a team, I excel in both environments. I actively
          seek new job opportunities to further enhance my skills and contribute
          to innovative projects.
        </StyledDescription>
        <a href={`mailto:${contact}`} target="_blank" rel="noreferrer">
          <StyledHireButton mode={mode}>
            <StyledButtonContent>
              <StyledButtonPic />
              <StyledButtonText mode={mode}>Hire Me</StyledButtonText>
            </StyledButtonContent>
          </StyledHireButton>
        </a>
      </StyledInfoWrapper>
    </StyledTopSection>
  );
};
