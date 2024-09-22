const express = require("express");
const JWT_SECRET = "rohitsampannavar"
const {createuserRoutes} = require('./routes/user');
const {createcouseRoutes} = require('./routes/course');



const app = express();
app.use(express.json());
createuserRoutes(app);
createcouseRoutes(app);





app.listen(3000);
