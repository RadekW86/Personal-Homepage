import styled from "styled-components";
import { ReactComponent as Exclamation } from "../../../../../images/exclamation.svg";

export const StyledWrapper = styled.div`
  margin-top: 71.5px;
  margin-bottom: 20px;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 23px;
`;

export const StyledExclamation = styled(Exclamation)`
  stroke: ${({ theme, mode }) => theme[mode].text};
  color: ${({ theme, mode }) => theme[mode].text};
`;

export const StyledInfo = styled.div`
  color: ${({ theme, mode }) => theme[mode].text};
  text-align: center;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  gap: 32px;
`;

export const StyledErrorTitle = styled.div`
  letter-spacing: 0.05em;
  font-weight: 700;
  font-size: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 16px;
  }
`;

export const StyledErrorSubTitle = styled.div`
  max-width: 420px;
  line-height: 28px;
  letter-spacing: 0.05em;
  font-weight: 400;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 17px;
  }
`;

export const StyledReturnButton = styled.button`
  padding: 0;
  background-color: ${({ theme, mode }) => theme[mode].mainBlue};
  border-radius: 4px;
  border: 1px solid ${({ theme, mode }) => theme[mode].buttonBorder};
  height: 49px;
  width: 168px;
  cursor: pointer;
  color: ${({ theme, mode }) => theme[mode].buttonText};
  font-weight: 600;
  letter-spacing: 0.05em;
  font-size: 20px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 46px;
    width: 145px;
    font-size: 18px;
  }

  &:hover {
    box-shadow: ${({ theme, mode }) => theme[mode].buttonShadowFocus};
  }

  &:focus {
    box-shadow: ${({ theme, mode }) => theme[mode].buttonShadowFocus};
  }

  &:active {
    box-shadow: ${({ theme, mode }) => theme[mode].buttonShadowActive};
  }
`;
