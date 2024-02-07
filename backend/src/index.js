const app = require('./app');

async function main() {
    await app.listen(app.get('port'));
    console.log(`servidor '${app.get('serverName')}' activo en el puerto ${app.get('port')}`)
}

main();