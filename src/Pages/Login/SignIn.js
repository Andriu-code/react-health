import React from 'react';
import './SignIn.css';
import Layout from '../../components/Layout/LayoutInicial/Layout';
import OrangeButton from '../../components/Button/OrangeButton';
import { Link } from 'react-router-dom';
import { Col, Row, Label, Input, FormGroup, Form } from 'reactstrap';

function SignIn() {
    return (
        <div>
            <div className='login'>
                <h1>Login</h1>
                <div className='login-box'>
                    <Form>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="name">
                                        Email
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="enter your email"
                                        type="name"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="pass">
                                        Password
                                    </Label>
                                    <Input
                                        id="pass"
                                        name="pass"
                                        placeholder="password"
                                        type="pass"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <OrangeButton className='button'>Login</OrangeButton>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <Link className="link">
                                    Forget your password?
                                </Link>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <Link className="link">
                                    Sign up and go to the shop!
                                </Link>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>


    );
}

export default SignIn;