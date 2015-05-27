var mongoose =require('mongoose');
var	Schema = mongoose.Schema;
 var userSchema = Schema({
 	firstName: String,
 	lastName: String,
 	email: String,
 	password: String,
 	recipes: [{type: Schema.Types.ObjectId, ref: 'recipe'}]
 });

 var User = mongoose.model('user', userSchema);
 module.exports = User;