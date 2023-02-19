import { Typography, Box, styled } from "@mui/material";
import { Link } from "react-router-dom";

const Container = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: "500px";
`;

const Buttonwrapper = styled(Link)`
  color: #2874f0;
  font-size: 20px;
`;

const ServerError = () => {
  return (
    <Container>
      <Box>
        <Typography variant="h1">404 Page Not Found</Typography>
      </Box>
      <Box>
        <Buttonwrapper to="/">Home</Buttonwrapper>
      </Box>
    </Container>
  );
};

export default ServerError;
