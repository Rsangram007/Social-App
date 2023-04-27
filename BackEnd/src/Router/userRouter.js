const Router = require("express").Router();

const auth = require("../Middleware/auth");
const userCtrl = require("../Controller/userCtrl");

Router.get("/search", auth, userCtrl.searchUser);

Router.get("/user/:id", auth, userCtrl.getUser);

Router.patch("/user", auth, userCtrl.updateUser);

Router.patch("/user/:id/follow", auth, userCtrl.follow);
Router.patch("/user/:id/unfollow", auth, userCtrl.unfollow);

Router.get("/suggestionsUser", auth, userCtrl.suggestionsUser);

module.exports = Router;
