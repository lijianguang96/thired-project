import { post, get, del } from "../utils/request";
//请求订单详情
export const reqGetOrder = () => get("/api/v1/orders");
//根据id删除订单
export const reqDelOrder = (id) => del("/api/v1/orders/" + id);
//请求新增地址列表
export const reqAddlist = (params) => post("/api/v1/addresses", params);
// 请求地址列表
export const reqAddressslist = () => get("/api/v1/addresses");
//获取单条收货地址
export const reqSigleleAddress = (id) => get("/api/v1/addresses/" + id);

export const reqGetOrderDetail = (id) => get("/api/v1/orders/" + id);