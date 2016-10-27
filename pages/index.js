import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { reducer, initStore } from '../redux/store';
import Link from 'next/link';
import Counter from '../components/Counter';

export default class Page extends Component {
  static getInitialProps({ req }) {
    const isServer = !!req;
    const store = initStore(reducer, undefined, isServer);

    return {
      initialState: store.getState(),
      isServer
    };
  }

  constructor(props) {
    super(props);

    this.store = initStore(reducer, props.initialState, props.isServer);
  }

  render() {
    return (
      <Provider store={this.store}>
        <Counter />
      </Provider>
    );
  }
}