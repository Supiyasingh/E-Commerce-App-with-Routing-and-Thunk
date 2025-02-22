import { FETCH_PRODUCTS_LOADING, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE } from "../actions";

const initialProductState = {
  products: [],
  loading: false,
  error: null,
};

export const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_LOADING:
      return { ...state, loading: true };
    case FETCH_PRODUCTS_SUCCESS:
      return { ...state, loading: false, products: action.payload };
    case FETCH_PRODUCTS_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
