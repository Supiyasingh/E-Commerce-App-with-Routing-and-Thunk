import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, addToCart } from "../redux/actions";


const ProductList = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div>
      {products.map((product) => (
        <div key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px" }}>
          <img src={product.image} alt={product.title} width="100" />
          <h3>{product.title}</h3>
          <p>${product.price}</p>
          <button style={{
    backgroundColor: "#007bff",
    color: "white",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    transition: "background 0.3s",
  }}
           onClick={() => dispatch(addToCart(product))}>Add to Cart</button>

        </div>
      ))}
    </div>
  );
};

export default ProductList;
