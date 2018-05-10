var mongoose = require('../libs/mongoose');
var Schema = mongoose.Schema;
 
mongoose.Promise = global.Promise;

var iotScheme = new Schema({
    id: {
        type: String
    },
    values: {
        type: [],
        required: true
    },
    date: {
       type: Date,
       required: true
    },
    location: {
        type: String,
        required: true
    }
});
var IoT = mongoose.model('IoT', iotScheme);
module.exports =  IoT;