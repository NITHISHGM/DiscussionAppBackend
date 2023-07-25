const mongoose = require("mongoose");
const dbConnect = () => {
  mongoose
    .connect(process.env.DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((con) => {
      console.log(`MongoDB connected to the host ${con.connection.host}`);
    })
    .catch((err) => {
      console.log(err);
    });
};
module.exports = { dbConnect };
