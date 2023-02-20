import { styled, Typography } from "@mui/material";
import { Box } from "@mui/material";
import { navData } from "../../constants/data";

//      <--------------------------------------- styled section starts-------------------------------->

const Component = styled(Box)(({ theme }) => ({
  display: "flex",
  margin: " 55px 350px 0 300px",
  justifyContent: " space-between",
  fontFamily: "Roboto, Arial, sans-serif",
  textAlign: "center",
  height: "110px",
  [theme.breakpoints.down("lg")]: {
    margin: 0,
    overflow: "hidden",
  },
}));

const Text = styled(Typography)`
  font-size: 14px;
  font-weight: 550;
`;

//      <--------------------------------------- styled section ends-------------------------------->

const NavBar = () => {
  return (
    <Box style={{ background: "#fff" }}>
      <Component>
        {navData.map((curElem) => (
          <Box key={crypto.randomUUID()}>
            <img
              style={{ width: 64, height: 64 }}
              src={curElem.url}
              alt="nav"
            />
            <Text>{curElem.text}</Text>
          </Box>
        ))}
      </Component>
    </Box>
  );
};

export default NavBar;
