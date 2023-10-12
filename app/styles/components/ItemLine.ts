import styled from "styled-components";

export const ItemLine = styled.div`
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  &::after {
    content: "";
    position: absolute;
    width: 25px;
    height: 25px;
    left: 35%;
    background-color: white;
    top: 0;
    border-radius: 50%;
    z-index: 1;
    cursor: pointer;
  }
`;
