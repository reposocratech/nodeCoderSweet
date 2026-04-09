const express = require ('express');
const artworkController = require('../controllers/artworkController');
const uploadFile = require('../middlewares/uploadFile');

const router = express.Router();

//abre el formulario de creación de una nueva obra de arte
//http://localhost:4000/artwork/showNewArtwork
router.get("/showNewArtwork/:artist_id", artworkController.showNewArtwork )

//recoge los valores del formulario de cración de una nueva obra
//http://localhost:4000/artwork/newArtwork/88
router.post("/newArtwork/:artist_id", uploadFile("artworks"), artworkController.newArtwork)

//abrir formulario de edición de una obra de arte
//http://localhost:4000/artwork/showEditArtwork/88
router.get("/showEditArtwork/:artwork_id", artworkController.showEditArtwork )

//recoge los datos del formulario de edición de una obra de arte
//http://localhost:4000/artwork/editArtwork/88
router.post("/editArtwork/:artwork_id/:artist_id", uploadFile("artworks"), artworkController.editArtwork )

//abre el formualrio de add una obra con un select
router.get("/newArtworkSelect", artworkController.showNewArtworkSelect )
router.post("/newArtworkSelect",uploadFile("artworks"), artworkController.newArtworkSelect )

router.get("/delLog/:artwork_id/:artist_id", artworkController.delLog)
router.get("/delDef/:artwork_id/:artist_id", artworkController.delDef)

module.exports = router;