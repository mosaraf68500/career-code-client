import React, { useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
// import { createUserWithEmailAndPassword } from 'firebase/auth/cordova';

const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)

    // createuser

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const AuthInfo={
        loading,
        createUser,

    }
    return (
        <AuthContex value={AuthInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;