import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import DeleteIcon from "@mui/icons-material/Delete";

export const CounterButtons = ({
  variant,
  handleAddtoCart,
  count,
}: {
  variant: "row" | "column" | "column-reverse";
  handleAddtoCart: (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    action: "ADD" | "REMOVE"
  ) => void;
  count: number;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        gap: {
          xs: 0,
          md: 1,
        },
        alignItems: "center",
        flexDirection: variant,
      }}
    >
      <IconButton onClick={(e) => handleAddtoCart(e, "REMOVE")}>
        {count === 1 ? (
          <DeleteIcon
            sx={{
              fontSize: "medium",
            }}
            color="error"
            fontSize="small"
          />
        ) : (
          <RemoveIcon
            sx={{
              fontSize: "medium",
            }}
            color="error"
            fontSize="small"
          />
        )}
      </IconButton>
      <Typography
        sx={{
          fontSize: {
            xs: "12px",
            md: "16px",
          },
        }}
      >
        {count}
      </Typography>
      <IconButton onClick={(e) => handleAddtoCart(e, "ADD")}>
        <AddIcon
          sx={{
            fontSize: "medium",
          }}
          color="secondary"
        />
      </IconButton>
    </Box>
  );
};
