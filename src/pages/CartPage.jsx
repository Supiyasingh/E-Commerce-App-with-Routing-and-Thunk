import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, updateQuantity } from "../redux/actions.js";  
import { Link } from "react-router-dom";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  const handleQuantityChange = (id, quantity) => {
    if (quantity > 0) {
      dispatch(updateQuantity(id, quantity));
    }
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);

  return (
    <div>
      <h1>Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              <input
                type="number"
                value={item.quantity}
                onChange={(e) => handleQuantityChange(item.id, Number(e.target.value))}
                min="1"
              />
              <button  style={{
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  }} onClick={() => dispatch(removeFromCart(item.id))}>Remove</button>
            </div>
          ))}
          <h2>Total Price: ${totalPrice}</h2>
          <Link to="/checkout">
            <button  style={{
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  }}>Proceed to Checkout</button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default CartPage;
