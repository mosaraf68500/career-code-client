import React from 'react';
import { AuthContex } from './AuthContex';

const AuthProvider = ({children}) => {

    const AuthInfo={

    }
    return (
        <AuthContex value={AuthInfo}>
            {children}
        </AuthContex>
    );
};

export default AuthProvider;