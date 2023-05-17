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
        // onMouseOver={() => setIsMouseOver(true)}
        // onMouseOut={() => setIsMouseOver(false)}
        className="card-bg"
        sx={{
          width: "170px",
          height: "170px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <Box position="absolute" bottom="-10px" right="-10px">
          {blurBlobs(color)}
        </Box>

        <Typography sx={{ fontSize: "32px", fontWeight: 700 }}>
          {heading}
        </Typography>
        <Typography sx={{ fontSize: "19px", fontWeight: 300 }}>
          {title}
        </Typography>
      </Box>
    </>
  );
}
