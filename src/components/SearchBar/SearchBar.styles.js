import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  padding: 20px;
  margin: 20px;
  width: 50%;
`;

export const Content = styled.div`
  display: flex;
  padding: 10px;

  img {
    margin-right: 20px;
    width: 50px;
    cursor: pointer;
  }

  input {
    font-size: var(--fontBig);
    outline: 0;
    border-width: 0 0 2px;
    border-color: var(--primaryColor);
  }
`;
