var express = require("express");
var bodyParser=require("body-parser");
const User = require('../models/user');
const IoT = require('../models/iot');
const JWT = require('jsonwebtoken');
var urlencodedParser = bodyParser.urlencoded({extended: false});

signToken = function(user){
    return JWT.sign({
        iss: "liza",
        sub: user.id,
        iat: new Date().getTime(),
        exp: new Date().setDate(new Date().getDate()+1)
    }, 'yoursecretstring');
}
    

module.exports = {
    signUp: async(request,response,next)=>{
        var {id,email, password,name,country,city,companyType} = request.body;
        var foundUser = await User.findOne({email});
        if(foundUser){
            console.log("found");
            return response.status(403).json({error: 'email is taken'});
        }
        else{
            var newuser=new User({id,email,password,name,country,city,companyType});
            await newuser.save();
            console.log("add");
            response.status(200).send();
        }
    },

    signIn: async(request,response,next)=>{
        const token  = signToken(request.user);
        response.status(200).json({token});
        // try{
        //     const {email, password} = request.body;
        //     const foundUser = await User.findOne({email});
        //     if(foundUser){
        //         console.log("found",foundUser.email);
        //     if(foundUser.password==password)
        //         return response.status(200).json({good: 'token'});
        //     }
        //     return response.status(403).json({error: 'wrong password'});
        // }    
        // catch(err){
        // next(err);
        // }
        //return response.send("sdf");
    },
    addIotToUser:  async (request,response,next)=> {
          const iotId =  request.body.id;
          console.log(iotId);
          const iotdevice =  await IoT.findById(iotId);
          console.log('iotdevice', iotdevice.location);
          const {user} = request.params;
          const userA =   await User.findById(user);
          console.log('user', user);
          console.log(iotdevice._id);
          await userA.iot.push(iotdevice._id);
          console.log('user');;
          await userA.save();
          response.status(200);
    },
    getUserIots: async(request,response,next)=>{
          const {user} = request.params;
          const userA =   await User.findById(user);
          console.log('user', user.iot);
          IoT.find({_id:userA.iot}, function(err, docs){   
          if(err) return console.log(err);     
          console.log(docs);
          response.send(docs);});
    },
    getAllUsers:async(request,response,next)=>{
        User.find({}, function(err, docs){
        if(err) return console.log(err);     
        console.log(docs);
        response.send(200).json(docs);
        });
    },
    updateUser: async(request,response,next)=>{
        const {user} = request.params;
        var {name,country,city,companyType} = request.body;
        var foundUser = await User.findOne({id:user});
        await User.findOneAndUpdate({id:user},
        {$set:{name:request.body.name,
              country:request.body.country,
              city:request.body.city,
              companyType:request.body.companyType}}, 
       {upsert: true},
        function(err, result) {
        if (err) response.send(400);     
        console.log(result);
        response.status(200).json();
        });
    }
};


