import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Member from './features/member/Member';
import Board from './features/board/Board';

function App() {
  return (
    <div className="App">
      <a href="/member">멤버    | </a>   
      <a href="/board">   게시글</a>
      <Routes>
        <Route path="/member" element={<Member />} />
        <Route path="/board" element={<Board />} />
      </Routes>
    </div>
  );
}

export default App;
