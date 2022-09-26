import styled, { keyframes } from "styled-components";

//animação
const WidthSkill = keyframes`
 from{
   width: 0;
 }
 to{
   width: 60%;
 }
`;

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;

    & + div {
        margin-top: 20px;
    }

    span svg {
        top: -10px;
        position: relative;
    }
    progress[value] {
        width: 60%;
        height: 20px;
        animation: ${WidthSkill} 4s; //executando animação
    }

    strong {
        margin-left: 5px;
        color: #fff;
    }
    span {
        display: flex;
        flex-direction: column;
        font-weight: bold;
        color: #fff;
        align-items: center;

        width: 160px;
    }
`;
