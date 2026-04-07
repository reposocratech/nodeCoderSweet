const express = require('express');
const router = express.Router();

//ruta que abre el formulario de nueva cita
router.get('/newAppointment', (req, res)=>{
    res.render('formNuevaCita');
})

router.post('/newAppointment', (req, res)=>{
    const {name, lastname, email, phone, date} = req.body;
    res.send(`Tu cita se ha establecido para el dia ${date}, 
        a nombre de ${name} ${lastname} , con email: ${email} y tel: ${phone}`)
});


module.exports = router;
