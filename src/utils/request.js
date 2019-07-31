import axios from "axios";
import { Message } from "element-ui";

const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
});
//请求拦截器
service.interceptors.request.use(config => {
  return config;
});
//响应拦截器
service.interceptors.response.use(response => {
  let res = response.data;
  if (res.code != 0) {
    Message({
      message: res.message || "error",
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(res.message || "error");
  } else {
    return res;
  }
});

export default service
