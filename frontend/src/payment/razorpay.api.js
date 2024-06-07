import axios from 'axios';

 export const initializeRazorpay = (order, url) => {
 const options = {
 key: "rzp_test_sFsckw9EkTimVg",
 amount: order.amount,
 currency: order.currency,
 name: "Tomato. | IN",
 description: "order payment",
 order_id: order.id,
 handler: function (response) {
 axios.post(`${url}/api/payment/verify`, response)
 .then(() => {
 window.location.href = `http://localhost:5174`;
 })
 .catch(() => {
 window.location.href = `http://localhost:5174`;
 });
 },
 prefill: {
 name: "Tomato. | IN",
 email: "support@complain.com",
 contact: "1800 123 666"
 },
 theme: {
 color: "#FF4C24"
 }
 };
 const razor = new window.Razorpay(options);
 return razor.open();
 };
