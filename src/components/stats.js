import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatPrice } from "../utils/utils";

export default class Stats extends Component {
  assetsValue(list, market) {
    let val = 0;
    for (const asset of list) {
      val += market[asset.symbol] * asset.vol;
    }
    return val;
  }

  render() {
    const $s = this.props.str;
    const idle = this.props.idle;
    return (
      <div>
        <Table bordered>
          <tbody>
            <tr>
              <th>{$s.str("accTotal")}</th>
              <td>{formatPrice(idle + this.assetsValue(this.props.list, this.props.market))}</td>
            </tr>
            <tr>
              <th>{$s.str("idle")}</th>
              <td>{formatPrice(idle)}</td>
            </tr>
          </tbody>
        </Table>
      </div>
    );
  }
}