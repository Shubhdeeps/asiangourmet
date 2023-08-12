import Typography from "@mui/material/Typography";

export default function Heading({ title }: { title: string }) {
  return (
    <Typography
      variant="inherit"
      sx={{
        fontWeight: 700,
        fontSize: { md: "58px", sm: "34px", xs: "24px" },
        textAlign: "center",
      }}
    >
      <span className="text-highlighted">{title.split(" ").splice(0, 1)} </span>
      {title.split(" ").splice(1).join(" ")}
    </Typography>
  );
}
