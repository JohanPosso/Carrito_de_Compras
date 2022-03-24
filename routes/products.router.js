const express = require('express');
const { append } = require('express/lib/response');
const faker = require('faker')
const router = express.Router();

router.get('/', (req, res) => {
    const products = [];
    const { size } = req.query;
    const limit = size || 10;
    for (let index = 0; index < limit; index++) {

        products.push({
            
            nombre: faker.commerce.productName(),
            precio: parseInt(faker.commerce.price(), 10),
            imagen: faker.image.imageUrl()
        });

    }
    res.json(products);
});
//Con req.params pasamos recibimos el parametro
router.get('/:id', (req, res) => {
    const { id } = req.params
    res.json([
        {
            id,
            name: 'product 1',
            price: '10000'
        }
    ]);
});
router.post('/', (req, res) => {
    const body = req.body;
    res.json({
        message: 'Registro creado',
        data: body
    });
})
router.patch('/:id', (req, res) => {
    const { id } = req.params;
    const body = req.body;
    res.json({
        message: 'Registro Actualizado',
        data: body,
        id
    });
})
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        message: 'Registro Eliminado',
        id
    });
})

module.exports = router;