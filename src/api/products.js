import { get } from '../utils/request'

export const reqProducts = (params) => get("/api/v1/products", { params })

