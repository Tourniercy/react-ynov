import React from 'react';
import {Redirect, Route, Switch} from "react-router-dom";
import AuthPage from "../pages/auth/AuthPage";
import {userService} from "../services";

const AuthRouter = () => {
  if(userService.isLogged){
    return (
      <Redirect to={"/blog"} />
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