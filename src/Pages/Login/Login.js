import React from 'react';
import './Login.css';
import Layout from '../../components/Layout/LayoutInicial/Layout';
import SignIn from './SignIn';
import ForgetPassword from './ForgetPassword';
import SignUp from './SignUp';

function Login() {
    return (
        <div>
            <Layout open={true} />
            <SignIn />
        </div>
    );
}

export default Login;