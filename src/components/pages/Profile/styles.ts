import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  padding: 16px;
  overflow-y: scroll;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;
  border: 1px solid red;

  @media (min-width: 768px) {
    border: none;
  }
`;
