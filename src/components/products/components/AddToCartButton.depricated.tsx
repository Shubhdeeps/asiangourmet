// import IconButton from "@mui/material/IconButton";
// import Typography from "@mui/material/Typography";
// import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
// import { useEffect, useState } from "react";
// import { useSnackbar } from "notistack";
// import { CounterButtons } from "./CounterButton";
// import { Product } from "../../../models/Product.model";
// import { addProductToCart } from "../../../utils/addProductToTheCart";

// export default function AddToCartButton({
//   product,
//   initCount,
// }: {
//   product: Product;
//   initCount: number;
// }) {
//   const [counter, setCounter] = useState(initCount);

//   useEffect(() => {
//     setCounter(initCount);
//   }, [initCount]);

//   const { innerWidth } = window;
//   const { enqueueSnackbar } = useSnackbar();

//   const handleClickVariant = () => {
//     if (innerWidth < 800) {
//       return;
//     }
//     // variant could be success, error, warning, info, or default
//     const text = (
//       <Typography>{`${product.name} added to your cart.`}</Typography>
//     );
//     enqueueSnackbar(text, {
//       variant: "success",
//     });
//   };

//   const handleAddtoCart = (
//     e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
//     action: "ADD" | "REMOVE"
//   ) => {
//     //prevent click to parent element
//     e.stopPropagation();
//     addProductToCart(product, action);
//     if (action === "ADD") {
//       setCounter((prevState) => prevState + 1);
//       handleClickVariant();
//     } else {
//       setCounter((prevState) => prevState - 1);
//     }
//   };

//   const isOutOfStock = !!product.outOfStock;
//   return (
//     <>
//       {counter === 0 ? (
//         <IconButton
//           disabled={isOutOfStock}
//           onClick={(e) => handleAddtoCart(e, "ADD")}
//         >
//           <AddShoppingCartIcon
//             color={isOutOfStock ? "disabled" : "success"}
//             fontSize="medium"
//           />
//         </IconButton>
//       ) : (
//         <CounterButtons
//           handleAddtoCart={handleAddtoCart}
//           count={counter}
//           variant="row"
//         />
//       )}
//     </>
//   );
// }
