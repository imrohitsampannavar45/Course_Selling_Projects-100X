// const express = require("express");
// const Router = express.Router;


const {Router} = require("express")


const userRouter = Router();

userRouter.post("/user/signup", function(req,res){
    res.json({
        message:"Signyp endpoint"
    })
    })
    
   userRouter.post("/user/login", function(req,res){
    res.json({
        message:"login endpoint"
    })
    })
    
    
userRouter.get("/user/purchases", function(req,res){
        res.json({
            message:"Purchase endpoint"
        })
    })

module.exports = {
    userRouter:userRouter
}