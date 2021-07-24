import api from "@/plugins/axios.js";

const axios = api({
  baseURL: "https://api.openweathermap.org",
  params: {
    appid: "17828e69bc637271d188e0163ce58894",
    lang: "pt_br",
    units: "metric",
  },
});

export const getWeather = (localization = "Santo Andre") =>
  axios.get("/data/2.5/weather", {
    params: {
      q: localization,
    },
  });

export default {
  getWeather,
};
