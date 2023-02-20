import {
  AppBar,
  Toolbar,
  styled,
  Box,
  IconButton,
  Typography,
  Drawer,
  List,
  ListItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useState } from "react";

// <---------------------------------------------Components import starts---------------------------------------->

import Search from "./Search";
import CustomButtons from "./CustomButtons";

// <---------------------------------------------Components import ends------------------------------------------>

//      <--------------------------------------- styled section starts-------------------------------->

const StyledHeader = styled(AppBar)`
  background: #2874f0;
  height: 56px;
  box-shadow: none;
`;

const ComponentLogo = styled(Link)(({ theme }) => ({
  marginLeft: "368px",
  cursor: "pointer",
  fontSize: "14px",

  [theme.breakpoints.down("md")]: {
    margin: 0,
  },
}));

const ComponentPlusLogo = styled(Box)`
  display: flex;
`;

const SubHeading = styled(Typography)`
  color: #f0f0f0;
  font-size: 11px;
  font-style: italic;
  margin-top: -5px;
  font-family: Roboto, Arial, sans-serif;
`;

const PlusImage = styled("img")({
  width: 10,
  height: 10,
  marginBottom: 9,
  marginLeft: 1,
  marginTop: -4,
});

const CustomButtonWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const MenuIconWrapper = styled(IconButton)(({ theme }) => ({
  display: "none",
  color: "inherit",

  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

//      <--------------------------------------- styled section ends-------------------------------->

const logoURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png";
const subURL =
  "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/plus_aef861.png";

const Header = () => {
  const [open, setOpen] = useState(false);

  const handleMenuOpen = () => {
    setOpen(true);
  };
  const handleMenuClose = () => {
    setOpen(false);
  };

  const list = () => (
    <Box style={{ width: 200 }} onClick={handleMenuClose}>
      <List>
        <ListItem button>
          <CustomButtons />
        </ListItem>
      </List>
    </Box>
  );
  return (
    <StyledHeader>
      <Toolbar style={{ minHeight: 56 }}>
        <MenuIconWrapper onClick={handleMenuOpen}>
          <MenuIcon />
        </MenuIconWrapper>
        <Drawer open={open} onClose={handleMenuClose}>
          {list()}
        </Drawer>
        <ComponentLogo to={"/"} style={{ textDecoration: "none" }}>
          <img src={logoURL} alt="Flipkart" style={{ width: "75px" }} />
          <ComponentPlusLogo>
            <SubHeading>
              Explore&nbsp;
              <span style={{ color: "#ffe500", fontWeight: "500" }}>Plus</span>
            </SubHeading>
            <PlusImage src={subURL} alt="pluslogo" />
          </ComponentPlusLogo>
        </ComponentLogo>
        <Search />
        <CustomButtonWrapper>
          <CustomButtons />
        </CustomButtonWrapper>
      </Toolbar>
    </StyledHeader>
  );
};

export default Header;
