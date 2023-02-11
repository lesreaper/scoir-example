import React from 'react';
import logo from './logo.svg';
import './App.css';
// import Counter from './components/Counter/Counter';
// import { useAppDispatch, useAppSelector } from './redux/hooks';
// import { counterActions } from './redux/counter/slice';
import { Login } from './components/Login/Login';

function App(): JSX.Element {
  // const dispatch = useAppDispatch();

  // const { value } = useAppSelector((state) => state.counter);

  // const increment = (): void => {
  //   dispatch(counterActions.increment());
  // };

  // const decrement = (): void => {
  //   dispatch(counterActions.decrement());
  // };

  // const incrementAsync = (): void => {
  //   dispatch(counterActions.incrementAsync());
  // };

  // const decrementAsync = (): void => {
  //   dispatch(counterActions.decrementAsync());
  // };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        {/* <Counter
          onIncrement={increment}
          onDecrement={decrement}
          onIncrementAsync={incrementAsync}
          onDecrementAsync={decrementAsync}
          value={value}
        /> */}
        <Login />
      </header>
    </div>
  );
}

export default App;
