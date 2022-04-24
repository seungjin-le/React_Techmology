# React 기술 연습 저장소.

## 라이브러리
> + #### react-router-dom
> + #### react-router
> + #### node-sass
> + #### axios

## Styling
> + #### Scss

# 학습

---
## React-Hooks
### useState
>useState 는 가장 기본적인 Hooks이며 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있게 해줍니다.  
>useState 는 함수이며 험수가 호출되면 배열을 반환합니다  
>+ 첫번째 원소는 상태값
>+ 두번째 원소는 상태를 설정하는 함수 입니다
>
>useState 에 파라미터를 넣고 호출하면 전달받은 파라미터로 값이 바뀌고 컴포넌트가 정상적으로 리렌더링 됩니다.
>```javascript
>import React,{useState} from 'react';
>
>const Counter = () => {
> // useState 의 초기값을 0으로 설정
> const [counter, setCounter] = useState(0);
> return (
>   <div>
>     <p>현제 카운터 값은{counter}</p>
>     <button onClick={() => setCounter(counter + 1)}>+1</button>
>     <button onClick={() => setCounter(counter - 1)}>-1</button>
>   </div> 
> )
>}
>
>export default Counter;
>```

### useRef
> 리액트에서는 컴포넌트에서도 ref 를 달수 있습니다. 이방법은 주로 컴포넌트 내부에 있는 DOM(Document Object Model)을
> 컴포넌트

### useEffect
> useEffect 는 리액트 컴포넌트가 렌더링될 때마다 특정 장업을 수행하도록 설정할수 있는 Hooks 입니다.
> 라이프 사이클 메소드인 **componentDidMount(완료된 직후 호출되는 메소드)** 와 **componentDidUpdate(업데이트가 되었을때 호출되는 메소드 첫 렌더링때는 호출되지 않음)** 를 합친 행태로 볼수 있습니다.
> useEffect 는 컴포넌트가 화면에 처음 렌더링될 때만 실행되고 그 이후에는 설정함에 따라 다시 실행할 수 있습니다.
> 
>```javascript
>const HooksTest = () => {
> // 텀포넌트가 렌더링 직후 동작합니다
> useEffect(() => {
>   console.log('화면이 렌더링 되었습니다.');
> },[]);
>
> // 컴포넌트가 렝더링 직후 + 배열안에 값이 변경될때마다 동작합니다
> const [value, setValue] = useState(0);
> useEffect(() => {
>   console.log('값이 변경 되었습니다.');
> },[value]);
>
> // 컴포넌트가 UnMount 될때만 동작 
> useEffect(() => {
>   return () => {
>   console.log('컴포넌트가 사라집니다.');
>   }
> },[]);
>
> return <div>useEffect Test</div>
>}
>export default HooksTest;
>```
>useEffect 를 설정하는 방법은  
> 1. 컴포넌트가 렌더링 직후에 한번만 실행 : 두번째 파라미터인 대괄호`[ ]` 안에 특정 값을 넣어주면 그 **값이 변경될 때마다 실행됩니다.**
> 2. 특정 값이 변경될 때마다 실행 : 두번째 파라미터인 대괄호`[ ]` 값을 넣지 않고 빈배열인 상태로 둔다면 **렌더링 직후 한번만 실행이 됩니다.**
> 3. 컴포넌트가 UnMount 될때만 실행 : 두번째 파라미터인 대괄호`[ ]` 를 비우고 useEffect 함수 안에 `return () => {}`추가해 줍니다.