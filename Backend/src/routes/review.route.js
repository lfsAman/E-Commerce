const express=require("express");
const router=express.Router();

const reviewController=require("../controller/review.controller.js");
const {authenticate}=require("../middleware/authenticate.js")

router.post("/product/:productId",authenticate,reviewController.getAllReview);
router.post("/create",authenticate,reviewController.createReview);


module.exports=router;