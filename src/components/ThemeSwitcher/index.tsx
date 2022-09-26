import React, { useContext, useState } from "react";
import Switch from "react-switch";
import { ThemeContext } from "styled-components";

import { Container } from "./styles";

interface Props {
    toggleTheme(): void;
}

export const ThemeSwitcher: React.FC<Props> = ({ toggleTheme }: any) => {
    const { colors, title } = useContext(ThemeContext);

    return (
        <Container>
            <span style={{fontSize:20, paddingRight: 5}}>🌞</span> 
            <Switch
                onChange={toggleTheme}
                checked={title === "dark"}
                checkedIcon={false}
                uncheckedIcon={false}
                height={10}
                width={30}
                handleDiameter={15}
                offColor="#afacac"
                onColor="#085D8B"
                // offHandleColor={colors.secondary}
                // onHandleColor={colors.text}
            />
          <span style={{fontSize:20}}>🌛</span>
        </Container>
    );
};
