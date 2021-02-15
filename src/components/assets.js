import React, { Component } from "react";
import { Table, ListGroup } from "react-bootstrap";
import { crnc, formatPrice, ths } from "../utils/utils";
import { track } from "../utils/style";

export default class Assets extends Component {
  constructor(props) {
    super(props);
    this.state = {
      targetAsset: null
    };
    document.addEventListener('click', e => {
      if (e.target.className === 'asset') {
        this.setState({targetAsset: e.target.id});
      } else if (e.target.className !== 'asset' || e.target.id !== this.state.targetAsset) {
        this.setState({targetAsset: null});
      }
    });
  }

  showAssets() {
    const market = this.props.market;
    return this.props.list.map((asset, index) => {
      const marketPrice = market.market[asset.symbol];
      return (
        <tr key={index}>
          <td className="asset" id={asset.symbol} style={{maxWidth: "65px"}}>{asset.symbol}{this.renderAssetOption(asset.symbol)}</td>
          <td>{asset.vol}</td>
          <td>{formatPrice(asset.price)}</td>
          <td>{formatPrice(asset.capital)}</td>
          <td>{formatPrice(marketPrice)}</td>
          <td>{formatPrice(market.val[asset.symbol])}</td>
          <td style={track(market.pl[asset.symbol])}>{formatPrice(market.plv[asset.symbol])}</td>  
          <td style={track(market.pl[asset.symbol])}>{market.pl[asset.symbol]}</td>
        </tr>
      );
    });
  }

  renderAssetOption = (symbol) => {
    const target = this.state.targetAsset;
    const $s = this.props.str;
    if (target === null || symbol !== target) return;
    return (
      <ListGroup>
        <ListGroup.Item action target="_blank" href={`https://dstock.vndirect.com.vn/tong-quan/${target}`} style={{padding: "2px"}}>
          {`${$s.str("about")}`}
        </ListGroup.Item>
        <ListGroup.Item action target="_blank" href={`https://dchart.vndirect.com.vn/?symbol=${target}}&domain=https://trade.vndirect.com.vn&timeframe=D&language=vi`} style={{padding: "2px"}}>
        {$s.str("chart")}
        </ListGroup.Item>
      </ListGroup>
    )
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
            <th>{$s.str('avgCap')}</th>
            <th>{$s.str('totalCap')}</th>
            <th>{$s.str('market')}</th>
            <th>{$s.str('assetsVal')}</th>
            <th>{$s.str('plv')}</th>
            <th>{$s.str('pl')}</th>
          </tr>
        </thead>
        <tbody>
        {this.showAssets()}
          <tr>
            <th colSpan="3">{$s.str('total')}</th>
            <th>{formatPrice(this.props.cap)}</th>
            <th></th>
            <th>{formatPrice(this.props.market.totalVal)}</th>
            <th style={track(this.props.market.totalPlv)}>{formatPrice(this.props.market.totalPlv)}</th>
            <th style={track(this.props.market.totalPl)}>{this.props.market.totalPl}</th>
          </tr>
        </tbody>
      </Table>
      </div>
    );
  }
}