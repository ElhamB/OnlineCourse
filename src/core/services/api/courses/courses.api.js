import http from "../../interceptor";
import { BASE_URL } from "@/core/constants";

export const getAllCoursesApi = async () => {
  try {
    const response = await http.get(`${BASE_URL}course/getall`);
    return response.data.result;
  } catch (error) {
    console.log("error", error);
  }
};
