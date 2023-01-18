import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { axiosDeleteMember, axiosPutMember } from './memberSlice';

const MemberList = ({ member }) => {
  const dispatch = useDispatch();

  const [isRevise, setIsRevise] = useState(false);
  const [nickname, setNickname] = useState(member.nickname);
  const [email, setEmail] = useState(member.email);

  const memberDelete = (id) => {
    dispatch(axiosDeleteMember(parseInt(id)));
    window.location.replace('/member'); // 페이지 새로고침 (임시방편)
  };

  const reviseFormToggle = (id) => {
    setIsRevise(!isRevise);
    setNickname(member.nickname);
    setEmail(member.email);
  };

  const memberPut = (id) => {
    const reviseMember = { email, nickname };
    const payload = [parseInt(id), reviseMember];
    // dispatch(axiosPutMember(parseInt(id), reviseMember));
    dispatch(axiosPutMember(payload));
    setIsRevise(!isRevise);
    window.location.replace('/member'); // 페이지 새로고침 (임시방편)
  };

  return (
    <div className="member-div">
      <h4>{member.member_id}</h4>
      {isRevise ? (
        <input
          value={nickname || ''}
          onChange={(e) => setNickname(e.target.value)}
        />
      ) : (
        <p>{member.nickname}</p>
      )}
      {isRevise ? (
        <input
          type="email"
          value={email || ''}
          onChange={(e) => setEmail(e.target.value)}
        />
      ) : (
        <p>{member.email}</p>
      )}
      <button onClick={() => reviseFormToggle(member.member_id)}>
        {isRevise ? '수정 취소' : '수정'}
      </button>
      {isRevise ? (
        <button onClick={() => memberPut(member.member_id)}>수정 완료</button>
      ) : (
        <></>
      )}
      <button onClick={() => memberDelete(member.member_id)}>삭제</button>
    </div>
  );
};

MemberList.defaultProps = {
  member: [],
};

export default MemberList;
