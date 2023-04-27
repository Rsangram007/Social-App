const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv")
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());
dotenv.config()



mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true ,autoIndex: false})
  .then(() => {
    console.log('Connected to database!');
  })
  .catch((error) => {
    console.error('Error connecting to database:', error);
  });
console.log(process.env.MONGODB_URL)
app.use("/api", require("./Router/authRouter"));
app.use("/api", require("./Router/userRouter"));
app.use("/api", require("./Router/postRouter"));
app.use("/api", require("./Router/commentRouter"));
app.use("/api", require("./Router/notifyRouter"));
app.use("/api", require("./Router/messageRouter"));

app.listen(process.env.PORT || 3000, () => {
  console.log("Backend Server is Running");
});
