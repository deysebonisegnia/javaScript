var arr = [5,"Deyse",true,{teste:1,teste:2}];
console.log(arr);
var arr2 = [2,3,4,5,6];
console.log(arr2);
console.log(arr[1]);
console.log(arr2[0]);

arr[4] = 10;
arr[0] = "teste";
console.log(arr);
console.log(typeof arr);

//console
console.log('olá!')
console.error('Este é um erro!')
console.warn('Este é um aviso');
console.log ('Esta é uma mensagem')

// variáveis
var x = 10
let y = 15
const z = 20
console.log(x)
console.log(y)
console.log(z)

//tipo de dados
const name = 'Deyse'
const shirtsQty = 4
const isApproved = false
let surname = null
let age
const languages = ['JavaScript','php','Python']
const user = {email:'dbonisegniabf@gmail.com', password:'teste123'}

console.log(name);
console.log(shirtsQty)
console.log(languages)
console.log(typeof name) // String
console.log(typeof surname) // Null
console.log(typeof user) // Object
// métodos de string
const fullName = 'Deyse Bonisegnia'

console.log(fullName.length) 

const stringToArray = fullName.split(' ')
console.log(stringToArray) 

console.log(fullName.toLowerCase())

console.log(fullName.toUpperCase())

console.log(fullName.indexOf('Bonisegnia')) 
console.log(fullName.slice(0, 5)) 

// métodos de array
const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length) // 5

console.log(list[2]) // c

list[5] = 'f'
console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

list.push('g') //add item no ultimo 

console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f', 'g']

console.log(list[list.length - 1]) // ultimo item - g

list.pop() // ['a', 'b', 'c', 'd', 'e', 'f'] tira o ultimo item

list.shift() //tira item primeiro
console.log(list) //  ['b', 'c', 'd', 'e', 'f']

list.unshift('a') //ponha item primeiro

console.log(list) // ['a', 'b', 'c', 'd', 'e', 'f']

// objetos
const product = {
    name: 'Camisa',
    price: 15.99,
    inStock: true,
    sizes: ['P', 'M', 'G'],
  }
  console.log(product.name)
  product.color = 'Azul' // Adicionando propriedade
  console.log(product)
  const { price, inStock } = product // destructuring

console.log(price)
// JSON
const dog = {
  name: 'Shark',
  age: 10,
}
const json = JSON.stringify(dog)

console.log(json)
const obj = JSON.parse(json)
console.log(obj)
// Estruturas condiconais
const a = 10

if (a > 8) {
  console.log('A é maior que 8!')
}
const b = 'Deyse'
if (b === 'João') {
    console.log('O nome é João!')
  } else if (b === 'Pedro') {
    console.log('O nome é Pedro!')
  } else {
    console.log('Não encontramos o nome do usuário!')
  }
  const someNumber = 14

let testingANumber = someNumber < 20 ? 'Yes' : 'No'

console.log(testingANumber) // yes

// Estruturas de repetição
const myList = [1, 2, 3, 4, 5]
let counter = 0

while (counter < myList.length) {
  console.log('Imprimindo: ' + myList[counter])
  counter++
}

const mySecondList = ['a', 'b', 'c', 'd', 'e']

for (let counter = 0; counter < mySecondList.length; counter++) {
  console.log('Imprimindo: ' + mySecondList[counter])
}
// array methods
const names = ['Matheus', 'João', 'Pedro', 'Maria']

names.forEach(function (name) {
  console.log(`O nome é: ${name}`)
})
const modifiedNames = names.map(function (name) {
    if (name === 'Matheus') {
      return (name = 'Sr. Matheus')
    } else {
      return name
    }
  })
  
  console.log(modifiedNames)
  const bigNumbers = [1, 2, 3, 10, 50].filter((number) => {
    return number > 5
  })
  
  console.log(bigNumbers) // [10, 50]
  
  const sumAll = [10, 20, 30, 40, 50].reduce((total, number) => {
    return total + number
  })
  console.log(sumAll) // 150
  // Funções
function minhaFuncao() {
    console.log('Olá função!')
  }
  
  minhaFuncao()
  function nomeCompleto(nome, sobrenome) {
    return `Olá ${nome} ${sobrenome}, como vai?`
  }
  
  const saudacao = nomeCompleto('deyse', 'Bonisegnia')
  
  console.log(saudacao)

  const myArrowFunction = (a, b) => {
    return a + b
  }
  
  console.log(myArrowFunction(2, 2))
  
  const mySimpleArrow = (a, b) => a + b
  
  console.log(mySimpleArrow(5, 5))
  
// classes
class Product {
    constructor(name, price) {
      this.name = name
      this.price = price
    }
    productDetails() {
        return `O nome do produto é: ${this.name} e ele custa RS${this.price}`
      }
    }
    const socks = new Product('Meia branca', 5.99)

    console.log(socks.productDetails())

   // DOM
const title = document.getElementById('title')
const sameTitle = document.querySelector('#title')

const texts = document.querySelectorAll('.text')

text.forEach((text) => {
  console.log(text.textContent.toUpperCaser())
})
// manipulação de elementos
title.textContent = 'Mudei o texto'

text[0].innerHTML = '<span>Alteramos o HTML deste elemento</span>'

text[1].style.backgroundColor = 'red'

text[2].classList.add('my-class')

text[3].remove()

// eventos
btn.addEventListener('click', function () {
  console.log('clicou!')
})








































