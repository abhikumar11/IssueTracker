const mongoose= require('mongoose');

mongoose.connect("mongodb+srv://abhi:abhi@cluster1.p6lnqsp.mongodb.net/bugtracker");
const db=mongoose.connection;
db.on('error',console.error.bind(console,'error in connecting database'));
db.once("open",() => {console.log("Connected to database")});
module.exports = db;