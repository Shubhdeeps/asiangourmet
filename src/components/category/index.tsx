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
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Box
        onClick={() => navigate(link)}
        className="top-category-card"
        display="flex"
        flexDirection="column"
        alignItems={"center"}
        justifyContent="center"
        gap={{
          md: "10px",
          xs: "2px",
        }}
        sx={{
          background: "#F5F5F5",
        }}
        border="1px solid #EEECEC"
        borderRadius="50%"
        padding="5px"
        height={{
          xs: "140px",
          sm: "260px",
          md: "340px",
        }}
        width={{
          xs: "140px",
          sm: "260px",
          md: "340px",
        }}
      >
        <Box width="70%">
          <img width="100%" src={img} />
        </Box>
      </Box>
      <Typography
        sx={{
          textTransform: "capitalize",
          fontWeight: 500,
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
