const express = require('express');
const routerApi = require('./routes')
const app = express()
const port = 3000

//Middleware para mostrar la informacion tipo JSON que nos enviana atraves del metodo POST
app.use(express.json());

app.get('/',(req,res) =>{
    res.send('Pagina principal')
});

routerApi(app);

app.listen(port, () => {
    console.log(`App listening on port: ${port}`)
});
