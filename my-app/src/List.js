import React from "react";

const List = ({id, name, confirmed, dispatch}) => {
    return(
        <div>
            <span style={{ color : confirmed? "black" : "red",
            textDecoration : confirmed? "none" : "line-through"
            }} onClick={() => {dispatch({type : "con-list", id: {id}})}}>
                {name}</span>
            <button onClick={() => {dispatch({type : "del-list", id : {id}, name : {name}})}}>삭제</button>
        </div>
    )
}

export default List;