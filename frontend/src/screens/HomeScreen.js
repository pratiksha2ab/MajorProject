import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";

import ProductCarousel from "../components/ProductCarousel";

// import products from "../products";
import { listProducts } from "../actions/productActions";

function HomeScreen({ history }) {
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.productList); //storejs ko productlist pull gardaexa
  const { error, loading, products } = productList;

  let keyword = history.location.search;

  useEffect(() => {
    dispatch(listProducts(keyword));
  }, [keyword, dispatch]);

  return (
    <div>
      {!keyword && (
        <div>
          <h3>Hot Deals</h3>
          <ProductCarousel />
        </div>
      )}
      <h1>Latest Products</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error}</Message>
      ) : (
        <Row>
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default HomeScreen;
