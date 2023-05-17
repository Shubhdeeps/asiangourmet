import Header from "../components/header/Header";
import Box from "@mui/material/Box";
import bgPattern1 from "../assets/images/bgpattern1.png";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Box height="60px"></Box>
      <Box
        sx={{
          position: "fixed",
          width: "100%",
          top: "50%",
          zIndex: 0,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            right: "0%",
            transform: "translate(0%, -50%)",
            display: "flex",
            width: {
              xs: "60%",
              md: "35%",
            },
          }}
        >
          <img src={bgPattern1} width={"100%"} />
        </Box>
      </Box>
      {children}
    </>
  );
}
