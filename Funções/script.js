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
//for
//for...in: iteração para objetos
//for...of: iteração para arrays
//if/else if/else
//while...do: enquanto uma condição for verdadeira executa um código até a condição se tornar falsa
//do...while: executa um codigo enquanto uma função for verdadeira