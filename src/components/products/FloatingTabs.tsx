import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import { styled } from "@mui/material/styles";
import { bgFlower } from "../../assets/svg/bgFlower";
import { useNavigate, useParams } from "react-router-dom";
import { categories } from "../../services/db.model";
// interface StyledTabsProps: any

export default function FloatingTabs() {
  const { category } = useParams();

  const indexOfCurrentCategory = categories.indexOf(decodeURI(category!));
  const navigation = useNavigate();
  const [value, setValue] = useState(indexOfCurrentCategory);

  const StyledTabs = styled((props: any) => (
    <Tabs
      sx={{
        color: "#F4B83B",
      }}
      {...props}
      TabIndicatorProps={{
        children: <span className="MuiTabs-indicatorSpan" />,
      }}
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
      backgroundColor: "#F4B83B",
    },
  });

  interface StyledTabProps {
    label: string;
  }

  const StyledTab = styled((props: StyledTabProps) => (
    <Tab disableRipple {...props} />
  ))(({ theme }) => ({
    color: "#E0E0E0",
    textTransform: "none",
    fontWeight: 700,
    fontSize: theme.typography.pxToRem(17),
    marginRight: theme.spacing(1),
    "&.Mui-selected": {
      color: "#F4B83B",
    },
    "&.Mui-focusVisible": {
      backgroundColor: "rgba(100, 95, 228, 0.32)",
    },
  }));

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
    navigation(`/products/${categories[newValue]}`);
  };
  return (
    <Box
      sx={{
        width: "100%",
        height: "90px",
        position: {
          md: "sticky",
          xs: "fixed",
        },
        zIndex: "1",
        bottom: {
          md: "20px",
          xs: "0px",
        },
        display: "flex",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          //   width: "fit-content",
          width: {
            md: "800px",
            xs: "100%",
          },
          height: "100%",
          background: "#363636",
          borderRadius: {
            md: "15px",
            xs: "0px",
          },
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "none",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            left: "-35px",
          }}
        >
          {bgFlower}
        </Box>
        {/* <Box
          sx={{
            position: "absolute",
            right: "-38px",
            transform: "rotate(180deg)",
          }}
        >
          {bgFlower}
        </Box> */}
        <StyledTabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="styled tabs example"
        >
          {categories.map((element) => {
            return (
              <StyledTab
                key={element}
                sx={{
                  textTransform: "capitalize",
                }}
                label={element}
              />
            );
          })}
        </StyledTabs>
      </Box>
    </Box>
  );
}
