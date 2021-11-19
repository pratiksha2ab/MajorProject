import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import FormContainer from "../components/FormContainer";
import CheckoutSteps from "../components/CheckoutSteps";
import { useDispatch, useSelector } from "react-redux";
import { saveShippingAddress } from "../actions/cartActions";

function ShippingScreen({ history }) {
  const cart = useSelector((state) => state.cart);
  const { shippingAddress } = cart;

  const dispatch = useDispatch();

  const [address, setAddress] = useState(shippingAddress.address);
  const [specific, setSpecific] = useState(shippingAddress.specific);
  const [city, setCity] = useState(shippingAddress.city);
  const [country, setCountry] = useState(shippingAddress.country);

  const submithandler = (e) => {
    e.preventDefault();
    dispatch(saveShippingAddress({ address, specific, city, country }));
    history.push("/payment");
  };
  return (
    <FormContainer>
      <CheckoutSteps step1 step2 />
      <h1>Shipping</h1>
      <Form onSubmit={submithandler}>
        <Form.Group controlId="address">
          <Form.Label>Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter your address"
            value={address ? address : ""}
            onChange={(e) => setAddress(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="specific">
          <Form.Label>More Details</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter specific sites near you (eg:school,temple)"
            value={specific ? specific : ""}
            onChange={(e) => setSpecific(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="city">
          <Form.Label>City</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter city"
            value={city ? city : ""}
            onChange={(e) => setCity(e.target.value)}
          ></Form.Control>
        </Form.Group>

        <Form.Group controlId="country">
          <Form.Label>District</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Enter District"
            value={country ? country : ""}
            onChange={(e) => setCountry(e.target.value)}
          ></Form.Control>
        </Form.Group>
        <Button style={{ margin: "15px" }} type="submit" variant="primary">
          Continue
        </Button>
      </Form>
    </FormContainer>
  );
}

export default ShippingScreen;
