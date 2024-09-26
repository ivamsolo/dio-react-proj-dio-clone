import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  width: 275px;
  height: 30px;
  border-radius: 8px;
  background: rgba(45, 45, 55, 1);
  padding: 5px 10px;
  gap: 10px;

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      pointer-events: none;
    }
  }

  input {
    display: flex;
    width: 100%;
    background: none;
    border: none;
    outline: none;
    color: white;
  }

`