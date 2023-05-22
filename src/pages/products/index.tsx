import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { categories } from "../../services/db.model";
import { Category } from "../../components/category";
import noimage from "../../assets/images/noimage.jpg";

export default function Products() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          mt: 5,
          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => {
          return (
            <div>
              <Category
                title={category}
                img={noimage}
                link={`/products/${category}`}
              />
            </div>
          );
        })}
      </Box>
    </Container>
  );
}
