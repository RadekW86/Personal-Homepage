import styled from "styled-components";

export const Main = styled.main`
  margin-top: 65px;
  margin-bottom: 120px;
  padding: 0 7px;
  display: flex;
  flex-direction: column;
  gap: 72px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    padding: 0;
    gap: 50px;
    margin-top: 50px;
    margin-bottom: 0px;
  }
`;
