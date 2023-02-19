import axios from "axios";

const URL = "";

export const authenticateUserSignup = async (data) => {
  try {
    return await axios.post(`${URL}/signup`, data);
  } catch (error) {
    console.error(" Error in signup API", error.message);
  }
};

export const authenticateLoginUser = async (data) => {
  try {
    return await axios.post(`${URL}/login`, data);
  } catch (error) {
    console.log("Error in login API", error.message);
    return error.response;
  }
};
