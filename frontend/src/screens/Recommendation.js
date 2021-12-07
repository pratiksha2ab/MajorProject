import React from "react";
import { useSelector } from "react-redux";

import { Row, Col } from "react-bootstrap";
import RecommendPearson from "../components/RecommendProduct";
import Loader from "../components/Loader";
import Message from "../components/Message";

function Recommendation() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const productPearsonRecommendation = useSelector(
    (state) => state.productPearsonRecommendation
  );
  const { error, loading, products } = productPearsonRecommendation;

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <div>
      <h1>Recommendation</h1>
      {userInfo ? (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <RecommendPearson product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <Message variant="info">
          Please review some products to get a recommendation
        </Message>
      )}
    </div>
  );
}

export default Recommendation;
