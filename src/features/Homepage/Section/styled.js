import styled from "styled-components";
import { ReactComponent as Dot } from "../../../images/dot.svg";

export const StyledSection = styled.section`
  padding: 32px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  background-color: ${({ theme, mode }) => theme[mode].sectionBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 16px;
    gap: 12px;
  }
`;

export const StyledTitleWrapper = styled.div`
  display: flex;
  gap: 16px;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid ${({ theme, mode }) => theme[mode].divider};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 12px;
    padding-bottom: 12px;
  }
`;

export const StyledTitle = styled.div`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 30px;
  letter-spacing: 0.05em;
  color: ${({ theme, mode }) => theme[mode].text};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledEmoji = styled.img`
  height: 32px;
  width: 27px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 21px;
    width: 18px;
  }
`;

export const StyledContent = styled.div`
  column-count: 3;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    column-count: 1;
  }
`;

export const StyledList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const StyledItem = styled.li`
  display: flex;
  flex-wrap: nowrap;
  gap: 16px;
  margin: 15px 0;

  &:first-child {
    margin-top: 0px;
  }

  &:last-child {
    margin-bottom: 0px;
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
    margin: 9px 0;
  }
`;

export const StyledDot = styled(Dot)`
  fill: ${({ theme, mode }) => theme[mode].mainBlue};
  display: flex;
  align-self: center;
  width: 9px;
  height: 9px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 6px;
    height: 6px;
  }
`;

export const StyledItemText = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.05em;
  font-size: 18px;
  word-wrap: break-word;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
  }
`;
