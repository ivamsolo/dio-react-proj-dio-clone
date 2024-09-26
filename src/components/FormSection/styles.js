import styled from "styled-components"

export const FormSection = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 300px;
    min-height: 340px;
    h2 {
      margin-bottom: 8px;
    }
    p {
      margin-bottom: 35px;
    }
    input {
      margin-bottom: 10px;
    }
    
    form {
        width: 280px;
      }
    div {
      display: flex;
      justify-content: space-between;
      margin-top: 44px;

      a {
        text-decoration: none;
      }
    }
`