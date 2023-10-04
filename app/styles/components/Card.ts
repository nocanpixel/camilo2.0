import styled from "styled-components";

interface StyledCardProps {
  color?: string;
  text?: string;
}

export const StyledCard = styled.div<StyledCardProps>`
  @property --rotate {
    syntax: "<angle>";
    initial-value: 132deg;
    inherits: false;
  }

  border-width: 1px;
  --tw-border-opacity: 1;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 7px 0px 7px 0px;
  border-radius: 0.4rem;
  position: relative;
  background-color: black;
  cursor: pointer;
  height: 7rem;

  &:hover {
      /* Custom styles for ::before and ::after on hover */
  &::before {
    content: "";
    width: 103%;
    height: 107%;
    border-radius: 0.4rem;
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    position: absolute;
    z-index: -1;
    top: -3%;
    left: -1.5%;
    animation: spin 2.5s linear infinite;
  }

  &::after {
    position: absolute;
    content: "";
    top:  -11%;
    left: -13%;
    right: 0;
    z-index: -1;
    height: 140%;
    width: 125%;
    margin: 0 auto;
    transform: scale(0.8);
    filter: blur(calc(106px / 6));
    background-image: linear-gradient(
      var(--rotate),
      #5ddcff,
      #3c67e3 43%,
      #4e00c2
    );
    opacity: 1;
    transition: opacity 0.5s;
    animation: spin 2.5s linear infinite;
  }

  @keyframes spin {
    0% {
      --rotate: 0deg;
    }
    100% {
      --rotate: 360deg;
    }
  }
  }
`;
