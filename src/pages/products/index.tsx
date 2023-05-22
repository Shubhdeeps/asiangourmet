import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { categories } from "../../services/db.model";
import { Category } from "../../components/category";
import noimage from "../../assets/images/noimage.jpg";
import { useNavigate } from "react-router-dom";

export default function Products() {
  const navigate = useNavigate();
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
            <div onClick={() => navigate(`/products/${category}`)}>
              <Category title={category} img={noimage} />
            </div>
          );
        })}
      </Box>
    </Container>
  );
}
