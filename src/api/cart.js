import { del, get, post } from '../utils/request'
//请求加入购物车
export const reqAddCart = (data) => post("/api/v1/shop_carts", data);
//请求查询购物车
export const reqCartlist = () => get("/api/v1/shop_carts");
//删除购物车
export const reqDel = (id) => del("/api/v1/shop_carts/" + id);
//加入订单页面
export const reqOrder = (data) => post("/api/v1/orders", data);
//删除所有购物车
export const reqDelAll = (data) => post("/api/v1/shop_carts/delmany", data);