import service from "@/utils/request";
import { IApi } from "./@types/IApi";

export const getNoteInfo = (params: IApi) => {
  return service({
    url: "/api/note/getById",
    method: "GET",
    params,
  });
};
export const getNoteList = (params: IApi): Promise<IApi> => {
  return service({
    url: "/api/note/getAll",
    method: "GET",
    params,
  });
};
export const save = (params: IApi): Promise<IApi> => {
  return service({
    url: "/api/note/save",
    method: "POST",
    data: params,
  });
};
export const removeById = (params: IApi): Promise<IApi> => {
  return service({
    url: "/api/note/remove",
    method: "POST",
    params,
  });
};
