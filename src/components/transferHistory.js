import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatPrice, formatDate } from "../utils/utils";

export default class TransferHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showDeposits() {
    return this.props.depositList.map((deposit, index) => {
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{formatPrice(deposit.amount)}</td>
          <td>{deposit.desc}</td>
          <td>{formatDate(deposit.date)}</td>
        </tr>
      );
    });
  }

  showWithdraw() {
    return this.props.withdrawList.map((withdraw, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{formatPrice(withdraw.amount)}</td>
        <td>{withdraw.desc}</td>
        <td>{formatDate(withdraw.date)}</td>
      </tr>
    ));
  }

  render() {
    const $s = this.props.str;
    return (
      <div className="row">
        <div className="col-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{$s.str("deposit")}</th>
            </tr>
            <tr>
              <th>#</th>
              <th>{$s.str("amount")}</th>
              <th>{$s.str("desc")}</th>
              <th>{$s.str("date")}</th>
            </tr>
          </thead>
          <tbody>
          {this.showDeposits()}
          </tbody>
        </Table>
        </div>
        <div className="col-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{$s.str("withdraw")}</th>
            </tr>
            <tr>
              <th>#</th>
              <th>{$s.str("amount")}</th>
              <th>{$s.str("desc")}</th>
              <th>{$s.str("date")}</th>
            </tr>
          </thead>
          <tbody>
          {this.showWithdraw()}
          </tbody>
        </Table>
        </div>
      </div>
    );
  }
}