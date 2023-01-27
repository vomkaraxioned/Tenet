import { axiosFetcher } from "./axios"

export const apiHandler = (url,data,resHandler)=>{
  console.log("called")
  axiosFetcher.post(url,data).then(res=>console.log(res))
}