// AULA 1 - TIPOS DE FUNÇÕES
//Estrutura

function nome (parametros){
    // Código
    return
}

// Função Anônima: funções anônimas são funções sem nomes que representam expressões

const soma = function (a, b){
    return a + b
}

soma(3, 5)
soma(5, 5)

// Função Autoinvocavel: chamada de IIFE (Immediately Invoked Funtion Expression) é uma função anonima que é seguida por um parenteses, se autoinvocando.

var result = (function () {
    let string = 'Se chamando a si mesmo.';
    return string
})();

console.log(result)

//Callback: é uma função usada como parametro de outra função.

function callback (operator, a, b){
    return operator(a, b)
}
console.log(callback(soma, 2, 5))


// -------------------------------------------------
// AULA 2 - PARAMETROS
// A partir do ES5, é possivel definir nos parametros um valor padrão.

function subtracao (a = 0, b = 0){
    return a - b
}

console.log(subtracao())

// Arguments: é um array que contêm todos os parâmetros que foram passados quando a função foi invocada.

function multiplicacao (a = 0, b = 0){
    console.log(arguments)
    return a * b
}

console.log(callback(multiplicacao, 2, 5))

// Arrays Spread: como usar os elementos de um array, usa-se o spread operator. Exemplo

let arr2 = [10, 6]
console.log(callback(soma,...arr2))

// Rest Operator: é o mesmo que o spread, contudo, ele é usando diretamente nos parâmetros, onde permite um número infinitos de elementos como parametros.

function expoente (...args){
    return args
}

console.log(expoente(1,5,8,476,5,20,31))

//Desestructuring Objects: é uma forma de atribuir variáveis a alguma chave aos objeto.

let obj2 = {
    chave1: 'valor1',
    chave2: 'valor2',
    chave3: 'valor3',
}

var {chave1, chave2, chave3} = obj2; // O nome da váriavel a ser atribuida, deve ser o mesmo nome da chave
console.log(chave1, chave2, chave3) // Inves de e usar obj3.chave1, o desestructurin permite que o faça normalmente

// ----------------------------------------------------------------------
//AULA 3 - FOR, WHILE E IF
//Laços de Repetição

//if ... else: é um laço de repetição que recebe uma condição, e caso verdadeira, retorna um bloco, caso falsa, retorna outro bloco.
/*
if(true){// Caso verdadeiro
    // Declaração se verdadeiro
}else{// Caso falso
    // Declaração caso falso
}
*/
//Também há o caso de mais de uma condição, que é onde entra-se o else if
/*
if(true){
    // Condição 1 retorna true
} else if(!false){
    // Condição 1 retorna falso, condição 2 retorna true
    // Declaração retornada
}else{
    // Nenhuma das condições anteriores retornou true
}
*/
//SWITCH : é um laço que retorna um determinado valor dependendo do resultado da condição

let switch_test = 'olá';

switch (switch_test){
    case 'oi':
        console.log('Prazer')
        break
    case 'olá':
        console.log('Muito Prazer')
        break
    default:
        console.log('Oi');
        break
}


//for: é um laço que repete o mesmo bloco de código um determinado número de vezes. É separado em 4 partes.

// for(/*Declaração 1*/; /*Declaração 2*/;/*Declaração 3*/){
//     //Bloco
// }
//Declaração 1 é executada uma vez no primeiro laço
//Declaração 2 é a condição para a repetição do laço
//Declaração 3 é o código executado ao fim de cada laço

//for...in: iteração para objetos, serve também para arrays, mas não se recomenda

for (x in obj2){
    console.log(x)
}

//Acima, para cada propriedade x em object, a propriedade será apresentada no console. O 'x' dentro do for não é como uma incognita, pode ter qualquer nome, retorna sempre as propriedades.

//for...of: iteração para arrays. Possui uma sinxate parecida com o for in.
for(x of arr2){
    console.log(arr2.indexOf(x), x)
}
//while...do: enquanto uma condição for verdadeira executa um código até a condição se tornar falsa
let i = 0;
while(i<3){
    i++
    console.log('É true', i)
}


//do...while: executa um codigo antes e verifica a condição do while. Caso verdadeira repete o laço.
do{
    i++
    console.log('É true antes', i)
}while(i<3)


// -------------------------------------------------------
// AULA 4 - THIS
// This: é uma palavra reservada que significa 'este'. Ela depende do contexto para fazer sentido. Dentro do contexto de um objeto, this é o mesmo que o nome do objeto. Exemplo: obj2.chave1 == this.chave1 (só funciona dentro do objeto)

let obj3 = {
    nome: 'Pedro',
    sobrenome: 'Albuquerque',
    completo: function (){
        return this.nome + ' ' + this.sobrenome
    }
}

console.log(obj3.completo())