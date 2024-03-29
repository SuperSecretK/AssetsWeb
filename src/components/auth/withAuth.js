import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { getCookie } from '../../utils/cookies';

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
      axios.get('http://localhost:4000/checkToken', {
        headers: {
          'x-access-token': getCookie('token')
        }
      })
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