import React, { Component } from "react";
import { Button, Form, Card } from "react-bootstrap";
import axios from 'axios';

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
    this.setState({
      password: e.target.value
    });
  }

  onSubmit = e => {
    e.preventDefault();
    axios.post('/login', {
      username: this.state.username,
      password: this.state.password
    }, {headers: this.headers})
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
      alert('Access denied');
    });
  }

  componentDidMount() {
    axios.get('/login')
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
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" onChange={this.onChangeUsername} value={this.state.username}/>
            </Form.Group>
            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" onChange={this.onChangePassword} value={this.state.password}/>
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