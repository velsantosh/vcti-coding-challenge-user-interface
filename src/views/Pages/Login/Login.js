import React, { Component } from 'react';
import { HashRouter, Route, Switch, Link,withRouter,Redirect } from 'react-router-dom';
import axios from 'axios';

import { Button, Card, CardBody, CardGroup, Col, Container, Form, Input, InputGroup, InputGroupAddon, InputGroupText, Row } from 'reactstrap';
const DefaultLayout = React.lazy(() => import('../../../containers/DefaultLayout'));
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;
class Login extends Component {
  constructor(props){
    super(props);
    this.validateLogin = this.validateLogin.bind(this);
    this.state = {isLoginValidated:false};
  }

  validateLogin(e) {
    //this.setState({email:e.target.value});
    console.log(e);
    console.log('login');
    console.log(this.props);
    //this.props.history.push(`/dashboard`);
    //this.props.handleLogin('true');
    this.setState({
      isLoginValidated:true      
    });
  }

  componentWillMount(){
    console.log("Component mount");
    if(!this.state.isLoginValidated){
      axios.get('https://jsonplaceholder.typicode.com/users').then(
        response => {
          console.log(response);
          this.setState({
            permission:response.data          
          });
          
        }
      );
    }
    
  }

  render() {
    console.log(" login permission");
    console.log(this.state.permission);
    if(this.state.isLoginValidated){
      return (
        <Redirect to={{
          pathname: "/",          
          state: { isPermission: 'yes',
             permission:this.state.permission }
        }}/>
      );
    }
    else {
      return (
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="8">
                <CardGroup>
                  <Card className="p-4">
                    <CardBody>
                      <Form>
                        <h1>Login</h1>
                        <p className="text-muted">Sign In to your account</p>
                        <InputGroup className="mb-3">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-user"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="text" placeholder="Username" autoComplete="username" />
                        </InputGroup>
                        <InputGroup className="mb-4">
                          <InputGroupAddon addonType="prepend">
                            <InputGroupText>
                              <i className="icon-lock"></i>
                            </InputGroupText>
                          </InputGroupAddon>
                          <Input type="password" placeholder="Password" autoComplete="current-password" />
                        </InputGroup>
                        <Row>
                          <Col xs="6">
                            <Button color="primary" className="px-4" onClick={this.validateLogin}>Login</Button>
                          </Col>
                          <Col xs="6" className="text-right">
                            <Button color="link" className="px-0">Forgot password?</Button>
                          </Col>
                        </Row>
                      </Form>
                    </CardBody>
                  </Card>
                  <Card className="text-white bg-primary py-5 d-md-down-none" style={{ width: '44%' }}>
                    <CardBody className="text-center">
                      <div>
                        <h2>Sign up</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                          labore et dolore magna aliqua.</p>
                        <Link to="/register">
                          <Button color="primary" className="mt-3" active tabIndex={-1}>Register Now!</Button>
                        </Link>
                      </div>
                    </CardBody>
                  </Card>
                </CardGroup>
              </Col>
            </Row>
            
          </Container>
        </div>
      );
    }
  
  }
}

export default withRouter(Login);
