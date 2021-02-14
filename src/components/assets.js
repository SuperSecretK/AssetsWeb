import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatDate, crnc, formatPrice, fp, ths } from "../utils/utils";
import { track } from "../utils/style";

export default class Assets extends Component {
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
    const $s = this.props.str
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>{$s.str('symbol')}</th>
              <th>{$s.str('volume')}</th>
              <th>{$s.str('cap')}</th>
              <th>{$s.str('capAvg')}</th>
              <th>{$s.str('market')}</th>
              <th>{$s.str('marketAvg')}</th>
              <th>{$s.str('plv')}</th>
              <th>{$s.str('pl')}</th>
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