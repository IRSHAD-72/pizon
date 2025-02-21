import express from "express";
import mongoose, { Schema, SchemaType } from "mongoose";
import bodyparser from "bodyparser";


  
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true
}));

mongoose.connect('',{useNewURLparser:true,useunifiedToplogy:true});
const db=mongoose.Connection;
db.on('error',console.error.bind(console,'connection error:'));
db.once('open',function(){
   console.log('connencted to mongodb');
});
const app = express()


const dataSchema = new mongoose ({
    Name:{
        require:true,
        type:String
     },
     cellphone1:{
        require:true,
        type:Number
     },
     cellphone2:{
        require:true,
        type:Number
     },
     homenumber:{
        require:true,
        type:Number
     },
     address:{
        require:true,
        type:String
     },
     city:{
        require:true,
        type:String
     },
     state:{
        require:true,
        type:string
     },
     emailid:{
      require:true,
      type:string
 },
 jobtitle:{
   require:true,
   type:string
 },
 paymenttmethed:{
   require:true,
   type:String
 },
 dateofbrith:{
   require:true,
   type:Date
 },
 dateofjoining:{
   require:true,
   type:Date
 },
 langauges:{
   require:true,
   type:String
 },
 ofpaidvaccationdaysallowed:{
require:true,
type:Number
 },
 ofpaidsickvaccationallowed:{
   require:true,
   type:Number
 },
 employestutas:{
   require:true,
   type:String
 }
});
const User=mongoose.model('user',
userschema);
app.post('/submit-form',(req,res)=>{
   const newUser=new User({
      Name,cellphone1,cellphone2,homenumber,
      address,city,state,emailid,jobtitle,
      paymenttmethed,dateofbrith,dateofjoining,
      langauges,ofpaidsickvaccationallowed,ofpaidvaccationdaysallowed

   });
});
newUser.save()
.then(user=>{
res.status(201).json({massage:'user added successfully!',user});
})
.catch(error=>{
   res.status(500).json({massage:'Error usersavingdata',error});
})
app.use(express.json())
app.listen(3000, () => {
console.log('server is started at ${3000}')
});