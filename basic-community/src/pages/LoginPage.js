import React from 'react';
import LoginForm from '../containers/auth/LoginForm';
import AuthTemplate from '../components/auth/AuthTemplate';

const LoginPage = () => {
  return(
    <AuthTemplate>
      <LoginForm />
    </AuthTemplate>
  );
};

export default LoginPage;