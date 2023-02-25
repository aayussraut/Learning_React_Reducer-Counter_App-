import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { useSelector, useDispatch } from 'react-redux'
import { actions } from './store/index'

function App() {
  //useSelector reads a value from the store state and 
  const counter = useSelector((state) => state.counter)
  const [count, setCount] = useState(0)

  //useDispatch returns the store's dispatch method, which is used to dispatch actions to the store
  const dispatch = useDispatch();
  const increment = () => {
    dispatch(actions.increment()); //dispatches an action to the store 
  }
  const decrement = () => {
    dispatch(actions.decrement());
  }

  const AddBy = () => {
    dispatch(actions.addby(10));
  }


  return (
    <div>
      <h1>Counter App</h1>
      <h2>Counter: {counter}</h2>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={AddBy}>Add By 10</button>
    </div>
  )
}

export default App
