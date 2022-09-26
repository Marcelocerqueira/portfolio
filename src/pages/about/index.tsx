import React, { useEffect, useState } from "react";
import styled, { keyframes } from "styled-components";
import PageDefault from "../../components/PageDefault";
import ImgPerfil from "../../assets/marcelo.jpeg";

import { Container, Content, Info, Painel } from "./styles";

//animação
const apperFromCenter = keyframes`
 from{
   opacity: 0;
   transform: translateX(50px);
 }
 to{
   opacity: 1;
   transform: translateX(0px);
 }
`;

export const AnimationContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 10px 20px;
    animation: ${apperFromCenter} 1s; //executando animação

    -webkit-box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75);
    box-shadow: -1px 6px 15px 2px rgba(0, 0, 0, 0.75); ;
`;

const About: React.FC = () => {
    const [togleConteudos, setTogleConteudos] = useState(false);
    const [valueInitialCss, setValueInitialCss] = useState(0);
    const [valueInitialReact, setValueInitialReact] = useState(0);
    const [valueInitialNode, setValueInitialNode] = useState(0);

    useEffect(() => {
        for (let i = 0; i <= 90; i++) {
            setTimeout(function () {
                setValueInitialCss(i);
                setValueInitialReact(i - 10);
                setValueInitialNode(i - 20);
            }, 3000);
        }
    }, []);

    const handleTogle = () => {
        // setTogleConteudos(prev => !prev);
        setTogleConteudos(!togleConteudos);
    };

    return (
        <PageDefault>
            <Container>
                <Content>
                    <img src={ImgPerfil} alt="Marcelo cerqueira" />
                    <h1 className="typing-animation">Hello,Marcelo 👋</h1>
                    <Info>
                        <Content>
                            <div className="painel-header">
                                <div className="ball red"></div>
                                <div className="ball yellow"></div>
                                <div className="ball green"></div>
                            </div>
                            <Painel>
                                <p>
                                    Graduated in Systems Analysis and
                                    Development, acting as Front-end
                                    Developer. On a journey of learning and
                                    continuous improvement, seeking to improve
                                    myself every day in development practices
                                    and studying.
                                </p>

                                <h3>
                                    🚀 Currently taking a course at Reckeatseat Bootcamp with a focus on technologies:
                                </h3>
                                <ul>
                                    <li>JavaScript</li>
                                    <li>Nodejs</li>
                                    <li>React</li>
                                    <li>React Native</li>
                                    <li>TypeScript</li>
                                    <li>Docker</li>
                                    <li>Material Ui</li>
                                    <li>Testes</li>
                                </ul>
                            </Painel>
                        </Content>
                    </Info>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
