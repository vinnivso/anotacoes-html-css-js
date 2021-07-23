// ----------------- AULA JAVASCRIPT - CALL AND ARRAYS FUNCTION ----
// ----------------------->EXEMPLOS<--------------------------------
// ----------------------->CALLBACK<--------------------------------
// FUNÇÕES esperam receber VARIÁVEIS como entrada.
// FUNÇÕES podem ser atribuídas em VARIÁVEIS.
// CALLBACK = FUNÇÃO que é passada como PARÂMETRO de outra FUNÇÃO.
// CALLBACK significa, ligar de volta ou retribuir. Exeutada após a parte principal da função.

// const dividePar = (numero, imprimir) => {
//     if(numero % 2 === 0){
//         const resultado = numero / 2
//         imprimir(resultado)
//     }
// }
// const imprimeMensagem = (valor) => {
//     console.log(`O resultado da sua conta é: ${valor}.`)
// }
// dividePar(20, imprimeMensagem)


// ----------------------->FUNÇÕES DE ARRAY<------------------------
//map() e filter() em Arrays.
//Funções de Arrays sempre esperam receber um callback.
//Essas funções também servem para ler item por item em uma array.

// ----------------------->MAP<-------------------------------------
//Usado para criar um novo array baseado em informações do array original.
//Output: Novo array com tamanho igual ao tamanho original. Necessário guardar esse array em algum lugar.
//Input: Somente uma função de callback. Recebendo três parâmetros. Na função de callback ele SEMPRE vai precisar de um return, se não ... o map NÃO FUNCIONA.
//Primeiro parâmetro de map, ele sempre vai entender como elemento da Array.
//Segundo parâmetro de map, ele sempre vai entender como index da Array.
//Terceiro parâmetro de map, ele sempre vai entender como a Array de referência.
//ESSES PARÂMETROS DEVEM SER DEFINIDOS NA FUNÇÃO DE CALLBACK.

// const arrayNumeros = [10, 20, 4, 5, 2, 3]
// const multiplicaPor5 = (numero) => {
//     return numero * 5
// }
// const resultado = arrayNumeros.map(multiplicaPor5)
// console.log(resultado)

// const arrayComidas = ['feijão', 'arroz', 'bife', 'batata frita']
// const retornaItem = (elemento, index, arrayComidas) => {
//     return `A comida na posição ${index} do meu prato é ${elemento}`
// }
// const resultado2 = arrayComidas.map(retornaItem)
// console.log(resultado2)

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]
// const retornaNomesPokemon = (pokemon) => {
//     return pokemon.nome
// }
// const nomeDosPokemons = pokemons.map(retornaNomesPokemon)
// console.log(nomeDosPokemons)
// //Fazendo a função dentro do próprio map.
// const tipoDosPokemons = pokemons.map ((pokemon) => {
//     return pokemon.tipo
// })
// console.log(tipoDosPokemons)
// //Sem o map()
// const retornaNomesPokemon2 = (arrayPokemon) => {
//     const arrayNomes = []
//     for(const poke of arrayPokemon) {
//         arrayNomes.push(poke.nome)
//     }
//     return arrayNomes
// }
// console.log(retornaNomesPokemon2(pokemons))

// ----------------------->FILTER<----------------------------------
// //Serve para filtrar.
// //Utilizand, quando queremos criar um NOVO ARRAY retirando ou não alguns itens do array original.
// //Somente recebe uma função callback, podendo ter até três parâmetros, bem parecidos com o .map(). Porém retornando valores booleanos.

// const numeros = [1, 4, 6, 7, 10, 13, 17, 20]
// const verificaParidade = (numero) => {
//     if(numero % 2 === 0){
//         return true
//     } else {
//         return false
//     }
// }

// const verificaParidade2 = (numero) => {
//     return numero % 2 === 0
// }

// const numerosPares = numeros.filter(verificaParidade)
// console.log(numerosPares)
// const numerosPares2 = numeros.filter(verificaParidade2)
// console.log(numerosPares2)

// //Fazendo a função dentro do próprio map.
// const numerosPares3 = numeros.filter((numero) => {
//     return numero % 2 === 0
// })
// console.log(numerosPares3)

// const pokemons = [
//     { nome: "Bulbasaur", tipo: "grama" },
//     { nome: "Bellsprout", tipo: "grama" },
//     { nome: "Charmander", tipo: "fogo" },
//     { nome: "Vulpix", tipo: "fogo" },
//     { nome: "Squirtle", tipo: "água" },
//     { nome: "Psyduck", tipo: "água" },
// ]
// const apenasPokemonDeGrama = pokemons.filter((pokemon) => {
//     return pokemon.tipo === 'grama'
// })
// console.log(apenasPokemonDeGrama)

// ----------------------->EXERCÍCIO 1<-----------------------------
// const divideImpar = (numero, imprimir) => {
//     if(numero % 2 !== 0){
//         const resultado = numero / 2
//         imprimir(resultado.toFixed(1))
//     } else {
//         console.log(`Caboclo, você inseriu ${numero} que é Par, não vou dividir por 2 não! Talkei?.`)
//     }
// }
// const imprimeMensagem = (valor) => {
//     console.log(`O resultado da divisão de seu número ímpar é: ${valor}.`)
// }
// divideImpar(20, imprimeMensagem)
// divideImpar(21, imprimeMensagem)

// ----------------------->EXERCÍCIO 2<-----------------------------
// const numeros = [10, 20, 30, 40, 50]
// const retornaString = (elemento, index) => {
//     return `O elemento ${index} é ${elemento}.`
// }
// const minhaListaDeStrings = numeros.map(retornaString)

// //Declarando a função dentro do .map()
// const minhaListaDeStrings = numeros.map((cadaNumero, index) => {
//     return `O elemento ${index} é ${cadaNumero}.`
// })
// console.log(minhaListaDeStrings)

// ----------------------->EXERCÍCIO 3<-----------------------------
// const numeros = [1, 20, 10, 11, 28, 34, 22, 4, 5, 7]
// const retornaMaiorQue10 = (elemento) => {
//     if(elemento > 10) {
//         return true
//     } else {
//         return false
//     }
// }
// const retornaNumerosPares = (elemento) => {
//     return elemento % 2 === 0
// }

// const numerosMaioresQue10 = numeros.filter(retornaMaiorQue10)
// console.log(numerosMaioresQue10)

// const numerosPares = numeros.filter(retornaNumerosPares)
// console.log(numerosPares)

// ----------------------->EXERCÍCIO 4<-----------------------------
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

// const produtosDeLimpeza = produtos.filter((elemento) => {
//     return elemento.categoria === 'Limpeza'
// })
// console.log(produtosDeLimpeza)
