import styled from "styled-components";
import { ReactComponent as envelope } from "../../../images/envelope.svg";

export const StyledTopSection = styled.section`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 66px;
  align-items: center;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    grid-template-columns: 1fr;
    gap: 13px;
  }
`;

export const StyledInfoWrapper = styled.div`
  display: grid;
  gap: 12px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 8px;
  }
`;

export const StyledImage = styled.img`
  height: 398px;
  width: 398px;
  border-radius: 50%;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 133px;
    width: 133px;
  }
`;

export const StyledPreTitle = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  text-transform: uppercase;
  font-weight: 700;
  font-size: 12px;
`;

export const StyledTitle = styled.div`
  color: ${({ theme, mode }) => theme[mode].text};
  font-weight: 900;
  letter-spacing: 0.05em;
  font-size: 38px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 22px;
  }
`;

export const StyledDescription = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  font-weight: 400;
  letter-spacing: 0.05em;
  font-size: 20px;
  line-height: 28px;
  margin: 20px 0;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 17px;
    line-height: 24px;
    margin: 8px 0;
  }
`;

export const StyledHireButton = styled.button`
  padding: 0;
  background-color: ${({ theme, mode }) => theme[mode].mainBlue};
  border-radius: 4px;
  border: 1px solid ${({ theme, mode }) => theme[mode].buttonBorder};
  height: 49px;
  width: 154px;
  cursor: pointer;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 46px;
    width: 138px;
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

export const StyledButtonContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 17px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 12px;
  }
`;

export const StyledButtonPic = styled(envelope)`
  margin: 2px;
  height: 17px;
  width: 19px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    height: 14px;
    width: 16px;
  }
`;

export const StyledButtonText = styled.div`
  font-weight: 600;
  font-size: 20px;
  letter-spacing: 0.05em;
  color: ${({ theme, mode }) => theme[mode].buttonText};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;
