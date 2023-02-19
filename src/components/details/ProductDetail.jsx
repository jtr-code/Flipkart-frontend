import {
  Typography,
  Box,
  Table,
  TableRow,
  TableCell,
  TableBody,
  styled,
} from "@mui/material";
import { LocalOffer as Badge } from "@mui/icons-material";

//      <--------------------------------------- styled section starts-------------------------------->

const SmallText = styled(Box)`
  font-size: 14px;
  vertical-align: baseline;
  & > p {
    font-size: 14px;
    margin-top: 10px;
  }
`;

const StyledBadge = styled(Badge)`
  margin-right: 10px;
  color: #00cc00;
  font-size: 15px;
`;

const ColumnText = styled(TableRow)`
  font-size: 14px;
  vertical-align: baseline;
  & > td {
    font-size: 14px;
    border: none;
    margin-top: 10px;
  }
`;
//      <--------------------------------------- styled section ends---------------------------------->

const ProductDetail = ({ product }) => {
  const fassured =
    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png";
  const adURL =
    "https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50";

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 60 * 1000);
  return (
    <>
      <Typography>{product.title.longTitle}</Typography>
      <Typography style={{ marginTop: 5, color: "#878787", fontSize: 14 }}>
        8 ratings and 1 reviews
        <Box component="span">
          <img
            src={fassured}
            alt="fassuredlogo"
            style={{ width: 78, marginLeft: 20 }}
          />
        </Box>
      </Typography>
      <Typography>
        <Box component="span" style={{ fontSize: 28 }}>
          ₹{product.price.cost}
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#878787" }}>
          <strike>₹{product.price.mrp}</strike>
        </Box>
        &nbsp;&nbsp;&nbsp;
        <Box component="span" style={{ color: "#388E3C" }}>
          {product.price.discount}
          off
        </Box>
      </Typography>
      <Typography>
        <Typography>Available offers</Typography>
        <SmallText>
          <Typography>
            <StyledBadge /> Bank Offer 5% Cashback on Flipkart Axis Bank Card
            T&C
          </Typography>
          <Typography>
            <StyledBadge /> Special PriceGet extra 3% off (price inclusive of
            cashback/coupon) T&C
          </Typography>
          <Typography>
            <StyledBadge /> Buy this Product and Get Extra ₹500 Off on
            Two-Wheelers T&C
          </Typography>
          <Typography>
            <StyledBadge /> Partner OfferSign up for Flipkart Pay Later and get
            Flipkart Gift Card worth up to ₹750* Know More
          </Typography>
        </SmallText>
      </Typography>
      <Table>
        <TableBody>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Delivery</TableCell>
            <TableCell style={{ fontWeight: 600 }}>
              Delivery by {date.toDateString()} | ₹40
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Warranty</TableCell>
            <TableCell>No Warranty</TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Seller</TableCell>
            <TableCell>
              <Box component="span" style={{ color: "#2874f0" }}>
                SuperComNet
              </Box>
              <Typography>GST invoice available</Typography>
              <Typography>
                View more sellers starting from ₹{product.price.cost}
              </Typography>
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell colSpan={2}>
              <img src={adURL} alt="supercoinAd" style={{ width: 390 }} />
            </TableCell>
          </ColumnText>
          <ColumnText>
            <TableCell style={{ color: "#878787" }}>Description</TableCell>
            <TableCell>{product.description}</TableCell>
          </ColumnText>
        </TableBody>
      </Table>
    </>
  );
};

export default ProductDetail;
