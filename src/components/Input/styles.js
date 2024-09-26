import styled from "styled-components"

export const Input = styled.input`
display: block;
  width: 275px;
  height: 30px;
  background: url(${({icon}) => icon ?? 'none'}) no-repeat;
  background-position: 5px 8px;
  border: none;
  border-bottom: 1px solid rgba(59, 52, 80, 1);
  ${({icon}) => icon ? 'padding-left: 24px;' : null}  
  color: white;
`