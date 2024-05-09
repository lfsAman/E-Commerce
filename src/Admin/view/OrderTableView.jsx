import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  confirmOrder,
  deleteOrder,
  deliveredOrder,
  getOrders,
  shipOrder,
} from "../../State/Admin/Order/Action";
import {
  Avatar,
  AvatarGroup,
  Button,
  Card,
  CardHeader,
  Menu,
  MenuItem,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

const OrderTableView = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const dispatch = useDispatch();

  const { adminOrder } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getOrders());
  }, [
    adminOrder.confirmed,
    adminOrder.shipped,
    adminOrder.delivered,
    adminOrder.canceled,
  ]);

  console.log("admin Order----", adminOrder);

  const handleShippedOrder = (orderId) => {
    dispatch(shipOrder(orderId));
    console.log("handle shipped order",orderId)
    handleClose();
  };

  const handleconfirmedOrder = (orderId) => {
    dispatch(confirmOrder(orderId));
    console.log("handle confirmed order",orderId);
    handleClose();
  };

  const handleDeliveredOrder = (orderId) => {
    dispatch(deliveredOrder(orderId));
    handleClose();
  };

  const handleDeleteOrder = (orderId) => {
    dispatch(deleteOrder(orderId));
    handleClose();
  };

  return (
    <div className="p-5">
      <Card className="mt-2 shadow-lg border border-gray-200">
        <CardHeader title="Recent Orders" />
        <TableContainer sx={{}} component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Image</TableCell>
                <TableCell align="left">Title</TableCell>
                <TableCell align="left">Id</TableCell>
                <TableCell align="left">Price</TableCell>
                <TableCell align="left">Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {adminOrder.orders ? (
                adminOrder.orders?.map((item) => (
                  <TableRow
                    key={item.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell>
                      <AvatarGroup sx={{ justifyContent: "start" }}>
                        {item.orderItems.map((orderItem) => (
                          <Avatar src={orderItem.product?.imageUrl}></Avatar>
                        ))}
                      </AvatarGroup>
                    </TableCell>
                    <TableCell align="left" scope="row">
                      {item.orderItems.map((orderItem) => (
                        <p>{orderItem.product?.title}</p>
                      ))}
                    </TableCell>
                    <TableCell align="left">{item?._id}</TableCell>
                    <TableCell align="left">{item?.totalPrice}</TableCell>
                    <TableCell align="left">
                      <span
                        className={`${
                          item.orderStatus == "CONFIRMED"
                            ? "bg-green-800"
                            : item.orderStatus == "SHIPPED"
                            ? "bg-blue-600"
                            : item.orderStatus == "PLACED"
                            ? "bg-[#02B290]"
                            : item.orderStatus == "PENDING"
                            ? "bg-yellow-600"
                            : "bg-red-600"
                        } px-5 py-3 text-[0.85rem] rounded rounded-xl text-white`}
                      >
                        {item.orderStatus}
                      </span>{" "}
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={5}>Loading...</TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Card>
    </div>
  );
};

export default OrderTableView;
