import { CssBaseline, Drawer, ListItemText, useTheme } from "@mui/material";
import { Box, List, ListItem, ListItemButton, ListItemIcon, Toolbar, useMediaQuery } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import EmailIcon from '@mui/icons-material/Email';
import ArchiveIcon from '@mui/icons-material/Archive';
import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import AddIcon from '@mui/icons-material/Add';
import  Dashboard from "../Admin/components/Dashboard.jsx" ;
import CreateProductForm from "./components/CreateProductForm.jsx";
import ProductsTable from "./components/ProductsTable.jsx";
import OrderTable from "./components/OrderTable.jsx";
import CustomersTable from "../Admin/components/CustomersTable.jsx";
import { useDispatch, useSelector } from "react-redux";
import { getUser, logout } from "../State/Auth/Action.js";

const menu = [
  { name: "Dashboard", path: "/admin",icon:<DashboardCustomizeIcon/> },
  { name: "Products", path: "/admin/products",icon:<ProductionQuantityLimitsIcon/> },
  { name: "Customers", path: "/admin/customers",icon:<AccountCircleIcon/> },
  { name: "Orders", path: "/admin/orders",icon:<ViewModuleIcon/> },
  { name: "AddProducts", path: "/admin/product/create",icon:<AddIcon/> },
//   { name: "", path: "" },
];
const Admin = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
  const [sideBarVisible, setSideBarVisible] = useState(false);


  const navigate=useNavigate();
  const dispatch=useDispatch()
  const {auth}=useSelector(store=>store);

  const handleLogout = () => {
   
    dispatch(logout());
    navigate("/")

  };

  const jwt = localStorage.getItem("jwt");

  useEffect(() => {
    if (jwt) {
      dispatch(getUser(jwt));
    }
  }, [jwt]);
  const drawer = (
    <Box
      sx={{
        overflow: "auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height:"100vh"
      }}
    >
<>
{/* {isLargeScreen && <Toolbar/> } */}
        <List>
            {menu.map((item,index)=><ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                    <ListItemIcon>
                        {item.icon}
                    </ListItemIcon>
                    <ListItemText>
                        {item.name}
                    </ListItemText>
                </ListItemButton>
            </ListItem> )}
        </List>
</>
        

        <List>
            <ListItem disablePadding >
                <ListItemButton>
                    <ListItemIcon>
                        <AccountCircleIcon/>

                    </ListItemIcon>
                    <ListItemText>
                        Accounts
                    </ListItemText>
                </ListItemButton>
            </ListItem> 
        </List>
    </Box>
  );


        return (
        
          <div>

            <div className="flex h-full ">
              <CssBaseline/>
              <div className="w-[15%] border border-r-gray-300 h-full fixed top-0">
                {drawer}
              </div>

              <div className="w-[85%] h-full ml-[15%]  " >
                <Routes>
                    <Route path="/" element={<Dashboard/>}></Route>
                    <Route path="/product/create" element={<CreateProductForm/>}></Route>
                    <Route path="/products" element={<ProductsTable/>}></Route>
                    <Route path="/orders" element={<OrderTable/>}></Route>
                    <Route path="/customers" element={<CustomersTable/>}></Route>
                </Routes>

                </div>

            </div>
          </div>
        )

};


export default Admin;
