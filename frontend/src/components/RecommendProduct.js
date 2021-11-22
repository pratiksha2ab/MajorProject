import React from "react";
import { Card } from "react-bootstrap";
import "./Product.css";
import { Link } from "react-router-dom";

function RecommendProduct({ product }) {
  return (
    <Card className="merocard my-3 p-3 rounded">
      <Link style={{ textDecoration: "none" }} to={`/product/${product._id}`}>
        <Card.Img src={product.image} />

        <Card.Body>
          <Card.Title as="div">
            <strong>{product.name}</strong>
          </Card.Title>
          <Card.Text as="h3">Rs.{product.price}</Card.Text>
        </Card.Body>
      </Link>
    </Card>
  );
}

export default RecommendProduct;
