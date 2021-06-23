import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import ThumbsUp from '../../../images/ThumbsUp.png'
import View from '../../../images/view.png'
import Delete from '../../../images/Delete.ico'

const Post = (props) => {
    const { title, content, creator, files, likes, views } =props.post
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
            
            <Card.Footer>
                <img src={View} width="30" height="30" alt="logo"/>View{views}
                <img src={ThumbsUp} width="30" height="30" alt="logo"/>Like{likes}
                <img src={Delete} width="30" height="30" alt="logo"/>Delete
            </Card.Footer>
        </Card>
    );
};
  
export default Post;