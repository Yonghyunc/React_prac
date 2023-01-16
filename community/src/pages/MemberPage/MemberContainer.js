import { useEffect } from 'react';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import { getMember } from '../../modules/member';
import MemberList from './MemberList';

const MemberContainer = () => {
  const dispatch = useDispatch();
  const members = useSelector((state) => state.member.members);

  // React App -> Action Creator
  useEffect(() => {
    dispatch(getMember());
  }, [dispatch]);

  console.log('g', members);

  return (
    <div>
      <MemberList members={members} />
    </div>
  );
};

export default MemberContainer;
