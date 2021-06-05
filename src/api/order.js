import { get, del } from '../utils/request'
//请求订单详情
export const reqGetOrder = () => get("/api/v1/orders");
//根据id删除订单
export const reqDelOrder = (id) => del("/api/v1/orders/" + id);