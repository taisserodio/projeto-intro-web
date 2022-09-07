/*1. Para o item que você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
Você precisará criar pelo menos:
  * uma característica String;
  * uma característica Number;
  * uma característica Boolean;
Exemplos abaixo
const nome; //string
const idade; //number 
const verificouEmail; //boolean */
//const nome1 = "Fulano";
//const idade1 = 33;
//const verificouEmail1 = false;

const maquiagem = "Base"
const valor = 30.00 ;
const ehLiquida = true ;
const cor = [" bege claro ", "bege medio ", "escuro" ]


const maquiagem1 = "Pó"
const valor01 = 20.00 ;
const ehEmPó = true ;
const cor1 = ["medio claro " , "medio" , "medio escuro"]

const maquiagem2 = "Gloss"
const valor02 = 10.00 ;
const ehEmPó1 = false ;
const cor2 = ["vermelho" , "rosa" , "nude" , "incolor"]

/*Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);
// nesse caso, vai imprimir false, pois verificouEmail1 === false*/

const media = (( valor  +  valor01 +  valor02 )/3)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os 
valores de variáveis booleanas criadas até aqui são verdadeiras.*/

const verificaMaquiagem = (ehLiquida && ehEmPó && ehEmPó1)
console.log(verificaMaquiagem)

/*Crie pelo menos mais uma característica para o item que você criou. 
Esta característica deve ser um array. Mantenha o tipo de dado do array criado sempre o mesmo,
 isto é, se é um array de strings, só deve receber strings.
const nome; //string
const idade; //number
const verificouEmail; //boolean
const projetos; //array de strings

. Exiba um relatório utilizando console.log(), mostrando todos os dados de cada um dos itens criados até aqui
  1. O log deve exibir o dado de nome, título ou afim sempre em LETRAS MAIÚSCULAS, como no exemplo abaixo.
FULANO
idade: 33
verificou email?: false
projetos: ["Projeto de HTML", "Projeto de CSS", "Projeto React"] */

const maiuscula = maquiagem.toUpperCase()

const maiscula1 = maquiagem1.toUpperCase()

const maiscula2 = maquiagem2.toUpperCase()

console.log(maiuscula , valor , ehLiquida , cor)
console.log(maiscula1 , valor01 , ehEmPó , cor1)
console.log(maiscula2 , valor02 , ehEmPó1 , cor2)
