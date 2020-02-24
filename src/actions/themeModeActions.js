/*
*
* name: logout
* desc: logout and redirect to login page
* @param: -
* @return: -
* Created by Ashok on 20.02.2019
*
*/

export const switchTheme = () => async(dispatch) => {
    try{
        dispatch({type:'SWITCH_THEME',payload:{theme:"dark"}});
    }catch(err){
        console.log(err);
    }
};