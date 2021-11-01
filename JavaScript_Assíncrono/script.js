// AULA 1 - ASSÍNCRONO, PROMISES E ASYNC/AWAIT 

// Definição: assíncrono é o que não ocorre ao mesmo tempo. 
// O JS roda de maneira SÍNCRONA

/*
Síncrono: o cliente faz uma requisição ao servidor, que vai pesquisar a requisição, só após a resposta do servidor o cliente continua o serviço.

Assíncrono: o cliente faz uma requisição ao servidor, mas pode continuar trabalhando enquanto o servidor pesquisa a requisição, e manda a resposta ao cliente que continuou trabalhando.
*/

//Promises: objeto de processamento assíncrono. Inicialmente o seu valor é desconhecido. Então ela pode ser resolvida ou rejeitada.

/*
A requisição pendente ela tem dois tipos de 'retornos': o que a requisição é resolvida retornando o que foi pedido, e a que a requisição é rejeitada retornando um erro.
*/

/*Uma promise tem 3 estados:
    -pending: requisição pendendente;
    -fulfilled: requisição realizada;
    -rejected: requisição rejeitada

*/
//Exemplo de Promise

const myPromise = new Promise((resolve, reject) => {
    window.setTimeout(() => {
        resolve(console.log('Funcionou!!!'))
    }, 2000)
});

await myPromise
    .then((result) => result + ' passando pelo then')
    .then((result) => result + ' e acabou!')
    .catch((err) => console.log(err.message));

console.log(myPromise)

//Async: é uma palavra reservada no javascript para determinar a assincronicidade de uma função. Com o uso dela que a palavra reservada await funciona. 
//Então repentindo o código anterior:

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Funcionou!!!')
        }, 2000)
        
        console.log('Pendente')
    });
    
    const resolved = await myPromise
        .then((result) => result + ' passando pelo then')
        .then((result) => result + ' e acabou!')
        .catch((err) => console.log(err.message));
    
    return console.log(resolved)
}

await resolvePromise()

//Repetindo a função anterior mas com try... catch

async function resolvePromise(){
    const myPromise = new Promise((resolve, reject) => {
        window.setTimeout(() => {
            resolve('Funcionou!!!')
        }, 2000)
        
        console.log('Pendente')
    });

    let result;
    
    try{
        result = await myPromise
            .then((result) => result + ' passando pelo then')
            .then((result) => result + ' e acabou!')
    }
    catch(err){
        result = err.message;
    }
    
    return console.log(result)
}