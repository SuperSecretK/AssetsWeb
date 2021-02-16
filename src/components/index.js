import React, { Component } from "react";
import { Tabs, Tab } from "react-bootstrap";
import axios from 'axios';
import Assets from "./assets";
import TradeHistory from "./tradeHistory";
import TransferHistory from "./transferHistory";
import InputForm from "./Form";
import Stats from "./stats";
import Settings from "./settings";
import Strings from "../resource/strings";
import { getCookie } from "../utils/cookies";

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
      marketAssets: {},
      isAdmin: false,
      strings: new Strings(getCookie('lang')),
      tradeNlss: {}
    };
  }


  componentDidMount() {
    axios.get('https://assetx.herokuapp.com/api/profile', {
      headers: {
        'x-access-token': getCookie('token')
      }
    })
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
        marketAssets: profile.data.market,
        tradeNlss: profile.data.tradeNlss
      });
    })
    .catch(err => console.log(err));
  }

  showIsAdmin() {
    return (
      <div>
      <input
        type="password" 
        onChange={e => {
          this.setState({code: e.target.value});
        }}
        value={this.state.code}
      />
      <button type="button" onClick={() => {
        if (this.state.code === 'noice') {
          this.setState({isAdmin: true});
        }
      }}>Enter</button>
      </div>
    );
  }

  setKey(key) {
    this.setState({key: key});
  }

  render() {
    const $s = this.state.strings;
    return (
      <div>
        <Settings str={this.state.strings}/>
        <br />
        <Stats
          idle={this.state.idle}
          list={this.state.assets}
          market={this.state.marketAssets}
          str={this.state.strings}
        />
        <br />
        <Tabs
          id="controlled-tab-example"
          activeKey={this.key}
          onSelect={k => this.setKey(k)}
          >
          <Tab eventKey="assets" title={$s.str("assets")}>
            <Assets
              list={this.state.assets}
              market={this.state.marketAssets}
              cap={this.state.assetsCapital}
              str={this.state.strings}
            />
          </Tab>
          <Tab eventKey="trades" title={$s.str("trades")}>
            <TradeHistory
              list={this.state.tradeHistory}
              nlss={this.state.tradeNlss}
              str={this.state.strings}
            />
          </Tab>
          <Tab eventKey="transfer" title={$s.str("transfer")}>
            <TransferHistory
              depositList={this.state.depositHistory}
              withdrawList={this.state.withdrawHistory}
              str={this.state.strings}
            />
          </Tab>
          <Tab eventKey="submit" title="Submit">
            { this.state.isAdmin ? (
              <div>
              <InputForm
                options={{
                  path: 'https://assetx.herokuapp.com/api/assets',
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
                  path: 'https://assetx.herokuapp.com/api/profile',
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
            </div>
            ) : (
              this.showIsAdmin()
            )}
          </Tab>
        </Tabs>
      </div>
    )
  }
}