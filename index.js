//*****************************************SEMANA1 ***********************************
/*1. Para o item qu e você decidiu, pense nas características que são importantes para construí-lo. Vamos usar estas características para definir exemplos destes objetos usando o código.
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

/*const nome = "Base"
const valor = 30.00 ;
const ehLiquida = true ;
const cor = [" bege claro ", "bege medio ", "escuro" ]


const nome1 = "Pó"
const valor01 = 20.00 ;
const ehEmPó = true ;
const cor1 = ["medio claro " , "medio" , "medio escuro"]

const nome2 = "Gloss"
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

//const verificanome = (ehLiquida && ehEmPó && ehEmPó1)
//console.log(verificanome)

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

//const maiuscula = nome.toUpperCase()

//const maiscula1 = nome1.toUpperCase()

//const maiscula2 = nome2.toUpperCase()

/*console.log(maiuscula , valor , ehLiquida , cor)
console.log(maiscula1 , valor01 , ehEmPó , cor1)
console.log(maiscula2 , valor02 , ehEmPó1 , cor2)*/

//******************************************SEMANA2*********************************************
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

//   Objeto1 = {
//     nome :"Base",
//     valor:30.00,
//     ehLiquida:true,
//     cor:["Bege claro" , "Bege medio" , "escuro"] 
//   }


//   Objeto2 = {
//     nome  :"Pó",
//     valor : 20.00,
//     ehEmPó : true,
//     cor : ["medio claro" , "medio" , "medio escuro"]
//   }

//   Objeto3 = {
//     nome :"Gloss",
//     valor : 10.00,
//     ehEmPó : false,
//     cor : ["vermelho" , "rosa" , "nude" , "incolor"]
//   }

// //2. Crie um array para guardar os objetos. Este array deve estar vazio, por enquanto;
// nome=[]

// //3. Adicione os objetos criados no item 1 ao array de objetos criado no item 2, 
// //utilizando o push()
// //Ao fim, você deve ter algo parecido com isso:

//     //nome.push(Objeto1,Objeto2,Objeto3)
//     //console.log(nome)

// //4. Altere o item “Adicione os novos objetos no array de objetos, 
// //utilizando o push()” (item 3), para criar uma verificação antes de dar o push. 
// //A caraterística booleana do objeto deve ser validada. Isto é, 
// //o objeto só deve ser adicionado ao array se a propriedade booleana for true;
// //5. Crie uma condição else, que, em caso de valor false na condição acima, 
// //exiba um **ALERT** avisando para o usuário que o item não foi adicionado, 
// //e não faça o push

// if (Objeto1.ehLiquida === true){
//   nome.push(Objeto1)
// }else {
//   alert("Objeto1 não adcionado ao array nome")
// }

// if(Objeto2.ehEmPó === true){
//   nome.push(Objeto2)
// }else{
//   alert("Objeto2 não adcionado ao array nome")
// }

// if(Objeto3.ehEmPó === true){
//   nome.push(Objeto3)
// }else{
//   alert("Objeto não adcionado ao array nome")
// }

// console.log(nome)






// *********************************************SEMANA3******************************************

// 1. Reescrevendo o relatório criado utilizando console.log() que começamos na semana 2,
// altere a forma que a característica de array dos itens seja escrita como um laço que 
// guarde todos os valores da propriedade array do objeto em uma mesma string.
// Utilize esta string no relatório.
// Chamamos este processo de reescrever um código já escrito, de refatoração.
/*nome = []

Objeto1 = {
  nome: "Base",
  valor: 30.00,
  ehLiquida: true,
  cor: ["  Bege claro  ", "  Bege medio  ", "  medio escuro"]
}


Objeto2 = {
  nome: "Pó",
  valor: 20.00,
  ehEmPó: true,
  cor: ["  Medio claro  ", "Medio", "  Medio escuro"]
}

Objeto3 = {
  nome: "Gloss",
  valor: 10.00,
  ehEmPó: false,
  cor: ["  vermelho   ", "   rosa   ", "   nude   ", "   incolor   "]
}

nome.push(Objeto2, Objeto1, Objeto3)
console.log(nome)

let nomeString = " "
for (let i = 0; i < Objeto1.cor.length; i++) {
  nomeString = nomeString + Objeto1.cor[i]
}

console.log(nomeString)

//let nomeString2= " "
nomeString = " "
for (let i = 0; i < Objeto2.cor.length; i++) {
  nomeString = nomeString + Objeto2.cor[i]
}

console.log(nomeString)

//let nomeString3 = " "
nomeString = " "
for (let i = 0; i < Objeto3.cor.length; i++) {
  nomeString = nomeString + Objeto3.cor[i]
}

console.log(nomeString)

*/


// 2. Ainda no relatório, altere-o para que ele seja criado utilizando um laço.
//  Ou seja, você não deve mais imprimir individualmente cada item do relatório.
//  Cada item deve ser exibido a partir de uma iteração do laço. Para testar,
//  adicione mais um item ao array de objetos, e verifique se ele é exibido corretamente.
//  //ANTES



// -------->AQUI EH UM ARRAY DE MAQUIAGENS<--------
/*let maquiagens = [
  {
    nome: "Base",
    valor: 30.00,
    ehEmPo: false,
    cores: ["Bege claro", "Bege medio", "escuro"],
    marca:"Boca Rosa"
  },
  {
    nome: "Pó",
    valor: 20.00,
    ehEmPo: true,
    cores: ["  Medio claro  ", "Medio", "  Medio escuro"],
    marca:"Maybelline"
  },
  {
    nome: "Gloss",
    valor: 10.00,
    ehEmPo: false,
    cores: ["  vermelho   ", "   rosa   ", "   nude   ", "   incolor   "],
    marca:"Dior"
  }
]

for (nome01 of maquiagens) {
  console.log('nome: ' + nome01.nome)
  console.log('Valor: ' + nome01.valor)
  console.log('É em pó: ? ' + nome01.ehEmPo)
  console.log('Qual a marca: ? ' + nome01.marca)
  for (cor of nome01.cores) {
    console.log(`A cor da nome é: ${cor}`)
  }
  console.log("----------------------");
}
*/


// 3. Crie uma função que receba como parâmetro um objeto, e devolva a string do relatório
// com os dados do objeto
/*const nome1 = {
  nome: "Base",
  valor: 30.00,
  ehEmPo: false,
  cores: ["Bege claro", "Bege medio", "escuro"],
  marca:"Boca Rosa"
}

function relatorionome(nome1){
    console.log('nome: ' + nome1.nome)
    console.log('Valor: ' + nome1.valor)
    console.log('É em pó: ? ' + nome1.ehEmPo)
    console.log('Qual a marca: ? ' + nome1.marca)
    for (cor of nome1.cores) {
      console.log(`A cor da nome é: ${cor}`)
    }
}

relatorionome(nome1)*/

// 4. Crie uma função que recebe um array de objetos e uma string.
// Esta função deve retornar um objeto, e o objeto retornado deve possuir apenas os itens que tenham o nome/título igual à string passada como parâmetro. 
//Caso não exista um item, exiba um ALERT indicando que nenhum item foi encontrado

// let maquiagens = [
//   {
//     nome: "Base",
//     valor: 30.00,
//     ehEmPo: false,
//     cores: ["Bege claro", "Bege medio", "escuro"],
//     marca:"Boca Rosa"
//   },
//   {
//     nome: "Pó",
//     valor: 20.00,
//     ehEmPo: true,
//     cores: ["  Medio claro  ", "Medio", "  Medio escuro"],
//     marca:"Maybelline"
//   },
//   {
//     nome: "Gloss",
//     valor: 10.00,
//     ehEmPo: false,
//     cores: ["  vermelho   ", "   rosa   ", "   nude   ", "   incolor   "],
//     marca:"Dior"
//   }
// ]

// function verificanome(maquiagens, nomenome) {
//   let maq;
//   for (objetonome of maquiagens) {
//     if (objetonome.nome === nomenome) {
//       maq = objetonome;
//     }
//   }
//   if (maq) {
//       console.log(maq)
//   } else {
//     alert("Objeto não encontrado")
//   }
// }

// verificanome(maquiagens, "Pó")







//***************************************************SEMANA   4 e 5******************************************************/

/*
*1. Crie uma página HTML, e nesta página, dê um título para sua lista de itens;
*2. Crie um cabeçalho, uma seção principal, e um footer para a página;
*3. Na seção principal. Crie duas divisões. Uma deve possuir um input e um botão. A outra, deve possuir sections para criar os itens da lista;
*4. Crie uma section para cada item da lista;
*5. Para cada um dos três itens criados deve possuir todas as informações do array de objetos. As informações devem estar elencadas como lista não ordenada. Esta tela não precisa interagir com o JavaScript, tendo seus dados escritos diretamente nos elementos.
*6. Transforme o nome/título do item em um link para um artigo sobre este item (pode ser do google, de algum blog ou da Wikipédia)
💡 Recomendamos adicionar imagens a seus itens agora. Ao fazer isso, lembre-se de criar mais uma propriedade String nos seus objetos, para guardar o caminho do link até a imagem.
A partir do nosso exemplo de estilização, crie a identidade da sua página seguindo os passos abaixo:
*1. Estilize o cabeçalho da sua página com o mesmo título que está no <title>;
*2. Estilize o rodapé para sua página, e nele, coloque suas informações de contato (nome e github);
*3. Estilize a lista criada na semana passada, seguindo o padrão enviado;*/
//***************************************************SEMANA   6******************************************************/

//*1. Altere seu código para que a tela de lista de itens crie os elementos da lista através de manipulação do DOM.// Atualmente, seus elementos estão criados no HTML e no CSS de forma estática, sem que exista interação entre HTML 
// e CSS e o Script que criamos. A ideia é que agora, os dados que compõem os elementos HTML devem ser criados a partir do
//  nosso código JS. Para isso, devemos manipular os objetos do HTML e do CSS utilizando o DOM.
// 2. Utilize a função de busca criada no item 2 da semana 6 para fazer com que ao digitar um campo no input e apertar o botão,
// apenas os itens com nome igual ao da busca sejam renderizados na tela.

let listaDeMaquiagens = [
  {
    nome: "Base",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "base-boca-rosa-2.jpg",
    preco: "R$ 30,00",
    ehEmPo: false,
    cores: ["Bege claro", "Bege medio", "escuro"],
    marca: "Boca Rosa"
  },
  {
    nome: "Pó",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "po-2.jpg",
    preco: "R$ 20,00",
    ehEmPo: true,
    cores: ["  Medio claro  ", "Medio", "  Medio escuro"],
    marca: "Maybelline"
  },
  {
    nome: "Gloss",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "glossDi.jpg",
    preco: "R$ 10,00",
    ehEmPo: false,
    cores: ["  vermelho   ", "   rosa   ", "   nude   ", "   incolor   "],
    marca: "Dior"
  },
  {
    nome: "Base",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "base-boca-rosa-2.jpg",
    preco: "R$ 30,00",
    ehEmPo: false,
    cores: ["Bege claro", "Bege medio", "escuro"],
    marca: "Boca Rosa"
  },
  {
    nome: "Pó",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "po-2.jpg",
    preco: "R$ 20,00",
    ehEmPo: true,
    cores: ["  Medio claro  ", "Medio", "  Medio escuro"],
    marca: "Maybelline"
  },
  {
    nome: "Gloss",
    link: "https://pt.wikipedia.org/wiki/Wikip%C3%A9dia",
    imagem: "glossDi.jpg",
    preco: "R$ 10,00",
    ehEmPo: false,
    cores: ["  vermelho   ", "   rosa   ", "   nude   ", "   incolor   "],
    marca: "Dior"
  }
]

// Ex: 1
function listarMaquiagens(maquiagens) {
  const container = document.getElementById("container");

  for (let i = 0; i < maquiagens.length; i++) {

    const section = document.createElement("section")

    criarConteudoSection(section, maquiagens[i])

    container.appendChild(section)

  }

}

function criarConteudoSection(section, maquiagem) {
  section.innerHTML += ` 
    <div class="card">
      <img src="${maquiagem.imagem}">     
      <div class="card-content">
        <div class="card-title">
          <a href="${maquiagem.link}">${maquiagem.nome}</a>
        </div>
        <ul class="card-subtitle">
            <li>Preço: <a>${maquiagem.preco}</a></li>
            <li>Textura em Pó: <a>${maquiagem.ehEmPo ? "Sim" : "Não"}</a></li>
            <li>Cores: <a>${maquiagem.cores}</a></li>
            <li>Marca: <a>${maquiagem.marca}</a></li>
        </ul>  
      </div>   
    </div> 
  `;
}

// Ex: 2
function buscarMaquiagem() {
  const inputBusca = document.getElementById("inputBusca").value;

  const novaLista = listaDeMaquiagens.filter(l => l.nome === inputBusca);

  if (novaLista.length > 0) {
    limpaLista();
    listarMaquiagens(novaLista);
  } else {
    limpaLista();
    listarMaquiagens(listaDeMaquiagens);
  }
}

function limpaLista() {
  const container = document.getElementById("container");
  container.innerHTML = "";
}

listarMaquiagens(listaDeMaquiagens)
