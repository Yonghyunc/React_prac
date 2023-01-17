import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import { axiosGetMembers, axiosDeleteMember } from './memberSlice';
import './Member.scss';
import MemberPost from './MemberPost';

const Member = () => {
  const dispatch = useDispatch();
  const { members } = useSelector((state) => state.member);

  useEffect(() => {
    dispatch(axiosGetMembers());
    // const apiAction = dispatch(axiosGetMembers());
    // unwrapResult 함수를 사용할 경우 바로 state의 값을 가져올 수 있다.
    // const members = unwrapResult(apiAction);
  }, [dispatch]);

  console.log(members);

  const memberDelete = (id) => {
    dispatch(axiosDeleteMember(id));
  };

  return (
    <div>
      <MemberPost />
      <h2>멤버 리스트</h2>
      <div className="memberlist-div">
        {members.map((member) => (
          <div className="member-div" key={member.member_id}>
            <h4>{member.member_id}</h4>
            <p>{member.nickname}</p>
            <p>{member.email}</p>
            <button onClick={memberDelete(member.member_id)}>삭제</button> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default Member;
