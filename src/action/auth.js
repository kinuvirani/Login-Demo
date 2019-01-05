import * as authService  from '../service/auth.js';
import {INVALID_USER,LOGIN_SUCCESSFULL,LOGOUT}  from '../reducer/auth.js';
export const loginuser=(credentials)=>{
    return(dispatch)=>{
        //delete credentials.password
        authService.login(credentials)
        .then((response)=>{
            //debugger;
            if(response.status===200)
            {
                localStorage.setItem("token",response.data.token)
                 dispatch({
                    type:LOGIN_SUCCESSFULL,
                    data:{token:response.data.token,role:"admin"}
                });
            }
        })
        .catch((error)=>{
            if(error.response)
            {
                dispatch({type:INVALID_USER,data:{err_msg:error.response.data.error}})
            }
        });
     }
};

export const logoutuser=()=>{
    return(dispatch)=>{
            dispatch({
                  type:LOGOUT
        });
        localStorage.removeItem("token");
        localStorage.removeItem("role");

     }
};