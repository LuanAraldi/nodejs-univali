const express = require('express')
const router = express.Router()

const userController = require('./../controllers/user')

router.post('/user', (req, res) => {
    userController.new(req, res)
})

router.get('/user', (req, res) => {
    userController.retrieveUsers(req, res)
})

router.get('/user/:id', (req, res) => {
    userController.retriveUserById(req, res)
})

router.delete('/user/:id', (req, res) => {
    userController.delete(req, res)
})

router.put('/user/:id', (req, res) => {
    userController.update(req, res)
})

module.exports = router