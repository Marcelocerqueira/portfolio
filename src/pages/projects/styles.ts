import styled from "styled-components";

export const Content = styled.section`
    min-height: 100vh;
    .content-loading {
        position: fixed;
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;

        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 999;
    }
    img {
        margin: 0 auto;
        width: 5rem;
    }

    h4 {
        max-width: 31.25rem;
        width: 100%;
        color: #fff;
        padding: 16px 8px;
        margin: 16px auto;
        text-align: center;
        font-size: 20px;
        border-bottom: 1px solid #fff;
    }
`;

export const Cards = styled.section`
    display: flex;
    flex-wrap: wrap;
    max-width: 1180px;
    width: 100%;
    margin: 64px auto;
    padding: 16px 25px;

    @media (max-width: 1000px) {
        max-width: 900px;
    }

    @media (max-width: 500px) {
        justify-content: center;
    }
`;

export const Card = styled.div`
    display: flex;
    max-width: 360px;
    width: 100%;
    min-height: 300px;
    height: 100%;
    flex-direction: column;
    justify-content: center;
    padding: 8px 16px;
    border-radius: 5px;
    margin: 8px 8px;
    cursor: pointer;
    transition: 0.8s;

    background-color: ${(props) => props.theme.colors.background};

    -webkit-box-shadow: -1px 6px 15px 2px
        ${(props) => props.theme.colors.primary};
    -moz-box-shadow: -1px 6px 15px 2px ${(props) => props.theme.colors.primary};
    box-shadow: -1px 6px 15px 2px ${(props) => props.theme.colors.primary};

    &:hover {
        -webkit-box-shadow: 3px -4px 36px -2px
            ${(props) => props.theme.colors.primary};
        -moz-box-shadow: 3px -4px 36px -2px
            ${(props) => props.theme.colors.primary};
        box-shadow: 3px -4px 36px -2px ${(props) => props.theme.colors.primary};
    }

    .card-img {
        max-width: 300px;
        width: 100%;
    }

    img {
        max-width: 300px;
        width: 100%;
        max-height: 100px;
    }

    a {
        color: #fff;
    }

    @media (max-width: 850px) {
        & + div {
            margin-top: 16px;
            margin-left: 0px;
            display: flex;
        }
    }
`;

export const CardContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    position: relative;

    h3 {
        width: 100%;
        font-size: 20px;
        font-weight: bold;
        padding: 16px 16px;
    }

    P {
        display: flex;
        height: 190px;
        justify-content: center;
        align-items: center;
        font-size: 14px;
        line-height: 25px;
        min-height: 80px;
        font-family: "Open Sans", sans-serif;
    }

    span {
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 10px;
        font-weight: 500;
        width: 45%;
        background-color: #c53030;
        color: #fff;
        padding: 3px;
        position: absolute;
        border-radius: 5px;
        transform: rotate(-30deg);
        top: 8px;
        left: -45px;
        font-weight: bold;
        letter-spacing: 2px;
        font-size: 12px;
    }
`;

export const Icons = styled.div`
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 16px;
`;

export const Icon = styled.div`
    & + div {
        margin-left: 16px;
    }
`;

export const ButtonGroup = styled.div`
    display: flex;
    width: 100%;
    margin-top: 10px;
    margin-bottom: 10px;

    a {
        width: 100%;
        font-size: 12px;
        transition: 0.5s;
        border: 0;
        font-size: 14px;
    }

    .button-bloqued {
        flex: 1;
        color: var(--white);
        border: 1px solid #838383;
        box-sizing: border-box;
        cursor: pointer;
        padding: 16px 16px;
        font-style: normal;
        font-weight: bold;
        font-size: 14px;
        text-align: center;
        outline: none;
        border-radius: 5px;
        text-decoration: none;
        display: inline-block;
        transition: opacity 0.3s;
        background-color: #2274a5;
        opacity: 0.6;

        &:disabled {
            cursor: not-allowed;
        }
    }
`;

export const Tec = styled.div`
    width: 300px;
    min-height: 110px;
    margin-top: 10px;
    div {
        display: inline-block;
        font-size: 12px;
        padding: 5px;
        border: 1px solid #ddd;
        border-radius: 8px;
        margin-bottom: 10px;
        font-weight: bold;
        max-height: 200px;
    }
`;
