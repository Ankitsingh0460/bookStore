const express = require("express");
const dotenv = require("dotenv");
const app = express();
const mongoose = require("mongoose");
const bookRoute = require("./routes/book.routes");
const PORT = process.env.PORT || 8001;
const cors = require("cors");
const userRoute = require("./routes/user.route");

app.use(cors());
dotenv.config();
app.use(express.urlencoded({ extended: false }));

app.use(express.json());
mongoose
  .connect("mongodb://localhost:27017/bookStore")
  .then((e) => console.log("DataBase is Connected Sucessfully"));

app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server Started At Port ${PORT}`);
});
