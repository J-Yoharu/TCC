import { axios } from "@/plugins/axios";

const prefix = "posts";
export const getPosts = (args = {}) => {
  return axios.get(`${prefix}`, { params: args });
};

export const createPost = (args = {}, headers) =>
  axios.post(`${prefix}`, args, headers);
