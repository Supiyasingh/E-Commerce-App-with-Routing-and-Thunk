import { useSelector, useDispatch } from "react-redux";
import { placeOrder } from "../redux/actions";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlePlaceOrder = () => {
    dispatch(placeOrder());
    navigate("/order-success");
  };

  return (
    <div>
      <h1>Checkout</h1>
      {cartItems.length === 0 ? (
        <p>No items to checkout.</p>
      ) : (
        <div>
          <h2>Order Summary</h2>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Quantity: {item.quantity}</p>
              <p>Price: ${item.price * item.quantity}</p>
            </div>
          ))}
          <h2>Total: ${cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2)}</h2>
          <button  style={{
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  }} onClick={handlePlaceOrder}>Place Order</button>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
