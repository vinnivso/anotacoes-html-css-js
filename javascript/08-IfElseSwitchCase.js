// ------------------- AULA JAVASCRIPT - IF, ELSE e ELSE IF --------
// ----------------------->EXEMPLOS<--------------------------------
// --------- EXEMPLO IF --------------------------------------------
// //O IF sempre verifica como TRUE para retornar o que está no seu escopo, as "{}" do if, representam seu escopo.
// let estaChovendo = true // if(estaChovendo) ===true)
// if (estaChovendo){
//     console.log('Pega o guarda-chuvas!!!')
// }

// let estaFrio = true
// if (estaFrio && estaChovendo){
//     console.log('Pega casaco!')
// }
// --------- EXEMPLO IF/ELSE ---------------------------------------
// let estaChovendo = false
// if (estaChovendo){
//     console.log('Pega o guarda-chuvas!!!')
// }   else {
//     console.log('Piscininha amô!')
// }

// const decideRoupa = (clima) => {
//     console.log(clima)
//     if (clima === 'chuva') {
//         console.log('Netflix and chill!')
//     }   else {
//         console.log('Piscininha amô!')
//     };
// }
// let tempoEmSaoPaulo = 'chuva'
// let tempoEmBh = 'calor demais'
// decideRoupa(tempoEmSaoPaulo)
// decideRoupa(tempoEmBh)
// --------- EXEMPLO IF/ELSE/ELSE IF ------------------------------------
// const respostaUsuario = prompt('Responda "SIM" ou "NAO": Você está feliz hoje?')
// if(respostaUsuario === 'SIM'){
//     console.log('Que bom!')
// }   else if(respostaUsuario === 'NAO'){
//     console.log('Sinto muito :( ')
// }   else {
//     console.log('Não entendi o que você está sentindo!')
// }

// const climaNaCidade = prompt('Está quente, frio, árido ou mediano ai, casada?')
// if(climaNaCidade === 'frio'){
//     console.log('Bota cachecol!')
// }   else if(climaNaCidade === 'árido'){
//     console.log('Vixe! Nem sei o que vestir.')
// }   else if(climaNaCidade === 'mediano'){
//     console.log('Calça de linho é fresquinha!')
// }   else {
//     console.log('Legal! Mas não sou capaz de dar minha opinião sobre sua roupa.')
// }

// --------- OPERADORES LÓGICOS NO IF/ELSE/ELSE IF ----------------------
// let condicao1 = true
// let condicao2 = false

// if(condicao1 && condicao2){
//     // Entra aqui se ambas forem true
// }
// if(!condicao1){
//     // Entra aqui se condicao 1 for false
// }

// --------- EXEMPLO SWITCH CASE ----------------------------------------
// const primeiraPessoa = {
//     nome: 'Samyr',
//     genero: 'masculino'
// }
// const segundaPessoa = {
//     nome: 'Keylla',
//     genero: 'feminino'
// }
// const terceiraPessoa = {
//     nome: 'Liniker',
//     genero: 'nao-binario'
// }
// const defineBoasVindas = (pessoa) => {
//     switch(pessoa.genero){
//         case 'masculino':
//             console.log('Seja bem-vindo!')
//             break //Com o "break" ele para a análise quando o primeiro for "true".
//         case 'feminino':
//             console.log('Seja bem-vinda!')
//             break
//         default:
//             console.log('Desejo boas-vindas!')
//         }
// }
// defineBoasVindas(terceiraPessoa)
// defineBoasVindas(primeiraPessoa)
// defineBoasVindas(segundaPessoa)
// ----------------------->EXERCÍCIO 1<-----------------------------
// const primeiroNumero = Number(prompt('Digite um primeiro valor.'))
// const segundoNumero = Number(prompt('Digite um segundo valor.'))
// const comparaNumero = (num1, num2) => {
//     //Minha lógica da função vai ficar aqui.
//     if(num1 === num2) {
//         console.log('São iguais em valor e tipo.')
//         return comparaNumero
//     }
// }
// comparaNumero(primeiroNumero, segundoNumero)

// // Refazendo sem declarar preliminarmente os parâmetros.

// ----------------------->EXERCÍCIO 2<-----------------------------
// const primeiroNumero = Number(prompt('Digite um primeiro valor.'))
// const segundoNumero = Number(prompt('Digite um segundo valor.'))
// const comparaNumero = (num1, num2) => {
//     //Minha lógica da função vai ficar aqui.
//     if(num1 === num2) {
//         console.log('São iguais em valor.')
//     }   else { // //else sempre é uma negativa de if. Não é necessário colocar nenhum parâmetro para ele. Naturalmente ele é uma negação do if.
//         console.log('São diferentes em valor.')
//     }
// }
// comparaNumero(primeiroNumero, segundoNumero)

// ----------------------->EXERCÍCIO 3<-----------------------------
// const comparaNumeros = (num1, num2) => {
//     //Lógica
//     let resultadoComparacao
//     if(num1 > num2){
//         resultadoComparacao = 'Maior'
//     }   else if(num1 < num2){
//         resultadoComparacao = 'Menor'
//     }   else if(num1 === num2){
//         resultadoComparacao = 'Igual'
//     }   else {
//         return 'Não entendi :('
//     }
//     const resposta = `O primeiro número é: ${resultadoComparacao}.`
//     return resposta
// }
// console.log(comparaNumeros(87,14))

// ----------------------->EXERCÍCIO 4<-----------------------------
// const retornaTipoPokemon = (pokemon) => {
//     switch(pokemon.toUpperCase()) {
//         case 'BULBASSAURO':
//             console.log('Planta e veneno.')
//             break
//         case 'CHARMANDER':
//             console.log('Fogo.')
//             break
//         case 'SQUIRTLE':
//             console.log('Água.')
//             break
//         default:
//             console.log('Que Pokemon é esse?')
//         }
// }
// const pokemonUsuario = prompt('Digite um pokemon!')
// retornaTipoPokemon(pokemonUsuario)
// ----------------------->EXERCÍCIO 5<-----------------------------
// const checaCandidatura = (outraFaculdade, idade, ensinoMedio) => {
//     if(!outraFaculdade && idade > 18 && ensinoMedio){
//         console.log('Faça sua matrícula!')
//     }   else {
//         console.log('Não será possível realizar sua matrícula.')
//     }
// }
// const usuarioFazOutraFaculdade = prompt('Responda sim ou nao: Você faz outra faculdade?').normalize('NFC').toUpperCase().includes('SIM')
// const idade = Number(prompt('Qual sua idade?'))
// const usuarioTerminouEnsinoMedio = prompt('Responda sim ou nao: Você terminou ensino médio?').normalize('NFC').toUpperCase().includes('SIM')

// checaCandidatura(usuarioFazOutraFaculdade, idade, usuarioTerminouEnsinoMedio)
// ----------------------->CHALLENGE<-------------------------------
// const primeiraPessoa = {
//     nome: 'Samyr',
//     genero: 'masculino'
// }
// const segundaPessoa = {
//     nome: 'Keylla',
//     genero: 'feminino'
// }
// const terceiraPessoa = {
//     nome: 'Liniker',
//     genero: 'nao-binario'
// }
// const daBoasVindas = (objetoPessoa) => {
//     let textoBoasVindas = ''
//     if(objetoPessoa.genero === 'masculino'){
//         textoBoasVindas = 'Seja bem-vindo!'
//     }   else if(objetoPessoa.genero === 'feminino'){
//         textoBoasVindas = 'Seja bem-vinda!'
//     }   else {
//         textoBoasVindas = 'Desejo boas-vindas!'
//     }
//     console.log(`Oi, ${objetoPessoa.nome}! ${textoBoasVindas}`)
// }
// daBoasVindas(primeiraPessoa)
// daBoasVindas(segundaPessoa)
// daBoasVindas(terceiraPessoa)
