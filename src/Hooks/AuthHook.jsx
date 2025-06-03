import React, { use } from 'react';
import { AuthContex } from '../contex/AuthContex';

const AuthHook = () => {
    const AuthInfo=use(AuthContex);
    return AuthInfo
};

export default AuthHook;