import React, { LinkHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonLinkProps extends LinkHTMLAttributes<HTMLLinkElement> {
    target?: string;
}

const ButtonLink: React.FC<ButtonLinkProps> = ({ children, href, style }) => {
    return (
        <Container href={href} target="_blank" style={style}>
            {children}
        </Container>
    );
};

export default ButtonLink;
