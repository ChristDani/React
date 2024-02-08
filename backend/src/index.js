require('dotenv').config(); // con esto llamamos a todas las variables de entorno que estamos creando

const app = require('./app');
require('./dataBase'); // llamamos a nuestra conexion a la base de datos.

async function main() {
    await app.listen(app.get('port'));
    console.log(`servidor '${app.get('serverName')}' activo en el puerto ${app.get('port')}`)
}

main();