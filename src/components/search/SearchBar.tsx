import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Product } from "../../models/Product.model";
import { useState, useEffect } from "react";
import { getAllProductsInDB } from "../../services/productServices";
import { useNavigate } from "react-router-dom";

export default function SearchBar() {
  const [products, setProducts] = useState<Product[]>([]);
  const navigate = useNavigate();

  const handleNavigate = (product: Product) => {
    const productName = encodeURI(product.name);
    navigate(`/products/${product.category}/product?name=${productName}`);
  };

  useEffect(() => {
    getAllProductsInDB(setProducts);
  }, []);

  return (
    <Autocomplete
      popupIcon={<></>}
      options={products.sort((a, b) => -b.category.localeCompare(a.category))}
      groupBy={(option) => option.category}
      getOptionLabel={(option) => option.name}
      sx={{ width: "100%", maxWidth: "700px" }}
      onChange={(_e, val) => handleNavigate(val as Product)}
      renderInput={(params) => {
        return <TextField {...params} color="secondary" label="Search" />;
      }}
    />
  );
}
