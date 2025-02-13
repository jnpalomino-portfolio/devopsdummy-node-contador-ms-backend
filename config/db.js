const mongoose = require('mongoose');
require('dotenv').config({path: 'variables.env'})

const conectarDB = async () => {
    try{
        const connectionString = process.env.DB_MONGO;
        await mongoose.connect(connectionString, {useNewUrlParser: true,
            useUnifiedTopology: true,
            authSource: 'admin'})
        console.log('DB conectada')
    } catch(error){
        console.log('Error al conectar a MongoDB:', error);
        process.exit(1);
    } 
}
module.exports = conectarDB  