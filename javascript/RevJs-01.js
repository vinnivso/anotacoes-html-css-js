// X------------------- REVISÃO DE JAVASCRIPT - VARIÁVEIS -----------X
//São estruturas que permitem guarar e acessar quaisquer informações no nosso código.
//Antes de usarmos as variáveis precisamos declará-las.
//Podem receber qualquer tipo de valor, sendo booleano, número, string, array e objeto.
// ----------------------->CONST<-----------------------------------
//"Const" NÃO pode mudar o valor.
// ----------------------->LET<-------------------------------------
//"Let" PODE mudar o valor.
// ----------------------->CONVERSÃO DE TIPOS<----------------------
// Converão NÚMERO para STRING: toString()
//Conver~soa STRING para NÚMERO: Number()

// ----------------------->EXERCÍCIO 1<-----------------------------
// const nomeDoProduto = prompt('Insira o nome do produto.')
// let precoDoProduto = Number(prompt('Insira o valor do produto.'))
// precoDoProduto = precoDoProduto - 1
// console.log(precoDoProduto)




// X------------------- REVISÃO DE JAVASCRIPT - OPERADORES ARIT. ----X
//SOMA: +
//SUBTRAÇÃO: -
//MULTIPLICAÇÃO: *
//DIVISÃO: /
//RESTO: %
// ----------------------->SIMPLIFICAÇÃO<---------------------------
// let resultado = 100
// resultado += 20 //resultado = resultado + 20
// resultado -= 10 //resultado = resultado - 10
// resultado *= 5 //resultado = resultado * 5
// resultado /=10 //resultado = resultado / 10

// ----------------------->EXERCÍCIO 2<-----------------------------
// const primeiroNumero = +(prompt('Digite um primeiro valor.'))
// const segundoNumero = +(prompt('Digite um segundo valor.'))
// console.log(`SOMA: ${primeiroNumero + segundoNumero}.
// SUBTRAÇÃO: ${primeiroNumero - segundoNumero}.
// MULTIPLICAÇÃO: ${primeiroNumero * segundoNumero}.
// DIVISÃO: ${primeiroNumero / segundoNumero}.
// RESTO: ${primeiroNumero % segundoNumero}.`)




// X------------------- REVISÃO DE JAVASCRIPT - COMPARADORES --------X
//Permitem comparar variáveis entre si e retornar TRUE ou FALSE.
//IGUAL: ===
//DIFERENTE: !==
//MAIOR E MAIOR IGUAL: > e >=
//MENOR E MENOR IGUAL: < e <=

// ----------------------->EXERCÍCIO 3<-----------------------------
// const numeroSorteado = Math.floor(Math.random() * 10 + 1);
// const numeroDoUsuario = +(prompt('Insira um valor inteiro de: 1 - 10.'))
// console.log(`O número digitado pelo usuário é menor que o número sorteado? ${numeroDoUsuario < numeroSorteado}.
// O número digitado pelo usuário é maior que o número sorteado? ${numeroDoUsuario > numeroSorteado}.
// O número digitado pelo usuário é igual ao número sorteado? ${numeroDoUsuario === numeroSorteado}.`)




// X------------------- REVISÃO DE JAVASCRIPT - OPERADORES LÓGICOS --X
//Operadores que utilizamos para compararmos booleanos.
//Operador E: &&
//Operador OU: ||
//Operador NÃO/NEGAÇÃO: !

// ----------------------->EXERCÍCIO 4<-----------------------------
// const idadeUsuario = +(prompt('Digite o valor de sua idade.'))
// const alturaUsuario = +(prompt('Digite o valor de sua altura em centímetros.'))
// const cardiacoUsuario = prompt('Responda com "S" ou "N", se você possui problemas cardíacos.').toUpperCase()
// if(idadeUsuario >= 18 && alturaUsuario >= 160 && cardiacoUsuario === 'N'){
//     console.log(`Aprovado sua entrada no brinquedo!`)
// } else {
//     console.log(`Não foi aprovada sua entrada no brinquedo.`)
// }




// X------------------- REVISÃO DE JAVASCRIPT - STRINGS -------------X
//.length --> número de caracteres, conta espaço.
//.toLowerCase() e .toUpperCase() --> minúsculo e maiúsculo.
//.trim() --> retira espaço do início e do fim.
//.includes() --> true/false se existem caracteres.
//.replaceAll() --> substitui caracteres por outros.

// ----------------------->EXERCÍCIO 5<-----------------------------
// const frase = `Hoje eu vou comer cenoura ebaaa`
// console.log(frase.length)
// console.log(frase.trim())
// console.log(frase.toLowerCase())
// console.log(frase.includes('comer'), frase.includes('batata'))

// const novaFrase = frase.replaceAll('cenoura', 'batata')
// console.log(novaFrase.includes('comer'), novaFrase.includes('batata'))




// X------------------- REVISÃO DE JAVASCRIPT - ARRAYS --------------X
//Nada mais são do que uma lista de elementos.
//No JAVASCRIPT utilizamos "[]" para agrupar os itens de uma arraye e seus elementos são separados por vírgula.
//Lembrand que Arrays iniciam sua contagem na posição 0.
//.length --> quantidade de itens na lista.
//.push() --> adiciona item ao final da lista.
//.pop() --> retira último elemento da lista.
//.includes() --> true/false se existem o elemento.
//.splice() --> remove elementos sabendo o índice.

// ----------------------->EXERCÍCIO 6<-----------------------------
// const listaDeCompras = ['batata', 'cenoura', 'beterraba']
// console.log(listaDeCompras[1], listaDeCompras.length, listaDeCompras.includes('cenoura'))
// listaDeCompras.push('mandioca')
// listaDeCompras.splice(1, 1)
// console.log(listaDeCompras)




// X------------------- REVISÃO DE JAVASCRIPT - FUNÇÕES -------------X
//Bloco de código que pode ser chamado ou invocado a partir de um nome.
//Funções podem receber entradas (PARÂMETROS) que podem ser usadas no meio do código, assim que esses parâmetros possuem um valor associado e serão utilizados naquela função, chamamos de ARGUMENTOS.
//Funções possuem o "return" que serve para retornar um valor.

// ----------------------->EXERCÍCIO 7<-----------------------------
// const array = [6, 7, 8, 9, 10]
// const primeiroEUltimoDivididoPorDois = (arrayDeNumeros) => {
//     const primeiroElemento = arrayDeNumeros[0] / 2
//     const ultimoElemento = arrayDeNumeros[arrayDeNumeros.length - 1] / 2

//     arrayDeNumeros[0] = primeiroElemento
//     arrayDeNumeros[arrayDeNumeros.length - 1] = ultimoElemento
//     return arrayDeNumeros
// }
// console.log(primeiroEUltimoDivididoPorDois(array))




// X------------------- REVISÃO DE JAVASCRIPT - OBJETOS -------------X
//No JAVASCRIPT utilizamos "{}" para criarmos um objeto, sendo que suas propriedades receber ":" e são separados por vírgulas.
//Podemos copiar um objeto utilizando oSPREAD OPERATOR, exemplo:
// const usuario = {
//     nome: 'Astrodev',
//     idade: 25,
//     email: 'astrodev@labenu.com.br'
// }
// const novoUsuario = {
//     ...usuario,
//     nome: 'Caio',
//     sobrenome: 'Teixeira'
// }
// console.log(novoUsuario)

// ----------------------->EXERCÍCIO 8<-----------------------------
// const pessoa = {
//     nome: prompt('Digite seu nome.'),
//     idade: +(prompt('Digite sua idade.')),
//     generoMusical: prompt('Digite seu gênero musical preferido.')
// }
// console.log(`O nome da pessoa é ${pessoa.nome}, ele(a) tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

// const novaPessoa = {
//     ...pessoa,
//     nome: prompt('Digite seu nome.')
// }
// console.log(console.log(`O nome da pessoa é ${novaPessoa.nome}, ele(a) tem ${novaPessoa.idade} anos e gosta muito de ${novaPessoa.generoMusical}.`))




// X------------------- REVISÃO DE JAVASCRIPT - CONDICIONAIS --------X
//Se a CONDIÇÃO for VERDADEIRA o código dentro do IF é EXECUTADO.
//Se a CONDIÇÃO for FALSE o código dentro do ELSE é EXECUTADO.
//Tod o código da ação vai entre "{}."
//SWITCH CASE: Verifica o valor de uma variável. Se a variável for igual ao demonstrado no case, o código dentro será executado, exemplo:
// let paisDeOrigem = prompt('Digite seu país de nascimento.')
// switch (paisDeOrigem) {
//     case 'Brasil':
//         console.log('brasileiro')
//         break
//     case 'EUA':
//         console.log('estadunidense')
//         break
//     case 'Inglaterra':
//         console.log('britânico')
//         break
//     default:
//         console.log('nacionalidade não encontrada')
//         break
// }

// ----------------------->EXERCÍCIO 9<-----------------------------
// const numero = +(prompt('Digite um número'))
// if(numero % 2 === 0) {
//     console.log(`O número digitado é par.`)
// } else {
//     console.log(`O número digitado é ímpar.`)
// }

// const userPet = prompt('Digite seu pet.').toLowerCase()
// switch (userPet) {
//     case 'cachorro':
//         console.log(`Au au`)
//         break
//     case 'vaca':
//         console.log(`Muu muu`)
//         break
//     case 'gato':
//         console.log(`Miau`)
//     default:
//         console.log(`Barulho do pet não encontrado`)
//         break;
// }




// X------------------- REVISÃO DE JAVASCRIPT - LOOPS ---------------X
//Estrututas de repetição.
// ----------------------->WHILE<-----------------------------------
// let i = 0
// while(i < 10) {
//     console.log(i) //Ação Repetida
//     i++            //Incremento
// }
// console.log(i)
// ----------------------->FOR<-------------------------------------
//O laço "FOR" é uma maneira de simplificar a escrita de laços  que tenham este comportamento.
// for(let i = 0; i < 10; i++){
//     console.log(i) //Ação repetida
// }
// ----------------------->FOR OF<----------------------------------
//Uma forma de simplificar a leitura dos elementos do "Array" é utilizando o loop "for ... of."
// const numeros = [14, 67, 89, 15, 23]
// for(let numero of numeros){
//     console.log(numero)
// }

// ----------------------->EXERCÍCIO 11<----------------------------
// const numeros = [11, 15, 18, 14, 12, 13]
// //Primeiro definir de onde partir.
// let i = 0
// let maior = -Infinity
// while(i < numeros.length){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
//     i++
// }
// console.log(`O maior número é ${maior}.`)

// const numeros = [11, 15, 18, 14, 12, 13, 77]
// let maior = -Infinity
// for(let i = 0; i < numeros.length; i++){
//     if(numeros[i] > maior){
//         maior = numeros[i]
//     }
// }
// console.log(`O maior número é ${maior}.`)

//Como no "FOR OF" ele já verifica elemnto por elemento, não será necessário colocar como numeros[i], mas sim somente atribuir o parâmetro do elemento.
// const numeros = [11, 15, 18, 14, 12, 13, 77, 777]
// let maior = -Infinity
// for(let elemento of numeros){
//     if(elemento > maior){
//         maior = elemento
//     }
// }
// console.log(`O maior número é ${maior}.`)

// ----------------------->EXERCÍCIO 12<----------------------------
// const prof = {
//     nome: "Letícia Chijo",
//     idade: 27,
//     aulasFront: true,
//     aulasBack: false,
//     jogosFavoritos: ["Chrono Trigger", "Undertale", "Hollow Knight"],
//     contaPiada: () => console.log("É pave ou pacume?"),
//     pet: {
//         nome: "Polly",
//         especie: "cachorrinha",
//         raca: "Lhasa Apso",
//         snacksFavoritos: ["biscoito", "maçã", "frango"]
//     }
//  }

//  const verificaAula = (aula) => {
//     if (aula) {
//         return "Dou"
//     } else {
//         return "Não dou"
//     }
//  }

//  const aulasBack = verificaAula(prof.aulasBack)
//  const aulasFront = verificaAula(prof.aulasFront)

//  const jogos = []


//  for(let i = 1; i <= prof.jogosFavoritos.length; i++){
//      jogos.push(`${i}) ${prof.jogosFavoritos[i-1]}`)
//  }

//  console.log(jogos)

//  const frase = `Oi! Eu me chamo ${prof.nome} e tenho ${prof.idade} anos.
//  ${aulasFront} aulas de front e ${aulasBack} aulas de back.
//  Meus jogos favoritos são: ${jogos}
//  Tenho uma ${prof.pet.especie} chamada ${prof.pet.nome} que gosta de comer ${prof.pet.snacksFavoritos[1]}
//  `
// console.log(frase)
// prof.contaPiada()




// X------------------- REVISÃO DE JAVASCRIPT - .map() e .filter() --X
//MAP --> Cria um novo array com ELEMENTOS MODIFICADOS em relação ao original e TAMANHO IGUAL ao array original.
//FILTER --> Cria um novo array com ALGUNS ELEMENTOS do original e TAMANHO IGUAL OU MENOR ao array original.

// ----------------------->EXERCÍCIO 13<----------------------------
// const produtos = [
//     { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
//     { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
//     { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
//     { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
//     { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
//     { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
//     { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
//     { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
//     { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
//     { nome: "Sabão em Pó", categoria: "Limpeza", preco: 10.80 }
// ]
// const produtosComDesconto = produtos.map((prod)=>{
//     return {...prod, preco: (prod.preco*0.9).toFixed(2)}
//  })

//  console.log(produtosComDesconto)

//  const hortifruti = produtos.filter((prod) => {
//     return prod.categoria === "Hortifruti"
//  })

//  console.log(hortifruti)

//  const hortifrutiComDesconto = produtos
//  .filter((prod) => {
//     return prod.categoria === "Hortifruti"
//  }).map((prod)=>{
//     return {...prod, preco: (prod.preco*0.9).toFixed(2)}
//  })

//  console.log(hortifrutiComDesconto)

// function retornaNNumerosPares(n) {
//     let i = 0
//     while (i < n) {
//       console.log(2*i)
//       i++
//     }
//   }
//   retornaNNumerosPares(4)


// function filtraTarefas() {
//     const tarefas = [
//       { titulo: "Fazer Remember", status: "done", tempo: 30 },
//       { titulo: "Fazer Challange", status: "todo", tempo: 30 },
//       { titulo: "Assistir Aula", status: "done", tempo: 120 },
//       { titulo: "Fazer almoço nutritivo", status: "done", tempo: 60 },
//       { titulo: "Ler atentamente exercícios do dia", status: "doing", tempo: 20 },
//       { titulo: "Fazer exercício do dia", status: "doing", tempo: 180 },
//       { titulo: "Fazer desafio", status: "doing", tempo: 60 },
//       { titulo: "Ir para o Stand Up", status: "todo", tempo: 30 },
//       { titulo: "Enviar Feedback", status: "todo", tempo: 15 },
//       { titulo: "Enviar Exercício", status: "todo", tempo: 15 },
//       { titulo: "Jogar Videogame", status: "todo", tempo: 120 },
//       { titulo: "Assistir Novela", status: "todo", tempo: 90 }
//    ]

//    // Escreva seu código aqui
//    return tarefas.filter(elemento => {
//        return elemento.status === 'done'
//    }).map(elemento => {
//        return elemento.titulo
//    })
// }

function recebeString(string) {
    for (let i = 0; i < string.length; i++) {
        console.log(string[i]);
    }
}
recebeString('alvo')