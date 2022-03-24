const express = require('express');
const router = express.Router();

//Query validamos que existan parametros, si no existen mostrar mensaje de no hay parametros
//A los query en la URL se le añade el signo de interrogacion despues del endpoin /users?limit=10&&offset=200
router.get('/', (req, res)=>{
    const {limit,offset} = req.query
 if (limit && offset) {
     res.json({
        limit,
        offset
     })
 }else {
     res.send('No hay parametros')
 }
});

module.exports = router;