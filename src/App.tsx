import React, {useState} from 'react';
import './App.css';
import {appContext } from "./context/context";
import {LayoutBlock} from "./components/layout/layout";
import {sizeContext} from "./context/sizeContext";

export const makeGrid = (x:number,y:number)=>new Array(x*y +1).fill( false)

function App() {
  const x =10;
  const y = 30;
  const size=20;
  const defaultContext =  makeGrid(x,y)

  const [points ,setPoints ] = useState(defaultContext);
  const defaultValue = {points, setPoints};
  const [xState , setX] = useState(x)
  const [yState , setY] = useState(y)
  const [sizeState , setSize] = useState(size)
  const sizeValue ={
    xState,
    yState,
    sizeState,
    setX,
    setY,
    setSize
  }

  return (
    <div className="App">
    <appContext.Provider value={defaultValue}>
    <sizeContext.Provider value={sizeValue}>
     <LayoutBlock defaultContext={defaultContext}/>
    </sizeContext.Provider>
    </appContext.Provider>


        {/*<Counter />*/}
    </div>
  );
}

export default App;

