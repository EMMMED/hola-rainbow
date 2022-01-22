const params = require('yargs-parser')(process.argv.slice(2))
const colors = require('colors')

const nombre = params.nombre
console.log(`hola mundo, por ${nombre}`.rainbow)