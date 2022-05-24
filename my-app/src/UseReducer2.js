import React, { useCallback, useEffect, useReducer, useRef, useState } from "react";
import List from "./List";

const reducer = (state, action) => {
  // console.log(state, action);
  // console.log(action.name.list);
  switch (action.type) {
    case "add-list":
      console.log(state, action);
      const name = action.name.list;
      const newList = {
        id: (action.id.currentId.current += 1),
        name, //name : name,
        confirmed: true,
      };

      return {
        count: state.count + 1,
        lists: [...state.lists, newList],
      };
    case "del-list":
      return {
        count: state.count - 1,
        lists: state.lists.filter((list) => list.id !== action.id.id),
      };
    case "con-list":
      return {
        count: state.count,
        lists: state.lists.map((list) => {
          if (list.id === action.id.id) {
            return { ...list, confirmed: !list.confirmed };
          }
          return list;
        }),
      };
    default:
      return state;
  }
};

const initialList = {
  count: 1,
  lists: [
    {
      id: 1,
      name: "ramen",
      confirmed: true,
    },
  ],
};

function UseReducer2() {
  const [list, setList] = useState("");
  const currentId = useRef(1);
  const [finalList, dispatch] = useReducer(reducer, initialList);
  // console.log(list);
  // console.log(finalList);
  return (
    <div>
      <h2>물품 리스트</h2>
      <p>총 물품수 : {finalList.count}개</p>
      <input type="text" placeholder="물품을 입력하세요" onChange={(e) => setList(e.target.value)}></input>
      <button
        onClick={() => {
          dispatch({ type: "add-list", id: { currentId }, name: { list } });
        }}
      >
        추가
      </button>
      {finalList.lists.map((list) => {
        // console.log(list.name);
        return <List key={list.id} name={list.name} dispatch={dispatch} id={list.id} confirmed={list.confirmed}></List>;
      })}
    </div>
  );
}

export default UseReducer2;
