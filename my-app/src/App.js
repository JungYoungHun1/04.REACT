// import logo from './logo.svg';
import './App.css'
// import Hello from './Hello';
import UseState1 from './UseState1'
// import UseState2 from './UseState2';
// import View from './View';
// import Parent from './Parent';
// import Child from './Child';
// import UseEffect1 from './UseEffect1';
// import UseEffect2 from './UseEffect2';
import React, { useState, useRef } from 'react'
// import UseRef1 from './UseRef1';
// import UseRef2 from './UseRef2';
// import UseRef3 from './UseRef3';
import News from './News'
import { UseContext1 } from './UseContext1'
import Parent from './Parent'
// import { UseMemo } from 'react';
// import UseMemo1 from './UseMemo1';
// import UseMemo2 from './UseMemo2';
// import UseCallback1 from './UseCallback1';
// import UseCallback2 from './UseCallback2';
// import UseReducer1 from './UseReducer1';
// import UseReducer2 from './UseReducer2';
import Storage from './Storage'
import Inputs from './Inputs'
import CSSModule from './components/CSSModule'
import StyledComponent from './components/StyledComponent'
import Async from './components/Async'
import homeTraining from './homeTraining'
import UserList from './UserList'
import CreateUser from './CreateUser'
// import Exam1 from './exam1'
import Exam02 from './Exam02'
import Header2 from './Header2'
import DayList from './DayList'
import Day from './Day'
import { BrowserRouter, Route, Routes, Link, Outlet } from 'react-router-dom'
import Dept from './components/Dept'
import MyProject from './components/MyProject'
import Sel from './components/Sel'
import Upd from './components/Upd'
import Del from './components/Del'
import Ins from './components/Ins'
import SelEmp from './components/SelEmp'
import InsEmp from './components/InsEmp'
import UpdEmp from './components/UpdEmp'
import DelEmp from './components/DelEmp'
import Emps from './components/Emps'
// import { UseContext2 } from './UseContext1';

// function App() {
//   const title = "React"
//   const basicStyle = {color: "green", fontSize : '40px'}
//   // const basic = {color: "red", fontSize : '30px'}
//   // const {color} = basic;

//   return (
//     // <View>
//     //   <Hello name="react" color="red"></Hello>
//     //   {/* <Hello name="react" color="blue"></Hello> */}
//     //   <Hello color="yellowgreen" important={true}></Hello>
//     //   {/* <div className="item"></div>
//     //   <div style={basicStyle}>{title}</div> */}
//     // </View>

//     // <UseState1/>
//     <UseState2/>
//   );
// }

function App() {
    // const [inputs, setInputs] = useState({
    //     username: '',
    //     email: '',
    // })
    // const { username, email } = inputs
    // const onChange = (e) => {
    //     const { name, value } = e.target
    //     setInputs({
    //         ...inputs,
    //         [name]: value,
    //     })
    // }
    // const [users, setUsers] = useState([])
    // const nextId = useRef(1)

    // const onCreate = () => {
    //     const user = {
    //         id: nextId.current,
    //         username,
    //         email,
    //     }
    //     setUsers(users.concat(user))

    //     setInputs({
    //         username: '',
    //         email: '',
    //     })
    //     nextId.current += 1
    // }

    // const onRemove = (id) => {
    //     setUsers(users.filter((user) => user.id !== id))
    // }

    // return (
    //     <>
    //         <CreateUser
    //             username={username}
    //             email={email}
    //             onChange={onChange}
    //             onCreate={onCreate}
    //         ></CreateUser>
    //         <UserList users={users} onRemove={onRemove}></UserList>
    //     </>
    // )

    // const [page, setPage] = useState()
    return (
        <div>
            {/* <li>
                    <Link to="/">Home</Link>
                </li> */}
            {/* <li>
                    <Link to="/">select</Link>
                </li>
                <li>
                    <Link to="/">insert</Link>
                </li>
                <li>
                    <Link to="/">update</Link>
                </li>
                <li>
                    <Link to="/">delete</Link>
                </li> */}

            <div>
                <Outlet></Outlet>
            </div>
            {/* <button onClick={() => setPage(MyProject)}>All</button>
            <button onClick={() => setPage(Sel)}>Select</button>
            <button onClick={() => setPage(Ins)}>Insert</button>
            <button onClick={() => setPage(Upd)}>Update</button>
            <button onClick={() => setPage(Del)}>Delete</button> */}
            {/* <button onClick={() => setPage(Emps)}>All</button>
            <button onClick={() => setPage(SelEmp)}>Select</button>
            <button onClick={() => setPage(InsEmp)}>Insert</button>
            <button onClick={() => setPage(UpdEmp)}>Update</button>
            <button onClick={() => setPage(DelEmp)}>Delete</button>

            <div children={page}></div> */}
        </div>
        // <BrowserRouter>
        //     <div className="App">
        //         <Header2 />
        //         <Routes>
        //             <Route exact path="/">
        //                 <DayList></DayList>
        //             </Route>
        //             <Route path="/day">
        //                 <Day />
        //             </Route>
        //         </Routes>
        //     </div>
        // </BrowserRouter>
    )
}

export default App
