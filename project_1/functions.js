const fs = require('fs')
const pathModule = require('path')

function readDir(path) {
  return new Promise((resolve, reject) => {
    try {
      const files = fs.readdirSync(path)
      const completeFiles = files.map(f => pathModule.join(path, f))
      resolve(completeFiles)
    } catch (e) {
      reject(e)
    }
  })
}


function readFile(path) {
  return new Promise((resolve, reject) => {
    try {
      const content = fs.readFileSync(path, { encoding: 'utf-8' })
      resolve(content.toString())
    } catch (e) {
      reject(e)
    }
  })
}

const removeSymbols = symbols => arr => arr.map(el => {
  return symbols.reduce((acc, symbol) => acc.split(symbol).join(''), el)
})

function groupElements(words) {
  return Object.values(words.reduce((acc, word) => {
    const el = word.toLowerCase()

    const qtd = acc[el] ? acc[el].quantity + 1 : 1

    acc[el] = {
      element: el,
      quantity: qtd
    }
    
    return acc
  }, {}))
}

function orderByNum(attr, order = 'asc') {
  return arr => {
    const desc = (o1, o2) => o2[attr] - o1[attr]
    const asc = (o1, o2) => o1[attr] - o2[attr]
    return arr.sort(order === 'asc' ? asc : desc)
  }
}

const readFiles = paths => Promise.all(paths.map(p => readFile(p)))

const elementsEndWith = textPattern => arr => arr.filter(el => el.endsWith(textPattern))

const removeIfEmpty = arr => arr.filter(el => el.trim())

const mergeContents = arr => arr.join(' ')

const splitTextPer = symbol => text => text.split(symbol)

module.exports = {
  readDir,
  elementsEndWith,
  readFile,
  readFiles,
  removeIfEmpty,
  removeSymbols,
  mergeContents,
  splitTextPer,
  groupElements,
  orderByNum
}