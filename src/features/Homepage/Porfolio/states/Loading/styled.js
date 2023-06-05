import styled from "styled-components";
import { ReactComponent as loadingCircle } from "../../../../../images/loadingCircle.svg";

export const StyledWrapper = styled.div`
  margin-top: 64px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 48px;
`;

export const StyledInfo = styled.div`
  color: ${({ theme, mode }) => theme[mode].text};
  text-align: center;
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 15px;
  }
`;

export const StyledloadingCircle = styled(loadingCircle)`
  stroke: ${({ theme, mode }) => theme[mode].mainBlue};
  max-width: 160px;
  max-height: 160px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 55px;
    max-height: 55px;
  }

  animation-name: rotatingCircle;
  animation-iteration-count: infinite;
  animation-duration: 0.9s;
  @keyframes rotatingCircle {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`;
