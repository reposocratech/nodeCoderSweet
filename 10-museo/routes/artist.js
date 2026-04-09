const express = require('express');
const router = express.Router();
const artistController = require('../controllers/artistControllers');
const uploadFile = require('../middlewares/uploadFile');

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
router.get('/profile/:id', artistController.profile);

//dificil
router.get('/profileDificil/:id', artistController.profileDificil);

//7.- nos abre el formulario de edición de un artista
//url: http://localhost:4000/artist/showEditArtist/56
router.get('/editArtist/:id', artistController.showEditArtist);

//8.- recoge los datos del formulario y realiza el update en db
//url: http://localhost:4000/artist/editArtist/56
router.post('/editArtist/:id', uploadFile("artists") ,artistController.editArtist)

//9.- borrado definitivo de un artista
router.get('/delDef/:artist_id', artistController.delDef);

//10.- borrado lógico de un artista
router.get('/delLog/:artist_id', artistController.delLog);


module.exports = router;
