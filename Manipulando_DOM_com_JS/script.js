//AULA 01 - DOM vs BOM
//O D.O.M. é a sigla para Document Object Model. De acordo com o MDN Web Docs:
/*  "O DOM (Document Object Model) é uma interface de programação para os documentos HTML e XML. Representa a página de forma que os programas possam alterar a estutura do documento, alterar o estilo e conteúdo. O DOM representa o documento com nós e objetos, dessa forma, as linguagens de programação podem se conectar à página."(2021. https://developer.mozilla.org/pt-BR/docs/Web/API/Document_Object_Model/Introduction) */

// O B.O.M. é a sigla para Browser Object Model. É a representação de como o browser funciona tendo como mãe a "window" e filhos: "document", "history", "location", "screen" e "navigator".

//O assunto aqui é o DOM.

//-------------------------------------------------------------------
//AULA 02 - MÉTODOS: Manipulando o DOM

//document.getElementById('id'): retorna o elemento no document com a id determinada

//document.getElementByClassName('class'): retorna o elemento no document com a class determinada

//document.getElementsByTagName('tag'): retorna um array dos elementos no document com a tag determinada

var nome2Id = document.getElementById('name2');
var nomeClass = document.getElementsByClassName('nome');
var liTags = document.getElementsByTagName('li')

console.log(nome2Id)
console.log(nomeClass)
console.log(liTags)
//document.querySelectorAll('tag .class #id')

var queryClass = document.querySelectorAll('.nome')

console.log(queryClass)

//document.createElement('tag'): cria novo elemento html
//document.removeChild('tag'): remove um elemento filho
//document.appendChild('tag'): adiciona um elemento como filho de outro
//document.replaceChild(newTag, oldTag): substitui um elemento filho por outro
document.createElement('div')
var novoDiv = document.createElement('div')
nome2Id.appendChild(novoDiv)
novoDiv.innerText = `Novo elemento criado pelo dom`

//-------------------------------------------------------
// AULA 03 - MANIPULANDO ESTILOS

//Pegando uma var elemento = document.getElementbyId('elemento')
//elemento.classList.add('estilo1'): adiciona a lista de classes do #elemento a classe .estilo1
//elemento.classList.remove(estilos2): remove da lista de classes do #elemento a classe .estilos2
//elemento.classeList.toggle('batma'): pegando a lista de classes do #elemento, caso tenha a classe .batma o toggle remove a mesma, caso não tenha o toggle adiciona a classe .batma 

novoDiv.classList.add('estilo1');
novoDiv.classList.remove('estilos2');
novoDiv.classList.toggle('batma')

novoDiv.style.color = "red"

for(x of liTags){
    x.style.color = 'blue'
}

// ----------------------------------------------------------
// AULA 04 - EVENTOS

//Eventos são qualquer tipo de ação que um usuário faça numa página ou interaja na página.

//Eventos de mouse:
/*
    mouseover
    mouseout
*/
//Eventos de clique
/*
    click
    dbclick
*/
//Eventos de atualização
/*
    change
    load
*/

//Event listener: cria um evento que será acionado quando o usurário executar determinada ação

var botao = document.createElement('button')
var body = document.getElementsByTagName('body')
body[0].appendChild(botao)

botao.style.height = '50px'
botao.style.width = '150px'
botao.innerText = 'Evento Grito'

function grito (){
    return alert('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
}

botao.addEventListener("click", grito) //CORRETO

// botao.addEventListener("click", grito()) //ERRADO