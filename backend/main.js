const express = require('express');
const app = express();
const mongoose=require("mongoose");
const bodyParser=require("body-parser");
const port=process.env.PORT || 3000;
const dotenv=require("dotenv");
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
dotenv.config();

//Database configuration
const URI=process.env.URI || "mongodb://localhost/senzAdmin";
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

// enable all CORS requests
app.use(cors());

// log HTTP requests
app.use(morgan('combined'));

//Requiring Routes
const userRoutes=require("./routes/userRoutes")
const projectRoutes=require("./routes/projectRoutes")

//Using Routes
app.use("/api",userRoutes)
app.use("/project",projectRoutes)

//Starting the server
app.listen(port,(err)=>{
    if(err)
    throw err;
    console.log("Server running at port "+port);
})