const MemberList = ({ members }) => {
  return (
    <ul>
      {members.map((member) => (
        <li key={member.member_id}>
          {member.member_id} : {member.nickname} - {member.email}
        </li>
      ))}
    </ul>
  );
};

export default MemberList;
