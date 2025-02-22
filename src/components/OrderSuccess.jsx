import { Link } from "react-router-dom";

const OrderSuccess = () => {
  return (
    <div>
      <h1>Order Placed Successfully!</h1>
      <p>Thank you for your purchase.</p>
      <Link to="/">
        <button>Back to Products</button>
      </Link>
    </div>
  );
};

export default OrderSuccess;
