
function createuserRoutes(app){

app.post("/user/signup", function(req,res){
    res.json({
        message:"Signyp endpoint"
    })
    })
    
    app.post("/user/login", function(req,res){
    res.json({
        message:"login endpoint"
    })
    })
    
    
    app.get("/user/purchases", function(req,res){
        res.json({
            message:"Purchase endpoint"
        })
    })
}
module.exports = {
    createuserRoutes:createuserRoutes
}