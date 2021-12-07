import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { recommendPearsonProducts } from "../actions/productActions";
import { useDispatch } from "react-redux";

function RecommendPearson({ product }) {
  const dispatch = useDispatch();

  //   const sendProductNameToRecommendAction2 = (e) => {
  //     dispatch(recommendProducts2(product.name));
  //   };

  return (
    <Card className=" my-2 p-3 ">
      <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
        <Card.Img src={product.image} />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="div">
            <div className="my-3">
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

export default RecommendPearson;
