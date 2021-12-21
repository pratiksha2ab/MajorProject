// reducer a func that takes cureent state and
// take action about what we wanna do to the state like load data
// depending on that action we are gonna change state

//so this function will take state and action type-manipulate state-and return the new copy into store
//reducer update a store

import {
  PRODUCT_LIST_REQUEST,
  PRODUCT_LIST_SUCCESS,
  PRODUCT_LIST_FAIL,
  PRODUCT_DETAILS_REQUEST,
  PRODUCT_DETAILS_SUCCESS,
  PRODUCT_DETAILS_FAIL,
  PRODUCT_DELETE_REQUEST,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_FAIL,
  PRODUCT_CREATE_REQUEST,
  PRODUCT_CREATE_SUCCESS,
  PRODUCT_CREATE_FAIL,
  PRODUCT_CREATE_RESET,
  PRODUCT_UPDATE_REQUEST,
  PRODUCT_UPDATE_SUCCESS,
  PRODUCT_UPDATE_FAIL,
  PRODUCT_UPDATE_RESET,
  PRODUCT_CREATE_REVIEW_REQUEST,
  PRODUCT_CREATE_REVIEW_SUCCESS,
  PRODUCT_CREATE_REVIEW_FAIL,
  PRODUCT_CREATE_REVIEW_RESET,
  PRODUCT_TOP_REQUEST,
  PRODUCT_TOP_SUCCESS,
  PRODUCT_TOP_FAIL,
  PRODUCT_PAYMENT_REQUEST,
  PRODUCT_PAYMENT_SUCCESS,
  PRODUCT_PAYMENT_FAIL,
  PRODUCT_RECOMMENDATION_REQUEST,
  PRODUCT_RECOMMENDATION_SUCCESS,
  PRODUCT_RECOMMENDATION_FAIL,
  PRODUCT_RECOMMENDATION2_REQUEST,
  PRODUCT_RECOMMENDATION2_SUCCESS,
  PRODUCT_RECOMMENDATION2_FAIL,
  PRODUCT_PEARSONRECOMMENDATION_REQUEST,
  PRODUCT_PEARSONRECOMMENDATION_SUCCESS,
  PRODUCT_PEARSONRECOMMENDATION_FAIL,
} from "../constants/productConstants";
import {
  ORDER_PAY2_RESET,
  ORDER_PAY2_FAIL,
  ORDER_PAY2_SUCCESS,
  ORDER_PAY2_REQUEST,
} from "../constants/orderConstants";
export const productListReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_LIST_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_LIST_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_LIST_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDetailsReducer = (
  state = { product: { reviews: [] } },
  action
) => {
  switch (action.type) {
    case PRODUCT_DETAILS_REQUEST:
      return { loading: true, ...state };

    case PRODUCT_DETAILS_SUCCESS:
      return { loading: false, product: action.payload };

    case PRODUCT_DETAILS_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_DELETE_REQUEST:
      return { loading: true };

    case PRODUCT_DELETE_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_DELETE_FAIL:
      return { loading: false, error: action.payload };

    default:
      return state;
  }
};

export const productCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_CREATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_RESET:
      return {};
    default:
      return state;
  }
};

export const productUpdateReducer = (state = { product: {} }, action) => {
  switch (action.type) {
    case PRODUCT_UPDATE_REQUEST:
      return { loading: true };

    case PRODUCT_UPDATE_SUCCESS:
      return { loading: false, success: true, product: action.payload };

    case PRODUCT_UPDATE_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_UPDATE_RESET:
      return { product: {} };
    default:
      return state;
  }
};

export const productPaymentReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY2_REQUEST:
      return { loading: true };

    case ORDER_PAY2_SUCCESS:
      return { loading: false, success: true };

    case ORDER_PAY2_FAIL:
      return { loading: false, error: action.payload };
    case ORDER_PAY2_RESET:
      return {};
    default:
      return state;
  }
};

export const productReviewCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case PRODUCT_CREATE_REVIEW_REQUEST:
      return { loading: true };

    case PRODUCT_CREATE_REVIEW_SUCCESS:
      return { loading: false, success: true };

    case PRODUCT_CREATE_REVIEW_FAIL:
      return { loading: false, error: action.payload };

    case PRODUCT_CREATE_REVIEW_RESET:
      return {};
    default:
      return state;
  }
};

export const productTopRatedReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case PRODUCT_TOP_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_TOP_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_TOP_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productRecommendationReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_RECOMMENDATION_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_RECOMMENDATION_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_RECOMMENDATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productRecommendation2Reducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_RECOMMENDATION2_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_RECOMMENDATION2_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_RECOMMENDATION2_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const productPearsonRecommendationReducer = (
  state = { products: [] },
  action
) => {
  switch (action.type) {
    case PRODUCT_PEARSONRECOMMENDATION_REQUEST:
      return { loading: true, products: [] };

    case PRODUCT_PEARSONRECOMMENDATION_SUCCESS:
      return { loading: false, products: action.payload };

    case PRODUCT_PEARSONRECOMMENDATION_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
