const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})

const conectarDB = async () => {
    try{
        const connectionString = process.env.DB_MONGO;
        console.log("DB_MONGO:", process.env.DB_MONGO);
        await mongoose.connect(connectionString, {useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin'})
        console.log('DB conectada')
    } catch (error) {
        console.error('Error al conectar a MongoDB:', error.message);
        console.error('Stack trace:', error.stack);
        process.exit(1);//hace que el pos entre en crahs si está mala la conexión a la base de datos
    }
}
module.exports = conectarDB  