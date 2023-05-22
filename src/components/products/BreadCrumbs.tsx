import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function BreadCrumbs({ path }: { path: string[] }) {
  const breadCrumb = path.map((eachPath, index) => {
    const newPath = [...path];
    const currentPath = newPath.splice(0, index + 1).join("/");
    const lastItem = index + 1 === path.length;

    if (lastItem) {
      return (
        <Typography
          sx={{
            textTransform: "capitalize",
          }}
          key="3"
          color="text.primary"
        >
          {decodeURI(eachPath)}
        </Typography>
      );
    }
    return (
      <Link
        underline="hover"
        color="inherit"
        href={`/${currentPath}`}
        sx={{
          textTransform: "capitalize",
        }}
        key={eachPath}
      >
        {decodeURI(eachPath)}
      </Link>
    );
  });

  return (
    <>
      <Breadcrumbs separator="›" aria-label="breadcrumb">
        {breadCrumb}
      </Breadcrumbs>
    </>
  );
}
