import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 2px;

  .bar {
    width: 100%;
    height: 9px;
    background-color: white;
    border-radius: 6px;
    overflow: hidden;
    .progress {
      width: ${(props) => props.progress ?? '1' }%;
      height: inherit;
      background-color: rgba(35, 221, 122, 1);
    }
  }
`;
