import React, { useEffect, useState } from "react";
import "../../App.css";

const ProductAPI = () => {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );

      const data = await response.json();
      setProducts(data);
    } catch (err) {
      console.error("err", err);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProduct = () => {
    return (
      <div className="row bg-primary p-0">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product?.id}>
            <div className="pb-2">
              <img src={product?.img1} alt={product?.name} />

              <h5>{product?.name}</h5>
              <p>Price: {product?.price}</p>
            </div>
          </div>
        ))}
      </div>
    );
  };
  return <div>{renderProduct()}</div>;
};

export default ProductAPI;
