const mongoose = require("mongoose");

module.exports = () => {
  return mongoose.connect(
    "mongodb+srv://mohak:mohak1914@cluster0.qkpjn.mongodb.net/Expertia?retryWrites=true&w=majority"
  );
};
