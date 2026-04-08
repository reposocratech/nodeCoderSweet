const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistControllers')

//1.- abre el formulario de registro de artista
//url: http://localhost:4000/artist/register
router.get('/register', artistController.showRegister);

//2.- recoge los datos del formulario de registro y registra el artista
//url: http://localhost:4000/artist/register
router.post('/register', artistController.register);

//3.- abre el formulario de login de artista
//url: http://localhost:4000/artist/login
router.get('/login', artistController.showLogin);

//4.- recoge los datos del form login y haga el login del artista
//url: http://localhost:4000/artist/login
router.post('/login', artistController.login)

//5.- nos muestra todos los artistas
//url: http://localhost:4000/artist/allArtist
router.get('/allArtist', artistController.allArtist);

//6.- nos muestra el profile de un artista
//url: http://localhost:4000/artist/profile/56
router.get('/profile/:id', artistController.profile)

module.exports = router;
