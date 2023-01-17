const express = require('express');
const cors = require('cors');

const app = express();

app.use(
  cors({
    origin: '*', // 출처 허용 옵션
    credential: 'true', // 사용자 인증이 필요한 리소스(쿠키 ..등) 접근
  }),
);
