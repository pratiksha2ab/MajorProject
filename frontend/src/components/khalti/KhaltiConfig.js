// import mykey from "./KhaltiKey";
// import axios from "axios";
// import KhaltiCheckout from "khalti-checkout-web";

// function verifyPayment(payload) {
//   axios.post(`/api/verifyPayment/`, payload);
// }

// let config = {
//   // replace this key with yours

//   publicKey: mykey.publicTestKey,
//   // headers: { Authorization: "mykey.secretKey" },
//   productIdentity: "1234567890",
//   productName: "Babaaldeal",
//   productUrl: "http://localhost:3000/",
//   eventHandler: {
//     onSuccess(payload) {
//       // hit merchant api for initiating verfication
//       console.log(payload);
//       verifyPayment(payload);
//     },
//     // onError handler is optional
//     onError(error) {
//       // handle errors
//       console.log(error);
//     },
//     onClose() {
//       console.log("widget is closing");
//     },
//   },
//   paymentPreference: [
//     "KHALTI",
//     "EBANKING",
//     "MOBILE_BANKING",
//     "CONNECT_IPS",
//     "SCT",
//   ],
// };
// let checkout = new KhaltiCheckout(config);
// let btn = document.getElementById("payment-button");
// btn.onclick = function () {
//   // minimum transaction amount must be 10, i.e 1000 in paisa.
//   checkout.show({ amount: 1000 });
// };

// export default config;
