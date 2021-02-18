import React, {useState} from 'react';
import PropTypes from "prop-types";
import {Form, Button, Container, Row, Col} from "react-bootstrap";


const AuthForm = ({onSubmit}) => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    function onSubmitForm(e){
        e.preventDefault()
        onSubmit({
            email,
            password
        })
    }

    return (
        <Container>
            <Row>
                <Col>
            <Form onSubmit={onSubmitForm}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
                </Col>
            </Row>
        </Container>
    );
};

export default AuthForm;


AuthForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}