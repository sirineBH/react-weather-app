import styled from "styled-components";

export const SlideContainer = styled.div`
  max-width: 90%;
  width: 90%;
  overflow: hidden;
`;

export const Wrapper = styled.div`
  padding: 20px;
  width: 70%;
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
`;

export const Box = styled.div`
  border-radius: 20px;
  box-shadow: 0 2px 30px rgba(#000, 0.2);
  background: #e1dfe1;
  transform: translate3d(0, 0, 0);
  margin: 20px;
  min-width: 300px;
  animation: animateThumb 0.5s;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Info = styled.div`
  bottom: 0;
  width: 100%;
  height: 45%;
  z-index: 4;
`;

export const Location = styled.h1`
  text-align: center;
  color: var(--primaryColor);
`;

export const DateDisplay = styled.h3`
  text-align: center;
  margin-top: 5%;
  color: var(--medGrey);
  font-size: var(--fontMed);
`;

export const Temperature = styled.h1`
  margin-top: 10%;
  text-align: center;
  color: var(--primaryColor);
`;

export const Weathercon = styled.div`
  height: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px;
`;
