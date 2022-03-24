const productRouter = require('./products.router');
const usersRouter = require('./users.router');
const categoryRouter = require('./category.router');


function routerApi(app){
    app.use('/products',productRouter);
    app.use('/users',usersRouter);
    app.use('/category',categoryRouter);
}

module.exports = routerApi;