import mykey from "./KhaltiKey";
import axios from "axios";

let config = {
  // replace this key with yours
  publicKey: mykey.publicTestKey,
  productIdentity: "1234567890",
  productName: "Babaaldeal",
  productUrl: "http://localhost:3000/",
  eventHandler: {
    onSuccess(payload) {
      // hit merchant api for initiating verfication
      console.log(payload);
      let data = {
        token: payload.token,
        amount: payload.amount,
      };

      let config = {
        headers: { Authorization: "mykey.secretKey" },
      };

      axios
        .post("https://khalti.com/api/v2/payment/verify/", data, config)
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    // onError handler is optional
    onError(error) {
      // handle errors
      console.log(error);
    },
    onClose() {
      console.log("widget is closing");
    },
  },
  paymentPreference: [
    "KHALTI",
    "EBANKING",
    "MOBILE_BANKING",
    "CONNECT_IPS",
    "SCT",
  ],
};

export default config;
