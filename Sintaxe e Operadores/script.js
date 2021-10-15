// -------------------------------------------------------
// Parte 1 - Atribuição
/*
OPERADOR       EXEMPLO       EQUIVALENTE
   =           X = Y         X = Y      //Apenas um símbolo de igual tem o sentido de ATRIBUIÇÃO
   +=          X += Y        X = X + Y
   -=          X -= Y        X = X - Y
   *=          X *= Y        X = X * Y
   /=          X /= Y        X = X / Y
   %=          X %= Y        X = X % Y //Porcentagem entre dois números tem o sentido de resto da divisão.
*/

// -------------------------------------------------------
// Parte 2 - Aritimética
/*
OPERADOR        DESCRIÇÃO
   +            Adição
   -            Subtração
   *            Multiplicação
   **           Exponenciação
   /            Divisão
   %            Resto de uma divisão
   ++           Incrementar
   --           Decrementar
*/

// -------------------------------------------------------
// Parte 3 - Comparação
/*
OPERADOR        DESCRIÇÃO
   =            Atribuição
   ==           Igual
   ===          Valor e tipo iguais
   !=           Diferente
   !==          Valor e tipo diferentes
   >            Maior que
   <            Menor que
   >=           Maior ou igual
   <=           Menor ou igual
*/

// -------------------------------------------------------
// Parte 4 - Lógica
/*
OPERADOR        DESCRIÇÃO
   &&           "e" lógica
   ||           Ou
   !            não lógico
*/

// -------------------------------------------------------
// Parte 5 - If Ternário
/*

Condição    &    Se verdadeiro   &    Se falso
*/

// ------------------------------------------------------------------------

function analyze (a, b){
   var a = parseInt(document.getElementById('numA').value);
   var b = parseInt(document.getElementById('numB').value);
   var answer = document.getElementById('answer');
   
   var soma = a + b;
   if(a == b){
      if(a + b < 10){
         answer.innerHTML=`<p> Os números ${a} e ${b} são iguais.</p><p> Sua soma é ${soma}, que é menor que 10.</p>`;
         console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é menor que 10.`)
      }
      else if(a + b > 10 && a + b < 20){
         answer.innerHTML=`<p> Os números ${a} e ${b} são iguais.</p><p> Sua soma é ${soma}, que é maior que 10 e menor que 20.</p>`;
         console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
      }
      else{
         answer.innerHTML=`<p> Os números ${a} e ${b} são iguais.</p><p> Sua soma é ${soma}, que é maior que 20.</p>`;
         console.log(`Os números ${a} e ${b} são iguais. Sua soma é ${soma}, que é maior que 20.`)
      }
   }
   else{
      if(a + b < 10){
         answer.innerHTML=`<p> Os números ${a} e ${b} são diferentes.</p><p> Sua soma é ${soma}, que é menor que 10.</p>`;
         console.log(`Os números ${a} e ${b} são diferentes. Sua soma é ${soma}, que é menor que 10.`)
      }
      else if(a + b > 10 && a + b < 20){
         answer.innerHTML=`<p> Os números ${a} e ${b} são diferentes.</p><p> Sua soma é ${soma}, que é maior que 10 e menor que 20.</p>`;
         console.log(`Os números ${a} e ${b} são diferentes. Sua soma é ${soma}, que é maior que 10 e menor que 20.`)
      }
      else{
         answer.innerHTML=`<p> Os números ${a} e ${b} são diferentes.</p><p> Sua soma é ${soma}, que é maior que 20.</p>`;
         console.log(`Os números ${a} e ${b} são diferentes. Sua soma é ${soma}, que é maior que 20.`)
      }
   }
   //Testando a mente
   var igualdade = true;
   var menor10 = true;
   var menor20 = true;

   if(a==!b){igualdade=false};
   if(soma>20){menor20=false};
   if(soma>10){menor10=false};

   if(igualdade){
      if(!menor20){
         console.log(`iguais soma maior que 20`)
      }
      else if(menor10){
         console.log(`iguais soma menor 10`)
      }
      else{console.log(`iguais soma entre 10 e 20`)}
   }else{
      if(!menor20){
         console.log(`diferentes soma maior que 20`)
      }
      else if(menor10){
         console.log(`diferentes soma menor 10`)
      }
      else{console.log(`diferentes soma entre 10 e 20`)}
   };
}

let contador = 0;
console.log(contador-- + ' pós incrementação')
console.log(--contador + ' pré incrementação')