var mongoose = require('mongoose');

module.exports = function () {
    var UserSchema = new mongoose.Schema({
        username: { type:String, required:true, unique:true, index:true }
    });

    return mongoose.model('User', UserSchema);
}