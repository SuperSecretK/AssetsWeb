import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';

export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }

    componentDidMount() {
      // const axiosConfig = {
      //   headers: {
      //   'content-Type': 'application/json',
      //   "Accept": "*/*",
      //   "Cache-Control": "no-cache",
      //   "Cookie": 'token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MDJhNjVlMDMxMmFiYjI1NzA2YmU3NGUiLCJpYXQiOjE2MTM0MTE2NzksImV4cCI6MTYxMzQxNTI3OX0.NJjJ9iHutuXLcOucQLaK0QRFRJwulW-wOddPWPT0fWE'
      //   },
      //   withCredentials: true
      //   };
      axios.get('https://assetx.herokuapp.com/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            console.log(res);
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.log(err);
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }

    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/" />;
      }
      return (
        <div>
        <ComponentToProtect {...this.props} />
        </div>
      );
    }
  }
}