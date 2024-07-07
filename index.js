const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
require('dotenv').config();
const app=express();
app.use(bodyParser.urlencoded({ extended:  true }));
app.use(bodyParser.json());
app.use(cors(process.env.FONTEND_URL));
const  port =process.env.PORT||3001;
const {SaveReferal}=require("./controllers/saving_referal");

app.post("/add-referal",SaveReferal);


app.listen(port,()=>{
    console.log("server is running on the port",port);
});

