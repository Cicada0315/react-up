import React from 'react';
import Card from 'react-bootstrap/Card';

const Post = (props) => {
    const { title, content, creator, files } =props.post
    return (
        <Card>
            <Card.Img variant="top" src={files} height="247" width="200"/>
            <Card.Body>
                <Card.Title>{title}-{creator}</Card.Title>
                <Card.Text>
                {content}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};
  
export default Post;