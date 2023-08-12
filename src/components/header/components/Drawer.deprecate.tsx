// import Drawer from "@material-ui/core/Drawer";
// import Box from "@mui/material/Box";
// import Divider from "@mui/material/Divider";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemText from "@mui/material/ListItemText";
// import { makeStyles } from "@material-ui/core";
// import { useNavigate } from "react-router-dom";
// import logo from "../../assets/images/logo.png";
// import { pages } from "./consts";

// const useStyles = makeStyles(() => ({
//   drawer: {
//     backgroundColor: "rgba(255, 255, 255, 0.8)",
//     backdropFilter: "blur(10px)",
//     boxShadow: "0px 0px 20px rgba(0, 0, 0, 0.3)",
//     display: "block",
//     width: "70%",
//     boxSizing: "border-box",
//   },
// }));

// export default function CustomDrawer({
//   mobileOpen,
//   handleDrawerToggle,
// }: {
//   mobileOpen: boolean;
//   handleDrawerToggle: any;
// }) {
//   const navigate = useNavigate();
//   const container =
//     window !== undefined ? () => window.document.body : undefined;
//   const classes = useStyles();

//   const drawer = (
//     <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
//       <Box
//         sx={{
//           width: "100%",
//           display: "flex",
//           alignItems: "center",
//           justifyContent: "center",
//           my: 1,
//         }}
//       >
//         <Box
//           sx={{
//             width: "160px",
//             height: "70px",
//           }}
//         >
//           <img width="100%" height="100%" src={logo} />
//         </Box>
//       </Box>
//       <Divider />
//       {pages.map((item) => (
//         <ListItem key={item.path} disablePadding>
//           <ListItemButton
//             sx={{ textAlign: "center" }}
//             onClick={() => navigate(item.path)}
//           >
//             <ListItemText primary={item.value} />
//           </ListItemButton>
//         </ListItem>
//       ))}
//     </Box>
//   );
//   return (
//     <>
//       <Drawer
//         classes={{ paper: classes.drawer }}
//         container={container}
//         variant="temporary"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{
//           keepMounted: true, // Better open performance on mobile.
//         }}
//       >
//         {drawer}
//       </Drawer>
//     </>
//   );
// }
