import { axiosFetcher } from "./axios"

export const apiHandler = (url,data,resHandler)=>{
  axiosFetcher.post(url,data).then(res=>console.log(res))
}