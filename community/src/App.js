import { Route, Routes } from 'react-router-dom';
import './App.css';
import ArticlePage from './pages/ArticlePage/ArticlePage';
import LoginPage from './pages/LoginPage/LoginPage';
import MemberContainer from './pages/MemberPage/MemberContainer';
import SignupPage from './pages/SignupPage/SignupPage';

function App() {
  return (
    <div className="App">
      <a href="/login">LOGIN</a>
      <a href="/signup">SIGNUP</a>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/" element={<ArticlePage />} />
        <Route path="/member" element={<MemberContainer />} />
      </Routes>
    </div>
  );
}

export default App;
