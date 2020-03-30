import * as React from 'react';

import './footer.scss';

const Footer: React.FC<any> = ({}) => {
  return (
    <footer className="footer-component text-muted">
      <div className="container">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
        <p>
          Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley
          of type and scrambled it to make a type specimen book
        </p>
        <p className="text-center"> © {new Date().getFullYear()} Copyright Dev Blogging</p>
      </div>
    </footer>
  );
};

export default Footer;
