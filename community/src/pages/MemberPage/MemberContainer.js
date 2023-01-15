import { connect } from 'react-redux';
import { getMember } from '../../modules/member'

const { useEffect } = React;
const MemberContainer = ({
  Member,
  member
}) => {
  useEffect(() => {
    getMember();
  }, [getMember]);

  return (
    <div>
      <ul>
        {member.map(mem => (
          <li key={mem.id}>
            {mem.nickname}
          </li>
        ))}
      </ul>
    </div>
  )
};

export default connect(
  ({member}) => ({
    member: member.member,
  }),
  {
    getMember,
  }
)(MemberContainer);