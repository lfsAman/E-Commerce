const cartService = require("./cart.service.js");
const Address = require("../models/address.model.js");
const OrderItem = require("../models/OrderItems.js");
const Order = require("../models/order.model.js");

async function createOrder(user, shippAddress) {
  let address;
  if (shippAddress._id) {
    let existedAddress = await Address.findById(shippAddress._id);
    
    address = existedAddress;
  } else {
    address = new Address(shippAddress);
    address.user = user;
    
    console.log(address)
    try {
      await address.save();
      // Handle success
    } catch (error) {
      // Handle error
      console.error("Error saving address:", error);
    }

    user.addresses .push(address)
    await user.save();
  }

  const cart = await cartService.findUserCart(user._id);
  const orderItems = [];

  for (const item of cart.cartItems) {
    const orderItem = new OrderItem({
      price: item.price,
      product: item.product,
      quantity: item.quantity,
      size: item.size,
      userId: item.userId,
      discountedPrice: item.discountedPrice,
    });


    const createdOrderItem = await orderItem.save();
    orderItems.push(createdOrderItem);
  }

  const createdOrder = new Order({
    user,
    orderItems,
    totalPrice: cart.totalPrice,
    totalDiscountedPrice: cart.totalDiscountedPrice,
    discounte: cart.discounte,
    totalItem: cart.totalItem,
    shippingAddress: address,
    orderDate: new Date(),
    orderStatus: "PENDING", // Assuming OrderStatus is a string enum or a valid string value
    "paymentDetails.status": "PENDING", // Assuming PaymentStatus is nested under 'paymentDetails'
    createdAt: new Date(),
  });

  const savedOrder = await createdOrder.save();

  // for (const item of orderItems) {
  //   item.order = savedOrder;
  //   await item.save();
  // }

  return savedOrder;
}

async function palceOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "PLACED";
  order.paymentDetails.status = "COMPLETED";

  return await order.save();
}

async function confirmedOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CONFIRMED";

  return await order.save();
}

async function shippOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "SHIPPED";

  return await order.save();
}

async function deliverOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "DELIVERED";

  return await order.save();
}

async function cancelledOrder(orderId) {
  const order = await findOrderById(orderId);

  order.orderStatus = "CANCELLED";

  return await order.save();
}

async function findOrderById(orderId) {
  const order = await Order.findById(orderId)
    .populate("user")
    .populate({ path: "orderItems", populate: { path: "product" } })
    .populate("shippingAddress");
    
    console.log("buir bur bunr bubr bunbr burb bu5brubr")

  return order;
}

async function userOrderHistory(userId) {
  try {
    const orders = await Order.find({ user: userId, orderStatus: "PLACED" })
      .populate({ path: "orderItems", populate: { path: "product" } })
      .lean();

    return orders;
  } catch (error) {
    throw new Error(error.message);
  }
}

async function getAllOrders() {
  return await Order.find()
    .populate({ path: "orderItems", populate: { path: "product" } })
    .lean();
}
async function deleteOrder(orderId){
    const order=await findOrderById(orderId);
    await Order.findByIdAndDelete(order._id)
}

module.exports = {
  createOrder,
  palceOrder,
  shippOrder,
  deliverOrder,
  cancelledOrder,
  userOrderHistory,
  getAllOrders,
  deleteOrder,
  confirmedOrder,
  findOrderById
};
