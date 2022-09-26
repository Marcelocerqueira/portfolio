import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    top: 20px;
    right: 0.5%;

    z-index: 10;
    transition: transform 0.9s;
    &:hover {
        transform: scale(1.1);
    }

    @media (max-width: 800px) {
        top: 70px;
    }
`;
