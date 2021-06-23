import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

const Auth = () => {
    const [isSignup, setSignup]=useState(false);
    const dispatch = useDispatch();
    const history = useHistory();

    const swichMode= (e) => {
        setSignup((prev)=> !prev);
    };

    const handleonChange = (e) => {
        this.setState({
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit=(e)=>{

    }

    const googleSuccess = async (res) => {
        const result = res.profileObj;
        const token = res.tokenId;
    
        try {
          dispatch({ type: 'AUTH', data: { result, token } });
          history.push('/');
        } catch (error) {
          console.log(error);
        }
    };
    
    const googleError = () => alert('Google Sign In was unsuccessful. Try again.');

    return (
        <Card className="center">
            <h1 className="text-center">{isSignup ? 'Sign up': 'Sign In'}</h1>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                        <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname"  onChange={handleonChange} />
                        </Form.Group>

                        <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    <Form.Group controlId="username">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="text" name="username" onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" onChange={handleonChange} />
                    </Form.Group>

                    {isSignup && (
                        <>
                        <Form.Group controlId="cpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="password" onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    
                    <Button variant="primary" type="submit">{isSignup ? 'Sign up': 'Sign In'}</Button><br/>
                    <GoogleLogin
                        clientId="715145258523-tgonv2p9tfca6flh3uf7isf1rtbb527o.apps.googleusercontent.com"
                        render={(renderProps) => (
                        <Button variant="primary" onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
                            Google Sign In
                        </Button>
                        )}
                        onSuccess={googleSuccess}
                        onFailure={googleError}
                        cookiePolicy="single_host_origin"
                    />

                    <Button variant="primary" onClick={swichMode}>{isSignup ? 'Already have an account? Sign In': "Don't have account? Sign up"}</Button><br/>
                </Form>
            </div>
        </Card>
    )
}

export default Auth
