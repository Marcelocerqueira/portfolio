import styled from "styled-components";

export const Container = styled.button`
    flex: 1;
    color: var(--white);
    border: 1px solid #838383;
    box-sizing: border-box;
    cursor: pointer;
    padding: 16px 16px;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    text-align: center;
    outline: none;
    border-radius: 5px;
    text-decoration: none;
    display: inline-block;
    transition: opacity 0.3s;
    &:hover,
    &:focus {
        opacity: 0.5;
    }

    & + a {
        margin-left: 8px;
    }
`;
