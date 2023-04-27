const Router = require('express').Router()
const messageCtrl = require('../Controller/messageCtrl')
const auth = require('../Middleware/auth')

Router.post('/message', auth, messageCtrl.createMessage)

Router.get('/conversations', auth, messageCtrl.getConversations)

Router.get('/message/:id', auth, messageCtrl.getMessages)

Router.delete('/message/:id', auth, messageCtrl.deleteMessages)

Router.delete('/conversation/:id', auth, messageCtrl.deleteConversation)


module.exports = Router