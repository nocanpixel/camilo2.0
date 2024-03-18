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
  --tw-border-opacity: 0.5;
  border-color: rgb(75 85 99 / var(--tw-border-opacity));
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 8px;
  align-items: center;
  padding: 7px 0px 7px 0px;
  border-radius: 0.4rem;
  position: relative;
  background-color: rgb(0,0,0, 0.9);
  cursor: pointer;
  height: 7rem;

  &:hover {
      /* Custom styles for ::before and ::after on hover */
  &::before {
    content: "";
    width: 104%;
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
    top: -3.5%;
    left: -2%;
    animation: spin 2.5s linear infinite;
  }

  &::after {
    position: absolute;
    content: "";
    top:  -15%;
    left: -14.5%;
    right: 0;
    z-index: -1;
    height: 130%;
    width: 129%;
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
