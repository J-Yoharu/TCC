import { axios } from "@/plugins/axios";

const prefix = "posts";
export const getPosts = (args = {}) => {
  return axios.get(`${prefix}`, { params: args });
};
