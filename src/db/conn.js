const mongoose = require("mongoose");

mongoose.connect('mongodb://127.0.0.1:27017/response', {// Force the use of IPv4
}).then(() => {console.log("Connection successful")})
  .catch((error) => { 
    console.error(error);
  })



