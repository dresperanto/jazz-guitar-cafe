import React, { Component } from 'react';
import { Link, withRouter, } from 'react-router-dom';

import { auth } from '../../firebase';
import * as routes from '../constants/routes';

const SignUpPage = ({ history }) =>
  <div className="ui raised very padded text container segment animated fadeIn" style={{ marginTop: "30px" }}>
    <h1>Sign Up</h1>
    <SignUpForm history={history} />
  </div>

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};


// const byPropKey = (propertyName, value) => () => ({
//   [propertyName]: value,
// });

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      email: '',
      passwordOne: '',
      passwordTwo: '',
      error: null,
    };
  }

  updateInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  onSubmit = (event) => {
    const {
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {
        this.setState({ ...INITIAL_STATE });
        history.push(routes.HOME);
      })
      .catch(error => {
        console.log(error);
      });

    event.preventDefault();

  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      email === '' ||
      username === '';

    return (

      <form className="ui form" onSubmit={this.onSubmit}>
        <div className="field">
          <label>Name</label>
          <input
            type="text"
            name="username"
            placeholder="Full Name"
            onChange={this.updateInput}
            value={this.state.username}
          />
        </div>
        <div className="field">
          <label>Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email Address"
            onChange={this.updateInput}
            value={this.state.email}
          />
        </div>
        <div className="field">
          <label>Password</label>
          <input
            type="password"
            name="passwordOne"
            placeholder="Password"
            onChange={this.updateInput}
            value={this.state.PasswordOne}
          />
        </div>
        <div className="field">
          <label>Confirm Password</label>
          <input
            type="password"
            name="passwordTwo"
            placeholder="Confirm Password"
            onChange={this.updateInput}
            value={this.state.PasswordTwo}
          />
        </div>
        <button disabled={isInvalid} type="submit" className="positive ui button">Sign up</button>


        {error && <p>{error.message}</p>}
      </form>

    );
  }
}

const SignUpLink = () =>
  <p>
    Don't have an account?
    {' '}
    <Link to={routes.SIGN_UP}>Sign Up</Link>
  </p>

export default withRouter(SignUpPage);

export {
  SignUpForm,
  SignUpLink,
};