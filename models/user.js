var mongoose = require('mongoose');
var passportLocalMongoose = require('passport-local-mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    username: String,
    password: String,
    isAdmin: {type: Boolean, default: false},
    books: [{type: Schema.Types.ObjectId, ref: 'Book'}]
});

UserSchema.plugin(passportLocalMongoose)

module.exports = mongoose.model('User', UserSchema);