import axios from "../axios";

export const apiGetProducts = (params) =>
  axios({
    url: "/product/",
    method: "get",
    params,
  });
export const apiGetProduct = (pid) =>
  axios({
    url: "/product/" + pid,
    method: "get",
  });
export const apiRatings = (data) =>
  axios({
    url: "/product/ratings",
    method: "put",
    data,
  });
export const apiCreateProducts = (data) =>
  axios({
    url: "/product/createproduct",
    method: "post",
    data,
  });
export const apiUpdateProducts = (data, pid) =>
  axios({
    url: "/product/" + pid,
    method: "put",
    data,
  });
export const apiDeleteProducts = (pid) =>
  axios({
    url: "/product/" + pid,
    method: "delete",
  });
export const apiAddVarriantProducts = (data,pid) =>
  axios({
    url: "/product/varriant/" + pid,
    method: "put",
    data
  });
