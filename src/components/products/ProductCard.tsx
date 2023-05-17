import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import { motion, Variants } from "framer-motion";
import { Chip, Divider } from "@mui/material";
import { Product } from "../../services/db.model";
import noimage from "../../assets/images/noimage.jpg";

function ProductCard({
  props,
  setProduct,
}: {
  props: Product;
  setProduct: React.Dispatch<React.SetStateAction<Product | null>>;
}) {
  const { name, imageURL, price, quantity, quantityType } = props;

  const cardVariants: Variants = {
    offscreen: {
      y: 200,
      opacity: 0,
    },
    onscreen: {
      y: 50,
      opacity: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.7,
      },
    },
  };

  return (
    <motion.div
      onDoubleClick={() => console.log("item added")}
      className="box noselect product-card card-container"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.1 }}
      whileHover={{
        scale: 1.05,
        boxShadow: "0px 4px 20px rgba(53, 53, 53, 0.3)",
      }}
      whileTap={{
        scale: 0.9,
        boxShadow: "none",
      }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      variants={cardVariants}
      onClick={() => setProduct(props)}
    >
      <Box
        display="flex"
        className="glass"
        flexDirection="column"
        justifyContent="space-between"
        // flexDirection="column"
        // alignItems={"center"}
        gap="5px"
        border="1px solid #DFDFDF"
        borderRadius="10px"
        // padding="20px"
        sx={{
          height: "400px",
          width: {
            sm: "350px",
            xs: "275px",
          },
        }}
      >
        <Box width="100%" height="65%" borderRadius="10px">
          <img
            width="100%"
            height="100%"
            src={imageURL ? imageURL : noimage}
            className="border-r"
          />

          <Divider
            textAlign="left"
            sx={{
              marginTop: "-28px",
            }}
          >
            <Chip
              label={name}
              variant="filled"
              color="secondary"
              sx={{
                fontSize: "20px",
                fontWeight: 600,
                px: 3,
                py: 3,
                color: "white",
              }}
            />
          </Divider>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            paddingX: "20px",

            mb: "10px",
          }}
        >
          <Box
            sx={{
              display: "flex",
              gap: "4px",
              alignItems: "center",
            }}
          >
            <IconButton>
              <AddShoppingCartIcon color="secondary" fontSize="medium" />
            </IconButton>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                color: "secondary.main",
                padding: "6px 12px",
                borderRadius: "12px",
                background: "#E1F3F4",
              }}
            >
              {quantity} {quantityType}
            </Box>

            <Typography
              sx={{
                fontWeight: 800,
                fontSize: "22px",
              }}
            >
              €{price}
            </Typography>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default ProductCard;
