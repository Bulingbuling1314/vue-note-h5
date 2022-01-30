import service from "@/utils/request";
import { IApi } from "./@types/IApi";

export const getTheme = (params: IApi) => {
  return service({
    url: "/api/theme/findByFlag",
    method: "post",
    params,
  });
};

export const changeTheme = (params: IApi) => {
  return service({
    url: "/api/theme/update",
    method: "post",
    params,
  });
};
