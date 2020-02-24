import {DEV_URL,postMethod} from './index';

/*
*
* name: login
* desc: login and dispatch user data
* @param: data[email_mobile,password] - login credentials
* @return: -
* Created by Ashok on 20.02.2019
*
*/
export const login = (data) => async(dispatch) => {
    try{
        let params = {email_mobile:"ashok.varatharaj@outlook.com",password:"GoldA300"};
        let post = postMethod(params);
        let url = `${DEV_URL}/auth/login`;
        const result = await(await fetch(url,post)).json();
        if(result && result.data !== undefined){            
            let {data,status} = result;
            dispatch({type:'USERDATA',payload:{data,status}});
            dispatch({type:'LOGIN',payload:{status:true}});
        }
    }catch(err){
        console.log(err);
    }
};

/*
*
* name: logout
* desc: logout and redirect to login page
* @param: -
* @return: -
* Created by Ashok on 20.02.2019
*
*/

export const logout = () => async(dispatch) => {
    try{
        dispatch({type:'USERDATA',payload:{data:{},status:false}});
        dispatch({type:'LOGIN',payload:{status:false}});
    }catch(err){
        console.log(err);
    }
};