import styled from "styled-components";
import { css } from "styled-components";
import { ReactComponent as Git } from "../../../images/git.svg";

export const StyledPortfolio = styled.section`
  display: flex;
  flex-flow: column wrap;
  gap: 24px;
  margin-bottom: 48px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    margin-bottom: 0px;
  }
`;

export const StyledGitHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 13px;
`;

export const StyledGitLogo = styled(Git)`
  fill: ${({ theme, mode }) => theme[mode].mainBlue};
  align-self: center;
  width: 40px;
  height: 40px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 32px;
    height: 32px;
  }
`;

export const StyledHeaderText = styled.div`
  color: ${({ theme, mode }) => theme[mode].text};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
  gap: 8px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 16px;
  }
`;

export const StyledHeaderTitle = styled.div`
  letter-spacing: 0.05em;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: 30px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledHeaderSubTitle = styled.div`
  letter-spacing: 0.05em;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 17px;
  }
`;

export const StyledGitContent = styled.div`
  ${({ list }) =>
    list &&
    css`
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 32px;

      @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
        grid-template-columns: 1fr;
        gap: 16px;
      }
    `}
`;
