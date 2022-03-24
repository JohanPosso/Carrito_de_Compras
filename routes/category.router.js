const express = require('express');
const router = express.Router();

router.get('/:categoryId/products/:productsId', (req, res)=>{
    const {categoryId,productsId} = req.params
    res.json([
        {   categoryId,
            productsId
        }
    ]);
})

router.delete('/:id', (req, res)=>{
    const {id} = req.params
    res.json([
        {   id,
            name: 'Enlatados 1',
            price: '10000'
        }
    ]);
});

module.exports = router;
