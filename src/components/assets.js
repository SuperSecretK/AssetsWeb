import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showAssets() {
    return this.props.list.map((asset, index) => (
      <tr key={index}>
        <td>{asset.symbol}</td>
        <td>{asset.vol}</td>
        <td>{asset.price}</td>
        <td>{asset.capital}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
        <td>{}</td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Symbol</th>
              <th>Volume</th>
              <th>Capital single</th>
              <th>Captical avg</th>
              <th>Market single</th>
              <th>Market avg</th>
              <th>Profit/Loss</th>
              <th>Profit/Loss %</th>
            </tr>
          </thead>
          <tbody>
          {this.showAssets()}
          </tbody>
        </Table>
      </div>
    );
  }
}