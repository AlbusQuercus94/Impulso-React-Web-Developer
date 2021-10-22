// AULA 1 - MAP
//Map é uma coleção de arrays no formato [chave, valor]
// Os métodos usados em um map são os: set, get e delete.
// Set adiciona uma nova [chave valor]
// Get pega o valor de uma chave
// Delete apaga uma chave

const meuMapa = new Map();

meuMapa.set('Nome','Pedro');
/*Dentro dos parenteses só aceita strings e variáveis, diferente de object que aceita um nome 'qualquer'. */

console.log(meuMapa.get('Nome'), meuMapa.get('Idade')); 
//Se a chave é uma string, tem que ser chamada como string.
//NÃO ACEITA HOISTING

meuMapa.set('Idade', 27);

console.log(meuMapa.get('Nome'), meuMapa.get('Idade')); 

console.log(meuMapa);

meuMapa.delete('Idade');

console.log(meuMapa);

//Diferença de Map e Object
/*
Maps podem ter chaves de qualquer tipo;
Maps possuem a propriedade length;
Maps são mais fácieis de iterar;
Utilizado quando o valro das chaves é desconhecido;
Os valores tem o mesmo tipo
*/

// --------------------------------------------------------------
// AULA 2 - SET
// Set são estruturas que armazenam valores ÚNICOS, jamais se repetem
// Os métodos mais comuns são: add, has e delete.
// Add adiciona um novo valor
// Has procura se há determinado valor
// Delete apaga determinado valor

const meuSeto = new Set();
meuSeto.add(8);
meuSeto.add(2);
meuSeto.add(8)
console.log(meuSeto);

meuSeto.has(2);
meuSeto.delete(8);

console.log(meuSeto)

// Diferenças entre Set e Array
/*
Possui valores únicos;
Em vez da propriedade length, consulta-se o número de registros pela propriedade size;
Não possui os métodos map, filter, reduce...
*/

//Atividade 1 - Maps

// Crie uma função que retorna o nome dos membros de um Map que tem o papel 'ADMIN' no sistema.

// Crie uma função getAdmins que recebe um Map;
// Crie um Map e popule-o com nomes de usuários e seus papeis no sistema. (Ex: 'Luiz' => 'Admin');
// Dentro de getAdmins, utilize o loop for...of para retornar uma lista com os nomes dos usu;arios que são administradores.

const meusIds = new Map();
meusIds.set('Pedro','Admin');
meusIds.set('Liz','Admin');
meusIds.set('Mário','User');
meusIds.set('Well','Admin');
meusIds.set('Victor','User');
meusIds.set('Elisete','Admin');
meusIds.set('Junin','User');

function getAdmins (map){
    let arrayAdmin = []
    for(x of map){
        if(x[1] == 'Admin'){
            arrayAdmin.push(x[0]);
        }
    }
    return arrayAdmin
}

function getUsers (map){
    let arrayAdmin = []
    for(x of map){
        if(x[1] == 'User'){
            arrayAdmin.push(x[0]);
        }
    }
    return arrayAdmin
}

console.log('Admins:',getAdmins(meusIds))

console.log('Users:',getUsers(meusIds))

// Atividade 2 - Sets
// Dado o array [30, 30, 40, 5, 223, 2049, 3034, 5], retorne outro array apenas com valores únicos.

let arr1 = [30, 30, 40, 5, 223, 2049, 3034, 5];
let meuSeti = new Set()
let arrUnico = []

for( x of arr1){
    meuSeti.add(x)
}

meuSeti.forEach(e => arrUnico.push(e))

console.log(meuSeti,arrUnico)


/*Resposta da Professora*/
function unicos (set){
    let unique = new Set(set)
    return [...unique]
}

console.log(unicos(meuSeti))