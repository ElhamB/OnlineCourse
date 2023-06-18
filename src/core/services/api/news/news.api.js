import http from "../../interceptor";
import { BASE_URL } from "@/core/constants";

export const getTopNewsApi = async () => {
  try {
    const response = await http.get(`${BASE_URL}news/topNews`);
    return response.data.result;
  } catch (error) {
    console.log("error", error);
  }
};

export const getNewsListApi = async () => {
  try {
    const response = await http.get(`${BASE_URL}news`);
    return response.data.result;
  } catch (error) {
    console.log("error", error);
  }
};
