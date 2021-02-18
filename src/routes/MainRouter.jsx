import React from 'react';
import {NavLink, Redirect, Switch, Route} from 'react-router-dom'
import {userService} from "../services";
import MainPage from "../pages/main/MainPage";
import BlogPage from "../pages/main/BlogPage";
// import SettingsPage from "../../../router/src/pages/main/SettingsPage";

const MainRouter = () => {
  if(!userService.isLogged){
    return (
      <Redirect to={"/auth"} />
    )
  }
  return (
    <div>
      <header>
        <NavLink to={"/"}>Main Page</NavLink>
        <NavLink to={"/blog"}>Blog</NavLink>
        {/*<NavLink to={"/settings"}>Settings</NavLink>*/}
      </header>
      <Switch>
        <Route exact path={"/"} component={MainPage}/>
        <Route path={"/blog"} component={BlogPage}/>
        {/*<Route path={"/settings"} component={SettingsPage}/>*/}
        <Route path={"*"} render={() => <Redirect to={"/404"}/>}/>
      </Switch>
    </div>
  );
};

export default MainRouter;