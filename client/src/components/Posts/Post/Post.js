import React from 'react';
import {Card, Col, Row} from 'react-bootstrap';
import ThumbsUp from '../../../images/ThumbsUp.png'
import View from '../../../images/view.png'
import Edit from '../../../images/edit.png'
import Delete from '../../../images/Delete.ico'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/postsAction'

import {
    Link
} from "react-router-dom";

const Post = (props) => {
    const dispatch=useDispatch();
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
                <Row>
                    <Col>
                    <img src={View} width="30" height="30" alt="logo"/>&nbsp;View&nbsp;{views}&nbsp;
                    <img onClick={()=>dispatch(likePost(_id))} src={ThumbsUp} width="30" height="30" alt="logo"/>&nbsp;Like&nbsp;{likes}
                    </Col>

                    <Col style={{textAlign: "right"}}>
                    <Link to={`/posts/${_id}/edit`} onClick={()=> props.setCurrentPostId(_id)} ><img src={Edit} width="30" height="30" alt="logo"/>Edit</Link>
                    <img onClick={()=>dispatch(deletePost(_id))} src={Delete} width="30" height="30" alt="logo"/>Delete
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};
  
export default Post;