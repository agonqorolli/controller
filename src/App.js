import React from 'react';
import { DummyComponent } from './components/DummyComponent';
import { VeryFarComponent } from './components/VeryFarComponent';

import './App.css';

function App() {

  return (
    <div className='bodyStyle' id='test' >
      <h1 className='titleStyle'>Pure JavaScript pattern* for state management</h1>
      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <DummyComponent />
        <VeryFarComponent />
      </div>
      <p className='paragraphStyle'>*A detailed explanation can be found <a className='linkStyle' rel="noopener noreferrer" href="https://medium.com/@agonqorolli/pure-javascript-pattern-for-state-management-75fedf0916f6" target="_blank">here</a>. While the GitHub repo is <a className='linkStyle' rel="noopener noreferrer" href="https://github.com/agonqorolli/controller" target="_blank">here</a>.</p>
      <p className='paragraphStyle'>**For testing purpose, Core object is exposed in window/console via the getter Controller.core</p>
      <p className='paragraphStyle'>***Controller class exposes the next() function, which in VeryFarComponent is implemented only to log the updated core. Write something in core and inspect console, but don't forget to subscribe first!</p>
    </div>
  );
}

export default App;
