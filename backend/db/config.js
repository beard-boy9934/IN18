const mongoose = require('mongoose');
mongoose.set('strictQuery', true); 

const uri = "mongodb+srv://beard_boy:Si9934459842@cluster0.tjlxuk4.mongodb.net/IN18?retryWrites=true&w=majority";

mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log("Could not connect", err);
  });
