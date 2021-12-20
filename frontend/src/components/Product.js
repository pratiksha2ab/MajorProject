import React from "react";
import { Card } from "react-bootstrap";
import Rating from "./Rating";
import "./Product.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { recommendProducts } from "../actions/productActions";

function Product({ product }) {
  const dispatch = useDispatch();

  const sendProductNameToRecommendAction = (e) => {
    // console.log(productname);
    console.log(product.name);
    dispatch(recommendProducts(product.name));
  };
  return (
    <Card className="merocard my-3 p-3 rounded">
      <Link
        style={{ textDecoration: "none" }}
        to={`/product/${product._id}`}
        onClick={
          // ((e) => setProductname(product.name),
          sendProductNameToRecommendAction
        }
      >
        <Card.Img src={product.image} />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>

          <Card.Text as="div">
            <div className="my-3">
              {/* {product.rating} S from {product.numReviews} Reviews */}
              <Rating
                value={product.rating}
                text={` ${product.numReviews} reviews`}
                color={"rgb(199 223 25)"}
              />
            </div>
          </Card.Text>
          <Card.Text as="h3">Rs.{product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default Product;
