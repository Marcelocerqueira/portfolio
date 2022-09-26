import { SelectTheme } from "./selectTheme";

//**Aqui onde serão importados todos os hooks (CONTEXTO) */
const AppProvider = ({ children }: any) => {
    return (
        <>
            <SelectTheme>{children}</SelectTheme>
        </>
    );
};

export default AppProvider;
