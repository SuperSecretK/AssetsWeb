import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Assets from "./assets";
import TradeHistory from "./tradeHistory";
import TransferHistory from "./transferHistory";
import InputForm from "./Form";

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
      key: 'assets',
      marketAssets: {}
    }; 
  }

  componentDidMount() {
    axios.get('/api/profile')
    .then(profile => {
      const { depositHistory, withdrawHistory, idle, assetsCapital, netEarned, tradeHistory, assets } = profile.data.profile;
      this.setState({
        depositHistory: [...depositHistory],
        withdrawHistory: [...withdrawHistory],
        idle: idle,
        assetsCapital: assetsCapital,
        netEarned: netEarned,
        tradeHistory: [...tradeHistory],
        assets: [...assets],
        marketAssets: profile.data.market
      });
    })
    .catch(err => console.log(err));
  }

  setKey(key) {
    if (key === 'submit') {
      
    }
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
              market={this.state.marketAssets}
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
          <Tab eventKey="submit" title="Submit">
            <InputForm
              options={{
                path: 'api/assets',
                query: '',
                dropdownQuery: 'buy',
                time: true,
                label: false,
                placeholder: true,
                inputs: [
                  {name: 'trade', type: 'dropdown', selections: ['buy', 'sell']},
                  {name: 'symbol', type: 'text'},
                  {name: 'price', type: 'number'},
                  {name: 'vol', type: 'number'},
                ],
                button: 'Submit'
              }}
            />
            
            <InputForm
              options={{
                path: 'api/profile',
                query: '',
                dropdownQuery: 'deposit',
                time: true,
                label: false,
                placeholder: true,
                inputs: [
                  {name: 'transfer', type: 'dropdown', selections: ['deposit', 'withdraw']},
                  {name: 'amount', type: 'number'},
                  {name: 'desc', type: 'text'}
                ],
                button: 'Submit'
              }}
            />
          </Tab>
        </Tabs>
        
      </div>
    )
  }
}