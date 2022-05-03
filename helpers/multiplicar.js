const fs = require('fs');

const crearArchivo = async(base = 5, listar= false, hasta = 0) => {
    try{

        let salida = ''

        for(let i = 1; i<= hasta ; i++){
            salida += `${base} ${'x'.green} ${i} = ${base * i}\n`
        }

        if(listar) {

            console.log(salida)
        }


        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida) 

        return `tabla-${base}.txt`

    }catch(error){
        console.log(error)
    }
    
}

module.exports = {
    crearArchivo: crearArchivo
}