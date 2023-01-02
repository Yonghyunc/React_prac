// import logo from './logo.svg';
import React from 'react';
import Container from './Contrainer';
import Counter from './Counter';
// import './App.css';

import MyHeader from './MyHeader';

function App() {
  const counterProps = {
    a: 1, 
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  }

  return (
    <Container>
      <div className="App">
        <MyHeader/>
        <Counter {...counterProps}/>
      </div> 
    </Container>
  );
}

export default App;
