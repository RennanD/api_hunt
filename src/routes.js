const routes = require('express').Router()

const ProductController = require('./controllers/ProductController')

routes.get('/',ProductController.list)
routes.get('/show/:id', ProductController.show)

routes.post('/',ProductController.store)


routes.put('/update/:id', ProductController.update)

routes.delete('/delete/:id', ProductController.destroy)

module.exports = routes