import * as React from 'react';
import { Form, Button, Input } from 'Components/core';
import { log } from 'Services/loggerService';
import {
  required,
  isEmail,
  gt,
  samePassword,
  weekPassword,
} from 'Utils/validation';

const SingUpForm: React.FC = () => {
  const form = React.useRef(null);
  const logFormValue = (e: React.FormEvent<HTMLFormElement>) => {
    const f = form.current as HTMLFormElement;
    log(f.getValues());
    log('form submitted');
    e.preventDefault();
  };
  return (
    <Form ref={form} className="singUpForm form" onSubmit={logFormValue}>
      <div className="form-group">
        <Input
          name="firstName"
          className="form-control form-control-lg"
          type="text"
          placeholder="First Name"
          minLength={3}
          validations={[required, gt]}
        />
      </div>
      <div className="form-group">
        <Input
          name="lastName"
          className="form-control form-control-lg"
          type="text"
          placeholder="Last Name"
          minLength={3}
          validations={[required, gt]}
        />
      </div>
      <div className="form-group">
        <Input
          name="email"
          className="form-control form-control-lg"
          type="email"
          placeholder="Email Id"
          validations={[required, isEmail]}
        />
      </div>
      <div className="form-group">
        <Input
          name="password"
          className="form-control form-control-lg"
          type="password"
          placeholder="Password"
          validations={[required, weekPassword, samePassword]}
        />
      </div>
      <div className="form-group">
        <Input
          name="confirmPassword"
          className="form-control form-control-lg"
          type="password"
          placeholder="Re-enter Password"
          validations={[required, samePassword]}
        />
      </div>

      <Button className="btn btn-success w-100 mt-5" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SingUpForm;
