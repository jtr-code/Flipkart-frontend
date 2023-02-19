import { Typography, Box, Menu, MenuItem, styled } from "@mui/material";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { useState } from "react";

//      <--------------------------------------- styled section starts------------------------------>

const Wrapper = styled(Box)`
  margin-left: 45px;
  height: 32px;
  width: 130px;
`;

const Component = styled(Menu)`
  margin-top: 5px;
`;

const LogOut = styled(Typography)`
  font-size: 14px;
  margin-left: 20px;
`;

//      <--------------------------------------- styled section ends-------------------------------->
const Profile = ({ name, setName }) => {
  const [open, setOpen] = useState(false);

  const handleClick = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const logoutUser = () => {
    setName("");
  };

  return (
    <>
      <Wrapper onClick={handleClick}>
        <Typography style={{ cursor: "pointer", marginTop: 5, marginLeft: 50, }}>
          {name}
        </Typography>
        <Component anchorEl={open} open={Boolean(open)} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose();
              logoutUser();
            }}
          >
            <PowerSettingsNewIcon
              color="primary"
              fontSize="small"
              cursor="pointer"
            />
            <LogOut>Logout</LogOut>
          </MenuItem>
        </Component>
      </Wrapper>
    </>
  );
};

export default Profile;
