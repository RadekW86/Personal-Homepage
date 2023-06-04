import { useSelector } from "react-redux";
import {
  StyledSection,
  StyledTitleWrapper,
  StyledTitle,
  StyledEmoji,
  StyledContent,
  StyledList,
  StyledItem,
  StyledDot,
  StyledItemText,
} from "./styled";
import { selectThemeMode } from "../homepageSlice";
import { nanoid } from "@reduxjs/toolkit";

export const Section = ({ title, emoji, content }) => {
  const mode = useSelector(selectThemeMode);

  return (
    <StyledSection mode={mode}>
      <StyledTitleWrapper mode={mode}>
        <StyledTitle mode={mode}>{title}</StyledTitle>
        <StyledEmoji src={emoji} />
      </StyledTitleWrapper>
      <StyledContent>
        <StyledList>
          {content.map((item) => (
            <StyledItem key={nanoid()}>
              <StyledDot mode={mode} />
              <StyledItemText mode={mode}>{item}</StyledItemText>
            </StyledItem>
          ))}
        </StyledList>
      </StyledContent>
    </StyledSection>
  );
};
