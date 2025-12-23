const express = require('express');
const app = express();


const myFirstMiddelware=(req,res,next)=>{
    console.log('this first middleware will run on every request')

    next();
};

app.use(myFirstMiddelware);

app.get('/',(req,res)=>{
    res.send("Home page")
});

app.get('/',(req,res)=>{
    res.send("About page")
});

app.listen(3000,()=>{
    console.log("Server is now running on the port 3000");
});