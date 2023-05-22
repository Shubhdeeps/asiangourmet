import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";

export function Category({
  title,
  img,
  link,
}: {
  title: string;
  img: any;
  link: string;
}) {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(link)}
      className="top-category-card"
      display="flex"
      flexDirection="column"
      alignItems={"center"}
      gap={{
        md: "10px",
        xs: "2px",
      }}
      border="1px solid #DFDFDF"
      borderRadius="20px"
      padding="5px"
      width={{
        xs: "220px",
        md: "30%",
      }}
    >
      <Box width="70%">
        <img width="100%" src={img} />
      </Box>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: 100,
          fontSize: {
            md: "32px",
            xs: "18px",
          },
        }}
      >
        {title}
      </Typography>
    </Box>
  );
}
