import styled from "styled-components";
import { css } from "styled-components";

export const StyledProjectTile = styled.div`
  text-align: left;
  letter-spacing: 0.05em;
  background-color: ${({ theme, mode }) => theme[mode].sectionBackground};
  box-shadow: ${({ theme }) => theme.boxShadow};
  border-radius: 4px;
  display: flex;
  flex-flow: column wrap;
  align-items: flex-start;
  justify-content: flex-start;
  padding: 56px;
  gap: 24px;
  border: 6px solid ${({ theme, mode }) => theme[mode].buttonBorder};

  &:hover {
    border-color: ${({ theme, mode }) => theme[mode].tileBorderActive};
  }
  &:focus {
    border-color: ${({ theme, mode }) => theme[mode].tileBorderActive};
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 24px;
    gap: 16px;
  }
`;

export const StyledTitle = styled.div`
  color: ${({ theme, mode }) => theme[mode].mainBlue};
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 24px;
  line-height: 29px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 16px;
    line-height: 19px;
  }
`;

export const StyledDescription = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 18px;
  line-height: 25px;

  ${({ link }) =>
    link &&
    css`
      cursor: pointer;
      text-decoration: none;
      color: ${({ theme, mode }) => theme[mode].mainBlue};

      &:visited {
        filter: brightness(70%);
      }
      &:hover {
        filter: brightness(120%);
      }
      &:focus {
        filter: brightness(120%);
      }
    `}

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    line-height: 17px;
  }
`;

export const StyledLinks = styled.div`
  display: grid;
  gap: 8px;
  grid-template-columns: 60px 1fr;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    grid-template-columns: 50px 1fr;
  }
`;
