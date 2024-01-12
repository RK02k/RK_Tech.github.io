const mongoose = require("mongoose");

// creating a database
// mongoose.connect('mongodb://'+config.host+':'+config.port+'/'+config.db,)
mongoose.connect('mongodb://127.0.0.1:27017/response', {// Force the use of IPv4
}).then(() => {console.log("Connection successful")})
  .catch((error) => { // this will only work if you provide location for the database
    console.error(error);
  })



