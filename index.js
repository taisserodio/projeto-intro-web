//SEMANA1 
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

/*const maquiagem = "Base"
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
const cor2 = ["vermelho" , "rosa" , "nude" , "incolor"]*/

/*Faça um cálculo de média, entre os valores numéricos respectivos de cada item. 
Imprima o valor da média utilizando um console.log. Guarde este valor em uma const;
💡A média deve ser igual à soma dos itens, dividida pelo total de itens.
const verificaEmails = verificouEmail1 && verificouEmail2 && verificouEmail3;
console.log(verificaEmails);
// nesse caso, vai imprimir false, pois verificouEmail1 === false*/

//const media = (( valor  +  valor01 +  valor02 )/3)

/*4. Com um console.log, imprima o resultado de uma operação lógica que checa se todos os 
valores de variáveis booleanas criadas até aqui são verdadeiras.*/

//const verificaMaquiagem = (ehLiquida && ehEmPó && ehEmPó1)
//console.log(verificaMaquiagem)

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

//const maiuscula = maquiagem.toUpperCase()

//const maiscula1 = maquiagem1.toUpperCase()

//const maiscula2 = maquiagem2.toUpperCase()

/*console.log(maiuscula , valor , ehLiquida , cor)
console.log(maiscula1 , valor01 , ehEmPó , cor1)
console.log(maiscula2 , valor02 , ehEmPó1 , cor2)*/

//SEMANA2
/*1. Transforme os itens que criamos nas últimas semanas em objetos.
Exemplo
//ANTES
  const nome1 = "Fulano";
  const idade1 = 33;
  const verificouEmail1 = false; 
//DEPOIS
objeto1 = { 
    nome: "Fulano", 
    idade: 33,
    verificouEmail: false
  } */

  Objeto1 = {
    maquiagem :"Base",
    valor:30.00,
    ehLiquida:true,
    cor:["Bege claro" , "Bege medio" , "escuro"] 
  }


  Objeto2 = {
    maquiagem  :"Pó",
    valor : 20.00,
    ehEmPó : true,
    cor : ["medio claro" , "medio" , "medio escuro"]
  }
 
  Objeto3 = {
    maquiagem :"Gloss",
    valor : 10.00,
    ehEmPó : false,
    cor : ["vermelho" , "rosa" , "nude" , "incolor"]
  }
  
//2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
maquiagem=[]

//3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, 
//utilizando o push()
//Ao fim, você deve ter algo parecido com isso:

    //maquiagem.push(Objeto1,Objeto2,Objeto3)
    //console.log(maquiagem)

//4. Altere o item “Adicione os novos objetos no array de objetos, 
//utilizando o push()” (item 3), para criar uma verificação antes de dar o push. 
//A caraterística booleana do objeto deve ser validada. Isto é, 
//o objeto só deve ser adicionado ao array se a propriedade booleana for true;
//5. Crie uma condição else, que, em caso de valor false na condição acima, 
//exiba um **ALERT** avisando para o usuário que o item não foi adicionado, 
//e não faça o push


if (Objeto1.ehLiquida === true){
  maquiagem.push(Objeto1)
}else {
  alert("Objeto1 não adcionado ao array maquiagem")
}

if(Objeto2.ehEmPó === true){
  maquiagem.push(Objeto2)
}else{
  alert("Objeto2 não adcionado ao array maquiagem")
}

if(Objeto3.ehEmPó === true){
  maquiagem.push(Objeto3)
}else{
  alert("Objeto não adcionado ao array maquiagem")
}

console.log(maquiagem)