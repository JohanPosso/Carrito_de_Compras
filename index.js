const express = require('express')
const faker = require('faker')
const Faker = require('faker/lib')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Pagina principal')
})

app.get('/products', (req, res) => {
   const products = [];
   for (let index = 0; index < 100; index++) {
       
        products.push({
            nombre: faker.commerce.productName(),
            precio: parseInt(faker.commerce.price(), 10),
            imagen: faker.image.imageUrl(),
        })
       
   }
   res.json(products);
});
//Con req.params pasamos recibimos el parametro
app.get('/products/:id', (req, res) => {
    const {id} = req.params
    res.json([
        {   id,
            name: 'product 1',
            price: '10000'
        }
    ]);
})
//Query validamos que existan parametros, si no existen mostrar mensaje de no hay parametros
//A los query en la URL se le añade el signo de interrogacion despues del endpoin /users?limit=10&&offset=200
app.get('/users', (req, res)=>{
    const {limit,offset} = req.query
 if (limit && offset) {
     res.json({
        limit,
        offset
     })
 }else {
     res.send('No hay parametros')
 }
})

app.get('/category/:categoryId/products/:productsId', (req, res)=>{
    const {categoryId,productsId} = req.params
    res.json([
        {   categoryId,
            productsId
        }
    ]);
})

app.delete('/category/:id', (req, res)=>{
    const {id} = req.params
    res.json([
        {   id,
            name: 'Enlatados 1',
            price: '10000'
        }
    ]);
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});
