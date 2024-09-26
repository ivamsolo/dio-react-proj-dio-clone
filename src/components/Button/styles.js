import styled from "styled-components";

export const Button = styled.button`
    min-width: 120px;
    height: 26px;
    font-weight: 400;
    font-size: 18px;
    line-height: 24.5px;
    text-decoration: none;
    color: white;
    background: ${({variant}) => variant === 'blank' ? 'none' : 'rgba(86, 86, 86, 1)'};
    border-radius: 12px;
    border: none;
    text-align: center;
    padding: 0 16px;
    cursor: pointer;
`
export const FancyButton = styled(Button)`
    background-color: rgba(228, 16, 93, 1);
    width: 100%;
    position: relative;

    &::after {
        content: "";
        position: absolute;
        top: -6px;
        left: -6px;
        border: 1px solid rgba(228, 16, 93, 1);
        height: calc(100% + 10px);
        width: calc(100% + 10px);
        border-radius: 22px;
    }
    a {
        color: white;
        text-decoration: none;
    }
`
