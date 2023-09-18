import styled from "styled-components";

export const StyledPopover = styled.div`
  width: max-content;
  max-width: calc(100vw - 20px);
  background: white;
  color: black;
  padding: 1rem;
  margin-top: 1rem;
  border-radius: 0.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  z-index: 100;
`;
