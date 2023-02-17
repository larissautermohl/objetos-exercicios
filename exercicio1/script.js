// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:

// a) Fora do array, crie **três objetos** que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades:

// ```jsx
// nome: string;
// preco: number;
// disponibilidade: boolean;
// ```

// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**.

// c) Imprima o array `sacolao`, e certifique-se de que agora ele seja um array **com três objetos**.

// const sacolao = []

// const fruta1 = {
//   nome: 'maca',
//   preco: 5,
//   disponibilidade:true
// }

//   const fruta2 ={
//   nome:'pera',
//   preco:3,
//   disponibilidade:false
//   }


//   const fruta3 = {
//   nome: 'banana',
//   preco:2,
//   disponibilidade:true
// }

// sacolao.push(fruta1)
// sacolao.push(fruta2)
// sacolao.push(fruta3)

// console.log(sacolao)

// const sacolao = []

// const frutas = [
// {
//   nome: 'maca',
//   preco: 5,
//   disponibilidade: true
// },
// {
//   nome: 'pera',
//   preco: 3,
//   disponibilidade: false
// },
// {
//   nome: 'banana',
//   preco: 2,
//   disponibilidade: true
// }
// ]
// sacolao.push(frutas)

const sacolao =[]

const manga = { nome: "manga", preco: 2, disponibilidade: true }
const pera = { nome: "pera", preco: 3, disponibilidade: false }
const banana = { nome: "banana", preco: 1, disponibilidade: true }

sacolao.push(manga)
sacolao.push(pera)
sacolao.push(banana)
console.log(sacolao)