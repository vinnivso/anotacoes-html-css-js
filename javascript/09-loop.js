// ------------------- AULA JAVASCRIPT - LOOP ----------------------
// ----------------------->EXEMPLOS<--------------------------------
// ----------------------->WHILE<-----------------------------------
// //Estrutura mais básica na criação de laços (loops).
// //Muito bom para ser utilizada com comparativos lógicos.
// while(condicao) {
//     //ENQUANTO a condição for verdadeira
//     //as linhas de código dentro deste bloco
//     //serão executadas.

//     //Assim que a condição ficar falsa
//     //o LOOP vai parar.
// }
// let i = 0                //Começo
// while(i < 10) {          //Condição de continuação
//     console.log(i)       //Ação repetida
//     i++                  //Incremento
// }
// //RESOLUÇÃO: Será impresso no console, os número de 0 até 9.

// let estomago = 0
// while(estomago < 100) {
//     console.log('Quero comer mais coxinhas!')
//     estomago += 10          // estomago = estomago + 10
// }
// console.log('Comi demais!')

// let voltas = 0
// while(voltas <= 10){
//     console.log(`Dei ${voltas} no quarteirão.`)
//     voltas++
// }

// ----------------------->FOR<-------------------------------------
// //Condições mais atreladas a um número que é incrementado ou decrementado.
// //A variável é declarada dentro do "for", não sendo possível acessar ela fora do "for".
// for(let i = 0; i < 10; i++){
//     console.log(i)
// }
// const numeros = [14, 67, 89, 15, 23]
// for(let i = 0; i < numeros.length; i++){
//     const elemento = numeros[i]
//     console.log(elemento)
// }

// ----------------------->FOR OF<----------------------------------
// //O "For of" é utilizado para simplificar a leitura dos elementos de uma array.É EXCLUSIVO para array.
// const numeros = [14, 67, 89, 15, 23]
// for(let numero of numeros){
//     console.log(numero)
// }
// const retornaMaiorNumero = (arrayDeNumeros) => {
//     let maiorNumero = 0
//     for(let num of arrayDeNumeros){
//         if(num > maiorNumero){
//             maiorNumero = num
//         }
//     }
//     return maiorNumero
// }
// const maior1 = retornaMaiorNumero([11, 15, 18, 15, 12, 13])
// console.log(maior1)
// const maior2 = retornaMaiorNumero([11115,2223,5456,242445,3232,21,445,0,897,23231])
// console.log(maior2)

// ----------------------->EXERCÍCIO 1<-----------------------------
// let numeroDoUsuario
// let soma = 0
// while(numeroDoUsuario !== 0){
//     numeroDoUsuario = Number(prompt('Digite um valor, até que deixe de ser requisitado.'))
//     soma += numeroDoUsuario
//     console.log(soma)
// }
// console.log(`Resultado total é = ${soma}.`)

// ----------------------->EXERCÍCIO 2<-----------------------------
// const retornaMaiorNumero = (arrayDeNumeros) => {
//     let maiorNumero = 0
//     const tamanhoDoArray = arrayDeNumeros.length
//     for(let i = 0; i < tamanhoDoArray; i++) {
//         const numeroAtual = arrayDeNumeros[i]
//         if(numeroAtual > maiorNumero) {
//             maiorNumero = numeroAtual
//         }
//     }
//     return maiorNumero
// }
// const maior1 = retornaMaiorNumero([11, 15, 18, 15, 12, 13])
// console.log(maior1)
// const maior2 = retornaMaiorNumero([11115,2223,5456,242445,3232,21,445,0,897,23231])
// console.log(maior2)

// ----------------------->EXERCÍCIO 3<-----------------------------
// const imprimeFrase = (arrayDePalavras) => {
//     let mensagem = ''
//     for (let palavra of arrayDePalavras){
//         mensagem += palavra + ' '
//     }
//     console.log(mensagem)
// }
// imprimeFrase(["Oi", "sumido", "tudo", "bem?",
// "Saudades"])