import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';


const AuthProvider = ({children}) => {
    const [loading,setLoading]=useState(true)
    const [user,setUser]=useState(null);

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

    const signOutUser=()=>{
        setLoading(true)
        return signOut(auth)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);
            setLoading(false);
            console.log('current user in state',currentUser)
        })
        return ()=>unsubscribe();
    },[])

    const AuthInfo={
        loading,
        user,
        signOutUser,
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