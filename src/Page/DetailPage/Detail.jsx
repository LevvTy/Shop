import React, { useEffect, useState, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { CartContext } from "../../Context/CartContext";

const ProductDetail = () => {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [mainImage, setMainImage] = useState("");
  const [quantity, setQuantity] = useState(1);
  const navigate = useNavigate();
  const { dispatch } = useContext(CartContext);

  const fetchProduct = async () => {
    try {
      const response = await fetch(
        "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
      );
      const data = await response.json();

      console.log("Fetched data:", data);
      console.log("Current productId:", productId);

      const selectedProduct = data.find(
        (product) => product._id?.$oid === productId
      );

      if (selectedProduct) {
        setProduct(selectedProduct);
        setMainImage(selectedProduct.img1);
      } else {
        setProduct(null);
      }
    } catch (err) {
      console.error("Fetch product error:", err);
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [productId]);

  const handleAddToCart = () => {
    if (!product) return;

    const cartItem = {
      id: product._id.$oid,
      name: product.name,
      price: Number(product.price),
      image: product.img1,
      quantity: quantity,
    };

    dispatch({ type: "ADD_CART", payload: cartItem });
    navigate("/cart");
  };

  if (product === null) {
    return (
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <p className="text-red-500 text-lg">Product not found!</p>
        <Link to="/shop" className="text-blue-500 underline">
          ← Back to Shop
        </Link>
      </div>
    );
  }

  return (
    <div className=" width-50 container mx-auto px-4 py-8 max-w-6xl">
      <Link
        to="/shop"
        className="mb-4 inline-block text-gray-600 hover:text-black"
      >
        ← Back to Shop
      </Link>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Image Section */}
        <div className="md:w-1/2">
          <div className="bg-gray-50 p-4 rounded-xl">
            <img
              src={mainImage}
              alt={product.name}
              className="w-full h-96 object-contain"
            />
          </div>
          <div className="flex gap-3 mt-4 overflow-x-auto pb-2">
            {[product.img1, product.img2, product.img3, product.img4]
              .filter((img) => img)
              .map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index + 1}`}
                  className={`w-16 h-16 object-cover rounded-lg cursor-pointer border-2 ${
                    mainImage === img ? "border-black" : "border-transparent"
                  }`}
                  onClick={() => setMainImage(img)}
                />
              ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2">
          <h1 className="text-3xl font-bold mb-2">{product.name}</h1>
          <div className="mb-4">
            <span className="text-gray-500 text-lg">{product.short_desc}</span>
          </div>

          <div className="mb-6">
            <span className="text-2xl font-semibold">
              {Number(product.price).toLocaleString()} VND
            </span>
          </div>

          <div className="mb-8">
            <h3 className="text-lg font-semibold mb-3">PRODUCT DETAILS</h3>
            <p className="text-gray-600 leading-relaxed">{product.long_desc}</p>
          </div>

          <div className="mb-4">
            <label className="text-lg font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
              className="ml-2 p-1 border rounded w-16"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="cursor-pointer w-full py-4 bg-black text-white rounded-full hover:bg-gray-800 transition-colors duration-300"
          >
            ADD TO CART
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
