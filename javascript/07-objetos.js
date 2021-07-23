// ------------------- AULA JAVASCRIPT - OBJETOS -------------------
// ----------------------->EXEMPLOS<--------------------------------
// // Estrutura dos Objetos
// const cachorro = {
//     nome: 'Polly',
//     cor: 'Caramelinho',
//     raca: 'Lhasa Apso',
//     porte: 'Pequeno',
//     gostos: ['dormir','ossinhos', 'carinho'],
//     latir: () => {
//         console.log('Latir toda hora')
//     },
//     dormir: function () {
//         console.log('Zzzzzz')
//     }
// }
// console.log(cachorro, typeof cachorro)
// const instrutora = {
//     nome: 'Amanda Rangel',
//     idade: 27,
//     email: 'madinha_rock@gmail.com'
// }
// console.log(instrutora, typeof instrutora)

//  --------- ACESSANDO PROPRIEDADES -------------------------
// // NOTAÇÃO COM PONTO
// console.log('Nome do cachorro:', cachorro.nome)
// console.log('Cor do cachorro:', cachorro.cor)

// //NOTAÇÃO COM COLCHETES
// console.log('Nome do cachorro:', cachorro['raca'])
// console.log('Gostos do cachorro:', cachorro['gostos'])

//  --------- ALTERANDO PROPRIEDADES -------------------------
// // NOTAÇÃO COM PONTO
// cachorro.nome = 'Poliana'
// console.log('cachorro')

// //NOTAÇÃO COM COLCHETES
// cachorro['cor'] = 'Marrom'
// console.log(cachorro)

//  --------- ACESSANDO OBJETOS DENTRO DE OBJETOS ------------
// // NOTAÇÃO COM PONTO
// const paiDePet = {
//     nome: 'Caio Teixeira',
//     pet: {
//         nome: 'Lupin',
//         raca: 'Salsicha',
//         idade: 1
//     }
// }
// console.log(`Nome do pet do Caio:`, paiDePet.pet.nome)
// console.log(`Nome do dono:`, paiDePet.nome)

//  --------- ACESSANDO ÍNDICE DENTRO DE OBJETOS -------------
// // NOTAÇÃO COM PONTO
// const cursoNoturno = {
//     nome: 'Noturno Frontend',
//     linguagens: ['JS', 'CSS', 'HTML']
// }
// console.log('Primeira linguagem:', cursoNoturno.linguagens[0])
// console.log('Primeira linguagem:', cursoNoturno.linguagens[1])
// console.log('Primeira linguagem:', cursoNoturno.linguagens[2])

//  --------- ACESSANDO ARRAY DE OBJETOS ---------------------
// // NOTAÇÃO COM PONTO
// const instrutoras = [
//     {nome: "Lais", modulo: 1},
//     {nome: "Amanda",modulo: 2},
//     {nome: "Chijo",modulo: 3}
// ]
// console.log(`A ${instrutoras[0].nome} dá aulas no módulo ${instrutoras[0].modulo}.`)

// const nandi = instrutoras[1]
// console.log(`A ${nandi.nome} dá aulas no módulo ${nandi.modulo}.`)

// const nomeChijo = instrutoras[2].nome
// const moduloChijo = instrutoras[2].modulo
// console.log(`A ${nomeChijo} dá aulas no módulo ${moduloChijo}`)

//  --------- ADICIONANDO PROPRIEDADES EM OBJETOS ------------
// // Para atribuir objetos em objeto, eu posso utilizar o const, mesmo que esteja alterando posteriormente as chaves internas. Porém, se fosse para atribuir um valor novo como um todo para o Objeto, o ideal seria o "let". Muito pouco usado.
// const cursoIntegral = {
//     nome: 'Web Full Stack',
//     linguagens: ['JS', 'CSS', 'HTML', 'TS']
// }
// // NOTAÇÃO COM PONTO
// console.log(cursoIntegral)
// cursoIntegral.numeroEstudantes = 72
// //NOTAÇÃO COM COLCHETES
// cursoIntegral['horario'] = 'Das 8h às 17h'
// console.log(cursoIntegral)

//  --------- COPIAR UM OBJETO -------------------------------
// const usuario = {
//     nome: 'Astrodev',
//     idade: 25,
//     email: 'astrodev@labenu.com.br'
// }
// const novoUsuario = {...usuario, nome: 'Chijo'}
// console.log('Novo usuário:', novoUsuario)
// console.log('Usuário antigo:', usuario)

//  --------- COPIAR UM ARRAY --------------------------------
// const listaDeProfs = ['Pedro', 'Chijo', 'Laís']
// const copiaProfs = [...listaDeProfs, 'Amanda']
// copiaProfs.splice(1, 1)
// console.log('Lista inicial', listaDeProfs)
// console.log('Lista copiada', copiaProfs)

// ----------------------->EXERCÍCIO 1<-----------------------------
// const filme = {
//     titulo: 'Guardiões da Galáxia',
//     direcao: 'Jares Gunn',
//     lancamento: 2014,
//     elenco: ['Chris Pratt', 'Zoe Saldana', 'Bradley Cooper', 'Erwin Hommel'],
//     assistindo: true
// }
// console.log('Título:', filme.titulo)
// console.log('Diretor:', filme.direcao)
// console.log('Ano de Lançamento:', filme.lancamento)
// console.log('Elenco:', filme['elenco'], filme.elenco)
// console.log('Já assisti?', filme['assistido'])

// ----------------------->EXERCÍCIO 2<-----------------------------
// const pessoa = {
//     nome: 'Matt',
//     idade: 28,
//     generoMusical: 'Rock'
// }
// console.log(`O nome da pessoa é ${pessoa.nome}, ela tem ${pessoa.idade} anos e gosta muito de ${pessoa.generoMusical}.`)

// const userInput = {
//     userName: prompt('Please insert your name'),
//     userAge: Number(prompt('Please insert, your age')),
//     musicStyle: prompt('Please insert your favorite kind of music.')
// }
// console.log(`The person name is ${userInput.userName}, and has ${userInput.userAge} years old and the favorite kind of music is ${userInput.musicStyle}.`)

// ----------------------->EXERCÍCIO 3<-----------------------------
// //ITEM A
// filme.personagens = ['Peter Quill', 'Gamora', 'Rocket', 'Groot']
// console.log(filme)

// //ITEM B
// console.log(`${filme.personagens[0]} é interpretado por ${filme.elenco[0]}`)
// console.log(`${filme.personagens[1]} é interpretado por ${filme.elenco[1]}`)
// console.log(`${filme.personagens[2]} é interpretado por ${filme.elenco[2]}`)
// console.log(`${filme.personagens[3]} é interpretado por ${filme.elenco[3]}`)

// //ITEM C
// filme.elenco[0] = 'Xuxa'
// console.log(filme)

// //ITEM D
// console.log(`O nome do filme é ${filme.titulo}. Seus personagens são: ${filme.personagens[0]}, ${filme.personagens[1]}, ${filme.personagens[2]} e ${filme.personagens[3]}.`)

// ----------------------->EXERCÍCIO 4<-----------------------------
// const mudarPessoa = (pessoaParaMudar) => {
//     const novaPessoa = {
//         ...pessoaParaMudar,
//         comidas: ['Lasanha', 'Pizza', 'Batata Frita'],
//         melhorAmigo: {
//             nome: 'João',
//             idade: 25
//         }
//     }
//     console.log(`O nome da pessoa é ${novaPessoa.nome} e suas comidas favoritas são: ${novaPessoa.comidas[0]}, ${novaPessoa.comidas[1]}, ${novaPessoa.comidas[2]}. Seu melhor amigo se chama ${novaPessoa.melhorAmigo.nome} e tem ${novaPessoa.melhorAmigo.idade} anos.`)
// }
// mudarPessoa(pessoa)

// const outraPessoa = {
//     nome: 'Letícia Chigo',
//     idade: 27
// }
// mudarPessoa(outraPessoa)
