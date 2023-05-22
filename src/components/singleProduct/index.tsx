import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  makeStyles,
} from "@material-ui/core";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import noimage from "../../assets/images/noimage.jpg";
import { Product } from "../../models/Product.model";
import { numberTo2DigitDecimal } from "../../utils/priceTo2DigitDecimal";

const useStyles = makeStyles((theme) => ({
  dialog: {
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    backdropFilter: "blur(10px)",
    boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.1)",
    borderRadius: theme.spacing(2),
  },
  image: {
    width: "100%",
    height: "auto",
    borderRadius: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const ProductPopup = ({
  open,
  onClose,
  product,
}: {
  open: boolean;
  onClose: () => void;
  product: Product;
}) => {
  const classes = useStyles();
  const { price, discount } = product;
  return (
    <Dialog open={open} onClose={onClose} classes={{ paper: classes.dialog }}>
      <DialogTitle>{product.name}</DialogTitle>
      <DialogContent>
        <img
          src={product.imageURL ? product.imageURL : noimage}
          alt={product.name}
          className={classes.image}
        />
        <DialogContentText>
          <Box
            sx={{
              fontWeight: 500,
              fontSize: "14px",
              width: "fit-content",
              color: "secondary.main",
              padding: "6px 12px",
              borderRadius: "12px",
              background: "#E1F3F4",
            }}
          >
            {product.quantity} {product.quantityType}
          </Box>
        </DialogContentText>
        <Box display="flex" alignItems="center" gap={0.5}>
          {discount && discount !== price && (
            <Typography
              sx={{
                fontWeight: 400,
                fontSize: "16px",
                color: "#C4C4C4",
                textDecoration: "line-through",
              }}
            >
              {numberTo2DigitDecimal(price)}
            </Typography>
          )}
          <Typography
            sx={{
              fontWeight: 600,
              fontSize: "22px",
            }}
          >
            {numberTo2DigitDecimal(discount || price)}
          </Typography>
        </Box>
      </DialogContent>
      <DialogActions>
        <Button color="inherit" onClick={onClose}>
          Cancel
        </Button>
        <Button
          // onClick={handleAddToCart}
          variant="contained"
          size="medium"
          color="info"
          sx={{
            borderRadius: "50px",
            px: "50px",
            color: "white",
          }}
        >
          Add to Cart
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default ProductPopup;
