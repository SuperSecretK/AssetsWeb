import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatPrice } from "../utils/utils";

export default class TransferHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showDeposits() {
    return this.props.depositList.map((deposit, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{formatPrice(deposit.amount)}</td>
        <td>{deposit.desc}</td>
        <td>{deposit.date.toLocaleString()}</td>
      </tr>
    ));
  }

  showWithdraw() {
    return this.props.withdrawList.map((withdraw, index) => (
      <tr key={index}>
        <td>{index}</td>
        <td>{formatPrice(withdraw.amount)}</td>
        <td>{withdraw.desc}</td>
        <td>{withdraw.date.toLocaleString()}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div className="row">
        <div className="col-6">
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Deposit</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
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
              <th>Withdraw</th>
            </tr>
            <tr>
              <th>#</th>
              <th>Amount</th>
              <th>Description</th>
              <th>Date</th>
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