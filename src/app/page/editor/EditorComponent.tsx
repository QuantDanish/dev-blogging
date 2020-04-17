import * as React from 'react';
import { Container } from 'react-bootstrap';
import { Input, Form, Textarea, Button } from 'Components/core';
import { required, lt, gt, isUrl } from 'Utils/validation';
import './editor.scss';

const Editor: React.FC = () => {
  return (
    <Container className="editor-component px-3">
      <h2>Create a new blog</h2>
      <Form className="d-flex flex-column h-100">
        <div className="w-100 my-2">
          <Input
            name="title"
            className="form-control lg-form-control"
            type="text"
            minLength={3}
            maxLength={200}
            placeholder="Enter blog title*"
            validations={[required, lt, gt]}
          />
        </div>
        <div className="w-100 my-2">
          <Input
            name="imageUrl"
            type="text"
            className="form-control lg-form-control"
            placeholder="Link for header image"
            validations={[isUrl]}
          />
        </div>
        <div className="w-100 my-2 editor-container">
          <Textarea
            name="content"
            type="text"
            className="h-100 form-control lg-form-control"
            placeholder="start from here"
            validations={[required, lt, gt]}
            minLength={100}
            maxLength={5000}
          />
        </div>
        <div className="w-100 my-2">
          <button type="button" className="btn btn-outline-primary mr-3">
            Save
          </button>
          <Button className="btn btn-outline-success">Publish</Button>
        </div>
      </Form>
    </Container>
  );
};

export default Editor;
