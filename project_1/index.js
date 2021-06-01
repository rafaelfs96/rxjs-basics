const path = require('path')

const { readDir, elementsEndWith, readFiles, removeIfEmpty, removeSymbols, mergeContents, splitTextPer, groupElements, orderByNum } = require('./functions.js')

const subtitlesFolder = path.join(__dirname, 'subtitles')

const symbols = [ '.', '?', '-', ',', '"', '_', '<i>', '</i>', '\r', '[', ']', '(', ')' ]

readDir(subtitlesFolder)
  .then(elementsEndWith('.txt'))
  .then(readFiles)
  .then(mergeContents)
  .then(splitTextPer('\n'))
  .then(removeIfEmpty)
  .then(removeSymbols(symbols))
  .then(mergeContents)
  .then(splitTextPer(' '))
  .then(removeIfEmpty)
  .then(groupElements)
  .then(orderByNum('quantity', 'desc'))
  .then(console.log)