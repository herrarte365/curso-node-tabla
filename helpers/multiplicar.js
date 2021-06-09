const fs = require('fs');
const colors = require('colors');

const crearArchivo = async(base = 1, l, h) => {

    let salida = '';
    let consola = '';

    console.log(`*******************************`.rainbow);
    console.log(`*****     Tabla del ${base}     *****`.rainbow);
    console.log(`*******************************`.rainbow);

    for (let i = 1; i <= h; i++) {
        salida += `${base} x ${i} = ${i*base}\n`;
        consola += `${colors.green(base)} x ${colors.green(i)} = ${i*base}\n`;
    }

    fs.writeFile(`./out/tabla-${base}.txt`, salida, (err) => {
        if (err) throw err;
        (l) ? console.log(consola): '';
    });

    return `tabla-${base}.txt`.rainbow;
}

module.exports = {
    crearArchivo
}