import * as React from 'react';
import { Row, Col } from 'react-bootstrap';
import BlogList from './blogList/blogList';

const Home: React.FC<any> = ({}) => {
    return <>
    <Row className='.home-component'>
        <Col xs={12}>
            <BlogList />
        </Col>
    </Row>
    </>
}


export default Home;