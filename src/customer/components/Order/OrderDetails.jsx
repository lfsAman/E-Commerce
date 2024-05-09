import React from "react";
import AddressCard from "../AddressCard/AddressCard";
import OrderTracker from "./OrderTracker";
import { Button, Grid,Box } from "@mui/material";
import { deepPurple } from "@mui/material/colors";
import StarBorderIcon from '@mui/icons-material/StarBorder';

const OrderDetails = () => {
  return (
    <div className="px-5 lg:px-20">
      <div className="mt-7 border border-gray-200 rounded-md shadow-xl px-5 pb-2">
        <h1 className=" font-bold text-xl py-7">Delivery Address</h1>
        <AddressCard />
      </div>
      <div className="flex px-20 mt-3 border border-gray-200 shadow-xl rounded-md py-10 bg-white">
        <OrderTracker activeStep={3} />
        <Button
          sx={{
            color: "white",
            bgcolor: "gray",
            margin: "10",
            "&:hover": {
              bgcolor: "red",
            },
          }}
        >
          Cancel Order
        </Button>
      </div>
      {[1,1,1,1].map((item)=>
      <Grid className=" mt-5 space-x-5 border  rounded-md border-gray-200 shadow-xl hover:shadow-2xl" container>
      <Grid
         item
         container
         className="shadow-xl rounded-md p-5 border "
         sx={{ alignItems: "center", justifyContent: "space-between" }}
       >
         <Grid item xs={6}>
           <div className="flex items-center space-x-2">
             <img
               className="w-[7rem] h-[7rem] object-cover object-top "
               src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=480&dpr=2.0"
               alt=""
             />
             <div className="space-y-1 ml-5">
               <p className="font-semibold">Tom T-shirt</p>
               <p className="space-x-5 opacity-50 text-xs font-semibold">
                 <span>Color:Blue</span>
                 <span>Size:M</span>
               </p>
               <p>Seller:Linaria</p>
               <p>₹199</p>
             </div>
           </div>
         </Grid>
         <Grid item  >
               <Box sx={{color:deepPurple[500]}}>
                   <StarBorderIcon  sx={{fontSize:'2.5rem'}} className="px-2" />
                   <span>Rate & Review Product</span>
               </Box>
         </Grid>
       </Grid>
     </Grid>)} 
      
    </div>
  );
};

export default OrderDetails;
