import styled from "styled-components";

export const Container = styled.div`
  max-width: 1260px;
  margin: 0 auto;
  margin-top: 90px;
  margin-bottom: 110px;
  padding: 0 30px;

  @media (max-width: ${({ theme }) => theme.breakPoints.phoneMax}) {
    max-width: 295px;
    margin-top: 8px;
    margin-bottom: 31px;
    padding: 0 20px;
  }
`;
