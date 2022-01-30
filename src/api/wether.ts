import service from "@/utils/request";
import { IApi } from "./@types/IApi";

export const getWether = (params: IApi) => {
  return service({
    url: "/api/client/weather",
    method: "GET",
    params,
  });
};
