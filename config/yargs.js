const argv = require('yargs')
    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        demandOption: true,
        default: false,
        describe: 'Muestra los cambios en consola'
    })
    .option('h', {
        alias: 'hasta',
        type: 'number',
        demandOption: true,
        describe: 'Hasta que número quieres multiplicar la base'
    })
    .check(( argv, options ) => {
        if( isNaN (argv.b)){
            throw 'La base tiene que se un número'
        }
        return true
    })
    .argv

module.exports = argv;