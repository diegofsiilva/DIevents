const express = require('express');
const router = express.Router();
const HomeController = require('../controllers/HomeController');

// Rotas da página inicial
router.get('/', HomeController.index);

// Rotas de eventos
router.get('/events', HomeController.listEvents);
router.get('/events/:id', HomeController.showEvent);

// Exporta o router
module.exports = router;

