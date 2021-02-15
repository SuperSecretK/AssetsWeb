import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatDate, formatPrice } from "../utils/utils";
import { track } from "../utils/style";

export default class TradeHistory extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showTrades($s) {
    return this.props.list.map((trade, index) => {
      return trade.type === 'SELL' ? (
        <tr key={index}>
          <td>{$s.str("sell")}</td>
          <td>{trade.symbol}</td>
          <td>{trade.vol}</td>
          <td>{formatPrice(trade.buyPrice)}</td>
          <td>{formatPrice(trade.sellPrice)}</td>
          <td style={track(trade.PLV)}>{formatPrice(trade.PLV)}</td>
          <td style={track(trade.PL)}>{trade.PL.toFixed(1)}</td>
          <td>{formatDate(trade.date)}</td>
        </tr>
      ) : (
        <tr key={index}>
          <td>{$s.str("buy")}</td>
          <td>{trade.symbol}</td>
          <td>{trade.vol}</td>
          <td>{formatPrice(trade.buyPrice)}</td>
          <td colSpan='3'></td>
          <td>{formatDate(trade.date)}</td>
        </tr>
      )
    });
  }

  render() {
    const $s = this.props.str;
    return (
      <div>
        <Table bordered hover>
        <thead>
          <tr>
            <th>{$s.str("type")}</th>
            <th>{$s.str("symbol")}</th>
            <th>{$s.str("volume")}</th>
            <th>{$s.str("buyPrice")}</th>
            <th>{$s.str("sellPrice")}</th>
            <th>{$s.str("plv")}</th>
            <th>{$s.str("pl")}</th>
            <th>{$s.str("date")}</th>
          </tr>
        </thead>
        <tbody>
        {this.showTrades($s)}
        <th colSpan='5'>{$s.str("total")}</th>
        <th style={track(this.props.nlss.totalPlv)}>{formatPrice(this.props.nlss.totalPlv)}</th>
        <th style={track(this.props.nlss.totalPl)}>{this.props.nlss.totalPl}</th>
        <th></th>
        </tbody>
      </Table>
      </div>
    );
  }
}