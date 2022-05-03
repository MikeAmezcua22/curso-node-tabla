
const {crearArchivo} = require('./helpers/multiplicar')
const argv = require('./config/yargs')
const colors = require('colors')


console.clear()
console.log(argv)

console.log('la base: yargs', argv.b)


//const [ , , argv3  = 'base=5'] = process.argv;
//const [ , base = 5 ] = argv3.split('=')

//const base = 1

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo.rainbow, 'creado'))
    .catch(err => console.log(err))


