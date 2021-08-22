import axiosInstance from "axios";

export const axios = axiosInstance.create({
  params: {},
  baseURL: "http://localhost:8000/api/",
});

export const axiosWeather = axiosInstance.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: "17828e69bc637271d188e0163ce58894",
    lang: "pt_br",
    units: "metric",
  },
});

// export default ({ baseURL = "https://localhost:8000", params = {} }) => {
//   return axios.create({
//     params,
//     baseURL,
//   });
// };
