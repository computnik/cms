/**
 * Created by nikhil.m on 12/20/2015.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var adminUser = new Schema({
    username: String,
    password: String
});
var adminUser = mongoose.model('adminUser', adminUser);
module.exports=adminUser;