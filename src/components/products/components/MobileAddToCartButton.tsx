import IconButton from "@mui/material/IconButton";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { useEffect, useState } from "react";
import { Product } from "../../../models/Product.model";
import { addProductToCart } from "../../../utils/addProductToTheCart";
import { MobileCounterButtons } from "./MobileCounterButton";

export default function MobileAddToCartButton({
  product,
  initCount,
}: {
  product: Product;
  initCount: number;
}) {
  const [counter, setCounter] = useState(initCount);

  const isOutOfStock = !!product.outOfStock;

  useEffect(() => {
    setCounter(initCount);
  }, [initCount]);

  const handleAddtoCart = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: "ADD" | "REMOVE"
  ) => {
    //prevent click to parent element
    e.stopPropagation();
    addProductToCart(product, action);
    if (action === "ADD") {
      setCounter((prevState) => prevState + 1);
    } else {
      setCounter((prevState) => prevState - 1);
    }
  };

  return (
    <>
      {counter === 0 ? (
        <IconButton
          disabled={isOutOfStock}
          onClick={(e) => handleAddtoCart(e, "ADD")}
        >
          <AddShoppingCartIcon
            color={isOutOfStock ? "disabled" : "secondary"}
            fontSize="small"
          />
        </IconButton>
      ) : (
        <MobileCounterButtons handleAddtoCart={handleAddtoCart} />
      )}
    </>
  );
}
