import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";
import { setCookie, getCookie, deleteCookie } from "../utils/cookies";

export default class Settings extends Component {
  onChangeDropDown = e => {
    setCookie('lang', e.target.value.toLowerCase());
    window.location.reload();
  }

  logOut = () => {
    deleteCookie('token');
    window.location.reload();
  }

  render() {
    return (
      <div className="row float-right mb-2">
      <Form.Control as="select" defaultValue={getCookie("lang").toUpperCase()} onChange={this.onChangeDropDown} style={{width: "70px"}}>
        <option key="1">EN</option>
        <option key="2">VN</option>
      </Form.Control>
      <Button style={{backgroundColor: "rgba(40,40,40,0.2)", borderRadius: 0, borderColor: "rgba(40,40,40,0.2)", marginLeft: "10px", marginRight: "20px"}} id='off' onClick={this.logOut}>Log Out</Button>
      </div>

    );
  }
}