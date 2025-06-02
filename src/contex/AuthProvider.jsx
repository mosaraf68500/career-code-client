import React, { useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)

    // createuser

    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth,email,password);
    }

    // signIn
    const SingInUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password);

    }

    const AuthInfo={
        loading,
        createUser,
        SingInUser

    }
    return (
        <AuthContex value={AuthInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;