import axios from "axios";
import baseUrl from "../configs/settings";

const Api = axios.create({
  baseURL: baseUrl,
});

export const setAuthorization = (token) => {
  Api.defaults.headers.common = {
    Authorization: `Bearer ${token}`,
  };
};

export const urls = {
  authLogin: "/login",
};

export default Api;
