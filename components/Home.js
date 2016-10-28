import React from 'react';
import Link from 'next/link';
import { connect } from 'react-redux';

const Home = ({ counter }) => (
  <div>
    <h1>Home</h1>
    <pre>Counter: {counter}</pre>
    <Link href="/about">About</Link>
    <Link href="/counter">Counter</Link>
  </div>
);

export default connect(
  state => ({
    counter: state.counter.counter
  })
)(Home);
