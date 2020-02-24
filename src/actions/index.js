

//  let CROSS_ORIGIN_URL = 'https://cors-anywhere.herokuapp.com';
export const DEV_URL = `http://localhost:5000/api`;


/*
*
* name: post method
* desc: post params
* @param: params
* @return: get param,method,attach it and return as object
* Created by Ashok on 20.08.2019
*
*/
export const postMethod = (params,type=1) => {
    return {
        method:'POST',
        headers:{
            'content-type':'application/json'
        },
        body:JSON.stringify(params)
    }
}

