import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000/api/v1";

export const createUserAPI = async (user) => axios.post("/user/register", user);

export const loginUserAPI = async (userInfo) =>
  axios.post("/user/login", userInfo);
export const verifyEmailAPI = async (params) =>
  axios.patch(`/user/${params.id}/verifyemail/${params.token}`);
export const getAllOtherUsersAPI = async (currentUserId) =>
  axios.post("/user", currentUserId);