import React from "react";
import { BrowserRouter } from "react-router-dom";
import GlobalStyles from "./styles/global";
import Routes from "./routes";
import usePersistedState from "./utils/usePersistedState";

import { ThemeProvider } from "styled-components";
import light from "./styles/themes/light";
import dark from "./styles/themes/dark";
import { useState } from "react";
import AppProvider from "./context/index.";
import { ThemeSwitcher } from "./components/ThemeSwitcher";

interface IUser {
    avatar_url: string;
    login: string;
    name: string;
    bio: string;
    location: string;
    company: string;
    twitter_username: string;
}

const App: React.FC = () => {
    const [theme, setTheme] = usePersistedState(dark);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <ThemeProvider theme={theme}>
            <AppProvider>
                <BrowserRouter>
                    <Routes />
                    {/* <ThemeSwitcher toggleTheme={toggleTheme} /> */}
                </BrowserRouter>
                <GlobalStyles />
            </AppProvider>
        </ThemeProvider>
    );
};

export default App;
