import React from 'react'
import "./App.css";
import { InNumber } from "./action";
import { DicNumber } from "./action";
import { useSelector, useDispatch } from "react-redux";

const App = () => {
  const myState = useSelector((state) => state.changeNumber)
  const dispatch = useDispatch();

  return (
    <>
      <div className="main-div">
        <div className="container">

          <h1>Increment/Decrement counter</h1>
          <h2>using React and Redux</h2>

          <div className="quantity">
            <a className="quantity__minus" title="Decrement" onClick={() => dispatch(DicNumber(5))}><span>-</span></a>
            <input name="quantity" type="text" className="quantity__input" value={myState}/>
            <a className="quantity__plus" title="Increment" onClick={() => dispatch(InNumber(5))}><span>+</span></a>
          </div>

        </div>
      </div>
    </>
  )
}

export default App

