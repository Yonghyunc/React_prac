import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { axiosPostNewMember } from './memberSlice';
import './Member.scss';

const MemberPost = () => {
  const dispatch = useDispatch();

  const [ nickname, setNickname ] = useState('');
  const [ email, setEmail ] = useState('');

  const memberPostSubmit = (e) => {
    e.preventDefault();

    if (nickname.length < 1) {
      return ;
    }

    const newMember = {email, nickname};
    dispatch(axiosPostNewMember(newMember));
    setNickname('');
    setEmail('');
  };

  return (
    <form className="member-post-form" onSubmit={memberPostSubmit}>
      <h3>멤버 추가</h3>
      <div className="member-input">
        <label htmlFor="nickname">닉네임</label>
        <input 
          id="nickname" 
          type="text" 
          value={nickname} 
          onChange={e => setNickname(e.target.value)}
        />
      </div>
      <div className="member-input">
        <label htmlFor="email">이메일</label>
        <input 
          id="email" 
          type="email" 
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <button type='submit'>완료</button>
    </form>
  )
};

export default MemberPost;