// import express 
const express = require('express');
// Create an express app object
const app = express();
// mongoose is imported
const mongoose = require('mongoose');
// connect the mongoose to the database
mongoose.connect('mongodb://localhost/mydb',{ useNewUrlParser: true });
const multer = require('multer');
var uploaded = 'http://localhost:4500/profileImages/';
var imageUrl = '';
// multer storage configuration
const storge = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,'profileImages/')
    },
    filename:function (req,file,cb){
        let fname = Date.now() + Path.extname(file.originalname);
        imageUrl = uploaded + fname;
        cb(null,fname);
    }
});
// multer object is created to manage file uploads. 
var upload = multer({storage:storage});

// Define a Model for each collection of the database.
const User = mongoose.model('users',{
    name: String,
    mailId: String,
    password: String
});
// cors middleware is imported
const cors = require('cors');
// cors middleware is registered
app.use(cors());
// import body-parser
const bodyparser = require('body-parser');
// registering the body-parser middleware for processing json payload
app.use(bodyparser.json());

app.get('/users',(req,res)=>{
    // use Model find() method to fetch users from the db
    User.find().then(result => {
        res.json(result);
    });
});
app.get('/users/:email',(req,res)=>{
    let email = req.params['email'];
    // use Model findOnd() method to fetch the user from the db
    User.findOne({mailId: email}).then(result => {
        res.json(result);
    });
});

app.post('/users/login',(req,res)=>{
    criteria = req.body;
    console.log('criteria is: ',criteria);
    User.findOne(criteria).then((result)=>{
        res.json(result);
    });
});


app.post('/users',(req,res)=>{
    // A Model object is created.
    let user = new User(req.body);
    console.log('saving ',req.body);
    // save method of the object is used to save.
    user.save().then(result => {
        res.json({status: 'successfully saved.'});

    });
    
   
});

app.put('/users' , (req,res)=>{

    console.log('updating',req.body);
    const user =  new User(req.body);
    User.updateOne({mailId:user.mailId} ,{$set :{name:user.name,password:user.password}}).then(()=>{
        res.json({"status":"successfully updated."});
    });
 });
app.put('/users',(req,res)=>{
    
   // update method of the model is used to update.
   User.update({_id: req.body._id},{$set: {name: req.body.name, mailId: req.body.mailId, password: req.body.password}}).then(result => {
    res.json({status: 'successfully updated.'});
});
});

app.delete('/users/:id',(req,res)=>{
    let id = req.params['id'];
    // deleteOne method of the model is used
    User.deleteOne({_id: id}).then(result=>{
        res.json({status: 'successfully deleted'});
    });
    
});

// start the server on a port.
app.listen(4500,() => {
    console.log('Server is ready on port 4500...');
});