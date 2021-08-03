import React,{useReducer} from 'react';
import './App.css';
import SimpleReducer from './Components/SimpleReducer/SimpleReducer';
import ComplexReducer from './Components/ComplexReducer/ComplexReducer';
import GlobalReducer from './Components/GlobalReducer/GlobalReducer';
import Context from './Context/Context';
import FetchReducer from './Components/FetchReducer/FetchReducer';


const initialState = 0;

const reducer = (state,action) => {
  
  switch (action) {
    case 'Plus':
      return state + 1;
    case 'Minus':
      return state - 1;
    default:
      return state;
  }

}


function App() {


  const [count,dispatch] = useReducer(reducer,initialState)

  return (
    <div className="App">
      <SimpleReducer />
      <ComplexReducer />
      <Context.Provider value={{CounterDispatch:dispatch,count:count}}>
         <GlobalReducer/>
      </Context.Provider>
      <FetchReducer/>
    </div>
  );
}

export default App;
