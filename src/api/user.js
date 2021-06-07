import { get, post } from "../utils/request";
//x注册接口
export const reqReg = (data) => post("/api/v1/auth/reg", data);
// 登录接口
export const reqLogin = (data) => post("/api/v1/auth/login", data);
//获取用户信息
export const reqUserInfo = () => get("/api/v1/users/info");
//改变用户名
export const reqChangename = (params) =>
  post("/api/v1/users/change_info", params);
//修改密码
export const reqChangepwd = (params) =>
  post("/api/v1/users/change_pwd", params);
