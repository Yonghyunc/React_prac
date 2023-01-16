import axios from 'axios';

// 포스트 목록을 가져오는 비동기 함수
export const getMembersAxios = async () => {
  let members = [];
  const result = await axios({
    url: 'http://13.209.252.39:8080/member',
    method: 'get',
  }).then((res) => {
    members = res.data;
  });
  return members;
};

export const addMemberAxios = async (newMember) => {
  console.log('axios 요청 받기');
  console.log('here', newMember);
  let addedMember = '';
  const result = await axios({
    url: 'http://13.209.252.39:8080/member',
    method: 'post',
    data: {
      email: newMember.email,
      member_id: newMember.member_id,
      nickname: newMember.nickname,
    },
    headers: {
      'x-cors-api-key': 'temp_9f402ec52718327c446ebfb02692317b'
    }
  }).then((res) => {
    addedMember = res.data;
    console.log('addedMember', addedMember);
  }).catch((e) => {
    console.log(e);
  });
  return addedMember;
}