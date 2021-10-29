//Módulos
// São arquivos que tem a capacidade de importar e exportar informações de outros arquivos do mesmo tipo.

/*Vantagens
Organização do código
Compartilhamento de variáveis em escopos diferentes
Explicita as dependências dos arquivos.
*/

// Exportando

// Named Export
/*
Ou declara a palavra export antes da função que quer-se exportar

    export function name(param){
        code
    }

Ou declara as funções e colocam todas elas em um único bloco de export:

    export {
        funcao1;
        funcao2;
        funcao3;
    }

*/

//Default Export
//O arquivo com default export só exporta um único dado, que será o retorno padrão do arquivo:
/*
    [...]
    export function name(param){
        code
    }

    export {
        funcao1;
        funcao2;
        funcao3;
    }

    export default name
*/

//Importando
//Se for um arquivo com named export
/*
    import {funcao1, variavel, class} from './arquivo_named.js'
*/

//Caso seja um default export
/*
    import name from './arquivo_default.js'
*/

//Apedidando os importados

/*
    import {funcao as Apelido} from './arquivo_named.js';
    Apelido.method()
*/

/*
    import * as NICKNAME from './arquivo.js'
    NICKNAME.methodA();
    console.log(NICKNAME.variavel);
*/

//==================== ATENÇÃO ====================\\
/*Para os arquivos poderem ser chamados como módulo, é necessário por na tag script no html type='module'. 
    <script type='module' src='./script.js'></script>
*/

//OBS: módulos sempre estão em strict mode