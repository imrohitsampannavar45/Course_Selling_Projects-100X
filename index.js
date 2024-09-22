const express = require("express");
const JWT_SECRET = "rohitsampannavar"


const app = express();
app.use(express.json());


app.post("/login", function(req,res)=>{

})

app.post("/signup", function(req,res)=>{

})

app.post("/purchase-course", function(req,res)=>{

})



app.listen(3000);
