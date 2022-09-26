import React, { ButtonHTMLAttributes } from "react";
import { Container } from "./styles";

interface ButtonLinkProps extends ButtonHTMLAttributes<HTMLButtonElement> {}

const Button: React.FC<ButtonLinkProps> = ({ children, ...rest }) => {
    return (
        <Container type="button" {...rest}>
            {children}
        </Container>
    );
};

export default Button;
