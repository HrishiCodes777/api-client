import { useEffect, useState } from "react";
import { getProducts } from "../services/productApiService";
import Card from "./ProductCard";

const ProductList = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    const getData = async () => {
      let data = await getProducts();
      if (data != null) {
        setProductList(data);
      }
    };
    getData();
  }, []);

  const getProductCard = () => {
    return productList.map((p) => (
        <div className="col-sm-6 col-md-4 col-lg-3 mb-4" key={p.productId}>
          <Card product={p} />
        </div>
      ))
  }

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">List of Products Available: {productList?.length}</h1>
      <div className="row">
        {getProductCard()}
      </div>
    </div>
  );
};

export default ProductList;
