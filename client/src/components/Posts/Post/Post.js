import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import ThumbsUp from '../../../images/ThumbsUp.png'
import View from '../../../images/view.png'
import Edit from '../../../images/edit.png'
import Delete from '../../../images/Delete.ico'

import {
    Link
} from "react-router-dom";

const Post = (props) => {
    const { title, content, creator, files, likes, views, _id } =props.post
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
                
                <Link to="/posts/edit" onClick={()=> props.setCurrentPostId(_id)}><img src={Edit} width="30" height="30" alt="logo"/>Edit</Link>
                
                <img src={Delete} width="30" height="30" alt="logo"/>Delete
            </Card.Footer>
        </Card>
    );
};
  
export default Post;