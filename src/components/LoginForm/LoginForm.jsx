import React from 'react';
import Input from '../Input/Input';
import {
  isValidName,
  isValidLastName,
  isValidEmail,
  isValidPassword,
  isTheSamePassword,
} from '../../helpers/verifiers/verifiers';

export default class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isValidFirstName: false,
      isValidLastName: false,
    };
  }

  render() {
    return (
      <div>
        <form>
          <Input type="text" text="First Name" verifier={isValidName} />
          <Input type="text" text="Last Name" verifier={isValidLastName} />
        </form>
      </div>
    );
  }
}
