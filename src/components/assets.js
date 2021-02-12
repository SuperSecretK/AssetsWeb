import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showAssets() {
    const market = this.props.market;
    return this.props.list.map((asset, index) => {
      const marketPrice = market[`${asset.symbol}`]
      const pl = ((marketPrice - asset.price) / asset.price) * 100;
      return (
        <tr key={index}>
          <td>{asset.symbol}</td>
          <td>{asset.vol}</td>
          <td>{asset.price * 1000}</td>
          <td>{asset.capital * 1000}</td>
          <td>{marketPrice * 1000}</td>
          <td>{marketPrice * asset.vol * 1000}</td>
          <td>{asset.price * pl * asset.vol * 1000 / 100}</td>  
          <td>{pl}</td>
        </tr>
      );
    });
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