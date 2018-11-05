import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";
import GuitaristForm from "../GuitaristForm/GuitaristForm";
import GuitaristEditForm from "../GuitaristEditForm/GuitaristEditForm";
import GuitaristList from "../GuitaristList/GuitaristList";
import GuitaristDetail from "../GuitaristDetail/GuitaristDetail";
import GuitaristDeck from "../GuitaristDeck/GuitaristDeck";
import AccountPage from "../Auth/Account";
import SignInPage from "../Auth/SignIn";
import SignUpPage from "../Auth/SignUp";
import PasswordForgetPage from "../Auth/PasswordForget";
import * as routes from "../constants/routes";

// Routes are stored in the routes file and imported

const Main = () => (
  <main>
    <Switch>
      <Route exact path={routes.LANDING} component={Home} />
      <Route exact path={routes.HOME} component={Home} />
      <Route exact path={routes.GUITARIST_LIST} component={GuitaristList} />
      <Route exact path={routes.GUITARIST_ADD} component={GuitaristForm} />
      <Route exact path={routes.GUITARIST_DETAIL} component={GuitaristDetail} />
      <Route exact path={routes.GUITARIST_EDIT} component={GuitaristEditForm} />
      <Route path="/deck" component={GuitaristDeck} />

      <Route exact path={routes.SIGN_UP} component={SignUpPage} />
      <Route exact path={routes.SIGN_IN} component={SignInPage} />

      <Route exact path={routes.ACCOUNT} component={AccountPage} />
      <Route
        exact
        path={routes.PASSWORD_FORGET}
        component={PasswordForgetPage}
      />
    </Switch>
  </main>
);

export default Main;
