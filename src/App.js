import React from 'react';
import './App.css';
import Person from './Person/Person';

function App() {
  return (
    <div className="App">
      <h1>Hi, I'm a React app</h1>
      <p>This is really working!!!</p>
      <Person name="Max" age="28"/>
      <Person name="Manu" age="29"/>
      <Person name="Stephanie" age="26"/>
    </div>
  );
}

export default App;
