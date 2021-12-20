import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Carousel, Image } from "react-bootstrap";
import Loader from "./Loader";
import Message from "./Message";
import { listTopProducts, recommendProducts2 } from "../actions/productActions";

function ProductCarousel() {
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.productDetails);
  const {
    loading: loadingProductDetail,
    error: errorProductDetail,
    product,
  } = productDetails;

  const productTopRated = useSelector((state) => state.productTopRated);
  const { error, loading, products } = productTopRated;

  useEffect(() => {
    dispatch(listTopProducts());
  }, [dispatch]);

  // const sendProductNameToRecommendAction2 = (e) => {
  //   dispatch(recommendProducts2(product.name));
  // };

  return loading ? (
    <Loader />
  ) : error ? (
    <Message variant="danger">{error}</Message>
  ) : (
    <Carousel pause="hover" className="bg-dark">
      {products.map((product) => (
        <Carousel.Item key={product._id}>
          <Link
            to={`/product/${product._id}`}
            // onClick={sendProductNameToRecommendAction2}
          >
            <Image src={product.image} alt={product.name} fluid />
            <Carousel.Caption className="carousel.caption">
              <h4>
                {product.name}(Rs.{product.price})
              </h4>
            </Carousel.Caption>
          </Link>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default ProductCarousel;
