import React, { InputHTMLAttributes } from "react";
import { IconBaseProps } from "react-icons";
import { Content } from "./styles";

interface IConProps extends InputHTMLAttributes<HTMLInputElement> {
    name?: string;
    icon?: React.ComponentType<IconBaseProps>;
}
export const Icon = ({ icon: Icon, ...rest }: any) => {
    return (
        <>
            <Content {...rest}>{Icon && <Icon size={40} />}</Content>
        </>
    );
};
