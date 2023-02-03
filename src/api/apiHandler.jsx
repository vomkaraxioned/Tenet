import { axiosFetcher } from "./axios";

export const apiHandler = async (url, data, resHandler) => {
  await axiosFetcher.post(url, data).then(res => resHandler(res.data)).catch(err => alert(err.message))
}