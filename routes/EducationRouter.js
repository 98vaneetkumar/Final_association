const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")

//add Department
router.post("/addedcation",async(req,res)=>{
let user= await Controller.educationController.AddEducation(req.body)
res.json(user)
})

//Get Department BY HasMany Method
router.get("/geteducation",async(req,res)=>{
    let user= await Controller.educationController.getByHasMany(req.body)
    res.json(user)
});



module.exports = router;