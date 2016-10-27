import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { style, merge } from 'next/css';
import * as counterActions from '../stores/counter';

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <b>{counter}</b>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

export default connect(state => ({
  counter: state.counter.counter
}),
  dispatch => bindActionCreators(counterActions, dispatch)
)(Counter);