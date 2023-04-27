const Router = require('express').Router()
const authCtrl = require('../Controller/authCtrl')

Router.post('/register', authCtrl.register)

Router.post('/login', authCtrl.login)

Router.post('/logout', authCtrl.logout)

Router.post('/refresh_token', authCtrl.generateAccessToken)


module.exports = Router