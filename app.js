// var express = require("express");
// var bodyParser=require("body-parser");
// var MongoClient = require("mongodb").MongoClient;
 
// var app = express();

// var urlencodedParser = bodyParser.urlencoded({extended: false});
// var log="1";
// var pas="1";

// var mongoose = require("mongoose");
// var Schema = mongoose.Schema;
 
// mongoose.Promise = global.Promise;
 
// //mongoose.connect("mongodb://localhost:27017/usersdb");
// var mongoose = require('mongoose');
 
// mongoose.connect('mongodb://localhost:27017/usersdb', function (err) {
 
//    if (err) throw err;
 
//    console.log('Successfully connected');
 
// });
// var userScheme = new Schema({
//     login: {
//         type: String
//     },
//     password: {
//        type: String
//     }
// });
// var User = mongoose.model("User", userScheme);
// /*var user = new User({login:123,password:123});
//  user.save(function(err) {
//         if (err) throw err;
     
//         console.log('Book successfully saved.');
//     });*/
// // var mongoClient = require("mongodb").MongoClient;
 
// // var url = "mongodb://localhost:27017/usersdb";
// // mongoClient.connect(url, function(err, db){
     
// //     var collection = db.collection("users");
// //     var user = {name: "Tom", age: 23};
// //     collection.insertOne(user, function(err, result){
         
// //         if(err){ 
// //             return console.log(err);
// //         }
// //         console.log(result.ops);
// //         db.close();
// //     });
// // });

// // app.use(function(request, response, next){
     
// //     console.log("middleware".toUpperCase());
// //     next();
// // });
// // app.get("/", function(request, response){
     
// //     response.send("<h1>Главная страница</h1>");
// // });
// // app.get("/hi", function(request, response){
     
// //     response.send("<h1>Hi!</h1>");
// // });
// // app.get("/bye", function(request, response){
     
// //     response.send("<h1>Bye!</h1>");
// // });
// // app.get("/one", function(request, response){
// //     console.log("Hello");
// //     response.send("Hello!");
// // });
// app.post("/register",urlencodedParser,async(request,response)=>{
// 	//const {login, password} = request.body;
// 	/*User.findOne({login}, function(err, doc){
//     mongoose.disconnect();     
//     if(err){  console.log(err); return response.status(403).json({error: 'Email is taken'});}
//     response.send(doc);
//     console.log(doc);});*/
// //     var us = User.find({name: "Bo"});
    
// //     response.send(us);

// // });
// 	 var {login, password} = request.body;
// 	 var foundUser = await User.findOne({login});
//       if(foundUser){
//         console.log("found");
//         return response.status(403).json({error: 'login is taken'});
//       }
//       else{
//       var newuser=new User({login,password});
//       await newuser.save();
//       console.log("add");
//       response.send("add");
// 	  }
// 	  });




// /*      var user=new User({login, password});
//       user.save();
//     console.log("Сохранен объект user", user);
// 	response.send(request.body);};);*/



// 	//console.log(request.body);
// app.get("/users",function(request,response){
// 	User.find({}, function(err, docs){
//     mongoose.disconnect();     
//     if(err) return console.log(err);     
//     console.log(docs);
//     response.send(docs);});
//         });

// // app.get("/products/:productId", function (request, response) {
// //   response.send("productId: " + request.params["productId"])
// // });
// app.listen(3000);
// // if(request.body.login!=log || request.body.password!=pas){
// // 		console.log("fail");
// // 		return response.sendStatus(400);
// // 	} 			
	
// // 	user.save((function(err){
// //     mongoose.disconnect();
     
// //     if(err) return console.log(err);
     
// //     console.log("Сохранен объект user", user);
// // });