const mongoose = require('mongoose');
require('dotenv').config();

const uri = process.env.MONGODB_URI;

mongoose.connect(uri, { 
}).then(() => {
    console.log("Connection successful");
}).catch((e) => {
    console.log("Connection unsuccessful:", e);
});
