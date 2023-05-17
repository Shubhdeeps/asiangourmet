import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";

const tabs = {
  "/": 0,
  "/home": 0,
  "/products": 1,
  "/aboutus": 2,
  "/contact": 3,
};

const navigation = {
  0: "/home",
  1: "/products/hot",
  2: "/aboutus",
  3: "/contact",
};

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
}

const StyledTabs = styled((props: StyledTabsProps) => (
  <Tabs
    {...props}
    TabIndicatorProps={{ children: <span className="MuiTabs-indicatorSpan" /> }}
  />
))({
  "& .MuiTabs-indicator": {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "transparent",
    height: 4,
  },
  "& .MuiTabs-indicatorSpan": {
    borderRadius: "3px",
    maxWidth: 30,
    width: "100%",
    backgroundColor: "#50C8DB",
  },
});

interface StyledTabProps {
  label: string;
}

const StyledTab = styled((props: StyledTabProps) => (
  <Tab disableRipple {...props} />
))(({ theme }) => ({
  color: "#2D2D2D",
  textTransform: "none",
  fontWeight: 700,
  fontSize: theme.typography.pxToRem(17),
  marginRight: theme.spacing(1),
  "&.Mui-selected": {
    color: "#50C8DB",
  },
  "&.Mui-focusVisible": {
    backgroundColor: "rgba(100, 95, 228, 0.32)",
  },
}));

export default function HeaderTabs() {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname as "/";
  const [value, setValue] = React.useState(tabs[pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(navigation[newValue as 0 | 1 | 2 | 3]);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "none", md: "flex" },
        justifyContent: "end",
        background: "transparent",
      }}
    >
      <StyledTabs
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        <StyledTab label="Home" />
        <StyledTab label="Products" />
        <StyledTab label="About us" />
        <StyledTab label="Contact" />
      </StyledTabs>
    </Box>
  );
}
