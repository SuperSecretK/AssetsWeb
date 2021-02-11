import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Assets from "./assets";
import TradeHistory from "./tradeHistory";
import TransferHistory from "./transferHistory";

export default class Index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      depositHistory: [],
      withdrawHistory: [],
      idle: 0,
      assetsCapital: 0,
      netEarned: 0,
      tradeHistory: [],
      assets: [],
      key: 'assets'
    };
  }

  componentDidMount() {
    axios.get('/api/profile')
    .then(profile => {
      const { depositHistory, withdrawHistory, idle, assetsCapital, netEarned, tradeHistory, assets } = profile.data.profile;
      console.log(profile.data.profile);
      this.setState(state => ({
        depositHistory: [...depositHistory],
        withdrawHistory: [...withdrawHistory],
        idle: idle,
        assetsCapital: assetsCapital,
        netEarned: netEarned,
        tradeHistory: [...tradeHistory],
        assets: [...assets]
      }));
    })
    .catch(err => console.log(err));
  }

  setKey(key) {
    this.setState({key: key});
  }

  render() {
    return (
      <div>
        <Tabs
          id="controlled-tab-example"
          activeKey={this.key}
          onSelect={k => this.setKey(k)}
        >
          <Tab eventKey="assets" title="Assets">
            <Assets
              list={this.state.assets}
            />
          </Tab>
          <Tab eventKey="trades" title="Trades">
            <TradeHistory
              list={this.state.tradeHistory}
            />
          </Tab>
          <Tab eventKey="transfer" title="Transfer">
            <TransferHistory
              depositList={this.state.depositHistory}
              withdrawList={this.state.withdrawHistory}
            />
          </Tab>
        </Tabs>
      </div>
    )
  }
}