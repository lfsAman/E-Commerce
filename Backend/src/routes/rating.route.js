const express=require("express");
const router=express.Router();

const ratingController=require("../controller/rating.controller.js");
const {authenticate}=require("../middleware/authenticate.js")

router.post("/product/:productId",authenticate,ratingController.getAllRating);
router.post("/create",authenticate,ratingController.createRating);


module.exports=router;