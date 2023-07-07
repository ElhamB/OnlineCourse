import http from "../../interceptor";
import { BASE_URL } from "@/core/constants";

export const getTeacherListApi = async () => {
  try {
    const response = await http.get(`${BASE_URL}employee/getallteachers`);
    return response?.data.result;
  } catch (error) {
    console.log("error", error);
  }
};
