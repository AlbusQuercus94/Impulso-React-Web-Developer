// AULA 01 - MAP VS FOREACH 

//Map: retorna um novo array, sem alterar o array original, realizando determinada operação em cada um dos elementos do array, em orderm.
//A sintaxe de um map é o seguinte: array.map(callback, thisArg) sendo que callback contem (item, index, array).
// Callback é a função a ser executada em cada elemento do array
// thisArg é opcional, o valor de this dentro da função de callback

var array1 = [1, 2, 3, 4, 5]
let array2 = [];
function multi(item){
    array2.push(item*2);
}


const map1 = array1.map((item) => item *2) //Retorna um array

array1.forEach((item) => array2.push(item *2)) //Não faz retorno, apenas executa uma função

let foreach1 = array1.forEach((item) => item * 2) //Aqui os valores são lançados ao ar sem expecificação de ondem devem ficar.

console.log(map1)
console.log(foreach1)


//------------------------------------------------------\\
// AULA 02 - FILTER 

// Filter é um método que filtra um array de acordo com determinada condição, e retorna um novo array que segue essa condição.

//Sintaxe do filter é identica ao do map: array.filter(callback, thisArg)

//Exemplo

const filter1 = array1.filter((item) => item % 2 == 0)

console.log(filter1)

//-----------------------------------------------\\
// AULA 03 - REDUCE 

// REDUCE: é um método que, diferente dos anteriores, não retorna um array com os elementos após uma função. Ele executa uma função em todos os elementos e retorna um único valor.

const reduce1 = array1.reduce((x,y) => x += y)

console.log(reduce1)

//-------------------------------------------------------------\\
// ATIVIDADE 01 - MAP
/*Pratique a sintaxe de multiplicação de números, uma vez utilizando o parâmetro this de um objeto criado por você, e depois sem ele.*/

let array3 = [1, 2, 3, 4, 5];
const numeros = {
    five: {
        name: 'Cinco',
        value: 5
    },
    six:{
        name:'Seis',
        value: 6
    }
};

function tabuadaSemThis(array, numero){
    let map3 = array.map((item) => item * numero)
    return `Tabuada de ${numero}: ${map3}`
}

function tabuadaComThis (array, objeto){
    return array.map(function (item){
        return item * this.value
    },objeto)
}


console.log("Tabuada de Cinco",tabuadaComThis(array3, numeros.five))
console.log("Tabuada de Seis",tabuadaComThis(array3, numeros.six))

for(x in numeros){
    // console.log(numeros[x])//única forma de acessar uma propriedade dentro de um objeto em um for in
    console.log(`Tabuada de ${numeros[x].name}`,tabuadaComThis(array3, numeros[x]))
}

console.log(tabuadaSemThis(array3, 4))

// --------------------------------------------------\\
// ATIVIDADE 2 - FILTER 
/*Filtre e retorne todos os números pares de um array. */

let array4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

const filter2 = array4.filter((item) => item % 2 == 0)
const filter3 = array4.filter((item) => item % 2 !== 0)
console.log('No array', array4, '\nos números pares são:\n', filter2, '\ne os ímpares são:\n', filter3)