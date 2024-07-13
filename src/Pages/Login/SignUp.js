import React from 'react';
import './SignUp.css';
import Layout from '../../components/Layout/LayoutInicial/Layout';
import OrangeButton from '../../components/Button/OrangeButton';
import { Form, Row, Col, Input, FormGroup, Label, Button } from 'reactstrap';


function SignUp() {
    return (
        <div>
            <Layout open={true} />
            <div className='login'>
                <h1>Sign Up</h1>
                <div className='login-box'>
                    <Form>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="name">
                                        Name
                                    </Label>
                                    <Input
                                        id="name"
                                        name="name"
                                        placeholder="enter your first name"
                                        type="name"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="last">
                                        Last Name
                                    </Label>
                                    <Input
                                        id="last"
                                        name="last"
                                        placeholder="enter your last name"
                                        type="last"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <FormGroup>
                                    <Label for="email">
                                        Email
                                    </Label>
                                    <Input
                                        id="email"
                                        name="email"
                                        placeholder="email"
                                        type="email"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="pass">
                                        Password
                                    </Label>
                                    <Input
                                        id="pass"
                                        name="pass"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="cpass">
                                        Confirmation Password
                                    </Label>
                                    <Input
                                        id="cpass"
                                        name="cpass"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>
                        <Row>
                            <Col md={10}>
                                <FormGroup>
                                    <Label for="exampleSelect">
                                        Select your country
                                    </Label>
                                    <Input
                                        id="exampleSelect"
                                        name="select"
                                        type="select"
                                    >
                                        <option>
                                            Guatemala
                                        </option>
                                        <option>
                                            Mexico
                                        </option>
                                        <option>
                                            Honduras
                                        </option>
                                        <option>
                                            Nicaragua
                                        </option>
                                        <option>
                                            Costa Rica
                                        </option>
                                    </Input>
                                </FormGroup>
                            </Col>
                            <Col md={2}>
                                <FormGroup>
                                    <Label for="exampleZip">
                                        Zip
                                    </Label>
                                    <Input
                                        id="exampleZip"
                                        name="zip"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>


                        <FormGroup>
                            <Label for="address">
                                Address
                            </Label>
                            <Input
                                id="address"
                                name="address"
                                placeholder="1234 Main St"
                            />
                        </FormGroup>
                        <Row>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="phone">
                                        Phone Number
                                    </Label>
                                    <Input
                                        id="phone"
                                        name="phone"
                                    />
                                </FormGroup>
                            </Col>
                            <Col md={6}>
                                <FormGroup>
                                    <Label for="exampleDate">
                                        Date of Birth
                                    </Label>
                                    <Input
                                        id="exampleDate"
                                        name="date"
                                        placeholder="date placeholder"
                                        type="date"
                                    />
                                </FormGroup>
                            </Col>
                        </Row>

                        <OrangeButton className='button'>Let's go to shopping!</OrangeButton>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default SignUp;