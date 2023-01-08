에러...   

```js
emotion_img: process.env.PUBLIC_URL + `assets/emotion1.png`,
```
로 하면 이미지가 잘 안 뜰거임.... (뜰 수도 있지만)    

```js
emotion_img: process.env.PUBLIC_URL + `/assets/emotion1.png`,
```
꼭 이렇게 하자...

<br><br>

---

## 흔히 발생하는 버그 수정하기    

### 1️⃣ Encountered two children

> 겹치는 키 발생 ?    
> 왜 겹쳤는지 확인

```
react-dom.development.js:86 Warning: Encountered two children with the same key, `1`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.
```
ref 객체의 초기값을 0으로 설정함    
BUT 더미데이터의 아이디값이 1 ~ 5까지 있음    
즉, 초기값을 6부터 시작했어야 함    

### 2️⃣ 오타 -> 버그 발생 
타입스크립트 배우던지 ㅋㅋ    

### 3️⃣ 31일 일기가 안 나옴 

▶ 기존    
``` js
const lastDay = new Date(
  curDate.getFullYear(),
  curDate.getMonth() + 1,
  0
).getTime();
```

▶ 변경    
``` js
const lastDay = new Date(
  curDate.getFullYear(),
  curDate.getMonth() + 1,
  0,
  23,
  59,
  59
).getTime();
```

> 자바스크립트의 시간 객체를 사용해서 시간을 비교할 때, 시분초 까지 활용하여야 함   

<br><br> 

---

## LocalStorage를 일기 데이터베이스로 사용하기    

state의 값은 휘발성 메모리 -> DB에 값 저장    

**Web Storage API**     
브라우저에서 키/값 쌍을 쿠키보다 훨씬 직관적으로 저장할 수 있는 방법 제공   
- SessionStorage
  - 브라우저가 열려있는 동안만 제공  
- LocalStorage 
  - 브라우저를 닫았다 열어도 데이터가 남아있음 
  - 본인의 웹 브라우저에 저장 (개인적 데이터베이스)

객체 저장 시, JSON.stringify를 통해 직렬화 해줘야 함    

``` js
  useEffect(() => {
    localStorage.setItem("item1", 10);
    localStorage.setItem("item2", "20");
    localStorage.setItem("item3", JSON.stringify({value: 30}));
  }, []);
```


기본적으로 localStorage에 들어가는 값은 문자열로 바뀌어 들어감    
즉, 나올 때도 문자열로 바뀌어서 나옴    
꺼내올 때 형변환 필요   

``` js
  useEffect(() => {
    const item1 = localStorage.getItem("item1");
    const item2 = localStorage.getItem("item2");
    const item3 = JSON.parse(localStorage.getItem("item3"));
    console.log({item1, item2, item3});
  }, []);
```

<br>

일기에 대한 작성, 수정 등이 전부 reducer에서 일어남   

``` js
const reducer = (state, action) => {
  let newState = [];
  ...

  localStorage.setItem('diary', JSON.stringify(newState));
  return newState;
};
```

return 전에 localStorage에 저장해줌   

<br><br>

localStorage에 있는 데이터 불러오기   

``` js
  useEffect(() => {
    const localData = localStorage.getItem("diary");
    if (localData) {
      const diaryList = JSON.parse(localData).sort((a, b) => parseInt(b.id) - parseInt(a.id));
      dataId.current = parseInt(diaryList[0].id) + 1;

      dispatch({type: "INIT", data: diaryList});
    }
  }, [])
```


<br><br>

---

## 프로젝트 최적화

React.memo : 컴포넌트를 감싸면 강화된 컴포넌트를 돌려주는 고차 컴포넌트     
memoization 