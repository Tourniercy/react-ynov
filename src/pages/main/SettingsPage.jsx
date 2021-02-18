import React from 'react';
import {Switch, Route, Redirect, NavLink} from "react-router-dom";
import SettingsProfile from "./settings/SettingsProfile";
import SettingsSubscription from "./settings/SettingsSubscription";

const SettingsPage = () => {
  return (
    <div>
      <h1>Settings page</h1>
      <div>
        <NavLink to={"/settings/profile"}>Profile</NavLink>
        <NavLink to={"/settings/subscription"}>Subcription</NavLink>
      </div>
      <Switch>
        <Route exact path="/settings" render={() => (<Redirect to={"/settings/profile"} />)}/>
        <Route path="/settings/profile" component={SettingsProfile}/>
        <Route path="/settings/subscription" component={SettingsSubscription}/>
      </Switch>
    </div>
  );
};

export default SettingsPage;