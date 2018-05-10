var joi = require('joi');

module.exports = {
	validateBody: function(schema){
		return function(req, res, next){
			console.log(req.body);
			const result = joi.validate(req.body, schema);
			if(result.error){
				return res.status(400).json(result.error);
			}
			if(!req.value){ req.value = {}; }
			req.value['body'] = result.value;
			next();
		}
	},
	schemas: {
		registerSchema: joi.object().keys({
			email: joi.string().email().required(),
			password: joi.string().required(),
			name: joi.string().required(),
			country: joi.string().required(),
			city: joi.string().required(),
			companyType:joi.string().required()
		}),
		loginShema: joi.object().keys({
			email: joi.string().email().required(),
			password: joi.string().required(),
		})
	}
}
