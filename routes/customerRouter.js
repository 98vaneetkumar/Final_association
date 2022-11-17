const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")

//add Department
router.post("/addcustomer",async(req,res)=>{
let user= await Controller.customerController.AddCustomer(req.body)
res.json(user)
})

//Get Department BY HasMany Method
router.get("/getAll",async(req,res)=>{
    let user= await Controller.customerController.get(req.body)
    res.json(user)
});



module.exports = router;