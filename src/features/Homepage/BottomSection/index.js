import { useSelector } from "react-redux";
import { selectThemeMode } from "../homepageSlice";
import {
  StyledBottomSection,
  StyledContact,
  StyledIcon,
  StyledIconsContainer,
  StyledNote,
  StyledPreContact,
  StyledTextWrapper,
} from "./styled";
import { contact } from "../routes";
import { ReactComponent as Git } from "../../../images/git.svg";
import { ReactComponent as Fb } from "../../../images/fb.svg";
import { ReactComponent as Li } from "../../../images/li.svg";
import { ReactComponent as Ig } from "../../../images/ig.svg";

export const BottomSection = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledBottomSection>
      <StyledTextWrapper>
        <StyledPreContact mode={mode}>let's talk!</StyledPreContact>
        <StyledContact mode={mode}>{contact}</StyledContact>
        <StyledNote mode={mode}>
          I'm always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to conatct me 🤞
        </StyledNote>
      </StyledTextWrapper>
      <StyledIconsContainer>
        <StyledIcon as={Git} mode={mode} />
        <StyledIcon as={Fb} mode={mode} />
        <StyledIcon as={Li} mode={mode} />
        <StyledIcon as={Ig} mode={mode} />
      </StyledIconsContainer>
    </StyledBottomSection>
  );
};
