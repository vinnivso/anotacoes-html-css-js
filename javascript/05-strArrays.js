// ------------------- AULA JAVASCRIPT - STRINGS & ARRAYS -------------------
// ----------------------->EXEMPLOS<-------------------------------
// const texto = "Olá, mundo"
// const texto2 = 'Olá mundo'
// const templateString = `Olá, mundo`

// const textoComAspas = 'Nossa, isso é muito "legal"'

// console.log(texto)
// console.log(texto2)
// console.log(templateString)
// console.log(textoComAspas)

//------------------------CONCATENAÇÃO DE STRINGS & TEMPLATE STRING--------------------------------
// const nome = 'Chijo'
// const idade = 29
// const frase = 'O nome do aluno é ' + nome + ' e ele tem ' + idade + ' anos.'
// const fraseComTemplateString = `O nome do aluno é ${nome} e ele tem ${idade} anos.`
// const fraseComTemplateString2 = `O nome do aluno é ${nome} e
// ele tem ${idade} anos.` //Com quebra de linha.
// console.log(frase)
// console.log(fraseComTemplateString)
// console.log(fraseComTemplateString2)

// ----------------------->EXERCÍCIO 1<----------------------------
// const nome = prompt('Insira seu nome')
// const cor = prompt('Insira sua cor favorita')
// const frase1 = 'A cor favorita do(a) ' + nome + ' é ' + cor + '.'
// const frase2 = `A cor favorita do(a) ${nome} é ${cor}.`
// console.log(frase1)
// console.log(frase2)
// // O que foi realizado através da declaração das variáveis frase1 e frase2, poderia ser feito através do console, porém é indicado deixarmos o console.log somente para debug do code.

//------------------------PROTÓTIPO DE STRINGS--------------------------------
// //.LENGTH
// const nome = prompt('Qual seu nome caboclo(a)?')
// const nomelength = nome.length
// console.log(`O nome do usuário é ${nome} e tem ${nome.length} caracteres.`)
// console.log(nomelength)

// //.toLowerCase()
// const nome = prompt('Qual seu nome caboclo(a)?')
// const nomeToLowerCase = nome.toLowerCase()
// console.log(`O nome do usuário é ${nome.toLowerCase()}.`)
// console.log(nomeToLowerCase)

// //.toUpperCase()
// const nome = prompt('Qual seu nome caboclo(a)?')
// const nomeToUpperCase = nome.toUpperCase()
// console.log(`O nome do usuário é ${nome.toUpperCase()}.`)
// console.log(nomeToUpperCase)

// //.trim() Remove os espaçamentos em uma STRING
// const nome = prompt('Qual seu nome caboclo(a)?')
// const nomeTrim = nome.trim()
// console.log(`O nome do usuário é ${nome.trim()}.`)
// console.log(nomeTrim)

// //.includes() Retornar em valores booleanos se existe uma sequencia caracteres dentro de uma string.
// const frase = 'Hoje eu comi cenoura'
// console.log(frase.includes('cenoura')) // true
// console.log(frase.includes('cenouras')) // false
// console.log(frase.includes('cenour')) // true

// //.replaceAll()
// const frase = 'Hoje eu comi cenoura, adoro cenoura'
// const novaFrase = frase.replaceAll('cenoura', 'chocolate')
// console.log(novaFrase)


// ----------------------->EXERCÍCIO 2<----------------------------
// const fraseUsuario = prompt('Digite uma frase')
// console.log('Frase original: ', fraseUsuario)

// const frase = fraseUsuarioCaixaAlta = fraseUsuario.toUpperCase()
// console.log('Frase em caixa alta: ', fraseUsuarioCaixaAlta)
// const fraseSemA = fraseUsuarioCaixaAlta.replaceAll('A', 'I')
// const fraseSemE = fraseSemA.replaceAll('E', 'I')
// const fraseSemO = fraseSemE.replaceAll('O', 'I')
// const fraseSemU = fraseSemO.replaceAll('U', 'I')
// console.log(fraseSemU, fraseSemU.length)

//------------------------ARRAYS--------------------------------
// const listaDeCompras = ['batata', 'alface', 'queijo']
// console.log(listaDeCompras)
// const listaDeNumerosMega = [2, 13, 26, 35, 41, 60]
// console.log(listaDeNumerosMega)
// const meuArray = ['bananinha', 15, true]
// console.log(meuArray)

// // [] Acessando um Elemento - Seu índice
// const listaDeCompras = ['batata', 'alface', 'queijo']
// const segundoItem = listaDeCompras[1] // alface

// ----------------------->EXERCÍCIO 3<----------------------------
// const racas = ['viraLataCaramelo', 'poodle', 'labrador', 'beagle', 'pug']
// const numeroUsuario = Number(prompt('Escolha um número de 1 - 5'))
// console.log('Raça escolhida: ', racas[numeroUsuario - 1])

//------------------------PROTÓTIPO DE STRINGS--------------------------------
// //.length
// const pokemons = ['bulbassauro', 'squirtle', 'charmander']
// const pokemonsLength = pokemons.length
// console.log(pokemons.length)
// console.log(pokemonsLength)

// //.push() Adiciona novos elementos ao final da Array
// const numeros = [1, 2, 3]
// numeros.push(4)
// console.log(numeros) // [1, 2, 3, 4]
// numeros.push(5, 6, 7)
// console.log(numeros) // [1, 2, 3, 4, 5, 6, 7]

// //.pop() Retira último elemento do Array, não permite escolhermos mais de um elemento para ser retirado.
// const numeros = [1, 2, 3]
// const numerosPop = numeros.pop()
// console.log(numerosPop) // [1, 2]

// //.includes() Retornar em valores booleanos se existe uma sequencia caracteres dentro de uma Array.
// const pokemons = ['bulbassauro', 'squirtle', 'charmander']
// console.log(pokemons.includes('squirtle')) // //true
// console.log(pokemons.includes('squirtl')) // //false --> Porque em uma Array é necessário ter a correspondência exata, ou seja, não existe em uma lista o elemento "squirtl" e sim somente "squirtle". Diferente de String.

// //.splice() Remove apartir de um determinado índice o número de elementos (i,n). Sendo i = índice e n = elementos.
// const letras = ['A', 'B', 'C', 'D', 'E', 'F', 'G','H']
// const letrasSplice = letras.splice(2,1) // //Partindo do índice 2, remover um elemento.
// console.log(letrasSplice) // //Será retornado uma Array, na seguinte característica ['A', 'B', 'D', 'E', 'F', 'G','H'], observe a remoção do elemento 'C' na Array.

// ----------------------->EXERCÍCIO 4<----------------------------
// const numeros = [1, 2, 3, 4, 5, 6]
// console.log(numeros.length)
// numeros.push(7)
// numeros.splice(3, 2)
// console.log(numeros.length)
// console.log(numeros)

