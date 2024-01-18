// here we write all the axios and api related logic

import axios from "axios";
const baseURL = "http://127.0.0.1:8000/"; //our DRF server url

const axiosInstance = axios.create({
  baseURL: baseURL,
  timeout: 6000,
  headers: {
    Authorization: localStorage.getItem("access_token")
      ? "JWT " + localStorage.getItem("access_token")
      : null,
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

export {axiosInstance};