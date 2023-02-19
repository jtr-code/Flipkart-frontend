import { Box, Typography, styled, Button } from "@mui/material";
import { addEllipsis } from "../../utils/common-utils";
import GroupedBtn from "./ButtonGroup";
import { removeFromCart } from "../../redux/actions/cartActions";
import { useDispatch } from "react-redux";

//      <--------------------------------------- styled section starts---------------------------------->

const Component = styled(Box)`
  border-top: 1px solid #f0f0f0;
  display: flex;
  background: #fff;
`;
const LeftComponent = styled(Box)`
  margin: 20px;
  display: flex;
  flex-direction: column;
`;

const SmallText = styled(Typography)`
  color: #878787;
  font-size: 14px;
  margin-top: 10px;
`;

const RemoveBtn = styled(Button)`
  margin-top: 20px;
  font-size: 16px;
  color: #000;
  font-weight: 600;
`;

//      <--------------------------------------- styled section ends------------------------------------>

const CartItem = ({ item }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";

  const dispatch = useDispatch();

  const removeItemFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Component>
      <LeftComponent>
        <img src={item.url} alt="product" style={{ width: 110, height: 110 }} />
        <GroupedBtn />
      </LeftComponent>
      <Box style={{ margin: 20 }}>
        <Typography>{addEllipsis(item.title.longTitle)}</Typography>
        <SmallText>
          Seller:RetailNet
          <Box component="span">
            <img
              src={fassured}
              alt="pluslogo"
              style={{ width: 50, marginLeft: 10 }}
            />
          </Box>
        </SmallText>
        <Typography style={{ margin: "20px 0" }}>
          <Box component="span" style={{ fontWeight: 600, fontSize: 18 }}>
            ₹{item.price.cost}
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#878787" }}>
            <strike>₹{item.price.mrp}</strike>
          </Box>
          &nbsp;&nbsp;&nbsp;
          <Box component="span" style={{ color: "#388E3C" }}>
            {item.price.discount}
            off
          </Box>
        </Typography>
        <RemoveBtn onClick={() => removeItemFromCart(item.id)}>
          Remove
        </RemoveBtn>
      </Box>
    </Component>
  );
};

export default CartItem;
