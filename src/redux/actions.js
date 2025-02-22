import axios from "axios";

// Action Types
export const FETCH_PRODUCTS_LOADING = "FETCH_PRODUCTS_LOADING";
export const FETCH_PRODUCTS_SUCCESS = "FETCH_PRODUCTS_SUCCESS";
export const FETCH_PRODUCTS_FAILURE = "FETCH_PRODUCTS_FAILURE";
export const ADD_TO_CART = "ADD_TO_CART";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const UPDATE_QUANTITY = "UPDATE_QUANTITY";
export const PLACE_ORDER = "PLACE_ORDER";

// Fetch Products
export const fetchProducts = () => async (dispatch) => {
  dispatch({ type: FETCH_PRODUCTS_LOADING });
  try {
    const response = await axios.get("https://fakestoreapi.com/products");
    dispatch({ type: FETCH_PRODUCTS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_PRODUCTS_FAILURE, payload: error.message });
  }
};

// Add to Cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product,
});

// Remove from Cart
export const removeFromCart = (id) => ({
  type: REMOVE_FROM_CART,
  payload: id,
});

// Update Quantity
export const updateQuantity = (id, quantity) => ({
  type: UPDATE_QUANTITY,
  payload: { id, quantity },
});

// Place Order
export const placeOrder = () => ({
  type: PLACE_ORDER,
});
