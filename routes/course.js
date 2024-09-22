function createcourseRoutes(app){
    app.post("/course/purchase", function(req,res){
        res.json({
            message:"Purchase endpoint"
        })
    })
    
    app.get("/courses", function(req,res){
    res.json({
        message:"Courses Endpoint"
    })
    })


}

module.exports={
    createcourseRoutes:createcourseRoutes
}