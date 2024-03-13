const express = require('express')
const router = express.Router()
const userControllers = require('../controllers/user')

let users = [
    {id: 1 , nama:'fadli', email:'riansyahfadli12@gmail.com'},
    // {id: 2 , nama:'hahaha', email:'haha@gmail.com'}
]

router.route('/users')
    .get(userControllers.index)  
    .post(userControllers.store)
    
router.get('/users/create', userControllers.create)

router.get('/users/:id', userControllers.show)

router.put('/users/:id', userControllers.update)

router.delete('/users/:userId',userControllers.delete)
 
module.exports = router
