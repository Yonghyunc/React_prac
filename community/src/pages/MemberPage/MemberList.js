import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getMember } from '../../modules/member';
import './Member.css';

const MemberList = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.member.members);

  // React App -> Action Creator
  useEffect(() => {
    dispatch(getMember());
  }, [dispatch]);

  return (
    <div>
      <div className="memberlist-div">
        {members.map((member) => (
          <div className="member-div" key={member.member_id}>
            {member.member_id} : {member.nickname} - {member.email}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemberList;
