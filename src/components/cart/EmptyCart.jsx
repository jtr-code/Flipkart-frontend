import { Box, Typography, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Component = styled(Box)(({ theme }) => ({
  height: "65vh",
  width: "80%",
  background: "#fff",
  margin: " 80px 140px",
  [theme.breakpoints.down("lg")]: {
    width: "70%",
  },
  [theme.breakpoints.down("md")]: {
    width: "60%",
    margin: "auto",
  },
}));

const Container = styled(Box)`
  text-align: center;
  padding-top: 70px;
`;

const Button = styled(Link)`
  cursor: pointer;
  color: #2874f0;
`;

const EmptyCart = () => {
  const imgUrl =
    "https://rukminim1.flixcart.com/www/800/800/promos/16/05/2019/d438a32e-765a-4d8b-b4a6-520b560971e8.png?q=90";
  return (
    <Component>
      <Container>
        <img src={imgUrl} alt="empty" style={{ width: "15%" }} />
        <Typography>Your Cart is empty!</Typography>
        <Typography>Add items to it now</Typography>
        <Button to="/">Go to Home</Button>
      </Container>
    </Component>
  );
};

export default EmptyCart;
