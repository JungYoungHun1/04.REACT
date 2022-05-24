import React, { useCallback, useEffect, useReducer, useState } from "react";

const ACTION_TYPES = {
  buy: "buy",
  sell: "sell",
};

const reducer = (state, action) => {
  // console.log("--reducer 동작--");
  // console.log(state, action);
  // if(action.type == "buy"){
  //     return state - action.stock
  // }else if(action.type == "sell"){
  //     return state + action.stock
  // }else {
  //     return state;
  // }

  // switch(action.type){
  //     case "buy" : return state - action.stock
  //     case "sell" : return state + action.stock
  //     default : return state;
  // }

  switch (action.type) {
    case ACTION_TYPES.buy:
      return state - action.stock;
    case ACTION_TYPES.sell:
      return state + action.stock;
    default:
      return state;
  }
  // return action.type == "buy" ? state - action.stock : state + action.stock
};

function UseReducer1() {
  const [number, setNumber] = useState(0);
  const [balance, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <p>잔액 : {balance} 원</p>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000"></input>
      <br />
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.buy, stock: number });
        }}
      >
        매수
      </button>
      <button
        onClick={() => {
          dispatch({ type: ACTION_TYPES.sell, stock: number });
        }}
      >
        매도
      </button>
    </div>
  );
}

export default UseReducer1;
