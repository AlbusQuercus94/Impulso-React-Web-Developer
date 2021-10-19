// AULA 1
// PARTE 1 - ATRIBUIÇÃO DE VALORES

//Boas práticas de Java Script - Nomeando variáveis
/*
    CASO                            EXEMPLO
    Original Variable as String     some awesome var
    Camel                           someAwesomeVar      *Mais usado no Java Script
    Snake                           some_awesome_var
    Kebab                           some-awesome-var
    Pascal                          SomeAwesomeVar
    Uppercase Snake                 SOME_AWESOME_VAR    *Usado para constante
*/

// var é a atribuição original no javascript para variaveis
// let foi criada posteriormente, criando o conceito de escopo de bloco;
// escopo de bloco é onde a variável é atribuida: dentro de uma função ou fora de qualquer função (escopo global); 
// let respeita o escopo em que está inserido, não saindo dele.

var a1 = 1; //atribuição
let a2 = 2; //atribuição

if(true){
    var a1 = 11;
    let a2 = 22; //redeclaração de let só é permitido se estiverem em escopos diferentes.
    console.log("dentro do laço var a1 =", a1, ";\ndentro do laço let a2 =", a2,";")
}
console.log("fora do laço var a1 =", a1, ";\nfora do laço let a2 =", a2,";")

//Atribuição e redeclaração

var a1 = 2; // var podem ser redeclarados
//let a2 = 2; // let não podem ser redeclarados.
a2 = 5; // let pode ser reatribuidos

//hoisting: é a atribuição de uma variável antes de declara-la

a3 = 10 // atribuição de uma nova variável
var a3; // declaração da variável anteior

console.log('hoisting funcionando: a3 =', a3) 

// ------------------------------------------------------------- //

//PARTE 2 - COSNTANTES

/*
Não pode ser redeclarada, nem reatribuida e não pode fazer hoisting.
Usa-se o modelo Uppercase Snake
*/

//NÃO PODE
/*
// Atribuição tem que ser feita na mesma linha da declaração
const PI;
PI = 3.14;

//Hoisting
PI = 3.14 //hoisting
const PI;
*/
const PI = 3.14; //Jeito certo

console.log(PI)

// ----------------------------------------------------------------------------------- //
// AULA 02
// PARTE 01 - ESTRUTURA DE DADOS
/*
Java Script é uma linguagem de tipagem dinâmica, tipagem fraca. Ou seja, não precisa especificar o tipo do valor antes de declara-lo.
Assim, uma variável pode mudar de tipo sem problemas.
EXEMPLO ABAIXO
*/

let a4 = "Pedro";
console.log("let a4 =", a4, '\na4 é uma', typeof a4); //typeof apresenta o tipo de uma determinada variável //tipo primitivo

a4 = 28;
console.log("let a4 =", a4, '\na4 é uma', typeof a4);//tipo primitivo
a4 = false;
console.log("let a4 =", a4, '\na4 é uma', typeof a4);//tipo primitivo

a4 = undefined
console.log("let a4 =", a4, '\na4 é uma', typeof a4);//tipo primitivo

a4 = 2n ** 53n
console.log("let a4 =", a4, '\na4 é uma', typeof a4);//tipo primitivo

a4 = {}
console.log("let a4 =", a4, '\na4 é uma', typeof a4); //tipo de referencia

a4 = []
console.log("let a4 =", a4, '\na4 é uma', typeof a4); //tipo de referencia

// -------------------------------------------------------------------
//PARTE 2 - STRING
//Comumento utilizada para textos, valores declarados entre aspas ou acentos graves.

// .concat(): concatena duas var
let a5 = 'nome'
let b5 = 'sobrenome'
console.log(a5.concat(b5))

// Obs 1.1: pode-se concatenar uma string com um number, mas não pode concatenar um number com uma string

console.log(a5.concat(a1)) //Pode
// console.log(a1.concat(a5)) //Não pode

 // Obs 1.2: pode-se concatenar uma string com mais de um elemento
console.log(a5.concat(' ' + b5, ' ', a5))

// .length: retorna o tamanho de uma string
console.log(
    'a5 = ', a5,
    '\ntamanho de a5:', a5.length,
    '\nb5 = ', b5,
    '\ntamanho de b5:',b5.length
)

// new String(): cria um novo objeto String

let c5 = new String("nome");
console.log('o valor de c5 = ', c5)

//index: toda String pode receber um valor de index como um array.

console.log('Soletrando a5:', a5[0], a5[1], a5[2], a5[3])

//Uso do acentos agudos

console.log(`${a5} ${b5}`)

//.split(): separa uma string em determinado valor. Retorna como array

console.log('Separando b5 nas letras "o"', b5.split('o'))

//.includes(): procura por um valor dentro de uma string. Retorna um boolean.

console.log('Em b5 há a letra "b"?', b5.includes('b'))

//.startsWith() e .endsWith(): respectivamente, se a string começa ou termina com determinado valor

console.log(`A variável a5 começa com "n"? ${a5.startsWith("n")}.
A variável b5 termina com "o"? ${b5.endsWith('o')}.
`)

// -------------------------------------------------------------
// PARTE 3 - NUMBER
// Envolve todos os numeros racionais.
// Todos os operadores aritméticos podem ser usados com number.

//Math.floor
//Math.ceil
//.toString

// -----------------------------------------
// PARTE 4 - BOOLEAN
// Boolean são valores lógicos true ou false.

// ----------------------------------------------
// PARTE 5 - ARRAYS
// Arrays são lista de elementos iteráveis. O index no javascript começa no 0. Então o primeiro elemento de qualquer array é sempre o index 0.

//Métodos usados com array
// array.push(n): coloca o elemento n na ultima posição da lista
// array.pop(): retira o último elemento da lista
// array.unshift(n): adiciona o elemento n na primeira posição da lista
// array.shift(): retira o primeiro elemento da lista

//Observação: sempre que for para adicionar, o elemento tem que ser determinado. Já para retirar um elemento, o método não recebe parâmetro.

//Observação: todos os métodos usados em string, podem ser usados com array.

//array.every(i => i === n): retorna um valor boolean, o a questão lógica se todos os itens do array são n.

//array.some(i => i === n): retorna um valor boolean, o a questão lógica se algum  dos itens do array são n.

//array.reverse(): retorna um array inverso do array original.

let arr1 = [1,1,1,1,2,1,1]
let teste = arr1.some(e => e === 2)
console.log(teste)

// ------------------------------------------
// PARTE 6 - OBJETOS
//Uma estrutura tipo chave valor, é uma lista se elementos chaves que possui um valor. 

let obj1 = {
    chave1: 'valor1',
    chave2: 'valor2'
}

obj1.name = 'Liz'

console.log(obj1)

Object.values()