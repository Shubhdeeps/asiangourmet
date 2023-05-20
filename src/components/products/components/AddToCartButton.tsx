import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useState } from "react";
import { useSnackbar } from "notistack";
import { CounterButtons } from "./CounterButton";
import { Product } from "../../../models/Product.model";
import { addProductToCart } from "../../../utils/addProductToTheCart";

export default function AddToCartButton({
  product,
  initCount,
}: {
  product: Product;
  initCount: number;
}) {
  const [counter, setCounter] = useState(initCount);
  const { enqueueSnackbar } = useSnackbar();

  const handleClickVariant = () => {
    // variant could be success, error, warning, info, or default
    const text = (
      <Typography>{`${product.name} added to your cart.`}</Typography>
    );
    enqueueSnackbar(text, {
      variant: "success",
    });
  };

  const handleAddtoCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: "ADD" | "REMOVE"
  ) => {
    //prevent click to parent element
    e.stopPropagation();
    addProductToCart(product, action);
    if (action === "ADD") {
      setCounter((prevState) => prevState + 1);
      handleClickVariant();
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <>
      {counter === 0 ? (
        <IconButton onClick={(e) => handleAddtoCart(e, "ADD")}>
          <AddShoppingCartIcon color="success" fontSize="medium" />
        </IconButton>
      ) : (
        <CounterButtons
          handleAddtoCart={handleAddtoCart}
          count={counter}
          variant="row"
        />
      )}
    </>
  );
}
