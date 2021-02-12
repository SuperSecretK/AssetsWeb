import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatDate, crnc, formatPrice, ths } from "../utils/utils";

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
          <td>{formatPrice(trade.buyPrice)}</td>
          <td>{formatPrice(trade.sellPrice)}</td>
          <td>{crnc((ths(trade.sellPrice) - ths(trade.buyPrice)) * trade.vol)}</td>
          <td>{trade.PL.toFixed(1)}</td>
          <td>{formatDate(trade.date)}</td>
        </tr>
      ) : (
        <tr key={index}>
          <td>{trade.type}</td>
          <td>{trade.symbol}</td>
          <td>{trade.vol}</td>
          <td>{formatPrice(trade.buyPrice)}</td>
          <td colSpan='3'></td>
          <td>{formatDate(trade.date)}</td>
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