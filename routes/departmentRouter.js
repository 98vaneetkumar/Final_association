const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")

//add Department
router.post("/adddepartment",async(req,res)=>{
let user= await Controller.departmentController.AddDepartment(req.body)
res.json(user)
})

//Get Department BY HasOne Method
router.get("/getdepartment",async(req,res)=>{
    let user= await Controller.departmentController.getByHasOne(req.body)
    res.json(user)
});

 //Get Department BY BelongsTo Method
router.get("/getdepartmentByBelongsTo",async(req,res)=>{
    let user= await Controller.departmentController.getByBelongsTo(req.body)
    res.json(user)
});

module.exports = router;