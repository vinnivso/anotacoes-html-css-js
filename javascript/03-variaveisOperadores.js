// ------------------- AULA JAVASCRIPT - VARIAVEIS -------------------
//console.log('Hello World!')

// Utilizamos para fazer comentário em n=1
/* Utilizamos para fazer comentários em n>1
como nesse exemplo */
// Dependendo do SO, podemos utilizar as seguintes hotkeys para
// colocar todos em comentário. No meu caso é CTRL + ;

// console.log(''), imprime mensagem no nosso terminal
// prompt(''), solicita informação do usuário
// const, declaração de variável onde não pode ser alterada ao decorrer do código.
// let, declaração de variável mais flexível ao decorrer do código e scope. Let vem de "let be"

// String, tipo de dado que pode ser atrelado em uma varável, porém como texto.
// Numbers, tipo de que pode ser atrelado em uma varável, porém como número.
// Boolean, tipo de que pode ser atrelado em uma varável, porém como retorno de True or False.
// type of, retorna qual tipo de variável foi definido. Muito útil para permitirmos condicionais.
// undefined, representa a falta de valor em uma variável. Não podemos declarar variável "const", sem atribuir valor. Mas não teria esse problema para "var" e "let".
// null, representa a falta de valor de uma variável, porém precisa declarar como: let x = null
// 

// ------------------- Ex 01 -------------------
//1 
// const primeiroNome = 'Vinicius'
// const sobrenome = 'Oliveira'
// const idade = 27
// const souEstudante = true

// console.log('Nome Completo: ', primeiroNome, sobrenome)
// console.log('Idade: ', idade)
// console.log('É estudante: ', souEstudante)

// ------------------- Ex 02 -------------------
//2
// const nome = prompt('Please enter your name')
// const idade =  Number(prompt('Please enter your age'))
// const nome2 = prompt('Please enter your name')
// const idade2 = Number(prompt('Please enter your age'))
// const somaIdades = idade + idade2

// console.log('Tipo armazenado na variável nome: ', typeof nome)
// console.log('Tipo armazenado na variável idade: ', typeof idade)
// console.log('Soma das idades: ', somaIdades)

// ------------------- AULA JAVASCRIPT - OPERADORES -------------------
// let x1 = 10
// let x2 = 20

// // SOMA
// let soma = x1 + x2
// console.log(soma)

// // SUBTRAÇÃO
// let subtracao = x1 - x2 - 2
// console.log(subtracao)

// // MULTIPLICAÇÃO
// let multiplicacao = x1 * x2
// console.log(multiplicacao)

// // DIVISÃO
// let divisao = x1 / x2
// console.log(divisao)

// // DIVISÃO RESTO
// let divisaoResto1 = x1 % x2
// let divisaoResto2 = 5 % 3
// console.log(divisaoResto1, divisaoResto2)

// ------------------- Ex 01 -------------------
// //01
// const soma = 3 + 4
// console.log(soma)

// const multiplicaEDivide = (3 * 5) / 2
// console.log(multiplicaEDivide)

// const subtracaoEMultiplica = (5 - 4) + (-1)
// console.log(subtracaoEMultiplica)

// const resto = 234 % 5
// console.log(resto)

// ------------------- COMPARADORES -------------------
// // IGUALDADE
// const primeiroTexto = '19'
// const segundoTexto = 'maracuja'
// const primeiroNumero = 19
// const segundoNumero = 19

// // ===, compara valor e tipo
// // ==, compara valor
// const igualdade1 = primeiroNumero === primeiroTexto
// const igualdade2 = segundoNumero === segundoTexto
// console.log(igualdade1)
// console.log(igualdade2)

// // DIFERENÇA
// const diferenca1 = primeiroNumero !== segundoNumero
// const diferenca2 = primeiroNumero !== primeiroTexto
// console.log(diferenca1) //false
// console.log(diferenca2) // true

// MAIOR-IGUAL AND MENOR-IGUAL
// console.log(3 >= 4) // false
// console.log(1 > 2) // false
// console.log(3 <= 4) // true
// console.log(1 < 2) // true
// console.log(4 >= 4) // true
// console.log(4 > 4) // false

// ------------------- Ex 02 -------------------
// //02
// const primeiroNumero = Number(prompt('Digite o valor do primeiroNumero'))
// const segundoNumero = Number(prompt('Digite o valor do segundoNumero'))
// console.log('O primeiro número é igual ao segundo?', primeiroNumero === segundoNumero)
// console.log('O primeiro número é diferente do segundo?', primeiroNumero !== segundoNumero)
// console.log('O primeiro número é maior que o segundo?', primeiroNumero > segundoNumero)
// console.log('O primeiro número é menor que o segundo?', primeiroNumero < segundoNumero)

// ------------------- AND -------------------
// //03
// // Operador && (AND)- Quem manda é false (Se tiver um false, resultado será false)
// const a = true
// const b = false
// const c = true
// console.log(a && b) // false
// console.log(b && c) // false
// console.log(a && c) // true
// console.log(a && b && c) // false

// ------------------- OU -------------------
// //04
// // Operador || (OU) - Quem manda é true (Se tiver um true, resultado será true)
// const a = true
// const b = false
// const c = true
// console.log(a || b) // true
// console.log(b || c) // true
// console.log(a || c) // true
// console.log(a || b || c) // true

// ------------------- NEGAÇÃO -------------------
// // Operador ! (NÃO, NEGAÇÃO) - Quem manda é true (Se tiver um true, resultado será true)
// const a = true
// const b = false
// const c = true
// console.log(!a) // false
// console.log(!b) // true
// console.log(!c) // false

// ------------------- EX 05 -------------------
// //05
// const nome = prompt('Qual seu nome?')
// const anoNascimento = Number(prompt('Digite o ano de nascimento com quatro dígitos'))
// const anoAtual = Number(prompt('Digite o ano atual com quatro dígitos'))

// console.log('Olá', nome)
// const idade = anoAtual - anoNascimento
// console.log('Idade:', idade)
// console.log('É maior de idade?', idade >= 18)

// const idade2050 = 2050 - anoNascimento
// console.log('Em 2050 terá', idade2050)