function somar(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
console.log(somar(1)(2)(3))

// -------------------------------------- //
function calc(x) {
  return function (y) {
    return function (fn) {
      return fn(x, y)
    }
  }
}

function subtrair(a, b) {
  return a - b
}

function multiplicar(a, b) {
  return a * b
}

console.log(calc(2)(3)(subtrair))
console.log(calc(3)(4)(multiplicar))
