import React, { use } from 'react';
import { AuthContex } from '../contex/AuthContex';
import { Navigate, useLocation } from 'react-router';

const PrivateRoutes = ({children}) => {

    const{user,loading}=use(AuthContex);
    const location=useLocation();

    if(loading){
        return <h>loading....</h>
    }
    if(!user){
       return <Navigate to="/signIn" state={location.pathname}></Navigate>
    }
    return children;
};

export default PrivateRoutes;