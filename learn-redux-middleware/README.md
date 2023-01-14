# Redux middleware

😎 네트워크 요청과 같은 비동기 작업 관리에 매우 유용    

- 특정 조건에 따라 액션 무시
- 특정 조건에 따라 액션 정보를 가로채서 변경 후 리듀서에게 전달
- 특정 액션에 기반하여 새로운 액션을 여러 번 디스패치
- 등등



▫ 필요 라이브러리 설치    
```
$ npm add redux react-redux redux-actions
```

<br>

### 미들웨어 기본 구조
``` js
const loggerMiddleware = store => next => action => {
  
};
```

store : 리덕스 스토어 인스턴스    
action : 디스패치된 액션    

next    
> store.dispatch와 비슷한 역할
>
> 차이점 : next(action)을 호출하면 그다음 처리해야 할 미들웨어에게 액션을 넘겨주고, 만약 그다음 미들웨어가 없다면 리듀서에게 액션을 넘겨줌

<br>

## 오픈 소스 커뮤니티의 미들웨어 라이브러리 사용

### redux-logger
```
npm add redux-logger
```
▫ 콘솔에 정보 액션 디스패치 정보 표시     

<br>

### redux-thunk
``` 
npm add redux-thunk
```

▫ 비동기 작업 처리 시 가장 기본적으로 사용하는 라이브러리   
▫ thunk 함수를 만들어 디스패치 가능   

> **thunk**
>
> 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것


<br>

💛 웹 요청 비동기 작업 처리
```
npm add axios
```

<br>

### redux-saga
▫ 비동기 작업 관리    
▫ 함수 형태의 액션을 디스패치하여 미들웨어에서 해당 함수에 스토어의 dispatch와 getState를 파라미터로 넣어서 사용    

**웹 소켓 사용할 때**