import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { waveDown, waveUp } from "../../../assets/svg/waves";

export default function WaveContainer({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Box
      sx={{
        position: "relative",
        height: { md: "1800px", sm: "2400px", xs: "2400px" },
      }}
    >
      <Box
        sx={{
          position: "relative",
          display: "flex",
          height: { md: "1800px", sm: "2400px", xs: "2400px" },
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#f4f4f4",
          zIndex: -1,
        }}
      >
        <Box width="100%" mt="-10px">
          {waveUp}
        </Box>

        <Box width="100%" mb="-10px">
          {waveDown}
        </Box>
      </Box>
      <Container maxWidth="xl">
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          sx={{
            zIndex: 2,
            position: "absolute",
            top: {
              md: "30%",
              sm: "15%",
              xs: "15%",
            },
          }}
        >
          {children}
        </Box>
      </Container>
    </Box>
  );
}

// <Box
// sx={{
//   position: "fixed",
//   width: "100%",
//   top: "50%",
//   zIndex: 0,
// }}
// >
// <Box
//   flexGrow={1}
//   sx={{
//     position: "relative",
//     zIndex: 3,
//   }}
// >
//   <Container maxWidth="xl">
//     <Box display="flex" flexDirection="column" alignItems="center">
//       {children}
//     </Box>
//   </Container>
// </Box>
// <Box
//   sx={{
//     position: "absolute",
//     top: "50%",
//     transform: "translate(-15%, -50%)",
//     display: {
//       sm: "none",
//       xs: "none",
//       md: "flex",
//     },
//   }}
// >
//   {/* {bgPattern} */}
// </Box>
// <Box
//   sx={{
//     position: "absolute",
//     top: "50%",
//     right: "0%",
//     transform: "translate(0%, -50%)",
//     display: {
//       sm: "none",
//       xs: "none",
//       md: "flex",
//     },
//   }}
// >
//   <img src={bgPattern1} />
// </Box>
// </Box>
