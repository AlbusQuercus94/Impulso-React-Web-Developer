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