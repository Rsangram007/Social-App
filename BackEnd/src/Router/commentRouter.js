const Router = require('express').Router()
const commentCtrl = require('../Controller/commentCtrl')
const auth = require('../Middleware/auth')

Router.post('/comment', auth, commentCtrl.createComment)

Router.patch('/comment/:id', auth, commentCtrl.updateComment)

Router.patch('/comment/:id/like', auth, commentCtrl.likeComment)

Router.patch('/comment/:id/unlike', auth, commentCtrl.unLikeComment)

Router.delete('/comment/:id', auth, commentCtrl.deleteComment)



module.exports = Router