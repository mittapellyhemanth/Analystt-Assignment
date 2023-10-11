const mongoose = require('mongoose');
const url ="mongodb+srv://mittunani1999:7gjAquV24KksKurk@cluster0.rdsfc2c.mongodb.net/?retryWrites=true&w=majority"
const connectDB= () =>{
    return mongoose.connect(url,{
useNewUrlParser:true,
useUnifiedTopology:true
    });
};
module.exports = connectDB;
