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
  const { products } = productPearsonRecommendation;

  const loop = (name_score) => {
    let n = 1;
    for (n; n <= name_score.length; n++) {
      return { n };
    }
  };

  const changearray = (products) => {
    if (products === []) {
      return;
    }
    return {};
  };

  return (
    //  products === [] ? (
    //   <Message variant="danger">Please review some products</Message>
    // ) :
    <div>
      <h1>Recommendation by Pearson Correlation</h1>
      {userInfo ? (
        <div>
          <Row>
            {products.serialized_data.map((product) => (
              <>
                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                  <RecommendPearson product={product} />
                </Col>
              </>
            ))}
          </Row>
          <Row>
            {products.name_score.map((name_score) => {
              return (
                <>
                  <h6>The correlated data for product is {name_score}</h6>
                </>
              );
            })}
          </Row>
        </div>
      ) : (
        <Message variant="info">
          Please review some products to get a recommendation
        </Message>
      )}
    </div>
  );
}

export default Recommendation;
