const mongoose = require('mongoose');

const contadorSchema = mongoose.Schema({
    usuario: {
        type: String,
        required: true
    },
    numeroClicks: {
        type: Number,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Contador', contadorSchema)