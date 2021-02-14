import React, { Component } from "react";
import { Form } from "react-bootstrap";
import { setCookie, getCookie } from "../utils/cookies";

export default class Settings extends Component {
  onChangeDropDown = e => {
    setCookie('lang', e.target.value.toLowerCase());
    window.location.reload();
  }

  render() {
    return (
      <Form.Control as="select" defaultValue={getCookie("lang").toUpperCase()} onChange={this.onChangeDropDown} style={{width: "70px"}}>
        <option key="1">EN</option>
        <option key="2">VN</option>
      </Form.Control>
    );
  }
}