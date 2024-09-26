import styled from "styled-components";

export const Container =  styled.div`
    display: flex;
    align-items: center;
    position: relative;

    label {
        display: flex;
        align-items: center;
        margin-left: 5px;
    }

    .chevron {
        width: 24px;
        height: 24px;     
        pointer-events: none;
    }
    .dropdown {
        display: none;
        position: absolute;
        bottom: -40px;
        background-color: white;
        padding: 5px 10px;
        a {
            color: black;
        }
    }
    input[type="checkbox"] {
        display: none;
    }
    input[type="checkbox"]:checked + div {
        display: block;
    }
`