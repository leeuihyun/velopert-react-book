# 리액트를 다루는 기술 study

> ### props
>
> > 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값 (컴포넌트 자신은 props를 읽기 전용으로만 사용 가능)

---

> ### state
>
> > 컴포넌트 내부에서 바뀔 수 있는 값

---

> ## defaultProps and propTypes 꼭 필요한가 ?
>
> > React를 사용하여 큰 규모의 프로젝트를 진행하여 협업을 하게 된다면 어떠한 props가 필요한지 쉽게 알 수 있어 개발 능률이 좋아질 것이다.

---

```java script

 constructor(props){
     super(props);
     this.state = {
         num : 0
     }
 }
```

> 위와 같은 constructor 메소드는 컴포넌트 생성자 메소드이다. 클래스형 컴포넌트에서는 constructor를 작성하면 반드시 호출해야 한다.
> 호출되면 현재 클래스형 컴포넌트가 상속받고 있는 Component 클래스가 지닌 생성자 함수를 호출해 준다.

> 배열 비구조화 할당

```java script

const arr = [1,2];
const [first,second] = arr;

```

---

> ### useState 사용법

```java script

const [message,setMessage] = useState('');

```

> 위와 같은 형식으로 작성하며, useState함수를 호출하면 첫번째 원소는 현재 상태, 두번째 원소는 상태를 바꾸어주는 함수이다.(setter)
>
> > 클래스 컴포넌트에서는 사용이 안된다. const Say = () => {} 함수 컴포넌트는 사용 가능

---

> (ex)

```java script

<div
    ref = {ref = {this.divBox = ref}}
></div>


<ScrollBox ref={(ref) => (this.scBox = ref)} />
<button onClick={() => this.scBox.scrollToBottom}>Button</button>

```

> > 마치 id 를 주는 것처럼 직접적으로 DOM에 접근할때 사용한다 ex ) focus 등등

---

```java script

import { useState } from "react";

const IterationSample = () => {
  const [names, setNames] = useState([
    { id: 1, text: "눈사람" },
    { id: 2, text: "겨울" },
    { id: 3, text: "눈" },
    { id: 4, text: "바람" },
  ]);
  const [next_id, setId] = useState(names.length);
  const [next_text, setText] = useState("");
  const onChange = (e) => {
    setText(e.target.value);
  };
  const onClick = (e) => {
    setId(next_id + 1);
    const next = names.concat({
      id: next_id,
      text: next_text,
    });
    setNames(next);
    setText("");
  };
  const list = names.map((item) => <li key={item.id}>{item.text}</li>);
  return (
    <div>
      <input type="text" onChange={onChange} />
      <button onClick={onClick}>button</button>
      <ul>{list}</ul>
    </div>
  );
};

export default IterationSample;

```

> 위의 코드와 같이 useState를 이런식으로 사용할 수도 있다 데이터 추가 버전.

---

> ### useEffect

> > useEffect 는 클래스형 컴포넌트의 componentDidMount와 componentDidUpdate 를 합친 형태로 봐도 무방하다
> > componentDidMount와 componentDidUpdate 의 의미는 각각 첫렌더링을 마친후와 업데이트될 때 (props,state) 호출되는 함수이다.
> > useEffect를 마운트 될 때만 쓰기 위해서는 함수의 두번째 파라미터에 []빈배열을 넣어주면 된다.(처음 렌더링 될때만 실행이 된다.);
> > 특정 상황에서 useEffect를 하고 싶다면 함수의 두번째 파라미터 []안에 검사하고 싶은 값을 넣으면 된다 (아래와 같다.)

```java script

useEffect(()=>{
    console.log(name);
}, [name]);

```

---

> ### useRef 사용법

```java script
const inputRef = useRef(null);
```

```java script

<input type = "text" placeholder = "Write number" ref = {inputRef}>

```

> > 위와 같은식으로 input 에 ref를 설정해주면 후에 inputRef.current.focus() 로 포커스를 옮기거나 다른 기능들을 할 수 있다.

---

> ### css

> > sass, scss, CSSModule, js styling

---

> ### 일정 관리 프로젝트 (Simple)
>
> TodoTemplate.js : 화면을 가운데 정렬 시키며 일정관리를 보여준다.

> TodoInsert.js : 새로운 항목 입력 및 추가 가능 컴포넌트

> TodoListItem.js : 각 할 일의 정보를 보여주는 컴포넌트, todo 객체를 props로 받아와 상태에 따라 달라지는 스타일UI를 구성한다.

> TodoList.js : todos 배열을 props로 받아와서 array의 함수를 이용하여 여러개의 TodoListItem 컴포넌트로 나누어 구성한다.

> TodoTemplate.js에서 생각해야할 부분은 TodoTemplate div는 className으로 제목과 본문을 나누고 App.js 에서 호출한 TodoTemplate의 children을 props로 받아서 본문(클래스네임)에서 보여준다

> App.js 에서 함수들을 만들어주고 props로 TodoInsert and TodoTemplate에 함수들을 props로 전달한다.
> 하위 컴포넌트에서 받은 props를 이용하여 처리를 해준다.

---

> ### SPA

> SPA => Single Page Application 의 약자이다.

> Single Page 라고 해서 화면은 한 종류가 아니다. 페이지에는 주소상태에 따라 다양한 화면을 보여줄 수 있음
> 다른 화면을 다른 주소에 보여주는 것을 [라우팅] 이라고 한다.
> 터미널에 yarn add react-router-dom
> react에 라우터를 적용할 때는 react-router-dom src/index.js파일의 <App/>을 BrowserRouter 라는 컴포넌트를 사용하여 감싸면 된다.
> 찾은 오류 : react-router-dom 이 버전이 최신화가 되면서 yarn add react-router-dom이 아닌 yarn add react-router-dom@5.3.0
> 이렇게 버전을 다운그레이드 시켜서 진행했다.

---

> ### Route 기본 설정

```java script

<Route path="/" component={Home} exact={true} />
<Route path={["/about", "/info"]} component={About} />

```

> ### Link 기본 설정

> > <Link to = "경로"></Link>

---

> ### Link와 params 를 이용

> [Profile.js]

```java script
<Route path = "/profile/:username" component = {Profile}/>
<Link to = "/profile/vanc">이의현 link</Link>

```

> [App.js]

```java script

const data = {
  vanc : {
    name : "이의현",
    desc : "리액트를 사용하는 유저입니다",
  }
};
function Profile({match}){
  const {username} = match.params;
  const profile = data[username];
  if(!profile) {
    return <div> 존재 하지 않습니다</div>
  }
  ...
}

```

---

> ### URL 쿼리

> > url 쿼리를 사용하기 위해서는 yarn add qs // 해당 라이브러리를 설치해야 한다.

> ### 외부 api 받아오기 async await axios 사용

```java script

import React from 'react';
import { useState } from 'react';
import axios from 'axios';

function App() {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49',
      );
      setData(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      {data && (
        <textarea
          rows={7}
          value={JSON.stringify(data, null, 2)}
          readOnly={true}
        />
      )}
    </div>
  );
}

export default App;


```

---

> ### news-api

> > NewsList.js

```java script

import React from 'react';
import NewsItem from './NewsItem';
import styled from 'styled-components';
import { useState, useEffect } from 'react';
import axios from 'axios';

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

function NewsList({ category }) {
  const [articles, setArticle] = useState(null);
  const [loading, setLoading] = useState(false);
  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get(
        'https://newsapi.org/v2/top-headlines?country=kr&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49',
      );
      setArticle(response.data.articles);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    setLoading(true);
    const query = category === 'all' ? '' : `&category=${category}`;
    axios
      .get(
        `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=d5acc892bd7744ffbc8d2bcb88f9be49`,
      )
      .then((res) => {
        setArticle(res.data.articles);
      })
      .catch((err) => {
        console.log(err);
      });
    setLoading(false);
    //fetchData();
  }, [category]);
  if (loading) {
    return <NewsListBlock>대기중...</NewsListBlock>;
  }
  if (!articles) {
    return null;
  }
  return (
    <NewsListBlock>
      {articles.map((article) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
}

export default NewsList;


```

> App.js에서 props로 category 값을 주고 categories.js 에서 누르면 카테고리가 변경되기 때문에,
> 변경된 카테고리에 해당된 뉴스목록들을 query 로 지정해서 받아오게 한다. null 은 all 로 표시해서 따로 누르지 않을 경우는
> 모든 뉴스목록을 가져오게 된다.

---

> ### Redux

> > redux는 리액트 상태를 관리하는 방법 중 하나이다.
> > 소규모 프로젝트에서는 state와 setState를 이용하는 것만으로도 충분하지만 규모가 커지면 상태관리가 번거로워질 수 있다 .
> > ex) App.js 에서 만든 함수 혹은 state를 사용하기 위해서 props를 계속 전달,전달해야되기 때문에 번거로워 질 수 있다(깊이가 깊은, 규모가 큰 프로젝트일 경우)

> react에서 redux를 사용할 때
>
> > 프레젠테이셔널 컴포넌트와 컨테이너 컴포넌트를 분리한다(가장 많이 사용하는 패턴)
> > 프레젠테이셔널 컴포넌트 : 상태 관리가 이루어지지 않고 그저 props를 받아와서 화면에 ui를 보여주기만 하는 컴포넌트
> > 컨테이너 컴포넌트 : 리덕스와 연동되어 있는 컴포넌트로 리덕스로부터 상태를 받아 오기도 하고 리덕스 스토어에 액션을 디스패치하기도 한다.
> >
> > > (이러한 패턴이 필수는 아니지만 유지보수와 재사용성이 높아진다.)
>
> > redux를 사용하기 위한 흐름은 다음과 같다.
> > 우선 프레젠테이셔널 컴포넌트를 만들어서 틀을 잡는다.
> > 이제 Ducks 패턴을 사용하여 리듀서를 작성한 코드를 쓴다 => 리듀서를 작성한 코드를 '모듈'이라고 한다.
> >
> > 1.  아래의 간단한 코딩과 같이 액션 타입을 정의한다.

```java script
const INCREASE = 'module/INCREASE';
const DECREASE = 'module/DECREASE';
```

---

> > 2.  위와 같이 정의한 후 액션 생성 함수를 만든다. 맨 마지막 insert 액션 생성 함수와 같이 매개변수를 넣어서 사용가능하다.

```java script

export const increase = () => ({
  type : INCREASE
})
export const decrease = () => ({
  type : DECREASE
})
export const insert = (text) = ({
  type : INSERT,
  todo : [
    id : id++,
    text,
    done : false
  ]
});
```

> > > 이제는 리액트 애플리케이션에 리덕스를 적용할 차례이다.
> > > src 의 index.js에서 {createStore}를 이용하여 스토어를 생성한다.

```java script

const store = createStore(rootReducer);

```

> > > Provider 컴포넌트를 사용하여 프로젝트에 리덕스를 적용한다.

---

> ### {useSelector,useDispatch}

```java script

import Todos from "../components/Todos";
import { insert, remove, toggle, onChange } from "../modules/todos";
import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";
import { useCallback } from "react";

/*
function TodosContainer({ input, remove, toggle, onChange, insert, todos }) {
  return (
    <Todos
      todos={todos}
      input={input}
      onRemove={remove}
      onChange={onChange}
      onInsert={insert}
      onToggle={toggle}
    ></Todos>
  );
}
export default connect(
  (state) => ({
    input: state.todos.input,
    todos: state.todos.todos,
  }),
  {
    insert,
    remove,
    toggle,
    onChange,
  }
)(TodosContainer);
*/

function TodosContainer() {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos,
  }));
  const dispatch = useDispatch();
  const onChangeInput = useCallback(
    (input) => dispatch(onChange(input)),
    [dispatch]
  );
  const onInsert = useCallback((todo) => dispatch(insert(todo)), [dispatch]);
  const onRemove = useCallback((id) => dispatch(remove(id)), [dispatch]);
  const onToggle = useCallback((id) => dispatch(toggle(id)), [dispatch]);
  return (
    <Todos
      todos={todos}
      input={input}
      onChange={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    ></Todos>
  );
}

export default TodosContainer;


```

---

> ### MiddleWare

> > middleware ? => 액션을 디스패치했을 때 리듀서에서 이를 처리하기에 앞서 사전에 지정된 작업을 실행한다.
> > 미들웨어는 액션과 리듀서 사이의 중간자라고 볼 수 있다.
> >
> > 기본 구조는 store=>next=>action 형태로 이루어져 있다.

---

> ### redux-thunk

> redux-thunk 는 리덕스를 사용하는 프로젝트에서 비동기 작업을 처리할 때 가장 기본적으로 사용하는 미들웨어이다.
> Thunk란 특정 작업을 나중에 할 수 있도록 미루기 위해 함수 형태로 감싼 것을 의미한다.
> ex ) const addNumber = (x) = >x+1;
> addNumber(1);
>
> > 위와 같이 addNumber를 호출하면 바로 1+1 이 연산된다.
> > But, 이러한 연산 작업을 나중에 미루려면 어떻게 해야 하는가 ?
> > 아래 코드처럼 하면 특정 작업을 나중에 하도록 미룰 수 있다.

```java script

const addOne = (x) => x+1;
function addOneThunk(x){
  const thunk = () => addOne(x);
  return thunk;
}

const go = addOneThunk(1);
setTimeout(()=>{
  const value = go(); //go가 실행되는 시점에 연산
  console.log(value);
}, 1000);

```

> ##### redux-thunk 라이브러리에서 사용할 수 있는 예제 thunk 함수.

```java script

const sampleThunk = () => (dispatch,getState)=>{
  //현재 상태를 참조할 수 있고,
  //새 액션을 디스패치할 수 도 있다.
}

```

> ### 프론트엔드 순서

> 1. yarn add react-router
