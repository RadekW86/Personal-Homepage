import { useSelector } from "react-redux";
import { selectThemeMode } from "../homepageSlice";
import {
  StyledBottomSection,
  StyledContact,
  StyledFingers,
  StyledIcon,
  StyledIconsContainer,
  StyledNote,
  StyledPreContact,
  StyledTextWrapper,
} from "./styled";
import { contact } from "../routes";
import { ReactComponent as Git } from "../../../images/git.svg";
import { gitHub } from "../routes";
// import { ReactComponent as Fb } from "../../../images/fb.svg";
// import { facebook } from "../routes";
import { ReactComponent as Li } from "../../../images/li.svg";
import { linkedIn } from "../routes";
import { ReactComponent as Ig } from "../../../images/ig.svg";
import { instagram } from "../routes";

export const BottomSection = () => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledBottomSection>
      <StyledTextWrapper>
        <StyledPreContact mode={mode}>let's talk!</StyledPreContact>
        <StyledContact
          as="a"
          href={`mailto:${contact}`}
          target="_blank"
          rel="noreferrer"
          mode={mode}
        >
          {contact}
        </StyledContact>
        <StyledNote mode={mode}>
          I'm always open to new projects whenever I have the time. If you have
          a website, dashboard or mobile app in mind and need some help to make
          your ideas come to life, feel free to conatct me <StyledFingers />
        </StyledNote>
      </StyledTextWrapper>
      <StyledIconsContainer>
        <a href={gitHub} target="_blank" rel="noreferrer">
          <StyledIcon as={Git} mode={mode} />
        </a>
        {/* <a href={facebook} target="_blank" rel="noreferrer">
          <StyledIcon as={Fb} mode={mode} />
        </a> */}
        <a href={linkedIn} target="_blank" rel="noreferrer">
          <StyledIcon as={Li} mode={mode} />
        </a>
        <a href={instagram} target="_blank" rel="noreferrer">
          <StyledIcon as={Ig} mode={mode} />
        </a>
      </StyledIconsContainer>
    </StyledBottomSection>
  );
};
