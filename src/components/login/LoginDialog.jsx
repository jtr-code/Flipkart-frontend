import styled from "@emotion/styled";
import { Box, Dialog, TextField, Typography, Button } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { useState } from "react";
import {
  authenticateLoginUser,
  authenticateUserSignup,
} from "../../service/api";
import { useContext } from "react";
import { DataContext } from "../../context/DataProvider";

//      <--------------------------------------- styled section starts------------------------------>

const Component = styled(Box)`
  display: flex;
  height: 528px;
`;

const Image = styled(Box)`
  width: 270px;
  background: url(https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png)
    no-repeat;
  color: #fff;
  background-color: #2874f0;
  background-position: 50% 85%;
  padding: 40px 33px;

  & > p {
    margin-top: 12px;
    color: #dbdbdb;
    font-size: 18px;
  }
`;

const ReqBtn = styled(Button)`
  background-color: #fb641b;
  text-transform: none;
  height: 48px;
  width: 100%;
  border-radius: 2px;
  padding: 10px 20px 10px 20px;
  font-weight: 550;
`;

const Wrapper = styled(Box)`
  padding: 46px 35px 46px 35px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const TextWrapper = styled(Typography)`
  color: #878787;
  font-size: 11px;
  padding: 19px 0px;
  width: 100%;
`;

const Text = styled(Typography)`
  color: #2874f0;
  font-size: 14px;
  text-align: center;
  font-weight: bold;
  position: absolute;
  top: 476.406px;
  bottom: 32px;
  right: 0px;
  left: 0px;
  cursor: pointer;
`;

const Error = styled(Typography)`
  font-size: 10px;
  color: #ff6161;
  line-height: 0;
  margin-top: 10px;
  font-weight: 600;
  margin-bottom: 15px;
`;

//      <--------------------------------------- styled section ends-------------------------------->

//      <--------------------------------------- STATE INITIAL-VALUES-------------------------------------->

const accountInitialValues = {
  login: {
    view: "login",
    heading: "Login",
    subHeading: "Get access to your Orders, Wishlist and Recommendations",
  },
  signup: {
    view: "signup",
    heading: "Looks like you're new here!",
    subHeading: "Sign up with your mobile number to get started",
  },
};

const setSignupInitialValues = {
  firstname: "",
  lastname: "",
  username: "",
  email: "",
  password: "",
  phone: "",
};

const loginInitialValue = {
  username: "",
  password: "",
};
//      <--------------------------------------- STATE INITIAL-VALUES ENDS-------------------------------->

const LoginDialog = ({ open, setOpen }) => {
  const [account, toggleAccount] = useState(accountInitialValues.login);

  const [signup, setSignup] = useState(setSignupInitialValues);

  const [login, setLogin] = useState(loginInitialValue);

  const [error, setError] = useState(false);

  const { setName } = useContext(DataContext);

  //      <--------------------------------------- FUNCTIONS -------------------------------->

  const handleCloseDialog = () => {
    setOpen(false);
    toggleAccount(accountInitialValues.login);
    setError(false);
  };

  const toggleSignup = () => {
    toggleAccount(accountInitialValues.signup);
  };

  const onInputChange = (event) => {
    setSignup({
      ...signup,
      [event.target.name]: event.target.value,
    });
  };

  const signUpUser = async () => {
    let response = await authenticateUserSignup(signup);
    console.log(response);
    if (!response) return;
    handleCloseDialog();
    setName(signup.firstname);
  };

  const onValueChange = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const loginUser = async () => {
    let response = await authenticateLoginUser(login);
    console.log(response);
    if (response.status === 200) {
      handleCloseDialog();
      setName(response.data.data.firstname);
    } else {
      setError(true);
    }
  };

  //      <--------------------------------------- FUNCTIONS ENDS-------------------------------->

  return (
    <Dialog
      open={open}
      onClose={handleCloseDialog}
      sx={{
        "& .MuiDialog-container": {
          "& .MuiPaper-root": {
            width: "100%",
            maxWidth: "750px",
          },
        },
      }}
    >
      <Component>
        <Image>
          <Typography
            style={{ fontWeight: "bold", fontSize: "28px", color: "#fff" }}
          >
            {account.heading}
          </Typography>
          <Typography>{account.subHeading}</Typography>
        </Image>

        {/* login */}

        {account.view === "login" ? (
          <Wrapper>
            <TextField
              label="Enter Username"
              variant="standard"
              style={{ width: "100%" }}
              onChange={(event) => onValueChange(event)}
              name="username"
            />
            {error && <Error>Please enter valid username or password</Error>}
            <TextField
              label="Enter Password"
              type="password"
              variant="standard"
              style={{ width: "100%" }}
              onChange={(event) => onValueChange(event)}
              name="password"
            />
            <TextWrapper>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </TextWrapper>
            <ReqBtn
              variant="contained"
              sx={{
                "&.MuiButtonBase-root:hover": { backgroundColor: "#fb641b" },
              }}
              onClick={() => loginUser()}
            >
              Login
            </ReqBtn>
            <Text onClick={() => toggleSignup()}>
              New to Flipkart?Create an Account
            </Text>
          </Wrapper>
        ) : (
          // Signup

          <Wrapper>
            <TextField
              label="Enter Firstname"
              variant="standard"
              style={{ width: "100%" }}
              name="firstname"
              onChange={(event) => onInputChange(event)}
            />
            <TextField
              label="Enter Lastname"
              variant="standard"
              style={{ width: "100%" }}
              name="lastname"
              onChange={(event) => onInputChange(event)}
            />
            <TextField
              label="Enter Username"
              variant="standard"
              style={{ width: "100%" }}
              name="username"
              onChange={(event) => onInputChange(event)}
            />
            <TextField
              label="Enter Email"
              variant="standard"
              style={{ width: "100%" }}
              name="email"
              onChange={(event) => onInputChange(event)}
            />
            <TextField
              label="Enter Password"
              type="password"
              variant="standard"
              style={{ width: "100%" }}
              name="password"
              onChange={(event) => onInputChange(event)}
            />
            <TextField
              label="Enter Phone"
              variant="standard"
              style={{ width: "100%" }}
              name="phone"
              onChange={(event) => onInputChange(event)}
            />
            <TextWrapper>
              By continuing, you agree to Flipkart's Terms of Use and Privacy
              Policy.
            </TextWrapper>
            <ReqBtn
              variant="contained"
              sx={{
                "&.MuiButtonBase-root:hover": { backgroundColor: "#fb641b" },
              }}
              onClick={() => signUpUser()}
            >
              Continue
            </ReqBtn>
            <ReqBtn
              style={{
                backgroundColor: "#fff",
                color: "#2874F0",
                boxShadow: "rgba(0, 0, 0, 0.2) 0px 2px 4px 0px",
                padding: "10px 20px 10px 20px",
                margin: " 16px 0 0 0",
              }}
            >
              Existing User? Log in
            </ReqBtn>
          </Wrapper>
        )}
        <ClearIcon
          onClick={handleCloseDialog}
          style={{
            cursor: "pointer",
          }}
        />
      </Component>
    </Dialog>
  );
};

export default LoginDialog;
