# React

![react](https://blog.kakaocdn.net/dn/rm5oi/btqHxbs2uS6/om8a9lMmKKJ2ozQ116EZ3K/img.png)

◽ 자바스크립트의 UI 라이브러리    

---

# 자바스크립트

◽ 웹 브라우저에 포함된 자바스크립트 엔진으로 자바스크립트 실행    
➡ 사파리, 오페라, 웨일, 크롬, 엣지   


원시 타입 : 한 번에 하나의 값   
- 숫자형, 문자형, 불리언, null


비원시 타입 : 한 번에 여러 개의 값


---

수많은 파일 -> 패키지 - 어떤 파일 ? package.json

scripts : 많이 사용하는 git 명령어 저장   
dependencies : 외부 패키지    
``` json
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
```
> ^ : 해당 버전 이상 

---

# 리액트 
1. 산탄총 수술 : 중복코드로 인해 모든 페이지를 다 수정해야 하는 경우
   - 공통 요소를 쓰는데 산탄총 수술을 안 하게끔 해야 함
   - ➡ 공통요소를 별도의 파일로 저장하여(컴포넌트) 필요한 곳에서 불러서 사용 (컴포넌트화 방식)

✔ 리액트는 Component 기반의 UI 라이브러리


2. 
   - 명령형 프로그래밍 : 절차를 하나하나 다 나열 해야 함
     - jQuery
   - 선언형 프로그래밍 : 그냥 목적을 바로 말함
     - React
  
3. Virtual DOM
  - DOM : 문서 객체 모델 (브라우저가 실제로 사용하는 객체)


<br><br>

# Create React App

## 리액트 사용을 도와주는 패키지    
⭐ Webpack    
다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리    

⭐ Babel    
JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리   


⬇     
이미 세팅 완료된 패키지 **Boiler Plate**    


npx : npm을 좀 더 편리하게 이용 (설치되어 있지 않는 패키지를 한번만 사용)

```
$ npx create-react-app reactexam1
```
> 실패 시 node.js 버전 확인 (최신으로)

`http://localhost:3000/`

![image](https://user-images.githubusercontent.com/93974908/210176669-4501bc6c-d963-43d6-bd7e-150c8289fb22.png)

<br>

App.js -> index.js    

App 함수가 반환하는 값이 id가 root인 div 아래로 들어감

root는 어디에? public 폴더 내부 index.html 안

### src 디렉토리
source code가 모여있는 곳 (js, css 등)


App.js    
``` js
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>안녕 리액트</h2>
      </header>
    </div> 
  );
}
```
마치 js + html 을 합쳐놓은 듯함 -> jsx 문법   
이 방법으로 컴포넌트를 만들 수 있다   

``` js
export default App;
```
App 이란 함수를 내보냄 -> 다른 파일에서 `import App from './App';`로 사용 가능    

> 다른 이름으로 내보내기 가능   
> 내보내기는 한번만 가능    

<br><br>

## JSX
리액트의 컴포넌트를 만드는데 유용하게 사용하는 문법   

▫ return 하지 않으면 에러   
``` js
const MyHeader = () => {
  return <header>헤더</header>
};

export default MyHeader;
```

▫ 최상위 컴포넌트에서 불러와 사용해줘야 화면에 등록됨     
``` js
function App() {
  return (
    <div className="App">
      <MyHeader/>
      <header className="App-header">
        <h2>안녕 리액트</h2>
      </header>
      <MyFooter/>
    </div> 
  );
}
```

▫ 닫는 태그 필요    
a, br, img 등 html에서 닫는 태그 없이 사용한 태그들 -> `<br />` self-closing tag    

▫ 모든 요소를 감싸는 가장 바깥의 태그 == 최상위 태그 필수 !!  
최상위 태그 대체 방법 ->  
React.Fragment      
``` js
import React from 'react';

function App() {
  return (
    <React.Fragment>
      ...
    </React.Fragment>
  );
}
```
또는 빈태그   
``` js
function App() {
  return (
    <>
      ...
    </>
  );
}
```

> 리액트의 기능을 이용하지 않는 컴포넌트에서는 굳이 리액트 import 필요 X  

<br><br>

## CSS 적용     

class -> className


▫ css 파일 import 하여 사용 가능    
``` js
import './App.css';
```

▫ 인라인 스타일링   
``` js
function App() {

  const style = {
    App : {
      backgroundColor: "black",
    },
    h2 : {
      color: "red",
    },
    bold_text : {
      color: "green"
    }
  };

  return (
    <div className="App" style={style.App}>
      <MyHeader/>
      <header className="App-header">
        <h2 style={style.h2}>안녕 리액트</h2>
        <b style={style.bold_text} id="bold_text">React.js</b>
      </header>
    </div> 
  );
}
```

▫ 조건부 렌더링     
``` js
  const number = 5;

  return (
    <div className="App" style={style.App}>
      <MyHeader/>
      <header className="App-header">
        <b style={style.bold_text} id="bold_text">
          {number}는 : {number % 2 === 0 ? "짝수" : "홀수"}
        </b>
      </header>
    </div> 
  );
```

<br><br>

## 상태 (state)

계속해서 변화하는 특정 상태   
상태에 따라 각각 다른 동작을 함   

ex) 다크 테마   


▫ Counter     
``` js
import React, {useState} from 'react';

const Counter = () => {
  // 0에서 출발
  // 1씩 증가하고
  // 1씩 감소하는
  // count 상태

  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  }

  const onDecrease = () => {
    setCount(count - 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>  
      <button onClick={onDecrease}>-</button>
    </div>
  )
}

export default Counter;
```
rerender    
컴포넌트는 자신이 가진 상태가 변화하면 화면을 rerender한다 (함수를 재호출한다)    

여러 개의 state를 하나의 컴포넌트가 가질 수 O   

<br><br>

## Props
컴포넌트에 데이터를 전달하는 방법   

``` js
import MyHeader from './MyHeader';

function App() {
  const counterProps = {
    a: 1, 
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5,
  }
  
  return (
    <div className="App">
      <MyHeader/>
      <Counter {...counterProps}/>
    </div> 
  );
}
```
스프레드 연산자로 props 전달 O    


객체로 전달됨 -> .구문으로 사용   
``` js
const Counter = (props) => {

  const [count, setCount] = useState(props.initialValue);

  ...
}
```

``` js
const Counter = ({initialValue}) => {

  const [count, setCount] = useState(initialValue);

  ...
}
```
비구조 할당으로도 받을 수 있음    

``` js
Counter.defaultProps = {
  initialValue : 0,
};
```
제대로 전달받지 못했을 경우, default 값을 설정하여 에러 방지    


동적인 데이터도 전달 O    

``` js
const OddEvenResult = ({ count }) => {
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;
```

props 로 컴포넌트 자체도 전달 가능    

``` js
  return (
    <Container>
      <div className="App">
        <MyHeader/>
        <Counter {...counterProps}/>
      </div> 
    </Container>
  );
```

``` js
const Container = ({children}) => {
  return (
  <div style={{margin: 20, padding: 20, border: "1px solid grey" }}>
    {children}
  </div>
  );
};

export default Container;
```