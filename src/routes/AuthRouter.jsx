import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import {userService} from "../services";

const AuthRouter = () => {
  console.log('auth router')
  if(userService.isLogged){
    return (
      <Redirect to={"/"} />
    )
  }
  return (
    <div>
      <Switch>
        <Route path={"/auth"} component={AuthPage}/>
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default AuthRouter;