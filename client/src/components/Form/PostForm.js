import React, { useState } from 'react';
import { Form, Button, Card } from 'react-bootstrap';
import FileBase from 'react-file-base64';
import { useDispatch } from 'react-redux';
import { createPost } from '../../actions/postsAction'

const PostForm = () => {
    const dispatch = useDispatch();
    const [postinfo, setPostinfo] = useState({ creator: '', title: '', content: '', files: '' });

    const handleonChange = (e) => {
        setPostinfo({
            ...postinfo,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        dispatch(createPost(postinfo));
    }

    const clear=()=>{
        setPostinfo({
            creator: '', title: '', content: '', files: '' 
        })
    }

    return (
        <Card className="center">
            <h1 className="text-center">Create Post</h1>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    <Form.Group controlId="creator">
                    <Form.Label>creator</Form.Label>
                    <Form.Control type="text" name="creator" value={postinfo.creator} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="title">
                    <Form.Label>Title</Form.Label>
                    <Form.Control type="text" name="title" value={postinfo.title} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="content">
                    <Form.Label>content</Form.Label>
                    <Form.Control type="text" name="content" value={postinfo.content} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="content">
                    <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostinfo({ ...postinfo, files: base64 })} />
                    </Form.Group>

                    <Button variant="primary" type="submit">CreatePost</Button>
                    <Button variant="primary" onClick={clear}>Clear</Button>
                </Form>
            </div>
        </Card>
    );
};
  
export default PostForm;