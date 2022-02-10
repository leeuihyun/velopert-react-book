# 리액트를 다루는 기술 study

> props
>
> > 컴포넌트가 사용되는 과정에서 부모 컴포넌트가 설정하는 값 (컴포넌트 자신은 props를 읽기 전용으로만 사용 가능)

---

> state
>
> > 컴포넌트 내부에서 바뀔 수 있는 값

---

> defaultProps and propTypes 꼭 필요한가 ?
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

> useState 사용법

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

> useEffect

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
