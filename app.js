require("dotenv").config();
const express= require("express")
const app =express()
const bodyParser = require("body-parser");

const swaggerUI = require("swagger-ui-express");
const swaggerJsDocs = require("./swagger.json");

app.use("/swagger-docs", swaggerUI.serve, swaggerUI.setup(swaggerJsDocs));

//use for use the req.body for take a data from frontend
app.use(bodyParser.json());
//data comes from frontend in the form of form in url
app.use(bodyParser.urlencoded({ extended: false }));


require("./config/connectionDB").connect()
require("./config/connectionDB").syn()
const route= require("./routes/userRouter.js");
const department= require("./routes/departmentRouter");
const education=require("./routes/EducationRouter");
const customer=require("./routes/customerRouter");
const product=require("./routes/productRouter");
const customer_product=require("./routes/customer_productRouter")


require("./models/index")
app.get("/",(req,res)=>{
    res.send("Home page")
})
app.use("/user",route)
app.use("/department",department)
app.use("/education",education)
app.use("/customer",customer)
app.use("/product",product)
app.use("/customer_product",customer_product)
app.listen(process.env.PORT,()=>{
    console.log(`http://localhost:${process.env.PORT}`)
})