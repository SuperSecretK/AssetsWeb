import React, { Component } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";

export default class InputForm extends Component {
  /**
   * options: {
   *  path: '/path',
   *  time: true/false,
   *  inputs: [...{name, type}],
   *  button: name
   * }
   */
  constructor(props) {
    super(props);
    this.state = { };
  }

  renderInputs() {
    return this.props.options.inputs.map((input, index) => (
      <Form.Group key={index}>
        <Form.Label>{input.name}</Form.Label>
        <Form.Control type={input.type} name={input.name} onChange={this.onChange} value={this.state[`${input.name}`]}/>
      </Form.Group>
    ));
  }

  onChange = e => {
    let obj = {};
    obj[e.target.name] = e.target.value; 
    this.setState(obj);
  }

  postReq() {
    axios.put(this.props.options.path, this.state)
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  onSubmit = e => {
    e.preventDefault();
    if (this.props.options.time) {
      this.setState({
        date: new Date()
      }, () => {
        this.postReq();
      });
    } else {
      this.postReq();
    }
  }

  render() {
    return (
      <Form onSubmit={this.onSubmit}>
        {this.renderInputs()}
        <Button className="login-btn" block style={{backgroundColor: "#f36523"}} type="submit" id="button">
          {this.props.options.button}
        </Button>
      </Form>
    );
  }
}