import axiosInstance from "axios";

export const axios = axiosInstance.create({
  params: {},
  baseURL: `${process.env.VUE_APP_ENDPOINT_HOST}:${process.env.VUE_APP_ENDPOINT_PORT}/api/`,
});
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = 'Bearer '+localStorage.token;
export const axiosWeather = axiosInstance.create({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: "17828e69bc637271d188e0163ce58894",
    lang: "pt_br",
    units: "metric",
  },
});
