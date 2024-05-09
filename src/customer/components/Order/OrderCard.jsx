import React from "react";
import { Grid } from "@mui/material";
import AdjustIcon from '@mui/icons-material/Adjust';
import { useNavigate } from "react-router-dom";
const OrderCard = () => {
  const navigate=useNavigate()
  return (
    <div onClick={()=>navigate('/account/order/5')} className="mt-10 mr-7 border border-gray-300 rounded-lg p-5 shadow-md hover:shadow-gray-500">
      <Grid container spacing={2} sx={{ justifyContent: "space-between",margin:5}}>
        <Grid item xs={6}>
          <div className=" flex cursor-pointer">
            <img
              className="w-[6rem] h-[6rem] object-cover object-top "
              src="https://prod-img.thesouledstore.com/public/theSoul/uploads/catalog/product/1687842433_3385347.jpg?format=webp&w=480&dpr=2.0"
            />
            <div className="ml-5 space-y-2">
              <p className="">Tom T-shirt</p>
              <p className="opacity-50 text-xs font-semibold">Size:M</p>
              <p className="opacity-50 text-xs font-semibold">Color:Green</p>
            </div>
          </div>
        </Grid>
        <Grid>
            <Grid item xs={2} sx={{margin:3}} >
                <p>₹1999</p>
            </Grid>
        </Grid>
        <Grid item xs={4}  sx={{margin:1}}>
            { true && <div>
                <p>
                <AdjustIcon sx={{width:"20px",height:"20px"}} className="text-green-600 me-2 text-sm" />
                <span>
                     Delivered On March 03
                </span>
            </p>
            <p className="text-xs">Your Item has been delivered</p>
            </div>
            }
            {false && <p>
                <span>
                    Expected Delivery on march 03
                </span>
            </p>}
        </Grid>
      </Grid>
    </div>
  );
};

export default OrderCard;
