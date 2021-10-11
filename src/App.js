import React, { useReducer, useState } from 'react';
import './App.css';
import CounterFour from './hooksComponent/useState Hooks/CounterArray';
import CounterReducer1 from './hooksComponent/useReducer Hooks/Counter1Reducer1';
import CompC from './hooksComponent/useContext Hooks/CompC';
import Counter from './hooksComponent/useState Hooks/Counter';
import CounterThree from './hooksComponent/useState Hooks/CounterObject';
import CounterTwo from './hooksComponent/useState Hooks/CounterPrevState';
import DataFetching from './hooksComponent/useEffect Hook/DataFetching';
import HookMouse from './hooksComponent/useEffect Hook/HookMouseRunEfOnce';
import IntervalClassCounter from './hooksComponent/useEffect Hook/IntervalClassCounter';
import IntervalHooksCounter from './hooksComponent/useEffect Hook/IntervalHooksCounterComMistake';
import MouseCon from './hooksComponent/useEffect Hook/MouseConCleanUp';
import Counter2Reducer1 from './hooksComponent/useReducer Hooks/Counter2Reducer1';
import Counter3Reducer1 from './hooksComponent/useReducer Hooks/Counter3Reducer1';
import CompC1 from './Reducer Context/CompC1';
import CompA1 from './Reducer Context/CompA1';
import CompB1 from './Reducer Context/CompB1';
import Data1Fetching from './Reducer Context/Data1Fetching';
import Data2Fetching from './Reducer Context/Data2Fetching';
import Parent1Component from './hooksComponent/callBack/Parent1Component';
import MemoCounter from './hooksComponent/memo/MemoCounter';
import FocusInput from './hooksComponent/useRef hooks/FocusInput';
import ClassTimer from './hooksComponent/useRef hooks/ClassTimer';
import HookTimer from './hooksComponent/useRef hooks/HookTimer';
import DocTitle1 from './hooksComponent/custom Hook/DocTitle1';
import DocTitle2 from './hooksComponent/custom Hook/DocTitle2';
import Counter1Custom from './hooksComponent/custom Hook/Counter1Custom';
import Counter2Custom from './hooksComponent/custom Hook/Counter2Custom';
import UserForm from './hooksComponent/custom Hook/UserForm';

export const UseContext = React.createContext()
export const ChannelContext = React.createContext()
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) => {
    switch(action) {
        case 'increment':
          return state + 1
        case 'decrement':
          return state - 1
        case 'reset':
          return initialState
        default:
          return state
    }
}

function App() {
  const [text, setText] = useState('watch and see')

function handleChange3(e){
  let value = e.target.value
  setText(value)
  }

  function rep (e){
    e.preventDefault()
    setText(text)
  }
  const [count, dispatch] = useReducer(reducer, initialState)
  return (
    <div className="App">
      <h1>Hello world Hooks is on de way to be learnt right now. and it will take me one week to master it. {text}</h1>
      <Counter />
      <label htmlFor="">Replacer</label>
          <input type="text" onChange={handleChange3} />
          <br /><br />
          <button onClick={rep}>Rep</button>
          <h1>UseSate Hooks</h1>
          <CounterTwo />
          <CounterThree />
          <CounterFour /><br />
          <h1>UseEffect Hooks</h1>
          <HookMouse />
          <MouseCon />
          <IntervalClassCounter />
          <IntervalHooksCounter />
          <DataFetching /><br />
          <h1>UseContext Hook</h1>
          <UseContext.Provider value={'rapooo'}>
            <ChannelContext.Provider value={'my man'}>
              <CompC />
            </ChannelContext.Provider>
          </UseContext.Provider> <br />
          <h1>useReducer Hooks</h1>
          <CounterReducer1 /><br /><br />
          <Counter2Reducer1 /><br /><br />
          <Counter3Reducer1 /><br /><br />
          <h1>context and reducer</h1>
          <CountContext.Provider value={{ countState: count, countDispatch: dispatch }}>
            <h1>Count = {count}</h1>
            <CompA1 />
            <CompB1 />
            <CompC1 />
          </CountContext.Provider>
          <Data1Fetching />
          <Data2Fetching /><br />
          <h1>Call back</h1>
          <Parent1Component /><br />
          <h1>Memo</h1>
          <MemoCounter /><br />
          <h1>useRef Hooks</h1>
          <FocusInput />
          <ClassTimer />
          <HookTimer /><br />
          <h1>Custom Hooks</h1>
          <DocTitle1 />
          <DocTitle2 />
          <Counter1Custom />
          <Counter2Custom />
          <UserForm />
    </div>
  );
}

export default App;
