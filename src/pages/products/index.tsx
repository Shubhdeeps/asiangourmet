import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Category } from "../../components/category";
import React from "react";
const categories = [
  {
    title: "hot",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fhot.png?alt=media&token=a3ba72c9-8dde-4296-b01f-2b4eb991e22e",
  },
  {
    title: "mushrooms",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fmashromms.png?alt=media&token=9f36440f-e278-4bba-992c-9aa9b7d43151",
  },
  {
    title: "vegetables",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fvegetables.png?alt=media&token=b6a68a9d-6ed0-42bd-ae3d-4878390c58d2",
  },
  {
    title: "greens",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fgreens.png?alt=media&token=da4f01b6-dda0-46b5-add5-bb44a5cf16e4",
  },
  {
    title: "fruits",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Ffruits.png?alt=media&token=9ac9ceb1-86e4-4ce5-ba53-94338a3a7cd8",
  },
  {
    title: "boiled food",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2FboiledFood.png?alt=media&token=fc121fbd-437b-41d5-903a-ab9bb7eab844",
  },
  {
    title: "drinks and snacks",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fdrinks.png?alt=media&token=e14a1057-eb89-494e-a128-e6b1f9a6b18d",
  },
  {
    title: "tofu",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Ftofu.png?alt=media&token=589d65cb-77b2-4b8f-83c2-534411055562",
  },
  {
    title: "peas & beans",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fpeas.png?alt=media&token=20ba19dd-a037-40f5-beec-d69011575747",
  },
  {
    title: "roots & yams",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2FrootsAndYams.png?alt=media&token=f3cf7aa1-4dc3-4400-9d87-2401b6a0b46f",
  },
  {
    title: "leaves, herbs & spices",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2FleavesAndHerbs.png?alt=media&token=c386c2bf-ea37-4f8b-a1fe-90d67572aacc",
  },
  {
    title: "mangoes",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fmangoes.png?alt=media&token=e3b14149-3f15-4e55-aecd-6417a0cb24ef",
  },
  {
    title: "eggplant",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Feggplant.png?alt=media&token=42a29b0f-842b-4f58-98f0-f3d282240b8a",
  },
  {
    title: "chillies",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fchillies.png?alt=media&token=c3e96cd2-4ca2-492f-ab1a-da4347edfd86",
  },
  {
    title: "nuts and seeds",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fnuts.png?alt=media&token=f3828074-9e10-4cb8-9928-94c93d960460",
  },
  {
    title: "papaya",
    imageURL:
      "https://firebasestorage.googleapis.com/v0/b/asiangourmettallinn.appspot.com/o/categories%2Fpapaya.png?alt=media&token=ac56c0f4-5278-42f6-874d-c9921e543761",
  },
];

export default function Products() {
  return (
    <Container maxWidth="xl">
      <Box
        sx={{
          position: "relative",
          my: 5,

          display: "flex",
          flexWrap: "wrap",
          gap: 4,
          justifyContent: "center",
        }}
      >
        {categories.map((category) => {
          return (
            <React.Fragment key={category.title}>
              <Category
                title={category.title}
                img={category.imageURL}
                link={`/products/${category.title}`}
              />
            </React.Fragment>
          );
        })}
      </Box>
    </Container>
  );
}
