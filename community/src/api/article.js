import axios from 'axios';

export const getArticlesAxios = async () => {
  let articles = [];
  const result = await axios({
    url: 'http://13.209.252.39:8080/board',
    method: 'get',
  })
  .then((res) => {
    articles = res.data;
  });
  return articles;
};