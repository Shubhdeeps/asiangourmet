import React from "react";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Slide from "@mui/material/Slide";
import { Box } from "@mui/material";

interface Props {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window?: () => Window;
  children: React.ReactElement;
}

export function HideOnScroll(props: Props) {
  const { children, window } = props;

  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
  });

  return (
    <Box
      sx={{
        display: {
          xs: "none",
          md: "flex",
        },
      }}
    >
      <Slide appear={false} direction="down" in={!trigger}>
        {children}
      </Slide>
    </Box>
  );
}
