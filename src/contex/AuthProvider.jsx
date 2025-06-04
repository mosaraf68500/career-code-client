import React, { useEffect, useState } from 'react';
import { AuthContex } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../firebase/firebase.config';
import axios from 'axios';
const Provider=new GoogleAuthProvider();

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

    const SignInWithGoogle=()=>{
        setLoading(true);
        return signInWithPopup(auth,Provider)
    }

    useEffect(()=>{
        const unsubscribe=onAuthStateChanged(auth,currentUser=>{
            setUser(currentUser);


            setLoading(false);

            if(currentUser?.email){
                const userData={email:currentUser.email};
                console.log(userData)
                axios.post("http://localhost:3000/jwt",userData)
                .then(res=>{
                    console.log("token after jwt",res.data)
                })
                .catch(error=>console.log(error))

            }
            console.log('current user in state',currentUser)
        })
        return ()=>unsubscribe();
    },[])

    const AuthInfo={
        loading,
        user,
        SignInWithGoogle,
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