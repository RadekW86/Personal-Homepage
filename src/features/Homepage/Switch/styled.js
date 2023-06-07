import styled, { css } from "styled-components";
import { ReactComponent as icon } from "../../../images/icon.svg";

export const StyledThemeToggler = styled.div`
  position: relative;
  top: 25px;
  right: -5.5px;
  justify-content: end;
  display: flex;
  align-items: center;
  gap: 12.5px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    right: 2px;
    top: 14.5px;
  }
`;

export const StyledTogglerTitle = styled.div`
  font-size: 12px;
  line-height: 16px;
  font-weight: ${({ theme }) => theme.fontWeights.semiBold};
  text-transform: uppercase;
  color: ${({ theme, mode }) => theme[mode].textSecondary};

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    display: none;
  }
`;

const switchWidth = 47;
const switchBorder = 1;

export const StyledSwitch = styled.button`
  background-color: ${({ theme, mode }) => theme[mode].switch};
  border: ${switchBorder}px solid
    ${({ theme, mode }) => theme[mode].textSecondary};
  border-radius: 12.5px;
  width: ${switchWidth}px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  cursor: pointer;
  transition: 0.5s linear;
`;

const divMargin = 1.5;

export const StyledIconDiv = styled.div`
  margin: 2.5px ${divMargin}px;
  transition: 0.3s linear;
  display: flex;
  align-items: center;

  ${({ mode }) =>
    mode === "darkMode" &&
    css`
 
      transform: translateX(
        calc(
          ${switchWidth}px - 2 * ${switchBorder}px - 2 * ${divMargin}px -
            ${sunWidth}px
        )
      );
    `}

    ${({ mode }) =>
    mode === "lightMode" &&
    css`
    
      transform: translateX(
        - calc(
          ${switchWidth}px - 2 * ${switchBorder}px - 2 * ${divMargin}px -
            ${sunWidth}px
        )
      );
    `}
`;

const sunWidth = 20;

export const StyledIcon = styled(icon)`
  fill: ${({ theme, mode }) => theme[mode].sun};
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  height: 20px;
  width: ${sunWidth}px;
  transition: transform 0.3s ease;
`;
