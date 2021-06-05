import { get } from '../utils/request'
//获取详情
export const reqDetail = (id) => get("/api/v1/products/" + id);