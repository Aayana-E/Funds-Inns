const express = require("express");
const authRouter = require("./routes/auth");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
  app.use(express.urlencoded({extended: true}));
  app.use(express.json());
app.use(bodyParser.json())
app.use("/api/auth", authRouter);

const URI =
  "mongodb+srv://fundsinn:fONRdBVCpQamLlHh@cluster0.gg4yweq.mongodb.net/?retryWrites=true&w=majority";

mongoose.set("strictQuery", false);
mongoose

  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB database");
  })
  .catch((error) => {
    console.error("Error connecting to MongoDB database", error);
  });

app.get("/", (req, res) => {
  res.send("hello");
});

app.listen(8000, () => {
  console.log("server started on 8000");
});
