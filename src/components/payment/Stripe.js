import axios from "axios";
import StripeCheckout from "react-stripe-checkout";
import { useSelector } from "react-redux";
import { Box, Button } from "@mui/material";
import styled from "@emotion/styled";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  justify-content: center;
`;

const Stripe = () => {
  toast.configure();
  const navigate = useNavigate();
  const URL = "";
  const { product } = useSelector((state) => state.getProductDetails);
  async function handleToken(token, addresses) {
    const response = await axios.post(`${URL}/checkout`, {
      token,
      product,
    });
    console.log(response.status);

    if (response.status === 200) {
      toast("Payment Succesful", { type: "success" });
      navigate("/");
    } else {
      toast("Payment Failed", { type: "error" });
    }
  }
  return (
    <Container>
      <Button>
        <StripeCheckout
          stripeKey="pk_test_51MZbS4SBaYCFHdmuGSClc8bYS6CXbXRP2XIb4SivCWCmqmZajdNaoZEQQFAoDxEmhBlXM7CAclgVIiIVPjbygmV600V3KKWMZz"
          token={handleToken}
          amount={product.price * 100}
          label="Pay with Card"
        />
      </Button>
    </Container>
  );
};

export default Stripe;
