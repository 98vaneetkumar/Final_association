const express= require("express")
const router= express.Router()
const Controller= require("../controller/index")

//add Department
router.post("/addTocart",async(req,res)=>{
let user= await Controller.customer_productController.AddToCartProduct(req.body)
res.json(user)
})

//Get Department BY HasMany Method
router.get("/getAll",async(req,res)=>{
    let user= await Controller.customer_productController.get(req.body)
    res.json(user)
});

router.get("/getAlls",async(req,res)=>{
    let user= await Controller.customer_productController.gets(req.body)
    res.json(user)
});


module.exports = router;