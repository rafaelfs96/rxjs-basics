//? arrow function
const felizNatal = () => console.log('feliz natal')
felizNatal()

const saudacao = nome => `fala ${nome}`
console.log(saudacao('rafael'))

const somar = (...numeros) => {
  let total = 0
  for (let n of numeros) {
    total += n
  }

  return total
}
console.log(somar(1, 2, 3, 4, 5, 6))
console.log(somar(6, 5, 4, 3, 2, 1))
