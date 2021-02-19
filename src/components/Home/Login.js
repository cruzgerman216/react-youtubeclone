import React from "react"
import {login} from "../../redux/actions/authActions"
import {connect} from 'react-redux'
import {Form, Button, Container} from 'react-bootstrap';
import {Link} from 'react-router-dom'
class Login extends React.Component{

    state = {
        email:'',
        password: ''
    }
    
    handleOnChange = (e) =>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }

    handleOnSubmit = (e) =>{
        e.preventDefault();
        this.props.login(this.state,this.props.history)

    }

    render(){
        return(
            <div>
                <Container style={{width:"30%", position:"absolute", top:"50%", left: "50%", transform: "translate(-50%, -50%)"}}>
                    <Form onSubmit={this.handleOnSubmit}> 
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" name="email" value={this.state.email} onChange={this.handleOnChange} />
                            <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control type="password" placeholder="Password"  name="password" value={this.state.password} onChange={this.handleOnChange} />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                            Login
                        </Button>
                        <Link style={{float:"right"}} to="/signup">Sign up</Link>
                    </Form>
                </Container>
            </div>
        )
    }
}

export default connect(null, {login})(Login);