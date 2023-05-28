import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";

export const MobileCounterButtons = ({
  handleAddtoCart,
}: {
  handleAddtoCart: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: "ADD" | "REMOVE"
  ) => void;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: 0,
        alignItems: "center",
        flexDirection: "column-reverse",
      }}
    >
      <IconButton onClick={(e) => handleAddtoCart(e, "REMOVE")}>
        <RemoveIcon
          sx={{
            fontSize: "small",
            color: "secondary.main",
          }}
          fontSize="small"
        />
      </IconButton>
      <IconButton onClick={(e) => handleAddtoCart(e, "ADD")}>
        <AddIcon
          sx={{
            fontSize: "small",
            color: "secondary.main",
          }}
        />
      </IconButton>
    </Box>
  );
};
