import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class TransferHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showDeposits() {
    return this.props.depositList.map((deposit, index) => (
      
      <tr key={index}>
        {console.log(deposit.date.toLocaleString())}
        <td>{index}</td>
        <td>{deposit.amount}</td>
        <td>{deposit.desc}</td>
        <td>{deposit.date.toLocaleString()}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
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
    );
  }
}