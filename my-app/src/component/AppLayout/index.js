import React from "react";
import { BrowserRouter, Route, Link, Switch } from "react-router-dom";
import Login from "../../Pages/Login";
import SignUp from "../../Pages/SignUp";

class AppLayout extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/signup" component={SignUp} />
          <Route render={() => <h1>Page not found</h1>} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default AppLayout;
