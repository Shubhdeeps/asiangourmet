import Box from "@mui/material/Box";
import Heading from "./components/Heading";
import veggies from "../../assets/images/veggies.png";
import fruits from "../../assets/images/fruits.png";
import spices from "../../assets/images/spices.png";
import { Category } from "../category";
export default function TopCategories() {
  return (
    <>
      <Heading title="Top Categories" />
      <Box
        mt={2}
        display="flex"
        alignItems="center"
        gap={{ md: "70px", xs: "10px" }}
        sx={{
          flexDirection: {
            md: "row",
            xs: "column",
          },
        }}
      >
        <Category img={veggies} title="VEGETABLES" />
        <Category img={fruits} title="FRUITS" />
        <Category img={spices} title="SPICES" />
      </Box>
    </>
  );
}
