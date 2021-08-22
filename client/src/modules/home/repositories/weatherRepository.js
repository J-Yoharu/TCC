import { axiosWeather } from "@/plugins/axios.js";

export const getWeather = (localization = "Santo Andre") =>
  axiosWeather.get("/data/2.5/weather", {
    params: {
      q: localization,
    },
  });

export default {
  getWeather,
};
