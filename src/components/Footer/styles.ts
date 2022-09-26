import styled from "styled-components";

export const FooterBase = styled.footer`
    /*display: flex;*/
    justify-content: space-around;
    align-items: center;
    background: ${(props) => props.theme.colors.secondary};
    padding: 40px;

    & {
        @media (max-width: 800px) {
            flex-direction: column;
        }
    }

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 14px;
    }

 span {
        /* margin-top: 28px; */
        /* text-align: center; */
        font-weight: bold;
        color: var(--text-color);
        padding: 8px;
        margin-left: 370px;
    }

    div {
        display: flex;
        padding: 2px;
        border-radius: 8px;
        line-height: 50px;
        font-size: 12px;
        text-decoration: none;
        font-weight: bold;
        color: #9466ff;
        /* background-color: #29292e; */
        letter-spacing: 2px;
        

        & + div {
            margin-left: 13px;
        }

        &:hover {
            transition: 0.5s;
            opacity: 0.7;
        }
    }

    @media (max-width: 700px) {
        div {
            display: flex;
            padding: 2px;
            border-radius: 8px;
            line-height: 50px;
            text-decoration: none;
            font-weight: bold;
            color: #9466ff;
            background-color: #29292e;
            letter-spacing: 2px;

            &:hover {
                transition: 0.5s;
                opacity: 0.7;
            }

            & + div {
                margin-left: 0px;
            }

            svg {
                font-size: 10px !important;
            }
        }
    }
`;
