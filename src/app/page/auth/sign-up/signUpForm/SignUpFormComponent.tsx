import * as React from 'react';
import { Form, FormGroup, Button } from 'react-bootstrap';

const logFormValue = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  let data = {};
  // (e.target as HTMLFormElement).children.forEach((element: HTMLElement) => {
  //   if (element.tagName === 'input') {
  //     data[element.nodeName] = element.nodeValue;
  //   }
  // });

  // console.log(data);
};

const SingUpForm: React.FC<any> = ({}) => {
  return (
    <Form className='singUpForm' onSubmit={logFormValue}>
      <FormGroup controlId='email'>
        <Form.Control
          size={'lg'}
          type='email'
          placeholder='Enter your email id'
        ></Form.Control>
      </FormGroup>

      <FormGroup controlId='password'>
        <Form.Control
          size={'lg'}
          type='password'
          placeholder='Enter password'
        ></Form.Control>
      </FormGroup>
      <FormGroup controlId='confirm-password'>
        <Form.Control
          size={'lg'}
          type='password'
          placeholder='Re-enter password'
        ></Form.Control>
        <Form.Text className='muted-text'></Form.Text>
      </FormGroup>

      <Button className='w-100 mt-5' variant='outline-primary' type='submit'>
        Sign Up
      </Button>
    </Form>
  );
};

export default SingUpForm;
