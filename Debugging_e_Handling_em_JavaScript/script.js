// AULA 01 - TRATAMENTO DE ERROS

//ECMASCRIPT ERROR 
// São erros que ocorrem em tempo de execução. É composto por: mensagem, nome, linha e call stack.


//DOMException
//Erros relacionados ao Document Object Model (DOM). Pode ocorre quando relacionamos uma página da web com o javascript


// AULA 02 - TRATANDO OS ERROS

//Throw: é uma forma de retornar um error. Inves do uso de return que apresenta uma string como error, o throw retorna a mesma string mas como error. Assim, é uma forma de criar um erro personalizado.

// TRY...CATCH 
//De acordo com o site W3Schools: O try, catch e finally lidam com alguns ou todos os erros qeu podem ocorrer em um bloco de código, enquanto ainda executa o código.

//Try permite definir um bloco de código a ser testado quanto a erros enquanto está sendo executado.
//Catch permite definir um bloco de código a ser executado, se ocorrer um erro no bloco try.
//Finally permite que voce execute o código, após try e catch, independentemente do resultado.

// Exemplo
//Pegando o exercicio do módulo de Variáveis.
function verificarPalindromo (word){
    //Para permitir que números possam ser verificados
    let palavra = word.toString()

    //Impedir a verificação de objetos como null, undefined
    if(!word) throw 'Escreva uma palavra válida';

    //Verificação pra frases.
    if(palavra.includes(' ')){
        var array1 = palavra.split("")
        array1 = array1.filter(e => e != " ");
    }else{
        var array1 = palavra.split("");
    }

    let array2 = [...array1]; //array de word
    array1.reverse() //array de word reverso
    var count = 0; //contador de erros

    //Validação
    for(i = 0 ; i < array1.length; i++){
        if(array1[i] !== array2[i]){
            return console.log('Não é um palindromo')
        }
    }
    
    return console.log('É um palindromo')
}

function isError(state){
    try{
        verificarPalindromo(state)
    }
    catch(e){
        console.log(e)
    }
    finally{
        console.log(`A palavra escrita foi: "${state}"`)
    }
}

isError("")


//AULA 03 - MANIPULANDO O OBJETO ERROR
//Um erro é composto por message, fileName, e lineNumber. 
//Instanciar um novo erro é new Error(message, fileName, lineNumber)
//Para mudar o nome do erro é usando NovoErro.name('Nome do Erro')

// const meuError = new Error(`Tá 'tuto' errado`);
// meuError.name = `TaErradoTudo`
// throw meuError


//ATIVIDADE
const errorReferente = new ReferenceError('A variável não foi declarada.')
const errorNotObject = new TypeError('Não é um objeto.')
const errorNotNumber = new TypeError('Não é um número.')
const errorRanger = new RangeError('O valor indicado não é o tamanho do array.')


function verifica(array, num){
    try{
        if(!array || !num) throw errorReferente;
        if(typeof array !== 'object') throw errorNotObject;
        if(typeof num !== 'number') throw errorNotNumber
        if(array.length!==num) throw errorRanger;
        
        return array;
    }catch(e){
        if(e instanceof ReferenceError ){
            console.log(e.name)
            console.log(e.message)
        }
        else if(e instanceof TypeError ){
            console.log(e.name)
            console.log(e.message)
        }
        else if(e instanceof RangeError ){
            console.log(e.name)
            console.log(e.message)
        }
        else{
            console.log(`O erro ${e} não era esperado.`)
        }
    }
}

let array25 = [1,2,4]

console.log(verifica(array25, 3))