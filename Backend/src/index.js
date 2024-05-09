const express=require("express");
const cors=require("cors");
const authRouters=require('./routes/auth.route.js');
const userRouters=require('./routes/user.route.js');
const productRouter=require("./routes/product.route.js");
const adminProductRouter=require("./routes/adminProduct.route.js");
const adminOrderRouter=require("./routes/adminOrder.route.js")
const cartRouter=require("./routes/cartController.js");
const cartItemRouter=require("./routes/cartItem.routes.js");
const orderRouter=require("./routes/order.route.js");
const ratingRouter=require("./routes/rating.route.js");
const reviewRouter=require("./routes/review.route.js");

const app=express();

app.use(express.json());
app.use(cors());


app.get('/',(req,res)=>{
    return res.status(200).send({
        message:"Welcome",
        staus:true
    })
})

app.use("/auth",authRouters)
app.use("/api/users",userRouters)
app.use("/api/products",productRouter)
app.use("/api/admin/products",adminProductRouter)
app.use("/api/cart",cartRouter)
app.use("/api/cart_items",cartItemRouter)
app.use("/api/orders",orderRouter)
app.use("/api/reviews",reviewRouter)
app.use("/api/ratings",ratingRouter)
app.use("/api/admin/orders",adminOrderRouter)
module.exports=app;