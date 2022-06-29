import { useSelector } from "react-redux";
import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import { Link } from "react-router-dom";
import Rating from "./Rating";
import { recommendProducts2 } from "../actions/productActions";
import { useDispatch } from "react-redux";

function RecommendProduct({ product, namescore }) {
  const dispatch = useDispatch();

  const sendProductNameToRecommendAction2 = (e) => {
    dispatch(recommendProducts2(product.name));
  };

  return (
    <>
      <Card className=" my-2 p-3 " onClick={sendProductNameToRecommendAction2}>
        <Link style={{ textDecoration: "none", height:"400px" }} to={`/product/${product._id}`}>
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

            {namescore}
          </Card.Body>
        </Link>
      </Card>
    </>
  );
}

export default RecommendProduct;
