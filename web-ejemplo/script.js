const list = []
const anotherList = list.concat(157)

const persona = {
  name: 'Daniel',
  twitter: '@daniSolarte',
  age: 23,
  isDeveloper: true,
  links: ['https://daniel.tube', 'https://daniel.live'],
}

/* 

const field = 'twitter'
console.log(persona[field])
console.log(persona['field'])

*/

// FUNCTION EXPRESSION

const sumar = (a, b) => {
  console.log(a)
  console.log(b)
  return a + b
}

// DECALARACION DE FUNCION

function restar(a, b) {
  return a - b
}

const op1 = 8
const op2 = 2

console.log(sumar(2, 'dos'))
