import styled from "styled-components";
import { colors } from "../../../colors";

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 16px;
  overflow-y: scroll;
  margin-top: calc(45px);

  @media (min-width: 768px) {
    // nav height + spacing
    margin-top: calc(45px + 16px);
  }
`;

export const Content = styled.div`
  width: 100%;
  max-width: 682px;
  margin: 0 auto;

  @media (min-width: 768px) {
    border: none;
  }
`;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;

export const LoaderErrorCard = styled.div`
  display: flex;
  justify-content: center;
  height: 100px;
  min-height: 100px;
  border-radius: 15px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  background: ${colors.pureWhite};
`;
