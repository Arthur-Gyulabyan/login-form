import React from 'react';
import Input from '../Input/Input';
import {
  isValidInput,
  isTheSamePassword,
} from '../../helpers/verifiers/verifiers';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidFirstName: false,
      isValidLastName: false,
      isValidEmail: false,
      isValidPassword: false,
      isValidPasswordRepeat: false,
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      passwordRepeat: '',
    };
  }

  handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    isValidInput(value, name)
      ? this.setState({
          [`isValid${name}`]: true,
          [`${name[0].toLowerCase() + name.slice(1)}`]: value,
        })
      : this.setState({ [`isValid${name}`]: false });
  };

  handlePasswordRepeatChange = (e) => {
    const value = e.target.value;

    isTheSamePassword(value, this.state.password)
      ? this.setState({ isValidPasswordRepeat: true, passwordRepeat: value })
      : this.setState({ isValidPasswordRepeat: false });
  };

  render() {
    return (
      <div>
        <form>
          <Input
            name="FirstName"
            type="text"
            text="First Name"
            isValid={this.state.isValidFirstName}
            validText="Valid"
            noValidText="No Valid"
            verifier={this.handleInputChange}
          />
          <Input
            name="LastName"
            type="text"
            text="Last Name"
            isValid={this.state.isValidLastName}
            validText="Valid"
            noValidText="No Valid"
            verifier={this.handleInputChange}
          />
          <Input
            name="Email"
            type="email"
            text="Email"
            isValid={this.state.isValidEmail}
            validText="Valid"
            noValidText="No Valid"
            verifier={this.handleInputChange}
          />
          <Input
            name="Password"
            type="password"
            text="Password"
            isValid={this.state.isValidPassword}
            validText="Valid"
            noValidText="No Valid"
            verifier={this.handleInputChange}
          />
          <Input
            name="PasswordRepeat"
            type="password"
            text="Repeat Password"
            isValid={this.state.isValidPasswordRepeat}
            validText="Valid"
            noValidText="No Valid"
            verifier={this.handlePasswordRepeatChange}
          />
        </form>
      </div>
    );
  }
}
