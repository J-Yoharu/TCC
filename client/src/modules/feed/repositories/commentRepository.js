import { axios } from "@/plugins/axios";

const prefix = "comments";

export const createComment = (args = {}) => axios.post(`${prefix}`, args);
