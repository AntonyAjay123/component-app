import React from 'react';
import './App.css';
import {default as ComponentApp } from './ComponentApp';
import { getFacts } from './services';

function App() {
  return (
    <div >
      <ComponentApp getFacts={getFacts}/>
    </div>
  );
}

export default App;
