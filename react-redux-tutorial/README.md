### 액션 타입 정의    
▫ 대문자로 정의     
▫ '모듈 이름/액션 이름' 

``` js
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
```

<br>

### 액션 생성 함수    

``` js
export const increase = () => ({ type : INCREASE });
export const decrease = () => ({ type : DECREASE });
```

<br>

### 초기 상태와 리듀서 함수
``` js
const initialState = {
  number: 0
};
```

``` js
function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1
      };
    case DECREASE:
      return {
        number: state.number - 1
      };
    default:
      return state;
  }
}

export default counter;
```

▫ export : 여러 개 내보내기 가능    
▫ export default : 단 한개만 내보내기 가능    

▫ 불러오기

``` js
import counter from './counter';
import { increase, decrease } from './counter';
```


<br>

### 루트 리듀서
▫ createStore 함수를 사용하여 스토어를 만들 때는 리듀서를 하나만 사용해야 함 -> 기존의 리듀서를 하나로 합쳐줌   

▫ combineReducers   

> 파일 이름을 index.js로 설정하면 나중에 불러올 때 디렉터리 이름까지만 입력하여 불러올 수 있음

<br>

### 스토어 생성

``` js
// src/index.js
const store = createStore(rootReducer);
```

### Provider 컴포넌트 사용하여 프로젝트에 리덕스 적용

``` js
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import rootReducer from './modules';

const store = createStore(rootReducer);

const root = ReactDOM.createRoot(
  document.getElementById('root'));

root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
```
▫ store을 props로 전달해줘야 함   

<br>

### Redux DevTools 
```
npm install --save redux-devtools-extension
```
▫ 패키지를 설치하더라도 크롬 확장프로그램은 설치해야 함   


<br>

## 리덕스 더 편하게 사용하기

### redux-actions

``` 
npm install --save redux-actions --legacy-peer-deps
```

▫ 