import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Header from "../../Component/Header";
import Sidebar from "./SideBar";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [searchParams] = useSearchParams();
  const category = searchParams.get("category") || "All";
  const searchQuery = searchParams.get("search") || "";
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

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      category === "All" ||
      product.category.toLowerCase() === category.toLowerCase();
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Header />
      <div className="flex width-50 mb-4 p-[40px] align-items justify-content-between bg-color">
        <h1>Shop</h1>
        <p>shop</p>
      </div>

      <div className="flex width-50">
        <Sidebar />
        <div className="p-8 row">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-4">
            {filteredProducts.map((product) => (
              <Link
                key={product._id.$oid}
                to={`/product/${product._id.$oid}`}
                className="block hover:no-underline hover:text-inherit"
              >
                <div className="rounded-lg p-3  hover:shadow-lg transition duration-300 cursor-pointer">
                  <img
                    src={product.img1}
                    alt={product.name}
                    className="object-contain mb-4"
                  />
                  <h2 className="text-lg font-size ">{product.name}</h2>
                  <p className="text-gray-600">
                    {Number(product.price).toLocaleString()} VND
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Shop;
