import React, { useEffect } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { useLocation, useNavigate } from "react-router-dom";
import { NAVIGATION, pages, tabs } from "../consts";

const tabsProxy = new Proxy(tabs, {
  get(target, prop: "", _) {
    if (!tabs[prop]) {
      return null;
    } else {
      return target[prop];
    }
  },
});

interface StyledTabsProps {
  children?: React.ReactNode;
  value: number;
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  orientation: "vertical" | "horizontal";
}

const StyledTabs = styled((props: StyledTabsProps) => {
  return (
    <Tabs
      {...props}
      TabIndicatorProps={{
        children: <span className={"MuiTabs-indicatorSpan"} />,
      }}
    />
  );
})({
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

const StyledTab = styled((props: StyledTabProps) => {
  return <Tab disableRipple {...props} />;
})(({ theme }) => ({
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

export default function HeaderTabs({
  orientation = "horizontal",
}: {
  orientation?: "vertical" | "horizontal";
}) {
  const location = useLocation();
  const navigate = useNavigate();
  const pathname = location.pathname.split("/")[1] as "";
  const [value, setValue] = React.useState(+tabsProxy[pathname]);

  useEffect(() => {
    setValue(+tabsProxy[pathname]);
  }, [pathname]);

  const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigate(NAVIGATION[newValue as 0 | 1 | 2 | 3]);
  };
  return (
    <Box
      sx={{
        flexGrow: 1,
        // display: { xs: "none", md: "flex" },
        justifyContent: "end",
        background: "transparent",
      }}
    >
      <StyledTabs
        orientation={orientation}
        value={value}
        onChange={handleChange}
        aria-label="styled tabs example"
      >
        {pages.map((page) => {
          return <StyledTab key={page.value} label={page.value} />;
        })}
      </StyledTabs>
    </Box>
  );
}
