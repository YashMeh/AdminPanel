const express = require('express');
const app = express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const port=process.env.PORT || 8080;
const dotenv=require("dotenv");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
dotenv.config();

//Database URI configuration 
/*
Use the given URI from the environment file if given,
or else use the uri for docker
*/
const URI=process.env.URI || "mongodb://mongo:27017/senzAdmin";
mongoose.connect(URI,{useNewUrlParser:true}).then((e)=>{
    console.log("Database Connected");
}).catch((err)=>{
    throw err;
})

//Configuring the express instance
// enhance your app security with Helmet
app.use(helmet());

// use bodyParser to parse application/json content-type
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

//Requiring Routes
const userRoutes=require("./routes/userRoutes")
const projectRoutes=require("./routes/projectRoutes")
const deviceRoutes=require("./routes/deviceRoutes")

//Using Routes
app.use("/api",userRoutes)
app.use("/project",projectRoutes)
app.use("/device",deviceRoutes)

//Starting the server
app.listen(port,(err)=>{
    if(err)
    throw err;
    console.log("Server running at port "+port);
})
