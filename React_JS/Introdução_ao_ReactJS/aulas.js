// Parte 1 - História e Conceitos
/*
Criado em 2011 por Jordan Walke no Facebook
Baseado no XHP, um framework para criação de HTML no PHP
Utilizado no mural de notícias da ferramenta.

2012 - Utilizando no Instagram
2013 - Anúncio para liberação Open Source na JS Conf US
2015 - React Native
2015 - UWP (Universal Windows Platform) uma aplicação react para aplicações desktop

*/

//React é uma biblioteca e não um framework;
//Principal função é a criação da interface para o usuário.
//React vem com muita componentização.
//React é uma linguagem declarativa
//Declarativa vs Imperativa
//React está preocupado apenas com o que é exibido na interface do usuário.
// React é baseado em components

//Parte 2 - Configurando o React

//Tem 3 formas de configurar o React JS:
/*
    React Create App
    React Scripts
    Task Runners e Bundler Sizers
*/

//O que é JSX
//React não separa as tecnologias colocando marcação em arquivos separados, e sim separa conceitos e mantém o código pouco acoplado chamando-os de componentes.
//Não é obrigatório a utilização do JSX
//JSX é uma sintax sugar para React.createElement
//O browser não interpreta o JSX, para isso é necessário um transpilador para que a palicaçõ possa entender o código. O mais utilizado é o babel.

// -------------------------------------------------------------------
//Parte 03 - RENDERIZAÇÂO

//React 'pensa' em como a interface deve estar a cada momento ao invés de alterá-la com o tempo, o que faz ter ganho de performance e evita uma série de erros.

//Componentes e Props
/*
    Função e Classe;
    Props;
    Composição de Componentes;
    Extração de Componentes
*/

//Boa pratica na criação de um novo arquivo componente é usar o CamelCase para o nome
//Outra boa pratica dos componentes é eles serem mais abstrado possível, sem estado, sem manipulação de dados.


// ----------------------------------------------\\
// PARTE 04 - ESTADO E CICLO DE VIDA 

/*O Ciclo de Vida do React são as seguintes estados:
    Inicialização
    Montagem
    Atualização
    Desmontagem
*/

//Nenhum componente pai ou filho devem saber se outro componente possui estado ou não.
//O estado é apenas local ao componente e caso seja necessário enviar algum atributo para outro, então é feito via props.

// Ecossistema do React 
/*
    React Router;
    Redux
    Material UI
    Ant Design
    Storybook
    Gatsby
    Jest
    React i18n Next
*/

//--------------------------------------------------------------------
// PARTE 05 - RENDERIZAÇÃO CONDICIONAL
//Em React, você pode criar componentes distintos que encapsulam o comportamento que você precisa. Então, você pode renderizar apenas alguns dos elementos,  dependendo do estado da sua aplicação.

/*
    Variáveis de Elementos
    If inline com operador lógico &&
    If else inline com operador condicional
    Evitando que um componente seja renderizado
*/

// ----------------------------------------
// PARTE 06 - LISTAS E CHAVES
/*
    Renderizando Multiplos Componentes
    Componente de lista Básico
    Chaves
    Extraindo Componentes com Chaves
    Chaves devem ser únicas apenas entre elementos irmãos.
*/

//----------------------------------------
//PARTE 07 - MANIPULANDO EVENTOS
//Manipular eventos em elementos React é muito semelhrante a manipular eventes em elementos do DOM.
/*Extistem algumas diferenças sintáticas:
    -Eventos em React são nomeados usando cmelCase ao invés de letasminúsculas.
    -Com o JSX você passa uma função como manipulador de eventos ao invés de um texto.
*/

/*O que é ensinado:
    Eventos
    Passando argumentos para manipuladores de eventos.
*/