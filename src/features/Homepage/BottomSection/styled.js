import styled from "styled-components";
import { ReactComponent as Fingers } from "../../../images/fingers.svg";

export const StyledBottomSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 56px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 40px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 12px;
  }
`;

export const StyledPreContact = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  text-transform: uppercase;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  font-size: 12px;
`;

export const StyledContact = styled.div`
  color: ${({ theme, mode }) => theme[mode].text};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  text-decoration: none;
  letter-spacing: 0.05em;
  font-size: 32px;
  transition: 0.2s ease-in;

  &:visited {
    text-decoration: none;
  }
  &:hover {
    color: ${({ theme, mode }) => theme[mode].mainBlue};
  }
  &:focus {
    color: ${({ theme, mode }) => theme[mode].mainBlue};
  }
  &:active {
    color: ${({ theme, mode }) => theme[mode].mainBlue};
    filter: brightness(120%);
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 18px;
  }
`;

export const StyledNote = styled.div`
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  max-width: 670px;
  font-weight: ${({ theme }) => theme.fontWeights.light};
  letter-spacing: 0.05em;
  font-size: 18px;
  line-height: 25px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    font-size: 14px;
    line-height: 17px;
    margin: 8px 0;
  }
`;

export const StyledFingers = styled(Fingers)`
  position: absolute;
  width: 24px;
  height: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 16px;
    height: 16px;
  }
`;

export const StyledIconsContainer = styled.div`
  display: flex;
  gap: 24px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    gap: 16px;
  }
`;

export const StyledIcon = styled(({ as: Component, ...props }) => (
  <Component {...props} />
))`
  width: 48px;
  height: 48px;
  transition: 0.2s ease-in;
  fill: ${({ theme, mode }) => theme[mode].text};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    width: 32px;
    height: 32px;
  }

  &:hover {
    fill: ${({ theme, mode }) => theme[mode].mainBlue};
  }
  &:focus {
    fill: ${({ theme, mode }) => theme[mode].mainBlue};
  }
  &:active {
    fill: ${({ theme, mode }) => theme[mode].mainBlue};
    filter: brightness(120%);
  }
`;
