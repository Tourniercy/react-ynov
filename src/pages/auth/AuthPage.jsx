import React from 'react';
import {useHistory} from 'react-router-dom'
import AuthForm from "../../components/AuthForm";
import {userService} from "../../services/User-service";

const AuthPage = () => {
  const history = useHistory()
  function onLogin({email, password}){
    userService.login({email, password}).then(
      () => history.push('/')
    )
  }
  return (
    <div>
      <AuthForm onSubmit={onLogin}/>
    </div>
  );
};

export default AuthPage;