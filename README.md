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

<br><br>

---

## Lifecycle   

React 컴포넌트도 생명주기 Lifecycle을 가짐   
⚡ 탄생 ➡ 변화 ➡ 죽음 ⚡   

탄생 : 화면에 나타나는 것     
Mount

변화 : 업데이트 (리렌더)    
Update

죽음 : 화면에서 사라짐    
UnMount   


### React Component Lifecycle Methods   
Lifecycle마다 시행할 수 있는 메서드를 가짐    

Mount : ComponentDidMount   
Update : ComponentDidUpdate   
Unmount : ComponentWillUnmount    
> 클래스형 컴포넌트에서만 사용 가능   

### ⭐ **React Hooks**   

▫ 함수형 컴포넌트에서 클래스형 컴포넌트의 기능을 낚아채듯이 훔쳐와서 사용 가능하게 하는 도구들      
- useState, useEffect, useRef 등   

▫ Class형 컴포넌트의 길어지는 코드 길이 문제      
▫ 중복 코드, 가독성 문제 등을 해결하기 위해 등장    

<br>

#### useEffect 
▫ 첫 번째 파라미터 : 콜백함수   

▫ 두 번째 파라미터 : Dependency Array (의존성 배열)
- 이 배열 내에 들어있는 값이 변화하면 콜백함수가 수행됨

<br>

🌱 Mount    
``` js
  useEffect(() => {
    console.log("Mount");
  }, []);
```

<br>

🌱 Update   
``` js
  useEffect(() => {
    console.log("Update");
  });
```
> Dependency Array 전달 X 


▫ 감지하고 싶은 값만 감지해서, 해당 값이 변화하는 순간에만 콜백함수 수행 가능
``` js
  useEffect(() => {
    console.log(`count is update : ${count}`)
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`)
  }, [text]);
```
<br>

<details>
<summary>
Lifecycle.js 코드 - Mount, Update
</summary>


``` js
import React, {useEffect, useState} from 'react';

const Lifecycle = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  useEffect(() => {
    console.log("Mount");
  }, []);

  useEffect(() => {
    console.log("Update");
  });

  useEffect(() => {
    console.log(`count is update : ${count}`)
  }, [count]);

  useEffect(() => {
    console.log(`text is update : ${text}`)
  }, [text]);

  return (
  <div style={{padding: 20}}>
    <div>
      {count}
      <button onClick={() => setCount(count+1)}>+</button>
    </div>
    <div>
      <input value={text} onChange={(e) => setText(e.target.value)}/>
    </div>
  </div>
  );
};

export default Lifecycle;
```
</details>

<br>

🌱 UnMount    
``` js
useEffect(() => {
    console.log("Mount");
    
    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount");
    }
  }, []);
```

``` js
{isVisible && <UnmountTest/>}
```

**&&**    
▫ isVisible이 True이면 뒤도 확인해야 하므로 UnmountTest 렌더링 O   
▫ isVisible이 false이면 뒤는 확인 필요 X -> UnmountTest 렌더링 X    

<br>

<details>
<summary>
Lifecycle.js 코드 - Unmount
</summary>

``` js
import React, {useEffect, useState} from 'react';

const UnmountTest = () => {

  useEffect(() => {
    console.log("Mount");
    
    return () => {
      // Unmount 시점에 실행되게 됨
      console.log("Unmount");
    }
  }, []);

  return <div>Unmount Testing Component</div>
};


const Lifecycle = () => {
  const [isVisible, setIsVisible] = useState(false);
  const toggle = () => setIsVisible(!isVisible);

  return (
  <div style={{padding: 20}}>
    <button onClick={toggle}>ON/OFF</button>
    {isVisible && <UnmountTest/>}
  </div>
  );
};

export default Lifecycle;
```
</details>

<br><br>

---

## React에서 API 호출   
> useEffect를 이용하여 컴포넌트 Mount 시점에 API를 호출하고 해당 API의 결과값을 일기 데이터의 초기값으로 이용하기

``` js
  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());
    
    const initData = res.slice(0, 20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })

    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);
```
promise를 반환하는 비동기로 해당 API 주소의 json 파일 가져옴    
데이터 중 20개를 뽑아 필요한 데이터만 매칭하여 입력   
useEffect 활용하여 mount 될 때 API 요청 실행    

<br><br>

## React Developer Tools
구글 확장 프로그램    

Components    
컴포넌트 계층 구조, state, props 등 정보 제공     

Profiler    

<br><br>

---

## 최적화

### ☁ Memoization (연산 최적화)
이미 계산 해 본 연산 결과를 기억 해 두었다가 동일한 계산을 시키면, 다시 연산하지 않고 기억 해 두었던 데이터를 반환 시키게 하는 방법   


``` js
  const getDiaryAnalysis = () => {
    console.log("일기 분석 시작");

    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  };

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis();
```
두 번 동작    
1. mount 시 빈배열
2. API 요청 후 데이터 바뀜 (리렌더)

데이터 수정 시 마다 리렌더 (함수 재실행)    
함수값이 바뀌지 않더라도    
즉, 낭비가 심함

⬇   
**useMemo**   

첫번째 인자 : 콜백함수    
콜백함수가 리턴하는 값을 최적화할 수 있도록 도와줌    

두번째 인자 : 해당 값이 변화할 때만 새로운 값 리턴    


``` js
  const getDiaryAnalysis = useMemo(() => {
    console.log("일기 분석 시작");
    
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return {goodCount, badCount, goodRatio};
  }, [data.length]);

  const {goodCount, badCount, goodRatio} = getDiaryAnalysis;
```

useMemo로 함수를 감싸는 순간 그건 더 이상 함수가 아니라 값 !
> 값을 리턴하므로

<br><br>

### ☁ 컴포넌트 재사용
**React.memo**    
함수형 컴포넌트에게 업데이트 조건을 걺    

고차컴포넌트 : 컴포넌트를 가져와 새 컴포넌트를 반환하는 함수    
똑같은 props를 받으면 리렌더링 X    
> But, 자기 자신의 state가 바뀌는 건 리렌더링 O


``` js
const TextView = ({text} ) => {
  useEffect(() => {
    console.log(`update :: Text : ${text}`);
  })
  return <div>{text}</div>
};

const CountView = ({count}) => {
  useEffect(() => {
    console.log(`update :: count : ${count}`);
  })
  return <div>{count}</div>
};
```

text, count 중 하나만 바뀌어도 두 컴포넌트 모두 리렌더링    

⬇   

``` js
const TextView = React.memo(({text} ) => {
  useEffect(() => {
    console.log(`update :: Text : ${text}`);
  })
  return <div>{text}</div>
});

const CountView = React.memo(({count}) => {
  useEffect(() => {
    console.log(`update :: count : ${count}`);
  })
  return <div>{count}</div>
});
```

<details>
<summary>
OptimizeTest.js 코드 1
</summary>

``` js
import React, { useState, useEffect } from "react";

const TextView = React.memo(({text} ) => {
  useEffect(() => {
    console.log(`update :: Text : ${text}`);
  })
  return <div>{text}</div>
});

const CountView = React.memo(({count}) => {
  useEffect(() => {
    console.log(`update :: count : ${count}`);
  })
  return <div>{count}</div>
});


const OptimizeTest = () => {

  const [count, setCount] = useState(1);
  const [text, setText] = useState("");

  return (
    <div style={{padding: 50}}>
      <div>
        <h2>count</h2>
        <CountView count={count} />
        <button onClick={() => setCount(count+1)}>+</button>
      </div>
      <div>
        <h2>text</h2>
        <TextView text={text} />
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </div>
    </div>
  );
};

export default OptimizeTest;
```

</details>

<br><br>

<details>
<summary>
OptimizeTest.js 코드 2
</summary>

``` js
import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count}) => {
  useEffect(() => {
    console.log(`counterA Update - count: ${count}`);
  });

  return <div>{count}</div>
});

const CounterB = React.memo(({obj}) => {
  useEffect(() => {
    console.log(`counterB Update - count: ${obj.count}`);
  });

  return <div>{obj.count}</div>
});


const OptimizeTest = () => {

  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{padding: 50}}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count}/>
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button onClick={() => setObj({
          count: obj.count,
        })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

</details>

A 버튼 : A, B 둘 다 리렌더 X    
B 버튼 : B 컴포넌트 리렌더 O    

obj (객체) - 얕은 비교

#### 객체를 비교하는 방법   
얕은 비교 : 객체의 주소에 의한 비교 (값 X)    

``` js
let a = { count: 1 };
let b = { count: 1 };

if (a === b) {
  console.log("EQUAL");
} else {
  console.log("NOT EQUAL");
}
``` 
➡ NOT EQUAL    

<br>

``` js
let a = { count: 1 };
let b = a;

if (a === b) {
  console.log("EQUAL");
} else {
  console.log("NOT EQUAL");
}
``` 
➡ EQUAL  
> 같은 객체를 가리킴

``` js
React.memo(CounterB, areEqual);
```
CounterB는 areEqual에 판단에 따라 리렌더링 할지말지 결정하게 되는 메모화된 컴포넌트가 됨    

<details>
<summary>
OptimizeTest.js 코드 2
</summary>

``` js
import React, { useState, useEffect } from "react";

const CounterA = React.memo(({count}) => {
  useEffect(() => {
    console.log(`counterA Update - count: ${count}`);
  });

  return <div>{count}</div>
});

const CounterB = ({obj}) => {
  useEffect(() => {
    console.log(`counterB Update - count: ${obj.count}`);
  });

  return <div>{obj.count}</div>
};

const areEqual = (prevProps, nextProps) => {
  // 이전 프롭스와 현재 프롭스가 같으면 리렌더링 일으키지 않음
  // 다르면 리렌더링을 일으킴
  if (prevProps.obj.count === nextProps.obj.count) {
    return true;
  } 
  return false;
}

const MemoizedCounterB = React.memo(CounterB, areEqual);

const OptimizeTest = () => {

  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{padding: 50}}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count}/>
        <button onClick={() => setCount(count)}>A button</button>
      </div>
      <div>
        <h2>Counter B</h2>
        <MemoizedCounterB obj={obj} />
        <button onClick={() => setObj({
          count: obj.count,
        })}>B button</button>
      </div>
    </div>
  );
};

export default OptimizeTest;
```

</details>


<br><br>

### 컴포넌트 최적화

✨ **useCallback**     

두 번째 인자로 전달한 dependency array 안에 있는 값이 변화하지 않으면, 첫 번째 인자로 전달한 콜백함수를 계속 재사용할 수 있게 해줌    


함수형 업데이트   
setData 에 함수를 전달   

``` js
  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content, 
      emotion,
      created_date,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);
```

<br><br>

## 업그레이드 ❕ 

### 1️⃣ 상태 변화 로직 분리하기
상태 변화 처리 함수
- onCreate
- onEdit
- onRemove

✨ **useReducer**    
컴포넌트에서 상태변화 로직 분리
(컴포넌트 가볍게 작성 가능) 

▫ 0번째 인덱스 : state    
▫ 1번째 인덱스 : 상태를 변화시키는 액션을 발생시키는 함수   
▫ reducer (첫 번째 인자) : 일어난 상태변화를 처리    
▫ 두 번째 인자 : state의 초기값   

dispatch가 호출되며 전달된 객체 = 액션 객체   
(상태변화를 설명할 객체)    

``` js
const reducer = (state, action) => {
  switch(action.type) {
    case 'INIT' : {
      return action.data;
    }
    case 'CREATE' : {
      const created_date = new Date().getTime();
      const newItem = {
        ...action.data,
        created_date
      }
      return [newItem, ...state];
    }
    case 'REMOVE' : {
      return state.filter((it) => it.id !== action.targetId);
    }
    case 'EDIT' : {
      return state.map((it) => 
      it.id === action.targetId ? 
      {...it, content:action.newContent} : it
      );
    }
    default :
      return state;
  }
}
```

``` js
function App() {

  const [data, dispatch] = useReducer(reducer, [])

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      'https://jsonplaceholder.typicode.com/comments'
    ).then((res) => res.json());
    
    const initData = res.slice(0, 20).map((it) => {
      return {
        author : it.email,
        content : it.body,
        emotion : Math.floor(Math.random() * 5)+1,
        created_date : new Date().getTime(),
        id : dataId.current++
      }
    })

    dispatch({type: 'INIT', data: initData});
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((author, content, emotion) => {

    dispatch({type: 'CREATE', data: {author, content, emotion, id:dataId.current}})

    dataId.current += 1;
  }, []);

  const onRemove = useCallback((targetId) => {
    dispatch({type: 'REMOVE', targetId})
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    dispatch({type: 'EDIT', targetId, newContent})
  }, []);
  ...
};
```


<br><br>

### 2️⃣ 컴포넌트 트리에 데이터 공급

그냥 거쳐가기만 하는 Prop들이 존재함  
-> 코드 작성, 수정에 악영향

props 드릴링    


![image](https://user-images.githubusercontent.com/93974908/210584067-aa23aa29-156f-4ca6-9eaa-9e17014fa6ca.png)

공급자 컴포넌트의 자식 노드 영역 = Context (문맥)   

▫ Context 생성    
``` js
const MyContext = React.createContext(defaultValue);
```

▫ Context Provider를 통한 데이터 공급   
``` js
<MyContext.Provider value={전역으로 전달하고자 하는 값}>
  {이 context 안에 위치할 자식 컴포넌트들}
</MyContext.Provider>
```
> children으로 컴포넌트 전달    

▫ 자식 컴포넌트 수 제한 X   



> export
> - 여러개 사용 O
> - 비구조 할당을 통해서만 import 가능
>
> export default
> - 하나만 사용 O


✨ **useContext**    

▫ prop 전달 X   
▫ hooks의 context 에서 확인 가능    

▫ 함수 또한 context로 공급 O    

state가 바뀔 때마다 리렌더링되기 때문에 value에 X  
새로운 DiaryDispatchContext 생성    

``` js
export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={memoizedDispatches}>
        ...
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
```

<br><br>

---

# 😋 Page Routing  

**Routing**   
▫ 어떤 네트워크 내에서 통신 데이터를 보낼 경로를 선택하는 일련의 과정   

▫ Router : 데이터의 경로를 실시간으로 지정해주는 역할을 하는 무언가   

▫ Route + ing : 경로를 정해주는 행위 자체와 그런 과정들을 다 포함하여 일컫는 말   

> 카카오톡을 통해 메세지를 여러 경로를 통해 보내는 것  

<br>

Page Routing

▫ 인터넷을 사용해 웹사이트 접속 : 브라우저를 통해 웹 서버에 경로의 요청을 날리고 웹 문서를 받아보는 과정    
> /home : Home.html   
> /mypage : Mypage.html   

▫ 요청에 명시된 경로에 따라 알맞은 페이지를 선택하게 하는 과정    

▫ 웹 서버가 요청에 명시되어 있는 경로에 따라 알맞은 페이지를 선택하고 그 페이지를 반환해서 사용자가 그 페이지에 접속하는 과정 자체    

<br>

MPA (Multipage Application)   
- 페이지가 여러 개
- 각각의 페이지 이동마다 새로운 페이지를 요청
- 페이지 깜빡이며 이동

SPA (Single Page Application) - react   
- 페이지가 하나
- 페이지 전환이 빠름
- 페이지 이동 시 서버에 데이터만 요청

CSR (Client Side Rendering)   

<br><br>

### react router  
> 설치 시 @ 붙여서 버전 명시 

```
$ npm install react-router-dom@6
```
Route 컴포넌트 : 실질적으로 url 경로와 컴포넌트 매핑    

Routes 안 부분만 바뀜   
모든 페이지에 나타나는 요소 사용 -> Routes 바깥   

``` js
<a href={"/new"}>NEW로 이동</a>
```
사용 시 페이지 새로고침 O  -> SPA의 빠른 페이지 이동 (쾌적한 사용자 경험) 사용 불가   
> a태그로 페이지 이동 -> 외부 페이지로 나갈 때만 사용


``` js
// RouteTest.js

import { Link } from "react-router-dom";

const RouteTest = () => {
  return (
    <>
      <Link to={"/"}>HOME</Link>
      <br />
      <Link to={"/diary"}>DIARY</Link>
      <br />
      <Link to={"/new"}>NEW</Link>
      <br />
      <Link to={"/edit"}>EDIT</Link>
    </>
  );
};

export default RouteTest;
```

``` js
// App.js

import { BrowserRouter, Route, Routes } from "react-router-dom";

...

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h2>App.js</h2>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/new" element={<New />} />
          <Route path="/edit" element={<Edit />} />
          <Route path="/diary" element={<Diary />} />
        </Routes>
        <RouteTest />
      </div>
    </BrowserRouter>
  );
}
```

<br><br>

### React Router V6
React에서 CSR 기반의 페이지 라우팅을 할 수 있게 해주는 라이브러리   

1️⃣ Path Variable   
- useParams

``` js
const {id} = useParams();
```


2️⃣ Query String    
- useSearchParams
- 웹 페이지에 데이터를 전달하는 가장 간단한 방법
- `/edit?id=10&mode=dark`
- 두 개의 인자로 반환 받을 수 있음 
  - 첫 번째 인자 : get을 통해 전달 받은 쿼리 스트링을 꺼내 쓸 수 있음
  - 두 번째 인자 : 첫 번째 인자를 바꿀 수 있음 

``` js
const [searchParams, setSearchParams] = useSearchParams();
const id = searchParams.get('id');
const mode = searchParams.get('mode');

<button onClick={() => setSearchParams({who: "winter"})}>QS 바꾸기</button>
```

3️⃣ Page Moving   
- useNavigate

``` js
const navigate = useNavigate();

<button onClick={() => navigate("/home")}>HOME으로 가기</button>
<button onClick={() => navigate(-1)}>뒤로 가기</button>
```

<br><br>

---

## 프로젝트 진행   
1. 폰트 세팅
   1. font-family : 가장 마지막꺼 적용 / 같은 줄일 때는 왼쪽꺼 적용
2. 레이아웃 세팅
   1. 모든 페이지에 반영되는 레이아웃
   2. @media : 반응형
3. 이미지 에셋 세팅
   1. public/assets
   2. process.env.PUBLIC_URL : 어떤 위치에 있든 `/public` 디렉토리를 가리킴
``` js
const env = process.env;
env.PUBLIC_URL = env.PUBLIC_URL || "";
```
> env.PUBLIC_URL에 env.PUBLIC_URL이 존재하면 담고, 아니면 비워라

``` js
<img src={process.env.PUBLIC_URL + `/assets/emotion1.png`} />
```


4. 공통 컴포넌트 세팅
- UI 요소가 어떤 기준으로 얼마만큼 변화하는가를 찾아 패턴화

<details>
<summary>버튼</summary>

``` js
const MyButton = ({text, type, onClick}) => {

  const btnType = ['positive', 'negative'].includes(type) ? type:'default';

  return (
    <button 
      className={["MyButton", `MyButton_${btnType}`].join(" ")} 
      onClick={onClick}
    >
      {text}
    </button>
  )
};

MyButton.defaultProps = {
  type: "default",
};

export default MyButton;
```

``` js
<MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} type={"positive"}/>
<MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} type={"negative"}/>
<MyButton text={"버튼"} onClick={() => alert("버튼 클릭")} />
```
</details>



<detail>
<summary>헤더</summary>

``` js
const MyHeader = ({headText, leftChild, rightChild}) => {
  return (
    <header>
      <div className="head_btn_left">
        {leftChild}
      </div>
      <div className="head_text">
        {headText}
      </div>
      <div className="head_btn_right">
        {rightChild}
      </div>
    </header>
  )
};

export default MyHeader;
```
``` js
<MyHeader 
  headText={"App"} 
  leftChild={
    <MyButton text={'왼쪽 버튼'} onClick={() => alert("왼쪽 클릭")} />} 
  rightChild={
    <MyButton text={'오른쪽 버튼'} onClick={() => alert("오른쪽 클릭")} />} 
/>
```
</detail>

5. 상태 관리 세팅

``` js
const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};
```

``` js
function App() {
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  // CREATE
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };

  // REMOVE
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };

  // EDIT
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: {
        id: targetId,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
  };
  ...
};
```

> return을 하지 않을 거라면 break를 걸어줘야 함   



6. 프로젝트 State Context 세팅

``` js
export const DiaryStateContext = React.createContext();
```

7. 프로젝트 Dispatch Context 세팅
``` js
export const DiaryDispatchContext = React.createContext();
```

<br><br>

> getMonth : 0월부터 시작하므로 + 1을 해줘야 함 

깊은 복사
`const copyList = JSON.parse(JSON.stringify(diaryList))`

JSON.stringify : 배열을 JSON화시켜 문자열로 바꿔줌      
JSON.parse : 문자열로 반환된 것을 다시 배열로 복구함    

parseInt : 문자열을 숫자로 바꿔주는 함수    


getProcessedDiaryList => 최신순, 오래된 순인지 if문으로 분기를 달아 정렬된 리스트를 반환하는 함수   

<br><br>

---

# REDUX 
자바스크립트로 만든 APP을 위한 예측 가능한 저장소     

▫ 하나의 객체 안에 애플리케이션에서 필요한 모든 데이터를 우겨넣는다     
▫ 데이터를 중앙집중적으로 관리    
▫ 외부로부터 차단시켜 dispatcher와 reducer를 통해서만 state 접근 가능   
▫ UNDO와 REDO가 쉬움    
- 각각의 상태 변화가 서로에게 영향을 주지 않는 독립적 상태  

▫ 애플리케이션의 현재 상태 뿐만 아니라 과거의 상태도 확인 가능   
▫ 모듈 리로딩 가능  
- 코드를 작성하면 자동으로 반영 


