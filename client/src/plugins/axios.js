import axios from "axios";

export default ({ baseURL = "https://localhost:8000", params = {} }) => {
  return axios.create({
    params,
    baseURL,
  });
};
