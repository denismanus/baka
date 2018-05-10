var bcrypt = require('bcryptjs');
var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;
 
mongoose.Promise = global.Promise;

var userScheme = new Schema({
    id: {
        type: String
    },
    email: {
       type: String,
       required: true
    },
    password: {
        type: String,
        required: true
    },
    name: {
       type: String
    },
    country: {
        type: String
    },
    city: {
       type: String
    },
    companyType: {
       type: String
    },
    iot: 
       [{
            type: Schema.Types.ObjectId,
            ref: 'iot'
        }]    
});
userScheme.pre('save', async function(next){
	try{
		const salt = await bcrypt.genSalt(10);
		const passwordHash = await bcrypt.hash(this.password, salt);
		this.password = passwordHash;
		next();
	} catch(error){
		next(error);
	}
});

userScheme.methods.isValidPassword = async function(newPassword){
	try{
		return await bcrypt.compare(newPassword, this.password);
	}catch(error){
		next(error);
	}
}
var User = mongoose.model('User', userScheme);
module.exports =  User;