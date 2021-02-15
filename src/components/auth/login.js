import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from 'axios';
import { setCookie } from "../../utils/cookies";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: ""
    };
    this.headers = {
      'Content-Type': 'application/json'
    };
  }

  onChangeUsername = e => {
    this.setState({
      username: e.target.value
    });
  }

  onChangePassword = e => {
    let obj = {};
    obj[e.target.name] = e.target.value; 
    this.setState(obj);
  }

  onChangeCheckbox = e => {
    if (e.target.checked) {
      setCookie('lang', 'en');
    } else {
      setCookie('lang', 'vn');
    }
  }

  onSubmit = e => {
    e.preventDefault();
    axios.post('https://assetx.herokuapp.com/login', this.state, {headers: this.headers})
    .then(res => {
      if (res.status === 200) {
        this.props.history.push('/profile');
      } else {
        const error = new Error(res.error);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Wrong username/password');
    });
  }

  componentDidMount() {
    setCookie('lang', 'vn');
    setCookie('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDJhNjVlMDMxMmFiYjI1NzA2YmU3NGUiLCJpYXQiOjE2MTM0MTE2NzksImV4cCI6MTYxMzQxNTI3OX0.NJjJ9iHutuXLcOucQLaK0QRFRJwulW-wOddPWPT0fWE');
    axios.get('https://assetx.herokuapp.com/login')
    .then(res => {
      this.setState({msg: res.data.text});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div className="li-form">
        <Card style={{ width: '25rem', margin: "auto", marginTop: "5%", marginBottom: "5px" }}>
          <Card.Body>
            <Form onSubmit={this.onSubmit}>
            <Form.Group>
              <Form.Check type="checkbox" label="Manager" onChange={this.onChangeCheckbox}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={this.onChangeUsername} value={this.state.username}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" name="password" onChange={this.onChangePassword} value={this.state.password}/>
            </Form.Group>
            <Button className="login-btn" block style={{backgroundColor: "#f36523"}} type="submit" id="button">
              Enter
            </Button>
            </Form>
          </Card.Body>
        </Card>   
      </div>   
    )
  }
}

export default Login;