import { NavLink } from "react-router-dom";
import { HeaderContainer } from "./styles";
import { useLocation } from "react-router-dom";
// import Swicth from "react-switch";
// import { ThemeContext } from "styled-components";
import React, { useContext } from "react";
// import { ThemeSwitcher } from "../ThemeSwitcher";

const Header: React.FC = () => {
    const location = useLocation();
    // const { colors } = useContext(ThemeContext);

    return (
        <HeaderContainer>
            <div className="nav">
                {/* {location.pathname === "/" ? (
                    ""
                ) : (
                    <NavLink exact to="/" activeClassName="menuActive">
                        HOME
                    </NavLink>
                )} */}

                <NavLink exact to="/" activeClassName="menuActive">
                    HOME
                </NavLink>

                <NavLink exact to="/about" activeClassName="menuActive">
                    SOBRE
                </NavLink>

                <NavLink to="/projects" activeClassName="menuActive">
                    PROJETOS
                </NavLink>
            </div>
            <div className="swicth">
                {/* <Swicth
                    onChange={() => {}}
                    checked={false}
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={10}
                    handleDiameter={20}
                    offColor={colors.secondary}
                    onColor={colors.primary}
                /> */}
            </div>
        </HeaderContainer>
    );
};

export default Header;
