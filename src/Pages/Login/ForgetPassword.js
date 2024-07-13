import React from 'react';
import './ForgetPassword.css';
import Layout from '../../components/Layout/LayoutInicial/Layout';
import OrangeButton from '../../components/Button/OrangeButton';
import { Col, Row, Label, Input, FormGroup, Form } from 'reactstrap';

function ForgetPassword() {
    return (
        <div>
            <Layout open={true} />
            <div className='login'>
                <h1>Forget Password</h1>
                <div className='login-box'>
                    <Form>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="email">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="enter your email"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <FormGroup>
                                    <Label for="pass">
                                        New Password
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
                                <FormGroup>
                                    <Label for="cpass">
                                        Confirmation Password
                                    </Label>
                                    <Input
                                        id="cpass"
                                        name="cpass"
                                        placeholder="confirm password"
                                        type="cpass"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={8}>
                                <OrangeButton className='button'>Change Password</OrangeButton>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>

    );
}

export default ForgetPassword;