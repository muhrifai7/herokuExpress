const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

const app = express()
const port = 5000

app.use(bodyParser.json())

app.get('/', (req, res) => {
        return res.send('Welcome to Express heroku APi')
    })

//controllers
const CityController = require('./controllers/city')
const UserController = require('./controllers/user')

app.group("/api/v1", (router) => {

    //City API
    router.get('/city', CityController.index); 
    router.get('/city/:id', CityController.show); 
    router.post('/city/:id', CityController.store);
    router.patch('/city/:id', CityController.update)
    router.delete('/city/:id', CityController.delete)
    //another APIs goes here
    router.get('/user', UserController.index); 
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`Listening...`)
})