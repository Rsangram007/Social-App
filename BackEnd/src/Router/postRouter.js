const Router = require('express').Router()
const postCtrl = require('../Controller/postCtrl')
const auth = require('../Middleware/auth')

Router.route('/posts')
    .post(auth, postCtrl.createPost)
    .get(auth, postCtrl.getPosts)

Router.route('/post/:id')
    .patch(auth, postCtrl.updatePost)
    .get(auth, postCtrl.getPost)
    .delete(auth, postCtrl.deletePost)

Router.patch('/post/:id/like', auth, postCtrl.likePost)

Router.patch('/post/:id/unlike', auth, postCtrl.unLikePost)

Router.get('/user_posts/:id', auth, postCtrl.getUserPosts)

Router.get('/post_discover', auth, postCtrl.getPostsDicover)

Router.patch('/savePost/:id', auth, postCtrl.savePost)

Router.patch('/unSavePost/:id', auth, postCtrl.unSavePost)

Router.get('/getSavePosts', auth, postCtrl.getSavePosts)


module.exports = Router