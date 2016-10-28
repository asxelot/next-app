import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Link from 'next/link';
import * as counterActions from '../stores/counter';

const Counter = ({ counter, increment, decrement }) => (
  <div>
    <Link href="/">Home</Link>
    <b>{counter}</b>
    <button onClick={increment}>+</button>
    <button onClick={decrement}>-</button>
  </div>
);

Counter.propTypes = {
  counter: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired
};

export default connect(
  state => ({
    counter: state.counter.counter
  }),
  dispatch => bindActionCreators(counterActions, dispatch)
)(Counter);
