import React, { Component } from "react";
import { Table } from "react-bootstrap";
import { formatPrice } from "../utils/utils";

export default class Stats extends Component {
  render() {
    const $s = this.props.str;
    const idle = this.props.idle;
    return (
      <div>
        <Table bordered>
          <tbody>
            <tr>
              <th>{$s.str("accTotal")}</th>
              <td>{formatPrice(idle + this.props.market.totalVal)}</td>
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