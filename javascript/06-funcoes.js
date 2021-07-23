// ------------------- AULA JAVASCRIPT - FUNÇÕES -------------------
// ----------------------->EXEMPLOS<-------------------------------
// function calculaArea(altura, largura) {
//     const area = altura * largura
//     console.log(area)
// }
// calculaArea(2, 3)

// function imprimirOlaMundo() {
//     console.log('Olá Mundo!')
// }
// imprimirOlaMundo()

// function calculaArea(altura, largura) {
//     const area = altura * largura
//     return area
// }
// //Atribui retorno à uma variável
// const areaCalculada = calculaArea(2, 5)
// //Imprime retorno no console, somente visualizar, mas não será guardado em lugar nenhum
// console.log(areaCalculada)
// console.log(calculaArea(3, 3))

// const a = 1

// function funcao1 () {

//   const b = 2

//   function funcao2 () {

//     const c = 3

//     console.log('Dentro da função 2 - a = ', a)
//     console.log('Dentro da função 2 - b = ', b)
//     console.log('Dentro da função 2 - c = ', c)
//   }

//   funcao2()

//   console.log('Dentro da função 1 - a = ', a)
//   console.log('Dentro da função 1 - b = ', b)
//   console.log('Dentro da função 1 - c = ', c)
// }

// funcao1()

// ----------------------->EXERCÍCIO 1<----------------------------
// function imprimirOlaMundo() {
//     console.log('Olá Mundo!')
// }
// imprimirOlaMundo()


// ----------------------->EXERCÍCIO 2<----------------------------
// function imprimeOlaPessoa(nome, idade) {
//     console.log(`Olá ${nome}! Você tem ${idade} anos.`)
// }
// imprimeOlaPessoa('Vinicius', 27)
// imprimeOlaPessoa('Dibraldinho', 42)
// imprimeOlaPessoa('Dentinho', 36)
// const nomeInserido = prompt('Please, insert your name')
// const idadeInserida = Number(prompt('Please, insert your age'))
// imprimeOlaPessoa(nomeInserido, idadeInserida)


// ----------------------->EXERCÍCIO 3<----------------------------
// function somaDoisNumeros(num1, num2) {
//     const soma = num1 + num2
//     return soma
//     //return guarda o valor da função, após isso o ideal é armazenar o valor em uma variável.
//     //Não vai ler nada após o return!
//     console.log('oi')
// }
// const resultado = somaDoisNumeros(2, 3)
// console.log(resultado)
// const novoResultado = resultado + 3
// console.log(novoResultado)
// //Chamei minha função "imprimeOlaPessoa(nome,idade)"
// imprimeOlaPessoa('Chijo', resultado)


// ----------------------->EXERCÍCIO 4<----------------------------
// function retornaExtremidadesDividasPor2(arrayDeNumeros) {
//     const primeiroElemento = arrayDeNumeros[0] / 2
//     const ultimoElemento = arrayDeNumeros[arrayDeNumeros.length - 1] / 2
//     const novoArray = [primeiroElemento, ultimoElemento]
//     return novoArray
//     //[2, 4, 6]
//     // 0  1  2
// }
// const resultado1 = retornaExtremidadesDividasPor2([2, 3, 6])
// const resultado2 = retornaExtremidadesDividasPor2([40, 60, 70, 3, 90])
// console.log(resultado1)
// console.log(resultado2)


// ----------------------->EXERCÍCIO 5----------------------------
// const imprimeOlaPessoaExp = function(nome, idade) {
//     console.log(`Olá ${nome}! Você tem ${idade} anos.`)
// }
// imprimeOlaPessoaExp('Vinicius', 27)
// imprimeOlaPessoaExp('Dibraldinho', 42)
// imprimeOlaPessoaExp('Dentinho', 36)
// const nomeInserido = prompt('Please, insert your name')
// const idadeInserida = Number(prompt('Please, insert your age'))
// imprimeOlaPessoaExp(nomeInserido, idadeInserida)

// const somaDoisNumerosArrow = (num1, num2) => {
//     return num1 + num2
// }
// const valoresSomados = somaDoisNumerosArrow(2, 3)
// console.log(`Resposta da soma, ${valoresSomados}.`)

function areaTriangulo(base, altura) {
    const area = ((base * altura) / 2) * 100
    return area
}
const inputBase = Number(prompt('Insira o valor da base do triângulo em m'))
const inputAltura = Number(prompt('Insira o valor da altura do triângulo em m'))
let valoresDoTriangulo = areaTriangulo(inputBase, inputAltura)
console.log(`A área do triângulo em centímetro é: ${valoresDoTriangulo} cm²`)