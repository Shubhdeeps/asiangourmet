import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Heading from "./components/Heading";
import veggies from "../../assets/images/veggies.png";
import fruits from "../../assets/images/fruits.png";
import spices from "../../assets/images/spices.png";
export default function TopCategories() {
  return (
    <>
      <Heading title="Top Categories" />
      <Box
        mt={5}
        display="flex"
        alignItems="center"
        gap="70px"
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

function Category({ title, img }: { title: string; img: any }) {
  return (
    <Box
      className="top-category-card"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      gap="10px"
      border="1px solid #DFDFDF"
      borderRadius="20px"
      padding="10px"
    >
      <Box width="70%">
        <img width="100%" src={img} />
      </Box>
      <Typography
        sx={{
          fontWeight: 100,
          fontSize: "32px",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
