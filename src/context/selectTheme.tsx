import { createContext, useContext, useState } from "react";
import light from "../styles/themes/light";
import dark from "../styles/themes/light";

const AreaContext = createContext({});

export const SelectTheme = ({ children }: any) => {
    const [theme, setTheme] = useState(light);

    const toggleTheme = () => {
        setTheme(theme.title === "light" ? dark : light);
    };

    return (
        <AreaContext.Provider value={{ toggleTheme }}>
            {children}
        </AreaContext.Provider>
    );
};

export function useThemeToggle() {
    const context = useContext(AreaContext);

    if (!context) {
        throw new Error("useTablePauta must be used in a user selection area.");
    }

    return context;
}
