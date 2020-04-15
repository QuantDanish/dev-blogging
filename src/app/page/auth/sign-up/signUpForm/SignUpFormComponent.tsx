import * as React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';
import { log } from 'Services/loggerService';

const logFormValue = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  log('form submitted');
};

const SingUpForm: React.FC = () => {
  return (
    <Form className="singUpForm" onSubmit={logFormValue}>
      <FormGroup controlId="first-name">
        <Form.Control size="lg" type="text" placeholder="First Name" />
      </FormGroup>
      <FormGroup controlId="last-name">
        <Form.Control size="lg" type="text" placeholder="Last Name" />
      </FormGroup>
      <FormGroup controlId="email">
        <Form.Control
          size="lg"
          type="email"
          placeholder="Enter your email id"
        />
      </FormGroup>

      <FormGroup controlId="password">
        <Form.Control size="lg" type="password" placeholder="Enter password" />
      </FormGroup>
      <FormGroup controlId="confirm-password">
        <Form.Control
          size="lg"
          type="password"
          placeholder="Re-enter password"
        />
        <Form.Text className="muted-text" />
      </FormGroup>

      <Button className="w-100 mt-5" variant="outline-success" type="submit">
        Sign Up
      </Button>
    </Form>
  );
};

export default SingUpForm;
