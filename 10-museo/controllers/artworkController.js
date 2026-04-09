const isNumber = require("../utils/numbersUtils");
const connection = require('../config/db');

class ArtworkController{
    showNewArtwork = (req, res) => {
        const { artist_id } = req.params;

        res.render("newArtwork", { artist_id })
    }

    newArtwork = (req, res) => {
        const { artist_id } = req.params;
        const { title, price, description } =req.body;
        
        //validaciones
        if(!title) {
            res.render("newArtwork", { artist_id, message:"El título es obligatorio"})
        }else if(!isNumber(price) && price !=""){
            res.render("newArtwork", { artist_id, message:"El precio tiene que ser numerico"})
        }else{
            let finalPrice = 0;
            if(price != ""){
                finalPrice = Number(price);
            }
            let sql = 'INSERT INTO artwork (title, description, price, artist_id) VALUES (?,?,?,?)'
            let values = [title, description, finalPrice, artist_id]
            
            if(req.file){
                sql = 'INSERT INTO artwork (title, description, price, artwork_img, artist_id) VALUES (?,?,?,?,?)'
                values = [title, description, finalPrice, req.file.filename, artist_id]
            }
            connection.query(sql, values, (err, result)=>{
                if(err){
                    throw err;
                }else{
                    res.redirect(`/artist/profile/${artist_id}`)
                }
            })
        }
        
    }

    showEditArtwork = (req, res) =>{
        const {artwork_id} = req.params;
        let sql = `SELECT * FROM artwork WHERE artwork_id =? 
                    AND artwork_is_deleted = 0`;
        connection.query(sql, [artwork_id], (err, result)=>{
            if(err){
                throw err;
            }else{
                res.render("editArtwork", {artwork:result[0]})
            }
        })    
    }

    editArtwork = (req, res) =>{
        const {artwork_id, artist_id} = req.params;
        const {title, description, price} = req.body;
        
        let sql = 'UPDATE artwork SET title=?, description=?, price=? WHERE artwork_id=?'
        let values = [title, description, price, artwork_id]
        
        if(req.file){
            sql = 'UPDATE artwork SET title=?, description=?, price=?, artwork_img=? WHERE artwork_id=?'
            values = [title, description, price, req.file.filename, artwork_id]
        }
        connection.query(sql, values, (err, result)=>{
            if(err){
                throw err;
            }else{
                res.redirect(`/artist/profile/${artist_id}`);
            }
        })
    }

    showNewArtworkSelect = (req, res) => {
        let sql = 'SELECT * FROM artist WHERE artist_is_deleted = 0'
        connection.query(sql, (err, result)=>{
            if(err){
                throw err;
            }else{
                console.log("***************************", result);
                
                res.render('newArtworkSelect', {result})
            }
        })
    }

    newArtworkSelect = (req, res) =>{
        console.log("jljljlkjlkjlkjl", req.body);
        const {title, price, description, artist_id} = req.body;
        //validamos
        //insertamos

        res.redirect(`/artist/profile/${artist_id}`)        
    }

    delLog = (req, res)=>{
        const {artwork_id, artist_id} = req.params;
        let sql = 'UPDATE artwork SET artwork_is_deleted = 1 WHERE artwork_id = ?'
        connection.query(sql, [artwork_id], (err, result)=>{
            if(err){
                throw err
            }else{
                res.redirect(`/artist/profile/${artist_id}`)
            }
        })
    }

    delDef = (req, res)=>{
        const {artwork_id, artist_id} = req.params;
        let sql = 'DELETE FROM artwork WHERE artwork_id = ?'
        connection.query(sql, [artwork_id], (err, result)=>{
            if(err){
                throw err
            }else{
                res.redirect(`/artist/profile/${artist_id}`)
            }
        })
    }


}


module.exports = new ArtworkController();