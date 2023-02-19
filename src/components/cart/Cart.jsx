import { Button, Grid, styled, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import CartItem from "./CartItem";
import EmptyCart from "./EmptyCart";
import TotalBalance from "./TotalBalance";

//      <--------------------------------------- styled section starts-------------------------------->
const Container = styled(Grid)(({ theme }) => ({
  padding: "30px 135px",
  [theme.breakpoints.down("md ")]: {
    padding: "15px 0",
  },
}));

const Header = styled(Grid)`
  padding: 15px 24px;
  background: #fff;
`;

const ButtonWrapper = styled(Button)`
  padding: 16px 22px;
  background: #fff;
  width: 100%;
  box-shadow: 0 -2px 10px 0 rgb(0 0 0 /10%);
  border-top: 1px solid #f0f0f0;
`;

const StyledButton = styled(Button)`
  display: flex;
  margin-left: auto;
  background: #fb641b;
  color: #fff;
  border-radius: 5px;
  height: 51px;
  width: 250px;
`;

const LeftComponent = styled(Grid)(({ theme }) => ({
  paddingRight: "15px",
  [theme.breakpoints.down("sm")]: {
    marginBottom: "15px",
  },
}));

//      <--------------------------------------- styled section ends---------------------------------->
const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      {cartItems.length ? (
        <Container container>
          <LeftComponent item lg={9} md={9} sm={12} xs={12}>
            <Header>
              <Typography>My Cart({cartItems.length})</Typography>
            </Header>
            {cartItems.map((item) => (
              <CartItem item={item} />
            ))}
            <ButtonWrapper>
              <StyledButton>Place Order</StyledButton>
            </ButtonWrapper>
          </LeftComponent>
          <Grid item lg={3} md={3} sm={12} xs={12}>
            <TotalBalance cartItems={cartItems} />
          </Grid>
        </Container>
      ) : (
        <EmptyCart />
      )}
    </>
  );
};

export default Cart;
