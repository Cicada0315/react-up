import React, { useState } from 'react'
import { Form, Button, Card } from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signin, signup } from '../../actions/authAction'

const Auth = () => {
    const [isSignup, setSignup]=useState(false);
    const [inputs, setInputs]=useState({ firstname: '', lastname: '', email: '', password: '', cpassword: '' });
    const dispatch = useDispatch();
    const history = useHistory();

    const swichMode= (e) => {
        setSignup((prev)=> !prev);
    };

    const handleonChange = (e) => {
        setInputs({
          ...inputs,
          [e.target.name]: e.target.value
        });
    };

    const handleSubmit=(e)=>{
        e.preventDefault();
        if(isSignup){
            dispatch(signup(inputs, history));
        }else{
            dispatch(signin(inputs, history));
        }
    };

    const googleSuccess = async (res) => {
        //console.log(res);
        const result = res.profileObj;
        const token = res.tokenId;
    
        try {
          dispatch({ type: 'AUTH', data: { result, token } });
          history.push('/');
        } catch (error) {
          console.log(error);
        }
    };
    
    const googleFails = () => alert('Google Sign In failed. Try again.');

    return (
        <Card className="center">
            <h1 className="text-center">{isSignup ? 'Sign up': 'Sign In'}</h1>
            <div className="login-form">
                <Form onSubmit={handleSubmit}>
                    {isSignup && (
                        <>
                        <Form.Group controlId="firstname">
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text" name="firstname" value={inputs.firstname} onChange={handleonChange} />
                        </Form.Group>

                        <Form.Group controlId="lastname">
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text" name="lastname" value={inputs.lastname} onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    <Form.Group controlId="username">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" name="email" value={inputs.email} onChange={handleonChange} />
                    </Form.Group>

                    <Form.Group controlId="password">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" value={inputs.password} onChange={handleonChange} />
                    </Form.Group>

                    {isSignup && (
                        <>
                        <Form.Group controlId="cpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control type="password" name="cpassword" value={inputs.cpassword} onChange={handleonChange} />
                        </Form.Group>
                        </>
                    )}
                    
                    <Button variant="primary" type="submit">{isSignup ? 'Sign up': 'Sign In'}</Button><br/>
                    <GoogleLogin
                        clientId="715145258523-tgonv2p9tfca6flh3uf7isf1rtbb527o.apps.googleusercontent.com"
                        onSuccess={googleSuccess}
                        onFailure={googleFails}
                        cookiePolicy="single_host_origin"
                    />
                    <br/>
                    <p variant="primary" onClick={swichMode}>{isSignup ? 'Already have an account? Sign In': "Don't have account? Sign up"}</p><br/>
                </Form>
            </div>
        </Card>
    )
}

export default Auth