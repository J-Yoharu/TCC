import { axios } from "@/plugins/axios";
import defaultAxios from "axios";

const prefix = "users";

export const createUser = (args = {}) => axios.post(`${prefix}`, args);

export const login = (args = {}) => defaultAxios.post(`${process.env.VUE_APP_ENDPOINT_HOST}:${process.env.VUE_APP_ENDPOINT_PORT}/api/${prefix}/login`, args);

export const csrfCookie = () => defaultAxios.get(`${process.env.VUE_APP_ENDPOINT_HOST}:${process.env.VUE_APP_ENDPOINT_PORT}/sanctum/csrf-cookie`);

export const getRegions = () => defaultAxios
.get(
  "https://servicodados.ibge.gov.br/api/v1/localidades/estados/35/municipios"
)
