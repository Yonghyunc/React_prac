import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { unwrapResult } from '@reduxjs/toolkit';
import { axiosGetMembers } from './memberSlice';
import './Member.scss';
import MemberPost from './MemberPost';
import MemberList from './MemberList';

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

  return (
    <div>
      <MemberPost />
      <h2>멤버 리스트</h2>
      <div className="memberlist-div">
        {members.map((member) => (
          <MemberList member={member} key={member.member_id} />
        ))}
      </div>
    </div>
  );
};

export default Member;
