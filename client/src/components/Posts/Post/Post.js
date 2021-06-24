import React from 'react';
import {Card, Col, Row, Button} from 'react-bootstrap';
import ThumbsUp from '../../../images/ThumbsUp.png'
import Edit from '../../../images/edit.png'
import Delete from '../../../images/Delete.ico'
import { useDispatch } from 'react-redux';
import { deletePost, likePost } from '../../../actions/postsAction'

import { Link } from "react-router-dom";

const Post = (props) => {
    const dispatch=useDispatch();
    const { title, content, creator, name, files, likes, _id } =props.post
    const user= JSON.parse(localStorage.getItem('userinfo'))
    return (
        <Card>
            <Row>
                <Col>
                    <Card.Img variant="top" src={files} height="400"/>
                </Col>

                <Col>
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">by. {name}</Card.Subtitle>
                        <Card.Text>
                        {content}
                        </Card.Text>
                    </Card.Body>
                </Col>
            </Row>
            
            <Card.Footer>
                <Row>
                    <Col>
                    <Button variant="light" onClick={()=>dispatch(likePost(_id))} disabled={!user}><img src={ThumbsUp} width="30" height="30" alt="logo"/></Button>{likes.length}&nbsp;Likes
                    </Col>

                    <Col style={{textAlign: "right"}}>
                    {user && ((user.result.googleId === creator || user.result._id === creator)) && 
                    (<><Link to={`/posts/${_id}/edit`} onClick={()=> props.setCurrentPostId(_id)} ><img src={Edit} width="30" height="30" alt="logo"/>Edit</Link>
                    <img onClick={()=>dispatch(deletePost(_id))} src={Delete} width="30" height="30" alt="logo"/>Delete</>)}
                    </Col>
                </Row>
            </Card.Footer>
        </Card>
    );
};
  
export default Post;