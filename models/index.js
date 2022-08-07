const mongoose = require('mongoose');

const mainDB = () => {
    mongoose.connect("mongodb+srv://wj6715:1234@cluster0.sg8ay.mongodb.net/?retryWrites=true&w=majority", {
    dbName : 'maindb',
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }, (err) => {
    if(err) {
      console.log("DB Connection Fail!");
    }
    else {
      console.log("DB Connection Success!");
    }
  });
};

mongoose.connection.on('error', (error) => {
  console.log("DB Error is : ", error);
});

mongoose.connection.on('disconnected', () => {
  console.error("DB Disconnected and Retry!");
  mongoose.connect();
});

module.exports = mainDB;