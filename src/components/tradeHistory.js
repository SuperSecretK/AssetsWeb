import React, { Component } from "react";
// import { Button, Form, Card } from "react-bootstrap";
import axios from 'axios';

export default class TradeHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    axios.get()
    .then(res => {
      this.setState({msg: res.data.text});
    })
    .catch(err => console.log(err));
  }

  render() {
    return (
      <div></div>
    );
  }
}