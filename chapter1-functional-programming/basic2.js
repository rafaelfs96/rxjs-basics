//? passar uma func como param para outra func
function execute(fn) {
  if (typeof fn !== 'function') return
  fn()
}

function bomDia() {
  console.log('bom dia')
}

const boaTarde = function () {
  console.log('boa tarde')
}

execute(2)
execute(bomDia)
execute(boaTarde)

//? retornar uma func a partir de uma outra func
const power = base => exp => Math.pow(base, exp)

const result = power(2)(8)
console.log(result)
