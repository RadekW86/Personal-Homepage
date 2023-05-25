import styled from "styled-components";

export const Container = styled.div`
  max-width: 1230px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 110px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 275px;
    margin-top: 8px;
    margin-bottom: 31px;
  }
`;
