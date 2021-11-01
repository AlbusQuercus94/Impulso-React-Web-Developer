// AULA 01 - PARADIGMAS DA PROGRAMAÇÃO
//Imperativo: foca em como resolver os problemas
/*
    -Procedural;
    -Orientação a Objeto;
    -Processing Parallel;
*/

//Declarativo: foca em no que fazer
/*
    -Lógica;
    -Functional/DataFlow;
    -Database;
*/

//Aqui é uma aula de Orientação a objeto que é um paradigma imperativo.
//Em Programação Orientada a Objeto (POO) "os programas são 'objetos' que possuem uma série de propriedades." Os pilares são:
/*
    Herança
    Polimorfismo
    Encapsulamento
    Abstração
*/

//Abstração: Processo mental que consiste em isolar um aspecto determinado de um estade de coisas relativamente complexo, a fim de simplificar a sua avaliação0, classificação ou para permitir a comunicação do mesmo.

//Herança: o objeto filho herda propriedades e métodos do objeto mãe.

//Encapsulamento: cada classe tem propriedades e métodos independentes do restante do código.

//Polimorfismo: objetos podem herdar a mesma classe masse, mas se comportarem de forma diferente quando invocamos seus métodos


// -------------------------------------------------------------------
// AULA 02 - PROTOTIPOS E CLASSES

//Protótipos: todos os objetos JavaScript herdam propriedades e métodos de um prototype. O objeto Object.prototype está no topo desta cadeia.


//Classes: em JS não possuem classes nativamente. O que existe são "syntactic sugar", uma sintaxe feita para facilitar a escrita.
//Em uma classe possuem os seguintes propriedades:
/*
    constructor
    getter e setter
    super
    métodos
*/

// Exemplo:
class Animal{
    constructor(type = 'animal'){
        this.type = type;
    }

    get type(){
        return this._type;
    }

    set type(val){
        this._type = val.toUpperCase();
    }

    //Método
    makeSound(){
        return 'Making an animal sound.'
    }
}

class Cat extends Animal{
    constructor(specie){
        super('cat')
        this.specie = specie
    }

    get specie(){
        return this._specie
    }

    set specie(val){
        this._specie = val
    }

    makeSound(){
        let sound = super.makeSound()
        return sound + ` Woof I'm a polyglot cat.`
    }
}
let animal = new Animal()
let siames = new Cat ('Siamês')

siames._specie = 'Persa'

console.log(animal)
console.log(siames)
