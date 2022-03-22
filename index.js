const express = require('express')
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send('Pagina principal')
})

app.get('/products', (req, res) => {
    res.json([
        {
            name: 'product 1',
            price: '10000'
        },
        {
            name: 'product 2',
            price: '20000'
        }
    ]);
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

app.get('/category/:id', (req, res)=>{
    const {id} = req.params
    res.json([
        {   id,
            name: 'Enlatados 1',
            price: '10000'
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
