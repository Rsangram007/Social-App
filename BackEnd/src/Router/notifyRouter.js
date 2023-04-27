const Router = require("express").Router();
const auth = require("../Middleware/auth");
const notifyCtrl = require("../Controller/notifyCtrl");

Router.post("/notify", auth, notifyCtrl.createNotify);

Router.delete("/notify/:id", auth, notifyCtrl.removeNotify);

Router.get("/notifies", auth, notifyCtrl.getNotifies);

Router.patch("/isReadNotify/:id", auth, notifyCtrl.isReadNotify);

Router.delete("/deleteAllNotify", auth, notifyCtrl.deleteAllNotifies);

module.exports = Router;
