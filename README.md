# React

![react](https://blog.kakaocdn.net/dn/rm5oi/btqHxbs2uS6/om8a9lMmKKJ2ozQ116EZ3K/img.png)

◽ 자바스크립트의 UI 라이브러리    

---

# 자바스크립트

◽ 웹 브라우저에 포함된 자바스크립트 엔진으로 자바스크립트 실행    
➡ 사파리, 오페라, 웨일, 크롬, 엣지   

<br>

▫ 원시 타입 : 한 번에 하나의 값   
- 숫자형, 문자형, 불리언, null

▫ 비원시 타입 : 한 번에 여러 개의 값

<br>

수많은 파일 -> 패키지 - 어떤 파일 ? **package.json**

▫ **scripts** : 많이 사용하는 git 명령어 저장   
▫ **dependencies** : 외부 패키지    
``` json
  "dependencies": {
    "randomcolor": "^0.6.2"
  }
```
> ^ : 해당 버전 이상 

<br><br>

---

# 리액트 
1️⃣ 산탄총 수술 : 중복코드로 인해 모든 페이지를 다 수정해야 하는 경우
   - 공통 요소를 쓰는데 산탄총 수술을 안 하게끔 해야 함
   - ➡ 공통요소를 별도의 파일로 저장하여(컴포넌트) 필요한 곳에서 불러서 사용 (컴포넌트화 방식)

✔ 리액트는 Component 기반의 UI 라이브러리

<br>

2️⃣ 리액트는 선언형 프로그래밍
   - 명령형 프로그래밍 : 절차를 하나하나 다 나열 해야 함
     - jQuery
   - 선언형 프로그래밍 : 그냥 목적을 바로 말함
     - React

<br>

3️⃣ Virtual DOM
  - DOM : 문서 객체 모델 (브라우저가 실제로 사용하는 객체)

<br><br>

---

# Create React App

## 리액트 사용을 도와주는 패키지    
⭐ Webpack    
다수의 자바스크립트 파일을 하나의 파일로 합쳐주는 모듈 번들 라이브러리    

⭐ Babel    
JSX 등의 쉽고 직관적인 자바스크립트 문법을 사용할 수 있도록 해주는 라이브러리   

⬇     
이미 세팅 완료된 패키지 **Boiler Plate**    


**npx** : npm을 좀 더 편리하게 이용 (설치되어 있지 않는 패키지를 한번만 사용)

```
$ npx create-react-app reactexam1
```
> 실패 시 node.js 버전 확인 (최신으로)

`http://localhost:3000/`

![image](https://user-images.githubusercontent.com/93974908/210176669-4501bc6c-d963-43d6-bd7e-150c8289fb22.png){: width="50" height="50"}

<br>

App.js ➡ index.js    
App 함수가 반환하는 값이 id가 root인 div 아래로 들어감

❓ root는 어디에?     
: public 폴더 내부 index.html 안

#### src 디렉토리
source code가 모여있는 곳 (js, css 등)


### 💛 App.js    
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

<최상위 태그 대체 방법>   
① React.Fragment      
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
② 또는 빈태그   
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

**class -> className**


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


▫ 예시 : Counter     
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

▫ 컴포넌트는 자신이 가진 상태가 변화하면 화면을 rerender한다 (함수를 재호출한다)    

▫ 여러 개의 state를 하나의 컴포넌트가 가질 수 O   

<br><br>

## Props
컴포넌트에 데이터를 전달하는 방법   

▫ 스프레드 연산자로 props 전달 O    
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

▫ 객체로 전달됨 -> 점문법(.)으로 사용   
``` js
const Counter = (props) => {
  
  const [count, setCount] = useState(props.initialValue);

  ...
}
```

▫ 비구조 할당으로도 받을 수 있음    

``` js
const Counter = ({initialValue}) => {

  const [count, setCount] = useState(initialValue);

  ...
}
```

▫ 제대로 전달받지 못했을 경우, default 값을 설정하여 에러 방지    
``` js
Counter.defaultProps = {
  initialValue : 0,
};
```


▫ 동적인 데이터도 전달 O    
``` js
const OddEvenResult = ({ count }) => {
  return <>{count % 2 === 0 ? "짝수" : "홀수"}</>
}

export default OddEvenResult;
```

▫ props 로 컴포넌트 자체도 전달 가능    

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
// Container.js

const Container = ({children}) => {
  return (
  <div style={{margin: 20, padding: 20, border: "1px solid grey" }}>
    {children}
  </div>
  );
};

export default Container;
```



<br><br>

---

# SimpleDiary 연습
1️⃣ 사용자 입력 및 배열 리스트 처리하기   
2️⃣ React Lifecycle과 API   
3️⃣ ReactApp 프로처럼 성능 최적화하기 with 도구 사용    
4️⃣ React 컴포넌트 트리에 전역 데이터 공급하기    

<br><br>

### 📖 DiaryEditor 컴포넌트
작성자    
일기 본문   
감정 점수   

<br>

`onChange={(e)=>{}}` : 전달받은 이벤트 객체 e

value ➡ state 네임   
onChange ➡ e.target.value  

``` js
// DiaryEditor.js

import { useState } from "react";

const DiaryEditor = () => {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
          value={author} 
          onChange={(e)=>{
            setAuthor(e.target.value);
          }}
        />
      </div>
      <div>
        <textarea
          value={content} 
          onChange={(e)=>{
            setContent(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
```

▫ 동작이 비슷한 state들은 하나로 묶어줄 수 있음
``` js
// DiaryEditor.js

import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  })

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
          name="author"
          value={state.author} 
          onChange={(e)=>{
            setState({
              author: e.target.value,
              content: state.content,
            });
          }}
        />
      </div>
      <div>
        <textarea
          value={state.content} 
          onChange={(e)=>{
            setState({
              author: state.author,
              content: e.target.value
            });
          }}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
```

▫ 너무 많을 때 => spread 연산자 사용 O    
```js
setState({
  ...state,
  author: e.target.value,
})
```
❗ 원래의 state를 먼저 펼쳐주고 변경하고자 하는 property를 마지막에 작성 !! (순서 주의 !!) ❗  


▫ handleChangeState 하나로 onChange 동시 처리 
> name이 있어야 함 !!     

``` js
import { useState } from "react";

const DiaryEditor = () => {
  const [state, setState] = useState({
    author: "",
    content: "",
  });

  const handleChangeState = (e) => {
    setState({
      ...state,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
          name="author"
          value={state.author} 
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          name="content"
          value={state.content} 
          onChange={handleChangeState}
        />
      </div>
    </div>
  );
};

export default DiaryEditor;
```


<br><br>

### ⚡ 특정 길이 이상의 input이 들어왔는지 확인    

``` js
  const handleSubmit = () => {
    if (state.author.length < 1) {
      alert("작성자는 최소 1글자 이상 입력해주세요");
      return ;
    } 
    
    if (state.content.length < 5) {
      alert("일기 본문은 최소 5글자 이상 입력해주세요");
      return ;
    }
    
    alert("저장 성공");
  };
```
> alert를 띄우는 것은 사용자 친화적이지 않음 -> focus

<br>

❓ 어떤 DOM 요소에 focus를 줘야할까 ❓       

**useRef**    
React.MutableRefObject : html DOM 요소에 접근하는 기능   

``` js
import { useState, useRef } from "react";

const DiaryEditor = () => {

  const authorInput = useRef();
  const contentInput = useRef();

  ...

  const handleSubmit = () => {
    if (state.author.length < 1) {
      // focus
      authorInput.current.focus();
      return ;
    } 
    
    if (state.content.length < 5) {
      contentInput.current.focus();
      // focus
      return ;
    }

    alert("저장 성공");
  };
  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <div>
        <input 
          ref={authorInput}
          name="author"
          value={state.author} 
          onChange={handleChangeState}
        />
      </div>
      <div>
        <textarea
          ref={contentInput}
          name="content"
          value={state.content} 
          onChange={handleChangeState}
        />
      </div>
      ...
    </div>
  );
};

```

<br><br>

---

## React에서 리스트 렌더링 (CRUD)

### ⚡ Read

new Date() : 시간 객체 생성 (빈 괄호 = 현재 시각)   
getTime() : 숫자로 받음   

``` js
// DiaryList.js

import DiaryItem from './DiaryItem.js';

const DiaryList = ({ diaryList }) => {
  return (
  <div className="DiaryList">
    <h2>일기 리스트</h2>
    <h4>{diaryList.length}개의 일기가 있습니다</h4>
    <div>
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it}/>  
      ))}
    </div>
  </div>
  );
};

DiaryList.defaultProps = {
  diaryList: [],
}

export default DiaryList;
```

> Error : Each child in a list should have a unique "key" prop.   
> 자식 컴포넌트가 key prop을 받아야 함    
> `<div key={it.id}>` 또는 idx    
> but, 인덱스 순서 바뀌었을 경우 문제 생길 수 있음    
> 고유한 아이디로 키를 지정하는 게 훨씬 현명    


``` js
// DiaryItem.js

const DiaryItem = ({author, content, created_date, emotion, id}) => {
  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author} | 감정점수 : {emotion}</span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">{content}</div>
    </div>
  );
};

export default DiaryItem;
```

<br><br>

### ⚡ Create

React는 단방향으로만 데이터가 흐른다    
> 위에서 아래로만


DiaryEditor -> DiaryList에 데이터를 전달하려면 공통 부모에 state를 끌어올려 사용     

![image](https://user-images.githubusercontent.com/93974908/210241416-e9cfe3bb-2830-4145-937e-babed2596e39.png)


Event : 아래에서 위로 (CREATE, UPDATE, DELETE)       
Data : 위에서 아래로    

<br>

``` js
// App.js

import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import { useState, useRef } from 'react';


function App() {
  
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content, 
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  return (
    <div className="App">
      <header className="App-header">
        <DiaryEditor onCreate={onCreate}/>
        <DiaryList diaryList={data}/>
      </header>
    </div>
  );
}

export default App;
```

``` js
// DiaryEditor.js

const DiaryEditor = ({onCreate}) => {

  ...
  const handleSubmit = () => {
    if (state.author.length < 1) {
      // focus
      authorInput.current.focus();
      return ;
    } 
    
    if (state.content.length < 5) {
      contentInput.current.focus();
      // focus
      return ;
    }

    onCreate(state.author, state.content, state.emotion);
    alert("저장 성공");
    setState({
      author: "",
      content: "",
      emotion: 1,
    })
  };
  ...
};
```
> 함수를 prop으로 받음    


<br><br>

### ⚡ Delete

▫ 삭제 버튼 : 각각의 아이템에 만듦 ➡ DiaryItem    

▫ onRemove 전달 : App.js ➡ DiaryList.js ➡ DiaryItem.js   

``` js
// App.js

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  <DiaryList onRemove={onRemove} diaryList={data}/>
```
⬇
``` js
// DiaryList.js

const DiaryList = ({ onRemove, diaryList }) => {
  ...
      {diaryList.map((it) => (
        <DiaryItem key={it.id} {...it} onRemove={onRemove}/>  
      ))}
  ...
};
```

⬇
``` js
// DiaryItem.js

const DiaryItem = ({onRemove, author, content, created_date, emotion, id}) => {
  return (
    ...
      <button onClick={() => {
          if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
            onRemove(id);
          }
        }}
      >
        삭제하기
      </button>
    </div>
  );
};
```
<br>

▫ 함수가 너무 길다 -> 밖으로 빼서 사용

``` js
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  }

  ...
  <button onClick={handleRemove}>
    삭제하기
  </button>
  ...
```


<br><br>

### ⚡ Update

``` js
// DiaryItem.js

import { useRef, useState } from "react";

const DiaryItem = ({
  onEdit,
  onRemove, 
  author, 
  content, 
  created_date, 
  emotion, 
  id
}) => {

  const [isEdit, setIsEdit] = useState(false);
  const toggleIsEdit = () => setIsEdit(!isEdit);

  const [localContent, setLocalContent] = useState(content);
  const localContentInput = useRef();

  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  const handleQuitEdit = () => {
    setIsEdit(false);
    setLocalContent(content);
  };

  const handleEdit = () => {
    if (localContent.length < 5) {
      localContentInput.current.focus();
      return;
    }

    if (window.confirm(`${id}번째 일기를 수정하시겠습니까?`)){
      onEdit(id, localContent)
      toggleIsEdit();
    }

  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author} | 감정점수 : {emotion}</span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit ? (
          <>
            <textarea 
              ref={localContentInput}
              value={localContent}
              onChange={(e) => setLocalContent(e.target.value)}
            />
          </>
        ) : (
          <>{content}</>
        )}
      </div>

      {isEdit ? (
        <>
          <button onClick={handleQuitEdit}>수정 취소</button>
          <button onClick={handleEdit}>수정 완료</button>
        </>
      ) : (
        <>
          <button onClick={handleRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button>
        </>
      )}
    </div>
  );
};

export default DiaryItem;
```
① isEdit : 수정 상태 여부를 나타냄 (true - 수정 중 / false)   

② toggleIsEdit : isEdit 값을 반전하는 함수    

③ localContent : 수정하는 내용값 (현재 컴포넌트에서의 상태)   

④ handleQuitEdit : 수정 취소 ➡ isEdit=false, localContent=content(원래 내용)   

⑤ handleEdit    
- 작성 시처럼 길이가 5 미만이면 focus 
- onEdit으로 수정 - App.js로부터 온 함수
- toggleIsEdit로 수정창 닫음  

> focus를 위해 localContentInput로 DOM 요소 접근

<br>

**onEdit** : 수정 대상이라면 content 를 교체 / 아니라면 원래 상태 유지   
``` js
// App.js

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => 
      it.id === targetId ? {...it, content: newContent} : it
      )
    );
  };
```
