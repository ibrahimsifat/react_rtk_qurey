const { default: axios } = require("axios");

const axiosInstance = axios.create({
  baseURL: "https://redux-assignments-sever.herokuapp.com/",
});
export default axiosInstance;
