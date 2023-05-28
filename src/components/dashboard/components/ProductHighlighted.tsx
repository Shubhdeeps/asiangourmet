import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { blurBlobs } from "../../../assets/svg/blurBlobs";

export default function ProductHighlighted({
  heading,
  title,
  color,
}: {
  heading: string;
  title: string;
  color: "blue" | "red" | "yellow";
}) {
  return (
    <>
      <Box
        className="card-bg"
        sx={{
          width: {
            md: "170px",
            sm: "140px",
            xs: "90px",
          },
          height: {
            md: "170px",
            sm: "140px",
            xs: "90px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box
          position="absolute"
          bottom={{ md: "-10px", xs: "-40px" }}
          right={{ md: "-10px", xs: "-40" }}
          display={{
            xs: "none",
            sm: "flex",
          }}
        >
          {blurBlobs(color)}
        </Box>

        <Typography
          sx={{ fontSize: { sm: "22px", xs: "16px" }, fontWeight: 700 }}
        >
          {heading}
        </Typography>
        <Typography
          sx={{ fontSize: { sm: "14px", xs: "9px" }, fontWeight: 300 }}
        >
          {title}
        </Typography>
      </Box>
    </>
  );
}
