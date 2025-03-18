import axios from "axios"

export const request = (url="",method="get",data={}) => {
    let headers = {
        "Accept" : "application/json",
        "Content-Type" : "application/json"
    }

    return axios ({
        url : "http://localhost/api"+url,
        method : method,
        data : data,
        headers : headers
    }).then(res=>{
       return res.data
    }).catch(error=>{
        console.log("error-log",error)
    }).finally(final=> {
        
    })
}