import React, { Component } from "react";
import { Table } from "react-bootstrap";

export default class TradeHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showTrades() {
    return this.props.list.map((trade, index) => (
      trade.type === 'SELL' ? (
        <tr key={index}>
          <td>{trade.type}</td>
          <td>{trade.symbol}</td>
          <td>{trade.vol}</td>
          <td>{trade.buyPrice}</td>
          <td>{trade.sellPrice}</td>
          <td>{trade.PL * trade.buyPrice * trade.vol}</td>
          <td>{trade.PL}</td>
          <td>{trade.date}</td>
        </tr>
      ) : (
        <tr key={index}>
          <td>{trade.type}</td>
          <td>{trade.symbol}</td>
          <td>{trade.vol}</td>
          <td>{trade.buyPrice}</td>
          <td colSpan='3'></td>
          <td>{trade.date}</td>
        </tr>
      )
    ));
  }

  render() {
    return (
      <div>
        <Table bordered hover>
        <thead>
          <tr>
            <th>Type</th>
            <th>Symbol</th>
            <th>Volume</th>
            <th>Buy price</th>
            <th>Sell price</th>
            <th>Profit/Loss</th>
            <th>Profit/Loss %</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
        {this.showTrades()}
        </tbody>
      </Table>
      </div>
    );
  }
}