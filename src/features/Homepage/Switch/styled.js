import styled from "styled-components";
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

export const StyledSwitch = styled.button`
  background-color: ${({ theme, mode }) => theme[mode].switch};
  border: 1px solid ${({ theme, mode }) => theme[mode].textSecondary};
  border-radius: 12.5px;
  width: 47px;
  height: 25px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: ${({ theme, mode }) => theme[mode].sunAllign};
  cursor: pointer;
`;

export const StyledIconDiv = styled.div`
  margin: 2.5px;
  display: flex;
  align-items: center;
`;

export const StyledIcon = styled(icon)`
  fill: ${({ theme, mode }) => theme[mode].sun};
  color: ${({ theme, mode }) => theme[mode].textSecondary};
  height: 20px;
  width: 20px;
  transition: transform 0.3s ease;
`;
