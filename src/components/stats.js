import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatPrice, formatDate, crnc, ths } from "../utils/utils";

export default class Stats extends Component {
  assetsValue(list, market) {
    let val = 0;
    for (const asset of list) {
      val += market[asset.symbol] * asset.vol;
    }
    return val;
  }

  render() {
    const idle = this.props.idle;
    return (
      <div>
        <Table bordered>
          <tbody>
            <tr>
              <th>Account total</th>
              <td>{formatPrice(idle + this.assetsValue(this.props.list, this.props.market))}</td>
            </tr>
            <tr>
              <th>Idle</th>
              <td>{formatPrice(idle)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}