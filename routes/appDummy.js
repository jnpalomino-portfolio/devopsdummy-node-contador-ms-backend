const express = require('express');
const router = express.Router();
const appDummyController = require('../controllers/appDummyController');

router.post('/', appDummyController.crearContador);
router.get('/', appDummyController.obtenerContadores);
router.put('/:id', appDummyController.actualizarContador);
router.get('/:id', appDummyController.obtenerContador);
router.delete('/:id', appDummyController.eliminarContador);

module.exports = router;