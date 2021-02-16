import React, { Component } from "react";
import axios from "axios";
import { Button, Form, Col } from "react-bootstrap";
import { getCookie } from "../utils/cookies";

export default class InputForm extends Component {
  /**
   * options: {
    *  path: 'api/profile',
    *  query: String,
    *  dropdownQuery: String,
    *  time: Boolean,
    *  label: Boolean,
    *  placeholder: Boolean,
    *  inputs: [...{name, type}],
    *  button: String
   * }
   */
  constructor(props) {
    super(props);
    this.state = {
      query: this.props.options.dropdownQuery
    };
  }

  renderSelections(input) {
    return input.selections.map((select, index) => (
      <option key={index}>{select}</option>
    ));
  }

  renderInputs() {
    const opt = this.props.options;
    return opt.inputs.map((input, index) => (
      <Col>
      <Form.Group key={index}>
        {opt.label &&
          <Form.Label>{input.name}</Form.Label>
        }
        {input.type !== 'dropdown' ? (
          <Form.Control type={input.type} name={input.name} onChange={this.onChange} value={this.state[`${input.name}`]} placeholder={opt.placeholder && `${input.name}`}/>
        ) : (
          <Form.Control as="select" name={input.name} onChange={this.onChange} defaultValue={input.name}>
            {this.renderSelections(input)}
          </Form.Control>
        )}
      </Form.Group>
      </Col>
    ));
  }

  onChange = e => {
    let obj = {};
    obj[e.target.name] = e.target.value; 
    this.setState(obj);
    if (e.target.type !== 'text' &&
        e.target.type !== 'number' &&
        e.target.type !== 'password') {
          this.setState({query: e.target.value});
    }
  }

  postReq() {
    let path;
    const opt = this.props.options;
    if (opt.dropdownQuery !== '') {
      path = `${opt.path}/${this.state.query}`;
    } else {
      path = `${opt.path}/${opt.query}`;
    }
    console.log(path);
    axios.put(path, this.state, {
      headers: {
        'x-access-token': getCookie('token')
      }
    })
    .then(res => console.log(res.data))
    .catch(err => console.log(err));
  }

  onSubmit = e => {
    // e.preventDefault();
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
        <Form.Row>
        {this.renderInputs()}
        <Col>
        <Button className="login-btn" block style={{backgroundColor: "#f36523"}} type="submit" id="button">
          {this.props.options.button}
        </Button>
        </Col>
        </Form.Row>
      </Form>
    );
  }
}