import Typography from "@mui/material/Typography";

export default function Heading({ title }: { title: string }) {
  return (
    <Typography
      sx={{
        fontWeight: 700,
        fontSize: { md: "58px", xs: "34px" },
        textAlign: "center",
      }}
    >
      <span className="text-highlighted">{title.split(" ").splice(0, 1)} </span>
      {title.split(" ").splice(1).join(" ")}
    </Typography>
  );
}
