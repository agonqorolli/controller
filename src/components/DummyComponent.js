import React from 'react';
import Controller from '../Controller';

import '../App.css';

export class DummyComponent extends React.Component {
  constructor() {
    super();
    this.state = { prop: '', value: '' };
  }

  writeOnCore() {
    Controller.instance.editCore(this.state.prop, this.state.value);
    this.setState({ prop: '', value: '' })
  }

  render() {
    return (
      <div className='wrapperStyle'>
        <h2 className='subtitleStyle'>Dummy Component</h2>
        <div className='test' style={{ display: 'flex', flexDirection: 'row' }}>
          <input className='inputStyle' type="text" placeholder='property' value={this.state.prop} onChange={event => this.setState({ prop: event.target.value })} />
          <input className='inputStyle' type="text" placeholder='value' value={this.state.value} onChange={event => this.setState({ value: event.target.value })} />
        </div>
        <button className='buttonStyle' onClick={() => this.writeOnCore()}>Write on Core**</button>
      </div>
    )
  }
}