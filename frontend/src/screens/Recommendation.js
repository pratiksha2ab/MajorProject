import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import RecommendProduct from "../components/RecommendProduct";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { recommendProducts } from "../actions/productActions";

function Recommendation() {
  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;
  const dispatch = useDispatch();

  const productRecommendation = useSelector(
    (state) => state.productRecommendation
  );
  const { error, loading, products } = productRecommendation;

  useEffect(() => {
    dispatch(recommendProducts());
  }, [dispatch]);
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
              <RecommendProduct product={product} />
            </Col>
          ))}
        </Row>
      ) : (
        <Message variant="info">
          Please <Link to="/login">login</Link> to get a recommendation
        </Message>
      )}
    </div>
  );
}

export default Recommendation;
