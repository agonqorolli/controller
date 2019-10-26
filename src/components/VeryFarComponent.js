import React from 'react';
import Controller from '../Controller';

import '../App.css';

export class VeryFarComponent extends React.Component {
  constructor() {
    super();
    this.state = { subscribed: false };
  }

  next(core) {
    console.log('Updated core emitted to VeryFarComponent: ', core);
  }

  subscribe() {
    Controller.instance.subscribe(this);
    this.setState({ subscribed: true });
  }

  unsubscribe() {
    Controller.instance.unsubscribe(this);
    this.setState({ subscribed: false });
  }

  render() {
    return (
      <div className='wrapperStyle'>
        <h2 className='subtitleStyle'>Very Far Component***</h2>
        <button className='buttonStyle' onClick={() => this.subscribe(this)}>{this.state.subscribed ? 'Subscribed' : 'Subscribe >>'}</button>
        <button className='buttonStyle' onClick={() => this.unsubscribe(this)}>{this.state.subscribed ? 'Unsubscribe >>' : 'Unsubscribed'}</button>
      </div >
    )
  }
}