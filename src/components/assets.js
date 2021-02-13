import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatDate, crnc, formatPrice, fp, ths } from "../utils/utils";
import { track } from "../utils/style";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  showAssets() {
    const market = this.props.market;
    return this.props.list.map((asset, index) => {
      const marketPrice = market[`${asset.symbol}`]
      const pl = (((marketPrice - asset.price) / asset.price) * 100).toFixed(1);
      const plv = ths(marketPrice * asset.vol) - ths(asset.capital);
      return (
        <tr key={index}>
          <td>{asset.symbol}</td>
          <td>{asset.vol}</td>
          <td>{formatPrice(asset.price)}</td>
          <td>{formatPrice(asset.capital)}</td>
          <td>{formatPrice(marketPrice)}</td>
          <td>{formatPrice(marketPrice * asset.vol)}</td>
          <td style={track(plv)}>{crnc(plv)}</td>  
          <td style={track(pl)}>{pl}</td>
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