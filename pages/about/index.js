import React, { Component } from 'react';
import style from 'next/css';

export default class About extends Component {
  static async getInitialProps({ req }) {
    const users = await fetch('http://www.filltext.com/?rows=20&fname={firstName}&lname={lastName}')
      .then(r=>r.json());

    return {
      server: req ? true : false,
      users
    }
  }

  render() {
    const { server, users } = this.props;

    return (
      <div className={styles}>
        This page rendered on {server ? 'server' : 'browser'}
        <ul>
          {users.map((user, i) =>
            <li key={i}>
              {user.fname} {user.lname}
            </li>
          )}
        </ul>
      </div>
    )
  }
}

const styles = style({
  background: '#cacaca'
});