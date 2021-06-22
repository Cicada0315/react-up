import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';

const Post = (props) => {
    const { title, content, creator, files } =props.post
    return (
        <Card>
            <Row>
                <Col>
                <Card.Img variant="top" src={files} height="400"/>
                </Col>

                <Col>
                <Card.Body>
                    <Card.Title>{title}-{creator}</Card.Title>
                    <Card.Text>
                    {content}
                    </Card.Text>
                </Card.Body>
                </Col>
            </Row>
        </Card>
    );
};
  
export default Post;