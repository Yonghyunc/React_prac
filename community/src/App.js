import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import LoginPage from './pages/LoginPage/LoginPage';
import SignupPage from './pages/SignupPage/SignupPage';
import MemberList from './pages/MemberPage/MemberList';
import MemberCreate from './pages/MemberPage/MemberCreate';

function App() {
  return (
    <div className="App">
      <a href="/login">LOGIN</a>
      <a href="/signup">SIGNUP</a>
      <br />
      <a href="/add">멤버 추가</a>
      <br />
      <a href="/board">게시글 목록</a>

      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/board" element={<ArticlePage />} />
        <Route path="/member" element={<MemberList />} />
        <Route path="/add" element={<MemberCreate />} />
      </Routes>
    </div>
  );
}

export default App;
