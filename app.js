const { argv } = require('./config/yargs');
const colors = require('colors');

const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch (comando) {
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${archivo}`))
            .catch(err => console.log(err));
        break;
    case 'listar':
        console.log('=======================');
        console.log(`=====Tabla de ${argv.base} ===`);
        console.log('=======================');
        listarTabla(argv.base, argv.limite)
            .then(data => console.log(data.green))
            .catch(err => console.log(err));
        break;

    default:
        console.log('Comando no reconocido.');
}