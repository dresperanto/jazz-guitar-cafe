import React from "react";

import AuthUserContext from "../../AuthUserContext";
import { PasswordForgetForm } from "./PasswordForget";
import PasswordChangeForm from "./PasswordChange";
import withAuthorization from "../../withAuthorization";

const AccountPage = () => (
  <AuthUserContext.Consumer>
    {authUser => (
      <div
        className="ui raised very padded text container segment animated fadeIn"
        style={{ marginTop: "30px" }}
      >
        <h1>Account: {authUser.email}</h1>
        <h4 className="ui horizontal divider header">
          <i className="mail icon" />
          Forget password
        </h4>
        <PasswordForgetForm />
        <h4 className="ui horizontal divider header">
          <i className="lock icon" />
          Change Password
        </h4>
        <PasswordChangeForm />
      </div>
    )}
  </AuthUserContext.Consumer>
);

const authCondition = authUser => !!authUser;

export default withAuthorization(authCondition)(AccountPage);
