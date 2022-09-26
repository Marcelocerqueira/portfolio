/* Definição de tipos global na aplicação */
/* Sobre escrevendo tipos dentro do 'styled-components */
import "styled-components";
declare module "styled-components" {
    export interface DefaultTheme {
        title: string;

        colors: {
            primary: string;
            secondary: string;
            background: string;
            text: string;
        };
    }
}

/* Necessário condigurar tsconfig.json =>   
*   "files":["src/styles/styled.d.ts"]
     }
 */
