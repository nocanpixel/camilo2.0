import styled from "styled-components";

export const TimeLine = styled.div`
  position: relative;
  height: 60px;

  &::after {
    content: "";
    position: absolute;
    height: 5px;
    background-color: white;
    left: 10px;
    right: 10px;
    top: 50%;
    border-radius: 10px;
  }
`;
