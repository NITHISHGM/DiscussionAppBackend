const express = require("express");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 6000;
const { dbConnect } = require("./config/db");

//DB connection
dbConnect();

//parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//router intilization
app.use("/api", require("./routes/loginRegister"));
app.use("/api/discussion", require("./routes/discussionRoute"));
app.use("/api/commnet", require("./routes/commentRoute"));

app.listen(PORT, (err) => {
  if (!err) {
    console.log(`Server started on port ${PORT}`);
  }
});
