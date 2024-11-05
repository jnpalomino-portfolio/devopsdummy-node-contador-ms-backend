const Contador = require("../models/Contador");

exports.crearContador = async (req, res) =>{

    try {
        let contador;
        contador = new Contador(req.body);

        await contador.save();
        res.send(contador);
        
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error en el POST')
    }
    console.log(req.body);
}

exports.obtenerContadores = async (req, res) =>{
    try {
        const contadores = await Contador.find();
        res.json(contadores);
    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error obteniendo contadores')
    }
}

exports.actualizarContador = async (req, res) =>{
    try {
        const {usuario, numeroClicks} = req.body;
        let contador = await Contador.findById(req.params.id);
        if (!contador) {
            res.status(404).json({msg: 'No existe el contador'});
        }
        contador.usuario = usuario;
        contador.numeroClicks = numeroClicks;

        contador = await Contador.findOneAndUpdate({ _id: req.params.id}, contador, {new:true})
        res.json(contador);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error actualizando el contador')
    }
}

exports.obtenerContador = async (req, res) =>{
    try {
        let contador = await Contador.findById(req.params.id);
        if (!contador) {
            res.status(404).json({msg: 'No existe el contador'});
        }
        res.json(contador);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error obteniendo el contador')
    }
}

exports.eliminarContador = async (req, res) =>{
    try {
        let contador = await Contador.findById(req.params.id);
        if (!contador) {
            res.status(404).json({msg: 'No existe el contador'});
        }
        await Contador.findOneAndDelete({ _id: req.params.id})
        res.json({msg: 'contador eliminado con exito'});

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error eliminando el contador')
    }
}