import styled from "styled-components";

export const Main = styled.div`
  width: calc(25% - 20px);
  height: 265px;
  margin: 10px;
  cursor: pointer;
  @media (max-width: 900px) {
    width: calc(50% - 20px);
    height: fit-content;
  }
`;

export const ItemWrapper = styled.div`
  border: 1px solid #ccc;
  width: 100%;
  height: 100%;
`;

export const Image = styled.img`
  width: 100%;
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2px 10px;
`;

export const Name = styled.strong`
  font-weight: bold;
`;

export const Title = styled.h4`
  margin: 0 0 2px 0;
  font-weight: 400;
`;
