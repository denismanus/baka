var express = require("express");
var bodyParser=require("body-parser");
const User = require('../models/user');
const IoT = require('../models/iot');
var urlencodedParser = bodyParser.urlencoded({extended: false});

module.exports = {
    addDevice: async(request,response,next)=>{
        console.log("message");
    	var {id,values,location} = request.body;
        console.log(id+" "+values+" "+location);
    	var datenow=Date.now();
        //var newiot=new IoT({id,values,datenow,location});
        var newIot = new IoT({
            id:request.body.id,             
            values:request.body.values,
            date:datenow,
            location:request.body.location
        });
        console.log(newIot);
        await newIot.save();
        console.log("addy");
        response.status(200).json("addi");	  
    },
    getAllIots: async(request,response,next)=>{
        console.log("ttezt");
        try{
          //  console.log("tezt");
        IoT.find({}, function(err, docs){   
        if(err) return console.log(err);     
        console.log(docs);
        response.send(docs);});}
        catch(err){
            next();
        }
    },
    removeIot: async(request,response,next)=>{
        const {iot} = request.params;
        // const iotA =   await IoT.findOne({id:iot});
        // console.log('user',iotA.location);
        // var findIot= await IoT.findOne({id:iot});
        // console.log({iot});
        // var finduser= await User.find({iot:findIot._id});
        // await finduser.iot.splice
        IoT.remove({id:iot}, function(err, result){
        mongoose.disconnect();         
        if(err) return console.log(err);         
        console.log(result);
        });
        response.status(200).json("removed");
    }
};