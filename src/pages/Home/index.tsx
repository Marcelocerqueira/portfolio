import React, { useEffect, useState } from "react";
import PageDefault from "../../components/PageDefault";
import { Container, Content } from "./styles";

const About: React.FC = () => {
    return (
        <PageDefault>
            <Container>
                <Content>
                    <h1>Hello, I'm Marcelo </h1>
                    <span>💻 Software developer</span>
                    <div className="background-image"></div>
                </Content>
            </Container>
        </PageDefault>
    );
};

export default About;
