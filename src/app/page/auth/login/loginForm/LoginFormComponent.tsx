import * as React from 'react';
import { Card } from 'react-bootstrap';
import { Form, Button, Input } from 'Components/core';
import { required, isEmail } from 'Utils/validation';
import { log } from 'Services/loggerService';

const LoginForm: React.FC = () => {
  const formRef = React.useRef(null);

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    log(formRef.current);

    log('Login form value :: ', formRef.current.getValues());
    e.preventDefault();
  };

  return (
    <Card className="loginForm-component">
      <Card.Body>
        <Form ref={formRef} onSubmit={submitHandler}>
          <div className="form-group">
            <Input
              className="form-control form-control-lg"
              name="emailId"
              type="email"
              placeholder="Email Id"
              validations={[required, isEmail]}
            />
          </div>
          <div className="form-group">
            <Input
              className="form-control form-control-lg"
              name="password"
              type="password"
              placeholder="Password"
              validations={[required]}
            />
          </div>

          <Button className="btn btn-success w-100 my-1">Login</Button>
        </Form>
      </Card.Body>
    </Card>
  );
};

export default LoginForm;
