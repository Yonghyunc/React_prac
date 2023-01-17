import { useRef, useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '../../components/Button';
import { addMember } from '../../modules/member';

const MemberCreate = () => {
  const [email, setEmail] = useState('');
  const [nickname, setNickname] = useState('');

  // const maxId = members.reduce((prev, value) => {
  //   return prev.member_id >= value.member_id ? prev : value
  // });

  const dispatch = useDispatch();

  const nicknameInput = useRef();
  // const member_id = useRef(3)

  const onCreate = (email, nickname) => {
    const newMember = {
      email,
      // member_id: member_id.current,
      nickname,
    };
    // member_id.current += 1;
    console.log(newMember);
    dispatch(addMember(newMember));
    console.log('갔다옴');
  };

  const memberSubmit = (e) => {
    e.preventDefault();

    if (nickname.length < 1) {
      nicknameInput.current.focus();
      return;
    }
    onCreate(email, nickname);
    console.log('저장 성공');
    setEmail('');
    setNickname('');
  };

  return (
    <div>
      <h2>멤버 등록</h2>
      <form onSubmit={memberSubmit}>
        <div>
          <label htmlFor="email">이메일</label>
          <input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="nickname">닉네임</label>
          <input
            ref={nicknameInput}
            id="nickname"
            type="text"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
        </div>
        <Button text={'제출'} type="submit" />
      </form>
    </div>
  );
};

export default MemberCreate;
