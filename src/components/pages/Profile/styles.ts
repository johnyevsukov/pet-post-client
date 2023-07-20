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

export const PostCard = styled.div`
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  padding: 16px;
`;

export const PostCardTopWrapper = styled.div``;

export const AvatarWrapper = styled.div`
  position: absolute;
  top: 16px;
  left: 16px;
`;
