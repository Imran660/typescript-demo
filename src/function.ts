import axios from "axios";
export const getUserInfo = () =>
  axios.get(`https://api.publicapis.org/entries`);
