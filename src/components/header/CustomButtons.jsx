import { Box, Button, styled, Typography, Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

//component

import LoginDialog from "../login/LoginDialog";
import { DataContext } from "../../context/DataProvider";
import Profile from "./Profile";

//      <--------------------------------------- styled section starts-------------------------------->

const ButtonWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: " 0 3% 0 auto",
  "& > button": {
    marginRight: "40px",
    alignItems: "center",
    fontSize: "16px",
  },
  "& > *": {
    marginRight: "40px !important",
    alignItems: "center",
    fontSize: "16px",
  },

  [theme.breakpoints.down("md")]: {
    display: "block ",
  },
}));
const LoginButton = styled(Button)`
  color: #2874f0;
  cursor: pointer;
  background: #fff;
  border-radius: 2px;
  margin-left: 45px;
  box-shadow: none;
  border: 1px solid #dbdbdb;
  text-transform: none;
  font-weight: 500;
  height: 32px;
  width: 130px;
`;

const CartWrapper = styled(Link)(({ theme }) => ({
  display: "flex",
  cursor: "pointer",
  textDecoration: "none",
  color: "inherit",
  [theme.breakpoints.down("md")]: {
    display: "block",
  },
}));
//      <--------------------------------------- styled section ends-------------------------------->

const CustomButtons = () => {
  const [open, setOpen] = useState(false);

  const handleOpenDialog = () => {
    setOpen(true);
  };

  const { name, setName } = useContext(DataContext);

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <ButtonWrapper>
      {name ? (
        <Profile name={name} setName={setName} />
      ) : (
        <LoginButton
          variant="contained"
          sx={{ "&.MuiButtonBase-root:hover": { backgroundColor: "white" } }}
          onClick={handleOpenDialog}
        >
          Login
        </LoginButton>
      )}
      <Typography style={{ marginTop: 5, width: 130, cursor: "pointer " }}>
        Become a Seller
      </Typography>
      <Typography style={{ marginTop: 5, paddingRight: 10, cursor: "pointer" }}>
        More
      </Typography>
      <CartWrapper to="/cart">
        <Badge badgeContent={cartItems?.length} color="secondary">
          <ShoppingCartIcon />
        </Badge>
        <Typography style={{ marginLeft: 10 }}>Cart</Typography>
      </CartWrapper>
      <LoginDialog open={open} setOpen={setOpen} />
    </ButtonWrapper>
  );
};

export default CustomButtons;
